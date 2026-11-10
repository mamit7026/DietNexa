"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  Download,
  Printer,
  Calendar,
  Layers,
  Filter,
  User,
  FolderKanban,
  ChevronDown,
  Building2,
  Phone,
  Mail,
  MoreVertical,
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  Clock,
  PieChart,
  BarChart3,
  UserCheck,
  CheckCircle2,
} from "lucide-react";
import { fetchReportsApi, exportToCsv, getDefaultOneMonthRange } from "@/lib/crmApi";
import CrmDateRangePicker from "@/components/CrmDateRangePicker";

function ReportsPageContent() {
  const searchParams = useSearchParams();
  const currentTab = searchParams.get("tab") || "deals";

  // Filter States
  const defaultDates = getDefaultOneMonthRange();
  const [fromDate, setFromDate] = useState(defaultDates.fromDate);
  const [toDate, setToDate] = useState(defaultDates.toDate);
  const [selectedPipeline, setSelectedPipeline] = useState("All Pipelines");
  const [selectedStage, setSelectedStage] = useState("All Stages");
  const [selectedOwner, setSelectedOwner] = useState("All Owners");
  const [selectedProject, setSelectedProject] = useState("All Projects");

  // Pagination & Loading States
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [loading, setLoading] = useState(true);
  const [reportData, setReportData] = useState(null);
  const [exportDropdownOpen, setExportDropdownOpen] = useState(false);

  const loadReport = async () => {
    setLoading(true);
    try {
      const data = await fetchReportsApi({
        fromDate,
        toDate,
        pipeline: selectedPipeline,
        stage: selectedStage,
        owner: selectedOwner,
        project: selectedProject,
        page: currentPage,
        limit: pageSize,
      });

      if (data) {
        setReportData(data);
      }
    } catch (err) {
      console.error("Failed to load report from MongoDB:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadReport();
  }, [currentTab, currentPage, pageSize, fromDate, toDate]);

  const handleApplyFilters = () => {
    setCurrentPage(1);
    loadReport();
  };

  const handleResetFilters = () => {
    const def = getDefaultOneMonthRange();
    setFromDate(def.fromDate);
    setToDate(def.toDate);
    setSelectedPipeline("All Pipelines");
    setSelectedStage("All Stages");
    setSelectedOwner("All Owners");
    setSelectedProject("All Projects");
    setCurrentPage(1);
  };

  const handleExportCSV = () => {
    const deals = reportData?.deals || [];
    if (!deals.length) return;
    const formatted = deals.map((d, i) => ({
      "#": i + 1,
      "Deal Name": d.fullName || d.dealName,
      "Account / Company": d.company || "DietNexa Client",
      Owner: d.assignedToName || d.owner || "Amit Mondal",
      Stage: d.status || d.stage || "Proposal",
      "Deal Value (INR)": d.expectedValue || 0,
      "Expected Close": new Date(d.expectedClose || Date.now()).toLocaleDateString(),
      "Created On": new Date(d.createdAt).toLocaleDateString(),
      "Last Updated": new Date(d.updatedAt || d.createdAt).toLocaleDateString(),
    }));
    exportToCsv(formatted, `DietNexa_Deal_Report_${fromDate}_to_${toDate}.csv`);
    setExportDropdownOpen(false);
  };

  const handlePrint = () => {
    window.print();
  };

  // Helper format currency to Indian Lakhs or Crores
  const formatINR = (val) => {
    if (!val) return "₹ 0";
    if (val >= 10000000) return `₹ ${(val / 10000000).toFixed(2)} Cr`;
    if (val >= 100000) return `₹ ${(val / 100000).toFixed(2)} L`;
    return `₹ ${val.toLocaleString()}`;
  };

  // Stage badge styling
  const getStageBadge = (stage) => {
    const st = (stage || "").toLowerCase();
    if (st === "won" || st === "converted") {
      return "bg-[#15803d] text-white font-bold";
    }
    if (st === "negotiation") {
      return "bg-[#bcf0da] text-[#03543f] font-semibold";
    }
    if (st === "proposal") {
      return "bg-[#def7ec] text-[#03543f] font-semibold";
    }
    if (st === "qualified") {
      return "bg-[#d1fae5] text-[#065f46] font-semibold";
    }
    return "bg-gray-100 text-gray-700 font-medium";
  };

  const deals = reportData?.deals || [];
  const totalEntries = reportData?.pagination?.total || deals.length;

  return (
    <div className="space-y-4 max-w-[1550px] mx-auto text-gray-900 pb-16 font-sans">
      {/* ─────────────────────────────────────────────────────────────
          1. HEADER WITH ACTIONS (EXPORT & PRINT) - MATCHES SCREENSHOT
      ───────────────────────────────────────────────────────────── */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h1 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight">
            {currentTab === "leads"
              ? "Reports – Lead Report"
              : currentTab === "activities"
              ? "Reports – Activity Report"
              : currentTab === "accounts"
              ? "Reports – Account Report"
              : currentTab === "performance"
              ? "Reports – User Performance"
              : "Reports – Deal Report"}
          </h1>
          <p className="text-xs sm:text-[13px] text-gray-500 font-medium mt-0.5">
            {currentTab === "leads"
              ? "Comprehensive attribution of lead sources, campaigns, and response rates."
              : currentTab === "activities"
              ? "Audit logs of phone calls, meetings, proposals, and customer communications."
              : currentTab === "accounts"
              ? "Top enterprise accounts, industry classifications, and contract valuations."
              : currentTab === "performance"
              ? "Sales representative closed revenues, conversion rates, and targets."
              : "Detailed list of all deals with current status, value and expected close date."}
          </p>
        </div>

        {/* Top Right: Export & Print */}
        <div className="flex items-center gap-2">
          {/* Export Dropdown */}
          <div className="relative">
            <button
              onClick={() => setExportDropdownOpen(!exportDropdownOpen)}
              className="inline-flex items-center gap-1.5 bg-white border border-gray-200/90 rounded-lg px-3.5 py-1.5 text-xs font-semibold text-gray-700 shadow-2xs hover:bg-gray-50 cursor-pointer transition-colors"
            >
              <Download className="w-3.5 h-3.5 text-gray-500" />
              <span>Export</span>
              <ChevronDown className="w-3 h-3 text-gray-400" />
            </button>

            {exportDropdownOpen && (
              <div
                className="absolute right-0 mt-2 w-40 bg-white rounded-xl shadow-xl border border-gray-100 py-1.5 z-50 text-xs text-gray-700 animate-in fade-in-50"
                onClick={() => setExportDropdownOpen(false)}
              >
                <button
                  onClick={handleExportCSV}
                  className="w-full text-left px-3.5 py-2 hover:bg-emerald-50 hover:text-emerald-700 font-semibold"
                >
                  Export as CSV (.csv)
                </button>
                <button
                  onClick={handleExportCSV}
                  className="w-full text-left px-3.5 py-2 hover:bg-emerald-50 hover:text-emerald-700 font-semibold"
                >
                  Export to Excel (.xlsx)
                </button>
                <button
                  onClick={handlePrint}
                  className="w-full text-left px-3.5 py-2 hover:bg-emerald-50 hover:text-emerald-700 font-semibold"
                >
                  Export to PDF (Print)
                </button>
              </div>
            )}
          </div>

          {/* Print Button */}
          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-1.5 bg-white border border-gray-200/90 rounded-lg px-3.5 py-1.5 text-xs font-semibold text-gray-700 shadow-2xs hover:bg-gray-50 cursor-pointer transition-colors"
          >
            <Printer className="w-3.5 h-3.5 text-gray-500" />
            <span>Print</span>
          </button>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          2. FILTER CONTROLS BAR (MATCHES SCREENSHOT)
      ───────────────────────────────────────────────────────────── */}
      <div className="bg-white rounded-2xl p-4 border border-gray-200/80 shadow-2xs">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-2.5 items-end">
          {/* 1. Date Range Picker (Calendar & Presets) */}
          <div className="lg:col-span-2">
            <label className="block text-[11px] font-bold text-gray-600 mb-1">Date Range</label>
            <CrmDateRangePicker
              fromDate={fromDate}
              toDate={toDate}
              onApply={(f, t) => {
                setFromDate(f);
                setToDate(t);
              }}
              align="left"
            />
          </div>

          {/* 2. Pipeline */}
          <div>
            <label className="block text-[11px] font-bold text-gray-600 mb-1">Pipeline</label>
            <select
              value={selectedPipeline}
              onChange={(e) => setSelectedPipeline(e.target.value)}
              className="w-full px-2.5 py-1.5 bg-white border border-gray-200 rounded-lg text-xs font-semibold text-gray-700"
            >
              <option value="All Pipelines">All Pipelines</option>
              <option value="Sales Pipeline">Sales Pipeline</option>
              <option value="Smart Cities">Smart Cities</option>
              <option value="Urban Tech">Urban Tech</option>
            </select>
          </div>

          {/* 3. Stage */}
          <div>
            <label className="block text-[11px] font-bold text-gray-600 mb-1">Stage</label>
            <select
              value={selectedStage}
              onChange={(e) => setSelectedStage(e.target.value)}
              className="w-full px-2.5 py-1.5 bg-white border border-gray-200 rounded-lg text-xs font-semibold text-gray-700"
            >
              <option value="All Stages">All Stages</option>
              <option value="New">New</option>
              <option value="Qualified">Qualified</option>
              <option value="Proposal">Proposal</option>
              <option value="Negotiation">Negotiation</option>
              <option value="Won">Won</option>
              <option value="Lost">Lost</option>
            </select>
          </div>

          {/* 4. Owner */}
          <div>
            <label className="block text-[11px] font-bold text-gray-600 mb-1">Owner</label>
            <select
              value={selectedOwner}
              onChange={(e) => setSelectedOwner(e.target.value)}
              className="w-full px-2.5 py-1.5 bg-white border border-gray-200 rounded-lg text-xs font-semibold text-gray-700"
            >
              <option value="All Owners">All Owners</option>
              <option value="Amit Mondal">Amit Mondal</option>
              <option value="Priya Sen">Priya Sen</option>
              <option value="Rohit Das">Rohit Das</option>
              <option value="Ananya Roy">Ananya Roy</option>
              <option value="Sourav Pal">Sourav Pal</option>
              <option value="Sima Ghosh">Sima Ghosh</option>
              <option value="Arindam Dutta">Arindam Dutta</option>
              <option value="Madhuri Das">Madhuri Das</option>
              <option value="Subhajit Roy">Subhajit Roy</option>
              <option value="Ritika Paul">Ritika Paul</option>
            </select>
          </div>

          {/* 5. Project */}
          <div>
            <label className="block text-[11px] font-bold text-gray-600 mb-1">Project</label>
            <select
              value={selectedProject}
              onChange={(e) => setSelectedProject(e.target.value)}
              className="w-full px-2.5 py-1.5 bg-white border border-gray-200 rounded-lg text-xs font-semibold text-gray-700"
            >
              <option value="All Projects">All Projects</option>
              <option value="Smart Cities">Smart Cities</option>
              <option value="Urban Tech">Urban Tech</option>
              <option value="Industrial IoT">Industrial IoT</option>
              <option value="Renewables">Renewables</option>
            </select>
          </div>

          {/* 6. Buttons: Apply & Reset */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleApplyFilters}
              className="w-full bg-[#16a34a] hover:bg-[#15803d] text-white py-1.5 px-3 rounded-lg text-xs font-bold shadow-xs transition-colors cursor-pointer text-center"
            >
              Apply
            </button>
            <button
              onClick={handleResetFilters}
              className="w-full bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 py-1.5 px-3 rounded-lg text-xs font-semibold transition-colors cursor-pointer text-center"
            >
              Reset
            </button>
          </div>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          3. REAL DATA TABLE (MATCHES SCREENSHOT EXACTLY)
      ───────────────────────────────────────────────────────────── */}
      <div className="bg-white rounded-2xl border border-gray-200/80 shadow-2xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            {/* Header row with light-green tint matching screenshot */}
            <thead>
              <tr className="bg-[#e9f7ee] text-gray-800 font-bold border-b border-emerald-100 text-[11.5px]">
                <th className="py-3 px-3.5 w-12 text-center">#</th>
                <th className="py-3 px-3.5 font-bold">Deal Name</th>
                <th className="py-3 px-3.5 font-bold">Account / Company</th>
                <th className="py-3 px-3.5 font-bold">Owner</th>
                <th className="py-3 px-3.5 font-bold">Stage</th>
                <th className="py-3 px-3.5 font-bold">Deal Value</th>
                <th className="py-3 px-3.5 font-bold">Expected Close</th>
                <th className="py-3 px-3.5 font-bold">Created On</th>
                <th className="py-3 px-3.5 font-bold">Last Updated</th>
              </tr>
            </thead>

            {/* Body Rows from MongoDB */}
            <tbody className="divide-y divide-gray-100 text-gray-800">
              {loading ? (
                <tr>
                  <td colSpan="9" className="py-12 text-center text-gray-400">
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-6 h-6 border-2 border-[#16a34a] border-t-transparent rounded-full animate-spin" />
                      <span>Loading MongoDB Deal Report...</span>
                    </div>
                  </td>
                </tr>
              ) : deals.length === 0 ? (
                <tr>
                  <td colSpan="9" className="py-12 text-center text-gray-400 italic">
                    No deals match the selected criteria.
                  </td>
                </tr>
              ) : (
                deals.map((deal, idx) => {
                  const ownerName = deal.assignedToName || deal.owner || "Amit Mondal";
                  const stage = deal.status || deal.stage || "Proposal";

                  return (
                    <tr
                      key={deal._id || idx}
                      className="hover:bg-gray-50/80 transition-colors"
                    >
                      {/* # Number */}
                      <td className="py-3 px-3.5 text-center font-semibold text-gray-500">
                        {(currentPage - 1) * pageSize + idx + 1}
                      </td>

                      {/* Deal Name */}
                      <td className="py-3 px-3.5 font-bold text-gray-900 leading-tight">
                        {deal.fullName || deal.dealName}
                      </td>

                      {/* Account / Company */}
                      <td className="py-3 px-3.5 text-gray-700 font-medium">
                        {deal.company || "GreenInfra Ltd."}
                      </td>

                      {/* Owner with Avatar */}
                      <td className="py-3 px-3.5">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full overflow-hidden bg-emerald-100 border border-emerald-200 flex items-center justify-center shrink-0">
                            <Image
                              src="/image/dr-arjun-mehta.webp"
                              alt={ownerName}
                              width={24}
                              height={24}
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                e.currentTarget.style.display = "none";
                              }}
                            />
                            <span className="text-[9px] font-bold text-emerald-900">
                              {ownerName.substring(0, 2).toUpperCase()}
                            </span>
                          </div>
                          <span className="font-semibold text-gray-900 truncate">
                            {ownerName}
                          </span>
                        </div>
                      </td>

                      {/* Stage Pill */}
                      <td className="py-3 px-3.5">
                        <span
                          className={`inline-block px-2.5 py-0.5 rounded-md text-[11px] capitalize ${getStageBadge(
                            stage
                          )}`}
                        >
                          {stage}
                        </span>
                      </td>

                      {/* Deal Value */}
                      <td className="py-3 px-3.5 font-black text-gray-900">
                        {formatINR(deal.expectedValue)}
                      </td>

                      {/* Expected Close */}
                      <td className="py-3 px-3.5 text-gray-600 font-medium">
                        {new Date(deal.expectedClose || Date.now()).toLocaleDateString("en-US", {
                          month: "short",
                          day: "2-digit",
                          year: "numeric",
                        })}
                      </td>

                      {/* Created On */}
                      <td className="py-3 px-3.5 text-gray-600 font-medium">
                        {new Date(deal.createdAt || Date.now()).toLocaleDateString("en-US", {
                          month: "short",
                          day: "2-digit",
                          year: "numeric",
                        })}
                      </td>

                      {/* Last Updated */}
                      <td className="py-3 px-3.5 text-gray-600 font-medium">
                        {new Date(deal.updatedAt || deal.createdAt || Date.now()).toLocaleDateString("en-US", {
                          month: "short",
                          day: "2-digit",
                          year: "numeric",
                        })}
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>

        {/* ─────────────────────────────────────────────────────────────
            4. FOOTER PAGINATION BAR (MATCHES SCREENSHOT)
        ───────────────────────────────────────────────────────────── */}
        <div className="p-3.5 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-gray-500">
          <div>
            Showing 1 to {deals.length} of {totalEntries > 0 ? totalEntries : deals.length} entries
          </div>

          <div className="flex items-center gap-3">
            {/* Page Size Dropdown */}
            <div className="flex items-center gap-1.5">
              <select
                value={pageSize}
                onChange={(e) => setPageSize(Number(e.target.value))}
                className="px-2 py-1 bg-white border border-gray-200 rounded-lg text-xs font-semibold text-gray-700"
              >
                <option value={10}>10 per page</option>
                <option value={25}>25 per page</option>
                <option value={50}>50 per page</option>
              </select>
            </div>

            {/* Dynamic Pagination Buttons */}
            {(() => {
              const totalPages = Math.max(1, Math.ceil(totalEntries / pageSize));
              const pages = [];
              for (let i = 1; i <= Math.min(5, totalPages); i++) {
                pages.push(i);
              }
              return (
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setCurrentPage(1)}
                    disabled={currentPage === 1}
                    className="p-1 px-2 rounded-md border border-gray-200 hover:bg-gray-100 disabled:opacity-40 cursor-pointer"
                    title="First Page"
                  >
                    «
                  </button>
                  <button
                    onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                    className="p-1 px-2 rounded-md border border-gray-200 hover:bg-gray-100 disabled:opacity-40 cursor-pointer"
                    title="Previous Page"
                  >
                    ‹
                  </button>
                  {pages.map((p) => (
                    <button
                      key={p}
                      onClick={() => setCurrentPage(p)}
                      className={`p-1 px-2.5 rounded-md font-semibold cursor-pointer transition-colors ${
                        currentPage === p
                          ? "bg-[#16a34a] text-white font-bold"
                          : "border border-gray-200 hover:bg-gray-100 text-gray-700"
                      }`}
                    >
                      {p}
                    </button>
                  ))}
                  {totalPages > 5 && (
                    <>
                      <span className="px-1 text-gray-400">...</span>
                      <button
                        onClick={() => setCurrentPage(totalPages)}
                        className={`p-1 px-2.5 rounded-md font-semibold cursor-pointer border border-gray-200 hover:bg-gray-100 ${
                          currentPage === totalPages ? "bg-[#16a34a] text-white font-bold" : "text-gray-700"
                        }`}
                      >
                        {totalPages}
                      </button>
                    </>
                  )}
                  <button
                    onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                    disabled={currentPage === totalPages}
                    className="p-1 px-2 rounded-md border border-gray-200 hover:bg-gray-100 disabled:opacity-40 cursor-pointer"
                    title="Next Page"
                  >
                    ›
                  </button>
                  <button
                    onClick={() => setCurrentPage(totalPages)}
                    disabled={currentPage === totalPages}
                    className="p-1 px-2 rounded-md border border-gray-200 hover:bg-gray-100 disabled:opacity-40 cursor-pointer"
                    title="Last Page"
                  >
                    »
                  </button>
                </div>
              );
            })()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ReportsPage() {
  return (
    <Suspense
      fallback={
        <div className="p-8 text-center text-gray-500">
          <div className="w-8 h-8 border-3 border-[#16a34a] border-t-transparent rounded-full animate-spin mx-auto mb-2" />
          <span>Loading Deal Reports...</span>
        </div>
      }
    >
      <ReportsPageContent />
    </Suspense>
  );
}
