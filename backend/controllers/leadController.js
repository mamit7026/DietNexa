const Lead = require("../models/Lead");
const User = require("../models/User");

// Helper to build date range filter (Default to past 1 month if none provided or '1m')
function buildDateQuery(fromDate, toDate) {
  const query = {};
  const now = new Date();

  let start = fromDate ? new Date(fromDate) : new Date(now.getFullYear(), now.getMonth() - 1, now.getDate());
  let end = toDate ? new Date(toDate) : now;

  // Ensure end is end of day if only date is passed
  end.setHours(23, 59, 59, 999);

  query.createdAt = {
    $gte: start,
    $lte: end,
  };
  return { query, start, end };
}

// 1. PUBLIC: Create lead from Contact Page or Consultation Modal
async function createPublicLead(request, reply) {
  try {
    const {
      fullName,
      email,
      phone = "",
      subject = "Dietitian Consultation",
      message = "",
      source = "contact_page",
      priority = "medium",
      expectedValue = 7500,
    } = request.body || {};

    if (!fullName || !email) {
      return reply.code(400).send({
        success: false,
        message: "Full name and email are required to submit an inquiry",
      });
    }

    // Auto-assign to an active sales agent if available (round-robin / least busy)
    let assignedUser = null;
    try {
      const activeSales = await User.find({ role: "sales", isActive: true });
      if (activeSales.length > 0) {
        const counts = await Promise.all(
          activeSales.map(async (u) => {
            const count = await Lead.countDocuments({
              assignedTo: u._id,
              status: { $in: ["new", "contacted", "followup_scheduled", "in_discussion"] },
            });
            return { user: u, count };
          })
        );
        counts.sort((a, b) => a.count - b.count);
        assignedUser = counts[0].user;
      }
    } catch (assignErr) {
      console.warn("Could not auto-assign lead:", assignErr.message);
    }

    const newLead = await Lead.create({
      fullName: fullName.trim(),
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      subject: subject.trim(),
      message: message.trim(),
      source,
      priority,
      status: "new",
      expectedValue: Number(expectedValue) || 7500,
      assignedTo: assignedUser ? assignedUser._id : null,
      assignedToName: assignedUser ? assignedUser.name : "Unassigned",
      notes: [
        {
          authorName: "System",
          text: `Inquiry received via ${source.replace(/_/g, " ")} on ${new Date().toLocaleString()}`,
        },
      ],
    });

    return reply.code(201).send({
      success: true,
      message: "Your inquiry has been received! Our nutrition team will get in touch shortly.",
      leadId: newLead._id,
      lead: newLead,
    });
  } catch (error) {
    request.log.error(error);
    return reply.code(500).send({
      success: false,
      message: "Failed to submit lead",
      error: error.message,
    });
  }
}

// 2. GET ALL LEADS (Filtered by Date Range - Default 1 Month, status, priority, assignedTo, source, search)
async function getAllLeads(request, reply) {
  try {
    const {
      status,
      priority,
      assignedTo,
      source,
      search,
      isClient,
      fromDate,
      toDate,
      page = 1,
      limit = 100,
      sortBy = "createdAt",
      sortOrder = "desc",
    } = request.query || {};

    let query = {};

    // Date range filtering (Default 1 Month if provided or custom)
    if (fromDate || toDate) {
      const { query: dateQ } = buildDateQuery(fromDate, toDate);
      Object.assign(query, dateQ);
    }

    // Filter by client conversion state
    if (isClient !== undefined) {
      query["clientProfile.isClient"] = isClient === "true";
    }

    // Role-based scoping: sales agents can filter or see assigned leads
    if (request.user.role === "sales" && (assignedTo === "me" || !assignedTo || assignedTo === "all")) {
      // In sales view, default to their leads or show unassigned pool
      if (assignedTo === "me") {
        query.assignedTo = request.user._id;
      }
    } else if (assignedTo && assignedTo !== "all") {
      if (assignedTo === "unassigned") {
        query.assignedTo = null;
      } else {
        query.assignedTo = assignedTo;
      }
    }

    // Source filter
    if (source && source !== "all") {
      query.source = source;
    }

    // Status filter
    if (status && status !== "all") {
      query.status = status;
    }

    // Priority filter
    if (priority && priority !== "all") {
      query.priority = priority;
    }

    // Search by name, email, phone, subject
    if (search && search.trim()) {
      const searchRegex = new RegExp(search.trim(), "i");
      query.$or = [
        { fullName: searchRegex },
        { email: searchRegex },
        { phone: searchRegex },
        { subject: searchRegex },
      ];
    }

    const sortOptions = {};
    sortOptions[sortBy] = sortOrder === "asc" ? 1 : -1;

    const skip = (parseInt(page) - 1) * parseInt(limit);
    const [leads, total] = await Promise.all([
      Lead.find(query)
        .sort(sortOptions)
        .skip(skip)
        .limit(parseInt(limit))
        .populate("assignedTo", "name email phone role"),
      Lead.countDocuments(query),
    ]);

    return reply.send({
      success: true,
      total,
      page: parseInt(page),
      pages: Math.ceil(total / parseInt(limit)),
      leads,
    });
  } catch (error) {
    request.log.error(error);
    return reply.code(500).send({
      success: false,
      message: "Failed to fetch leads",
      error: error.message,
    });
  }
}

