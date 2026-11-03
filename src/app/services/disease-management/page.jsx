"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ConsultationModal from "@/components/ConsultationModal";
import {
  Heart,
  Target,
  BarChart3,
  Headphones,
  Check,
  ChevronRight,
  ArrowRight,
  Calendar,
  Sparkles,
  ShieldCheck,
  Activity,
  FileText,
  Clock,
  Plus,
  X,
  Stethoscope,
  ChevronDown,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Award,
  Users,
} from "lucide-react";

// Disease programs matching reference mockup
const programs = [
  {
    id: "diabetes",
    title: "Diabetes Management",
    description: "Maintain healthy blood sugar levels with a balanced, practical diet plan.",
    image: "/image/dm_diabetes_glucometer.png",
    cardBg: "#fff0ee",
    tag: "HbA1c & Glucose Control",
    overview:
      "Our clinical diabetes nutrition protocol combines low-glycemic carbohydrate cycling, meal timing precision, and balanced macro-nutrition to curb sugar spikes and reduce insulin resistance naturally.",
    keyPoints: [
      "Customized Low-Glycemic Index (GI) meal planning",
      "HbA1c reduction & pre/post meal spike control",
      "Insulin sensitivity enhancement protocol",
      "Guidance to prevent hypoglycemic episodes safely",
    ],
    idealFor: "Type 2 Diabetes, Pre-diabetes, Gestational Diabetes, Insulin Resistance",
  },
  {
    id: "bp",
    title: "BP Management",
    description: "Support healthy blood pressure through a heart-friendly diet.",
    image: "/image/dm_bp_heart_monitor.png",
    cardBg: "#eef7ff",
    tag: "Cardiovascular Health",
    overview:
      "A scientifically formulated DASH-aligned diet tailored to balance sodium-potassium ratios, support endothelial dilation, and relieve arterial stiffness without tasteless or restrictive meals.",
    keyPoints: [
      "Optimized sodium-to-potassium electrolyte balancing",
      "Magnesium, calcium & nitric oxide boosting whole foods",
      "Stress-adaptive anti-inflammatory meal schedules",
      "Synergy with your prescribing physician's recommendations",
    ],
    idealFor: "Stage 1 & 2 Hypertension, Fluctuating BP, Pre-hypertension, Post-cardiac recovery",
  },
  {
    id: "thyroid",
    title: "Thyroid Nutrition",
    description: "Nutritional support for hypothyroidism and hyperthyroidism.",
    image: "/image/dm_thyroid_gland.png",
    cardBg: "#f6effb",
    tag: "Hormone & Metabolism",
    overview:
      "Thyroid disorders require specialized micronutrients to support conversion of T4 to active T3. Our clinical plans revitalize sluggish metabolism, alleviate fatigue, and counter stubborn weight gain.",
    keyPoints: [
      "Selenium, Zinc & bioavailable Iodine optimization",
      "Safe modulation of dietary goitrogens & soy",
      "Gut-thyroid axis rejuvenation to combat Hashimoto's",
      "Metabolic revival to eliminate brain fog & fatigue",
    ],
    idealFor: "Hypothyroidism, Hashimoto's Thyroiditis, Hyperthyroidism, Sluggish metabolic rate",
  },
  {
    id: "pcos",
    title: "PCOS / PCOD Care",
    description: "Hormone-friendly diet plans to manage symptoms, support weight balance and improve metabolic health.",
    image: "/image/dm_pcos_uterus.png",
    cardBg: "#fef2e9",
    tag: "Hormone Balance & Ovulation",
    overview:
      "Designed specifically for female reproductive and hormonal harmony. We target the root cause—hyperinsulinemia and inflammation—to restore regular cycles, balance androgens, and support fertility.",
    keyPoints: [
      "Androgen-lowering anti-inflammatory nutrition",
      "Myo-inositol rich foods to regulate ovulation",
      "Belly fat reduction and metabolic stabilization",
      "Clearer skin, reduced hair loss & emotional balance",
    ],
    idealFor: "PCOS, PCOD, Irregular cycles, Hormonal weight gain, Fertility preparation",
  },
  {
    id: "cholesterol",
    title: "Cholesterol Management",
    description: "Heart-healthy nutrition to manage cholesterol levels and support overall cardiovascular health.",
    image: "/image/dm_cholesterol_artery.png",
    cardBg: "#ecfaf1",
    tag: "Lipid Profile Optimization",
    overview:
      "Targeted culinary nutrition to bring down total cholesterol, bad LDL, and high triglycerides while elevating heart-protective HDL and shielding arteries against lipid plaque deposition.",
    keyPoints: [
      "High soluble-fiber integration (beta-glucans & pectin)",
      "Zero trans-fat & optimized omega-3 to omega-6 ratio",
      "Liver lipid clearance & fatty liver detoxification",
      "Antioxidant-dense nutrition to prevent LDL oxidation",
    ],
    idealFor: "High Triglycerides, Elevated LDL, Low HDL, Dyslipidemia, Grade 1/2 Fatty Liver",
  },
  {
    id: "more",
    title: "More Conditions",
    description: "Personalized nutrition care for weight management, fatty liver, Digestive issues, uric acid, and more.",
    image: "/image/dm_medical_shield.png",
    cardBg: "#edf6fe",
    tag: "Comprehensive Clinical Care",
    overview:
      "Our senior team of licensed clinical dietitians crafts specialized medical meal plans for complex lifestyle and metabolic ailments, co-managed with your primary healthcare provider.",
    keyPoints: [
      "Non-Alcoholic Fatty Liver Disease (NAFLD) reversal",
      "High Uric Acid, Gout & hyperuricemia relief plans",
      "Gastrointestinal: IBS, GERD, Acid Reflux & Leaky Gut",
      "Renal nutrition & chronic systemic inflammation care",
    ],
    idealFor: "Fatty Liver, High Uric Acid, IBS/GERD, Renal care, Metabolic Syndrome",
  },
];

