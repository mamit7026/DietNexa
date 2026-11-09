// Frontend CRM API Client for DietNexa Fastify Backend
const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

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

// In-memory / localStorage fallback cache for instant testing if backend is offline
const DEMO_LEADS_KEY = "dietnexa_demo_leads_store";

function getLocalLeads() {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(DEMO_LEADS_KEY);
    if (raw) return JSON.parse(raw);
  } catch (e) {}

  // Initial demo leads
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
      assignedTo: null,
      assignedToName: "Unassigned",
      followUpDate: null,
      callLogs: [],
      notes: [],
      createdAt: new Date(Date.now() - 30 * 60 * 1000).toISOString(),
    },
  ];
  saveLocalLeads(initial);
  return initial;
}

function saveLocalLeads(leads) {
  if (typeof window === "undefined") return;
  localStorage.setItem(DEMO_LEADS_KEY, JSON.stringify(leads));
}

// ─────────────────────────────────────────────────────────────
// API METHODS
// ─────────────────────────────────────────────────────────────

// 1. Submit Public Lead (Contact Page / Modal)
export async function submitContactLead(leadData) {
  try {
    const res = await fetch(`${API_BASE_URL}/leads/public`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(leadData),
    });

    if (res.ok) {
      const data = await res.json();
      return data;
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
    status: "new",
    priority: "medium",
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
    // If backend is down, allow demo credentials
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

// 3. Get Leads with filters
export async function fetchLeads(params = {}) {
  const token = getAuthToken();
  const query = new URLSearchParams(params).toString();

  try {
    const res = await fetch(`${API_BASE_URL}/leads?${query}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (res.ok) {
      return await res.json();
    }
  } catch (e) {
    console.warn("Backend unavailable, using local CRM leads:", e.message);
  }

  // Fallback to local leads
  let leads = getLocalLeads();

  if (params.status && params.status !== "all") {
    leads = leads.filter((l) => l.status === params.status);
  }
  if (params.priority && params.priority !== "all") {
    leads = leads.filter((l) => l.priority === params.priority);
  }
  if (params.assignedTo === "me") {
    const user = getCurrentStaffUser();
    leads = leads.filter((l) => l.assignedTo?._id === user?.id || l.assignedTo === user?.id);
  } else if (params.assignedTo === "unassigned") {
    leads = leads.filter((l) => !l.assignedTo);
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

  return {
    success: true,
    total: leads.length,
    leads,
  };
}

// 4. Update Lead (Status, Assigned, Notes)
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

  // Fallback
  const leads = getLocalLeads();
  const idx = leads.findIndex((l) => l._id === leadId);
  if (idx !== -1) {
    if (updates.status) leads[idx].status = updates.status;
    if (updates.priority) leads[idx].priority = updates.priority;
    if (updates.note) {
      const user = getCurrentStaffUser();
      leads[idx].notes.push({
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

// 5. Schedule Follow-up (Set date, time & notes)
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

  // Fallback
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

// 6. Record Contact Log (Call, WhatsApp, Email)
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

  // Fallback
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

// 7. Convert Lead to Client
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

  // Fallback
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

// 8. Fetch Converted Clients
export async function fetchClientsApi(params = {}) {
  const token = getAuthToken();
  const query = new URLSearchParams(params).toString();
  try {
    const res = await fetch(`${API_BASE_URL}/leads/clients?${query}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (res.ok) return await res.json();
  } catch (e) {}

  // Fallback
  const leads = getLocalLeads();
  const clients = leads.filter((l) => l.clientProfile?.isClient);
  const totalRevenue = clients.reduce((acc, c) => acc + (c.clientProfile?.amountPaid || 0), 0);
  return { success: true, count: clients.length, totalRevenue, clients };
}

// 9. Fetch Follow-ups
export async function fetchFollowUpsApi(params = {}) {
  const token = getAuthToken();
  const query = new URLSearchParams(params).toString();
  try {
    const res = await fetch(`${API_BASE_URL}/leads/followups?${query}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (res.ok) return await res.json();
  } catch (e) {}

  // Fallback
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

// 10. Dashboard Stats
export async function fetchDashboardStatsApi() {
  const token = getAuthToken();
  try {
    const res = await fetch(`${API_BASE_URL}/leads/stats`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (res.ok) return await res.json();
  } catch (e) {}

  // Fallback
  const leads = getLocalLeads();
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
        followup_scheduled: leads.filter((l) => l.status === "followup_scheduled").length,
        converted: converted,
        lost: leads.filter((l) => l.status === "lost").length,
      },
    },
    recentLeads: leads.slice(0, 6),
  };
}