// 3. KANBAN PIPELINE ENDPOINT: Group leads by stages
async function getPipeline(request, reply) {
  try {
    const { fromDate, toDate, assignedTo, source, priority } = request.query || {};

    let query = {};
    if (fromDate || toDate) {
      const { query: dateQ } = buildDateQuery(fromDate, toDate);
      Object.assign(query, dateQ);
    }

    if (request.user.role === "sales" && assignedTo === "me") {
      query.assignedTo = request.user._id;
    } else if (assignedTo && assignedTo !== "all") {
      if (assignedTo === "unassigned") query.assignedTo = null;
      else query.assignedTo = assignedTo;
    }

    if (source && source !== "all") query.source = source;
    if (priority && priority !== "all") query.priority = priority;

    const leads = await Lead.find(query)
      .sort({ stageOrder: 1, updatedAt: -1 })
      .populate("assignedTo", "name email phone role");

    // Pre-organize into Kanban columns (matching 5 stages)
    const columns = {
      new: { id: "new", title: "New", color: "emerald", leads: [], totalValue: 0 },
      qualified: { id: "qualified", title: "Qualified", color: "blue", leads: [], totalValue: 0 },
      proposal: { id: "proposal", title: "Proposal", color: "indigo", leads: [], totalValue: 0 },
      negotiation: { id: "negotiation", title: "Negotiation", color: "amber", leads: [], totalValue: 0 },
      won: { id: "won", title: "Won", color: "purple", leads: [], totalValue: 0 },
      lost: { id: "lost", title: "Lost", color: "gray", leads: [], totalValue: 0 },
    };

    leads.forEach((l) => {
      let st = l.stage || l.status || "new";
      if (st === "contacted") st = "qualified";
      else if (st === "in_discussion") st = "proposal";
      else if (st === "followup_scheduled") st = "negotiation";
      else if (st === "converted") st = "won";

      const colKey = columns[st] ? st : "new";
      columns[colKey].leads.push(l);
      columns[colKey].totalValue += (l.expectedValue || (l.clientProfile?.amountPaid || 7500));
    });

    return reply.send({
      success: true,
      totalCount: leads.length,
      columns,
    });
  } catch (error) {
    return reply.code(500).send({
      success: false,
      message: "Failed to fetch Kanban pipeline",
      error: error.message,
    });
  }
}

// 4. MOVE KANBAN STAGE
async function moveStage(request, reply) {
  try {
    const { id } = request.params;
    const { newStage } = request.body || {};

    const validStages = [
      "new",
      "qualified",
      "proposal",
      "negotiation",
      "won",
      "lost",
      "contacted",
      "in_discussion",
      "followup_scheduled",
      "converted",
    ];
    if (!validStages.includes(newStage)) {
      return reply.code(400).send({ success: false, message: "Invalid pipeline stage" });
    }

    const lead = await Lead.findById(id);
    if (!lead) {
      return reply.code(404).send({ success: false, message: "Lead not found" });
    }

    const oldStage = lead.status;
    lead.status = newStage;
    lead.stage = newStage;

    if ((newStage === "converted" || newStage === "won") && !lead.clientProfile?.isClient) {
      lead.clientProfile = {
        isClient: true,
        convertedAt: new Date(),
        convertedBy: request.user._id,
        planName: lead.subject || "Enterprise Solution",
        durationMonths: 3,
        amountPaid: lead.expectedValue || 7500,
        paymentStatus: "paid",
        startDate: new Date(),
        targetGoal: lead.subject || "General Wellness",
        assignedDietitian: "Dr. Ananya Sen",
      };
    }

    lead.notes.push({
      authorId: request.user._id,
      authorName: request.user.name,
      text: `Pipeline stage moved: '${oldStage.replace(/_/g, " ")}' ➔ '${newStage.replace(/_/g, " ")}'`,
    });

    await lead.save();

    return reply.send({
      success: true,
      message: `Lead moved to ${newStage.replace(/_/g, " ")}`,
      lead,
    });
  } catch (error) {
    return reply.code(500).send({
      success: false,
      message: "Failed to move stage",
      error: error.message,
    });
  }
}

