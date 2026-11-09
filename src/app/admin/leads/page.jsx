"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Inbox,
  Search,
  Filter,
  Phone,
  Mail,
  MessageCircle,
  CalendarClock,
  UserCheck,
  Clock,
  User,
  Plus,
  ChevronDown,
  ChevronUp,
  AlertCircle,
  Sparkles,
} from "lucide-react";
import {
  fetchLeads,
  getCurrentStaffUser,
  updateLeadApi,
  setFollowUpApi,
  addContactLogApi,
  convertToClientApi,
} from "@/lib/crmApi";

export default function AdminLeadsPage() {
  const [currentUser, setCurrentUser] = useState(null);
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);

  // Filters
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [priorityFilter, setPriorityFilter] = useState("all");
  const [assignedFilter, setAssignedFilter] = useState("all");

  // Expanded details for history/notes
  const [expandedLeadId, setExpandedLeadId] = useState(null);

  // Modals
  const [activeModal, setActiveModal] = useState(null);
  const [selectedLead, setSelectedLead] = useState(null);

  // Modal forms
  const [followUpDate, setFollowUpDate] = useState("");
  const [followUpNotes, setFollowUpNotes] = useState("");
  const [contactChannel, setContactChannel] = useState("phone");
  const [contactOutcome, setContactOutcome] = useState("connected_interested");
  const [contactNotes, setContactNotes] = useState("");
  const [clientPlan, setClientPlan] = useState("Weight Loss Management Program");
  const [clientAmount, setClientAmount] = useState(9999);
  const [clientDietitian, setClientDietitian] = useState("Dr. Ananya Sen");
  const [newNote, setNewNote] = useState("");

  const loadLeads = async () => {
    setLoading(true);
    const user = getCurrentStaffUser();
    setCurrentUser(user);

    try {
      const data = await fetchLeads({
        search,
        status: statusFilter,
        priority: priorityFilter,
        assignedTo: assignedFilter,
      });
      if (data && data.leads) {
        setLeads(data.leads);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadLeads();
  }, [search, statusFilter, priorityFilter, assignedFilter]);

  const handleStatusChange = async (leadId, newStatus) => {
    await updateLeadApi(leadId, { status: newStatus });
    await loadLeads();
  };

  const handleAddNote = async (leadId) => {
    if (!newNote.trim()) return;
    await updateLeadApi(leadId, { note: newNote.trim() });
    setNewNote("");
    await loadLeads();
  };

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
    await loadLeads();
  };

  const handleSaveFollowUp = async (e) => {
    e.preventDefault();
    if (!selectedLead || !followUpDate) return;
    await setFollowUpApi(selectedLead._id, {
      followUpDate,
      followUpNotes,
    });
    setActiveModal(null);
    setSelectedLead(null);
    await loadLeads();
  };

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
    await loadLeads();
  };

  return (
    <div className="space-y-6">
      {/* ─────────────────────────────────────────────────────────────
          1. HEADER & PAGE TITLE
      ───────────────────────────────────────────────────────────── */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">
            Customer Inquiries &amp; Leads
          </h1>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            {currentUser?.role === "sales"
              ? "Sales Portal: Reach out, log calls, schedule follow-ups, and convert leads into DietNexa clients."
              : "Manage all incoming inquiries submitted via the Contact page and Consultation forms."}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="px-3 py-1.5 rounded-xl bg-emerald-50 text-emerald-900 font-bold text-xs border border-emerald-200">
            {leads.length} {leads.length === 1 ? "Inquiry" : "Inquiries"}
          </span>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          2. SEARCH & FILTER TOOLBAR
      ───────────────────────────────────────────────────────────── */}
      <div className="bg-white p-4 sm:p-5 rounded-2xl border border-gray-200/80 shadow-xs space-y-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {/* Search Input */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
              <Search className="w-4 h-4" />
            </div>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search name, email, phone..."
              className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:outline-none focus:border-[#10793f] transition-all"
            />
          </div>

          {/* Status Filter */}
          <div>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="w-full py-2 px-3 text-xs rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:outline-none focus:border-[#10793f] transition-all font-medium text-gray-700"
            >
              <option value="all">All Statuses</option>
              <option value="new">New Inquiries</option>
              <option value="contacted">Contacted</option>
              <option value="followup_scheduled">Follow-up Scheduled</option>
              <option value="converted">Converted Clients</option>
              <option value="lost">Lost</option>
            </select>
          </div>

          {/* Priority Filter */}
          <div>
            <select
              value={priorityFilter}
              onChange={(e) => setPriorityFilter(e.target.value)}
              className="w-full py-2 px-3 text-xs rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:outline-none focus:border-[#10793f] transition-all font-medium text-gray-700"
            >
              <option value="all">All Priorities</option>
              <option value="urgent">Urgent</option>
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
          </div>

          {/* Sales Scope Filter */}
          <div>
            <select
              value={assignedFilter}
              onChange={(e) => setAssignedFilter(e.target.value)}
              className="w-full py-2 px-3 text-xs rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:outline-none focus:border-[#10793f] transition-all font-medium text-gray-700"
            >
              <option value="all">All Staff Assignments</option>
              {currentUser?.role === "sales" && (
                <option value="me">Assigned to Me ({currentUser.name})</option>
              )}
              <option value="unassigned">Unassigned Inquiries</option>
            </select>
          </div>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          3. LEADS LIST
      ───────────────────────────────────────────────────────────── */}
      {loading ? (
        <div className="py-16 text-center text-gray-400 text-sm">
          Loading inquiries...
        </div>
      ) : leads.length === 0 ? (
        <div className="bg-white rounded-3xl p-12 text-center border border-gray-200/80">
          <div className="w-16 h-16 rounded-full bg-emerald-50 text-[#10793f] flex items-center justify-center mx-auto mb-4">
            <Inbox className="w-8 h-8" />
          </div>
          <h3 className="text-lg font-bold text-gray-900">No leads match your filter</h3>
          <p className="text-xs text-gray-500 mt-1 max-w-sm mx-auto">
            Try adjusting your search criteria or clear status filters. New contact page submissions will appear here automatically.
          </p>
        </div>
      ) : (
        <div className="space-y-3.5">
          {leads.map((lead) => {
            const isExpanded = expandedLeadId === lead._id;
            const isClient = lead.clientProfile?.isClient;

            return (
              <div
                key={lead._id}
                className={`bg-white rounded-2xl border transition-all ${
                  isClient
                    ? "border-emerald-300 shadow-xs"
                    : lead.status === "new"
                    ? "border-emerald-200 shadow-xs"
                    : "border-gray-200/90"
                }`}
              >
                {/* Main Card Header */}
                <div className="p-4 sm:p-5">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    {/* Customer Info */}
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <h2 className="text-base font-extrabold text-gray-900">
                          {lead.fullName}
                        </h2>
                        <span className="text-xs text-emerald-800 font-semibold bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                          {lead.subject}
                        </span>

                        {isClient ? (
                          <span className="text-xs font-black text-white bg-[#10793f] px-2.5 py-0.5 rounded-full shadow-xs">
                            Active Client
                          </span>
                        ) : (
                          <span
                            className={`text-[11px] font-bold px-2 py-0.5 rounded-full uppercase ${
                              lead.status === "new"
                                ? "bg-emerald-100 text-emerald-900"
                                : lead.status === "followup_scheduled"
                                ? "bg-amber-100 text-amber-900"
                                : lead.status === "contacted"
                                ? "bg-blue-100 text-blue-900"
                                : "bg-gray-100 text-gray-800"
                            }`}
                          >
                            {lead.status.replace("_", " ")}
                          </span>
                        )}

                        <span
                          className={`text-[10px] font-bold px-2 py-0.5 rounded-md uppercase ${
                            lead.priority === "urgent"
                              ? "bg-red-100 text-red-800"
                              : lead.priority === "high"
                              ? "bg-orange-100 text-orange-800"
                              : "bg-gray-100 text-gray-700"
                          }`}
                        >
                          {lead.priority}
                        </span>
                      </div>

                      {/* Customer Message */}
                      <div className="mt-2 text-xs sm:text-[13px] text-gray-700 bg-gray-50/70 p-2.5 rounded-xl border border-gray-100">
                        <span className="font-semibold text-gray-900">Inquiry Message: </span>
                        {lead.message || "Customer requested personalized consultation."}
                      </div>

                      {/* Meta chips: Email, Phone, Date, Follow-up date */}
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-gray-500 mt-2.5">
                        <span className="flex items-center gap-1 font-medium text-gray-800">
                          <Mail className="w-3.5 h-3.5 text-gray-400" />
                          {lead.email}
                        </span>
                        {lead.phone && (
                          <span className="flex items-center gap-1 font-bold text-gray-900">
                            <Phone className="w-3.5 h-3.5 text-gray-400" />
                            {lead.phone}
                          </span>
                        )}
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-gray-400" />
                          Received {new Date(lead.createdAt).toLocaleString()}
                        </span>
                        {lead.assignedToName && (
                          <span className="flex items-center gap-1 font-semibold text-gray-700">
                            <User className="w-3.5 h-3.5 text-gray-400" />
                            Rep: {lead.assignedToName}
                          </span>
                        )}
                        {lead.followUpDate && (
                          <span className="flex items-center gap-1 font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200">
                            <CalendarClock className="w-3.5 h-3.5" />
                            Follow-up: {new Date(lead.followUpDate).toLocaleString()}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Action Buttons for Sales & Admin */}
                    <div className="flex flex-wrap items-center gap-2 shrink-0">
                      {/* Direct Phone */}
                      {lead.phone && (
                        <a
                          href={`tel:${lead.phone.replace(/\s+/g, "")}`}
                          title="Call Customer"
                          className="p-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors"
                        >
                          <Phone className="w-4 h-4" />
                        </a>
                      )}

                      {/* Direct WhatsApp with prefilled message */}
                      {lead.phone && (
                        <a
                          href={`https://wa.me/${lead.phone.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                            `Hello ${lead.fullName}, thank you for contacting DietNexa regarding ${lead.subject}! Our clinical team is ready to assist you. When is a convenient time to speak?`
                          )}`}
                          target="_blank"
                          rel="noreferrer"
                          title="WhatsApp Customer"
                          className="p-2 rounded-xl bg-green-50 hover:bg-green-100 text-green-700 transition-colors"
                        >
                          <MessageCircle className="w-4 h-4" />
                        </a>
                      )}

                      {/* Log Contact Action */}
                      <button
                        type="button"
                        onClick={() => {
                          setSelectedLead(lead);
                          setActiveModal("contact");
                        }}
                        className="px-3 py-1.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-[#10793f] font-bold text-xs inline-flex items-center gap-1 transition-colors cursor-pointer"
                      >
                        <Phone className="w-3.5 h-3.5" />
                        <span>Log Call</span>
                      </button>

                      {/* Schedule Follow-up */}
                      <button
                        type="button"
                        onClick={() => {
                          setSelectedLead(lead);
                          setActiveModal("followup");
                        }}
                        className="px-3 py-1.5 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-800 font-bold text-xs inline-flex items-center gap-1 transition-colors cursor-pointer"
                      >
                        <CalendarClock className="w-3.5 h-3.5" />
                        <span>Follow-up</span>
                      </button>

                      {/* Convert to Client */}
                      {!isClient && (
                        <button
                          type="button"
                          onClick={() => {
                            setSelectedLead(lead);
                            setActiveModal("convert");
                          }}
                          className="px-3 py-1.5 rounded-xl bg-[#10793f] hover:bg-[#0c592e] text-white font-bold text-xs inline-flex items-center gap-1 transition-colors cursor-pointer shadow-xs"
                        >
                          <UserCheck className="w-3.5 h-3.5" />
                          <span>Convert to Client</span>
                        </button>
                      )}

                      {/* Status Dropdown */}
                      <select
                        value={lead.status}
                        onChange={(e) => handleStatusChange(lead._id, e.target.value)}
                        className="text-xs font-bold py-1.5 px-2 rounded-xl border border-gray-200 bg-white cursor-pointer outline-none"
                      >
                        <option value="new">New</option>
                        <option value="contacted">Contacted</option>
                        <option value="followup_scheduled">Follow-up Set</option>
                        <option value="converted">Converted</option>
                        <option value="lost">Lost</option>
                      </select>

                      {/* Toggle Details Button */}
                      <button
                        type="button"
                        onClick={() =>
                          setExpandedLeadId(isExpanded ? null : lead._id)
                        }
                        className="p-1.5 rounded-xl text-gray-500 hover:text-gray-800 hover:bg-gray-100 transition-colors"
                        title={isExpanded ? "Collapse History" : "View History & Notes"}
                      >
                        {isExpanded ? (
                          <ChevronUp className="w-4 h-4" />
                        ) : (
                          <ChevronDown className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                {/* ─────────────────────────────────────────────────────────
                    EXPANDED: ACTIVITY TIMELINE, CALL LOGS & NOTES
                ───────────────────────────────────────────────────────── */}
                {isExpanded && (
                  <div className="px-4 pb-4 pt-2 border-t border-gray-100 bg-gray-50/50 rounded-b-2xl space-y-3">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Call Logs */}
                      <div>
                        <h4 className="text-xs font-bold text-gray-800 uppercase tracking-wider mb-2">
                          Contact &amp; Call Logs ({lead.callLogs?.length || 0})
                        </h4>
                        {!lead.callLogs || lead.callLogs.length === 0 ? (
                          <p className="text-xs text-gray-400 italic">
                            No calls or messages logged yet. Use &quot;Log Call&quot; to record customer outreach.
                          </p>
                        ) : (
                          <div className="space-y-2 max-h-40 overflow-y-auto">
                            {lead.callLogs.map((log) => (
                              <div
                                key={log._id || Math.random()}
                                className="text-xs bg-white p-2.5 rounded-xl border border-gray-200/70"
                              >
                                <div className="flex items-center justify-between font-bold text-gray-800">
                                  <span className="capitalize text-[#10793f]">
                                    {log.channel} • {log.outcome?.replace(/_/g, " ")}
                                  </span>
                                  <span className="text-[10px] text-gray-400">
                                    {new Date(log.contactedAt).toLocaleDateString()}
                                  </span>
                                </div>
                                {log.notes && (
                                  <p className="text-gray-600 mt-1 italic">
                                    &quot;{log.notes}&quot;
                                  </p>
                                )}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Team Notes & Add Note Input */}
                      <div>
                        <h4 className="text-xs font-bold text-gray-800 uppercase tracking-wider mb-2">
                          Team Notes ({lead.notes?.length || 0})
                        </h4>
                        <div className="space-y-2 max-h-32 overflow-y-auto mb-2">
                          {lead.notes?.map((n) => (
                            <div
                              key={n._id || Math.random()}
                              className="text-xs bg-white p-2.5 rounded-xl border border-gray-200/70"
                            >
                              <div className="flex items-center justify-between font-semibold text-gray-700">
                                <span className="font-bold text-gray-900">{n.authorName}</span>
                                <span className="text-[10px] text-gray-400">
                                  {new Date(n.createdAt).toLocaleDateString()}
                                </span>
                              </div>
                              <p className="text-gray-600 mt-0.5">{n.text}</p>
                            </div>
                          ))}
                        </div>

                        {/* Add note input */}
                        <div className="flex gap-2">
                          <input
                            type="text"
                            value={newNote}
                            onChange={(e) => setNewNote(e.target.value)}
                            placeholder="Add internal note..."
                            className="flex-1 text-xs px-3 py-1.5 rounded-xl border border-gray-200 bg-white"
                          />
                          <button
                            type="button"
                            onClick={() => handleAddNote(lead._id)}
                            className="px-3 py-1.5 rounded-xl bg-gray-900 hover:bg-black text-white text-xs font-bold"
                          >
                            Add
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────
          4. MODALS (Contact, Followup, Convert)
      ───────────────────────────────────────────────────────────── */}
      {/* Contact modal */}
      {activeModal === "contact" && selectedLead && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-gray-100 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-gray-100">
              <div>
                <h3 className="text-lg font-bold text-gray-900">
                  Log Customer Contact: {selectedLead.fullName}
                </h3>
                <p className="text-xs text-gray-500">
                  {selectedLead.email} • {selectedLead.phone || "No phone"}
                </p>
              </div>
              <button
                onClick={() => setActiveModal(null)}
                className="text-gray-400 hover:text-gray-700 font-bold text-sm"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSaveContactLog} className="space-y-3">
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">
                  Channel
                </label>
                <select
                  value={contactChannel}
                  onChange={(e) => setContactChannel(e.target.value)}
                  className="w-full text-xs p-2.5 rounded-xl border border-gray-200 outline-none"
                >
                  <option value="phone">Phone Call</option>
                  <option value="whatsapp">WhatsApp</option>
                  <option value="email">Email</option>
                  <option value="in_person">Video / Meeting</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">
                  Outcome
                </label>
                <select
                  value={contactOutcome}
                  onChange={(e) => setContactOutcome(e.target.value)}
                  className="w-full text-xs p-2.5 rounded-xl border border-gray-200 outline-none"
                >
                  <option value="connected_interested">Connected - Interested</option>
                  <option value="connected_followup_needed">Connected - Follow-up Requested</option>
                  <option value="busy_no_answer">No Answer / Busy</option>
                  <option value="converted">Converted</option>
                  <option value="not_interested">Not Interested</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">
                  Notes
                </label>
                <textarea
                  rows={3}
                  value={contactNotes}
                  onChange={(e) => setContactNotes(e.target.value)}
                  placeholder="Details of the conversation..."
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
                  Save Log
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Follow-up modal */}
      {activeModal === "followup" && selectedLead && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-gray-100 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-gray-100">
              <h3 className="text-lg font-bold text-gray-900">
                Set Follow-up Time: {selectedLead.fullName}
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
                  Follow-up Goal / Reminder
                </label>
                <textarea
                  rows={3}
                  value={followUpNotes}
                  onChange={(e) => setFollowUpNotes(e.target.value)}
                  placeholder="e.g. Call to finalize diet package payment..."
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
                  Save Follow-up
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Convert to client modal */}
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
                  Selected Diet Plan
                </label>
                <select
                  value={clientPlan}
                  onChange={(e) => setClientPlan(e.target.value)}
                  className="w-full text-xs p-2.5 rounded-xl border border-gray-200 outline-none"
                >
                  <option value="Weight Loss Management Program">Weight Loss Management Program</option>
                  <option value="Disease Management (Diabetes & BP)">Disease Management (Diabetes & BP)</option>
                  <option value="Sports & Athletic Nutrition">Sports & Athletic Nutrition</option>
                  <option value="Pregnancy & Lactation Plan">Pregnancy & Lactation Plan</option>
                  <option value="Child & Teen Growth Plan">Child & Teen Growth Plan</option>
                  <option value="General Wellness & Gut Health">General Wellness & Gut Health</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">
                  Package Fee (INR ₹)
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
                  <option value="Dr. Ananya Sen">Dr. Ananya Sen</option>
                  <option value="Dr. Arjun Mehta">Dr. Arjun Mehta</option>
                  <option value="Dr. Sneha Iyer">Dr. Sneha Iyer</option>
                  <option value="Dr. Rohit Verma">Dr. Rohit Verma</option>
                  <option value="Dr. Priya Sharma">Dr. Priya Sharma</option>
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

