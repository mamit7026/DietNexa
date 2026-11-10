"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ConsultationModal from "@/components/ConsultationModal";
import { calculateTool } from "@/lib/calculatorEngine";
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
  ChevronRight,
  ChevronDown,
  RotateCcw,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  HelpCircle,
  BookOpen,
  Award,
} from "lucide-react";

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

export default function ToolPageClient({ tool, relatedTools = [] }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState("consultation");
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  // Initialize form state from tool.inputsConfig
  const defaultInputs = useMemo(() => {
    const init = {};
    if (tool?.inputsConfig) {
      tool.inputsConfig.forEach((inp) => {
        init[inp.id] = inp.defaultValue;
      });
    }
    return init;
  }, [tool]);

  const [inputs, setInputs] = useState(defaultInputs);

  const handleInputChange = (id, value) => {
    setInputs((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleReset = () => {
    setInputs(defaultInputs);
  };

  // Live calculation based on current inputs
  const calculationResult = useMemo(() => {
    if (!tool) return null;
    return calculateTool(tool.slug, inputs);
  }, [tool, inputs]);

  const handleOpenModal = (type = "consultation") => {
    setModalType(type);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  if (!tool) return null;

  const IconComponent = ICON_MAP[tool.categoryIcon] || Calculator;

  return (
    <div className="min-h-screen bg-[#f9fafb] text-gray-900 flex flex-col font-sans">
      {/* 1. NAVBAR */}
      <Navbar onOpenModal={handleOpenModal} />

      {/* 2. BREADCRUMBS */}
      <div className="bg-white border-b border-gray-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-gray-500 overflow-x-auto scrollbar-none">
            <Link href="/" className="hover:text-[#10793f] transition-colors whitespace-nowrap">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400 shrink-0" />
            <Link href="/tools" className="hover:text-[#10793f] transition-colors whitespace-nowrap">
              Nutrition Tools
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400 shrink-0" />
            <span className="text-gray-400 whitespace-nowrap truncate max-w-[150px] sm:max-w-none">
              {tool.categoryName}
            </span>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400 shrink-0" />
            <span className="text-gray-900 font-semibold whitespace-nowrap truncate">
              {tool.name}
            </span>
          </nav>
        </div>
      </div>

      {/* 3. HERO BANNER */}
      <section
        className="relative overflow-hidden text-white pt-10 pb-12 md:pt-14 md:pb-16"
        style={{
          background: "linear-gradient(135deg, #07361e 0%, #0d5c32 50%, #10793f 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            {/* Badges */}
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-emerald-200 text-xs font-semibold">
                <IconComponent className="w-3.5 h-3.5 text-emerald-300" />
                <span>{tool.categoryName}</span>
              </span>
              <span className="px-2.5 py-1 rounded-full bg-emerald-400/20 text-emerald-200 text-xs font-bold border border-emerald-400/30">
                Tool #{tool.id}
              </span>
              <span className="px-2.5 py-1 rounded-full bg-white/10 text-emerald-200 text-xs font-medium border border-white/20">
                {tool.calculation}
              </span>
            </div>

            {/* H1 Title */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight leading-tight mb-3">
              {tool.name}
            </h1>

            {/* Subtitle */}
            <p className="text-emerald-100/90 text-sm sm:text-base leading-relaxed max-w-2xl font-normal mb-6">
              {tool.shortDesc} Built on verified clinical algorithms and WHO / ICMR reference equations.
            </p>

            {/* Trust highlights */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-emerald-100">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-300" />
                <span>Clinical Grade Accuracy</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                <span>Instant Inline Results</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-emerald-300" />
                <span>Free & No Registration</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. MAIN INTERACTIVE CALCULATOR (INLINE - NO MODAL) */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex-1 w-full space-y-12">
        <section aria-label="Interactive Calculator Form">
          <div className="bg-white rounded-3xl border border-gray-200/90 shadow-sm overflow-hidden">
            <div className="p-6 sm:p-8 lg:p-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                {/* LEFT: Dynamic Input Form */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                    <div>
                      <h2 className="text-lg font-black text-gray-900 tracking-tight flex items-center gap-2">
                        <Calculator className="w-5 h-5 text-[#10793f]" />
                        <span>Enter Your Information</span>
                      </h2>
                      <p className="text-xs text-gray-500 mt-0.5">
                        Adjust the fields below to calculate your values instantly.
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={handleReset}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-gray-500 hover:text-gray-800 hover:bg-gray-100 transition-colors"
                      title="Reset values"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Reset</span>
                    </button>
                  </div>

                  {/* Form Inputs Grid */}
                  <div className="space-y-4">
                    {tool.inputsConfig?.map((input) => {
                      if (input.type === "select") {
                        return (
                          <div key={input.id}>
                            <label
                              htmlFor={input.id}
                              className="block text-xs font-bold text-gray-700 mb-1.5"
                            >
                              {input.label}
                            </label>
                            <div className="relative">
                              <select
                                id={input.id}
                                value={inputs[input.id] ?? input.defaultValue}
                                onChange={(e) =>
                                  handleInputChange(input.id, e.target.value)
                                }
                                className="w-full px-3.5 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:outline-hidden focus:border-[#10793f] focus:ring-2 focus:ring-[#10793f]/10 transition-all font-medium text-gray-800 appearance-none pr-9"
                              >
                                {input.options?.map((opt) => (
                                  <option key={opt.value} value={opt.value}>
                                    {opt.label}
                                  </option>
                                ))}
                              </select>
                              <ChevronDown className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                            </div>
                          </div>
                        );
                      }

                      // Number Input
                      return (
                        <div key={input.id}>
                          <div className="flex items-center justify-between mb-1.5">
                            <label
                              htmlFor={input.id}
                              className="text-xs font-bold text-gray-700"
                            >
                              {input.label}
                            </label>
                            {input.unit && (
                              <span className="text-[11px] font-semibold text-gray-400 bg-gray-100 px-2 py-0.5 rounded-md">
                                {input.unit}
                              </span>
                            )}
                          </div>
                          <div className="relative">
                            <input
                              type="number"
                              id={input.id}
                              value={inputs[input.id] ?? input.defaultValue}
                              min={input.min}
                              max={input.max}
                              step={input.step || 1}
                              onChange={(e) =>
                                handleInputChange(input.id, e.target.value)
                              }
                              className="w-full px-3.5 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:outline-hidden focus:border-[#10793f] focus:ring-2 focus:ring-[#10793f]/10 transition-all font-semibold text-gray-900"
                            />
                            {input.unit && (
                              <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-medium text-gray-400 pointer-events-none">
                                {input.unit}
                              </span>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* RIGHT: Live Results Card */}
                <div className="lg:col-span-5">
                  <div
                    className="rounded-2xl p-6 sm:p-7 border border-[#10793f]/20 shadow-xs relative overflow-hidden"
                    style={{ background: "#edf8f1" }}
                  >
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="text-xs font-bold text-[#10793f] uppercase tracking-wider">
                        Calculation Result
                      </span>
                      {calculationResult?.statusBadge && (
                        <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-[#10793f] text-white shadow-2xs">
                          {calculationResult.statusBadge}
                        </span>
                      )}
                    </div>

                    {/* Primary Large Value */}
                    <div className="mb-4">
                      <div className="flex items-baseline gap-2">
                        <span className="text-4xl sm:text-5xl font-black text-[#10793f] tracking-tight">
                          {calculationResult?.primaryValue ?? "--"}
                        </span>
                        {calculationResult?.primaryUnit && (
                          <span className="text-base sm:text-lg font-bold text-gray-700">
                            {calculationResult.primaryUnit}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Clinical Interpretation */}
                    {calculationResult?.interpretation && (
                      <p className="text-xs text-gray-700 leading-relaxed mb-5 p-3.5 bg-white/80 rounded-xl border border-green-200/80">
                        {calculationResult.interpretation}
                      </p>
                    )}

                    {/* Metric Breakdown Table */}
                    {calculationResult?.breakdown && calculationResult.breakdown.length > 0 && (
                      <div className="space-y-2 mb-6">
                        <div className="text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1">
                          Detailed Metrics
                        </div>
                        <div className="bg-white rounded-xl border border-gray-200/80 divide-y divide-gray-100 overflow-hidden text-xs">
                          {calculationResult.breakdown.map((row, idx) => (
                            <div
                              key={idx}
                              className="flex items-center justify-between px-3.5 py-2.5"
                            >
                              <span className="font-medium text-gray-600">
                                {row.label}
                              </span>
                              <span className="font-bold text-gray-900">
                                {row.value} {row.unit}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Formula Pill */}
                    {calculationResult?.formulaUsed && (
                      <div className="mb-6 text-[11px] text-gray-500 bg-white/60 p-2.5 rounded-lg border border-green-200/60 font-mono">
                        <span className="font-bold text-gray-700">Formula: </span>
                        {calculationResult.formulaUsed}
                      </div>
                    )}

                    {/* CTA Button */}
                    <button
                      type="button"
                      onClick={() => handleOpenModal("consultation")}
                      className="w-full py-3 rounded-xl text-white font-bold text-xs sm:text-sm transition-all shadow-md active:scale-98 flex items-center justify-center gap-2"
                      style={{
                        background: "#10793f",
                        boxShadow: "0 4px 14px rgba(16,121,63,0.25)",
                      }}
                    >
                      <span>Get Custom Diet Plan With These Numbers</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. SCIENTIFIC FORMULA & METHODOLOGY */}
        <section className="bg-white rounded-3xl border border-gray-200/80 p-6 sm:p-8 lg:p-10">
          <div className="max-w-3xl space-y-6">
            <div className="flex items-center gap-3 pb-3 border-b border-gray-100">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center"
                style={{ background: tool.themeBg }}
              >
                <BookOpen
                  className="w-5 h-5"
                  style={{ color: tool.themeColor }}
                />
              </div>
              <div>
                <h2 className="text-lg sm:text-xl font-black text-gray-900 tracking-tight">
                  How the {tool.name} Works
                </h2>
                <p className="text-xs text-gray-500 mt-0.5">
                  Scientific reference formula: {tool.calculation}
                </p>
              </div>
            </div>

            <div className="prose prose-sm text-gray-700 max-w-none space-y-4 leading-relaxed text-sm">
              <p>{tool.formulaExplanation}</p>
              <div className="p-4 bg-gray-50 rounded-2xl border border-gray-200/80 font-mono text-xs text-gray-800">
                <span className="font-bold text-[#10793f]">Active Equation: </span>
                {tool.formula}
              </div>
              <p>
                In clinical nutritional assessment, anthropometric and metabolic
                calculations provide the foundation for total daily energy
                expenditure (TDEE), macronutrient partitioning, and micronutrient
                densities. DietNexa implements standard peer-reviewed equations
                standardized by the American Dietetic Association (ADA) and the
                Indian Council of Medical Research (ICMR).
              </p>
            </div>
          </div>
        </section>

        {/* 6. CLINICAL IMPORTANCE & DIETITIAN ADVICE */}
        <section className="bg-white rounded-3xl border border-gray-200/80 p-6 sm:p-8 lg:p-10">
          <div className="max-w-3xl space-y-6">
            <div className="flex items-center gap-3 pb-3 border-b border-gray-100">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-emerald-50 text-[#10793f]">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-lg sm:text-xl font-black text-gray-900 tracking-tight">
                  Clinical Insights from DietNexa Nutritionists
                </h2>
                <p className="text-xs text-gray-500 mt-0.5">
                  Verified clinical guidance for real-world application
                </p>
              </div>
            </div>

            <div className="text-sm text-gray-700 leading-relaxed space-y-4">
              <p>{tool.clinicalImportance}</p>
              <div className="p-4 rounded-2xl border border-emerald-200 bg-[#edf8f1] flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[#10793f] shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm text-gray-800">
                  <span className="font-bold text-[#10793f]">Dietitian Note: </span>
                  While calculator estimations are vital for baseline planning,
                  individual biochemical individuality, thyroid status, gut
                  microbiome efficiency, and lifestyle stressors influence your
                  actual daily results. For a tailored protocol, consult our
                  registered clinical dietitians.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. FREQUENTLY ASKED QUESTIONS (ACCORDION) */}
        <section className="bg-white rounded-3xl border border-gray-200/80 p-6 sm:p-8 lg:p-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 pb-4 mb-6 border-b border-gray-100">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-emerald-50 text-[#10793f]">
                <HelpCircle className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-lg sm:text-xl font-black text-gray-900 tracking-tight">
                  Frequently Asked Questions
                </h2>
                <p className="text-xs text-gray-500 mt-0.5">
                  Everything you need to know about the {tool.name}
                </p>
              </div>
            </div>

            <div className="space-y-3">
              {tool.faqs?.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={idx}
                    className="border border-gray-200/80 rounded-2xl overflow-hidden transition-colors"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaqIndex(isOpen ? -1 : idx)}
                      className="w-full px-5 py-4 text-left flex items-center justify-between gap-3 text-sm font-bold text-gray-900 hover:text-[#10793f] transition-colors"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-gray-400 transition-transform ${
                          isOpen ? "rotate-180 text-[#10793f]" : ""
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-4 pt-1 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100 bg-gray-50/50">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 8. RELATED TOOLS CARDS */}
        {relatedTools.length > 0 && (
          <section>
            <div className="flex items-center justify-between mb-5">
              <div>
                <h2 className="text-lg sm:text-xl font-black text-gray-900 tracking-tight">
                  Related Nutrition Calculators
                </h2>
                <p className="text-xs text-gray-500 mt-0.5">
                  Complementary tools to analyze your diet and wellness
                </p>
              </div>
              <Link
                href="/tools"
                className="text-xs font-bold text-[#10793f] hover:underline flex items-center gap-1"
              >
                <span>View All 100</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {relatedTools.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/tools/${rel.slug}`}
                  className="group bg-white rounded-2xl border border-gray-200/80 p-5 hover:border-[#10793f] hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span
                        className="text-[10px] font-black px-2 py-0.5 rounded-md"
                        style={{
                          background: rel.themeBg,
                          color: rel.themeColor,
                        }}
                      >
                        #{rel.id}
                      </span>
                      <span className="text-[10px] text-gray-400 font-medium truncate max-w-[140px]">
                        {rel.calculation}
                      </span>
                    </div>
                    <h3 className="text-sm font-bold text-gray-900 group-hover:text-[#10793f] transition-colors mb-1 line-clamp-1">
                      {rel.name}
                    </h3>
                    <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">
                      {rel.shortDesc}
                    </p>
                  </div>
                  <div className="pt-3 mt-3 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-[#10793f]">
                    <span>Open Calculator</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* 9. BOTTOM CONSULTATION BANNER */}
        <section
          className="rounded-3xl p-8 sm:p-10 text-white relative overflow-hidden shadow-lg"
          style={{
            background: "linear-gradient(135deg, #07361e 0%, #0d5c32 60%, #10793f 100%)",
          }}
        >
          <div className="max-w-2xl relative z-10">
            <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-emerald-200 text-xs font-semibold mb-3 border border-white/20">
              Clinical Dietitian Support
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-3">
              Need Personal Advice on Your {tool.name} Results?
            </h2>
            <p className="text-emerald-100 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
              DietNexa dietitians will review your results, body metrics, and
              medical history to formulate a sustainable nutrition roadmap.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => handleOpenModal("consultation")}
                className="px-6 py-3 rounded-full bg-white text-[#10793f] text-xs sm:text-sm font-bold hover:bg-emerald-50 transition-all shadow-md active:scale-95"
              >
                Book Free Dietitian Consultation
              </button>
              <Link
                href="/dietitians"
                className="px-5 py-3 rounded-full border border-white/30 text-white text-xs sm:text-sm font-semibold hover:bg-white/10 transition-colors"
              >
                View Dietitians
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* 10. FOOTER */}
      <Footer />

      {/* 11. CONSULTATION MODAL */}
      <ConsultationModal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        initialType={modalType}
      />
    </div>
  );
}