// 5. BULK IMPORT LEADS (CSV / JSON)
async function importLeads(request, reply) {
  try {
    const { leads: importList } = request.body || {};

    if (!Array.isArray(importList) || importList.length === 0) {
      return reply.code(400).send({
        success: false,
        message: "A non-empty list of leads is required for import",
      });
    }

    let inserted = 0;
    const errors = [];

    for (let i = 0; i < importList.length; i++) {
      const item = importList[i];
      if (!item.fullName || !item.email) {
        errors.push(`Row ${i + 1}: fullName and email required`);
        continue;
      }

      await Lead.create({
        fullName: item.fullName.trim(),
        email: item.email.trim().toLowerCase(),
        phone: item.phone ? String(item.phone).trim() : "",
        subject: item.subject ? item.subject.trim() : "Bulk Import Consultation",
        message: item.message ? item.message.trim() : "Imported lead record",
        source: item.source || "manual_entry",
        status: item.status || "new",
        priority: item.priority || "medium",
        expectedValue: Number(item.expectedValue) || 7500,
        assignedTo: request.user._id,
        assignedToName: request.user.name,
        notes: [
          {
            authorName: request.user.name,
            text: `Imported via CSV/JSON on ${new Date().toLocaleString()}`,
          },
        ],
      });
      inserted++;
    }

    return reply.send({
      success: true,
      message: `Successfully imported ${inserted} leads.`,
      inserted,
      errors,
    });
  } catch (error) {
    return reply.code(500).send({
      success: false,
      message: "Failed to import leads",
      error: error.message,
    });
  }
}

