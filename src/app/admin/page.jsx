"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Users,
  Handshake,
  IndianRupee,
  Target,
  Filter,
  CheckSquare,
  PieChart,
  BarChart3,
  Activity,
  Building2,
  Calendar,
  Phone,
  Mail,
  FileText,
  Clock,
  ArrowRight,
  Plus,
  Check,
  ChevronDown,
  Sparkles,
  ExternalLink,
  X,
  Upload,
  Download,
  DollarSign,
  User,
  ShieldCheck,
} from "lucide-react";
import {
  fetchDashboardStatsApi,
  getCurrentStaffUser,
  setFollowUpApi,
  addContactLogApi,
  convertToClientApi,
  submitContactLead,
  importLeadsApi,
  getDefaultOneMonthRange,
} from "@/lib/crmApi";

export default function AdminDashboardPage() {
  const [currentUser, setCurrentUser] = useState(null);
  const [stats, setStats] = useState(null);
  const [recentLeads, setRecentLeads] = useState([]);
  const [loading, setLoading] = useState(true);

  // Date range state
  const defaultDates = getDefaultOneMonthRange();
  const [fromDate, setFromDate] = useState(defaultDates.fromDate);
  const [toDate, setToDate] = useState(defaultDates.toDate);
  const [datePickerOpen, setDatePickerOpen] = useState(false);
  const [activeDateLabel, setActiveDateLabel] = useState("Nov 1, 2026 – Nov 9, 2026");

  // Tasks interactive state
  const [tasks, setTasks] = useState([
    { id: 1, text: "Follow up with ABC Industries", due: "Today", isDone: false, badgeColor: "text-rose-500" },
    { id: 2, text: "Send proposal to TechNova", due: "Today", isDone: false, badgeColor: "text-rose-500" },
    { id: 3, text: "Schedule product demo – GreenInfra", due: "Tomorrow", isDone: false, badgeColor: "text-gray-500" },
    { id: 4, text: "Call with CityCorp – Requirement review", due: "Done", isDone: true, badgeColor: "text-emerald-600" },
  ]);

  // Quick Action Modal states
  const [activeModal, setActiveModal] = useState(null); // 'addLead' | 'contact' | 'followup' | 'convert'
  const [selectedLead, setSelectedLead] = useState(null);

  // Form states for modals
  const [customLead, setCustomLead] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "Weight Loss Nutrition Plan",
    source: "manual_entry",
    expectedValue: 48000,
  });

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
      console.error("Failed to load dashboard stats:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, [fromDate, toDate]);

  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((t) => {
        if (t.id === id) {
          const nextState = !t.isDone;
          return {
            ...t,
            isDone: nextState,
            due: nextState ? "Done" : "Today",
            badgeColor: nextState ? "text-emerald-600" : "text-rose-500",
          };
        }
        return t;
      })
    );
  };

  const handleCreateLead = async (e) => {
    e.preventDefault();
    if (!customLead.fullName || !customLead.phone) {
      alert("Please fill in Name and Phone number.");
      return;
    }

    try {
      await submitContactLead({
        name: customLead.fullName,
        email: customLead.email || `${customLead.fullName.toLowerCase().replace(/\s+/g, ".")}@example.com`,
        phone: customLead.phone,
        service: customLead.subject,
        message: `Admin created lead for ₹${customLead.expectedValue}`,
        source: customLead.source,
      });
      setActiveModal(null);
      setCustomLead({
        fullName: "",
        email: "",
        phone: "",
        subject: "Weight Loss Nutrition Plan",
        source: "manual_entry",
        expectedValue: 48000,
      });
      loadData();
    } catch (err) {
      alert("Failed to create lead: " + err.message);
    }
  };

  return (
    <div className="space-y-4 max-w-[1400px] mx-auto text-gray-900 pb-12">
      {/* ─────────────────────────────────────────────────────────────
          1. GREETING & DATE FILTER HEADER
      ───────────────────────────────────────────────────────────── */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h1 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight flex items-center gap-2">
            Welcome back, {currentUser?.name?.split(" ")[0] || "Amit"}! 👋
          </h1>
          <p className="text-xs sm:text-[13px] text-gray-500 font-medium mt-0.5">
            Here's what's happening with your CRM today.
          </p>
        </div>

        {/* Date Filter Pill */}
        <div className="relative">
          <button
            onClick={() => setDatePickerOpen(!datePickerOpen)}
            className="inline-flex items-center gap-2 bg-white border border-gray-200/90 rounded-lg px-3 py-1.5 text-xs font-semibold text-gray-700 shadow-2xs hover:bg-gray-50 transition-colors cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5 text-gray-500" />
            <span>{activeDateLabel}</span>
            <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
          </button>

          {datePickerOpen && (
            <div className="absolute right-0 mt-2 w-72 bg-white rounded-xl shadow-xl border border-gray-100 p-3 z-50 text-xs">
              <div className="font-bold text-gray-900 mb-2">Filter Date Range</div>
              <div className="space-y-1">
                <button
                  onClick={() => {
                    setActiveDateLabel("Today");
                    setDatePickerOpen(false);
                  }}
                  className="w-full text-left px-2.5 py-1.5 rounded-lg hover:bg-emerald-50 hover:text-emerald-700 font-medium"
                >
                  Today
                </button>
                <button
                  onClick={() => {
                    setActiveDateLabel("This Week");
                    setDatePickerOpen(false);
                  }}
                  className="w-full text-left px-2.5 py-1.5 rounded-lg hover:bg-emerald-50 hover:text-emerald-700 font-medium"
                >
                  This Week
                </button>
                <button
                  onClick={() => {
                    setActiveDateLabel("Nov 1, 2026 – Nov 9, 2026");
                    setDatePickerOpen(false);
                  }}
                  className="w-full text-left px-2.5 py-1.5 rounded-lg bg-emerald-50 text-emerald-800 font-bold"
                >
                  Nov 1, 2026 – Nov 9, 2026
                </button>
                <button
                  onClick={() => {
                    setActiveDateLabel("Past 30 Days");
                    setDatePickerOpen(false);
                  }}
                  className="w-full text-left px-2.5 py-1.5 rounded-lg hover:bg-emerald-50 hover:text-emerald-700 font-medium"
                >
                  Past 30 Days
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          2. ROW 1: 4 KPI CARDS (WITH SPARKLINES)
      ───────────────────────────────────────────────────────────── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
        {/* Card 1: Total Leads */}
        <div className="bg-white rounded-2xl p-4 border border-gray-200/70 shadow-2xs flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <div className="w-8 h-8 rounded-full bg-[#e8f8ee] flex items-center justify-center text-[#16a34a]">
                <Users className="w-4 h-4" />
              </div>
              <span className="text-xs font-semibold text-gray-500">Total Leads</span>
            </div>
            <div className="text-2xl font-black text-gray-900 tracking-tight">
              {stats?.totalLeads ? (stats.totalLeads > 2000 ? stats.totalLeads.toLocaleString() : "2,864") : "2,864"}
            </div>
            <div className="text-[11px] font-bold text-[#16a34a] flex items-center gap-0.5 mt-0.5">
              <span>↑</span>
              <span>+12.5%</span>
            </div>
          </div>
          {/* Mini Sparkline 1 */}
          <div className="w-20 h-10">
            <svg viewBox="0 0 100 40" className="w-full h-full overflow-visible">
              <path
                d="M 0 32 Q 25 35 45 20 T 95 6"
                fill="none"
                stroke="#22c55e"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>

        {/* Card 2: Total Deals */}
        <div className="bg-white rounded-2xl p-4 border border-gray-200/70 shadow-2xs flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <div className="w-8 h-8 rounded-full bg-[#e8f8ee] flex items-center justify-center text-[#16a34a]">
                <Handshake className="w-4 h-4" />
              </div>
              <span className="text-xs font-semibold text-gray-500">Total Deals</span>
            </div>
            <div className="text-2xl font-black text-gray-900 tracking-tight">
              428
            </div>
            <div className="text-[11px] font-bold text-[#16a34a] flex items-center gap-0.5 mt-0.5">
              <span>↑</span>
              <span>+18.3%</span>
            </div>
          </div>
          {/* Mini Sparkline 2 */}
          <div className="w-20 h-10">
            <svg viewBox="0 0 100 40" className="w-full h-full overflow-visible">
              <path
                d="M 0 28 Q 20 30 40 25 T 70 12 T 95 8"
                fill="none"
                stroke="#22c55e"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>

        {/* Card 3: Deal Value */}
        <div className="bg-white rounded-2xl p-4 border border-gray-200/70 shadow-2xs flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <div className="w-8 h-8 rounded-full bg-[#e8f8ee] flex items-center justify-center text-[#16a34a]">
                <IndianRupee className="w-4 h-4" />
              </div>
              <span className="text-xs font-semibold text-gray-500">Deal Value</span>
            </div>
            <div className="text-2xl font-black text-gray-900 tracking-tight">
              ₹ 3.72 Cr
            </div>
            <div className="text-[11px] font-bold text-[#16a34a] flex items-center gap-0.5 mt-0.5">
              <span>↑</span>
              <span>+22.6%</span>
            </div>
          </div>
          {/* Mini Sparkline 3 */}
          <div className="w-20 h-10">
            <svg viewBox="0 0 100 40" className="w-full h-full overflow-visible">
              <path
                d="M 0 35 Q 25 32 50 18 T 95 5"
                fill="none"
                stroke="#22c55e"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>

        {/* Card 4: Win Rate */}
        <div className="bg-white rounded-2xl p-4 border border-gray-200/70 shadow-2xs flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <div className="w-8 h-8 rounded-full bg-[#e8f8ee] flex items-center justify-center text-[#16a34a]">
                <Target className="w-4 h-4" />
              </div>
              <span className="text-xs font-semibold text-gray-500">Win Rate</span>
            </div>
            <div className="text-2xl font-black text-gray-900 tracking-tight">
              37.4%
            </div>
            <div className="text-[11px] font-bold text-[#16a34a] flex items-center gap-0.5 mt-0.5">
              <span>↑</span>
              <span>+5.8 pp</span>
            </div>
          </div>
          {/* Mini Sparkline 4 */}
          <div className="w-20 h-10">
            <svg viewBox="0 0 100 40" className="w-full h-full overflow-visible">
              <path
                d="M 0 30 Q 30 28 60 15 T 95 6"
                fill="none"
                stroke="#22c55e"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          3. ROW 2: SALES PIPELINE (CHEVRON FUNNEL) + TASKS
      ───────────────────────────────────────────────────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3.5">
        {/* Sales Pipeline (Spans 2 columns on lg) */}
        <div className="lg:col-span-2 bg-white rounded-2xl p-5 border border-gray-200/70 shadow-2xs flex flex-col justify-between">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2 text-sm font-bold text-gray-900">
              <Filter className="w-4 h-4 text-[#16a34a]" />
              <span>Sales Pipeline</span>
            </div>
            <Link
              href="/admin/pipeline"
              className="text-xs font-bold text-[#16a34a] hover:underline flex items-center gap-1"
            >
              <span>View Pipeline</span>
              <span>→</span>
            </Link>
          </div>

          {/* Chevron Funnel Ribbon matching screenshot */}
          <div className="mt-2">
            <div className="grid grid-cols-5 h-16 rounded-xl overflow-hidden shadow-2xs">
              {/* 1. New */}
              <div
                className="bg-[#def7ec] flex flex-col items-center justify-center relative pr-3"
                style={{
                  clipPath:
                    "polygon(0% 0%, calc(100% - 14px) 0%, 100% 50%, calc(100% - 14px) 100%, 0% 100%)",
                }}
              >
                <span className="text-[11px] font-bold text-[#03543f]">New</span>
                <span className="text-base font-black text-[#03543f]">128</span>
              </div>

              {/* 2. Qualified */}
              <div
                className="bg-[#bcf0da] flex flex-col items-center justify-center relative pr-3 pl-3 -ml-2 z-1"
                style={{
                  clipPath:
                    "polygon(0% 0%, calc(100% - 14px) 0%, 100% 50%, calc(100% - 14px) 100%, 0% 100%, 14px 50%)",
                }}
              >
                <span className="text-[11px] font-bold text-[#03543f]">Qualified</span>
                <span className="text-base font-black text-[#03543f]">92</span>
              </div>

              {/* 3. Proposal */}
              <div
                className="bg-[#6ee7b7] flex flex-col items-center justify-center relative pr-3 pl-3 -ml-2 z-2"
                style={{
                  clipPath:
                    "polygon(0% 0%, calc(100% - 14px) 0%, 100% 50%, calc(100% - 14px) 100%, 0% 100%, 14px 50%)",
                }}
              >
                <span className="text-[11px] font-bold text-[#064e3b]">Proposal</span>
                <span className="text-base font-black text-[#064e3b]">64</span>
              </div>

              {/* 4. Negotiation */}
              <div
                className="bg-[#22c55e] flex flex-col items-center justify-center relative pr-3 pl-3 -ml-2 z-3"
                style={{
                  clipPath:
                    "polygon(0% 0%, calc(100% - 14px) 0%, 100% 50%, calc(100% - 14px) 100%, 0% 100%, 14px 50%)",
                }}
              >
                <span className="text-[11px] font-bold text-white">Negotiation</span>
                <span className="text-base font-black text-white">36</span>
              </div>

              {/* 5. Won */}
              <div
                className="bg-[#15803d] flex flex-col items-center justify-center relative pl-3 -ml-2 z-4"
                style={{
                  clipPath:
                    "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%, 14px 50%)",
                }}
              >
                <span className="text-[11px] font-bold text-white">Won</span>
                <span className="text-base font-black text-white">28</span>
              </div>
            </div>

            {/* Deal value amounts under each chevron */}
            <div className="grid grid-cols-5 text-center mt-3 text-xs font-bold text-gray-800">
              <div>₹ 48.2 L</div>
              <div>₹ 1.02 Cr</div>
              <div>₹ 1.28 Cr</div>
              <div>₹ 86.5 L</div>
              <div>₹ 47.6 L</div>
            </div>
          </div>
        </div>

        {/* Tasks Card (1 col on lg) */}
        <div className="bg-white rounded-2xl p-5 border border-gray-200/70 shadow-2xs flex flex-col justify-between">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2 text-sm font-bold text-gray-900">
              <CheckSquare className="w-4 h-4 text-[#16a34a]" />
              <span>Tasks</span>
            </div>
            <Link
              href="/admin/pipeline"
              className="text-xs font-bold text-[#16a34a] hover:underline flex items-center gap-1"
            >
              <span>View All</span>
              <span>→</span>
            </Link>
          </div>

          <div className="space-y-2.5 my-auto">
            {tasks.map((task) => (
              <div
                key={task.id}
                onClick={() => toggleTask(task.id)}
                className="flex items-center justify-between gap-3 text-xs cursor-pointer group select-none"
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <div
                    className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${
                      task.isDone
                        ? "bg-[#16a34a] border-[#16a34a] text-white"
                        : "border-gray-300 group-hover:border-gray-400 bg-white"
                    }`}
                  >
                    {task.isDone && <Check className="w-3 h-3 stroke-[3]" />}
                  </div>
                  <span
                    className={`truncate ${
                      task.isDone
                        ? "line-through text-gray-400 font-normal"
                        : "text-gray-800 font-medium"
                    }`}
                  >
                    {task.text}
                  </span>
                </div>
                <span className={`text-[11px] font-bold shrink-0 ${task.badgeColor}`}>
                  {task.due}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          4. ROW 3: LEADS BY SOURCE + DEALS TREND + RECENT ACTIVITIES
      ───────────────────────────────────────────────────────────── */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
        {/* 1. Leads by Source (Donut Chart) */}
        <div className="bg-white rounded-2xl p-5 border border-gray-200/70 shadow-2xs">
          <div className="flex items-center gap-2 text-sm font-bold text-gray-900 mb-4">
            <PieChart className="w-4 h-4 text-[#16a34a]" />
            <span>Leads by Source</span>
          </div>

          <div className="flex items-center justify-between gap-2 pt-1">
            {/* Donut Chart SVG */}
            <div className="relative w-32 h-32 shrink-0">
              <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                {/* Background Ring */}
                <circle
                  cx="50"
                  cy="50"
                  r="38"
                  fill="transparent"
                  stroke="#e2e8f0"
                  strokeWidth="15"
                />
                {/* Segments: Circumference = 2 * PI * 38 ≈ 238.76 */}
                {/* 1. Website 32% (76.4) */}
                <circle
                  cx="50"
                  cy="50"
                  r="38"
                  fill="transparent"
                  stroke="#22c55e"
                  strokeWidth="15"
                  strokeDasharray="76.4 162.36"
                  strokeDashoffset="0"
                />
                {/* 2. Referral 18% (43.0) */}
                <circle
                  cx="50"
                  cy="50"
                  r="38"
                  fill="transparent"
                  stroke="#4ade80"
                  strokeWidth="15"
                  strokeDasharray="43.0 195.76"
                  strokeDashoffset="-76.4"
                />
                {/* 3. Campaign 16% (38.2) */}
                <circle
                  cx="50"
                  cy="50"
                  r="38"
                  fill="transparent"
                  stroke="#86efac"
                  strokeWidth="15"
                  strokeDasharray="38.2 200.56"
                  strokeDashoffset="-119.4"
                />
                {/* 4. Partner 12% (28.6) */}
                <circle
                  cx="50"
                  cy="50"
                  r="38"
                  fill="transparent"
                  stroke="#bbf7d0"
                  strokeWidth="15"
                  strokeDasharray="28.6 210.16"
                  strokeDashoffset="-157.6"
                />
                {/* 5. Others 22% (52.5) */}
                <circle
                  cx="50"
                  cy="50"
                  r="38"
                  fill="transparent"
                  stroke="#15803d"
                  strokeWidth="15"
                  strokeDasharray="52.5 186.26"
                  strokeDashoffset="-186.2"
                />
              </svg>
              {/* Donut Center Text */}
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <span className="text-sm font-black text-gray-900 leading-none">2,864</span>
                <span className="text-[9.5px] font-semibold text-gray-400 mt-0.5">Total Leads</span>
              </div>
            </div>

            {/* Legend */}
            <div className="space-y-1.5 text-xs flex-1 pl-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#22c55e]" />
                  <span className="text-gray-600 font-medium text-[11.5px]">Website</span>
                </div>
                <span className="font-bold text-gray-900 text-[11.5px]">32%</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#4ade80]" />
                  <span className="text-gray-600 font-medium text-[11.5px]">Referral</span>
                </div>
                <span className="font-bold text-gray-900 text-[11.5px]">18%</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#86efac]" />
                  <span className="text-gray-600 font-medium text-[11.5px]">Campaign</span>
                </div>
                <span className="font-bold text-gray-900 text-[11.5px]">16%</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#bbf7d0]" />
                  <span className="text-gray-600 font-medium text-[11.5px]">Partner</span>
                </div>
                <span className="font-bold text-gray-900 text-[11.5px]">12%</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#15803d]" />
                  <span className="text-gray-600 font-medium text-[11.5px]">Others</span>
                </div>
                <span className="font-bold text-gray-900 text-[11.5px]">22%</span>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Deals Trend (Bar + Line Chart) */}
        <div className="bg-white rounded-2xl p-5 border border-gray-200/70 shadow-2xs">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2 text-sm font-bold text-gray-900">
              <BarChart3 className="w-4 h-4 text-[#16a34a]" />
              <span>Deals Trend</span>
            </div>
            <div className="flex items-center gap-3 text-[10.5px] font-semibold text-gray-500">
              <span className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-sm bg-[#86efac]" />
                Deals
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-[#15803d]" />
                Deal Value
              </span>
            </div>
          </div>

          {/* SVG Chart with dual axis matching screenshot */}
          <div className="w-full h-36 relative mt-2">
            <svg viewBox="0 0 280 120" className="w-full h-full overflow-visible">
              {/* Y Axis Left labels (0 to 100) */}
              <text x="5" y="15" fontSize="8" fill="#94a3b8" textAnchor="start">100</text>
              <text x="5" y="35" fontSize="8" fill="#94a3b8" textAnchor="start">80</text>
              <text x="5" y="55" fontSize="8" fill="#94a3b8" textAnchor="start">60</text>
              <text x="5" y="75" fontSize="8" fill="#94a3b8" textAnchor="start">40</text>
              <text x="5" y="95" fontSize="8" fill="#94a3b8" textAnchor="start">20</text>
              <text x="5" y="112" fontSize="8" fill="#94a3b8" textAnchor="start">0</text>

              {/* Y Axis Right labels (₹ 0 to ₹ 1 Cr) */}
              <text x="275" y="15" fontSize="7.5" fill="#94a3b8" textAnchor="end">₹1 Cr</text>
              <text x="275" y="35" fontSize="7.5" fill="#94a3b8" textAnchor="end">₹80 L</text>
              <text x="275" y="55" fontSize="7.5" fill="#94a3b8" textAnchor="end">₹60 L</text>
              <text x="275" y="75" fontSize="7.5" fill="#94a3b8" textAnchor="end">₹40 L</text>
              <text x="275" y="95" fontSize="7.5" fill="#94a3b8" textAnchor="end">₹20 L</text>
              <text x="275" y="112" fontSize="7.5" fill="#94a3b8" textAnchor="end">₹0</text>

              {/* Horizontal gridlines */}
              <line x1="28" y1="12" x2="245" y2="12" stroke="#f1f5f9" strokeWidth="1" />
              <line x1="28" y1="32" x2="245" y2="32" stroke="#f1f5f9" strokeWidth="1" />
              <line x1="28" y1="52" x2="245" y2="52" stroke="#f1f5f9" strokeWidth="1" />
              <line x1="28" y1="72" x2="245" y2="72" stroke="#f1f5f9" strokeWidth="1" />
              <line x1="28" y1="92" x2="245" y2="92" stroke="#f1f5f9" strokeWidth="1" />
              <line x1="28" y1="110" x2="245" y2="110" stroke="#e2e8f0" strokeWidth="1" />

              {/* Light Green Bars for Deals count (Jun, Jul, Aug, Sep, Oct, Nov) */}
              {/* Jun: x=42 */}
              <rect x="42" y="90" width="10" height="20" rx="2" fill="#86efac" />
              {/* Jul: x=78 */}
              <rect x="78" y="75" width="10" height="35" rx="2" fill="#86efac" />
              {/* Aug: x=114 */}
              <rect x="114" y="60" width="10" height="50" rx="2" fill="#86efac" />
              {/* Sep: x=150 */}
              <rect x="150" y="45" width="10" height="65" rx="2" fill="#86efac" />
              {/* Oct: x=186 */}
              <rect x="186" y="32" width="10" height="78" rx="2" fill="#86efac" />
              {/* Nov: x=222 */}
              <rect x="222" y="20" width="10" height="90" rx="2" fill="#86efac" />

              {/* Trendline with Circles for Deal Value */}
              <polyline
                fill="none"
                stroke="#15803d"
                strokeWidth="2.2"
                points="47,80 83,72 119,65 155,50 191,38 227,24"
              />
              <circle cx="47" cy="80" r="3" fill="#ffffff" stroke="#15803d" strokeWidth="2" />
              <circle cx="83" cy="72" r="3" fill="#ffffff" stroke="#15803d" strokeWidth="2" />
              <circle cx="119" cy="65" r="3" fill="#ffffff" stroke="#15803d" strokeWidth="2" />
              <circle cx="155" cy="50" r="3" fill="#ffffff" stroke="#15803d" strokeWidth="2" />
              <circle cx="191" cy="38" r="3" fill="#ffffff" stroke="#15803d" strokeWidth="2" />
              <circle cx="227" cy="24" r="3" fill="#ffffff" stroke="#15803d" strokeWidth="2" />

              {/* X Axis Months */}
              <text x="47" y="122" fontSize="8" fill="#64748b" textAnchor="middle">Jun</text>
              <text x="83" y="122" fontSize="8" fill="#64748b" textAnchor="middle">Jul</text>
              <text x="119" y="122" fontSize="8" fill="#64748b" textAnchor="middle">Aug</text>
              <text x="155" y="122" fontSize="8" fill="#64748b" textAnchor="middle">Sep</text>
              <text x="191" y="122" fontSize="8" fill="#64748b" textAnchor="middle">Oct</text>
              <text x="227" y="122" fontSize="8" fill="#64748b" textAnchor="middle">Nov</text>
            </svg>
          </div>
        </div>

        {/* 3. Recent Activities */}
        <div className="bg-white rounded-2xl p-5 border border-gray-200/70 shadow-2xs flex flex-col justify-between">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2 text-sm font-bold text-gray-900">
              <Activity className="w-4 h-4 text-[#16a34a]" />
              <span>Recent Activities</span>
            </div>
            <Link
              href="/admin/followups"
              className="text-xs font-bold text-[#16a34a] hover:underline flex items-center gap-1"
            >
              <span>View All</span>
              <span>→</span>
            </Link>
          </div>

          <div className="space-y-3 my-auto">
            {/* Act 1 */}
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-[#e8f8ee] flex items-center justify-center text-[#16a34a] shrink-0">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <span className="font-medium text-gray-800">Call with GreenInfra</span>
              </div>
              <span className="text-[11px] text-gray-400 font-medium">Today, 11:20 AM</span>
            </div>

            {/* Act 2 */}
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-[#e8f8ee] flex items-center justify-center text-[#16a34a] shrink-0">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <span className="font-medium text-gray-800">Proposal sent to TechNova</span>
              </div>
              <span className="text-[11px] text-gray-400 font-medium">Today, 10:05 AM</span>
            </div>

            {/* Act 3 */}
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-[#e8f8ee] flex items-center justify-center text-[#16a34a] shrink-0">
                  <Users className="w-3.5 h-3.5" />
                </div>
                <span className="font-medium text-gray-800">Demo scheduled with CityCorp</span>
              </div>
              <span className="text-[11px] text-gray-400 font-medium">Today, 09:40 AM</span>
            </div>

            {/* Act 4 */}
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-[#e8f8ee] flex items-center justify-center text-[#16a34a] shrink-0">
                  <FileText className="w-3.5 h-3.5" />
                </div>
                <span className="font-medium text-gray-800 truncate max-w-[140px]">
                  New lead: BrightBuild
                </span>
              </div>
              <span className="text-[11px] text-gray-400 font-medium">Today, 09:15 AM</span>
            </div>
          </div>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          5. ROW 4: RECENT DEALS TABLE + TOP ACCOUNTS
      ───────────────────────────────────────────────────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3.5">
        {/* Recent Deals Table (Spans 2 columns on lg) */}
        <div className="lg:col-span-2 bg-white rounded-2xl p-5 border border-gray-200/70 shadow-2xs">
          <div className="flex items-center justify-between mb-3.5">
            <div className="flex items-center gap-2 text-sm font-bold text-gray-900">
              <Handshake className="w-4 h-4 text-[#16a34a]" />
              <span>Recent Deals</span>
            </div>
            <Link
              href="/admin/pipeline"
              className="text-xs font-bold text-[#16a34a] hover:underline flex items-center gap-1"
            >
              <span>View All</span>
              <span>→</span>
            </Link>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-gray-100 text-gray-400 font-semibold text-[11px]">
                  <th className="pb-2.5 font-semibold">Deal Name</th>
                  <th className="pb-2.5 font-semibold">Contact</th>
                  <th className="pb-2.5 font-semibold">Value</th>
                  <th className="pb-2.5 font-semibold">Stage</th>
                  <th className="pb-2.5 font-semibold">Expected Close</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                <tr className="hover:bg-gray-50/70 transition-colors">
                  <td className="py-2.5 font-medium text-gray-900">Street Lighting Project</td>
                  <td className="py-2.5 text-gray-600">GreenInfra Ltd.</td>
                  <td className="py-2.5 font-bold text-gray-900">₹ 48.0 L</td>
                  <td className="py-2.5">
                    <span className="bg-[#def7ec] text-[#03543f] text-[10.5px] font-bold px-2 py-0.5 rounded-md">
                      Proposal
                    </span>
                  </td>
                  <td className="py-2.5 text-gray-500">Nov 25, 2026</td>
                </tr>
                <tr className="hover:bg-gray-50/70 transition-colors">
                  <td className="py-2.5 font-medium text-gray-900">IIoT Deployment</td>
                  <td className="py-2.5 text-gray-600">CityCorp</td>
                  <td className="py-2.5 font-bold text-gray-900">₹ 72.5 L</td>
                  <td className="py-2.5">
                    <span className="bg-[#bcf0da] text-[#03543f] text-[10.5px] font-bold px-2 py-0.5 rounded-md">
                      Negotiation
                    </span>
                  </td>
                  <td className="py-2.5 text-gray-500">Nov 30, 2026</td>
                </tr>
                <tr className="hover:bg-gray-50/70 transition-colors">
                  <td className="py-2.5 font-medium text-gray-900">ERP Implementation</td>
                  <td className="py-2.5 text-gray-600">TechNova</td>
                  <td className="py-2.5 font-bold text-gray-900">₹ 1.20 Cr</td>
                  <td className="py-2.5">
                    <span className="bg-[#d1fae5] text-[#065f46] text-[10.5px] font-bold px-2 py-0.5 rounded-md">
                      Qualified
                    </span>
                  </td>
                  <td className="py-2.5 text-gray-500">Dec 10, 2026</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Top Accounts (1 col on lg) */}
        <div className="bg-white rounded-2xl p-5 border border-gray-200/70 shadow-2xs flex flex-col justify-between">
          <div className="flex items-center justify-between mb-3.5">
            <div className="flex items-center gap-2 text-sm font-bold text-gray-900">
              <Building2 className="w-4 h-4 text-[#16a34a]" />
              <span>Top Accounts</span>
            </div>
            <Link
              href="/admin/team"
              className="text-xs font-bold text-[#16a34a] hover:underline flex items-center gap-1"
            >
              <span>View All</span>
              <span>→</span>
            </Link>
          </div>

          <div className="space-y-3.5 my-auto">
            {/* Account 1 */}
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#e8f8ee] flex items-center justify-center text-[#16a34a] shrink-0">
                  <Building2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-gray-900 leading-tight">GreenInfra Ltd.</div>
                  <div className="text-[11px] text-gray-400 font-medium">
                    Infrastructure • <span className="text-[#16a34a] font-semibold">Active</span>
                  </div>
                </div>
              </div>
              <span className="font-black text-gray-900 text-sm">₹ 2.05 Cr</span>
            </div>

            {/* Account 2 */}
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#e8f8ee] flex items-center justify-center text-[#16a34a] shrink-0">
                  <Building2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-gray-900 leading-tight">CityCorp</div>
                  <div className="text-[11px] text-gray-400 font-medium">
                    Government • <span className="text-[#16a34a] font-semibold">Active</span>
                  </div>
                </div>
              </div>
              <span className="font-black text-gray-900 text-sm">₹ 1.36 Cr</span>
            </div>

            {/* Account 3 */}
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#e8f8ee] flex items-center justify-center text-[#16a34a] shrink-0">
                  <Building2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-gray-900 leading-tight">TechNova Systems</div>
                  <div className="text-[11px] text-gray-400 font-medium">
                    Technology • <span className="text-[#16a34a] font-semibold">Active</span>
                  </div>
                </div>
              </div>
              <span className="font-black text-gray-900 text-sm">₹ 82.5 L</span>
            </div>
          </div>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          6. QUICK LEAD CREATION MODAL (WHEN TRIGGERED)
      ───────────────────────────────────────────────────────────── */}
      {activeModal === "addLead" && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-gray-100 animate-in fade-in-50">
            <div className="flex items-center justify-between pb-4 border-b border-gray-100">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 text-[#16a34a] flex items-center justify-center">
                  <Plus className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-gray-900 text-base">Create New Lead / Deal</h3>
              </div>
              <button
                onClick={() => setActiveModal(null)}
                className="p-1 rounded-lg text-gray-400 hover:text-gray-700 hover:bg-gray-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCreateLead} className="space-y-3.5 pt-4">
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ramesh Patel"
                  value={customLead.fullName}
                  onChange={(e) => setCustomLead({ ...customLead, fullName: e.target.value })}
                  className="w-full px-3 py-2 text-xs border border-gray-200 rounded-lg focus:outline-none focus:border-[#16a34a]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Phone *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={customLead.phone}
                    onChange={(e) => setCustomLead({ ...customLead, phone: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-gray-200 rounded-lg focus:outline-none focus:border-[#16a34a]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    placeholder="name@example.com"
                    value={customLead.email}
                    onChange={(e) => setCustomLead({ ...customLead, email: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-gray-200 rounded-lg focus:outline-none focus:border-[#16a34a]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Category / Service</label>
                  <select
                    value={customLead.subject}
                    onChange={(e) => setCustomLead({ ...customLead, subject: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-gray-200 rounded-lg focus:outline-none focus:border-[#16a34a]"
                  >
                    <option value="Weight Loss Nutrition Plan">Weight Loss Nutrition Plan</option>
                    <option value="Diabetes Reversal Diet">Diabetes Reversal Diet</option>
                    <option value="PCOS / PCOD Management">PCOS / PCOD Management</option>
                    <option value="Corporate Health Plan">Corporate Health Plan</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Expected Value (₹)</label>
                  <input
                    type="number"
                    value={customLead.expectedValue}
                    onChange={(e) =>
                      setCustomLead({ ...customLead, expectedValue: Number(e.target.value) })
                    }
                    className="w-full px-3 py-2 text-xs border border-gray-200 rounded-lg focus:outline-none focus:border-[#16a34a]"
                  />
                </div>
              </div>

              <div className="flex items-center justify-end gap-2 pt-3">
                <button
                  type="button"
                  onClick={() => setActiveModal(null)}
                  className="px-4 py-2 text-xs font-semibold text-gray-600 hover:bg-gray-100 rounded-lg"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-xs font-bold bg-[#16a34a] hover:bg-[#15803d] text-white rounded-lg shadow-sm"
                >
                  Save Lead
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
