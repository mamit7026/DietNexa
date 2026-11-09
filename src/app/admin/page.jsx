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
  getDefaultOneMonthRange,
} from "@/lib/crmApi";
import CrmDateRangePicker from "@/components/CrmDateRangePicker";

export default function AdminDashboardPage() {
  const [currentUser, setCurrentUser] = useState(null);
  const [stats, setStats] = useState(null);
  const [recentLeads, setRecentLeads] = useState([]);
  const [loading, setLoading] = useState(true);

  // Date range state (Defaults to Past 1 Month)
  const defaultDates = getDefaultOneMonthRange();
  const [fromDate, setFromDate] = useState(defaultDates.fromDate);
  const [toDate, setToDate] = useState(defaultDates.toDate);

  // Interactive Tasks list
  const [tasks, setTasks] = useState([
    { id: 1, text: "Follow up with ABC Industries", due: "Today", isDone: false, badgeColor: "text-rose-500" },
    { id: 2, text: "Send proposal to TechNova Systems", due: "Today", isDone: false, badgeColor: "text-rose-500" },
    { id: 3, text: "Schedule product demo – GreenInfra", due: "Tomorrow", isDone: false, badgeColor: "text-gray-500" },
    { id: 4, text: "Call with CityCorp – Requirement review", due: "Done", isDone: true, badgeColor: "text-emerald-600" },
  ]);

  // Quick Action Modal states
  const [activeModal, setActiveModal] = useState(null);
  const [customLead, setCustomLead] = useState({
    fullName: "",
    company: "",
    email: "",
    phone: "",
    subject: "Weight Loss Nutrition Plan",
    source: "manual_entry",
    expectedValue: 1200000,
  });

  const loadData = async (fDate = fromDate, tDate = toDate) => {
    setLoading(true);
    const user = getCurrentStaffUser();
    setCurrentUser(user);

    try {
      const data = await fetchDashboardStatsApi({ fromDate: fDate, toDate: tDate });
      if (data && data.stats) {
        setStats(data.stats);
        setRecentLeads(data.recentLeads || []);
      }
    } catch (err) {
      console.error("Failed to load dashboard stats from MongoDB:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData(fromDate, toDate);
  }, [fromDate, toDate]);

  const handleDateRangeApply = (newFrom, newTo) => {
    setFromDate(newFrom);
    setToDate(newTo);
    loadData(newFrom, newTo);
  };

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
        fullName: customLead.fullName,
        company: customLead.company || customLead.fullName,
        email: customLead.email || `${customLead.fullName.toLowerCase().replace(/\s+/g, ".")}@example.com`,
        phone: customLead.phone,
        subject: customLead.subject,
        expectedValue: Number(customLead.expectedValue) || 1200000,
        source: customLead.source,
      });
      setActiveModal(null);
      setCustomLead({
        fullName: "",
        company: "",
        email: "",
        phone: "",
        subject: "Weight Loss Nutrition Plan",
        source: "manual_entry",
        expectedValue: 1200000,
      });
      loadData(fromDate, toDate);
    } catch (err) {
      alert("Failed to create lead: " + err.message);
    }
  };

  // Helper format currency to Indian Lakhs or Crores
  const formatINR = (val) => {
    if (!val) return "₹ 0";
    if (val >= 10000000) return `₹ ${(val / 10000000).toFixed(2)} Cr`;
    if (val >= 100000) return `₹ ${(val / 100000).toFixed(2)} L`;
    return `₹ ${val.toLocaleString()}`;
  };

  // Stage Breakdown data derived from real MongoDB stats
  const stageStats = stats?.stageBreakdown || {
    new: { count: 0, value: 0 },
    qualified: { count: 0, value: 0 },
    proposal: { count: 0, value: 0 },
    negotiation: { count: 0, value: 0 },
    won: { count: 0, value: 0 },
  };

  // Sources breakdown
  const sourceBreakdown = stats?.sourceBreakdown || {};
  const totalLeadsCount = stats?.totalLeads || recentLeads.length || 0;
  const totalDealValue = stats?.totalDealValue || 0;
  const winRate = stats?.winRate || "0%";
  const topAccounts = stats?.topAccounts || [];
  const recentActivities = stats?.recentActivities || [];

  return (
    <div className="space-y-4 max-w-[1450px] mx-auto text-gray-900 pb-16 font-sans">
      {/* ─────────────────────────────────────────────────────────────
          1. GREETING & INTERACTIVE CALENDAR DATE RANGE PICKER
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

        {/* Real Interactive Calendar Date Range Picker */}
        <CrmDateRangePicker
          fromDate={fromDate}
          toDate={toDate}
          onApply={handleDateRangeApply}
          align="right"
        />
      </div>

      {/* ─────────────────────────────────────────────────────────────
          2. ROW 1: 4 DYNAMIC KPI METRIC CARDS WITH SPARKLINES
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
              {totalLeadsCount.toLocaleString()}
            </div>
            <div className="text-[11px] font-bold text-[#16a34a] flex items-center gap-0.5 mt-0.5">
              <span>↑</span>
              <span>+12.5%</span>
            </div>
          </div>
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
              {totalLeadsCount.toLocaleString()}
            </div>
            <div className="text-[11px] font-bold text-[#16a34a] flex items-center gap-0.5 mt-0.5">
              <span>↑</span>
              <span>+18.3%</span>
            </div>
          </div>
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
              {formatINR(totalDealValue)}
            </div>
            <div className="text-[11px] font-bold text-[#16a34a] flex items-center gap-0.5 mt-0.5">
              <span>↑</span>
              <span>+22.6%</span>
            </div>
          </div>
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
              {winRate}
            </div>
            <div className="text-[11px] font-bold text-[#16a34a] flex items-center gap-0.5 mt-0.5">
              <span>↑</span>
              <span>+5.8 pp</span>
            </div>
          </div>
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
          3. ROW 2: REAL SALES PIPELINE CHEVRON FUNNEL + TASKS
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

          {/* Chevron Funnel Ribbon derived from real MongoDB counts & values */}
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
                <span className="text-base font-black text-[#03543f]">
                  {stageStats.new.count}
                </span>
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
                <span className="text-base font-black text-[#03543f]">
                  {stageStats.qualified.count}
                </span>
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
                <span className="text-base font-black text-[#064e3b]">
                  {stageStats.proposal.count}
                </span>
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
                <span className="text-base font-black text-white">
                  {stageStats.negotiation.count}
                </span>
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
                <span className="text-base font-black text-white">
                  {stageStats.won.count}
                </span>
              </div>
            </div>

            {/* Deal amounts under each chevron */}
            <div className="grid grid-cols-5 text-center mt-3 text-xs font-bold text-gray-800">
              <div>{formatINR(stageStats.new.value)}</div>
              <div>{formatINR(stageStats.qualified.value)}</div>
              <div>{formatINR(stageStats.proposal.value)}</div>
              <div>{formatINR(stageStats.negotiation.value)}</div>
              <div>{formatINR(stageStats.won.value)}</div>
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
              href="/admin/followups"
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
          4. ROW 3: LEADS BY SOURCE (DONUT) + DEALS TREND + RECENT ACTIVITIES
      ───────────────────────────────────────────────────────────── */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
        {/* 1. Leads by Source (Dynamic Donut Chart) */}
        <div className="bg-white rounded-2xl p-5 border border-gray-200/70 shadow-2xs">
          <div className="flex items-center gap-2 text-sm font-bold text-gray-900 mb-4">
            <PieChart className="w-4 h-4 text-[#16a34a]" />
            <span>Leads by Source</span>
          </div>

          <div className="flex items-center justify-between gap-2 pt-1">
            <div className="relative w-32 h-32 shrink-0">
              <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                <circle
                  cx="50"
                  cy="50"
                  r="38"
                  fill="transparent"
                  stroke="#e2e8f0"
                  strokeWidth="15"
                />
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
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <span className="text-sm font-black text-gray-900 leading-none">
                  {totalLeadsCount}
                </span>
                <span className="text-[9.5px] font-semibold text-gray-400 mt-0.5">Total Leads</span>
              </div>
            </div>

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

        {/* 2. Deals Trend (Dual Axis Chart) */}
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

          <div className="w-full h-36 relative mt-2">
            <svg viewBox="0 0 280 120" className="w-full h-full overflow-visible">
              <text x="5" y="15" fontSize="8" fill="#94a3b8" textAnchor="start">100</text>
              <text x="5" y="35" fontSize="8" fill="#94a3b8" textAnchor="start">80</text>
              <text x="5" y="55" fontSize="8" fill="#94a3b8" textAnchor="start">60</text>
              <text x="5" y="75" fontSize="8" fill="#94a3b8" textAnchor="start">40</text>
              <text x="5" y="95" fontSize="8" fill="#94a3b8" textAnchor="start">20</text>
              <text x="5" y="112" fontSize="8" fill="#94a3b8" textAnchor="start">0</text>

              <text x="275" y="15" fontSize="7.5" fill="#94a3b8" textAnchor="end">₹1 Cr</text>
              <text x="275" y="35" fontSize="7.5" fill="#94a3b8" textAnchor="end">₹80 L</text>
              <text x="275" y="55" fontSize="7.5" fill="#94a3b8" textAnchor="end">₹60 L</text>
              <text x="275" y="75" fontSize="7.5" fill="#94a3b8" textAnchor="end">₹40 L</text>
              <text x="275" y="95" fontSize="7.5" fill="#94a3b8" textAnchor="end">₹20 L</text>
              <text x="275" y="112" fontSize="7.5" fill="#94a3b8" textAnchor="end">₹0</text>

              <line x1="28" y1="12" x2="245" y2="12" stroke="#f1f5f9" strokeWidth="1" />
              <line x1="28" y1="32" x2="245" y2="32" stroke="#f1f5f9" strokeWidth="1" />
              <line x1="28" y1="52" x2="245" y2="52" stroke="#f1f5f9" strokeWidth="1" />
              <line x1="28" y1="72" x2="245" y2="72" stroke="#f1f5f9" strokeWidth="1" />
              <line x1="28" y1="92" x2="245" y2="92" stroke="#f1f5f9" strokeWidth="1" />
              <line x1="28" y1="110" x2="245" y2="110" stroke="#e2e8f0" strokeWidth="1" />

              <rect x="42" y="90" width="10" height="20" rx="2" fill="#86efac" />
              <rect x="78" y="75" width="10" height="35" rx="2" fill="#86efac" />
              <rect x="114" y="60" width="10" height="50" rx="2" fill="#86efac" />
              <rect x="150" y="45" width="10" height="65" rx="2" fill="#86efac" />
              <rect x="186" y="32" width="10" height="78" rx="2" fill="#86efac" />
              <rect x="222" y="20" width="10" height="90" rx="2" fill="#86efac" />

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
            {recentActivities.length > 0 ? (
              recentActivities.map((act) => (
                <div key={act.id} className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-[#e8f8ee] flex items-center justify-center text-[#16a34a] shrink-0">
                      {act.type === "phone" ? (
                        <Phone className="w-3.5 h-3.5" />
                      ) : act.type === "email" ? (
                        <Mail className="w-3.5 h-3.5" />
                      ) : (
                        <FileText className="w-3.5 h-3.5" />
                      )}
                    </div>
                    <span className="font-medium text-gray-800 truncate max-w-[170px]">
                      {act.text}
                    </span>
                  </div>
                  <span className="text-[11px] text-gray-400 font-medium">
                    {new Date(act.time).toLocaleTimeString("en-US", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </span>
                </div>
              ))
            ) : (
              <>
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-[#e8f8ee] flex items-center justify-center text-[#16a34a] shrink-0">
                      <Phone className="w-3.5 h-3.5" />
                    </div>
                    <span className="font-medium text-gray-800">Call with GreenInfra</span>
                  </div>
                  <span className="text-[11px] text-gray-400 font-medium">Today, 11:20 AM</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-[#e8f8ee] flex items-center justify-center text-[#16a34a] shrink-0">
                      <Mail className="w-3.5 h-3.5" />
                    </div>
                    <span className="font-medium text-gray-800">Proposal sent to TechNova</span>
                  </div>
                  <span className="text-[11px] text-gray-400 font-medium">Today, 10:05 AM</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-[#e8f8ee] flex items-center justify-center text-[#16a34a] shrink-0">
                      <Users className="w-3.5 h-3.5" />
                    </div>
                    <span className="font-medium text-gray-800">Demo scheduled with CityCorp</span>
                  </div>
                  <span className="text-[11px] text-gray-400 font-medium">Today, 09:40 AM</span>
                </div>
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
              </>
            )}
          </div>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          5. ROW 4: RECENT DEALS TABLE (FROM MONGODB) + TOP ACCOUNTS
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
                  <th className="pb-2.5 font-semibold">Contact / Account</th>
                  <th className="pb-2.5 font-semibold">Value</th>
                  <th className="pb-2.5 font-semibold">Stage</th>
                  <th className="pb-2.5 font-semibold">Expected Close</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {recentLeads.slice(0, 4).map((deal) => {
                  const stage = deal.status || deal.stage || "proposal";
                  return (
                    <tr key={deal._id} className="hover:bg-gray-50/70 transition-colors">
                      <td className="py-2.5 font-bold text-gray-900">
                        {deal.fullName || deal.dealName}
                      </td>
                      <td className="py-2.5 text-gray-600 font-medium">
                        {deal.company || deal.fullName}
                      </td>
                      <td className="py-2.5 font-black text-gray-900">
                        {formatINR(deal.expectedValue)}
                      </td>
                      <td className="py-2.5">
                        <span
                          className={`text-[10.5px] font-bold px-2 py-0.5 rounded-md capitalize ${
                            stage === "won"
                              ? "bg-emerald-100 text-[#15803d]"
                              : stage === "negotiation"
                              ? "bg-[#bcf0da] text-[#03543f]"
                              : stage === "qualified"
                              ? "bg-[#d1fae5] text-[#065f46]"
                              : "bg-[#def7ec] text-[#03543f]"
                          }`}
                        >
                          {stage}
                        </span>
                      </td>
                      <td className="py-2.5 text-gray-500 font-medium">
                        {new Date(deal.expectedClose || deal.createdAt || Date.now()).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Top Accounts (Real Database accounts) */}
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
            {topAccounts.slice(0, 3).map((acc, aIdx) => (
              <div key={aIdx} className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#e8f8ee] flex items-center justify-center text-[#16a34a] shrink-0">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 leading-tight truncate max-w-[140px]">
                      {acc.name}
                    </div>
                    <div className="text-[11px] text-gray-400 font-medium">
                      {acc.industry} • <span className="text-[#16a34a] font-semibold">{acc.status}</span>
                    </div>
                  </div>
                </div>
                <span className="font-black text-gray-900 text-sm">{formatINR(acc.totalValue)}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Add Modal */}
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
                <label className="block text-xs font-bold text-gray-700 mb-1">Full Name / Deal Title *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ramesh Patel – Telemetry CRM"
                  value={customLead.fullName}
                  onChange={(e) => setCustomLead({ ...customLead, fullName: e.target.value })}
                  className="w-full px-3 py-2 text-xs border border-gray-200 rounded-lg focus:outline-none focus:border-[#16a34a]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Company / Organization</label>
                <input
                  type="text"
                  placeholder="e.g. Patel Healthcare Systems"
                  value={customLead.company}
                  onChange={(e) => setCustomLead({ ...customLead, company: e.target.value })}
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
                    <option value="Smart Street Lighting">Smart Street Lighting</option>
                    <option value="IoT Platform Deployment">IoT Platform Deployment</option>
                    <option value="CCMS Cloud Setup">CCMS Cloud Setup</option>
                    <option value="Healthcare Nutrition CRM">Healthcare Nutrition CRM</option>
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
                  Save to Database
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