// 6. COMPREHENSIVE CRM REPORTS & ANALYTICS
async function getReports(request, reply) {
  try {
    const { fromDate, toDate, pipeline, stage, owner, project, page = 1, limit = 10, search } = request.query || {};
    let query = {};
    let start, end;

    if (fromDate || toDate) {
      const dateRes = buildDateQuery(fromDate, toDate);
      Object.assign(query, dateRes.query);
      start = dateRes.start;
      end = dateRes.end;
    } else {
      start = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);
      end = new Date();
    }

    if (stage && stage !== "all" && stage !== "All Stages") {
      const st = stage.toLowerCase();
      query.$or = [{ status: st }, { stage: st }];
    }
    if (owner && owner !== "all" && owner !== "All Owners") {
      query.assignedToName = new RegExp(owner, "i");
    }
    if (pipeline && pipeline !== "all" && pipeline !== "All Pipelines") {
      query.pipeline = new RegExp(pipeline, "i");
    }
    if (project && project !== "all" && project !== "All Projects") {
      query.project = new RegExp(project, "i");
    }
    if (search && search.trim()) {
      const s = search.trim();
      query.$or = [
        { fullName: new RegExp(s, "i") },
        { company: new RegExp(s, "i") },
        { assignedToName: new RegExp(s, "i") },
        { email: new RegExp(s, "i") },
      ];
    }

    const skip = (parseInt(page) - 1) * parseInt(limit);
    const [deals, totalCount] = await Promise.all([
      Lead.find(query)
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(parseInt(limit))
        .populate("assignedTo", "name email phone role"),
      Lead.countDocuments(query),
    ]);

    // Sales Performance aggregation
    const allSalesUsers = await User.find({ isActive: true });
    const allLeads = await Lead.find(query).populate("assignedTo", "name email");

    const salesPerformance = allSalesUsers.map((user) => {
      const userLeads = allLeads.filter(
        (l) => (l.assignedTo && l.assignedTo._id.toString() === user._id.toString()) || l.assignedToName === user.name
      );
      const converted = userLeads.filter((l) => l.status === "won" || l.status === "converted" || l.clientProfile?.isClient);
      const contacted = userLeads.filter((l) => l.status !== "new");
      const revenue = userLeads.reduce((sum, c) => sum + (c.clientProfile?.amountPaid || c.expectedValue || 0), 0);
      const rate = userLeads.length > 0 ? ((converted.length / userLeads.length) * 100).toFixed(1) : 0;

      return {
        id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        totalLeads: userLeads.length,
        contactedCount: contacted.length,
        convertedCount: converted.length,
        conversionRate: `${rate}%`,
        totalRevenue: revenue,
      };
    });

    const sourceBreakdown = {};
    allLeads.forEach((l) => {
      const src = l.source || "contact_page";
      sourceBreakdown[src] = (sourceBreakdown[src] || 0) + 1;
    });

    const statusBreakdown = {};
    allLeads.forEach((l) => {
      statusBreakdown[l.status] = (statusBreakdown[l.status] || 0) + 1;
    });

    const totalRevenue = allLeads.reduce((sum, c) => sum + (c.clientProfile?.amountPaid || c.expectedValue || 0), 0);

    return reply.send({
      success: true,
      timeframe: {
        fromDate: start ? start.toISOString() : null,
        toDate: end ? end.toISOString() : null,
      },
      pagination: {
        page: parseInt(page),
        limit: parseInt(limit),
        total: totalCount,
        totalPages: Math.ceil(totalCount / parseInt(limit)) || 1,
      },
      deals,
      summary: {
        totalLeads: totalCount,
        convertedCount: allLeads.filter((l) => l.status === "won" || l.status === "converted").length,
        totalRevenue,
      },
      salesPerformance,
      sourceBreakdown,
      statusBreakdown,
    });
  } catch (error) {
    return reply.code(500).send({
      success: false,
      message: "Failed to generate CRM reports",
      error: error.message,
    });
  }
}

// 7. GET SINGLE LEAD DETAILS
async function getLeadById(request, reply) {
  try {
    const { id } = request.params;
    const lead = await Lead.findById(id).populate("assignedTo", "name email phone role");
    if (!lead) return reply.code(404).send({ success: false, message: "Lead not found" });
    return reply.send({ success: true, lead });
  } catch (error) {
    return reply.code(500).send({ success: false, message: "Failed to fetch lead", error: error.message });
  }
}

// 8. UPDATE LEAD DETAILS
async function updateLead(request, reply) {
  try {
    const { id } = request.params;
    const { status, priority, assignedTo, note, source, expectedValue } = request.body || {};

    const lead = await Lead.findById(id);
    if (!lead) return reply.code(404).send({ success: false, message: "Lead not found" });

    if (status && lead.status !== status) {
      lead.notes.push({
        authorId: request.user._id,
        authorName: request.user.name,
        text: `Status changed from '${lead.status}' to '${status}'`,
      });
      lead.status = status;
    }

    if (priority) lead.priority = priority;
    if (source) lead.source = source;
    if (expectedValue) lead.expectedValue = Number(expectedValue);

    if (assignedTo !== undefined) {
      if (assignedTo === null || assignedTo === "") {
        lead.assignedTo = null;
        lead.assignedToName = "Unassigned";
      } else {
        const agent = await User.findById(assignedTo);
        if (agent) {
          lead.assignedTo = agent._id;
          lead.assignedToName = agent.name;
          lead.notes.push({
            authorId: request.user._id,
            authorName: request.user.name,
            text: `Assigned to ${agent.name} (${agent.role})`,
          });
        }
      }
    }

    if (note && note.trim()) {
      lead.notes.push({
        authorId: request.user._id,
        authorName: request.user.name,
        text: note.trim(),
      });
    }

    await lead.save();
    return reply.send({ success: true, message: "Lead updated successfully", lead });
  } catch (error) {
    return reply.code(500).send({ success: false, message: "Failed to update lead", error: error.message });
  }
}

