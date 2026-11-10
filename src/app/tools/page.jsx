"use client";

import { useState, useRef, useMemo } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ConsultationModal from "@/components/ConsultationModal";
import { categories, getAllTools } from "@/lib/toolsData";
import {
  Scale,
  Flame,
  Beef,
  Droplets,
  UtensilsCrossed,
  TrendingDown,
  Apple,
  Baby,
  Stethoscope,
  GraduationCap,
  Calculator,
  Search,
  X,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  ChevronRight,
  ShieldCheck,
  Activity,
  Award,
  Zap,
} from "lucide-react";

// Icon mapping
const ICON_MAP = {
  Scale,
  Flame,
  Beef,
  Droplets,
  UtensilsCrossed,
  TrendingDown,
  Apple,
  Baby,
  Stethoscope,
  GraduationCap,
};

export default function ToolsListingPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState("consultation");
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const sectionRefs = useRef({});

  const allTools = useMemo(() => getAllTools(), []);

  const handleOpenModal = (type = "consultation") => {
    setModalType(type);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const scrollToTools = () => {
    const el = document.getElementById("tools-directory");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const filteredCategories = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    return categories
      .map((cat) => {
        const catTools = allTools.filter((t) => t.category === cat.id);
        const filtered = q
          ? catTools.filter(
              (t) =>
                t.name.toLowerCase().includes(q) ||
                t.shortDesc.toLowerCase().includes(q) ||
                t.calculation.toLowerCase().includes(q)
            )
          : catTools;
        return {
          ...cat,
          tools: filtered,
        };
      })
      .filter((cat) => {
        if (activeCategory !== "all" && cat.id !== activeCategory) return false;
        return cat.tools.length > 0;
      });
  }, [allTools, searchQuery, activeCategory]);

  const totalFilteredCount = useMemo(() => {
    return filteredCategories.reduce((sum, c) => sum + c.tools.length, 0);
  }, [filteredCategories]);

  return (
    <div className="min-h-screen bg-[#f9fafb] text-gray-900 flex flex-col font-sans">
      {/* 1. NAVBAR */}
      <Navbar onOpenModal={handleOpenModal} />

      {/* 2. PROFESSIONAL REDESIGNED HERO SECTION */}
      <section
        className="relative overflow-hidden border-b border-emerald-100/60"
        style={{
          background:
            "linear-gradient(115deg, #f2faf4 0%, #f7fcf9 40%, #edf8f1 75%, #e6f5eb 100%)",
        }}
      >
        {/* Subtle decorative glow effects */}
        <div
          className="absolute -top-24 right-1/4 w-[480px] h-[480px] rounded-full pointer-events-none blur-3xl opacity-40 z-0"
          style={{
            background:
              "radial-gradient(circle, #bbf7d0 0%, #86efac 40%, transparent 70%)",
          }}
        />
        <div
          className="absolute -bottom-20 left-10 w-[360px] h-[360px] rounded-full pointer-events-none blur-3xl opacity-30 z-0"
          style={{
            background:
              "radial-gradient(circle, #a7f3d0 0%, #6ee7b7 40%, transparent 70%)",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-14 md:pt-16 md:pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* ── LEFT COLUMN: Text & Actions ── */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              {/* Premium Pill Badge with Live Pulse */}
              <div
                className="inline-flex items-center gap-2.5 mb-5 px-3.5 py-1.5 rounded-full border transition-all duration-300 shadow-2xs cursor-default"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(240,253,244,0.95) 100%)",
                  borderColor: "rgba(16,121,63,0.22)",
                  boxShadow:
                    "0 4px 18px -2px rgba(16,121,63,0.12), 0 1px 3px rgba(0,0,0,0.04)",
                  backdropFilter: "blur(10px)",
                }}
              >
                {/* Pulsing Beacon */}
                <span className="relative flex h-2.5 w-2.5 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#10793f]"></span>
                </span>

                <Sparkles className="w-3.5 h-3.5 text-[#10793f] shrink-0" />

                <span className="text-xs sm:text-[13px] font-bold text-gray-800 tracking-tight">
                  100 Evidence-Based Nutrition Calculators
                </span>

                <span
                  className="hidden sm:inline-flex items-center text-[10.5px] font-bold text-[#10793f] px-2 py-0.5 rounded-full border"
                  style={{
                    background: "rgba(16,121,63,0.08)",
                    borderColor: "rgba(16,121,63,0.18)",
                  }}
                >
                  Clinical Grade
                </span>
              </div>

              {/* Bold Headline */}
              <h1 className="font-extrabold text-gray-900 tracking-tight text-3xl sm:text-4xl lg:text-5xl leading-[1.12] mb-4">
                Scientific Nutrition Tools &{" "}
                <span className="block mt-1 bg-gradient-to-r from-[#10793f] via-[#15803d] to-[#16a34a] bg-clip-text text-transparent">
                  Dietary Calculators
                </span>
              </h1>

              {/* Sub-headline */}
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-7 max-w-xl font-normal">
                Formulated using peer-reviewed WHO, ICMR, and ADA clinical equations.
                Accurately assess your body composition, energy expenditure (BMR & TDEE),
                macronutrient targets, hydration status, and clinical dietary needs.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 mb-8 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={scrollToTools}
                  className="px-6 py-3.5 rounded-full text-white text-xs sm:text-sm font-bold transition-all hover:opacity-95 active:scale-95 shadow-md flex items-center justify-center gap-2 cursor-pointer"
                  style={{
                    background: "#10793f",
                    boxShadow: "0 4px 16px rgba(16,121,63,0.3)",
                  }}
                >
                  <Calculator className="w-4 h-4" />
                  <span>Browse All 100 Calculators</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleOpenModal("consultation")}
                  className="px-5 py-3.5 rounded-full text-gray-700 hover:text-[#10793f] text-xs sm:text-sm font-bold bg-white/90 hover:bg-white border border-gray-200 hover:border-[#10793f]/40 transition-all shadow-2xs active:scale-95 cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <span>Consult Expert Dietitian</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#10793f]" />
                </button>
              </div>

              {/* Trust Badges Row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-emerald-200/50 w-full text-left">
                <div>
                  <div className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight">
                    100
                  </div>
                  <div className="text-[11px] font-semibold text-gray-500 mt-0.5">
                    Dedicated Tools
                  </div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight">
                    10
                  </div>
                  <div className="text-[11px] font-semibold text-gray-500 mt-0.5">
                    Clinical Disciplines
                  </div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-black text-[#10793f] tracking-tight">
                    100%
                  </div>
                  <div className="text-[11px] font-semibold text-gray-500 mt-0.5">
                    Free & Instant
                  </div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight">
                    Zero
                  </div>
                  <div className="text-[11px] font-semibold text-gray-500 mt-0.5">
                    Signup Required
                  </div>
                </div>
              </div>
            </div>

            {/* ── RIGHT COLUMN: Visual Live Showcase Card ── */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Floating Top Trust Badge */}
                <div
                  className="absolute -top-3.5 -right-2 sm:right-4 z-20 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-emerald-200 shadow-md flex items-center gap-2 text-xs font-bold text-gray-800"
                >
                  <ShieldCheck className="w-4 h-4 text-[#10793f]" />
                  <span>WHO / ICMR Equations</span>
                </div>

                {/* Main Card */}
                <div className="bg-white/90 backdrop-blur-md rounded-3xl border border-emerald-200/80 p-6 sm:p-7 shadow-xl shadow-emerald-950/5 relative">
                  {/* Card Header */}
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-gray-100">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-xl bg-[#edf8f1] flex items-center justify-center">
                        <Activity className="w-5 h-5 text-[#10793f]" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-gray-900">
                          Clinical Nutrition Suite
                        </div>
                        <div className="text-[10px] text-gray-400">
                          Real-time Physiological Metrics
                        </div>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold bg-[#edf8f1] text-[#10793f]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#10793f] animate-pulse"></span>
                      Active Engine
                    </span>
                  </div>

                  {/* 4 Representative Metric Cards */}
                  <div className="space-y-2.5">
                    {/* 1. BMI Metric */}
                    <div className="p-3 rounded-2xl bg-gray-50/80 border border-gray-100 flex items-center justify-between hover:bg-emerald-50/40 transition-colors">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-lg bg-emerald-100 text-[#10793f] flex items-center justify-center shrink-0">
                          <Scale className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-gray-800">
                            Body Mass Index (BMI)
                          </div>
                          <div className="text-[10px] text-gray-500">
                            WHO Anthropometry
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-black text-gray-900">
                          22.4 <span className="text-[10px] font-medium text-gray-500">kg/m²</span>
                        </div>
                        <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-1.5 py-0.2 rounded-md">
                          Normal Weight
                        </span>
                      </div>
                    </div>

                    {/* 2. TDEE Metric */}
                    <div className="p-3 rounded-2xl bg-gray-50/80 border border-gray-100 flex items-center justify-between hover:bg-emerald-50/40 transition-colors">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                          <Flame className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-gray-800">
                            Total Daily Energy (TDEE)
                          </div>
                          <div className="text-[10px] text-gray-500">
                            Mifflin-St Jeor
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-black text-gray-900">
                          2,150 <span className="text-[10px] font-medium text-gray-500">kcal</span>
                        </div>
                        <span className="text-[10px] font-bold text-amber-800 bg-amber-100 px-1.5 py-0.2 rounded-md">
                          Maintenance
                        </span>
                      </div>
                    </div>

                    {/* 3. Protein Requirement */}
                    <div className="p-3 rounded-2xl bg-gray-50/80 border border-gray-100 flex items-center justify-between hover:bg-emerald-50/40 transition-colors">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center shrink-0">
                          <Beef className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-gray-800">
                            Target Daily Protein
                          </div>
                          <div className="text-[10px] text-gray-500">
                            Lean Mass Sparing
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-black text-gray-900">
                          105 <span className="text-[10px] font-medium text-gray-500">g/day</span>
                        </div>
                        <span className="text-[10px] font-bold text-purple-800 bg-purple-100 px-1.5 py-0.2 rounded-md">
                          1.5 g/kg
                        </span>
                      </div>
                    </div>

                    {/* 4. Hydration Target */}
                    <div className="p-3 rounded-2xl bg-gray-50/80 border border-gray-100 flex items-center justify-between hover:bg-emerald-50/40 transition-colors">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center shrink-0">
                          <Droplets className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-gray-800">
                            Hydration Requirement
                          </div>
                          <div className="text-[10px] text-gray-500">
                            Weight & Climate
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-black text-gray-900">
                          2.8 <span className="text-[10px] font-medium text-gray-500">Liters</span>
                        </div>
                        <span className="text-[10px] font-bold text-sky-800 bg-sky-100 px-1.5 py-0.2 rounded-md">
                          Optimal
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Endorsement Footer inside Card */}
                  <div className="mt-4 pt-3.5 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                    <span className="flex items-center gap-1.5 text-[11px] font-semibold text-gray-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#10793f]" />
                      Inline Interactive UI
                    </span>
                    <span className="text-[11px] font-bold text-[#10793f]">
                      100 Dedicated Pages
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. STICKY FILTER & SEARCH BAR */}
      <div
        id="tools-directory"
        className="sticky top-[68px] sm:top-[76px] z-30 bg-white/95 backdrop-blur-md border-b border-gray-200/80 shadow-xs"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search across 100 nutrition calculators..."
                className="w-full pl-10 pr-9 py-2 text-sm border border-gray-200 rounded-xl bg-gray-50/80 focus:bg-white focus:outline-hidden focus:border-[#10793f] focus:ring-2 focus:ring-[#10793f]/10 transition-all placeholder:text-gray-400"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 p-0.5 rounded-full"
                  aria-label="Clear search"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Results Counter */}
            <div className="text-xs font-semibold text-gray-500 whitespace-nowrap">
              Showing{" "}
              <span className="text-[#10793f] font-bold">
                {totalFilteredCount}
              </span>{" "}
              of 100 tools
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex gap-1.5 overflow-x-auto scrollbar-none pt-2.5 pb-0.5">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                activeCategory === "all"
                  ? "bg-[#10793f] text-white shadow-xs"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200/80 hover:text-gray-900"
              }`}
            >
              All Tools (100)
            </button>
            {categories.map((cat) => {
              const IconComponent = ICON_MAP[cat.icon] || Calculator;
              const isActive = activeCategory === cat.id;
              const count = allTools.filter((t) => t.category === cat.id).length;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                    isActive
                      ? "bg-[#10793f] text-white shadow-xs"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200/80 hover:text-gray-900"
                  }`}
                >
                  <IconComponent className="w-3.5 h-3.5" />
                  <span>{cat.name}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                      isActive
                        ? "bg-white/20 text-white"
                        : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* 4. MAIN CONTENT — 100 TOOLS GRID */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex-1 w-full space-y-12">
        {filteredCategories.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-gray-200/80 p-8">
            <Calculator className="w-12 h-12 text-gray-300 mx-auto mb-3" />
            <h3 className="text-base font-bold text-gray-800">
              No matching tools found
            </h3>
            <p className="text-xs text-gray-500 mt-1 max-w-sm mx-auto">
              We couldn&apos;t find any calculator matching &quot;{searchQuery}&quot;.
              Try searching with another keyword like &quot;calories&quot;, &quot;protein&quot;, or &quot;BMI&quot;.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("all");
              }}
              className="mt-4 px-4 py-2 rounded-xl text-xs font-bold text-white bg-[#10793f] hover:bg-[#0d6333] transition-colors"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          filteredCategories.map((cat) => {
            const IconComponent = ICON_MAP[cat.icon] || Calculator;
            return (
              <section
                key={cat.id}
                ref={(el) => {
                  sectionRefs.current[cat.id] = el;
                }}
                id={`cat-${cat.id}`}
                className="scroll-mt-36"
              >
                {/* Category Header */}
                <div className="flex items-start sm:items-center justify-between gap-4 pb-4 mb-5 border-b border-gray-200/80">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 shadow-xs"
                      style={{ background: cat.themeBg }}
                    >
                      <IconComponent
                        className="w-5 h-5"
                        style={{ color: cat.themeColor }}
                      />
                    </div>
                    <div>
                      <h2 className="text-lg sm:text-xl font-black text-gray-900 tracking-tight">
                        {cat.name}
                      </h2>
                      <p className="text-xs text-gray-500 mt-0.5 line-clamp-1">
                        {cat.short}
                      </p>
                    </div>
                  </div>
                  <div className="text-xs font-bold text-gray-400 bg-gray-100 px-2.5 py-1 rounded-full whitespace-nowrap">
                    {cat.tools.length} Tools
                  </div>
                </div>

                {/* Tools Grid (2 to 4 cols) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {cat.tools.map((tool) => (
                    <Link
                      key={tool.slug}
                      href={`/tools/${tool.slug}`}
                      className="group relative bg-white rounded-2xl border border-gray-200/80 p-4 hover:border-[#10793f] hover:shadow-md transition-all duration-200 flex flex-col justify-between"
                    >
                      <div>
                        {/* Top Row: Calculation & Status Pill */}
                        <div className="flex items-center justify-between gap-2 mb-2.5">
                          <span
                            className="text-[11px] font-semibold px-2 py-0.5 rounded-md truncate max-w-[170px]"
                            style={{
                              background: cat.themeBg,
                              color: cat.themeColor,
                            }}
                          >
                            {cat.name}
                          </span>
                          <span className="text-[10px] font-medium text-gray-400 truncate max-w-[130px]">
                            {tool.calculation}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="text-sm font-bold text-gray-900 group-hover:text-[#10793f] transition-colors line-clamp-1 mb-1">
                          {tool.name}
                        </h3>

                        {/* Description */}
                        <p className="text-xs text-gray-500 leading-relaxed line-clamp-2 mb-3">
                          {tool.shortDesc}
                        </p>
                      </div>

                      {/* Bottom Action: Calculate Now */}
                      <div className="pt-2 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-[#10793f] group-hover:translate-x-0.5 transition-transform">
                        <span>Open Calculator</span>
                        <ChevronRight className="w-4 h-4 text-[#10793f]" />
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            );
          })
        )}

        {/* 5. CONSULTATION CALL TO ACTION */}
        <section
          className="rounded-3xl p-8 sm:p-10 md:p-12 text-white relative overflow-hidden shadow-lg"
          style={{
            background:
              "linear-gradient(135deg, #07361e 0%, #0d5c32 60%, #10793f 100%)",
          }}
        >
          <div className="max-w-2xl relative z-10">
            <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-emerald-200 text-xs font-semibold mb-3 border border-white/20">
              Personalized Clinical Nutrition
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-3">
              Need a Customized Diet Plan Based on Your Numbers?
            </h2>
            <p className="text-emerald-100 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
              Calculators give you the baseline, but sustained health requires
              personalized meal charts, metabolic tracking, and one-on-one
              dietitian guidance. Consult DietNexa certified nutritionists today.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => handleOpenModal("consultation")}
                className="px-6 py-3 rounded-full bg-white text-[#10793f] text-xs sm:text-sm font-bold hover:bg-emerald-50 transition-all shadow-md active:scale-95 cursor-pointer"
              >
                Book Free Dietitian Consultation
              </button>
              <Link
                href="/dietitians"
                className="px-5 py-3 rounded-full border border-white/30 text-white text-xs sm:text-sm font-semibold hover:bg-white/10 transition-colors"
              >
                Explore Certified Dietitians
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* 6. FOOTER */}
      <Footer />

      {/* 7. CONSULTATION MODAL */}
      <ConsultationModal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        initialType={modalType}
      />
    </div>
  );
}
