"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  CalendarClock,
  Phone,
  MessageCircle,
  Mail,
  CheckCircle2,
  Clock,
  AlertTriangle,
  Search,
  Filter,
  ArrowRight,
  User,
  Sparkles,
} from "lucide-react";
import {
  fetchFollowUpsApi,
  getCurrentStaffUser,
  setFollowUpApi,
  addContactLogApi,
} from "@/lib/crmApi";

export default function AdminFollowUpsPage() {
  const [currentUser, setCurrentUser] = useState(null);
  const [followUps, setFollowUps] = useState([]);
  const [counts, setCounts] = useState({ today: 0, overdue: 0, upcoming: 0, total: 0 });
  const [activeTab, setActiveTab] = useState("today"); // 'today' | 'upcoming' | 'overdue' | 'completed' | 'all'
  const [search, setSearch] = useState("");
  const [assignedFilter, setAssignedFilter] = useState("all");
  const [loading, setLoading] = useState(true);

  // Reschedule modal
  const [rescheduleLead, setRescheduleLead] = useState(null);
  const [newDate, setNewDate] = useState("");
  const [newNotes, setNewNotes] = useState("");

  const loadFollowUps = async () => {
    setLoading(true);
    const user = getCurrentStaffUser();
    setCurrentUser(user);

    try {
      const data = await fetchFollowUpsApi({
        filter: activeTab,
        assignedTo: assignedFilter,
      });
      if (data && data.followUps) {
        let list = data.followUps;
        if (search.trim()) {
          const s = search.toLowerCase();
          list = list.filter(
            (l) =>
              l.fullName.toLowerCase().includes(s) ||
              l.email.toLowerCase().includes(s) ||
              (l.phone && l.phone.includes(s))
          );
        }
        setFollowUps(list);
        if (data.counts) setCounts(data.counts);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadFollowUps();
  }, [activeTab, assignedFilter, search]);

  const handleMarkComplete = async (leadId) => {
    await setFollowUpApi(leadId, { markCompleted: true });
    await loadFollowUps();
  };

  const handleSaveReschedule = async (e) => {
    e.preventDefault();
    if (!rescheduleLead || !newDate) return;
    await setFollowUpApi(rescheduleLead._id, {
      followUpDate: newDate,
      followUpNotes: newNotes,
    });
    setRescheduleLead(null);
    await loadFollowUps();
  };

  const formatRelativeTime = (dateStr) => {
    const target = new Date(dateStr);
    const now = new Date();
    const diffMs = target - now;
    const diffHours = Math.round(diffMs / (1000 * 60 * 60));

    if (diffMs < 0) {
      const pastHours = Math.abs(diffHours);
      if (pastHours < 24) return `Overdue by ${pastHours} hour${pastHours === 1 ? "" : "s"}`;
      const pastDays = Math.round(pastHours / 24);
      return `Overdue by ${pastDays} day${pastDays === 1 ? "" : "s"}`;
    } else {
      if (diffHours < 24) return `Due in ${diffHours} hour${diffHours === 1 ? "" : "s"}`;
      const futureDays = Math.round(diffHours / 24);
      return `Due in ${futureDays} day${futureDays === 1 ? "" : "s"}`;
    }
  };

  return (
    <div className="space-y-6">
      {/* ─────────────────────────────────────────────────────────────
          1. HEADER
      ───────────────────────────────────────────────────────────── */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">
            Follow-up Schedule &amp; Tasks
          </h1>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            Stay on track with scheduled consultation calls, diet reviews, and patient check-ins.
          </p>
        </div>

        <div className="flex items-center gap-2">
          {counts.overdue > 0 && (
            <span className="px-3 py-1.5 rounded-xl bg-red-50 text-red-700 font-bold text-xs border border-red-200 flex items-center gap-1.5">
              <AlertTriangle className="w-3.5 h-3.5 text-red-600" />
              <span>{counts.overdue} Overdue</span>
            </span>
          )}
          <span className="px-3 py-1.5 rounded-xl bg-emerald-50 text-emerald-900 font-bold text-xs border border-emerald-200">
            {counts.today} Due Today
          </span>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          2. FILTER TABS & TOOLBAR
      ───────────────────────────────────────────────────────────── */}
      <div className="bg-white p-4 sm:p-5 rounded-2xl border border-gray-200/80 shadow-xs space-y-3">
        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-2 border-b border-gray-100 pb-3">
          {[
            { id: "today", label: "Today's Follow-ups", count: counts.today },
            { id: "upcoming", label: "Upcoming", count: counts.upcoming },
            { id: "overdue", label: "Overdue", count: counts.overdue, isAlert: counts.overdue > 0 },
            { id: "completed", label: "Completed" },
            { id: "all", label: "All Follow-ups" },
          ].map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                  isActive
                    ? "bg-[#10793f] text-white shadow-xs"
                    : tab.isAlert
                    ? "bg-red-50 text-red-700 hover:bg-red-100"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                <span>{tab.label}</span>
                {tab.count !== undefined && (
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full font-extrabold ${
                      isActive
                        ? "bg-white/20 text-white"
                        : tab.isAlert
                        ? "bg-red-200 text-red-900"
                        : "bg-gray-200 text-gray-800"
                    }`}
                  >
                    {tab.count}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Search & Rep Filter */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
              <Search className="w-4 h-4" />
            </div>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search customer name, email, phone..."
              className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:outline-none focus:border-[#10793f] transition-all"
            />
          </div>

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
            </select>
          </div>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          3. FOLLOW-UPS LIST
      ───────────────────────────────────────────────────────────── */}
      {loading ? (
        <div className="py-16 text-center text-gray-400 text-sm">
          Loading follow-up tasks...
        </div>
      ) : followUps.length === 0 ? (
        <div className="bg-white rounded-3xl p-12 text-center border border-gray-200/80">
          <div className="w-16 h-16 rounded-full bg-emerald-50 text-[#10793f] flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="text-lg font-bold text-gray-900">
            No follow-ups in &quot;{activeTab.replace("_", " ")}&quot;
          </h3>
          <p className="text-xs text-gray-500 mt-1 max-w-sm mx-auto">
            You are all caught up! Use the Leads section to schedule follow-ups for newly incoming inquiries.
          </p>
        </div>
      ) : (
        <div className="space-y-3.5">
          {followUps.map((lead) => {
            const isCompleted = lead.followUpCompleted;
            const targetDate = new Date(lead.followUpDate);
            const isOverdue = !isCompleted && targetDate < new Date();

            return (
              <div
                key={lead._id}
                className={`bg-white rounded-2xl border p-4 sm:p-5 transition-all ${
                  isCompleted
                    ? "border-gray-200 opacity-75"
                    : isOverdue
                    ? "border-red-200 bg-red-50/20 shadow-xs"
                    : "border-emerald-200 shadow-xs"
                }`}
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  {/* Info */}
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h2 className="text-base font-extrabold text-gray-900">
                        {lead.fullName}
                      </h2>
                      <span className="text-xs text-emerald-800 font-semibold bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                        {lead.subject}
                      </span>

                      {/* Overdue / Due status badge */}
                      {isCompleted ? (
                        <span className="text-xs font-bold text-gray-600 bg-gray-100 px-2 py-0.5 rounded-full">
                          Completed
                        </span>
                      ) : isOverdue ? (
                        <span className="text-xs font-bold text-red-700 bg-red-100 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                          <AlertTriangle className="w-3 h-3 text-red-600" />
                          <span>{formatRelativeTime(lead.followUpDate)}</span>
                        </span>
                      ) : (
                        <span className="text-xs font-bold text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                          <Clock className="w-3 h-3 text-emerald-700" />
                          <span>{formatRelativeTime(lead.followUpDate)}</span>
                        </span>
                      )}
                    </div>

                    {/* Scheduled Time Banner */}
                    <div className="mt-2 text-xs font-bold text-gray-800 flex items-center gap-2">
                      <CalendarClock className="w-4 h-4 text-[#10793f]" />
                      <span>Scheduled for: {targetDate.toLocaleString()}</span>
                    </div>

                    {/* Reminder Notes */}
                    {lead.followUpNotes && (
                      <p className="text-xs text-gray-700 bg-amber-50/80 border border-amber-200/60 p-2.5 rounded-xl mt-2 italic">
                        <strong>Follow-up Note:</strong> &quot;{lead.followUpNotes}&quot;
                      </p>
                    )}

                    {/* Meta info */}
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-gray-500 mt-2">
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
                      {lead.assignedToName && (
                        <span className="flex items-center gap-1 font-semibold text-gray-700">
                          <User className="w-3.5 h-3.5 text-gray-400" />
                          Assigned Rep: {lead.assignedToName}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Quick Action Buttons */}
                  <div className="flex flex-wrap items-center gap-2 shrink-0">
                    {/* Call */}
                    {lead.phone && (
                      <a
                        href={`tel:${lead.phone.replace(/\s+/g, "")}`}
                        className="px-3 py-1.5 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold text-xs inline-flex items-center gap-1 transition-colors"
                      >
                        <Phone className="w-3.5 h-3.5 text-gray-600" />
                        <span>Call</span>
                      </a>
                    )}

                    {/* WhatsApp */}
                    {lead.phone && (
                      <a
                        href={`https://wa.me/${lead.phone.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                          `Hello ${lead.fullName}, this is from DietNexa following up as promised regarding your inquiry on ${lead.subject}. How are you doing today?`
                        )}`}
                        target="_blank"
                        rel="noreferrer"
                        className="px-3 py-1.5 rounded-xl bg-green-50 hover:bg-green-100 text-green-700 font-bold text-xs inline-flex items-center gap-1 transition-colors"
                      >
                        <MessageCircle className="w-3.5 h-3.5 text-green-600" />
                        <span>WhatsApp</span>
                      </a>
                    )}

                    {/* Reschedule */}
                    <button
                      type="button"
                      onClick={() => {
                        setRescheduleLead(lead);
                        setNewDate("");
                        setNewNotes(lead.followUpNotes || "");
                      }}
                      className="px-3 py-1.5 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-800 font-bold text-xs inline-flex items-center gap-1 transition-colors cursor-pointer"
                    >
                      <Clock className="w-3.5 h-3.5" />
                      <span>Reschedule</span>
                    </button>

                    {/* Mark as Done */}
                    {!isCompleted && (
                      <button
                        type="button"
                        onClick={() => handleMarkComplete(lead._id)}
                        className="px-3.5 py-1.5 rounded-xl bg-[#10793f] hover:bg-[#0c592e] text-white font-bold text-xs inline-flex items-center gap-1 transition-colors cursor-pointer shadow-xs"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Mark Done</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────
          4. RESCHEDULE MODAL
      ───────────────────────────────────────────────────────────── */}
      {rescheduleLead && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-gray-100 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-gray-100">
              <h3 className="text-lg font-bold text-gray-900">
                Reschedule Follow-up: {rescheduleLead.fullName}
              </h3>
              <button
                onClick={() => setRescheduleLead(null)}
                className="text-gray-400 hover:text-gray-700 font-bold text-sm"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSaveReschedule} className="space-y-3">
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">
                  New Date &amp; Time *
                </label>
                <input
                  type="datetime-local"
                  required
                  value={newDate}
                  onChange={(e) => setNewDate(e.target.value)}
                  className="w-full text-xs p-2.5 rounded-xl border border-gray-200 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">
                  Updated Follow-up Note
                </label>
                <textarea
                  rows={3}
                  value={newNotes}
                  onChange={(e) => setNewNotes(e.target.value)}
                  placeholder="Reason for reschedule..."
                  className="w-full text-xs p-2.5 rounded-xl border border-gray-200 outline-none"
                />
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setRescheduleLead(null)}
                  className="px-4 py-2 rounded-xl text-xs font-bold text-gray-600 hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-[#10793f] text-white text-xs font-bold hover:bg-[#0c592e]"
                >
                  Save Reschedule
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

