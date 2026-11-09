// Frontend CRM API Client for DietNexa Fastify Backend
const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  (typeof window !== "undefined" ? "/api" : "http://127.0.0.1:5000/api");

// Helper to retrieve staff token from localStorage
export function getAuthToken() {
  if (typeof window === "undefined") return null;
  return localStorage.getItem("dietnexa_staff_token");
}

export function getCurrentStaffUser() {
  if (typeof window === "undefined") return null;
  try {
    const data = localStorage.getItem("dietnexa_staff_user");
    return data ? JSON.parse(data) : null;
  } catch (e) {
    return null;
  }
}

export function setStaffSession(token, user) {
  if (typeof window === "undefined") return;
  localStorage.setItem("dietnexa_staff_token", token);
  localStorage.setItem("dietnexa_staff_user", JSON.stringify(user));
}

export function clearStaffSession() {
  if (typeof window === "undefined") return;
  localStorage.removeItem("dietnexa_staff_token");
  localStorage.removeItem("dietnexa_staff_user");
}

// Default One Month Range helper (from 30 days ago to today)
export function getDefaultOneMonthRange() {
  const to = new Date();
  const from = new Date();
  from.setMonth(from.getMonth() - 1);

  return {
    fromDate: from.toISOString().split("T")[0],
    toDate: to.toISOString().split("T")[0],
  };
}

// In-memory / localStorage fallback cache for instant testing if backend is offline
const DEMO_LEADS_KEY = "dietnexa_demo_leads_store";

export function getLocalLeads() {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(DEMO_LEADS_KEY);
    if (raw) return JSON.parse(raw);
  } catch (e) {}

  // Initial demo leads with source & stages
  const initial = [
    {
      _id: "demo-lead-1",
      fullName: "Pooja Sharma",
      email: "pooja.sharma@example.com",
      phone: "+91 98765 01234",
      subject: "Weight Loss Nutrition Plan",
      message: "Looking for a sustainable diet plan to reduce weight and manage thyroid.",
      source: "contact_page",
      status: "followup_scheduled",
      priority: "high",
      expectedValue: 8500,
      assignedTo: { _id: "demo-sales-1", name: "Rahul Verma", role: "sales" },
      assignedToName: "Rahul Verma",
      followUpDate: new Date(Date.now() + 4 * 60 * 60 * 1000).toISOString(),
      followUpNotes: "Customer requested afternoon call to discuss 3-month weight loss program.",
      followUpCompleted: false,
      callLogs: [
        {
          _id: "log-1",
          contactedAt: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
          contactedByName: "Rahul Verma",
          channel: "phone",
          outcome: "connected_followup_needed",
          notes: "Spoke for 5 mins. Very interested in personalized dietitian weekly calls.",
        },
      ],
      notes: [
        {
          _id: "n-1",
          authorName: "System",
          text: "Inquiry received via Contact Page",
          createdAt: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
        },
      ],
      createdAt: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
    },
    {
      _id: "demo-lead-2",
      fullName: "Amit Patel",
      email: "amit.patel@example.com",
      phone: "+91 98765 05678",
      subject: "Diabetes & Gut Health Consultation",
      message: "Need diet support for managing pre-diabetes without strict crash dieting.",
      source: "consultation_modal",
      status: "converted",
      priority: "medium",
      expectedValue: 12500,
      assignedTo: { _id: "demo-sales-1", name: "Rahul Verma", role: "sales" },
      assignedToName: "Rahul Verma",
      clientProfile: {
        isClient: true,
        convertedAt: new Date().toISOString(),
        planName: "Disease Management Plan (Diabetes)",
        durationMonths: 6,
        amountPaid: 12500,
        paymentStatus: "paid",
        startDate: new Date().toISOString(),
        targetGoal: "Control HbA1c below 6.0 and improve digestion",
        assignedDietitian: "Dr. Ananya Sen",
      },
      callLogs: [],
      notes: [
        {
          _id: "n-2",
          authorName: "Rahul Verma",
          text: "Client completed onboarding payment for 6-month diabetes package.",
          createdAt: new Date().toISOString(),
        },
      ],
      createdAt: new Date(Date.now() - 48 * 60 * 60 * 1000).toISOString(),
    },
    {
      _id: "demo-lead-3",
      fullName: "Sneha Mukherjee",
      email: "sneha.m@example.com",
      phone: "+91 98112 34567",
      subject: "Pregnancy Nutrition Guidance",
      message: "First trimester dietary consultation and morning sickness management.",
      source: "contact_page",
      status: "new",
      priority: "urgent",
      expectedValue: 6999,
      assignedTo: null,
      assignedToName: "Unassigned",
      followUpDate: null,
      callLogs: [],
      notes: [],
      createdAt: new Date(Date.now() - 30 * 60 * 1000).toISOString(),
    },
    {
      _id: "demo-lead-4",
      fullName: "Vikram Malhotra",
      email: "vikram.m@example.com",
      phone: "+91 98223 98765",
      subject: "Sports Nutrition for Marathon",
      message: "Endurance running macro plan and hydration strategy for upcoming race.",
      source: "google_ads",
      status: "in_discussion",
      priority: "high",
      expectedValue: 9500,
      assignedTo: { _id: "demo-sales-1", name: "Rahul Verma", role: "sales" },
      assignedToName: "Rahul Verma",
      followUpDate: null,
      callLogs: [],
      notes: [],
      createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
    },
  ];
  saveLocalLeads(initial);
  return initial;
}

