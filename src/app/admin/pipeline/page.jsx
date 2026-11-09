"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Columns3,
  Search,
  Filter,
  Phone,
  MessageCircle,
  CalendarClock,
  Clock,
  ArrowRight,
  ArrowLeft,
  User,
  Plus,
  Sparkles,
  ChevronRight,
  AlertCircle,
  CheckCircle2,
  DollarSign,
  Tag,
} from "lucide-react";
import {
  fetchPipelineApi,
  moveLeadStageApi,
  getCurrentStaffUser,
  setFollowUpApi,
  addContactLogApi,
  submitContactLead,
} from "@/lib/crmApi";

export default function KanbanPipelinePage() {
  const [currentUser, setCurrentUser] = useState(null);
  const [columns, setColumns] = useState({});
  const [totalCount, setTotalCount] = useState(0);
  const [loading, setLoading] = useState(true);

  // Filters
  const [search, setSearch] = useState("");
  const [assignedFilter, setAssignedFilter] = useState("all");
  const [priorityFilter, setPriorityFilter] = useState("all");
  const [sourceFilter, setSourceFilter] = useState("all");

  // Drag and drop state
  const [draggedLeadId, setDraggedLeadId] = useState(null);
  const [dragOverCol, setDragOverCol] = useState(null);

  // Quick modals
  const [activeModal, setActiveModal] = useState(null);
  const [selectedLead, setSelectedLead] = useState(null);
  const [followUpDate, setFollowUpDate] = useState("");
  const [followUpNotes, setFollowUpNotes] = useState("");

  // New Lead Modal
  const [showAddLead, setShowAddLead] = useState(false);
  const [newLeadData, setNewLeadData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "Weight Loss Nutrition Plan",
    source: "manual_entry",
    priority: "medium",
    expectedValue: 8500,
  });

  const loadPipeline = async () => {
    setLoading(true);
    const user = getCurrentStaffUser();
    setCurrentUser(user);

    try {
      const data = await fetchPipelineApi({
        assignedTo: assignedFilter,
        priority: priorityFilter,
        source: sourceFilter,
      });
      if (data && data.columns) {
        setColumns(data.columns);
        setTotalCount(data.totalCount || 0);
      }
    } catch (err) {
      console.error("Failed to load pipeline:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadPipeline();
  }, [assignedFilter, priorityFilter, sourceFilter]);

  const handleMoveStage = async (leadId, targetStage) => {
    await moveLeadStageApi(leadId, targetStage);
    await loadPipeline();
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
    await loadPipeline();
  };

  const handleCreateCustomLead = async (e) => {
    e.preventDefault();
    await submitContactLead(newLeadData);
    setShowAddLead(false);
    setNewLeadData({
      fullName: "",
      email: "",
      phone: "",
      subject: "Weight Loss Nutrition Plan",
      source: "manual_entry",
      priority: "medium",
      expectedValue: 8500,
    });
    await loadPipeline();
  };

  const STAGE_ORDER = [
    { key: "new", name: "New Inquiries", bg: "bg-emerald-50", border: "border-emerald-200", badge: "bg-emerald-100 text-emerald-800" },
    { key: "contacted", name: "Contacted", bg: "bg-blue-50", border: "border-blue-200", badge: "bg-blue-100 text-blue-800" },
    { key: "in_discussion", name: "In Discussion", bg: "bg-indigo-50", border: "border-indigo-200", badge: "bg-indigo-100 text-indigo-800" },
    { key: "followup_scheduled", name: "Follow-up Scheduled", bg: "bg-amber-50", border: "border-amber-200", badge: "bg-amber-100 text-amber-800" },
    { key: "converted", name: "Won / Converted", bg: "bg-purple-50", border: "border-purple-200", badge: "bg-purple-100 text-purple-800" },
    { key: "lost", name: "Lost", bg: "bg-gray-50", border: "border-gray-200", badge: "bg-gray-200 text-gray-700" },
  ];

  return (
    <div className="space-y-6">
      {/* ─────────────────────────────────────────────────────────────
          1. HEADER & ACTIONS
      ───────────────────────────────────────────────────────────── */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold mb-2">
            <Columns3 className="w-3.5 h-3.5 text-[#10793f]" />
            <span>Interactive Sales Pipeline</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">
            Lead Kanban Pipeline
          </h1>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            Visual pipeline board. Move inquiries seamlessly from first touch to converted patient.
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={() => setShowAddLead(true)}
            className="px-4 py-2.5 rounded-xl bg-[#10793f] hover:bg-[#0c592e] text-white text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-colors cursor-pointer shadow-xs"
          >
            <Plus className="w-4 h-4" />
            <span>Add Custom Lead</span>
          </button>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          2. FILTERS TOOLBAR
      ───────────────────────────────────────────────────────────── */}
      <div className="bg-white p-4 rounded-2xl border border-gray-200/80 shadow-xs">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {/* Search */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
              <Search className="w-4 h-4" />
            </div>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search customer name, email..."
              className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:outline-none focus:border-[#10793f] transition-all"
            />
          </div>

          {/* Staff filter */}
          <div>
            <select
              value={assignedFilter}
              onChange={(e) => setAssignedFilter(e.target.value)}
              className="w-full py-2 px-3 text-xs rounded-xl border border-gray-200 bg-gray-50/50 font-medium text-gray-700"
            >
              <option value="all">All Staff Inquiries</option>
              {currentUser?.role === "sales" && (
                <option value="me">Assigned to Me ({currentUser.name})</option>
              )}
              <option value="unassigned">Unassigned Pool</option>
            </select>
          </div>

          {/* Lead Source */}
          <div>
            <select
              value={sourceFilter}
              onChange={(e) => setSourceFilter(e.target.value)}
              className="w-full py-2 px-3 text-xs rounded-xl border border-gray-200 bg-gray-50/50 font-medium text-gray-700"
            >
              <option value="all">All Lead Sources</option>
              <option value="contact_page">Contact Page Form</option>
              <option value="consultation_modal">Consultation Modal</option>
              <option value="google_ads">Google Search / Ads</option>
              <option value="facebook_instagram">Instagram / Facebook</option>
              <option value="referral">Doctor / Patient Referral</option>
              <option value="manual_entry">Manual Sales Entry</option>
            </select>
          </div>

          {/* Priority */}
          <div>
            <select
              value={priorityFilter}
              onChange={(e) => setPriorityFilter(e.target.value)}
              className="w-full py-2 px-3 text-xs rounded-xl border border-gray-200 bg-gray-50/50 font-medium text-gray-700"
            >
              <option value="all">All Priorities</option>
              <option value="urgent">Urgent</option>
              <option value="high">High Priority</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
          </div>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          3. KANBAN HORIZONTAL BOARD
      ───────────────────────────────────────────────────────────── */}
      {loading ? (
        <div className="py-20 text-center text-gray-400 text-sm">
          Loading Kanban Pipeline...
        </div>
      ) : (
        <div className="flex gap-4 overflow-x-auto pb-6 items-start">
          {STAGE_ORDER.map((stageMeta, stageIdx) => {
            const colData = columns[stageMeta.key] || { leads: [], totalValue: 0 };
            let stageLeads = colData.leads || [];

            if (search.trim()) {
              const s = search.toLowerCase();
              stageLeads = stageLeads.filter(
                (l) =>
                  l.fullName.toLowerCase().includes(s) ||
                  l.email.toLowerCase().includes(s) ||
                  (l.phone && l.phone.includes(s)) ||
                  (l.subject && l.subject.toLowerCase().includes(s))
              );
            }

            const isDropTarget = dragOverCol === stageMeta.key;

            return (
              <div
                key={stageMeta.key}
                onDragOver={(e) => {
                  e.preventDefault();
                  e.dataTransfer.dropEffect = "move";
                  if (dragOverCol !== stageMeta.key) setDragOverCol(stageMeta.key);
                }}
                onDragLeave={(e) => {
                  // Only clear if leaving the column itself
                  if (!e.currentTarget.contains(e.relatedTarget)) {
                    setDragOverCol(null);
                  }
                }}
                onDrop={(e) => {
                  e.preventDefault();
                  const leadId = e.dataTransfer.getData("text/plain") || draggedLeadId;
                  if (leadId) {
                    handleMoveStage(leadId, stageMeta.key);
                  }
                  setDragOverCol(null);
                  setDraggedLeadId(null);
                }}
                className={`w-80 shrink-0 rounded-3xl p-3.5 border transition-all flex flex-col max-h-[calc(100vh-250px)] ${
                  isDropTarget
                    ? "bg-emerald-50/80 border-2 border-dashed border-[#10793f] shadow-md scale-[1.01]"
                    : "bg-gray-100/70 border-gray-200/80"
                }`}
              >
                {/* Column Header */}
                <div className="flex items-center justify-between pb-3 px-1 border-b border-gray-200">
                  <div className="flex items-center gap-2">
                    <span className="font-extrabold text-sm text-gray-900">
                      {stageMeta.name}
                    </span>
                    <span className={`text-[11px] font-black px-2 py-0.5 rounded-full ${stageMeta.badge}`}>
                      {stageLeads.length}
                    </span>
                  </div>
                  <span className="text-[11px] font-bold text-gray-500">
                    ₹{(colData.totalValue || 0).toLocaleString()}
                  </span>
                </div>

                {/* Cards Container */}
                <div className="flex-1 overflow-y-auto space-y-3 pt-3 pr-1">
                  {stageLeads.length === 0 ? (
                    <div className="py-8 text-center text-xs text-gray-400 italic">
                      {isDropTarget ? "Drop lead here" : "No leads in this stage"}
                    </div>
                  ) : (
                    stageLeads.map((lead) => {
                      const isDragging = draggedLeadId === lead._id;

                      return (
                        <div
                          key={lead._id}
                          draggable="true"
                          onDragStart={(e) => {
                            setDraggedLeadId(lead._id);
                            e.dataTransfer.setData("text/plain", lead._id);
                            e.dataTransfer.effectAllowed = "move";
                          }}
                          onDragEnd={() => {
                            setDraggedLeadId(null);
                            setDragOverCol(null);
                          }}
                          className={`bg-white rounded-2xl p-4 border transition-all space-y-2.5 cursor-grab active:cursor-grabbing hover:shadow-md ${
                            isDragging
                              ? "opacity-30 scale-95 border-dashed border-[#10793f]"
                              : "border-gray-200/90 shadow-xs"
                          }`}
                        >
                          {/* Title & Priority */}
                          <div className="flex items-start justify-between gap-2">
                            <div>
                              <h4 className="text-sm font-bold text-gray-900 leading-snug">
                                {lead.fullName}
                              </h4>
                              <p className="text-[11px] text-emerald-800 font-semibold mt-0.5">
                                {lead.subject}
                              </p>
                            </div>
                            <span
                              className={`text-[9.5px] font-extrabold uppercase px-2 py-0.5 rounded-md ${
                                lead.priority === "urgent"
                                  ? "bg-red-100 text-red-800"
                                  : lead.priority === "high"
                                  ? "bg-orange-100 text-orange-800"
                                  : "bg-gray-100 text-gray-600"
                              }`}
                            >
                              {lead.priority}
                            </span>
                          </div>

                        {/* Source Tag & Est Value */}
                        <div className="flex items-center justify-between text-[11px] text-gray-500 pt-1 border-t border-gray-50">
                          <span className="inline-flex items-center gap-1 font-medium bg-gray-50 px-2 py-0.5 rounded-md text-gray-600">
                            <Tag className="w-3 h-3 text-gray-400" />
                            {lead.source?.replace(/_/g, " ") || "Inquiry"}
                          </span>
                          <span className="font-extrabold text-[#0c3820]">
                            ₹{(lead.expectedValue || (lead.clientProfile?.amountPaid || 7500)).toLocaleString()}
                          </span>
                        </div>

                        {/* Follow up reminder if set */}
                        {lead.followUpDate && (
                          <div className="text-[10.5px] font-bold text-amber-800 bg-amber-50 px-2 py-1 rounded-lg flex items-center gap-1 border border-amber-200/60">
                            <CalendarClock className="w-3 h-3 text-amber-700" />
                            <span>Follow-up: {new Date(lead.followUpDate).toLocaleDateString()}</span>
                          </div>
                        )}

                        {/* Customer Direct Contact Shortcuts */}
                        <div className="flex items-center justify-between pt-1 border-t border-gray-100">
                          <div className="flex items-center gap-1">
                            {lead.phone && (
                              <a
                                href={`tel:${lead.phone.replace(/\s+/g, "")}`}
                                className="p-1.5 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700"
                                title="Call"
                              >
                                <Phone className="w-3 h-3" />
                              </a>
                            )}
                            {lead.phone && (
                              <a
                                href={`https://wa.me/${lead.phone.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                                  `Hello ${lead.fullName}, thank you for reaching DietNexa regarding ${lead.subject}!`
                                )}`}
                                target="_blank"
                                rel="noreferrer"
                                className="p-1.5 rounded-lg bg-green-50 hover:bg-green-100 text-green-700"
                                title="WhatsApp"
                              >
                                <MessageCircle className="w-3 h-3 text-green-600" />
                              </a>
                            )}
                            <button
                              type="button"
                              onClick={() => {
                                setSelectedLead(lead);
                                setActiveModal("followup");
                              }}
                              className="p-1.5 rounded-lg bg-amber-50 hover:bg-amber-100 text-amber-800"
                              title="Set Follow-up"
                            >
                              <CalendarClock className="w-3 h-3 text-amber-700" />
                            </button>
                          </div>

                          {/* Stage Transition Controls */}
                          <div className="flex items-center gap-1">
                            {stageIdx > 0 && (
                              <button
                                type="button"
                                onClick={() => handleMoveStage(lead._id, STAGE_ORDER[stageIdx - 1].key)}
                                className="p-1 rounded-md text-gray-400 hover:text-gray-700 hover:bg-gray-100 cursor-pointer"
                                title={`Move back to ${STAGE_ORDER[stageIdx - 1].name}`}
                              >
                                <ArrowLeft className="w-3.5 h-3.5" />
                              </button>
                            )}

                            {stageIdx < STAGE_ORDER.length - 1 && (
                              <button
                                type="button"
                                onClick={() => handleMoveStage(lead._id, STAGE_ORDER[stageIdx + 1].key)}
                                className="p-1 rounded-md text-[#10793f] hover:bg-emerald-50 cursor-pointer"
                                title={`Advance to ${STAGE_ORDER[stageIdx + 1].name}`}
                              >
                                <ArrowRight className="w-3.5 h-3.5" />
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
              </div>
            );
          })}
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────
          4. MODAL: ADD CUSTOM LEAD
      ───────────────────────────────────────────────────────────── */}
      {showAddLead && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-gray-100 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-gray-100">
              <h3 className="text-lg font-bold text-gray-900">
                Generate Custom CRM Lead
              </h3>
              <button
                onClick={() => setShowAddLead(false)}
                className="text-gray-400 hover:text-gray-700 font-bold text-sm"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleCreateCustomLead} className="space-y-3">
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">
                  Customer Name *
                </label>
                <input
                  type="text"
                  required
                  value={newLeadData.fullName}
                  onChange={(e) =>
                    setNewLeadData({ ...newLeadData, fullName: e.target.value })
                  }
                  placeholder="e.g. Ananya Roy"
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
                    value={newLeadData.email}
                    onChange={(e) =>
                      setNewLeadData({ ...newLeadData, email: e.target.value })
                    }
                    placeholder="name@email.com"
                    className="w-full text-xs p-2.5 rounded-xl border border-gray-200 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    value={newLeadData.phone}
                    onChange={(e) =>
                      setNewLeadData({ ...newLeadData, phone: e.target.value })
                    }
                    placeholder="+91..."
                    className="w-full text-xs p-2.5 rounded-xl border border-gray-200 outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">
                  Dietary Service / Subject
                </label>
                <input
                  type="text"
                  value={newLeadData.subject}
                  onChange={(e) =>
                    setNewLeadData({ ...newLeadData, subject: e.target.value })
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
                    value={newLeadData.source}
                    onChange={(e) =>
                      setNewLeadData({ ...newLeadData, source: e.target.value })
                    }
                    className="w-full text-xs p-2.5 rounded-xl border border-gray-200 outline-none font-medium text-gray-800"
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
                    Estimated Deal (INR ₹)
                  </label>
                  <input
                    type="number"
                    value={newLeadData.expectedValue}
                    onChange={(e) =>
                      setNewLeadData({
                        ...newLeadData,
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
                  onClick={() => setShowAddLead(false)}
                  className="px-4 py-2 rounded-xl text-xs font-bold text-gray-600 hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-[#10793f] text-white text-xs font-bold hover:bg-[#0c592e]"
                >
                  Add Lead to Pipeline
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────
          5. MODAL: SET FOLLOW-UP
      ───────────────────────────────────────────────────────────── */}
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
                  Follow-up Purpose / Reminder Note
                </label>
                <textarea
                  rows={3}
                  value={followUpNotes}
                  onChange={(e) => setFollowUpNotes(e.target.value)}
                  placeholder="e.g. Discuss dietary consultation packages..."
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
    </div>
  );
}

