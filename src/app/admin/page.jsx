"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Inbox,
  CalendarClock,
  UserCheck,
  TrendingUp,
  Phone,
  Mail,
  MessageCircle,
  Clock,
  ArrowRight,
  Filter,
  CheckCircle2,
  AlertTriangle,
  User,
  Plus,
  Sparkles,
  Calendar,
  Upload,
  Columns3,
  Tag,
  DollarSign,
  Download,
} from "lucide-react";
import {
  fetchDashboardStatsApi,
  getCurrentStaffUser,
  setFollowUpApi,
  addContactLogApi,
  convertToClientApi,
  updateLeadApi,
  submitContactLead,
  importLeadsApi,
  getDefaultOneMonthRange,
  exportToCsv,
} from "@/lib/crmApi";

export default function AdminDashboardPage() {
  const [currentUser, setCurrentUser] = useState(null);
  const [stats, setStats] = useState(null);
  const [recentLeads, setRecentLeads] = useState([]);
  const [loading, setLoading] = useState(true);

  // Date range state (Defaults to Past 1 Month)
  const defaultDates = getDefaultOneMonthRange();
  const [fromDate, setFromDate] = useState(defaultDates.fromDate);
  const [toDate, setToDate] = useState(defaultDates.toDate);

  // Quick Action Modals
  const [activeModal, setActiveModal] = useState(null); // 'contact' | 'followup' | 'convert' | 'addLead' | 'import'
  const [selectedLead, setSelectedLead] = useState(null);

  // Modal form states
  const [followUpDate, setFollowUpDate] = useState("");
  const [followUpNotes, setFollowUpNotes] = useState("");
  const [contactChannel, setContactChannel] = useState("phone");
  const [contactOutcome, setContactOutcome] = useState("connected_interested");
  const [contactNotes, setContactNotes] = useState("");
  const [clientPlan, setClientPlan] = useState("Weight Loss Nutrition Plan");
  const [clientAmount, setClientAmount] = useState(9999);
  const [clientDietitian, setClientDietitian] = useState("Dr. Ananya Sen");

  // Add Custom Lead Form
  const [customLead, setCustomLead] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "Weight Loss Nutrition Plan",
    source: "manual_entry",
    priority: "medium",
    expectedValue: 8500,
  });

  // Bulk Import State
  const [importText, setImportText] = useState("");
  const [importStatus, setImportStatus] = useState("");

  const loadData = async () => {
    setLoading(true);
    const user = getCurrentStaffUser();
    setCurrentUser(user);

    try {
      const data = await fetchDashboardStatsApi({ fromDate, toDate });
      if (data && data.stats) {
        setStats(data.stats);
        setRecentLeads(data.recentLeads || []);
      }
    } catch (err) {
      console.error("Failed to load dashboard:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, [fromDate, toDate]);

  // Quick Status change
  const handleQuickStatus = async (leadId, newStatus) => {
    await updateLeadApi(leadId, { status: newStatus });
    await loadData();
  };

  // Submit Contact Log
  const handleSaveContactLog = async (e) => {
    e.preventDefault();
    if (!selectedLead) return;

    await addContactLogApi(selectedLead._id, {
      channel: contactChannel,
      outcome: contactOutcome,
      notes: contactNotes,
    });
    setActiveModal(null);
    setSelectedLead(null);
    await loadData();
  };

  // Submit Follow-up Schedule
  const handleSaveFollowUp = async (e) => {
    e.preventDefault();
    if (!selectedLead || !followUpDate) return;

    await setFollowUpApi(selectedLead._id, {
      followUpDate,
      followUpNotes,
    });
    setActiveModal(null);
    setSelectedLead(null);
    await loadData();
  };

  // Submit Conversion to Client
  const handleSaveConvert = async (e) => {
    e.preventDefault();
    if (!selectedLead) return;

    await convertToClientApi(selectedLead._id, {
      planName: clientPlan,
      amountPaid: clientAmount,
      assignedDietitian: clientDietitian,
    });
    setActiveModal(null);
    setSelectedLead(null);
    await loadData();
  };

  // Submit Add Custom Lead
  const handleAddCustomLead = async (e) => {
    e.preventDefault();
    await submitContactLead(customLead);
    setActiveModal(null);
    setCustomLead({
      fullName: "",
      email: "",
      phone: "",
      subject: "Weight Loss Nutrition Plan",
      source: "manual_entry",
      priority: "medium",
      expectedValue: 8500,
    });
    await loadData();
  };

  // Submit Bulk Import
  const handleBulkImport = async (e) => {
    e.preventDefault();
    if (!importText.trim()) return;

    try {
      // Support CSV (Name,Email,Phone,Subject,Source) or JSON array
      let parsed = [];
      if (importText.trim().startsWith("[")) {
        parsed = JSON.parse(importText);
      } else {
        const lines = importText.split("\n").filter((l) => l.trim());
        parsed = lines.map((line) => {
          const [fullName, email, phone, subject, source, priority] = line.split(",").map((s) => s?.trim());
          return {
            fullName: fullName || "Imported Customer",
            email: email || `lead-${Date.now()}@example.com`,
            phone: phone || "",
            subject: subject || "Dietitian Consultation",
            source: source || "manual_entry",
            priority: priority || "medium",
            expectedValue: 7500,
          };
        });
      }

      const res = await importLeadsApi(parsed);
      setImportStatus(res.message || "Import completed successfully");
      setTimeout(() => {
        setActiveModal(null);
        setImportText("");
        setImportStatus("");
      }, 1000);
      await loadData();
    } catch (err) {
      setImportStatus("Import failed: " + err.message);
    }
  };

  const handleQuickPreset = (preset) => {
    const end = new Date();
    const start = new Date();

    if (preset === "today") {
      start.setHours(0, 0, 0, 0);
    } else if (preset === "7d") {
      start.setDate(end.getDate() - 7);
    } else if (preset === "1m") {
      start.setMonth(end.getMonth() - 1);
    } else if (preset === "all") {
      start.setFullYear(2020);
    }

    setFromDate(start.toISOString().split("T")[0]);
    setToDate(end.toISOString().split("T")[0]);
  };

  return (
    <div className="space-y-6 sm:space-y-8">
      {/* ─────────────────────────────────────────────────────────────
          1. HEADER & WELCOME BANNER
      ───────────────────────────────────────────────────────────── */}
      <div className="bg-gradient-to-r from-[#0c3820] via-[#10793f] to-[#128a48] rounded-3xl p-6 sm:p-8 text-white relative overflow-hidden shadow-lg shadow-emerald-900/10">
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-white/5 blur-2xl pointer-events-none" />

        <div className="relative z-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-emerald-100 text-xs font-semibold backdrop-blur-xs mb-3">
              <Sparkles className="w-3.5 h-3.5 text-emerald-200" />
              <span>
                {currentUser?.role === "admin"
                  ? "Admin Control & Operations Center"
                  : "Sales Pipeline & Customer Management"}
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Welcome back, {currentUser?.name || "Staff Member"}!
            </h1>
            <p className="text-emerald-100/90 text-sm mt-1 max-w-xl">
              {currentUser?.role === "sales"
                ? "Manage your active inquiries, contact leads via phone & WhatsApp, schedule follow-ups, and convert customers into active clients."
                : "DietNexa Administrator Portal. Track all clinical inquiries, lead assignments, follow-ups, and active clients."}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 self-start sm:self-auto">
            <Link
              href="/admin/pipeline"
              className="px-3.5 py-2 rounded-xl bg-white/20 hover:bg-white/30 text-white font-bold text-xs inline-flex items-center gap-1.5 backdrop-blur-xs transition-colors"
            >
              <Columns3 className="w-4 h-4" />
              <span>Kanban Board</span>
            </Link>

            <button
              type="button"
              onClick={() => setActiveModal("addLead")}
              className="px-3.5 py-2 rounded-xl bg-white text-[#10793f] font-bold text-xs inline-flex items-center gap-1.5 hover:bg-emerald-50 transition-colors shadow-sm"
            >
              <Plus className="w-4 h-4" />
              <span>Add Lead</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveModal("import")}
              className="px-3.5 py-2 rounded-xl bg-emerald-900/60 hover:bg-emerald-900 text-emerald-100 font-bold text-xs inline-flex items-center gap-1.5 transition-colors"
            >
              <Upload className="w-3.5 h-3.5" />
              <span>Import Leads</span>
            </button>
          </div>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          2. DATE RANGE PICKER (Default: Past 1 Month)
      ───────────────────────────────────────────────────────────── */}
      <div className="bg-white p-4 sm:p-5 rounded-2xl border border-gray-200/80 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-bold text-gray-700 flex items-center gap-1.5 mr-1">
            <Calendar className="w-4 h-4 text-[#10793f]" />
            <span>Reporting Filter:</span>
          </span>

          <button
            type="button"
            onClick={() => handleQuickPreset("today")}
            className="px-3 py-1 rounded-xl text-xs font-bold bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors"
          >
            Today
          </button>
          <button
            type="button"
            onClick={() => handleQuickPreset("7d")}
            className="px-3 py-1 rounded-xl text-xs font-bold bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors"
          >
            Last 7 Days
          </button>
          <button
            type="button"
            onClick={() => handleQuickPreset("1m")}
            className="px-3 py-1 rounded-xl text-xs font-bold bg-emerald-100 hover:bg-emerald-200 text-emerald-900 transition-colors"
          >
            Past 1 Month (Default)
          </button>
          <button
            type="button"
            onClick={() => handleQuickPreset("all")}
            className="px-3 py-1 rounded-xl text-xs font-bold bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors"
          >
            All Time
          </button>
        </div>

        {/* Custom date range pickers */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 text-xs text-gray-600">
            <span className="font-semibold">From:</span>
            <input
              type="date"
              value={fromDate}
              onChange={(e) => setFromDate(e.target.value)}
              className="p-1.5 text-xs rounded-xl border border-gray-200 bg-gray-50 outline-none"
            />
          </div>

          <div className="flex items-center gap-1.5 text-xs text-gray-600">
            <span className="font-semibold">To:</span>
            <input
              type="date"
              value={toDate}
              onChange={(e) => setToDate(e.target.value)}
              className="p-1.5 text-xs rounded-xl border border-gray-200 bg-gray-50 outline-none"
            />
          </div>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          3. METRICS CARDS
      ───────────────────────────────────────────────────────────── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {/* Total Inquiries */}
        <div className="bg-white rounded-2xl p-5 border border-gray-200/80 shadow-xs flex items-center justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-gray-500">
              Total Inquiries
            </p>
            <h3 className="text-2xl sm:text-3xl font-black text-gray-900 mt-1">
              {loading ? "..." : stats?.totalLeads ?? 0}
            </h3>
            <p className="text-[11px] text-emerald-600 font-semibold mt-1">
              +{stats?.todayLeads ?? 0} received today
            </p>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-[#edf8f1] flex items-center justify-center text-[#10793f]">
            <Inbox className="w-6 h-6" />
          </div>
        </div>

        {/* Pending Follow-ups */}
        <div className="bg-white rounded-2xl p-5 border border-gray-200/80 shadow-xs flex items-center justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-gray-500">
              Follow-ups Due
            </p>
            <h3 className="text-2xl sm:text-3xl font-black text-amber-600 mt-1">
              {loading ? "..." : stats?.pendingFollowups ?? 0}
            </h3>
            <Link
              href="/admin/followups"
              className="text-[11px] text-amber-700 hover:underline font-semibold mt-1 inline-flex items-center gap-0.5"
            >
              <span>View scheduled list</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center text-amber-600">
            <CalendarClock className="w-6 h-6" />
          </div>
        </div>

        {/* Converted Active Clients */}
        <div className="bg-white rounded-2xl p-5 border border-gray-200/80 shadow-xs flex items-center justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-gray-500">
              Converted Clients
            </p>
            <h3 className="text-2xl sm:text-3xl font-black text-[#10793f] mt-1">
              {loading ? "..." : stats?.convertedClients ?? 0}
            </h3>
            <Link
              href="/admin/clients"
              className="text-[11px] text-[#10793f] hover:underline font-semibold mt-1 inline-flex items-center gap-0.5"
            >
              <span>Open Clients CRM</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-[#10793f]">
            <UserCheck className="w-6 h-6" />
          </div>
        </div>

        {/* Conversion Rate */}
        <div className="bg-white rounded-2xl p-5 border border-gray-200/80 shadow-xs flex items-center justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-gray-500">
              Conversion Rate
            </p>
            <h3 className="text-2xl sm:text-3xl font-black text-blue-600 mt-1">
              {loading ? "..." : stats?.conversionRate ?? "0%"}
            </h3>
            <p className="text-[11px] text-gray-500 font-semibold mt-1">
              Inquiry to Client pipeline
            </p>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600">
            <TrendingUp className="w-6 h-6" />
          </div>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          4. RECENT INQUIRIES & SALES CRM ACTIONS
      ───────────────────────────────────────────────────────────── */}
      <div className="bg-white rounded-3xl border border-gray-200/80 shadow-xs p-5 sm:p-7">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-gray-100">
          <div>
            <h2 className="text-lg sm:text-xl font-extrabold text-gray-900 tracking-tight">
              Inquiries in Filtered Period ({recentLeads.length})
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
              Customers waiting for consultation response and dietary guidance
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/admin/pipeline"
              className="text-xs font-bold text-gray-700 bg-gray-100 hover:bg-gray-200 px-3 py-1.5 rounded-xl flex items-center gap-1.5 transition-colors"
            >
              <Columns3 className="w-3.5 h-3.5 text-[#10793f]" />
              <span>Open Pipeline</span>
            </Link>

            <Link
              href="/admin/leads"
              className="text-xs font-bold text-[#10793f] hover:text-[#0b4d29] flex items-center gap-1"
            >
              <span>Manage All ({stats?.totalLeads || 0})</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {loading ? (
          <div className="py-12 text-center text-gray-400 text-sm">
            Loading recent inquiries...
          </div>
        ) : recentLeads.length === 0 ? (
          <div className="py-12 text-center text-gray-500 text-sm">
            No inquiries recorded in this period. Submissions on the Contact Page will appear here automatically.
          </div>
        ) : (
          <div className="divide-y divide-gray-100 mt-2">
            {recentLeads.map((lead) => {
              const isFollowUpDue =
                lead.followUpDate &&
                !lead.followUpCompleted &&
                new Date(lead.followUpDate) <= new Date();

              return (
                <div
                  key={lead._id}
                  className="py-4.5 flex flex-col lg:flex-row lg:items-center justify-between gap-4 hover:bg-gray-50/70 p-3 rounded-2xl transition-colors"
                >
                  {/* Lead Info */}
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-sm font-bold text-gray-900">
                        {lead.fullName}
                      </h3>
                      <span className="text-xs text-gray-500">•</span>
                      <span className="text-xs text-emerald-800 font-semibold bg-emerald-50 px-2 py-0.5 rounded-md">
                        {lead.subject}
                      </span>
                      <span className="text-[10px] font-bold text-gray-600 bg-gray-100 px-2 py-0.5 rounded-md capitalize">
                        Source: {lead.source?.replace(/_/g, " ") || "Inquiry"}
                      </span>
                      {lead.priority === "high" || lead.priority === "urgent" ? (
                        <span className="text-[10px] font-bold text-red-700 bg-red-50 border border-red-200 px-2 py-0.5 rounded-full">
                          High Priority
                        </span>
                      ) : null}
                    </div>

                    <p className="text-xs text-gray-600 mt-1 line-clamp-1 italic">
                      &quot;{lead.message || "Customer requested dietitian consultation"}&quot;
                    </p>

                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[11.5px] text-gray-500 mt-2">
                      <span className="flex items-center gap-1">
                        <Mail className="w-3 h-3 text-gray-400" />
                        {lead.email}
                      </span>
                      {lead.phone && (
                        <span className="flex items-center gap-1 font-semibold text-gray-700">
                          <Phone className="w-3 h-3 text-gray-400" />
                          {lead.phone}
                        </span>
                      )}
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-gray-400" />
                        {new Date(lead.createdAt).toLocaleDateString()}
                      </span>
                      {lead.followUpDate && (
                        <span
                          className={`flex items-center gap-1 font-bold ${
                            isFollowUpDue ? "text-amber-700" : "text-blue-700"
                          }`}
                        >
                          <CalendarClock className="w-3 h-3" />
                          Follow-up: {new Date(lead.followUpDate).toLocaleDateString()}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Actions for Sales Rep / Admin */}
                  <div className="flex flex-wrap items-center gap-2 shrink-0">
                    <select
                      value={lead.status}
                      onChange={(e) => handleQuickStatus(lead._id, e.target.value)}
                      className={`text-xs font-bold py-1.5 px-2.5 rounded-xl border cursor-pointer outline-none transition-colors ${
                        lead.status === "new"
                          ? "bg-emerald-50 text-emerald-900 border-emerald-200"
                          : lead.status === "contacted"
                          ? "bg-blue-50 text-blue-900 border-blue-200"
                          : lead.status === "in_discussion"
                          ? "bg-indigo-50 text-indigo-900 border-indigo-200"
                          : lead.status === "followup_scheduled"
                          ? "bg-amber-50 text-amber-900 border-amber-200"
                          : lead.status === "converted"
                          ? "bg-purple-50 text-purple-900 border-purple-200"
                          : "bg-gray-100 text-gray-700 border-gray-200"
                      }`}
                    >
                      <option value="new">New Lead</option>
                      <option value="contacted">Contacted</option>
                      <option value="in_discussion">In Discussion</option>
                      <option value="followup_scheduled">Follow-up Set</option>
                      <option value="converted">Converted Client</option>
                      <option value="lost">Lost</option>
                    </select>

                    <button
                      type="button"
                      onClick={() => {
                        setSelectedLead(lead);
                        setActiveModal("contact");
                      }}
                      className="px-3 py-1.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-[#10793f] font-bold text-xs inline-flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>Contact</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        setSelectedLead(lead);
                        setActiveModal("followup");
                      }}
                      className="px-3 py-1.5 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-800 font-bold text-xs inline-flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <CalendarClock className="w-3.5 h-3.5" />
                      <span>Follow-up</span>
                    </button>

                    {!lead.clientProfile?.isClient && (
                      <button
                        type="button"
                        onClick={() => {
                          setSelectedLead(lead);
                          setActiveModal("convert");
                        }}
                        className="px-3 py-1.5 rounded-xl bg-[#10793f] hover:bg-[#0c592e] text-white font-bold text-xs inline-flex items-center gap-1 transition-colors cursor-pointer"
                      >
                        <UserCheck className="w-3.5 h-3.5" />
                        <span>Convert</span>
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* ─────────────────────────────────────────────────────────────
          5. MODAL: ADD CUSTOM LEAD
      ───────────────────────────────────────────────────────────── */}
      {activeModal === "addLead" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-gray-100 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-gray-100">
              <h3 className="text-lg font-bold text-gray-900">
                Generate Custom Lead
              </h3>
              <button
                onClick={() => setActiveModal(null)}
                className="text-gray-400 hover:text-gray-700 font-bold text-sm"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleAddCustomLead} className="space-y-3">
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">
                  Customer Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={customLead.fullName}
                  onChange={(e) =>
                    setCustomLead({ ...customLead, fullName: e.target.value })
                  }
                  placeholder="e.g. Ramesh Chandra"
                  className="w-full text-xs p-2.5 rounded-xl border border-gray-200 outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={customLead.email}
                    onChange={(e) =>
                      setCustomLead({ ...customLead, email: e.target.value })
                    }
                    placeholder="email@example.com"
                    className="w-full text-xs p-2.5 rounded-xl border border-gray-200 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    value={customLead.phone}
                    onChange={(e) =>
                      setCustomLead({ ...customLead, phone: e.target.value })
                    }
                    placeholder="+91..."
                    className="w-full text-xs p-2.5 rounded-xl border border-gray-200 outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">
                  Service / Subject
                </label>
                <input
                  type="text"
                  value={customLead.subject}
                  onChange={(e) =>
                    setCustomLead({ ...customLead, subject: e.target.value })
                  }
                  className="w-full text-xs p-2.5 rounded-xl border border-gray-200 outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    Lead Source *
                  </label>
                  <select
                    value={customLead.source}
                    onChange={(e) =>
                      setCustomLead({ ...customLead, source: e.target.value })
                    }
                    className="w-full text-xs p-2.5 rounded-xl border border-gray-200 outline-none"
                  >
                    <option value="manual_entry">Manual Sales Inquiry</option>
                    <option value="google_ads">Google Search / Ads</option>
                    <option value="facebook_instagram">Instagram / Social</option>
                    <option value="referral">Doctor / Patient Referral</option>
                    <option value="contact_page">Contact Page Form</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    Expected Deal (₹)
                  </label>
                  <input
                    type="number"
                    value={customLead.expectedValue}
                    onChange={(e) =>
                      setCustomLead({
                        ...customLead,
                        expectedValue: Number(e.target.value),
                      })
                    }
                    className="w-full text-xs p-2.5 rounded-xl border border-gray-200 outline-none"
                  />
                </div>
              </div>

              <div className="flex justify-end gap-2 pt-3">
                <button
                  type="button"
                  onClick={() => setActiveModal(null)}
                  className="px-4 py-2 rounded-xl text-xs font-bold text-gray-600 hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-[#10793f] text-white text-xs font-bold hover:bg-[#0c592e]"
                >
                  Create Lead
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────
          6. MODAL: BULK IMPORT LEADS
      ───────────────────────────────────────────────────────────── */}
      {activeModal === "import" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-gray-100 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-gray-100">
              <div>
                <h3 className="text-lg font-bold text-gray-900">
                  Bulk Import Leads (CSV / JSON)
                </h3>
                <p className="text-xs text-gray-500">
                  Paste rows format: <code className="bg-gray-100 px-1 py-0.5 rounded">Name,Email,Phone,Subject,Source</code>
                </p>
              </div>
              <button
                onClick={() => setActiveModal(null)}
                className="text-gray-400 hover:text-gray-700 font-bold text-sm"
              >
                ✕
              </button>
            </div>

            {importStatus && (
              <div className="p-3 rounded-xl bg-emerald-50 text-emerald-800 text-xs font-medium">
                {importStatus}
              </div>
            )}

            <form onSubmit={handleBulkImport} className="space-y-3">
              <div>
                <textarea
                  rows={6}
                  required
                  value={importText}
                  onChange={(e) => setImportText(e.target.value)}
                  placeholder={`Dr. Rajesh,rajesh@clinic.com,+919876500001,Clinical Nutrition,referral
Kavita Sen,kavita@domain.com,+919876500002,Weight Loss Program,google_ads`}
                  className="w-full text-xs font-mono p-3 rounded-xl border border-gray-200 outline-none bg-gray-50/50"
                />
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setActiveModal(null)}
                  className="px-4 py-2 rounded-xl text-xs font-bold text-gray-600 hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-[#10793f] text-white text-xs font-bold hover:bg-[#0c592e]"
                >
                  Start Import
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────
          7. MODAL: CONTACT CUSTOMER
      ───────────────────────────────────────────────────────────── */}
      {activeModal === "contact" && selectedLead && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-gray-100 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-gray-100">
              <div>
                <h3 className="text-lg font-bold text-gray-900">
                  Contact Customer: {selectedLead.fullName}
                </h3>
                <p className="text-xs text-gray-500">
                  {selectedLead.email} • {selectedLead.phone || "No phone provided"}
                </p>
              </div>
              <button
                onClick={() => setActiveModal(null)}
                className="text-gray-400 hover:text-gray-700 font-bold text-sm"
              >
                ✕
              </button>
            </div>

            <div className="grid grid-cols-3 gap-2 py-1">
              {selectedLead.phone ? (
                <a
                  href={`tel:${selectedLead.phone.replace(/\s+/g, "")}`}
                  className="flex flex-col items-center justify-center p-3 rounded-2xl bg-emerald-50 hover:bg-emerald-100 text-[#10793f] font-bold text-xs gap-1 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span>Direct Call</span>
                </a>
              ) : null}

              {selectedLead.phone ? (
                <a
                  href={`https://wa.me/${selectedLead.phone.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                    `Hello ${selectedLead.fullName}, thank you for contacting DietNexa regarding ${selectedLead.subject}! How can we best assist your nutrition goals?`
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-col items-center justify-center p-3 rounded-2xl bg-green-50 hover:bg-green-100 text-green-700 font-bold text-xs gap-1 transition-colors"
                >
                  <MessageCircle className="w-5 h-5 text-green-600" />
                  <span>WhatsApp</span>
                </a>
              ) : null}

              <a
                href={`mailto:${selectedLead.email}?subject=${encodeURIComponent(
                  `DietNexa Consultation: ${selectedLead.subject}`
                )}`}
                className="flex flex-col items-center justify-center p-3 rounded-2xl bg-blue-50 hover:bg-blue-100 text-blue-700 font-bold text-xs gap-1 transition-colors"
              >
                <Mail className="w-5 h-5 text-blue-600" />
                <span>Send Email</span>
              </a>
            </div>

            <form onSubmit={handleSaveContactLog} className="space-y-3 pt-2">
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">
                  Channel Used
                </label>
                <select
                  value={contactChannel}
                  onChange={(e) => setContactChannel(e.target.value)}
                  className="w-full text-xs p-2.5 rounded-xl border border-gray-200 outline-none"
                >
                  <option value="phone">Phone Call</option>
                  <option value="whatsapp">WhatsApp Message</option>
                  <option value="email">Email</option>
                  <option value="in_person">Video Consultation</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">
                  Call Outcome
                </label>
                <select
                  value={contactOutcome}
                  onChange={(e) => setContactOutcome(e.target.value)}
                  className="w-full text-xs p-2.5 rounded-xl border border-gray-200 outline-none"
                >
                  <option value="connected_interested">Connected - Interested in Plan</option>
                  <option value="connected_followup_needed">Connected - Needs Follow-up</option>
                  <option value="busy_no_answer">No Answer / Busy</option>
                  <option value="converted">Converted on Call</option>
                  <option value="not_interested">Not Interested</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">
                  Interaction Notes
                </label>
                <textarea
                  rows={3}
                  value={contactNotes}
                  onChange={(e) => setContactNotes(e.target.value)}
                  placeholder="e.g. Spoke to client, explained 3-month weight loss package..."
                  className="w-full text-xs p-2.5 rounded-xl border border-gray-200 outline-none"
                />
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setActiveModal(null)}
                  className="px-4 py-2 rounded-xl text-xs font-bold text-gray-600 hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-[#10793f] text-white text-xs font-bold hover:bg-[#0c592e]"
                >
                  Save to CRM History
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────
          8. MODAL: SET FOLLOW-UP
      ───────────────────────────────────────────────────────────── */}
      {activeModal === "followup" && selectedLead && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-gray-100 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-gray-100">
              <h3 className="text-lg font-bold text-gray-900">
                Schedule Follow-up: {selectedLead.fullName}
              </h3>
              <button
                onClick={() => setActiveModal(null)}
                className="text-gray-400 hover:text-gray-700 font-bold text-sm"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSaveFollowUp} className="space-y-3">
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">
                  Follow-up Date &amp; Time *
                </label>
                <input
                  type="datetime-local"
                  required
                  value={followUpDate}
                  onChange={(e) => setFollowUpDate(e.target.value)}
                  className="w-full text-xs p-2.5 rounded-xl border border-gray-200 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">
                  Follow-up Purpose / Reminder Note
                </label>
                <textarea
                  rows={3}
                  value={followUpNotes}
                  onChange={(e) => setFollowUpNotes(e.target.value)}
                  placeholder="e.g. Call to confirm package enrolment..."
                  className="w-full text-xs p-2.5 rounded-xl border border-gray-200 outline-none"
                />
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setActiveModal(null)}
                  className="px-4 py-2 rounded-xl text-xs font-bold text-gray-600 hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-amber-600 text-white text-xs font-bold hover:bg-amber-700"
                >
                  Set Follow-up
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────
          9. MODAL: CONVERT TO ACTIVE CLIENT
      ───────────────────────────────────────────────────────────── */}
      {activeModal === "convert" && selectedLead && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-gray-100 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-gray-100">
              <div>
                <h3 className="text-lg font-bold text-gray-900">
                  Convert to Active Client
                </h3>
                <p className="text-xs text-emerald-700 font-semibold">
                  Enrolling {selectedLead.fullName}
                </p>
              </div>
              <button
                onClick={() => setActiveModal(null)}
                className="text-gray-400 hover:text-gray-700 font-bold text-sm"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSaveConvert} className="space-y-3">
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">
                  Enrolled Nutrition Plan
                </label>
                <select
                  value={clientPlan}
                  onChange={(e) => setClientPlan(e.target.value)}
                  className="w-full text-xs p-2.5 rounded-xl border border-gray-200 outline-none"
                >
                  <option value="Weight Loss Management Program">Weight Loss Management</option>
                  <option value="Disease Management (Diabetes & BP)">Disease Management</option>
                  <option value="Sports & Athletic Nutrition">Sports Nutrition</option>
                  <option value="Pregnancy & Postnatal Diet">Pregnancy & Lactation</option>
                  <option value="Child & Teen Nutrition">Child & Teen Growth</option>
                  <option value="General Wellness & Gut Health">General Wellness</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">
                  Amount Paid (INR ₹)
                </label>
                <input
                  type="number"
                  value={clientAmount}
                  onChange={(e) => setClientAmount(Number(e.target.value))}
                  className="w-full text-xs p-2.5 rounded-xl border border-gray-200 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">
                  Assigned Clinical Dietitian
                </label>
                <select
                  value={clientDietitian}
                  onChange={(e) => setClientDietitian(e.target.value)}
                  className="w-full text-xs p-2.5 rounded-xl border border-gray-200 outline-none"
                >
                  <option value="Dr. Ananya Sen">Dr. Ananya Sen (Weight Loss & Metabolic)</option>
                  <option value="Dr. Arjun Mehta">Dr. Arjun Mehta (Sports & Performance)</option>
                  <option value="Dr. Sneha Iyer">Dr. Sneha Iyer (Clinical Diabetes & PCOS)</option>
                  <option value="Dr. Rohit Verma">Dr. Rohit Verma (Gut Health & Wellness)</option>
                  <option value="Dr. Priya Sharma">Dr. Priya Sharma (Maternal & Child)</option>
                </select>
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setActiveModal(null)}
                  className="px-4 py-2 rounded-xl text-xs font-bold text-gray-600 hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-[#10793f] text-white text-xs font-bold hover:bg-[#0c592e]"
                >
                  Confirm Client Enrolment
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