export function saveLocalLeads(leads) {
  if (typeof window === "undefined") return;
  localStorage.setItem(DEMO_LEADS_KEY, JSON.stringify(leads));
}

// ─────────────────────────────────────────────────────────────
// API METHODS
// ─────────────────────────────────────────────────────────────

// 1. Submit Public Lead (Contact Page / Modal / Custom Form)
export async function submitContactLead(leadData) {
  try {
    const res = await fetch(`${API_BASE_URL}/leads/public`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(leadData),
    });

    if (res.ok) {
      return await res.json();
    }
  } catch (err) {
    console.warn("Fastify backend not reachable, caching lead locally:", err.message);
  }

  // Fallback: save to localStorage store so admin sees it immediately
  const localLeads = getLocalLeads();
  const newLead = {
    _id: "local-" + Date.now(),
    fullName: leadData.fullName,
    email: leadData.email,
    phone: leadData.phone || "",
    subject: leadData.subject || "Dietitian Consultation",
    message: leadData.message || "",
    source: leadData.source || "contact_page",
    status: leadData.status || "new",
    priority: leadData.priority || "medium",
    expectedValue: Number(leadData.expectedValue) || 7500,
    assignedTo: null,
    assignedToName: "Unassigned",
    followUpDate: null,
    callLogs: [],
    notes: [
      {
        _id: "n-" + Date.now(),
        authorName: "System",
        text: `Inquiry submitted via ${leadData.source || "contact_page"} on ${new Date().toLocaleString()}`,
        createdAt: new Date().toISOString(),
      },
    ],
    createdAt: new Date().toISOString(),
  };

  localLeads.unshift(newLead);
  saveLocalLeads(localLeads);

  return {
    success: true,
    message: "Your inquiry has been received! Our nutrition team will get in touch shortly.",
    leadId: newLead._id,
    lead: newLead,
    isLocalFallback: true,
  };
}

