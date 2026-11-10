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
    image: "/image/dm-diabetes-glucometer.webp",
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
    image: "/image/dm-bp-heart-monitor.webp",
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
    image: "/image/dm-thyroid-gland.webp",
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
    image: "/image/dm-pcos-uterus.webp",
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
    image: "/image/dm-cholesterol-artery.webp",
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
    image: "/image/dm-medical-shield.webp",
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

  const benefits = [
    { title: "Condition-Specific\nDiet Plans", icon: Target },
    { title: "Blood Sugar\nControl", icon: Activity },
    { title: "Healthy BP\nLevels", icon: Heart },
    { title: "Hormone &\nPCOS Balance", icon: Sparkles },
    { title: "Progress\nMonitoring", icon: BarChart3 },
    { title: "Expert Dietitian\nSupport", icon: Headphones },
  ];

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
        {/* 1. HERO SECTION: Disease Management (Exact Weight-Loss Type)   */}
        {/* Full-width seamless hero without extra padding/margins         */}
        {/* ============================================================== */}
        <section className="relative overflow-hidden pt-2 sm:pt-3 pb-0">
          {/* Serene Greenhouse Bokeh Background — Spreads edge-to-edge */}
          <div className="absolute inset-0 z-0 pointer-events-none select-none">
            <Image
              src="/image/serene-greenhouse-bokeh-background.webp"
              alt="Serene Greenhouse Setting"
              fill
              priority
              unoptimized
              className="object-cover object-center"
            />
            {/* Directional gradient wash: preserves maximum text readability on left while letting lush greenhouse bokeh show beautifully across the right */}
            <div
              className="absolute inset-0 hidden md:block"
              style={{
                background:
                  "linear-gradient(90deg, rgba(243, 250, 245, 0.96) 0%, rgba(247, 252, 249, 0.90) 38%, rgba(240, 250, 243, 0.40) 68%, rgba(240, 250, 243, 0.15) 100%)",
              }}
            />
            <div
              className="absolute inset-0 md:hidden"
              style={{
                background:
                  "linear-gradient(180deg, rgba(243, 250, 245, 0.95) 0%, rgba(247, 252, 249, 0.88) 45%, rgba(240, 250, 243, 0.35) 100%)",
              }}
            />
          </div>

          {/* Subtle green leaves on the far left edge */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-16 sm:w-24 h-52 pointer-events-none opacity-40 z-0">
            <Image
              src="/image/dewy-green-leafy-branch.webp"
              alt=""
              fill
              unoptimized
              className="object-contain object-left"
            />
          </div>

          {/* Subtle green leaves on the far right edge */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-16 sm:w-24 h-52 pointer-events-none opacity-40 z-0">
            <Image
              src="/image/glossy-green-leaf-branch.webp"
              alt=""
              fill
              unoptimized
              className="object-contain object-right"
            />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
            {/* Breadcrumb Navigation */}
            <nav className="flex items-center gap-1.5 text-xs font-semibold mb-2">
              <Link
                href="/#services"
                className="text-gray-500 hover:text-[#10793f] transition-colors"
              >
                Services
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
              <span className="text-gray-900">Disease Management</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-end">
              {/* Left Column: Heading, Subtitle & Action Buttons */}
              <div className="lg:col-span-5 pb-4 sm:pb-6 z-10">
                <h1
                  className="font-extrabold text-gray-950 tracking-tight leading-[1.12]"
                  style={{ fontSize: "clamp(30px, 3.4vw, 46px)" }}
                >
                  Disease
                  <br />
                  <span className="text-gray-950">Management</span>
                </h1>

                <p className="mt-2 sm:mt-2.5 text-gray-600 text-xs sm:text-sm leading-relaxed max-w-md">
                  Evidence-based diet plans and continuous guidance to help you manage
                  chronic conditions, improve your health and live a more active life.
                </p>

                {/* CTA Buttons */}
                <div className="mt-4 sm:mt-5 flex flex-wrap items-center gap-2.5 sm:gap-3">
                  <button
                    onClick={() => handleOpenModal("diet-plan")}
                    className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 rounded-xl font-bold text-white text-xs sm:text-sm transition-all duration-200 cursor-pointer shadow-md shadow-emerald-700/20 hover:scale-[1.02] active:scale-[0.99]"
                    style={{ background: "#10793f" }}
                    onMouseOver={(e) => (e.currentTarget.style.background = "#0c592e")}
                    onMouseOut={(e) => (e.currentTarget.style.background = "#10793f")}
                  >
                    <span>Start Your Plan</span>
                    <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                  </button>

                  <button
                    onClick={() => handleOpenModal("consultation")}
                    className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl font-bold text-gray-800 text-xs sm:text-sm bg-white border border-gray-300 hover:border-gray-400 hover:bg-gray-50/90 transition-all duration-200 cursor-pointer shadow-xs hover:scale-[1.01]"
                  >
                    <Calendar className="w-3.5 h-3.5 text-gray-700" />
                    <span>Book a Consultation</span>
                  </button>
                </div>
              </div>

              {/* Right Column: Hero Visuals (Doctor, Checklist Stack, Food Dish) */}
              <div className="lg:col-span-7 relative flex items-end justify-center self-end h-[320px] sm:h-[350px] lg:h-[370px]">
                {/* Circular Mint Glow Backdrop centered behind the doctor */}
                <div
                  className="absolute w-[300px] sm:w-[340px] lg:w-[370px] h-[300px] sm:h-[340px] lg:h-[370px] rounded-full pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(186, 238, 206, 0.85) 0%, rgba(214, 246, 228, 0.5) 50%, rgba(235, 252, 242, 0) 70%)",
                    left: "26%",
                    bottom: "-5px",
                    transform: "translateX(-20%)",
                  }}
                />

                {/* Hero Doctor Visual - Resting flush on the bottom */}
                <div className="relative w-[240px] sm:w-[280px] lg:w-[315px] h-[310px] sm:h-[340px] lg:h-[365px] z-10 flex items-end justify-center -mr-4 sm:-mr-5">
                  <Image
                    src="/image/hero-section-smiling-doctor-in-green-scrubs.webp"
                    alt="Smiling Doctor in Green Scrubs — Disease Management"
                    fill
                    priority
                    unoptimized
                    className="object-contain object-bottom drop-shadow-md"
                  />
                </div>

                {/* Vertical Checklist Pill Stack to the right of the doctor */}
                <div className="relative z-20 flex flex-col gap-2 mb-10 sm:mb-12 lg:mb-14 shrink-0">
                  {[
                    "Manage Symptoms",
                    "Control Risk Factors",
                    "Improve Energy",
                    "Support Long-term Health",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 px-3 sm:px-3.5 py-1.5 bg-white rounded-xl sm:rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-200"
                    >
                      <div className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 bg-[#10793f] text-white">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                      <span className="text-[11px] sm:text-[12px] font-bold text-gray-800 whitespace-nowrap">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Bottom Right Foreground Salad & Green Smoothie */}
                <div className="absolute bottom-0 right-0 sm:right-1 z-30 w-[150px] sm:w-[185px] lg:w-[210px] h-[110px] sm:h-[135px] lg:h-[155px] drop-shadow-md pointer-events-none">
                  <Image
                    src="/image/healthy-green-feast-with-smoothie-and-salad.webp"
                    alt="Fresh healthy salad and detox green smoothie"
                    fill
                    unoptimized
                    className="object-contain object-bottom-right"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* 2. BENEFITS / HIGHLIGHTS BAR (6 Clean Icons)                   */}
        {/* Direct attachment below hero without empty space               */}
        {/* ============================================================== */}
        <section
          className="py-3 sm:py-3.5 border-y border-[#dcf0e2]"
          style={{ background: "#f3f9f3" }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3">
              {benefits.map((b) => {
                const Icon = b.icon;
                return (
                  <div
                    key={b.title}
                    className="flex items-center gap-2.5 p-2 rounded-xl bg-white/70 border border-[#e2f1e6]"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#edf8f1] flex items-center justify-center text-[#10793f] shrink-0">
                      <Icon className="w-4.5 h-4.5" />
                    </div>
                    <span className="text-xs font-bold text-gray-800 leading-tight whitespace-pre-line">
                      {b.title}
                    </span>
                  </div>
                );
              })}
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
                      src="/image/dm-salad-smoothie-tape.webp"
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
