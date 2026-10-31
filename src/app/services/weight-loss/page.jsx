"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ConsultationModal from "@/components/ConsultationModal";
import {
  Calendar,
  ArrowRight,
  Check,
  ClipboardCheck,
  Apple,
  HeartPulse,
  ShieldCheck,
  Utensils,
  TrendingUp,
  UserCheck,
  Activity,
  ChevronRight,
  ChevronDown,
  Star,
  Scale,
  CalendarDays,
  Target,
} from "lucide-react";

// Icons matching the reference design
const ScaleWeighIcon = ({ className = "w-7 h-7 text-[#10793f]" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect x="3.5" y="3.5" width="17" height="17" rx="3.5" />
    <path d="M8.5 7.5a3.5 3.5 0 0 1 7 0" />
    <line x1="12" y1="7.5" x2="12" y2="9.5" />
  </svg>
);

const RunnerFigureIcon = ({ className = "w-7 h-7 text-[#10793f]" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="17.5" cy="4" r="2" />
    <path d="M15 8.5l-3.5 3-3-1.5-4.5 3.5" />
    <path d="M11.5 11.5l2 4 3.5 1" />
    <path d="M13.5 15.5l-2.5 5" />
    <path d="M17 16.5l3-2.5" />
  </svg>
);

const LotusMetabolismIcon = ({ className = "w-7 h-7 text-[#10793f]" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M12 4c-1.5 3-2 6-2 9 0 2.5 1 4 2 4s2-1.5 2-4c0-3-.5-6-2-9z" />
    <path d="M10 13c-2.5-3-5.5-3.5-7-2 0 4 3 6.5 7 6" />
    <path d="M14 13c2.5-3 5.5-3.5 7-2 0 4-3 6.5-7 6" />
    <path d="M6 18c2 1 4 1 6 1s4 0 6-1" />
  </svg>
);

export default function WeightLossPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState("diet-plan");
  const [faqOpen, setFaqOpen] = useState(null);

  const handleOpenModal = (type = "diet-plan") => {
    setModalType(type);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const toggleFaq = (index) => {
    setFaqOpen(faqOpen === index ? null : index);
  };

  const benefits = [
    {
      title: "Sustainable\nWeight Loss",
      icon: ScaleWeighIcon,
    },
    {
      title: "Balanced\nNutrition",
      icon: Apple,
    },
    {
      title: "Improve\nFitness",
      icon: RunnerFigureIcon,
    },
    {
      title: "Boost\nMetabolism",
      icon: LotusMetabolismIcon,
    },
    {
      title: "Better\nEnergy Levels",
      icon: HeartPulse,
    },
    {
      title: "Long-Term\nHealth",
      icon: ShieldCheck,
    },
  ];

  const programFeatures = [
    {
      icon: Utensils,
      title: "Personalized Diet Plans",
      description: "Based on your body type, goals, and lifestyle.",
    },
    {
      icon: TrendingUp,
      title: "Progress Monitoring",
      description: "Track weight, health, and key metrics regularly.",
    },
    {
      icon: UserCheck,
      title: "Regular Dietitian Support",
      description: "Ongoing guidance, reviews, and adjustments.",
    },
    {
      icon: Activity,
      title: "Lifestyle & Activity Tips",
      description: "Practical habits to burn more calories.",
    },
  ];

  const steps = [
    {
      step: 1,
      title: "Assess",
      description: "Share your health details, current weight, and goals.",
      icon: ClipboardCheck,
    },
    {
      step: 2,
      title: "Get Your Plan",
      description: "Receive a personalized diet and lifestyle plan.",
      icon: Apple,
    },
    {
      step: 3,
      title: "Stay on Track",
      description: "Follow the plan with expert support and check-ins.",
      icon: Target,
    },
    {
      step: 4,
      title: "See Results",
      description: "Achieve healthy, sustainable weight loss.",
      icon: TrendingUp,
    },
  ];

  const faqs = [
    {
      q: "Will I have to starve or follow crash diets?",
      a: "Absolutely not. At DietNexa, we believe in balanced, nutrient-rich nutrition. You eat fulfilling, tasty meals crafted around your routine and culinary preferences without starvation or harsh calorie cuts.",
    },
    {
      q: "How soon can I expect visible results?",
      a: "Most clients notice improved energy and an average safe loss of 2 to 4 kg within the first month. Our focus is long-term sustainable fat loss (0.5–1 kg per week) so you never regain the weight.",
    },
    {
      q: "Are the diet plans vegetarian or culturally flexible?",
      a: "Yes! Every single meal plan is 100% personalized to your dietary choices (Vegetarian, Non-Vegetarian, Vegan, Jain, Eggetarian) and local kitchen ingredients.",
    },
    {
      q: "Can I manage PCOS, Thyroid, or Diabetes alongside weight loss?",
      a: "Yes. Our senior clinical dietitians specialize in metabolic and hormonal disorders. We tailor your macros and micronutrients specifically to correct hormonal resistance alongside weight loss.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col font-sans selection:bg-[#dcf2e3] selection:text-[#0b4728] relative overflow-x-hidden">
      {/* Sticky Navigation Bar */}
      <Navbar onOpenModal={handleOpenModal} />

      <main className="flex-1">
        {/* ============================================================== */}
        {/* 1. HERO SECTION: Weight Loss Management                        */}
        {/* Full-width seamless hero without extra padding/margins         */}
        {/* ============================================================== */}
        <section
          className="relative overflow-hidden pt-2 sm:pt-3 pb-0"
          style={{
            background:
              "linear-gradient(180deg, #fbfefc 0%, #f2faf4 55%, #e9f5ed 100%)",
          }}
        >
          {/* Subtle green leaves on the far left edge */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-16 sm:w-24 h-52 pointer-events-none opacity-50 z-0">
            <Image
              src="/image/Dewy Green Leafy Branch.png"
              alt=""
              fill
              unoptimized
              className="object-contain object-left"
            />
          </div>

          {/* Subtle green leaves on the far right edge */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-16 sm:w-24 h-52 pointer-events-none opacity-50 z-0">
            <Image
              src="/image/Glossy Green Leaf Branch.png"
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
              <span className="text-gray-900">
                Weight Loss Management
              </span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-end">
              
              {/* Left Column: Heading, Subtitle & Action Buttons */}
              <div className="lg:col-span-5 pb-4 sm:pb-6 z-10">
                <h1
                  className="font-extrabold text-gray-950 tracking-tight leading-[1.12]"
                  style={{ fontSize: "clamp(30px, 3.4vw, 46px)" }}
                >
                  Weight Loss
                  <br />
                  <span className="text-gray-950">Management</span>
                </h1>

                <p className="mt-2 sm:mt-2.5 text-gray-600 text-xs sm:text-sm leading-relaxed max-w-md">
                  A safe, science-backed and personalized weight loss program with
                  expert dietitian support, balanced nutrition, and healthy
                  lifestyle guidance.
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

              {/* Right Column: Hero Visuals (Woman, Checklist Stack, Food Dish) */}
              <div className="lg:col-span-7 relative flex items-end justify-center self-end h-[320px] sm:h-[350px] lg:h-[370px]">
                
                {/* Circular Mint Glow Backdrop centered behind the woman */}
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

                {/* Hero Woman Visual - Resting flush on the bottom */}
                <div className="relative w-[240px] sm:w-[280px] lg:w-[315px] h-[310px] sm:h-[340px] lg:h-[365px] z-10 flex items-end justify-center -mr-4 sm:-mr-5">
                  <Image
                    src="/image/Smiling Woman Measuring Waist in Green Sportswear.png"
                    alt="Smiling Woman Measuring Waist — Safe Sustainable Weight Loss"
                    fill
                    priority
                    unoptimized
                    className="object-contain object-bottom drop-shadow-md"
                  />
                </div>

                {/* Vertical Checklist Pill Stack to the right of the woman */}
                <div className="relative z-20 flex flex-col gap-2 mb-10 sm:mb-12 lg:mb-14 shrink-0">
                  {[
                    "Personalized Diet Plan",
                    "Healthy & Sustainable",
                    "No Crash Diets",
                    "Expert Support",
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
                <div
                  className="absolute bottom-0 right-0 sm:right-1 z-30 w-[150px] sm:w-[185px] lg:w-[210px] h-[110px] sm:h-[135px] lg:h-[155px] drop-shadow-md pointer-events-none"
                >
                  <Image
                    src="/image/Healthy Green Feast with Smoothie and Salad.png"
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
              {benefits.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="flex flex-col items-center justify-center text-center p-1.5 sm:p-2 transition-transform duration-200 hover:-translate-y-0.5 cursor-default"
                  >
                    <div className="h-7 sm:h-8 flex items-center justify-center mb-1 text-[#10793f]">
                      <Icon className="w-6 sm:w-6.5 h-6 sm:h-6.5 text-[#10793f]" />
                    </div>
                    <span className="text-[11px] sm:text-[12px] font-bold text-gray-900 leading-tight whitespace-pre-line">
                      {item.title}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* 3. OUR WEIGHT LOSS PROGRAM INCLUDES                            */}
        {/* ============================================================== */}
        <section className="py-10 sm:py-14 lg:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column: Salad Bowl Image with Floating Metric Badge */}
              <div className="lg:col-span-6 flex justify-center relative">
                
                {/* Soft backdrop circle */}
                <div
                  className="absolute w-[290px] sm:w-[380px] h-[290px] sm:h-[380px] rounded-full pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(215, 246, 227, 0.7) 0%, rgba(240, 252, 245, 0.4) 60%, transparent 75%)",
                    transform: "translate(-4%, 4%)",
                  }}
                />

                <div className="relative w-[300px] sm:w-[380px] md:w-[420px] h-[300px] sm:h-[380px] md:h-[420px] z-10">
                  {/* Decorative green leaves behind the bowl */}
                  <div className="absolute -top-8 -left-6 w-32 h-32 pointer-events-none opacity-40 -rotate-45 z-0">
                    <Image
                      src="/image/Dewy Green Leafy Branch.png"
                      alt=""
                      fill
                      unoptimized
                      className="object-contain"
                    />
                  </div>

                  <div className="absolute -bottom-6 -right-4 w-28 h-28 pointer-events-none opacity-30 rotate-45 z-0">
                    <Image
                      src="/image/Glossy Green Leaf Branch.png"
                      alt=""
                      fill
                      unoptimized
                      className="object-contain"
                    />
                  </div>

                  <Image
                    src="/image/Colorful Grilled Chicken Salad Bowl.png"
                    alt="Nutritious grilled chicken and avocado salad bowl"
                    fill
                    unoptimized
                    className="object-contain drop-shadow-xl relative z-10"
                  />

                  {/* Floating Metric Card: -6.5 kg in 8 Weeks */}
                  <div
                    className="absolute -bottom-2 right-2 sm:bottom-4 sm:right-4 z-20 bg-white/95 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-gray-100 shadow-xl"
                    style={{ minWidth: "165px" }}
                  >
                    <div className="text-2xl sm:text-3xl font-extrabold text-gray-950 tracking-tight">
                      -6.5 kg
                    </div>
                    <div className="text-xs sm:text-[13px] font-semibold text-gray-500 mt-0.5">
                      in 8 Weeks
                    </div>
                    {/* Green trend curve illustration */}
                    <div className="mt-2 flex items-center text-[#10793f]">
                      <svg
                        className="w-full h-7 overflow-visible"
                        viewBox="0 0 100 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2 24 C 25 24, 45 15, 70 12 C 85 10, 92 4, 98 2"
                          stroke="#10793f"
                          strokeWidth="3.2"
                          strokeLinecap="round"
                        />
                        <polygon
                          points="98,2 90,2 96,8"
                          fill="#10793f"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Program Features List */}
              <div className="lg:col-span-6">
                <h2
                  className="font-extrabold text-gray-950 tracking-tight mb-6 sm:mb-8"
                  style={{ fontSize: "clamp(26px, 3.2vw, 38px)" }}
                >
                  Our Weight Loss Program Includes
                </h2>

                <div className="space-y-5 sm:space-y-6">
                  {programFeatures.map((feat, idx) => {
                    const Icon = feat.icon;
                    return (
                      <div key={idx} className="flex items-start gap-4 sm:gap-5">
                        <div className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 bg-[#eaf6ee] text-[#10793f] mt-0.5">
                          <Icon className="w-6 h-6 stroke-[2]" />
                        </div>
                        <div>
                          <p className="text-[15px] sm:text-base leading-relaxed text-gray-700">
                            <span className="font-extrabold text-gray-950">
                              {feat.title}
                            </span>
                            {" — "}
                            <span className="text-gray-600">
                              {feat.description}
                            </span>
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* 4. HOW IT WORKS SECTION (Guided 4 Steps)                       */}
        {/* ============================================================== */}
        <section className="py-10 sm:py-14 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            
            {/* Outer Soft Mint Box */}
            <div
              className="rounded-3xl sm:rounded-[32px] p-6 sm:p-10 lg:p-12 border border-[#dfeed8]"
              style={{
                background: "#f4faf6",
              }}
            >
              {/* Section Header */}
              <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
                <h2
                  className="font-extrabold text-gray-950 tracking-tight"
                  style={{ fontSize: "clamp(26px, 3.2vw, 36px)" }}
                >
                  How It Works
                </h2>
                <p className="text-gray-600 text-sm sm:text-base mt-2">
                  A simple and guided process to help you achieve your weight loss goals.
                </p>
              </div>

              {/* 4 Steps Container */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-4 relative items-stretch">
                {steps.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.step} className="relative flex flex-col">
                      {/* Step Card */}
                      <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-7 flex flex-col items-center text-center h-full border border-gray-100 shadow-xs hover:shadow-md transition-all duration-200">
                        
                        {/* Number Badge & Icon Row */}
                        <div className="flex items-center justify-center gap-3 mb-4">
                          <span className="w-6 h-6 rounded-full bg-[#10793f] text-white text-xs font-bold flex items-center justify-center shadow-xs">
                            {item.step}
                          </span>
                          <div className="w-10 h-10 rounded-xl bg-[#eaf6ee] flex items-center justify-center text-[#10793f]">
                            <Icon className="w-5 h-5 stroke-[2]" />
                          </div>
                        </div>

                        {/* Title */}
                        <h3 className="font-extrabold text-gray-950 text-base sm:text-lg mb-2">
                          {item.title}
                        </h3>

                        {/* Description */}
                        <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                          {item.description}
                        </p>
                      </div>

                      {/* Desktop arrow connector */}
                      {idx < steps.length - 1 && (
                        <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-20 w-6 h-6 items-center justify-center text-gray-400">
                          <ChevronRight className="w-5 h-5" />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* 5. REAL RESULTS, REAL CHANGE (Transformation Testimonial)       */}
        {/* ============================================================== */}
        <section className="py-10 sm:py-14 lg:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            
            {/* Header */}
            <div className="text-center mb-8 sm:mb-12">
              <h2
                className="font-extrabold text-gray-950 tracking-tight"
                style={{ fontSize: "clamp(26px, 3.2vw, 38px)" }}
              >
                Real Results, Real Change
              </h2>
            </div>

            {/* Content Row: Before/After Cards + Quote + Metrics */}
            <div className="bg-[#fbfcfa] border border-gray-100 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xs">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
                
                {/* Left: Before & After Visual Cards */}
                <div className="lg:col-span-5 flex items-center justify-center gap-3 sm:gap-4">
                  
                  {/* Before Card */}
                  <div className="flex flex-col items-center">
                    <div className="relative w-[130px] sm:w-[155px] aspect-[4/5] rounded-2xl overflow-hidden shadow-sm border border-gray-200">
                      <Image
                        src="/image/priya_before_78kg.jpg"
                        alt="Priya Sharma before weight loss program"
                        fill
                        unoptimized
                        className="object-cover object-top"
                      />
                    </div>
                    {/* Before Badge */}
                    <div className="mt-3 px-4 py-1.5 rounded-xl bg-white border border-gray-200 shadow-xs text-center">
                      <div className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">
                        Before
                      </div>
                      <div className="text-sm font-extrabold text-gray-900">
                        78 kg
                      </div>
                    </div>
                  </div>

                  {/* Transition Arrow Badge */}
                  <div className="w-9 h-9 rounded-full bg-[#10793f] text-white flex items-center justify-center shadow-md shrink-0">
                    <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                  </div>

                  {/* After Card */}
                  <div className="flex flex-col items-center">
                    <div className="relative w-[130px] sm:w-[155px] aspect-[4/5] rounded-2xl overflow-hidden shadow-sm border-2 border-[#10793f]/40">
                      <Image
                        src="/image/priya_after_68kg.jpg"
                        alt="Priya Sharma after completing DietNexa weight loss program"
                        fill
                        unoptimized
                        className="object-cover object-top"
                      />
                    </div>
                    {/* After Badge */}
                    <div className="mt-3 px-4 py-1.5 rounded-xl bg-[#eaf6ee] border border-[#bce4cb] shadow-xs text-center">
                      <div className="text-[11px] font-bold text-[#10793f] uppercase tracking-wider">
                        After
                      </div>
                      <div className="text-sm font-extrabold text-[#10793f]">
                        68 kg
                      </div>
                    </div>
                  </div>

                </div>

                {/* Middle: Testimonial Quote */}
                <div className="lg:col-span-4 flex flex-col justify-center">
                  <div className="text-[#10793f] text-4xl sm:text-5xl font-serif leading-none mb-2">
                    “
                  </div>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed italic">
                    "I lost 10 kg in 12 weeks with DietNexa. The diet plan was easy
                    to follow, tasty, and perfectly suited to my routine. The
                    dietitian support kept me motivated throughout!"
                  </p>

                  <div className="mt-5 flex items-center justify-between">
                    <div>
                      <h4 className="font-extrabold text-gray-950 text-base">
                        Priya Sharma
                      </h4>
                      <div className="flex items-center gap-1 mt-1 text-[#f59e0b]">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current stroke-none" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right: Metric Stat Cards */}
                <div className="lg:col-span-3 flex flex-row lg:flex-col gap-4 justify-center">
                  {/* Metric 1 */}
                  <div className="flex-1 bg-white p-4 sm:p-5 rounded-2xl border border-gray-100 shadow-xs flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-xl bg-[#eaf6ee] flex items-center justify-center text-[#10793f] shrink-0">
                      <Scale className="w-6 h-6 stroke-[2]" />
                    </div>
                    <div>
                      <div className="text-xl sm:text-2xl font-black text-gray-950">
                        10 kg
                      </div>
                      <div className="text-xs font-semibold text-gray-500">
                        Weight Loss
                      </div>
                    </div>
                  </div>

                  {/* Metric 2 */}
                  <div className="flex-1 bg-white p-4 sm:p-5 rounded-2xl border border-gray-100 shadow-xs flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-xl bg-[#eaf6ee] flex items-center justify-center text-[#10793f] shrink-0">
                      <CalendarDays className="w-6 h-6 stroke-[2]" />
                    </div>
                    <div>
                      <div className="text-xl sm:text-2xl font-black text-gray-950">
                        12 Weeks
                      </div>
                      <div className="text-xs font-semibold text-gray-500">
                        Program Duration
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* ============================================================== */}
        {/* 6. BOTTOM CTA BANNER: Ready to Start Your Journey?             */}
        {/* ============================================================== */}
        <section className="py-8 sm:py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div
              className="relative rounded-3xl p-6 sm:p-8 lg:p-10 overflow-hidden border border-[#cfe9d5]"
              style={{
                background: "linear-gradient(135deg, #eaf6ee 0%, #f4faf6 50%, #e6f4ea 100%)",
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-center">
                
                {/* Left Scale and Apple Graphic */}
                <div className="md:col-span-4 flex justify-center md:justify-start">
                  <div className="relative w-[190px] sm:w-[220px] md:w-[240px] h-[150px] sm:h-[180px] drop-shadow-md">
                    <Image
                      src="/image/Green Scale, Apple, and Measuring Tape.png"
                      alt="DietNexa Weight Loss Scale and Green Apple"
                      fill
                      unoptimized
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Center Title and Subtitle */}
                <div className="md:col-span-5 text-center md:text-left">
                  <h3
                    className="font-extrabold text-gray-950 tracking-tight"
                    style={{ fontSize: "clamp(22px, 2.5vw, 32px)" }}
                  >
                    Ready to Start Your Weight Loss Journey?
                  </h3>
                  <p className="mt-2 text-gray-600 text-sm sm:text-base leading-relaxed">
                    Get a personalized plan from our expert dietitians and move
                    towards a healthier, fitter you.
                  </p>
                </div>

                {/* Right Button */}
                <div className="md:col-span-3 flex justify-center md:justify-end">
                  <button
                    onClick={() => handleOpenModal("consultation")}
                    className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-xl font-bold text-white text-[15px] sm:text-base shadow-lg shadow-emerald-800/20 transition-all duration-200 cursor-pointer hover:scale-[1.02] active:scale-[0.99] whitespace-nowrap"
                    style={{ background: "#10793f" }}
                    onMouseOver={(e) => (e.currentTarget.style.background = "#0c592e")}
                    onMouseOut={(e) => (e.currentTarget.style.background = "#10793f")}
                  >
                    <span>Book a Consultation</span>
                    <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                  </button>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* 7. FREQUENTLY ASKED QUESTIONS ACCORDION                         */}
        {/* ============================================================== */}
        <section className="py-10 sm:py-14 bg-gradient-to-b from-white to-[#f9fdfa] border-t border-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-[#10793f] bg-[#eaf6ee] px-3.5 py-1.5 rounded-full">
                Common Questions
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-950 tracking-tight mt-3">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-500 text-sm sm:text-base mt-2">
                Have questions before starting? We have answers.
              </p>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, index) => {
                const isOpen = faqOpen === index;
                return (
                  <div
                    key={index}
                    className="rounded-2xl border border-gray-200/80 bg-white overflow-hidden transition-all duration-200 shadow-xs"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full flex items-center justify-between p-4 sm:p-5 text-left font-bold text-gray-900 hover:text-[#10793f] transition-colors cursor-pointer"
                    >
                      <span className="text-base sm:text-lg pr-4">{faq.q}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-gray-400 shrink-0 transition-transform duration-200 ${
                          isOpen ? "rotate-180 text-[#10793f]" : ""
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-4 sm:px-5 pb-4 sm:pb-5 text-sm sm:text-base text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Consultation / Diet Plan Modal */}
      <ConsultationModal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        initialType={modalType}
      />
    </div>
  );
}