// 9. SALES USER: SET FOLLOW-UP TIME
async function setFollowUp(request, reply) {
  try {
    const { id } = request.params;
    const { followUpDate, followUpNotes = "", markCompleted = false } = request.body || {};

    const lead = await Lead.findById(id);
    if (!lead) return reply.code(404).send({ success: false, message: "Lead not found" });

    if (markCompleted) {
      lead.followUpCompleted = true;
      lead.notes.push({
        authorId: request.user._id,
        authorName: request.user.name,
        text: `Marked scheduled follow-up as completed`,
      });
    } else {
      if (!followUpDate) {
        return reply.code(400).send({ success: false, message: "A valid follow-up date and time is required" });
      }
      lead.followUpDate = new Date(followUpDate);
      lead.followUpNotes = followUpNotes.trim();
      lead.followUpCompleted = false;
      lead.status = "followup_scheduled";

      lead.notes.push({
        authorId: request.user._id,
        authorName: request.user.name,
        text: `Scheduled follow-up for ${new Date(followUpDate).toLocaleString()}${
          followUpNotes ? `: "${followUpNotes}"` : ""
        }`,
      });
    }

    await lead.save();
    return reply.send({
      success: true,
      message: markCompleted ? "Follow-up completed" : "Follow-up scheduled successfully",
      lead,
    });
  } catch (error) {
    return reply.code(500).send({ success: false, message: "Failed to set follow-up", error: error.message });
  }
}

// 10. SALES USER: RECORD CONTACT LOG (Call, WhatsApp, Email)
async function addContactLog(request, reply) {
  try {
    const { id } = request.params;
    const { channel = "phone", outcome = "connected_interested", notes = "", nextFollowUpDate = null } = request.body || {};

    const lead = await Lead.findById(id);
    if (!lead) return reply.code(404).send({ success: false, message: "Lead not found" });

    lead.callLogs.push({
      contactedAt: new Date(),
      contactedBy: request.user._id,
      contactedByName: request.user.name,
      channel,
      outcome,
      notes: notes.trim(),
    });

    if (outcome === "converted") {
      lead.status = "converted";
    } else if (outcome === "not_interested") {
      lead.status = "lost";
    } else {
      lead.status = nextFollowUpDate ? "followup_scheduled" : "contacted";
    }

    if (nextFollowUpDate) {
      lead.followUpDate = new Date(nextFollowUpDate);
      lead.followUpNotes = notes;
      lead.followUpCompleted = false;
    }

    await lead.save();
    return reply.send({ success: true, message: `Contact log recorded via ${channel}`, lead });
  } catch (error) {
    return reply.code(500).send({ success: false, message: "Failed to record contact log", error: error.message });
  }
}

// 11. CONVERT LEAD TO ACTIVE CLIENT
async function convertToClient(request, reply) {
  try {
    const { id } = request.params;
    const {
      planName = "Personalized Nutrition Plan",
      durationMonths = 3,
      amountPaid = 0,
      paymentStatus = "paid",
      startDate = new Date(),
      targetGoal = "",
      assignedDietitian = "Dr. Ananya Sen",
    } = request.body || {};

    const lead = await Lead.findById(id);
    if (!lead) return reply.code(404).send({ success: false, message: "Lead not found" });

    lead.status = "converted";
    lead.clientProfile = {
      isClient: true,
      convertedAt: new Date(),
      convertedBy: request.user._id,
      planName,
      durationMonths: Number(durationMonths),
      amountPaid: Number(amountPaid),
      paymentStatus,
      startDate: new Date(startDate),
      targetGoal,
      assignedDietitian,
    };

    lead.notes.push({
      authorId: request.user._id,
      authorName: request.user.name,
      text: `🎉 Converted to active client! Enrolled in '${planName}' (${durationMonths} mo) - ₹${amountPaid}`,
    });

    await lead.save();
    return reply.send({ success: true, message: "Lead converted to Client successfully!", lead });
  } catch (error) {
    return reply.code(500).send({ success: false, message: "Failed to convert client", error: error.message });
  }
}