// 4 Steps in the Disease Management Journey
const treatmentSteps = [
  {
    step: "01",
    title: "Clinical & Lab Evaluation",
    description:
      "We thoroughly review your recent blood work (HbA1c, lipid panel, thyroid profile, liver enzymes) and medical history.",
    icon: Stethoscope,
  },
  {
    step: "02",
    title: "Customized Medical Diet Plan",
    description:
      "Your senior clinical dietitian crafts a tailored therapeutic diet suited to your family culture, kitchen, and health goals.",
    icon: FileText,
  },
  {
    step: "03",
    title: "Weekly Monitoring & Adjustments",
    description:
      "Frequent check-ins to track blood sugar, blood pressure, symptom progression, energy, and adjust macros dynamically.",
    icon: Activity,
  },
  {
    step: "04",
    title: "Sustainable Long-Term Reversal",
    description:
      "Gain lifelong food habits that empower you to reduce medication reliance safely under your physician's supervision.",
    icon: ShieldCheck,
  },
];

// FAQs for the Disease Management Page
const faqs = [
  {
    q: "Can personalized nutrition truly help control or reverse Type 2 Diabetes?",
    a: "Yes. Clinical evidence demonstrates that structured medical nutrition therapy focused on low-glycemic load, fiber pacing, and carb quality can drastically lower HbA1c, improve cellular insulin sensitivity, and in many cases achieve diabetes remission or reduce dosage under your physician's supervision.",
  },
  {
    q: "How does your diet plan help with PCOS and hormonal irregularities?",
    a: "PCOS is primarily driven by hyperinsulinemia and chronic low-grade inflammation. Our specialized PCOS meal plans balance blood sugar, lower androgen production, provide inositol-rich foods, and promote regular ovulatory cycles while aiding natural fat loss.",
  },
  {
    q: "Do I have to stop eating all carbohydrates and sweets?",
    a: "Never! Strict deprivation is neither medically necessary nor sustainable. We teach you smart carbohydrate pairing (combining complex carbs with high protein, fiber, and healthy fats) so you enjoy satisfying family meals while keeping glucose and lipids completely stable.",
  },
  {
    q: "Can I follow this nutrition plan while taking prescribed medications?",
    a: "Absolutely. Our dietitians design your plan to work synergistically with your prescribed medications. In fact, many clients find that as their biometrics improve, their treating doctors lower their pill dosages.",
  },
  {
    q: "How often will I communicate with my clinical dietitian?",
    a: "You receive continuous 1-on-1 support. Depending on your chosen care program, you have regular weekly consultations, bi-weekly biometric reviews, and daily chat support for meal clarifications and food diary audits.",
  },
];