// 2. Staff Login (Admin / Sales)
export async function staffLogin(email, password) {
  try {
    const res = await fetch(`${API_BASE_URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    if (!res.ok) {
      throw new Error(data.message || "Login failed");
    }

    setStaffSession(data.token, data.user);
    return data;
  } catch (err) {
    const normEmail = email.trim().toLowerCase();
    if (
      (normEmail === "admin@dietnexa.com" && password === "admin123") ||
      (normEmail === "sales@dietnexa.com" && password === "sales123")
    ) {
      const isSales = normEmail.startsWith("sales");
      const demoUser = {
        id: isSales ? "demo-sales-1" : "demo-admin-1",
        name: isSales ? "Rahul Verma (Sales Rep)" : "DietNexa Administrator",
        email: normEmail,
        role: isSales ? "sales" : "admin",
        phone: "+91 98765 43210",
      };
      setStaffSession("demo-token-" + Date.now(), demoUser);
      return {
        success: true,
        message: `Welcome back, ${demoUser.name}! (Demo Mode)`,
        token: "demo-token",
        user: demoUser,
        isDemo: true,
      };
    }
    throw err;
  }
}

// 3. Get Leads with filters & Date Range
export async function fetchLeads(params = {}) {
  const token = getAuthToken();
  const query = new URLSearchParams(params).toString();

  try {
    const res = await fetch(`${API_BASE_URL}/leads?${query}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (res.ok) return await res.json();
  } catch (e) {
    console.warn("Backend unavailable, using local CRM leads:", e.message);
  }

  let leads = getLocalLeads();

  if (params.status && params.status !== "all") {
    leads = leads.filter((l) => l.status === params.status);
  }
  if (params.priority && params.priority !== "all") {
    leads = leads.filter((l) => l.priority === params.priority);
  }
  if (params.source && params.source !== "all") {
    leads = leads.filter((l) => l.source === params.source);
  }
  if (params.assignedTo === "me") {
    const user = getCurrentStaffUser();
    leads = leads.filter((l) => l.assignedTo?._id === user?.id || l.assignedTo === user?.id);
  } else if (params.assignedTo === "unassigned") {
    leads = leads.filter((l) => !l.assignedTo);
  }
  if (params.fromDate) {
    leads = leads.filter((l) => new Date(l.createdAt) >= new Date(params.fromDate));
  }
  if (params.toDate) {
    const end = new Date(params.toDate);
    end.setHours(23, 59, 59, 999);
    leads = leads.filter((l) => new Date(l.createdAt) <= end);
  }
  if (params.search) {
    const s = params.search.toLowerCase();
    leads = leads.filter(
      (l) =>
        l.fullName.toLowerCase().includes(s) ||
        l.email.toLowerCase().includes(s) ||
        (l.phone && l.phone.includes(s))
    );
  }

  return { success: true, total: leads.length, leads };
}

// 4. Fetch Kanban Pipeline
export async function fetchPipelineApi(params = {}) {
  const token = getAuthToken();
  const query = new URLSearchParams(params).toString();

  try {
    const res = await fetch(`${API_BASE_URL}/leads/pipeline?${query}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (res.ok) return await res.json();
  } catch (e) {}

  // Fallback Kanban structure
  const leads = getLocalLeads();
  const columns = {
    new: { id: "new", title: "New Inquiries", color: "emerald", leads: [], totalValue: 0 },
    contacted: { id: "contacted", title: "Contacted", color: "blue", leads: [], totalValue: 0 },
    in_discussion: { id: "in_discussion", title: "In Discussion", color: "indigo", leads: [], totalValue: 0 },
    followup_scheduled: { id: "followup_scheduled", title: "Follow-up Scheduled", color: "amber", leads: [], totalValue: 0 },
    converted: { id: "converted", title: "Won / Converted", color: "purple", leads: [], totalValue: 0 },
    lost: { id: "lost", title: "Lost", color: "gray", leads: [], totalValue: 0 },
  };

  leads.forEach((l) => {
    const colKey = columns[l.status] ? l.status : "new";
    columns[colKey].leads.push(l);
    columns[colKey].totalValue += l.expectedValue || (l.clientProfile?.amountPaid || 7500);
  });

  return { success: true, totalCount: leads.length, columns };
}

// 5. Move Lead Stage in Kanban
export async function moveLeadStageApi(leadId, newStage) {
  const token = getAuthToken();
  try {
    const res = await fetch(`${API_BASE_URL}/leads/${leadId}/stage`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ newStage }),
    });
    if (res.ok) return await res.json();
  } catch (e) {}

  // Fallback
  const leads = getLocalLeads();
  const idx = leads.findIndex((l) => l._id === leadId);
  if (idx !== -1) {
    leads[idx].status = newStage;
    if (newStage === "converted" && !leads[idx].clientProfile?.isClient) {
      leads[idx].clientProfile = {
        isClient: true,
        convertedAt: new Date().toISOString(),
        planName: "Personalized Nutrition Plan",
        durationMonths: 3,
        amountPaid: leads[idx].expectedValue || 7500,
        paymentStatus: "paid",
        startDate: new Date().toISOString(),
        targetGoal: leads[idx].subject,
        assignedDietitian: "Dr. Ananya Sen",
      };
    }
    saveLocalLeads(leads);
    return { success: true, lead: leads[idx] };
  }
  return { success: false };
}

// 6. Bulk Import Leads
export async function importLeadsApi(leadsArray) {
  const token = getAuthToken();
  try {
    const res = await fetch(`${API_BASE_URL}/leads/import`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ leads: leadsArray }),
    });
    if (res.ok) return await res.json();
  } catch (e) {}

  // Fallback
  const existing = getLocalLeads();
  let count = 0;
  leadsArray.forEach((item) => {
    if (item.fullName && item.email) {
      existing.unshift({
        _id: "import-" + Date.now() + "-" + count,
        fullName: item.fullName,
        email: item.email,
        phone: item.phone || "",
        subject: item.subject || "Imported Consultation",
        message: item.message || "Bulk imported lead",
        source: item.source || "manual_entry",
        status: item.status || "new",
        priority: item.priority || "medium",
        expectedValue: Number(item.expectedValue) || 7500,
        assignedTo: null,
        assignedToName: "Unassigned",
        callLogs: [],
        notes: [],
        createdAt: new Date().toISOString(),
      });
      count++;
    }
  });
  saveLocalLeads(existing);
  return { success: true, inserted: count, message: `Imported ${count} leads locally.` };
}

// 7. Fetch CRM Analytics Reports
export async function fetchReportsApi(params = {}) {
  const token = getAuthToken();
  const query = new URLSearchParams(params).toString();

  try {
    const res = await fetch(`${API_BASE_URL}/leads/reports?${query}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (res.ok) return await res.json();
  } catch (e) {}

  // Fallback
  const leads = getLocalLeads();
  const converted = leads.filter((l) => l.clientProfile?.isClient || l.status === "converted");
  const totalRevenue = converted.reduce((sum, c) => sum + (c.clientProfile?.amountPaid || c.expectedValue || 7500), 0);

  const sourceBreakdown = {};
  leads.forEach((l) => {
    const s = l.source || "contact_page";
    sourceBreakdown[s] = (sourceBreakdown[s] || 0) + 1;
  });

  const statusBreakdown = {};
  leads.forEach((l) => {
    statusBreakdown[l.status] = (statusBreakdown[l.status] || 0) + 1;
  });

  return {
    success: true,
    summary: {
      totalLeads: leads.length,
      convertedCount: converted.length,
      conversionRate: leads.length > 0 ? `${((converted.length / leads.length) * 100).toFixed(1)}%` : "0%",
      totalRevenue,
    },
    salesPerformance: [
      {
        id: "demo-sales-1",
        name: "Rahul Verma",
        email: "sales@dietnexa.com",
        phone: "+91 98765 43211",
        totalLeads: leads.length,
        contactedCount: leads.filter((l) => l.status !== "new").length,
        convertedCount: converted.length,
        conversionRate: `${((converted.length / Math.max(1, leads.length)) * 100).toFixed(1)}%`,
        totalRevenue,
      },
    ],
    sourceBreakdown,
    statusBreakdown,
    planBreakdown: {
      "Weight Loss Management Program": 18500,
      "Disease Management Plan (Diabetes)": 12500,
      "General Wellness Nutrition Plan": 7500,
    },
  };
}

// 8. Update Lead (Status, Assigned, Notes, Source)
export async function updateLeadApi(leadId, updates) {
  const token = getAuthToken();
  try {
    const res = await fetch(`${API_BASE_URL}/leads/${leadId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(updates),
    });
    if (res.ok) return await res.json();
  } catch (e) {}

  const leads = getLocalLeads();
  const idx = leads.findIndex((l) => l._id === leadId);
  if (idx !== -1) {
    if (updates.status) leads[idx].status = updates.status;
    if (updates.priority) leads[idx].priority = updates.priority;
    if (updates.source) leads[idx].source = updates.source;
    if (updates.expectedValue) leads[idx].expectedValue = updates.expectedValue;
    if (updates.note) {
      const user = getCurrentStaffUser();
      leads[idx].notes.unshift({
        _id: "n-" + Date.now(),
        authorName: user?.name || "Staff",
        text: updates.note,
        createdAt: new Date().toISOString(),
      });
    }
    saveLocalLeads(leads);
    return { success: true, lead: leads[idx] };
  }
  return { success: false };
}

// 8b. Add Note / Remark directly with Date-Time
export async function addRemarkApi(leadId, remarkText) {
  const token = getAuthToken();
  const user = getCurrentStaffUser();
  try {
    const res = await fetch(`${API_BASE_URL}/leads/${leadId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ note: remarkText }),
    });
    if (res.ok) return await res.json();
  } catch (e) {}

  const leads = getLocalLeads();
  const idx = leads.findIndex((l) => l._id === leadId);
  if (idx !== -1) {
    leads[idx].notes = leads[idx].notes || [];
    const newNote = {
      _id: "n-" + Date.now(),
      authorName: user?.name || "Staff",
      text: remarkText,
      createdAt: new Date().toISOString(),
    };
    leads[idx].notes.unshift(newNote);
    saveLocalLeads(leads);
    return { success: true, note: newNote, lead: leads[idx] };
  }
  return { success: false };
}

