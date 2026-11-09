"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  TrendingUp,
  Calendar,
  Download,
  Users,
  PieChart,
  IndianRupee,
  UserCheck,
  Inbox,
  Sparkles,
  ArrowRight,
  Filter,
  CheckCircle2,
} from "lucide-react";
import {
  fetchReportsApi,
  getCurrentStaffUser,
  getDefaultOneMonthRange,
  exportToCsv,
} from "@/lib/crmApi";

export default function AdminReportsPage() {
  const [currentUser, setCurrentUser] = useState(null);
  const [reports, setReports] = useState(null);
  const [loading, setLoading] = useState(true);

  // Date range defaults to past 1 month
  const defaultDates = getDefaultOneMonthRange();
  const [fromDate, setFromDate] = useState(defaultDates.fromDate);
  const [toDate, setToDate] = useState(defaultDates.toDate);

  const loadReports = async () => {
    setLoading(true);
    const user = getCurrentStaffUser();
    setCurrentUser(user);

    try {
      const data = await fetchReportsApi({ fromDate, toDate });
      if (data) {
        setReports(data);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadReports();
  }, [fromDate, toDate]);

  const handleExportSales = () => {
    if (!reports?.salesPerformance) return;
    exportToCsv(reports.salesPerformance, `dietnexa_sales_report_${fromDate}_to_${toDate}.csv`);
  };

  const handleQuickPreset = (preset) => {
    const end = new Date();
    const start = new Date();

    if (preset === "7d") {
      start.setDate(end.getDate() - 7);
    } else if (preset === "1m") {
      start.setMonth(end.getMonth() - 1);
    } else if (preset === "3m") {
      start.setMonth(end.getMonth() - 3);
    } else if (preset === "ytd") {
      start.setMonth(0, 1);
    }

    setFromDate(start.toISOString().split("T")[0]);
    setToDate(end.toISOString().split("T")[0]);
  };

  return (
    <div className="space-y-6">
      {/* ─────────────────────────────────────────────────────────────
          1. HEADER & EXPORT
      ───────────────────────────────────────────────────────────── */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-900 text-xs font-bold mb-2">
            <TrendingUp className="w-3.5 h-3.5 text-blue-700" />
            <span>Executive Analytics &amp; Auditing</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">
            Sales &amp; Customer Reports
          </h1>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            Analyze team conversion performance, lead acquisition channels, and revenue generation.
          </p>
        </div>

        <button
          type="button"
          onClick={handleExportSales}
          className="px-4 py-2.5 rounded-xl bg-gray-900 hover:bg-black text-white text-xs sm:text-sm font-bold flex items-center gap-2 transition-colors cursor-pointer shadow-xs self-start sm:self-auto"
        >
          <Download className="w-4 h-4" />
          <span>Export Report to CSV</span>
        </button>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          2. DATE RANGE PICKER (Default: Past 1 Month)
      ───────────────────────────────────────────────────────────── */}
      <div className="bg-white p-4 sm:p-5 rounded-2xl border border-gray-200/80 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-bold text-gray-700 flex items-center gap-1.5 mr-1">
            <Calendar className="w-4 h-4 text-emerald-700" />
            <span>Reporting Period:</span>
          </span>

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
            onClick={() => handleQuickPreset("3m")}
            className="px-3 py-1 rounded-xl text-xs font-bold bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors"
          >
            Last 3 Months
          </button>
          <button
            type="button"
            onClick={() => handleQuickPreset("ytd")}
            className="px-3 py-1 rounded-xl text-xs font-bold bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors"
          >
            Year to Date
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
          3. KEY METRICS SUMMARY
      ───────────────────────────────────────────────────────────── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-2xl p-5 border border-gray-200/80 shadow-xs">
          <p className="text-xs font-bold uppercase tracking-wider text-gray-500">
            Inquiries in Period
          </p>
          <h3 className="text-2xl font-black text-gray-900 mt-1">
            {loading ? "..." : reports?.summary?.totalLeads ?? 0}
          </h3>
          <p className="text-[11px] text-gray-400 mt-1">
            Total marketing &amp; website reach
          </p>
        </div>

        <div className="bg-white rounded-2xl p-5 border border-gray-200/80 shadow-xs">
          <p className="text-xs font-bold uppercase tracking-wider text-gray-500">
            Converted Patients
          </p>
          <h3 className="text-2xl font-black text-[#10793f] mt-1">
            {loading ? "..." : reports?.summary?.convertedCount ?? 0}
          </h3>
          <p className="text-[11px] text-emerald-700 font-semibold mt-1">
            Successfully enrolled clients
          </p>
        </div>

        <div className="bg-white rounded-2xl p-5 border border-gray-200/80 shadow-xs">
          <p className="text-xs font-bold uppercase tracking-wider text-gray-500">
            Conversion Rate
          </p>
          <h3 className="text-2xl font-black text-blue-600 mt-1">
            {loading ? "..." : reports?.summary?.conversionRate ?? "0%"}
          </h3>
          <p className="text-[11px] text-blue-700 font-semibold mt-1">
            Inquiry to patient ratio
          </p>
        </div>

        <div className="bg-white rounded-2xl p-5 border border-gray-200/80 shadow-xs">
          <p className="text-xs font-bold uppercase tracking-wider text-gray-500">
            Revenue Generated
          </p>
          <h3 className="text-2xl font-black text-[#0c3820] mt-1">
            ₹{loading ? "..." : (reports?.summary?.totalRevenue ?? 0).toLocaleString()}
          </h3>
          <p className="text-[11px] text-gray-500 font-semibold mt-1">
            Direct package fees
          </p>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          4. SALES REPRESENTATIVES PERFORMANCE REPORT
      ───────────────────────────────────────────────────────────── */}
      <div className="bg-white rounded-3xl border border-gray-200/80 shadow-xs overflow-hidden">
        <div className="p-5 border-b border-gray-100 flex items-center justify-between">
          <div>
            <h2 className="text-base font-extrabold text-gray-900">
              Sales Representative Performance
            </h2>
            <p className="text-xs text-gray-500 mt-0.5">
              Individual agent pipeline velocity, outreach volume, and closed revenue
            </p>
          </div>
          <span className="text-xs text-emerald-800 font-bold bg-emerald-50 px-2.5 py-1 rounded-full">
            Active Staff
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-gray-50 text-gray-600 font-bold uppercase tracking-wider border-b border-gray-100">
              <tr>
                <th className="p-4">Sales Agent</th>
                <th className="p-4 text-center">Assigned Leads</th>
                <th className="p-4 text-center">Contacted</th>
                <th className="p-4 text-center">Converted Clients</th>
                <th className="p-4 text-center">Conversion %</th>
                <th className="p-4 text-right">Revenue Closed</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {loading ? (
                <tr>
                  <td colSpan={6} className="p-8 text-center text-gray-400">
                    Loading performance table...
                  </td>
                </tr>
              ) : !reports?.salesPerformance?.length ? (
                <tr>
                  <td colSpan={6} className="p-8 text-center text-gray-500">
                    No sales activity found in this period.
                  </td>
                </tr>
              ) : (
                reports.salesPerformance.map((rep) => (
                  <tr key={rep.id} className="hover:bg-gray-50/70 transition-colors">
                    <td className="p-4">
                      <div className="font-bold text-gray-900 text-sm">{rep.name}</div>
                      <div className="text-gray-500 text-[11px]">{rep.email}</div>
                    </td>
                    <td className="p-4 text-center font-bold text-gray-800">
                      {rep.totalLeads}
                    </td>
                    <td className="p-4 text-center font-semibold text-blue-700">
                      {rep.contactedCount}
                    </td>
                    <td className="p-4 text-center font-black text-emerald-800">
                      {rep.convertedCount}
                    </td>
                    <td className="p-4 text-center font-extrabold text-purple-700">
                      {rep.conversionRate}
                    </td>
                    <td className="p-4 text-right font-black text-gray-900 text-sm">
                      ₹{Number(rep.totalRevenue || 0).toLocaleString()}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          5. LEAD SOURCE ACQUISITION & NUTRITION PLAN BREAKDOWN
      ───────────────────────────────────────────────────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Lead Source Breakdown */}
        <div className="bg-white rounded-3xl border border-gray-200/80 shadow-xs p-6">
          <div className="flex items-center justify-between pb-4 border-b border-gray-100 mb-4">
            <div>
              <h3 className="text-base font-extrabold text-gray-900">
                Lead Source Attribution
              </h3>
              <p className="text-xs text-gray-500 mt-0.5">
                Where patients find DietNexa
              </p>
            </div>
            <PieChart className="w-5 h-5 text-emerald-600" />
          </div>

          <div className="space-y-3.5">
            {loading ? (
              <div className="py-8 text-center text-xs text-gray-400">Loading sources...</div>
            ) : Object.keys(reports?.sourceBreakdown || {}).length === 0 ? (
              <div className="py-8 text-center text-xs text-gray-400 italic">No sources recorded</div>
            ) : (
              Object.entries(reports.sourceBreakdown).map(([sourceKey, count]) => {
                const total = reports.summary?.totalLeads || 1;
                const pct = Math.round((count / total) * 100);

                return (
                  <div key={sourceKey} className="space-y-1">
                    <div className="flex items-center justify-between text-xs font-bold text-gray-800">
                      <span className="capitalize">{sourceKey.replace(/_/g, " ")}</span>
                      <span>{count} leads ({pct}%)</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
                      <div
                        className="bg-[#10793f] h-2 rounded-full transition-all duration-500"
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>

        {/* Nutrition Plan Revenue Distribution */}
        <div className="bg-white rounded-3xl border border-gray-200/80 shadow-xs p-6">
          <div className="flex items-center justify-between pb-4 border-b border-gray-100 mb-4">
            <div>
              <h3 className="text-base font-extrabold text-gray-900">
                Revenue by Nutrition Program
              </h3>
              <p className="text-xs text-gray-500 mt-0.5">
                Top dietary solutions generating clinical packages
              </p>
            </div>
            <IndianRupee className="w-5 h-5 text-blue-600" />
          </div>

          <div className="space-y-3">
            {loading ? (
              <div className="py-8 text-center text-xs text-gray-400">Loading plans...</div>
            ) : Object.keys(reports?.planBreakdown || {}).length === 0 ? (
              <div className="py-8 text-center text-xs text-gray-400 italic">No package revenue recorded yet</div>
            ) : (
              Object.entries(reports.planBreakdown).map(([planName, revenue]) => (
                <div
                  key={planName}
                  className="flex items-center justify-between p-3 rounded-2xl bg-gray-50 border border-gray-100 text-xs"
                >
                  <span className="font-bold text-gray-800">{planName}</span>
                  <span className="font-black text-[#10793f] text-sm">
                    ₹{Number(revenue).toLocaleString()}
                  </span>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

