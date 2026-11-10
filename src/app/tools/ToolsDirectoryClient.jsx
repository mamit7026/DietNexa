"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
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
  TrendingUp,
  Apple,
  Baby,
  Stethoscope,
  GraduationCap,
  Calculator,
  Search,
  X,
  ArrowRight,
  ShieldCheck,
  Activity,
  Zap,
  Percent,
  Calendar,
  Clock,
  Layers,
  Users,
  Sprout,
  Heart,
  BookOpen,
  PieChart,
  FileText,
  Target,
  Trophy,
  Dumbbell,
  BarChart3,
  CheckSquare,
  Leaf,
  Droplet,
  Sparkles,
} from "lucide-react";

// Category Icons Mapping
const CATEGORY_ICONS = {
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

// Map individual tools to specific icons matching the screenshot style
function getToolIcon(toolName, catId) {
  const name = toolName.toLowerCase();
  if (name.includes("bmi") || name.includes("calculator")) return Calculator;
  if (name.includes("ideal") || name.includes("weight range") || name.includes("portion")) return Scale;
  if (name.includes("fat") && name.includes("%")) return Percent;
  if (name.includes("fat mass") || name.includes("waist") || name.includes("ratio")) return Activity;
  if (name.includes("bmr") || name.includes("pulse") || name.includes("glycemic") || name.includes("diabetes") || name.includes("thyroid")) return Activity;
  if (name.includes("tdee") || name.includes("energy") || name.includes("surplus") || name.includes("deficit")) return Zap;
  if (name.includes("activity") || name.includes("exercise") || name.includes("workout")) return Dumbbell;
  if (name.includes("protein")) return Beef;
  if (name.includes("carb")) return Apple;
  if (name.includes("fat intake") || name.includes("oil") || name.includes("unsaturated")) return Droplet;
  if (name.includes("fiber")) return Leaf;
  if (name.includes("water") || name.includes("fluid") || name.includes("hydration") || name.includes("sweat")) return Droplets;
  if (name.includes("meal") || name.includes("breakfast") || name.includes("lunch") || name.includes("dinner") || name.includes("snack") || name.includes("recipe")) return UtensilsCrossed;
  if (name.includes("macro") || name.includes("split")) return PieChart;
  if (name.includes("plan") || name.includes("template") || name.includes("serving")) return FileText;
  if (name.includes("loss")) return TrendingDown;
  if (name.includes("gain")) return TrendingUp;
  if (name.includes("target") || name.includes("goal")) return Target;
  if (name.includes("progress") || name.includes("tracker")) return CheckSquare;
  if (name.includes("food") || name.includes("raw")) return Apple;
  if (name.includes("analyzer") || name.includes("converter")) return Search;
  if (name.includes("pregnancy") || name.includes("heart")) return Heart;
  if (name.includes("lactation") || name.includes("breastfeeding") || name.includes("baby")) return Baby;
  if (name.includes("child") || name.includes("teen") || name.includes("senior") || name.includes("client")) return Users;
  if (name.includes("athlete") || name.includes("sport") || name.includes("endurance")) return Trophy;
  if (name.includes("rda") || name.includes("harris") || name.includes("mifflin") || name.includes("katch") || name.includes("schofield")) return BookOpen;
  if (name.includes("chart") || name.includes("percentage")) return BarChart3;
  if (name.includes("pcos")) return Sparkles;
  if (name.includes("renal") || name.includes("screening") || name.includes("enteral")) return Stethoscope;

  return Calculator;
}

export default function ToolsDirectoryClient() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState("consultation");
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const allTools = useMemo(() => getAllTools(), []);

  const handleOpenModal = (type = "consultation") => {
    setModalType(type);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const scrollToTools = () => {
    const el = document.getElementById("tools-categories-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Filtered categories
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

  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col font-sans selection:bg-[#dcf2e3] selection:text-[#0b4728]">
      {/* 1. NAVBAR */}
      <Navbar onOpenModal={handleOpenModal} />

      {/* 2. TOP BREADCRUMB (Matching Screenshot) */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-3 pb-1">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-1.5 text-xs text-gray-500"
          >
            <Sprout className="w-3.5 h-3.5 text-[#10793f]" />
            <Link
              href="/"
              className="hover:text-[#10793f] transition-colors font-medium text-gray-600"
            >
              Resources
            </Link>
            <span className="text-gray-400 font-light">&gt;</span>
            <span className="text-gray-900 font-semibold">
              Nutrition Tools &amp; Calculators
            </span>
          </nav>
        </div>
      </div>

      {/* 3. HERO SECTION (Identical to Screenshot) */}
      <section className="relative overflow-hidden pt-4 pb-8 sm:pt-6 sm:pb-12 lg:pt-6 lg:pb-14">
        {/* Greenhouse Bokeh Background with radial fade on right */}
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[62%] pointer-events-none z-0 select-none overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              maskImage:
                "radial-gradient(ellipse at 78% 42%, rgba(0,0,0,1) 35%, rgba(0,0,0,0.5) 60%, transparent 80%)",
              WebkitMaskImage:
                "radial-gradient(ellipse at 78% 42%, rgba(0,0,0,1) 35%, rgba(0,0,0,0.5) 60%, transparent 80%)",
            }}
          >
            <Image
              src="/image/Serene Greenhouse Bokeh Background.png"
              alt="Greenhouse Botanical Bokeh"
              fill
              priority
              unoptimized
              className="object-cover object-center opacity-75"
            />
          </div>
        </div>

        {/* Soft emerald circular glow behind image */}
        <div
          className="absolute right-16 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none blur-3xl opacity-30 z-0"
          style={{
            background:
              "radial-gradient(circle, #86efac 0%, #bbf7d0 45%, transparent 70%)",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* ── LEFT COLUMN: Text, Buttons & 4 Stats ── */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              {/* Badge: Nutrition Tools & Calculators */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-emerald-200/90 shadow-2xs mb-4">
                <div className="w-5 h-5 rounded-md bg-[#10793f] flex items-center justify-center text-white">
                  <Calculator className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs font-bold text-gray-900 tracking-tight">
                  Nutrition Tools &amp; Calculators
                </span>
              </div>

              {/* Main Headline (Identical to Screenshot) */}
              <h1 className="font-extrabold text-gray-900 tracking-tight text-3xl sm:text-4xl lg:text-[45px] leading-[1.14] mb-3.5">
                Scientific Nutrition Tools &amp;<br />
                <span className="text-[#10793f]">Dietary Calculators</span>
              </h1>

              {/* Sub-headline (Identical to Screenshot) */}
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6 max-w-xl font-normal">
                A comprehensive collection of easy-to-use, science-backed nutrition
                calculators to assess your health, plan your diet, and make
                informed lifestyle choices.
              </p>

              {/* Two CTA Buttons (Identical to Screenshot) */}
              <div className="flex flex-wrap items-center gap-3.5 mb-7 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={scrollToTools}
                  className="px-6 py-2.5 sm:py-3 rounded-full text-white text-xs sm:text-sm font-bold transition-all hover:opacity-95 active:scale-95 shadow-md flex items-center justify-center gap-2 cursor-pointer"
                  style={{
                    background: "#10793f",
                    boxShadow: "0 4px 14px rgba(16,121,63,0.25)",
                  }}
                >
                  <Calculator className="w-4 h-4" />
                  <span>Browse All Tools</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleOpenModal("consultation")}
                  className="px-6 py-2.5 sm:py-3 rounded-full text-[#10793f] hover:text-[#0d6333] text-xs sm:text-sm font-bold bg-white border border-[#10793f] hover:bg-emerald-50/40 transition-all shadow-2xs active:scale-95 cursor-pointer flex items-center justify-center gap-2"
                >
                  <Users className="w-4 h-4 text-[#10793f]" />
                  <span>Consult a Dietitian</span>
                </button>
              </div>

              {/* 4 Stats in a Horizontal Row (Identical to Screenshot) */}
              <div className="flex flex-wrap items-center gap-5 sm:gap-7 pt-4 border-t border-gray-100 w-full text-left">
                {/* Stat 1: 100+ Nutrition Tools */}
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full border border-emerald-300 text-[#10793f] flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-extrabold text-gray-900 leading-tight">
                      100+
                    </div>
                    <div className="text-[11px] font-medium text-gray-500 leading-tight">
                      Nutrition Tools
                    </div>
                  </div>
                </div>

                {/* Stat 2: 10+ Categories */}
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full border border-emerald-300 text-[#10793f] flex items-center justify-center shrink-0">
                    <Layers className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-extrabold text-gray-900 leading-tight">
                      10+
                    </div>
                    <div className="text-[11px] font-medium text-gray-500 leading-tight">
                      Categories
                    </div>
                  </div>
                </div>

                {/* Stat 3: Evidence-Based Calculations */}
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full border border-emerald-300 text-[#10793f] flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-extrabold text-gray-900 leading-tight">
                      Evidence-Based
                    </div>
                    <div className="text-[11px] font-medium text-gray-500 leading-tight">
                      Calculations
                    </div>
                  </div>
                </div>

                {/* Stat 4: Trusted by Health Seekers */}
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full border border-emerald-300 text-[#10793f] flex items-center justify-center shrink-0">
                    <Users className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-extrabold text-gray-900 leading-tight">
                      Trusted
                    </div>
                    <div className="text-[11px] font-medium text-gray-500 leading-tight">
                      by Health Seekers
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ── RIGHT COLUMN: DietNexa Nutrition Tools with Fresh Foods Image ── */}
            <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[480px] h-[330px] sm:h-[370px] lg:h-[410px]">
                <Image
                  src="/image/DietNexa Nutrition Tools with Fresh Foods.png"
                  alt="DietNexa Nutrition Tools with Fresh Foods"
                  fill
                  priority
                  unoptimized
                  className="object-contain object-center lg:object-right drop-shadow-md"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. HORIZONTAL CATEGORY NAVIGATION PILLS BAR */}
      <div className="sticky top-[68px] sm:top-[76px] z-30 bg-white/95 backdrop-blur-md border-b border-gray-200/80 shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center justify-between gap-4">
            {/* Scrollable category pills */}
            <div className="flex gap-2 overflow-x-auto scrollbar-none py-1 flex-1">
              {/* All Tools Pill */}
              <button
                type="button"
                onClick={() => {
                  setActiveCategory("all");
                  setSearchQuery("");
                }}
                className={`px-4 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  activeCategory === "all"
                    ? "bg-[#10793f] text-white shadow-xs"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200/80 hover:text-gray-900"
                }`}
              >
                All Tools (100+)
              </button>

              {/* Category Pills */}
              {categories.map((cat) => {
                const IconComp = CATEGORY_ICONS[cat.icon] || Calculator;
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => {
                      setActiveCategory(cat.id);
                      setSearchQuery("");
                    }}
                    className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                      isActive
                        ? "bg-[#10793f] text-white shadow-xs"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200/80 hover:text-gray-900"
                    }`}
                  >
                    <IconComp className="w-3.5 h-3.5" />
                    <span>{cat.name.replace(" Calculators", "").replace(" Tools", "")}</span>
                  </button>
                );
              })}
            </div>

            {/* Quick Search */}
            <div className="relative hidden md:block w-64 shrink-0">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search calculators..."
                className="w-full pl-9 pr-7 py-1.5 text-xs border border-gray-200 rounded-full bg-gray-50 focus:bg-white focus:outline-hidden focus:border-[#10793f] focus:ring-1 focus:ring-[#10793f]/20 transition-all"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X className="w-3 h-3" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* 5. MAIN CATEGORY SECTIONS (Matching Exact Screenshot Rows) */}
      <main
        id="tools-categories-section"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex-1 w-full space-y-9"
      >
        {filteredCategories.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-gray-200/80 p-8 shadow-xs">
            <Calculator className="w-12 h-12 text-gray-300 mx-auto mb-3" />
            <h3 className="text-base font-bold text-gray-800">
              No matching tools found
            </h3>
            <p className="text-xs text-gray-500 mt-1 max-w-sm mx-auto">
              We couldn&apos;t find any calculator matching &quot;{searchQuery}&quot;.
              Try another search or browse by category.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("all");
              }}
              className="mt-4 px-4 py-2 rounded-xl text-xs font-bold text-white bg-[#10793f] hover:bg-[#0d6333] transition-colors cursor-pointer"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          filteredCategories.map((cat) => {
            const CatIcon = CATEGORY_ICONS[cat.icon] || Calculator;
            const isExpanded =
              expandedCategories[cat.id] ||
              activeCategory === cat.id ||
              searchQuery.length > 0;
            // In default view, display top 4 cards per row as in the screenshot!
            const displayedTools = isExpanded
              ? cat.tools
              : cat.tools.slice(0, 4);

            return (
              <section
                key={cat.id}
                id={`cat-${cat.id}`}
                className="bg-white rounded-2xl border border-gray-200/80 p-5 sm:p-6 shadow-2xs hover:shadow-xs transition-shadow"
              >
                {/* Category Header Bar */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-gray-100 gap-4">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 shadow-2xs"
                      style={{ background: cat.themeBg }}
                    >
                      <CatIcon
                        className="w-5 h-5"
                        style={{ color: cat.themeColor }}
                      />
                    </div>
                    <div>
                      <h2 className="text-base sm:text-lg font-black text-gray-900 tracking-tight">
                        {cat.name}
                      </h2>
                      <p className="text-xs text-gray-500 font-normal">
                        {cat.short}
                      </p>
                    </div>
                  </div>

                  {/* View All Button */}
                  {cat.tools.length > 4 && (
                    <button
                      type="button"
                      onClick={() => toggleExpandCategory(cat.id)}
                      className="text-xs font-bold text-[#10793f] hover:text-[#0d6333] flex items-center gap-1 shrink-0 transition-colors cursor-pointer"
                    >
                      <span>{isExpanded ? "Show Less" : "View All"}</span>
                      <ArrowRight
                        className={`w-3.5 h-3.5 transition-transform ${
                          isExpanded ? "rotate-90" : ""
                        }`}
                      />
                    </button>
                  )}
                </div>

                {/* 4 Cards Grid Row (Identical to Screenshot) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
                  {displayedTools.map((tool) => {
                    const ToolIconComponent = getToolIcon(tool.name, cat.id);
                    return (
                      <Link
                        key={tool.slug}
                        href={`/tools/${tool.slug}`}
                        className="group bg-white rounded-xl border border-gray-200/70 p-3.5 hover:border-[#10793f] hover:shadow-md transition-all duration-200 flex items-center justify-between gap-2.5 cursor-pointer"
                      >
                        <div className="flex items-center gap-3 min-w-0 flex-1">
                          {/* Tool Icon in tinted box */}
                          <div
                            className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-colors"
                            style={{
                              background: cat.themeBg,
                              color: cat.themeColor,
                            }}
                          >
                            <ToolIconComponent className="w-4 h-4" />
                          </div>

                          {/* Tool Title & Subtitle */}
                          <div className="min-w-0 flex-1">
                            <h3 className="text-xs sm:text-[13px] font-bold text-gray-900 group-hover:text-[#10793f] transition-colors truncate">
                              {tool.name}
                            </h3>
                            <p className="text-[11px] text-gray-500 line-clamp-1 leading-tight mt-0.5 font-normal">
                              {tool.shortDesc}
                            </p>
                          </div>
                        </div>

                        {/* Right Arrow */}
                        <div className="w-5 h-5 rounded-full flex items-center justify-center text-gray-400 group-hover:text-[#10793f] group-hover:translate-x-0.5 transition-all shrink-0">
                          <ArrowRight className="w-3.5 h-3.5" />
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </section>
            );
          })
        )}

        {/* 6. BOTTOM CONSULTATION BANNER (Identical to Screenshot) */}
        <section
          className="rounded-[30px] p-6 sm:p-7 md:p-8 text-white relative overflow-hidden shadow-xl"
          style={{
            background:
              "linear-gradient(90deg, #78c264 0%, #3ca052 28%, #1d6d30 65%, #0f5f2c 100%)",
          }}
        >
          {/* Decorative leafy branch in the background on the left */}
          <div className="absolute left-0 bottom-0 w-44 h-44 pointer-events-none select-none opacity-30 z-0">
            <Image
              src="/image/Dewy Green Leafy Branch.png"
              alt=""
              fill
              unoptimized
              className="object-contain object-bottom-left"
            />
          </div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-8 items-center">
            {/* Female Doctor Cutout on Left */}
            <div className="md:col-span-4 flex justify-center md:justify-start">
              <div className="relative w-44 h-44 sm:w-52 sm:h-52 md:w-56 md:h-56 -mb-6 md:-mb-8">
                <Image
                  src="/image/Smiling South Asian Doctor Portrait.png"
                  alt="DietNexa Certified Clinical Dietitian"
                  fill
                  priority
                  unoptimized
                  className="object-contain object-bottom drop-shadow-md"
                />
              </div>
            </div>

            {/* Banner Text in Middle */}
            <div className="md:col-span-5 text-center md:text-left space-y-2">
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                Need a Personalized Diet Plan?
              </h2>
              <p className="text-emerald-100 text-xs sm:text-sm leading-relaxed font-normal">
                Use our nutrition tools to understand your needs and get expert
                guidance from certified dietitians for a healthier, happier you.
              </p>
            </div>

            {/* Banner Button on Right */}
            <div className="md:col-span-3 flex justify-center md:justify-end">
              <button
                type="button"
                onClick={() => handleOpenModal("consultation")}
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#0c4a24] hover:bg-[#07361a] text-white text-xs sm:text-sm font-bold border border-white/20 shadow-md transition-all active:scale-95 cursor-pointer whitespace-nowrap"
              >
                <Calendar className="w-4 h-4 text-emerald-300" />
                <span>Book a Consultation</span>
                <ArrowRight className="w-3.5 h-3.5 text-white" />
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* 7. FOOTER */}
      <Footer />

      {/* 8. CONSULTATION MODAL */}
      <ConsultationModal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        initialType={modalType}
      />
    </div>
  );
}