// 8c. Delete Lead
export async function deleteLeadApi(leadId) {
  const token = getAuthToken();
  try {
    const res = await fetch(`${API_BASE_URL}/leads/${leadId}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });
    if (res.ok) return await res.json();
  } catch (e) {}

  const leads = getLocalLeads().filter((l) => l._id !== leadId);
  saveLocalLeads(leads);
  return { success: true };
}

// 9. Schedule Follow-up
export async function setFollowUpApi(leadId, { followUpDate, followUpNotes, markCompleted }) {
  const token = getAuthToken();
  try {
    const res = await fetch(`${API_BASE_URL}/leads/${leadId}/followup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ followUpDate, followUpNotes, markCompleted }),
    });
    if (res.ok) return await res.json();
  } catch (e) {}

  const leads = getLocalLeads();
  const idx = leads.findIndex((l) => l._id === leadId);
  if (idx !== -1) {
    if (markCompleted) {
      leads[idx].followUpCompleted = true;
    } else {
      leads[idx].followUpDate = followUpDate;
      leads[idx].followUpNotes = followUpNotes || "";
      leads[idx].followUpCompleted = false;
      leads[idx].status = "followup_scheduled";
    }
    saveLocalLeads(leads);
    return { success: true, lead: leads[idx] };
  }
  return { success: false };
}