// 12. GET ALL CLIENTS
async function getClients(request, reply) {
  try {
    const { search, planName, paymentStatus, fromDate, toDate } = request.query || {};

    const query = { "clientProfile.isClient": true };

    if (fromDate || toDate) {
      const { query: dateQ } = buildDateQuery(fromDate, toDate);
      query["clientProfile.convertedAt"] = dateQ.createdAt;
    }

    if (planName && planName !== "all") query["clientProfile.planName"] = planName;
    if (paymentStatus && paymentStatus !== "all") query["clientProfile.paymentStatus"] = paymentStatus;

    if (search && search.trim()) {
      const searchRegex = new RegExp(search.trim(), "i");
      query.$or = [
        { fullName: searchRegex },
        { email: searchRegex },
        { phone: searchRegex },
        { "clientProfile.targetGoal": searchRegex },
      ];
    }

    const clients = await Lead.find(query)
      .sort({ "clientProfile.convertedAt": -1 })
      .populate("assignedTo", "name email phone role");

    const totalRevenue = clients.reduce((sum, c) => sum + (c.clientProfile?.amountPaid || 0), 0);

    return reply.send({ success: true, count: clients.length, totalRevenue, clients });
  } catch (error) {
    return reply.code(500).send({ success: false, message: "Failed to fetch clients", error: error.message });
  }
}

// 13. GET FOLLOW-UPS LIST WITH FILTERS
async function getFollowUps(request, reply) {
  try {
    const { filter = "all", assignedTo } = request.query || {};
    const query = { followUpDate: { $ne: null } };

    if (request.user.role === "sales" && assignedTo === "me") {
      query.assignedTo = request.user._id;
    } else if (assignedTo && assignedTo !== "all") {
      query.assignedTo = assignedTo;
    }

    const now = new Date();
    const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const endOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59, 999);

    if (filter === "today") {
      query.followUpDate = { $gte: startOfToday, $lte: endOfToday };
      query.followUpCompleted = false;
    } else if (filter === "overdue") {
      query.followUpDate = { $lt: startOfToday };
      query.followUpCompleted = false;
    } else if (filter === "upcoming") {
      query.followUpDate = { $gt: endOfToday };
      query.followUpCompleted = false;
    } else if (filter === "completed") {
      query.followUpCompleted = true;
    } else if (filter === "pending") {
      query.followUpCompleted = false;
    }

    const followUps = await Lead.find(query)
      .sort({ followUpDate: 1 })
      .populate("assignedTo", "name email phone role");

    const [todayCount, overdueCount, upcomingCount] = await Promise.all([
      Lead.countDocuments({ followUpDate: { $gte: startOfToday, $lte: endOfToday }, followUpCompleted: false }),
      Lead.countDocuments({ followUpDate: { $lt: startOfToday }, followUpCompleted: false }),
      Lead.countDocuments({ followUpDate: { $gt: endOfToday }, followUpCompleted: false }),
    ]);

    return reply.send({
      success: true,
      counts: { today: todayCount, overdue: overdueCount, upcoming: upcomingCount, total: followUps.length },
      followUps,
    });
  } catch (error) {
    return reply.code(500).send({ success: false, message: "Failed to fetch follow-ups", error: error.message });
  }
}