export default function DiseaseManagementPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState("consultation");
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [faqOpen, setFaqOpen] = useState(null);

  const handleOpenModal = (type = "consultation") => {
    setModalType(type);
    setModalOpen(true);
  };

  const handleOpenProgramModal = (prog) => {
    setSelectedProgram(prog);
  };

  const handleCloseProgramModal = () => {
    setSelectedProgram(null);
  };

  const toggleFaq = (index) => {
    setFaqOpen(faqOpen === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col font-sans selection:bg-[#dcf2e3] selection:text-[#0b4728] relative overflow-x-hidden">
      {/* Sticky Navigation Bar */}
      <Navbar onOpenModal={handleOpenModal} />

      <main className="flex-1">
        {/* ============================================================== */}
        {/* 1. HERO SECTION: Personalized Nutrition for Better Disease Control */}
        {/* Reference: Exact design matching user's mockup                  */}
        {/* ============================================================== */}
        <section className="relative overflow-hidden pt-3 sm:pt-4 pb-4 sm:pb-8">
          {/* Greenhouse Bokeh Background — Spreads edge-to-edge */}
          <div className="absolute inset-0 z-0 pointer-events-none select-none">
            <Image
              src="/image/Serene Greenhouse Bokeh Background.png"
              alt="Serene Greenhouse Setting"
              fill
              priority
              unoptimized
              className="object-cover object-center"
            />
            {/* Directional gradient wash: preserves maximum text readability on left while letting lush greenhouse bokeh & green waves show beautifully across the right */}
            <div
              className="absolute inset-0 hidden md:block"
              style={{
                background:
                  "linear-gradient(90deg, rgba(244, 251, 246, 0.98) 0%, rgba(246, 252, 248, 0.94) 42%, rgba(240, 250, 243, 0.55) 72%, rgba(240, 250, 243, 0.20) 100%)",
              }}
            />
            <div
              className="absolute inset-0 md:hidden"
              style={{
                background:
                  "linear-gradient(180deg, rgba(244, 251, 246, 0.98) 0%, rgba(246, 252, 248, 0.92) 50%, rgba(240, 250, 243, 0.40) 100%)",
              }}
            />
          </div>

          {/* Organic glowing green waves behind the doctor */}
          <div
            className="absolute right-0 top-0 w-full md:w-3/5 h-full pointer-events-none z-0 opacity-70"
            style={{
              background:
                "radial-gradient(ellipse 65% 55% at 75% 45%, rgba(186, 242, 206, 0.75) 0%, rgba(214, 246, 228, 0.35) 45%, rgba(255, 255, 255, 0) 80%)",
            }}
          />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
            {/* Breadcrumb Navigation */}
            <nav className="flex items-center gap-1.5 text-xs font-semibold mb-3">
              <Link
                href="/#services"
                className="text-gray-500 hover:text-[#10793f] transition-colors"
              >
                Services
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
              <span className="text-gray-900">Disease Management</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
              {/* Left Column: Heading, Subtitle, Highlights & Action Button */}
              <div className="lg:col-span-6 pb-2 sm:pb-4 z-10">
                {/* Pill Badge matching mockup: green heart + Disease Management */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#e8f7ee] border border-[#c1e8cf] text-[#0d6835] text-xs sm:text-sm font-bold mb-3 shadow-xs">
                  <Heart className="w-3.5 h-3.5 fill-[#10793f] text-[#10793f]" />
                  <span>Disease Management</span>
                </div>

                {/* Main Headline */}
                <h1
                  className="font-extrabold text-gray-950 tracking-tight leading-[1.14]"
                  style={{ fontSize: "clamp(30px, 3.4vw, 48px)" }}
                >
                  Personalized Nutrition
                  <br />
                  <span className="text-gray-950">for Better Disease Control</span>
                </h1>

                {/* Subtext */}
                <p className="mt-2.5 sm:mt-3 text-gray-600 text-xs sm:text-sm sm:leading-relaxed max-w-xl">
                  Evidence-based diet plans and continuous guidance to help you manage
                  chronic conditions, improve your health and live a more active life.
                </p>

                {/* 3 Bullet Feature Highlights matching reference mockup */}
                <div className="mt-5 sm:mt-6 grid grid-cols-3 gap-2 sm:gap-3 max-w-lg">
                  {/* Highlight 1: Condition-Specific Diet Plans */}
                  <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#e8f7ee] text-[#10793f] mb-2 shadow-xs transition-transform hover:scale-105">
                      <Target className="w-5 h-5 stroke-[2]" />
                    </div>
                    <span className="text-[11px] sm:text-xs font-bold text-gray-800 leading-tight">
                      Condition-Specific
                      <br className="hidden sm:inline" /> Diet Plans
                    </span>
                  </div>

                  {/* Highlight 2: Progress Monitoring */}
                  <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#e8f7ee] text-[#10793f] mb-2 shadow-xs transition-transform hover:scale-105">
                      <BarChart3 className="w-5 h-5 stroke-[2]" />
                    </div>
                    <span className="text-[11px] sm:text-xs font-bold text-gray-800 leading-tight">
                      Progress
                      <br className="hidden sm:inline" /> Monitoring
                    </span>
                  </div>

                  {/* Highlight 3: Expert Dietitian Support */}
                  <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#e8f7ee] text-[#10793f] mb-2 shadow-xs transition-transform hover:scale-105">
                      <Headphones className="w-5 h-5 stroke-[2]" />
                    </div>
                    <span className="text-[11px] sm:text-xs font-bold text-gray-800 leading-tight">
                      Expert
                      <br className="hidden sm:inline" /> Dietitian Support
                    </span>
                  </div>
                </div>

                {/* Main CTA Button: Book a Consultation */}
                <div className="mt-6 sm:mt-7 flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => handleOpenModal("consultation")}
                    className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 rounded-xl font-bold text-white text-xs sm:text-sm transition-all duration-200 cursor-pointer shadow-md shadow-emerald-800/25 hover:scale-[1.02] active:scale-[0.99]"
                    style={{ background: "#10793f" }}
                    onMouseOver={(e) => (e.currentTarget.style.background = "#0c592e")}
                    onMouseOut={(e) => (e.currentTarget.style.background = "#10793f")}
                  >
                    <span>Book a Consultation</span>
                    <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                  </button>

                  <button
                    onClick={() => {
                      document
                        .getElementById("disease-programs")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-bold text-gray-700 text-xs sm:text-sm bg-white/80 hover:bg-white border border-gray-200 hover:border-gray-300 transition-all cursor-pointer shadow-xs"
                  >
                    <span>Explore Programs</span>
                    <ChevronDown className="w-3.5 h-3.5 text-gray-500" />
                  </button>
                </div>
              </div>

              {/* Right Column: Hero Doctor Visual + Angled Checklist Clipboard */}
              <div className="lg:col-span-6 relative flex items-center justify-center lg:justify-end min-h-[350px] sm:min-h-[420px] lg:min-h-[460px]">
                {/* Luminous emerald-mint aura backdrop centered behind doctor */}
                <div
                  className="absolute w-[320px] sm:w-[400px] lg:w-[460px] h-[320px] sm:h-[400px] lg:h-[460px] rounded-full pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(186, 238, 206, 0.75) 0%, rgba(214, 246, 228, 0.45) 50%, rgba(235, 252, 242, 0) 72%)",
                    right: "12%",
                    top: "50%",
                    transform: "translateY(-50%)",
                  }}
                />

                {/* Doctor Visual: Smiling Doctor in Green Scrubs */}
                <div className="relative w-[280px] sm:w-[350px] lg:w-[380px] h-[350px] sm:h-[420px] lg:h-[450px] z-10 flex items-end justify-center">
                  <Image
                    src="/image/hero section Smiling Doctor in Green Scrubs.png"
                    alt="Senior Clinical Dietitian - Disease Management"
                    fill
                    priority
                    unoptimized
                    className="object-contain object-bottom drop-shadow-lg"
                  />
                </div>

                {/* 3D-styled Checklist Clipboard on the right of the doctor */}
                <div className="absolute right-0 sm:right-2 lg:-right-4 top-1/2 -translate-y-1/2 z-20 w-[180px] sm:w-[220px] lg:w-[240px] transition-transform duration-300 hover:scale-[1.03]">
                  <div
                    className="relative bg-white rounded-2xl p-3 sm:p-4 border border-[#c2e8cf] shadow-xl"
                    style={{
                      background: "linear-gradient(180deg, #ffffff 0%, #f7fdf9 100%)",
                      boxShadow: "0 14px 35px -8px rgba(16, 121, 63, 0.18), 0 4px 12px rgba(0,0,0,0.06)",
                    }}
                  >
                    {/* Metal Clipboard Clip Header */}
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-16 h-4 bg-gradient-to-r from-gray-300 via-gray-100 to-gray-300 rounded-t-md border border-gray-400/80 shadow-xs flex items-center justify-center">
                      <div className="w-7 h-1.5 bg-gray-400 rounded-full" />
                    </div>

                    {/* Clipboard Green Accent Line */}
                    <div className="w-full h-1 bg-[#10793f] rounded-full mt-1 mb-2.5 opacity-80" />

                    {/* 4 Checklist Items matching reference mockup */}
                    <div className="flex flex-col gap-2">
                      {[
                        "Manage Symptoms",
                        "Control Risk Factors",
                        "Improve Energy",
                        "Support Long-term Health",
                      ].map((item) => (
                        <div
                          key={item}
                          className="flex items-center gap-2 p-1.5 rounded-lg bg-[#edf8f1]/60 hover:bg-[#edf8f1] transition-colors"
                        >
                          <div className="w-4 h-4 rounded-md flex items-center justify-center shrink-0 bg-[#10793f] text-white shadow-xs">
                            <Check className="w-2.5 h-2.5 stroke-[3.5]" />
                          </div>
                          <span className="text-[11px] sm:text-[12px] font-bold text-gray-800 leading-snug">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Verified Clinical Protocol tag */}
                    <div className="mt-2.5 pt-2 border-t border-emerald-100 flex items-center justify-between text-[10px] text-emerald-800 font-semibold">
                      <span className="flex items-center gap-1">
                        <ShieldCheck className="w-3 h-3 text-[#10793f]" />
                        <span>Clinical Nutrition</span>
                      </span>
                      <span className="text-emerald-700">100% Tailored</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* 2. SECTION: Our Disease Management Programs                    */}
        {/* Exact 6 cards matching reference mockup with 3D icons          */}
        {/* ============================================================== */}
        <section
          id="disease-programs"
          className="py-12 sm:py-16 bg-white relative"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            {/* Section Heading & Subtitle matching reference */}
            <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
              <h2
                className="font-extrabold text-[#0d2a1b] tracking-tight leading-tight"
                style={{ fontSize: "clamp(26px, 3.2vw, 38px)" }}
              >
                Our Disease Management Programs
              </h2>
              {/* Green accent underline matching reference */}
              <div className="w-14 h-1.5 bg-[#10793f] rounded-full mx-auto my-2.5" />
              <p className="text-gray-600 text-sm sm:text-base mt-2">
                Expert-led, personalized nutrition plans for a range of lifestyle and chronic conditions.
              </p>
            </div>

            {/* 6 Disease Program Cards Grid (3x2) - Horizontal Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {programs.map((prog) => (
                <div
                  key={prog.id}
                  className="group rounded-[24px] p-5 sm:p-6 flex items-center gap-4 sm:gap-5 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer border border-black/[0.04]"
                  style={{
                    backgroundColor: prog.cardBg,
                  }}
                  onClick={() => handleOpenProgramModal(prog)}
                >
                  {/* Left: 3D Illustration Icon */}
                  <div className="relative w-20 sm:w-24 h-20 sm:h-24 shrink-0 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                    <Image
                      src={prog.image}
                      alt={prog.title}
                      fill
                      unoptimized
                      className="object-contain"
                      style={{ mixBlendMode: "multiply" }}
                    />
                  </div>

                  {/* Right: Title, Description, and Learn More Pill Button */}
                  <div className="flex-1 flex flex-col items-start justify-center text-left">
                    <h3 className="text-base sm:text-[18px] font-bold text-gray-950 mb-1.5 leading-snug">
                      {prog.title}
                    </h3>
                    <p className="text-xs sm:text-[13px] text-gray-600 leading-relaxed mb-3.5">
                      {prog.description}
                    </p>
                    <button
                      type="button"
                      className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-[#10793f] bg-white text-[#10793f] text-xs font-semibold shadow-xs hover:bg-[#10793f] hover:text-white transition-all cursor-pointer"
                    >
                      <span>Learn More</span>
                      <span className="text-sm font-semibold leading-none">→</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* 3. SECTION: How Our Disease Management Plan Works              */}
        {/* 4 Steps to long-term health control                             */}
        {/* ============================================================== */}
        <section className="py-12 sm:py-16 bg-white border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
              <span className="text-xs uppercase font-extrabold tracking-wider text-[#10793f] bg-[#eaf7ef] px-3 py-1 rounded-full">
                Clinical Methodology
              </span>
              <h2
                className="font-extrabold text-gray-900 tracking-tight mt-2.5 leading-tight"
                style={{ fontSize: "clamp(22px, 3vw, 36px)" }}
              >
                How We Manage Your Health Condition
              </h2>
              <p className="text-gray-500 text-sm mt-2">
                A structured, clinical nutrition journey customized for measurable
                improvement.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {treatmentSteps.map((step, idx) => {
                const Icon = step.icon;
                return (
                  <div
                    key={step.step}
                    className="relative bg-[#f8fbf9] rounded-2xl p-5 border border-emerald-100/70 hover:border-[#10793f]/40 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      {/* Step Number + Icon */}
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-2xl font-black text-[#10793f]/30">
                          {step.step}
                        </span>
                        <div className="w-10 h-10 rounded-xl bg-white border border-emerald-100 flex items-center justify-center text-[#10793f] shadow-xs">
                          <Icon className="w-5 h-5 stroke-[2]" />
                        </div>
                      </div>

                      <h3 className="text-base font-bold text-gray-900 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-emerald-100/50 flex items-center gap-1.5 text-[11px] font-semibold text-[#10793f]">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Stage {idx + 1} of 4</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* 4. SECTION: Frequently Asked Questions                          */}
        {/* ============================================================== */}
        <section className="py-12 sm:py-16 bg-[#f7fbf8]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-10">
              <h2
                className="font-extrabold text-gray-900 tracking-tight"
                style={{ fontSize: "clamp(22px, 2.8vw, 34px)" }}
              >
                Frequently Asked Questions
              </h2>
              <p className="text-gray-500 text-sm mt-1.5">
                Clear answers regarding disease nutrition, medicine interaction, and
                results.
              </p>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, index) => {
                const isOpen = faqOpen === index;
                return (
                  <div
                    key={faq.q}
                    className="bg-white rounded-2xl border border-gray-200/80 overflow-hidden shadow-xs transition-all duration-200"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-bold text-gray-900 text-sm sm:text-base hover:text-[#10793f] transition-colors cursor-pointer"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-gray-500 shrink-0 transition-transform duration-200 ${
                          isOpen ? "rotate-180 text-[#10793f]" : ""
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-4 sm:px-5 pb-5 pt-0 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100">
                        <p className="mt-3">{faq.a}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* 5. BOTTOM SECTION: Take Control of Your Health Banner          */}
        {/* Exact design matching user's reference mockup                  */}
        {/* ============================================================== */}
        <section className="py-8 sm:py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div
              className="relative rounded-3xl p-6 sm:p-8 lg:p-10 border border-[#bce8cc] overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, #eaf8f0 0%, #f4fbf7 60%, #e2f5ea 100%)",
                boxShadow: "0 10px 30px -10px rgba(16, 121, 63, 0.12)",
              }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
                {/* Left Visual: Salad Bowl + Green Smoothie + Yellow Measuring Tape */}
                <div className="lg:col-span-5 flex items-center justify-center relative">
                  <div className="relative w-[240px] sm:w-[320px] lg:w-[360px] h-[200px] sm:h-[240px] lg:h-[270px] transition-transform duration-300 hover:scale-[1.02]">
                    <Image
                      src="/image/dm_salad_smoothie_tape.png"
                      alt="Personalized healthy disease management nutrition with smoothie and measuring tape"
                      fill
                      unoptimized
                      className="object-contain drop-shadow-md"
                    />
                  </div>
                </div>

                {/* Center Content: Headline, Subtitle, Button */}
                <div className="lg:col-span-4 text-center lg:text-left">
                  <h3
                    className="font-extrabold text-gray-950 tracking-tight leading-tight"
                    style={{ fontSize: "clamp(20px, 2.5vw, 32px)" }}
                  >
                    Take Control of Your Health with the Right Nutrition
                  </h3>

                  <p className="text-gray-600 text-xs sm:text-sm mt-2 sm:mt-2.5 leading-relaxed">
                    Consult our expert dietitian for a personalized disease management
                    plan.
                  </p>

                  <div className="mt-4 sm:mt-5">
                    <button
                      onClick={() => handleOpenModal("consultation")}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-white text-xs sm:text-sm transition-all duration-200 cursor-pointer shadow-md shadow-emerald-800/20 hover:scale-[1.02] active:scale-[0.99]"
                      style={{ background: "#10793f" }}
                      onMouseOver={(e) =>
                        (e.currentTarget.style.background = "#0c592e")
                      }
                      onMouseOut={(e) =>
                        (e.currentTarget.style.background = "#10793f")
                      }
                    >
                      <span>Book a Consultation</span>
                      <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                    </button>
                  </div>
                </div>

                {/* Right Checklist Items matching reference mockup */}
                <div className="lg:col-span-3 flex flex-col justify-center gap-3">
                  {[
                    "Personalized & Sustainable Plans",
                    "Scientifically Backed Guidance",
                    "Ongoing Support & Follow-ups",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2.5 p-2 rounded-xl bg-white/80 border border-emerald-100/80 shadow-xs"
                    >
                      <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 bg-[#10793f] text-white">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span className="text-xs sm:text-sm font-bold text-gray-800 leading-snug">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Program Detail Deep-Dive Modal */}
      {selectedProgram && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
            {/* Header */}
            <div
              className="p-5 sm:p-6 text-white relative"
              style={{
                background: "linear-gradient(135deg, #10793f 0%, #084323 100%)",
              }}
            >
              <button
                onClick={handleCloseProgramModal}
                className="absolute top-4 right-4 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-1.5 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-200">
                DietNexa Clinical Care
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold mt-1">
                {selectedProgram.title}
              </h3>
              <p className="text-xs sm:text-sm text-emerald-100/90 mt-1">
                {selectedProgram.tag}
              </p>
            </div>

            {/* Content Body */}
            <div className="p-5 sm:p-6 space-y-4 max-h-[70vh] overflow-y-auto">
              <div className="flex items-center gap-4 p-3 rounded-2xl bg-gray-50 border border-gray-100">
                <div className="relative w-16 h-16 shrink-0">
                  <Image
                    src={selectedProgram.image}
                    alt={selectedProgram.title}
                    fill
                    unoptimized
                    className="object-contain"
                  />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                    Target Condition
                  </h4>
                  <p className="text-xs font-semibold text-gray-800 mt-0.5">
                    {selectedProgram.idealFor}
                  </p>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-bold text-gray-900 mb-1.5">
                  Clinical Nutrition Protocol
                </h4>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {selectedProgram.overview}
                </p>
              </div>

              <div>
                <h4 className="text-sm font-bold text-gray-900 mb-2">
                  What Your Plan Includes:
                </h4>
                <div className="space-y-2">
                  {selectedProgram.keyPoints.map((point) => (
                    <div key={point} className="flex items-start gap-2 text-xs sm:text-sm text-gray-700">
                      <div className="w-4 h-4 rounded-full bg-[#10793f] text-white flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => {
                    handleCloseProgramModal();
                    handleOpenModal("consultation");
                  }}
                  className="w-full py-3 rounded-xl font-bold text-white text-sm bg-[#10793f] hover:bg-[#0c592e] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Consult Dietitian for {selectedProgram.title}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Consultation Modal */}
      <ConsultationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialType={modalType}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}