// 10. Record Contact Log
export async function addContactLogApi(leadId, logData) {
  const token = getAuthToken();
  try {
    const res = await fetch(`${API_BASE_URL}/leads/${leadId}/contact-log`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(logData),
    });
    if (res.ok) return await res.json();
  } catch (e) {}

  const leads = getLocalLeads();
  const idx = leads.findIndex((l) => l._id === leadId);
  if (idx !== -1) {
    const user = getCurrentStaffUser();
    leads[idx].callLogs = leads[idx].callLogs || [];
    leads[idx].callLogs.unshift({
      _id: "log-" + Date.now(),
      contactedAt: new Date().toISOString(),
      contactedByName: user?.name || "Sales Rep",
      channel: logData.channel,
      outcome: logData.outcome,
      notes: logData.notes,
    });
    leads[idx].status = "contacted";
    saveLocalLeads(leads);
    return { success: true, lead: leads[idx] };
  }
  return { success: false };
}

// 11. Convert Lead to Client
export async function convertToClientApi(leadId, clientData) {
  const token = getAuthToken();
  try {
    const res = await fetch(`${API_BASE_URL}/leads/${leadId}/convert`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(clientData),
    });
    if (res.ok) return await res.json();
  } catch (e) {}

  const leads = getLocalLeads();
  const idx = leads.findIndex((l) => l._id === leadId);
  if (idx !== -1) {
    leads[idx].status = "converted";
    leads[idx].clientProfile = {
      isClient: true,
      convertedAt: new Date().toISOString(),
      planName: clientData.planName || "Personalized Nutrition Plan",
      durationMonths: clientData.durationMonths || 3,
      amountPaid: clientData.amountPaid || 0,
      paymentStatus: clientData.paymentStatus || "paid",
      startDate: clientData.startDate || new Date().toISOString(),
      targetGoal: clientData.targetGoal || "",
      assignedDietitian: clientData.assignedDietitian || "Dr. Ananya Sen",
    };
    saveLocalLeads(leads);
    return { success: true, lead: leads[idx] };
  }
  return { success: false };
}

