"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Handshake,
  IndianRupee,
  Target,
  Trophy,
  BarChart2,
  Building2,
  Calendar,
  Phone,
  Mail,
  MessageCircle,
  Clock,
  Plus,
  MoreVertical,
  LayoutGrid,
  List,
  Filter,
  Check,
  CheckCircle2,
  X,
  Send,
  CalendarClock,
  User,
  Tag,
  ArrowRight,
  ExternalLink,
  Trash2,
  UserCheck,
  Sparkles,
  ChevronDown,
} from "lucide-react";
import {
  fetchPipelineApi,
  moveLeadStageApi,
  getCurrentStaffUser,
  setFollowUpApi,
  addContactLogApi,
  submitContactLead,
  addRemarkApi,
  deleteLeadApi,
  convertToClientApi,
  getDefaultOneMonthRange,
  formatINR,
} from "@/lib/crmApi";

import CrmDateRangePicker from "@/components/CrmDateRangePicker";

export default function DealsKanbanPage() {
  const [currentUser, setCurrentUser] = useState(null);
  const [columns, setColumns] = useState({});
  const [loading, setLoading] = useState(true);

  // Date range defaults to past 1 month
  const defaultDates = getDefaultOneMonthRange();
  const [fromDate, setFromDate] = useState(defaultDates.fromDate);
  const [toDate, setToDate] = useState(defaultDates.toDate);

  // Filter States
  const [pipelineFilter, setPipelineFilter] = useState("Sales Pipeline");
  const [ownerFilter, setOwnerFilter] = useState("All Owners");

  // Drag and Drop State
  const [draggedLeadId, setDraggedLeadId] = useState(null);
  const [dragOverCol, setDragOverCol] = useState(null);

  // Selected Lead for the Comprehensive Details Drawer
  const [selectedLead, setSelectedLead] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Drawer Action Forms
  const [newRemark, setNewRemark] = useState("");
  const [logChannel, setLogChannel] = useState("phone");
  const [logOutcome, setLogOutcome] = useState("connected_interested");
  const [logNotes, setLogNotes] = useState("");
  const [showLogForm, setShowLogForm] = useState(false);
  const [followUpDate, setFollowUpDate] = useState("");
  const [followUpNotes, setFollowUpNotes] = useState("");
  const [showFollowUpForm, setShowFollowUpForm] = useState(false);

  // Quick Add Deal Modal
  const [showAddDeal, setShowAddDeal] = useState(false);
  const [newDealTargetStage, setNewDealTargetStage] = useState("new");
  const [newDealForm, setNewDealForm] = useState({
    title: "",
    company: "",
    phone: "",
    email: "",
    value: 1200000,
    expectedClose: "2026-11-30",
    stage: "new",
  });

  // Empty Kanban columns structure
  const defaultColumnsData = {
    new: { key: "new", title: "New", dealsCount: "0 Deals", totalValueText: "₹ 0", badgeColor: "bg-[#def7ec] text-[#03543f]", leads: [] },
    qualified: { key: "qualified", title: "Qualified", dealsCount: "0 Deals", totalValueText: "₹ 0", badgeColor: "bg-[#d1fae5] text-[#065f46]", leads: [] },
    proposal: { key: "proposal", title: "Proposal", dealsCount: "0 Deals", totalValueText: "₹ 0", badgeColor: "bg-[#6ee7b7] text-[#064e3b]", leads: [] },
    negotiation: { key: "negotiation", title: "Negotiation", dealsCount: "0 Deals", totalValueText: "₹ 0", badgeColor: "bg-[#bbf7d0] text-[#14532d]", leads: [] },
    won: { key: "won", title: "Won", dealsCount: "0 Deals", totalValueText: "₹ 0", badgeColor: "bg-[#15803d] text-white", leads: [] },
  };

  const loadPipeline = async (fDate = fromDate, tDate = toDate) => {
    setLoading(true);
    const user = getCurrentStaffUser();
    setCurrentUser(user);

    try {
      const data = await fetchPipelineApi({
        fromDate: fDate,
        toDate: tDate,
        owner: ownerFilter !== "All Owners" ? ownerFilter : undefined,
      });
      if (data && data.columns) {
        const stageCols = {
          new: { key: "new", title: "New", dealsCount: "0 Deals", totalValueText: "₹ 0", leads: [] },
          qualified: { key: "qualified", title: "Qualified", dealsCount: "0 Deals", totalValueText: "₹ 0", leads: [] },
          proposal: { key: "proposal", title: "Proposal", dealsCount: "0 Deals", totalValueText: "₹ 0", leads: [] },
          negotiation: { key: "negotiation", title: "Negotiation", dealsCount: "0 Deals", totalValueText: "₹ 0", leads: [] },
          won: { key: "won", title: "Won", dealsCount: "0 Deals", totalValueText: "₹ 0", leads: [] },
        };

        let totalValueSum = 0;
        let totalCountSum = 0;

        Object.keys(data.columns).forEach((stageKey) => {
          const col = data.columns[stageKey];
          let target = "new";
          if (stageKey === "contacted" || stageKey === "qualified") target = "qualified";
          else if (stageKey === "in_discussion" || stageKey === "proposal") target = "proposal";
          else if (stageKey === "followup_scheduled" || stageKey === "negotiation") target = "negotiation";
          else if (stageKey === "converted" || stageKey === "won") target = "won";

          if (col.leads) {
            col.leads.forEach((l) => {
              const val = l.expectedValue || (l.clientProfile?.amountPaid || 12000);
              totalValueSum += val;
              totalCountSum++;

              stageCols[target].leads.push({
                ...l,
                company: l.company || l.clientProfile?.planName || l.subject || "DietNexa Client",
                valueFormatted:
                  val >= 10000000
                    ? `₹ ${(val / 10000000).toFixed(2)} Cr`
                    : val >= 100000
                    ? `₹ ${(val / 100000).toFixed(2)} L`
                    : `₹ ${val.toLocaleString()}`,
                expectedClose: new Date(l.expectedClose || l.createdAt || Date.now()).toLocaleDateString(
                  "en-US",
                  {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  }
                ),
                owner: l.assignedToName || l.owner || user?.name || "Amit Mondal",
              });
            });
          }
        });

        // Set column counts and sums
        Object.keys(stageCols).forEach((k) => {
          const colLeads = stageCols[k].leads;
          const colVal = colLeads.reduce((s, d) => s + (d.expectedValue || 0), 0);
          stageCols[k].dealsCount = `${colLeads.length} Deals`;
          stageCols[k].totalValueText =
            colVal >= 10000000
              ? `₹ ${(colVal / 10000000).toFixed(2)} Cr`
              : colVal >= 100000
              ? `₹ ${(colVal / 100000).toFixed(2)} L`
              : `₹ ${colVal.toLocaleString()}`;
        });

        // Set columns directly from live MongoDB aggregations
        setColumns(stageCols);
      } else {
        setColumns(defaultColumnsData);
      }
    } catch (err) {
      console.error("Failed to load live pipeline:", err);
      setColumns(defaultColumnsData);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadPipeline(fromDate, toDate);
  }, [fromDate, toDate, ownerFilter, pipelineFilter]);

  // Move deal stage (Drag & Drop or 1-Click Stage Selector)
  const handleStageChange = async (leadId, targetStage) => {
    setColumns((prev) => {
      const newCols = { ...prev };
      let movedLead = null;

      // Find and remove lead from previous column
      Object.keys(newCols).forEach((k) => {
        const foundIdx = newCols[k].leads.findIndex((l) => l._id === leadId);
        if (foundIdx !== -1) {
          movedLead = { ...newCols[k].leads[foundIdx], status: targetStage };
          newCols[k].leads.splice(foundIdx, 1);
        }
      });

      // Add to target column
      if (movedLead && newCols[targetStage]) {
        // Record automated status change remark with exact Date & Time
        const stageRemark = {
          _id: "auto-" + Date.now(),
          authorName: "System",
          text: `Stage changed to ${newCols[targetStage].title}`,
          createdAt: new Date().toISOString(),
        };
        movedLead.notes = [stageRemark, ...(movedLead.notes || [])];

        newCols[targetStage].leads.unshift(movedLead);

        // Update selected lead if drawer is open
        if (selectedLead && selectedLead._id === leadId) {
          setSelectedLead(movedLead);
        }
      }
      return newCols;
    });

    try {
      await moveLeadStageApi(leadId, targetStage);
    } catch (e) {
      console.warn("API move failed, applied locally:", e);
    }
  };

  // Add new remark / note with date-time
  const handleAddRemark = async (e) => {
    e.preventDefault();
    if (!newRemark.trim() || !selectedLead) return;

    const noteObj = {
      _id: "n-" + Date.now(),
      authorName: currentUser?.name || "Amit Mondal",
      text: newRemark.trim(),
      createdAt: new Date().toISOString(),
    };

    const updated = {
      ...selectedLead,
      notes: [noteObj, ...(selectedLead.notes || [])],
    };
    setSelectedLead(updated);
    setNewRemark("");

    // Update in column state
    setColumns((prev) => {
      const next = { ...prev };
      Object.keys(next).forEach((k) => {
        const idx = next[k].leads.findIndex((l) => l._id === selectedLead._id);
        if (idx !== -1) {
          next[k].leads[idx] = updated;
        }
      });
      return next;
    });

    try {
      await addRemarkApi(selectedLead._id, noteObj.text);
    } catch (err) {
      console.warn("Remark save offline fallback:", err);
    }
  };

  // Log Call or Email interaction
  const handleLogInteraction = async (e) => {
    e.preventDefault();
    if (!selectedLead) return;

    const logEntry = {
      _id: "log-" + Date.now(),
      channel: logChannel,
      outcome: logOutcome,
      notes: logNotes || `${logChannel === "phone" ? "Phone Call" : "Email"} conducted with client`,
      contactedByName: currentUser?.name || "Amit Mondal",
      contactedAt: new Date().toISOString(),
    };

    const updated = {
      ...selectedLead,
      callLogs: [logEntry, ...(selectedLead.callLogs || [])],
    };
    setSelectedLead(updated);
    setLogNotes("");
    setShowLogForm(false);

    // Update columns state
    setColumns((prev) => {
      const next = { ...prev };
      Object.keys(next).forEach((k) => {
        const idx = next[k].leads.findIndex((l) => l._id === selectedLead._id);
        if (idx !== -1) {
          next[k].leads[idx] = updated;
        }
      });
      return next;
    });

    try {
      await addContactLogApi(selectedLead._id, logEntry);
    } catch (err) {
      console.warn("Contact log fallback:", err);
    }
  };

  // Schedule Follow-up with date and time
  const handleScheduleFollowUp = async (e) => {
    e.preventDefault();
    if (!followUpDate || !selectedLead) return;

    const updated = {
      ...selectedLead,
      followUpDate,
      followUpNotes,
      status: "negotiation",
    };
    setSelectedLead(updated);
    setShowFollowUpForm(false);

    try {
      await setFollowUpApi(selectedLead._id, { followUpDate, followUpNotes });
    } catch (e) {}
  };

  // Quick Create Deal Form
  const handleCreateNewDeal = async (e) => {
    e.preventDefault();
    if (!newDealForm.title) return;

    try {
      await submitContactLead({
        fullName: newDealForm.title,
        dealName: newDealForm.title,
        company: newDealForm.company || newDealForm.title,
        phone: newDealForm.phone || "+91 98765 00000",
        email: newDealForm.email || `deal.${Date.now()}@example.com`,
        expectedValue: Number(newDealForm.value) || 1200000,
        expectedClose: newDealForm.expectedClose || new Date().toISOString(),
        status: newDealTargetStage,
        stage: newDealTargetStage,
        source: "Manual Entry",
        subject: newDealForm.title,
      });

      setShowAddDeal(false);
      setNewDealForm({
        title: "",
        company: "",
        phone: "",
        email: "",
        value: 1200000,
        expectedClose: "2026-11-30",
        stage: "new",
      });
      await loadPipeline();
    } catch (err) {
      console.error("Failed to save new deal to MongoDB:", err);
    }
  };

  const STAGES = [
    { key: "new", title: "New", color: "bg-[#def7ec] text-[#03543f]" },
    { key: "qualified", title: "Qualified", color: "bg-[#bcf0da] text-[#03543f]" },
    { key: "proposal", title: "Proposal", color: "bg-[#6ee7b7] text-[#064e3b]" },
    { key: "negotiation", title: "Negotiation", color: "bg-[#22c55e] text-white" },
    { key: "won", title: "Won", color: "bg-[#15803d] text-white" },
  ];

  return (
    <div className="space-y-4 max-w-[1550px] mx-auto text-gray-900 pb-12 font-sans">
      {/* ─────────────────────────────────────────────────────────────
          1. HEADER WITH ACTIONS & VIEW SWITCHER (MATCHES SCREENSHOT)
      ───────────────────────────────────────────────────────────── */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3">
        <div>
          <h1 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight flex items-center gap-2">
            Deals – Kanban
          </h1>
          <p className="text-xs sm:text-[13px] text-gray-500 font-medium mt-0.5">
            Track and manage your deals across the sales pipeline.
          </p>
        </div>

        {/* Filter Toolbar */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Sales Pipeline Filter */}
          <button className="inline-flex items-center gap-1.5 bg-white border border-gray-200/90 rounded-lg px-3 py-1.5 text-xs font-semibold text-gray-700 shadow-2xs hover:bg-gray-50 cursor-pointer">
            <Filter className="w-3.5 h-3.5 text-gray-500" />
            <span>{pipelineFilter}</span>
            <ChevronDown className="w-3 h-3 text-gray-400" />
          </button>

          {/* All Owners Filter */}
          <button className="inline-flex items-center gap-1.5 bg-white border border-gray-200/90 rounded-lg px-3 py-1.5 text-xs font-semibold text-gray-700 shadow-2xs hover:bg-gray-50 cursor-pointer">
            <User className="w-3.5 h-3.5 text-gray-500" />
            <span>{ownerFilter}</span>
            <ChevronDown className="w-3 h-3 text-gray-400" />
          </button>

          {/* Interactive Calendar Date Range Picker */}
          <CrmDateRangePicker
            fromDate={fromDate}
            toDate={toDate}
            onApply={(f, t) => {
              setFromDate(f);
              setToDate(t);
              loadPipeline(f, t);
            }}
            align="right"
          />

          {/* Kanban / List Toggle */}
          <div className="flex items-center bg-gray-100 p-0.5 rounded-lg border border-gray-200">
            <button
              className="p-1.5 rounded-md bg-[#16a34a] text-white shadow-xs cursor-pointer"
              title="Kanban View"
            >
              <LayoutGrid className="w-3.5 h-3.5" />
            </button>
            <Link
              href="/admin/leads"
              className="p-1.5 rounded-md text-gray-500 hover:text-gray-900 transition-colors"
              title="List View"
            >
              <List className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* More options button */}
          <button
            onClick={() => {
              setNewDealTargetStage("new");
              setShowAddDeal(true);
            }}
            className="p-1.5 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 text-gray-600 cursor-pointer shadow-2xs"
            title="Add Deal"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Dynamic calculations from live MongoDB deals */}
      {(() => {
        const allDeals = Object.values(columns).flatMap((c) => c.leads || []);
        const totalDeals = allDeals.length;
        const totalDealValue = allDeals.reduce((sum, d) => sum + (d.expectedValue || 0), 0);
        const wonDeals = (columns.won?.leads || []).length;
        const wonValue = (columns.won?.leads || []).reduce((sum, d) => sum + (d.expectedValue || 0), 0);
        const openValue = Math.max(0, totalDealValue - wonValue);
        const winRate = totalDeals > 0 ? ((wonDeals / totalDeals) * 100).toFixed(1) + "%" : "0%";

        return (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {/* Metric 1: Total Deals */}
            <div className="bg-white rounded-2xl p-4 border border-gray-200/70 shadow-2xs flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-full bg-[#e8f8ee] flex items-center justify-center text-[#16a34a] shrink-0">
                <Handshake className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xl font-black text-gray-900 leading-none">
                  {totalDeals.toLocaleString()}
                </div>
                <div className="text-[11px] font-semibold text-gray-500 mt-1">Total Deals</div>
              </div>
            </div>

            {/* Metric 2: Total Deal Value */}
            <div className="bg-white rounded-2xl p-4 border border-gray-200/70 shadow-2xs flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-full bg-[#e8f8ee] flex items-center justify-center text-[#16a34a] shrink-0">
                <IndianRupee className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xl font-black text-gray-900 leading-none">
                  {formatINR(totalDealValue)}
                </div>
                <div className="text-[11px] font-semibold text-gray-500 mt-1">Total Deal Value</div>
              </div>
            </div>

            {/* Metric 3: Win Rate */}
            <div className="bg-white rounded-2xl p-4 border border-gray-200/70 shadow-2xs flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-full bg-[#e8f8ee] flex items-center justify-center text-[#16a34a] shrink-0">
                <Target className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xl font-black text-gray-900 leading-none">
                  {winRate}
                </div>
                <div className="text-[11px] font-semibold text-gray-500 mt-1">Win Rate</div>
              </div>
            </div>

            {/* Metric 4: Won Value */}
            <div className="bg-white rounded-2xl p-4 border border-gray-200/70 shadow-2xs flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-full bg-[#e8f8ee] flex items-center justify-center text-[#16a34a] shrink-0">
                <Trophy className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xl font-black text-gray-900 leading-none">
                  {formatINR(wonValue)}
                </div>
                <div className="text-[11px] font-semibold text-gray-500 mt-1">Won Value</div>
              </div>
            </div>

            {/* Metric 5: Open Value */}
            <div className="bg-white rounded-2xl p-4 border border-gray-200/70 shadow-2xs flex items-center gap-3.5 col-span-2 sm:col-span-1">
              <div className="w-10 h-10 rounded-full bg-[#e8f8ee] flex items-center justify-center text-[#16a34a] shrink-0">
                <BarChart2 className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xl font-black text-gray-900 leading-none">
                  {formatINR(openValue)}
                </div>
                <div className="text-[11px] font-semibold text-gray-500 mt-1">Open Value</div>
              </div>
            </div>
          </div>
        );
      })()}

      {/* ─────────────────────────────────────────────────────────────
          3. KANBAN 5-COLUMN BOARD (MATCHES SCREENSHOT)
      ───────────────────────────────────────────────────────────── */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3.5 items-start">
        {STAGES.map((stage) => {
          const colData = columns[stage.key] || {
            title: stage.title,
            dealsCount: "0 Deals",
            totalValueText: "₹ 0",
            leads: [],
          };
          const isDropTarget = dragOverCol === stage.key;

          return (
            <div
              key={stage.key}
              onDragOver={(e) => {
                e.preventDefault();
                e.dataTransfer.dropEffect = "move";
                if (dragOverCol !== stage.key) setDragOverCol(stage.key);
              }}
              onDragLeave={(e) => {
                if (!e.currentTarget.contains(e.relatedTarget)) {
                  setDragOverCol(null);
                }
              }}
              onDrop={(e) => {
                e.preventDefault();
                const leadId = e.dataTransfer.getData("text/plain") || draggedLeadId;
                if (leadId) {
                  handleStageChange(leadId, stage.key);
                }
                setDragOverCol(null);
                setDraggedLeadId(null);
              }}
              className={`bg-white rounded-2xl p-3 border transition-all flex flex-col min-h-[580px] shadow-2xs ${
                isDropTarget
                  ? "border-[#16a34a] ring-2 ring-[#16a34a]/30 bg-emerald-50/20"
                  : "border-gray-200/80"
              }`}
            >
              {/* Column Top Header */}
              <div className="pb-3 px-1 border-b border-gray-100 flex items-center justify-between">
                <div>
                  <h3 className="font-extrabold text-sm text-gray-900 leading-tight">
                    {stage.title}
                  </h3>
                  <div className="text-[11px] text-gray-500 font-medium mt-0.5">
                    {colData.dealsCount} | {colData.totalValueText}
                  </div>
                </div>

                <div className="flex items-center gap-1 text-gray-400">
                  <button
                    onClick={() => {
                      setNewDealTargetStage(stage.key);
                      setShowAddDeal(true);
                    }}
                    className="p-1 rounded-md hover:bg-gray-100 hover:text-gray-700 cursor-pointer"
                    title={`Add Deal to ${stage.title}`}
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                  <button className="p-1 rounded-md hover:bg-gray-100 hover:text-gray-700 cursor-pointer">
                    <MoreVertical className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Deal Cards Container */}
              <div className="flex-1 space-y-2.5 py-3 overflow-y-auto no-scrollbar min-h-[120px]">
                {colData.leads.length === 0 ? (
                  <div className="min-h-[130px] flex flex-col items-center justify-center p-3 border border-dashed border-gray-150 rounded-xl text-center bg-gray-50/50">
                    <p className="text-[11px] text-gray-400 font-medium">No deals in {stage.title}</p>
                    <button
                      onClick={() => {
                        setNewDealTargetStage(stage.key);
                        setShowAddDeal(true);
                      }}
                      className="mt-1.5 text-[11px] font-bold text-[#16a34a] hover:underline inline-flex items-center gap-1 cursor-pointer"
                    >
                      <Plus className="w-3 h-3" /> Add Deal
                    </button>
                  </div>
                ) : (
                  colData.leads.map((deal) => {
                    const isDragging = draggedLeadId === deal._id;

                    return (
                      <div
                        key={deal._id}
                        draggable="true"
                        onDragStart={(e) => {
                          setDraggedLeadId(deal._id);
                          e.dataTransfer.setData("text/plain", deal._id);
                          e.dataTransfer.effectAllowed = "move";
                        }}
                        onDragEnd={() => {
                          setDraggedLeadId(null);
                          setDragOverCol(null);
                        }}
                        onClick={() => {
                          setSelectedLead(deal);
                          setIsDrawerOpen(true);
                        }}
                        className={`bg-white rounded-xl p-3.5 border transition-all cursor-pointer group hover:border-[#16a34a] hover:shadow-md relative ${
                          isDragging
                            ? "opacity-40 scale-95 border-dashed border-[#16a34a]"
                            : "border-gray-200/80 shadow-2xs"
                        }`}
                      >
                      {/* Deal Header */}
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex items-start gap-2 min-w-0">
                          <div className="w-6 h-6 rounded-md bg-[#e8f8ee] flex items-center justify-center text-[#16a34a] shrink-0 mt-0.5">
                            <Building2 className="w-3.5 h-3.5" />
                          </div>
                          <div className="min-w-0">
                            <h4 className="text-xs font-bold text-gray-900 group-hover:text-[#16a34a] transition-colors leading-tight truncate">
                              {deal.fullName}
                            </h4>
                            <p className="text-[10.5px] text-gray-500 font-medium truncate mt-0.5">
                              {deal.company || deal.fullName}
                            </p>
                          </div>
                        </div>

                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedLead(deal);
                            setIsDrawerOpen(true);
                          }}
                          className="text-gray-300 hover:text-gray-600 p-0.5"
                        >
                          <MoreVertical className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {/* Value & Stage Badge */}
                      <div className="mt-3 flex items-center justify-between">
                        <span className="text-xs font-black text-gray-900">
                          {deal.valueFormatted || `₹ ${(deal.expectedValue || 12000).toLocaleString()}`}
                        </span>
                        <span
                          className={`text-[10px] font-bold px-2 py-0.5 rounded-md capitalize ${
                            stage.key === "won"
                              ? "bg-emerald-100 text-[#15803d]"
                              : stage.key === "negotiation"
                              ? "bg-green-100 text-green-800"
                              : stage.key === "proposal"
                              ? "bg-emerald-50 text-[#064e3b]"
                              : "bg-[#def7ec] text-[#03543f]"
                          }`}
                        >
                          {stage.title}
                        </span>
                      </div>

                      {/* Footer: Date & Owner Avatar */}
                      <div className="mt-3 pt-2.5 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-500">
                        <div className="flex items-center gap-1.5 font-medium">
                          <Calendar className="w-3 h-3 text-gray-400" />
                          <span>{deal.expectedClose || "Nov 20, 2026"}</span>
                        </div>

                        {/* Owner Avatar circle */}
                        <div
                          className="w-5 h-5 rounded-full overflow-hidden bg-emerald-100 border border-emerald-300 flex items-center justify-center text-[9px] font-bold text-emerald-900"
                          title={deal.owner || "Amit Mondal"}
                        >
                          <Image
                            src="/image/dr_arjun_mehta.jpg"
                            alt={deal.owner || "Amit Mondal"}
                            width={20}
                            height={20}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.currentTarget.style.display = "none";
                            }}
                          />
                          <span>
                            {(deal.owner || "Amit")
                              .split(" ")
                              .map((n) => n[0])
                              .join("")
                              .substring(0, 2)}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })
              )}
              </div>

              {/* + Add Deal Footer Button */}
              <button
                onClick={() => {
                  setNewDealTargetStage(stage.key);
                  setShowAddDeal(true);
                }}
                className="w-full py-2 border border-dashed border-gray-200 rounded-xl text-xs font-semibold text-gray-500 hover:text-[#16a34a] hover:border-[#16a34a] hover:bg-emerald-50/30 flex items-center justify-center gap-1.5 transition-colors cursor-pointer mt-2"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add Deal</span>
              </button>
            </div>
          );
        })}
      </div>

      {/* ─────────────────────────────────────────────────────────────
          4. COMPREHENSIVE DEAL & LEAD DETAILS DRAWER / MODAL
             (CLICK ANY LEAD OPENS ALL DETAILS WITH DATE & TIME)
      ───────────────────────────────────────────────────────────── */}
      {isDrawerOpen && selectedLead && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex justify-end transition-opacity">
          <div
            className="w-full max-w-2xl bg-white h-full shadow-2xl flex flex-col justify-between overflow-y-auto animate-in slide-in-from-right duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Drawer Top Header */}
            <div className="p-5 border-b border-gray-100 flex items-start justify-between bg-[#fafbfc] sticky top-0 z-20">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#e8f8ee] flex items-center justify-center text-[#16a34a] shrink-0 mt-0.5">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-lg font-black text-gray-900 leading-tight">
                    {selectedLead.fullName}
                  </h2>
                  <p className="text-xs font-semibold text-gray-500 mt-0.5">
                    {selectedLead.company || selectedLead.subject} • Created on{" "}
                    {new Date(selectedLead.createdAt || Date.now()).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsDrawerOpen(false)}
                className="p-1.5 rounded-lg text-gray-400 hover:text-gray-700 hover:bg-gray-100 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Drawer Body */}
            <div className="p-5 space-y-6 flex-1">
              {/* 1. Deal Value & Pipeline Stage Switcher */}
              <div className="bg-[#f8faf9] p-4 rounded-2xl border border-gray-200/70">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-wide">
                    Deal Value
                  </span>
                  <span className="text-lg font-black text-gray-900">
                    {selectedLead.valueFormatted ||
                      `₹ ${(selectedLead.expectedValue || 12000).toLocaleString()}`}
                  </span>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1.5">
                    Pipeline Stage (Click to update):
                  </label>
                  <div className="grid grid-cols-5 gap-1.5">
                    {STAGES.map((s) => {
                      const isCurrent = selectedLead.status === s.key;
                      return (
                        <button
                          key={s.key}
                          type="button"
                          onClick={() => handleStageChange(selectedLead._id, s.key)}
                          className={`py-1.5 px-1 rounded-lg text-xs font-bold text-center transition-all cursor-pointer ${
                            isCurrent
                              ? "bg-[#16a34a] text-white shadow-sm ring-2 ring-[#16a34a]/30"
                              : "bg-white border border-gray-200 text-gray-600 hover:border-emerald-300 hover:text-emerald-700"
                          }`}
                        >
                          {s.title}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* 2. Direct Call, Email & Communication Shortcuts */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {/* Phone Call */}
                <a
                  href={`tel:${(selectedLead.phone || "").replace(/\s+/g, "")}`}
                  className="flex flex-col items-center justify-center p-3 rounded-xl bg-gray-50 hover:bg-emerald-50 hover:text-[#16a34a] border border-gray-200 transition-colors text-center group cursor-pointer"
                >
                  <Phone className="w-4 h-4 text-emerald-600 mb-1" />
                  <span className="text-xs font-bold text-gray-800 group-hover:text-[#16a34a]">
                    Call Client
                  </span>
                  <span className="text-[10px] text-gray-500 truncate max-w-full">
                    {selectedLead.phone || "No phone"}
                  </span>
                </a>

                {/* Email Client */}
                <a
                  href={`mailto:${selectedLead.email || ""}`}
                  className="flex flex-col items-center justify-center p-3 rounded-xl bg-gray-50 hover:bg-emerald-50 hover:text-[#16a34a] border border-gray-200 transition-colors text-center group cursor-pointer"
                >
                  <Mail className="w-4 h-4 text-emerald-600 mb-1" />
                  <span className="text-xs font-bold text-gray-800 group-hover:text-[#16a34a]">
                    Send Email
                  </span>
                  <span className="text-[10px] text-gray-500 truncate max-w-full">
                    {selectedLead.email || "No email"}
                  </span>
                </a>

                {/* WhatsApp */}
                <a
                  href={`https://wa.me/${(selectedLead.phone || "").replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                    `Hello ${selectedLead.fullName}, regarding your project inquiry with DietNexa CRM.`
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-col items-center justify-center p-3 rounded-xl bg-gray-50 hover:bg-emerald-50 hover:text-[#16a34a] border border-gray-200 transition-colors text-center group cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600 mb-1" />
                  <span className="text-xs font-bold text-gray-800 group-hover:text-[#16a34a]">
                    WhatsApp
                  </span>
                  <span className="text-[10px] text-gray-500">Quick Chat</span>
                </a>

                {/* Schedule Activity */}
                <button
                  type="button"
                  onClick={() => setShowFollowUpForm(!showFollowUpForm)}
                  className="flex flex-col items-center justify-center p-3 rounded-xl bg-gray-50 hover:bg-emerald-50 hover:text-[#16a34a] border border-gray-200 transition-colors text-center group cursor-pointer"
                >
                  <CalendarClock className="w-4 h-4 text-emerald-600 mb-1" />
                  <span className="text-xs font-bold text-gray-800 group-hover:text-[#16a34a]">
                    Schedule
                  </span>
                  <span className="text-[10px] text-gray-500">Set Date/Time</span>
                </button>
              </div>

              {/* Schedule Follow-up Form Popup */}
              {showFollowUpForm && (
                <form
                  onSubmit={handleScheduleFollowUp}
                  className="p-3.5 bg-amber-50/70 border border-amber-200 rounded-xl space-y-2.5 animate-in fade-in-50"
                >
                  <div className="font-bold text-xs text-amber-900 flex items-center gap-1.5">
                    <CalendarClock className="w-3.5 h-3.5 text-amber-700" />
                    <span>Set Follow-up Date & Time</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="datetime-local"
                      required
                      value={followUpDate}
                      onChange={(e) => setFollowUpDate(e.target.value)}
                      className="px-2.5 py-1.5 bg-white border border-amber-200 rounded-lg text-xs"
                    />
                    <input
                      type="text"
                      placeholder="Follow-up agenda/notes"
                      value={followUpNotes}
                      onChange={(e) => setFollowUpNotes(e.target.value)}
                      className="px-2.5 py-1.5 bg-white border border-amber-200 rounded-lg text-xs"
                    />
                  </div>
                  <div className="flex justify-end gap-2">
                    <button
                      type="button"
                      onClick={() => setShowFollowUpForm(false)}
                      className="px-2.5 py-1 text-xs text-gray-600"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-3 py-1 bg-amber-700 text-white rounded-lg text-xs font-bold shadow-xs"
                    >
                      Save Follow-up
                    </button>
                  </div>
                </form>
              )}

              {/* 3. Log Call / Email Modal */}
              <div className="flex items-center justify-between pt-1">
                <span className="text-xs font-bold text-gray-700">Communication Logs</span>
                <button
                  type="button"
                  onClick={() => setShowLogForm(!showLogForm)}
                  className="text-xs font-bold text-[#16a34a] hover:underline flex items-center gap-1"
                >
                  <Plus className="w-3 h-3" />
                  <span>Log Call / Email</span>
                </button>
              </div>

              {showLogForm && (
                <form
                  onSubmit={handleLogInteraction}
                  className="p-3.5 bg-gray-50 border border-gray-200 rounded-xl space-y-2.5 animate-in fade-in-50"
                >
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <label className="block text-[11px] font-semibold text-gray-600 mb-1">
                        Channel
                      </label>
                      <select
                        value={logChannel}
                        onChange={(e) => setLogChannel(e.target.value)}
                        className="w-full px-2.5 py-1.5 bg-white border border-gray-200 rounded-lg"
                      >
                        <option value="phone">📞 Phone Call</option>
                        <option value="email">✉️ Email Message</option>
                        <option value="whatsapp">💬 WhatsApp</option>
                        <option value="meeting">👥 Meeting / Demo</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-gray-600 mb-1">
                        Outcome
                      </label>
                      <select
                        value={logOutcome}
                        onChange={(e) => setLogOutcome(e.target.value)}
                        className="w-full px-2.5 py-1.5 bg-white border border-gray-200 rounded-lg"
                      >
                        <option value="connected_interested">Connected & Interested</option>
                        <option value="proposal_requested">Proposal Requested</option>
                        <option value="left_voicemail">Left Voicemail / No Answer</option>
                        <option value="meeting_scheduled">Meeting Scheduled</option>
                        <option value="closed_won">Deal Agreed</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-gray-600 mb-1">
                      Call / Email Remarks
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Discussed pricing tiers and agreed on delivery timeline."
                      value={logNotes}
                      onChange={(e) => setLogNotes(e.target.value)}
                      className="w-full px-2.5 py-1.5 bg-white border border-gray-200 rounded-lg text-xs"
                    />
                  </div>

                  <div className="flex justify-end gap-2 pt-1">
                    <button
                      type="button"
                      onClick={() => setShowLogForm(false)}
                      className="px-2.5 py-1 text-xs text-gray-600"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-3 py-1 bg-[#16a34a] text-white rounded-lg text-xs font-bold shadow-xs"
                    >
                      Save Log
                    </button>
                  </div>
                </form>
              )}

              {/* 4. Add Remarks with Exact Date & Time Form */}
              <div className="space-y-2">
                <label className="block text-xs font-bold text-gray-800">
                  Add Remarks / Note (Stored with Date & Time):
                </label>
                <form onSubmit={handleAddRemark} className="flex gap-2">
                  <input
                    type="text"
                    required
                    placeholder="Enter remark (e.g. Sent revised quote after tech sync)..."
                    value={newRemark}
                    onChange={(e) => setNewRemark(e.target.value)}
                    className="flex-1 px-3 py-2 text-xs border border-gray-200 rounded-xl focus:outline-none focus:border-[#16a34a] bg-white"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-[#16a34a] hover:bg-[#15803d] text-white text-xs font-bold rounded-xl shadow-xs transition-colors flex items-center gap-1.5 shrink-0 cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Save Remark</span>
                  </button>
                </form>
              </div>

              {/* 5. Complete Activity, Calls, and Remarks Timeline */}
              <div className="space-y-3 pt-2">
                <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wider flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-gray-500" />
                  <span>Activity & Remarks Timeline (With Date & Time)</span>
                </h3>

                <div className="space-y-2.5 max-h-80 overflow-y-auto pr-1">
                  {/* Call Logs */}
                  {(selectedLead.callLogs || []).map((log) => (
                    <div
                      key={log._id}
                      className="p-3 bg-emerald-50/50 border border-emerald-100 rounded-xl flex items-start gap-2.5 text-xs"
                    >
                      <div className="w-6 h-6 rounded-full bg-emerald-100 text-[#16a34a] flex items-center justify-center shrink-0 mt-0.5">
                        {log.channel === "phone" ? (
                          <Phone className="w-3 h-3" />
                        ) : (
                          <Mail className="w-3 h-3" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <span className="font-bold text-emerald-950 capitalize">
                            {log.channel}: {log.outcome?.replace(/_/g, " ")}
                          </span>
                          <span className="text-[10.5px] text-gray-500 font-medium">
                            {new Date(log.contactedAt || Date.now()).toLocaleDateString("en-US", {
                              month: "short",
                              day: "numeric",
                            })}{" "}
                            at{" "}
                            {new Date(log.contactedAt || Date.now()).toLocaleTimeString("en-US", {
                              hour: "2-digit",
                              minute: "2-digit",
                            })}
                          </span>
                        </div>
                        <p className="text-gray-700 mt-0.5">{log.notes}</p>
                        <span className="text-[10px] text-gray-400 mt-1 block">
                          Logged by: {log.contactedByName || "Staff"}
                        </span>
                      </div>
                    </div>
                  ))}

                  {/* Remarks & Notes */}
                  {(selectedLead.notes || []).map((note) => (
                    <div
                      key={note._id}
                      className="p-3 bg-gray-50 border border-gray-100 rounded-xl flex items-start gap-2.5 text-xs"
                    >
                      <div className="w-6 h-6 rounded-full bg-gray-200 text-gray-700 flex items-center justify-center shrink-0 mt-0.5">
                        <Tag className="w-3 h-3" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <span className="font-bold text-gray-900">
                            Remark by {note.authorName || "Staff"}
                          </span>
                          <span className="text-[10.5px] text-gray-500 font-medium">
                            {new Date(note.createdAt || Date.now()).toLocaleDateString("en-US", {
                              month: "short",
                              day: "numeric",
                            })}{" "}
                            at{" "}
                            {new Date(note.createdAt || Date.now()).toLocaleTimeString("en-US", {
                              hour: "2-digit",
                              minute: "2-digit",
                            })}
                          </span>
                        </div>
                        <p className="text-gray-700 mt-0.5">{note.text}</p>
                      </div>
                    </div>
                  ))}

                  {(!selectedLead.notes || selectedLead.notes.length === 0) &&
                    (!selectedLead.callLogs || selectedLead.callLogs.length === 0) && (
                      <div className="text-center py-6 text-xs text-gray-400 italic">
                        No previous remarks recorded yet. Add your first remark above!
                      </div>
                    )}
                </div>
              </div>
            </div>

            {/* Drawer Bottom Actions */}
            <div className="p-4 border-t border-gray-100 bg-gray-50 flex items-center justify-between sticky bottom-0">
              <button
                type="button"
                onClick={async () => {
                  if (confirm("Delete this lead record permanently?")) {
                    await deleteLeadApi(selectedLead._id);
                    setIsDrawerOpen(false);
                    loadPipeline();
                  }
                }}
                className="text-xs font-bold text-rose-600 hover:text-rose-800 flex items-center gap-1 cursor-pointer"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Delete Lead</span>
              </button>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setIsDrawerOpen(false)}
                  className="px-4 py-2 bg-white border border-gray-200 rounded-xl text-xs font-bold text-gray-700 hover:bg-gray-100 cursor-pointer"
                >
                  Close
                </button>
                <button
                  type="button"
                  onClick={async () => {
                    await handleStageChange(selectedLead._id, "won");
                    alert("Lead converted to Won client!");
                    setIsDrawerOpen(false);
                  }}
                  className="px-4 py-2 bg-[#16a34a] hover:bg-[#15803d] text-white rounded-xl text-xs font-bold shadow-xs cursor-pointer"
                >
                  Convert to Won
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────
          5. QUICK ADD NEW DEAL MODAL
      ───────────────────────────────────────────────────────────── */}
      {showAddDeal && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-gray-100 animate-in fade-in-50">
            <div className="flex items-center justify-between pb-3.5 border-b border-gray-100">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 text-[#16a34a] flex items-center justify-center">
                  <Plus className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-gray-900 text-sm">
                  Add Deal to {newDealTargetStage.toUpperCase()}
                </h3>
              </div>
              <button
                onClick={() => setShowAddDeal(false)}
                className="p-1 rounded-lg text-gray-400 hover:text-gray-700"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleCreateNewDeal} className="space-y-3 pt-3">
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">
                  Deal Title / Project Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Apex Health – Diet App"
                  value={newDealForm.title}
                  onChange={(e) => setNewDealForm({ ...newDealForm, title: e.target.value })}
                  className="w-full px-3 py-2 text-xs border border-gray-200 rounded-lg focus:outline-none focus:border-[#16a34a]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">
                  Company / Organization
                </label>
                <input
                  type="text"
                  placeholder="e.g. Apex Health Ltd."
                  value={newDealForm.company}
                  onChange={(e) => setNewDealForm({ ...newDealForm, company: e.target.value })}
                  className="w-full px-3 py-2 text-xs border border-gray-200 rounded-lg focus:outline-none focus:border-[#16a34a]"
                />
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    Value (₹) *
                  </label>
                  <input
                    type="number"
                    required
                    value={newDealForm.value}
                    onChange={(e) => setNewDealForm({ ...newDealForm, value: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-gray-200 rounded-lg focus:outline-none focus:border-[#16a34a]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    Expected Close
                  </label>
                  <input
                    type="date"
                    value={newDealForm.expectedClose}
                    onChange={(e) =>
                      setNewDealForm({ ...newDealForm, expectedClose: e.target.value })
                    }
                    className="w-full px-3 py-2 text-xs border border-gray-200 rounded-lg focus:outline-none focus:border-[#16a34a]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Phone</label>
                  <input
                    type="tel"
                    placeholder="+91 98765 00000"
                    value={newDealForm.phone}
                    onChange={(e) => setNewDealForm({ ...newDealForm, phone: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-gray-200 rounded-lg focus:outline-none focus:border-[#16a34a]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    placeholder="contact@company.com"
                    value={newDealForm.email}
                    onChange={(e) => setNewDealForm({ ...newDealForm, email: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-gray-200 rounded-lg focus:outline-none focus:border-[#16a34a]"
                  />
                </div>
              </div>

              <div className="flex items-center justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowAddDeal(false)}
                  className="px-3.5 py-1.5 text-xs font-semibold text-gray-600 hover:bg-gray-100 rounded-lg"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-1.5 text-xs font-bold bg-[#16a34a] hover:bg-[#15803d] text-white rounded-lg shadow-xs"
                >
                  Create Deal
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