// 14. GET DASHBOARD METRICS (Supports Date Range: Default past 1 month)
async function getDashboardStats(request, reply) {
  try {
    const { fromDate, toDate } = request.query || {};
    const { query: dateQ, start, end } = buildDateQuery(fromDate, toDate);

    // Sales Scoping: if user is sales rep, filter metrics to their leads or show combined
    const scopeQuery = { ...dateQ };
    if (request.user.role === "sales") {
      scopeQuery.assignedTo = request.user._id;
    }

    const now = new Date();
    const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    const [
      totalLeads,
      todayLeads,
      pendingFollowups,
      convertedClients,
      statusCounts,
      recentLeads,
    ] = await Promise.all([
      Lead.countDocuments(scopeQuery),
      Lead.countDocuments({ ...scopeQuery, createdAt: { $gte: startOfToday } }),
      Lead.countDocuments({
        ...(request.user.role === "sales" ? { assignedTo: request.user._id } : {}),
        followUpDate: { $ne: null },
        followUpCompleted: false,
      }),
      Lead.countDocuments({ ...scopeQuery, "clientProfile.isClient": true }),
      Lead.aggregate([
        { $match: scopeQuery },
        { $group: { _id: "$status", count: { $sum: 1 } } },
      ]),
      Lead.find(scopeQuery).sort({ createdAt: -1 }).limit(8).populate("assignedTo", "name email role"),
    ]);

    const allLeadsInScope = await Lead.find(scopeQuery).sort({ createdAt: -1 });

    const statusMap = statusCounts.reduce((acc, curr) => {
      acc[curr._id] = curr.count;
      return acc;
    }, {});

    const totalDealValue = allLeadsInScope.reduce((sum, l) => sum + (l.expectedValue || 0), 0);
    const wonLeads = allLeadsInScope.filter((l) => l.status === "won" || l.status === "converted" || l.clientProfile?.isClient);
    const wonValue = wonLeads.reduce((sum, l) => sum + (l.expectedValue || l.clientProfile?.amountPaid || 0), 0);
    const openValue = Math.max(0, totalDealValue - wonValue);
    const winRate = totalLeads > 0 ? ((wonLeads.length / totalLeads) * 100).toFixed(1) : 0;

    // Detailed Stage Breakdown with counts and sum values
    const stageBreakdown = {
      new: { count: 0, value: 0 },
      qualified: { count: 0, value: 0 },
      proposal: { count: 0, value: 0 },
      negotiation: { count: 0, value: 0 },
      won: { count: 0, value: 0 },
    };

    allLeadsInScope.forEach((l) => {
      let st = l.stage || l.status || "new";
      if (st === "contacted") st = "qualified";
      else if (st === "in_discussion") st = "proposal";
      else if (st === "followup_scheduled") st = "negotiation";
      else if (st === "converted") st = "won";

      if (stageBreakdown[st]) {
        stageBreakdown[st].count++;
        stageBreakdown[st].value += (l.expectedValue || 0);
      }
    });

    // Sources Breakdown
    const sourceBreakdown = {};
    allLeadsInScope.forEach((l) => {
      const src = l.source || "Website";
      sourceBreakdown[src] = (sourceBreakdown[src] || 0) + 1;
    });

    // Top Accounts aggregation
    const accountMap = {};
    allLeadsInScope.forEach((l) => {
      const comp = l.company || l.fullName;
      if (!accountMap[comp]) {
        accountMap[comp] = {
          name: comp,
          industry: l.project || "Infrastructure",
          status: "Active",
          totalValue: 0,
        };
      }
      accountMap[comp].totalValue += (l.expectedValue || 0);
    });
    const topAccounts = Object.values(accountMap).sort((a, b) => b.totalValue - a.totalValue).slice(0, 5);

    // Recent activities (Calls, emails, remarks)
    const recentActivities = [];
    allLeadsInScope.forEach((l) => {
      (l.callLogs || []).forEach((c) => {
        recentActivities.push({
          id: c._id,
          type: c.channel,
          text: `${c.channel === "phone" ? "Call" : "Email"} with ${l.company || l.fullName}`,
          time: c.contactedAt,
        });
      });
      (l.notes || []).forEach((n) => {
        recentActivities.push({
          id: n._id,
          type: "note",
          text: `Note on ${l.company || l.fullName}: ${n.text}`,
          time: n.createdAt,
        });
      });
    });
    recentActivities.sort((a, b) => new Date(b.time) - new Date(a.time));

    return reply.send({
      success: true,
      timeframe: {
        fromDate: start.toISOString(),
        toDate: end.toISOString(),
      },
      stats: {
        totalLeads,
        totalDeals: totalLeads,
        todayLeads,
        pendingFollowups,
        convertedClients: wonLeads.length,
        conversionRate: `${winRate}%`,
        winRate: `${winRate}%`,
        totalDealValue,
        wonValue,
        openValue,
        statusBreakdown: statusMap,
        stageBreakdown,
        sourceBreakdown,
        topAccounts,
        recentActivities: recentActivities.slice(0, 6),
      },
      recentLeads: allLeadsInScope.slice(0, 8),
    });
  } catch (error) {
    return reply.code(500).send({ success: false, message: "Failed to fetch dashboard metrics", error: error.message });
  }
}

async function deleteLead(request, reply) {
  try {
    const { id } = request.params;
    const lead = await Lead.findByIdAndDelete(id);
    if (!lead) return reply.code(404).send({ success: false, message: "Lead not found" });
    return reply.send({ success: true, message: "Lead deleted successfully" });
  } catch (error) {
    return reply.code(500).send({ success: false, message: "Failed to delete lead", error: error.message });
  }
}

module.exports = {
  createPublicLead,
  getAllLeads,
  getPipeline,
  moveStage,
  importLeads,
  getReports,
  getLeadById,
  updateLead,
  deleteLead,
  setFollowUp,
  addContactLog,
  convertToClient,
  getClients,
  getFollowUps,
  getDashboardStats,
};