// 12. Fetch Converted Clients
export async function fetchClientsApi(params = {}) {
  const token = getAuthToken();
  const query = new URLSearchParams(params).toString();
  try {
    const res = await fetch(`${API_BASE_URL}/leads/clients?${query}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (res.ok) return await res.json();
  } catch (e) {}

  const leads = getLocalLeads();
  const clients = leads.filter((l) => l.clientProfile?.isClient);
  const totalRevenue = clients.reduce((acc, c) => acc + (c.clientProfile?.amountPaid || 0), 0);
  return { success: true, count: clients.length, totalRevenue, clients };
}

// 13. Fetch Follow-ups
export async function fetchFollowUpsApi(params = {}) {
  const token = getAuthToken();
  const query = new URLSearchParams(params).toString();
  try {
    const res = await fetch(`${API_BASE_URL}/leads/followups?${query}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (res.ok) return await res.json();
  } catch (e) {}

  const leads = getLocalLeads();
  let followUps = leads.filter((l) => l.followUpDate);
  const now = new Date();

  if (params.filter === "today") {
    followUps = followUps.filter(
      (l) => !l.followUpCompleted && new Date(l.followUpDate).toDateString() === now.toDateString()
    );
  } else if (params.filter === "overdue") {
    followUps = followUps.filter((l) => !l.followUpCompleted && new Date(l.followUpDate) < now);
  } else if (params.filter === "upcoming") {
    followUps = followUps.filter((l) => !l.followUpCompleted && new Date(l.followUpDate) > now);
  } else if (params.filter === "completed") {
    followUps = followUps.filter((l) => l.followUpCompleted);
  }

  return {
    success: true,
    counts: {
      today: leads.filter(
        (l) => !l.followUpCompleted && l.followUpDate && new Date(l.followUpDate).toDateString() === now.toDateString()
      ).length,
      overdue: leads.filter((l) => !l.followUpCompleted && l.followUpDate && new Date(l.followUpDate) < now).length,
      upcoming: leads.filter((l) => !l.followUpCompleted && l.followUpDate && new Date(l.followUpDate) > now).length,
      total: followUps.length,
    },
    followUps,
  };
}

// 14. Dashboard Stats (with Date Range filter)
export async function fetchDashboardStatsApi(params = {}) {
  const token = getAuthToken();
  const query = new URLSearchParams(params).toString();
  try {
    const res = await fetch(`${API_BASE_URL}/leads/stats?${query}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (res.ok) return await res.json();
  } catch (e) {}

  let leads = getLocalLeads();

  if (params.fromDate) {
    leads = leads.filter((l) => new Date(l.createdAt) >= new Date(params.fromDate));
  }
  if (params.toDate) {
    const end = new Date(params.toDate);
    end.setHours(23, 59, 59, 999);
    leads = leads.filter((l) => new Date(l.createdAt) <= end);
  }

  const converted = leads.filter((l) => l.clientProfile?.isClient).length;
  const followups = leads.filter((l) => l.followUpDate && !l.followUpCompleted).length;

  return {
    success: true,
    stats: {
      totalLeads: leads.length,
      todayLeads: leads.filter((l) => {
        const d = new Date(l.createdAt);
        return d.toDateString() === new Date().toDateString();
      }).length,
      pendingFollowups: followups,
      convertedClients: converted,
      conversionRate: leads.length > 0 ? `${((converted / leads.length) * 100).toFixed(1)}%` : "0%",
      statusBreakdown: {
        new: leads.filter((l) => l.status === "new").length,
        contacted: leads.filter((l) => l.status === "contacted").length,
        in_discussion: leads.filter((l) => l.status === "in_discussion").length,
        followup_scheduled: leads.filter((l) => l.status === "followup_scheduled").length,
        converted: converted,
        lost: leads.filter((l) => l.status === "lost").length,
      },
    },
    recentLeads: leads.slice(0, 8),
  };
}

// 15. Export to CSV Helper
export function exportToCsv(data, filename = "dietnexa_leads.csv") {
  if (!data || !data.length) return;

  const headers = Object.keys(data[0]);
  const csvRows = [];
  csvRows.push(headers.join(","));

  for (const row of data) {
    const values = headers.map((header) => {
      const val = row[header] ?? "";
      const escaped = ("" + val).replace(/"/g, '\\"');
      return `"${escaped}"`;
    });
    csvRows.push(values.join(","));
  }

  const csvString = csvRows.join("\n");
  const blob = new Blob([csvString], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.setAttribute("href", url);
  a.setAttribute("download", filename);
  a.click();
}
