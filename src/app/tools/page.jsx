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

      {/* 2. HERO SECTION */}
      <section
        className="relative overflow-hidden text-white pt-14 pb-16 md:pt-20 md:pb-24"
        style={{
          background:
            "linear-gradient(135deg, #07361e 0%, #0d5c32 50%, #10793f 100%)",
        }}
      >
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 40%, #ffffff 1px, transparent 1px), radial-gradient(circle at 80% 80%, #ffffff 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-emerald-200 text-xs font-semibold mb-5 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-emerald-300" />
              <span>100 Free Scientific Nutrition & Diet Calculators</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-[1.15] mb-4">
              Scientific Nutrition Tools &{" "}
              <span className="text-emerald-300">Clinical Calculators</span>
            </h1>

            <p className="text-emerald-100/90 text-sm sm:text-base md:text-lg leading-relaxed mb-8 max-w-2xl font-normal">
              Evidence-based clinical formulas trusted by certified dietitians.
              Calculate your BMI, body fat, caloric expenditure, macros,
              hydration, and meal portions with clinical precision.
            </p>

            {/* Quick Metrics */}
            <div className="flex flex-wrap gap-5 text-xs sm:text-sm text-emerald-100/90">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-300 shrink-0" />
                <span>100 Dedicated Calculator Pages</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-300 shrink-0" />
                <span>10 Clinical Categories</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-300 shrink-0" />
                <span>WHO & ICMR Certified Formulas</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-300 shrink-0" />
                <span>100% Free & Instant</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. STICKY FILTER & SEARCH BAR */}
      <div className="sticky top-[68px] sm:top-[76px] z-30 bg-white/95 backdrop-blur-md border-b border-gray-200/80 shadow-xs">
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
                        {/* Top Row: Tool Number & Category Pill */}
                        <div className="flex items-center justify-between gap-2 mb-2.5">
                          <span
                            className="text-[11px] font-black px-2 py-0.5 rounded-md"
                            style={{
                              background: cat.themeBg,
                              color: cat.themeColor,
                            }}
                          >
                            #{tool.id}
                          </span>
                          <span className="text-[10px] font-medium text-gray-400 truncate max-w-[140px]">
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
                className="px-6 py-3 rounded-full bg-white text-[#10793f] text-xs sm:text-sm font-bold hover:bg-emerald-50 transition-all shadow-md active:scale-95"
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
