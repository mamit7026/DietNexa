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
  ChevronRight,
  ChevronDown,
  Zap,
  ShieldCheck,
  Scale,
  Sparkles,
  Moon,
  Brain,
  Heart,
  Apple,
  Dumbbell,
  ClipboardList,
  TrendingUp,
  Target,
  Play,
  Flower2,
  Smile,
  Shield,
  Utensils,
  Leaf,
  Activity,
} from "lucide-react";

// Custom SVG Icons matching exact reference design
const LeafBadgeIcon = ({ className = "w-4 h-4 text-[#10793f]" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 0 0 8 20C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z" />
  </svg>
);

const LotusDigestionIcon = ({ className = "w-5 h-5 text-[#10793f]" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.9"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M12 4c-1.5 3-3.8 5.5-6.5 7 2.7 1.5 5 4 6.5 7 1.5-3 3.8-5.5 6.5-7-2.7-1.5-5-4-6.5-7z" />
    <path d="M12 18c-3 2.5-7 3-10 2 1-3 2.8-5 6-6" />
    <path d="M12 18c3 2.5 7 3 10 2-1-3-2.8-5-6-6" />
  </svg>
);

const MoonSleepIcon = ({ className = "w-5 h-5 text-[#10793f]" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.9"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    <path d="M19 4v3" />
    <path d="M20.5 5.5h-3" />
  </svg>
);

const GutHealthIcon = ({ className = "w-5 h-5 text-[#10793f]" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.9"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M9 4.5c0 2 6 2 6 5.5s-6 3.5-6 6 6 2.5 6 4.5" />
    <circle cx="9" cy="4.5" r="1.5" fill="currentColor" />
    <circle cx="15" cy="20.5" r="1.5" fill="currentColor" />
  </svg>
);

const BedSleepIcon = ({ className = "w-5 h-5 text-[#10793f]" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.9"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M2 4v16" />
    <path d="M2 10h18a2 2 0 0 1 2 2v8" />
    <path d="M2 17h20" />
    <circle cx="7" cy="7" r="2" />
    <path d="M17 3l3 0-3 3 3 0" strokeWidth="1.6" />
  </svg>
);

export default function GeneralWellnessPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState("consultation");
  const [faqOpen, setFaqOpen] = useState(0);

  const handleOpenConsultation = () => {
    setModalType("consultation");
    setModalOpen(true);
  };

  const handleOpenDietPlan = () => {
    setModalType("diet-plan");
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const toggleFaq = (idx) => {
    setFaqOpen(faqOpen === idx ? null : idx);
  };

  // 7 Quick Benefit Items below Hero
  const quickBenefits = [
    { title: "More", sub: "Energy", icon: Zap },
    { title: "Stronger", sub: "Immunity", icon: ShieldCheck },
    { title: "Healthy", sub: "Weight", icon: Scale },
    { title: "Better", sub: "Digestion", icon: LotusDigestionIcon },
    { title: "Quality", sub: "Sleep", icon: MoonSleepIcon },
    { title: "Lower", sub: "Stress", icon: Brain },
    { title: "Long-Term", sub: "Wellness", icon: Heart },
  ];

  // Section 2: Why General Wellness Matters Bullet Points
  const whyMattersPoints = [
    "Maintain a healthy weight naturally",
    "Improve energy and daily productivity",
    "Support immunity and overall health",
    "Manage stress and sleep better",
    "Build sustainable, long-term habits",
  ];

  // Section 2: Our General Wellness Services (2x2 Grid)
  const wellnessServices = [
    {
      title: "Personalized Diet Plans",
      desc: "Nutrition tailored to your lifestyle, goals and health needs",
      icon: Apple,
    },
    {
      title: "Lifestyle & Habit Coaching",
      desc: "Build simple, healthy and sustainable routines",
      icon: Heart,
    },
    {
      title: "Nutrition for Active Living",
      desc: "Balanced diet for daily fitness and an active lifestyle",
      icon: Dumbbell,
    },
    {
      title: "Preventive Health Nutrition",
      desc: "Strengthen immunity and reduce future health risks",
      icon: ShieldCheck,
    },
  ];

  // Section 3: 6 Circular Benefits
  const benefitsList = [
    { label: "Higher\nEnergy Levels", icon: Zap },
    { label: "Better\nImmunity", icon: ShieldCheck },
    { label: "Improved\nDigestion", icon: GutHealthIcon },
    { label: "Balanced\nMood", icon: Brain },
    { label: "Restful\nSleep", icon: BedSleepIcon },
    { label: "Overall\nWell-Being", icon: Heart },
  ];

  // Section 4: 4 Simple Process Steps
  const processSteps = [
    {
      step: 1,
      title: "Consultation",
      desc: "Discuss your goals, lifestyle and health needs",
      icon: ClipboardList,
    },
    {
      step: 2,
      title: "Personalized Plan",
      desc: "Get a customized nutrition and wellness plan",
      icon: LotusDigestionIcon,
    },
    {
      step: 3,
      title: "Track Progress",
      desc: "Monitor your results and make adjustments",
      icon: TrendingUp,
    },
    {
      step: 4,
      title: "Stay on Track",
      desc: "Ongoing support for long-term success",
      icon: Target,
    },
  ];

  // Section 5: Health & Wellness Insights
  const insights = [
    {
      title: "Balanced Diet: The Key to Everyday Wellness",
      desc: "Learn how a balanced diet improves energy, immunity and overall health.",
      image: "/image/vibrant-garden-fresh-feta-salad.webp",
      slug: "balanced-diet-everyday-wellness",
    },
    {
      title: "Simple Daily Habits for Better Health",
      desc: "Easy, science-backed habits to stay active, fit and stress-free.",
      image: "/image/peaceful-park-stretching-portrait.webp",
      slug: "simple-daily-habits-better-health",
    },
    {
      title: "Foods That Naturally Boost Immunity",
      desc: "Add these nutrient-rich foods to support a stronger immune system.",
      image: "/image/vibrant-berry-nut-oatmeal-bowl.webp",
      slug: "foods-naturally-boost-immunity",
    },
  ];

  // Section 6: Frequently Asked Questions
  const faqs = [
    {
      q: "What is a General Wellness nutrition plan?",
      a: "A General Wellness nutrition plan focuses on balanced, wholesome eating to optimize energy, strengthen immunity, improve digestion, and support long-term physical and mental vitality. It is completely customized to your personal lifestyle, routine, and dietary preferences.",
    },
    {
      q: "Who can benefit from this program?",
      a: "Anyone looking to improve their daily energy, build sustainable healthy eating habits, boost immunity, maintain a healthy weight, manage daily stress, or establish preventive nutritional wellness can benefit from this program.",
    },
    {
      q: "Is the diet plan personalized?",
      a: "Yes, 100%. Our qualified clinical dietitians assess your daily routine, medical history, lifestyle, dietary preferences, food allergies, and wellness goals to build a practical, flexible meal plan made just for you.",
    },
    {
      q: "Will I get ongoing support from a dietitian?",
      a: "Absolutely. You will receive regular check-ins, follow-up consultations, WhatsApp/chat support, progress monitoring, and continuous meal plan adjustments throughout your wellness journey.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col font-sans selection:bg-[#dcf2e3] selection:text-[#0b4728] relative overflow-x-hidden">
      {/* Sticky Navigation Bar */}
      <Navbar onOpenModal={handleOpenConsultation} />

      <main className="flex-1">
        {/* ============================================================== */}
        {/* 1. HERO SECTION: General Wellness                             */}
        {/* Full-width seamless hero matching other DietNexa service pages  */}
        {/* ============================================================== */}
        <section className="relative overflow-hidden pt-2 sm:pt-3 pb-0">
          {/* Sunlit Green Park Bokeh Background — Spreads edge-to-edge */}
          <div className="absolute inset-0 z-0 pointer-events-none select-none">
            <Image
              src="/image/sunlit-green-park-bokeh.webp"
              alt="Sunlit Green Park Wellness Background"
              fill
              priority
              unoptimized
              className="object-cover object-center"
            />
            {/* Directional gradient wash: preserves maximum text readability on left while letting visuals pop */}
            <div
              className="absolute inset-0 hidden md:block"
              style={{
                background:
                  "linear-gradient(90deg, rgba(255, 255, 255, 0.96) 0%, rgba(255, 255, 255, 0.90) 36%, rgba(240, 250, 245, 0.40) 65%, rgba(240, 250, 245, 0.10) 100%)",
              }}
            />
            <div
              className="absolute inset-0 md:hidden"
              style={{
                background:
                  "linear-gradient(180deg, rgba(255, 255, 255, 0.96) 0%, rgba(255, 255, 255, 0.90) 48%, rgba(240, 250, 245, 0.35) 100%)",
              }}
            />
          </div>

          {/* Leaf accents on edges */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-16 sm:w-24 h-52 pointer-events-none opacity-40 z-0">
            <Image
              src="/image/dewy-green-leafy-branch.webp"
              alt=""
              fill
              unoptimized
              className="object-contain object-left"
            />
          </div>
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
              <span className="text-gray-900">General Wellness</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-end">
              {/* Left Column: Pill Badge, Heading, Subtitle & Action Buttons */}
              <div className="lg:col-span-5 pb-4 sm:pb-6 z-10">
                {/* Pill Badge matching reference design */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#e8f7ee] border border-[#cbeed7] text-[#10793f] text-xs font-bold mb-2.5 shadow-2xs">
                  <div className="w-4 h-4 rounded-full bg-[#10793f]/15 flex items-center justify-center shrink-0">
                    <LeafBadgeIcon className="w-3 h-3 text-[#10793f]" />
                  </div>
                  <span>General Wellness</span>
                </div>

                {/* Main Heading */}
                <h1
                  className="font-extrabold text-gray-950 tracking-tight leading-[1.12]"
                  style={{ fontSize: "clamp(30px, 3.4vw, 46px)" }}
                >
                  Holistic Nutrition for
                  <br />
                  <span className="text-[#10793f]">Your Overall Wellness</span>
                </h1>

                {/* Subtitle */}
                <p className="mt-2 sm:mt-2.5 text-gray-600 text-xs sm:text-sm leading-relaxed max-w-md">
                  Build healthier habits, boost energy, strengthen immunity and feel your best every day with personalized, science-backed nutrition guidance from expert dietitians.
                </p>

                {/* Action Buttons */}
                <div className="mt-4 sm:mt-5 flex flex-wrap items-center gap-2.5 sm:gap-3">
                  <button
                    onClick={handleOpenConsultation}
                    className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 rounded-full font-bold text-white text-xs sm:text-sm transition-all duration-200 cursor-pointer shadow-md shadow-emerald-700/20 hover:scale-[1.02] active:scale-[0.99]"
                    style={{ background: "#10793f" }}
                    onMouseOver={(e) =>
                      (e.currentTarget.style.background = "#0c592e")
                    }
                    onMouseOut={(e) =>
                      (e.currentTarget.style.background = "#10793f")
                    }
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Book a Consultation</span>
                    <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                  </button>

                  <button
                    onClick={handleOpenDietPlan}
                    className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 rounded-full font-bold text-gray-800 text-xs sm:text-sm bg-white border border-gray-300 hover:border-gray-400 hover:bg-gray-50/90 transition-all duration-200 cursor-pointer shadow-xs hover:scale-[1.01]"
                  >
                    <Play className="w-3 h-3 text-[#10793f] fill-[#10793f]" />
                    <span>Explore Plans</span>
                  </button>
                </div>

                {/* Trust Badges */}
                <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-gray-700">
                  <div className="flex items-center gap-1.5 font-medium">
                    <Check className="w-3.5 h-3.5 text-[#10793f] stroke-[2.5]" />
                    <span>Personalized Guidance</span>
                  </div>
                  <div className="flex items-center gap-1.5 font-medium">
                    <Check className="w-3.5 h-3.5 text-[#10793f] stroke-[2.5]" />
                    <span>Evidence-Based Plans</span>
                  </div>
                  <div className="flex items-center gap-1.5 font-medium">
                    <Check className="w-3.5 h-3.5 text-[#10793f] stroke-[2.5]" />
                    <span>Long-Term Wellness</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Hero Visual — Large Blissful Woman Only */}
              <div className="lg:col-span-7 relative flex items-end justify-center self-end h-[330px] sm:h-[365px] lg:h-[390px]">
                {/* Main Hero Visual: Blissful Woman in Open Embrace — Large & Prominent */}
                <div className="relative w-[500px] sm:w-[640px] lg:w-[750px] h-[325px] sm:h-[365px] lg:h-[390px] z-10 flex items-end justify-center pointer-events-none">
                  <Image
                    src="/image/blissful-woman-in-open-embrace.webp"
                    alt="Blissful Woman in Open Embrace — Holistic General Wellness Nutrition"
                    fill
                    priority
                    unoptimized
                    className="object-contain object-bottom drop-shadow-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* 2. 7 QUICK BENEFITS BAR                                         */}
        {/* Single white rounded container floating seamlessly below Hero   */}
        {/* ============================================================== */}
        <section className="py-4 sm:py-6 bg-white border-y border-gray-100/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="bg-white rounded-2xl sm:rounded-full border border-gray-200/90 py-3 sm:py-4 px-4 sm:px-6 shadow-sm">
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-4 items-center">
                {quickBenefits.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="flex items-center sm:flex-col justify-center gap-2.5 sm:gap-1.5 text-left sm:text-center px-1"
                    >
                      <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#e8f7ee] border border-[#cbeed7] flex items-center justify-center text-[#10793f] shrink-0 shadow-2xs">
                        <Icon className="w-5 h-5 text-[#10793f]" />
                      </div>
                      <div>
                        <div className="text-[11px] sm:text-xs text-gray-500 font-medium leading-none">
                          {item.title}
                        </div>
                        <div className="text-xs sm:text-sm font-bold text-gray-900 leading-tight">
                          {item.sub}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* 3. WHY GENERAL WELLNESS MATTERS & OUR SERVICES                 */}
        {/* 3-Column Layout: Left List + Center Salad Bowl + Right Cards   */}
        {/* ============================================================== */}
        <section className="py-10 sm:py-16 bg-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
              {/* Left Column: Why General Wellness Matters */}
              <div className="lg:col-span-4 space-y-4 sm:space-y-5">
                <div className="space-y-1.5">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-950 tracking-tight">
                    Why General Wellness Matters?
                  </h2>
                  <div className="w-12 h-1 bg-[#10793f] rounded-full" />
                </div>

                <p className="text-sm text-gray-600 leading-relaxed">
                  Good nutrition is the foundation of a healthy, active and balanced life. Our General Wellness program helps you improve your daily nutrition, build healthy habits and support overall physical and mental well-being.
                </p>

                {/* 5 Checkmarks with Green Badges */}
                <div className="space-y-2.5 pt-1">
                  {whyMattersPoints.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-[#10793f] flex items-center justify-center text-white shrink-0 mt-0.5 shadow-2xs">
                        <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                      </div>
                      <span className="text-xs sm:text-sm text-gray-800 font-medium leading-snug">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Center Column: Circular Healthy Salad Bowl */}
              <div className="lg:col-span-4 flex justify-center py-4 lg:py-0">
                <div className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] lg:w-[340px] lg:h-[340px] flex items-center justify-center">
                  {/* Subtle Mint Glow Backdrop */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#e8f7ee] via-[#f1fbf4] to-[#fcfefd] shadow-inner border border-[#d6f0df]" />
                  <div className="absolute inset-3 rounded-full border border-dashed border-[#10793f]/30" />

                  {/* High Quality Salad Bowl Image */}
                  <div className="relative w-[92%] h-[92%] rounded-full overflow-hidden shadow-2xl">
                    <Image
                      src="/image/colorful-grilled-chicken-salad-bowl.webp"
                      alt="Nutrient-dense balanced wellness salad bowl"
                      fill
                      className="object-contain p-1"
                      sizes="340px"
                    />
                  </div>
                </div>
              </div>

              {/* Right Column: Our General Wellness Services (2x2 Grid) */}
              <div className="lg:col-span-4 space-y-3.5">
                <div className="space-y-1 mb-2">
                  <h3 className="text-xl sm:text-2xl font-extrabold text-gray-950 tracking-tight">
                    Our General Wellness Services
                  </h3>
                  <div className="w-12 h-1 bg-[#10793f] rounded-full" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {wellnessServices.map((srv, idx) => {
                    const Icon = srv.icon;
                    return (
                      <div
                        key={idx}
                        className="bg-white rounded-2xl p-4 border border-gray-200/80 shadow-2xs hover:shadow-md hover:border-[#cbeed7] transition-all duration-200 group flex flex-col justify-between"
                      >
                        <div>
                          <div className="w-10 h-10 rounded-xl bg-[#e8f7ee] border border-[#cbeed7] flex items-center justify-center text-[#10793f] mb-2.5 group-hover:scale-105 transition-transform">
                            <Icon className="w-5 h-5" />
                          </div>
                          <h4 className="text-sm font-bold text-gray-950 mb-1 leading-snug">
                            {srv.title}
                          </h4>
                          <p className="text-xs text-gray-600 leading-relaxed">
                            {srv.desc}
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
        {/* 4. KEY BENEFITS OF A GENERAL WELLNESS PROGRAM                  */}
        {/* Mint Gradient Card with Meditating Model + 6 Circular Badges  */}
        {/* ============================================================== */}
        <section className="py-6 sm:py-10 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="relative rounded-3xl bg-gradient-to-r from-[#eaf6ef] via-[#f2faf5] to-[#f8fdf9] border border-[#d6f0df] p-6 sm:p-8 md:p-10 shadow-sm overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
                {/* Left Visual: Meditating Woman Cutout in Lotus Pose */}
                <div className="lg:col-span-4 flex justify-center relative">
                  <div className="relative w-full max-w-[280px] h-[220px] sm:h-[260px]">
                    <Image
                      src="/image/meditating-woman-in-lotus-pose.webp"
                      alt="Woman meditating in peaceful lotus pose for holistic wellness"
                      fill
                      className="object-contain object-bottom drop-shadow-lg"
                      sizes="280px"
                    />
                  </div>
                </div>

                {/* Right Content: Title + 6 Circular Icon Badges */}
                <div className="lg:col-span-8 space-y-5">
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-950 tracking-tight leading-tight">
                      Key Benefits of a General
                      <br />
                      Wellness Program
                    </h2>
                  </div>

                  {/* 6 Circular Items */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
                    {benefitsList.map((ben, idx) => {
                      const Icon = ben.icon;
                      return (
                        <div
                          key={idx}
                          className="flex flex-col items-center text-center p-3 rounded-2xl bg-white/95 border border-[#d6f0df] shadow-2xs hover:shadow-sm hover:border-[#10793f]/40 transition-all duration-200"
                        >
                          <div className="w-11 h-11 rounded-full bg-[#e8f7ee] border border-[#cbeed7] flex items-center justify-center text-[#10793f] mb-2 shadow-2xs">
                            <Icon className="w-5 h-5 text-[#10793f]" />
                          </div>
                          <span className="text-xs font-bold text-gray-900 leading-tight whitespace-pre-line">
                            {ben.label}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* 5. OUR SIMPLE & EFFECTIVE PROCESS & EXPERT SUPPORT             */}
        {/* Left: 4 Step Flow | Right: Expert Dietitian Card with Doctor  */}
        {/* ============================================================== */}
        <section className="py-10 sm:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              {/* Left Column: Process Steps */}
              <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-950 tracking-tight">
                    Our Simple & Effective Process
                  </h2>
                  <div className="w-12 h-1 bg-[#10793f] rounded-full mt-2" />
                </div>

                {/* 4 Process Items in Horizontal Chain */}
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 sm:gap-2 relative">
                  {processSteps.map((stp, idx) => {
                    const Icon = stp.icon;
                    return (
                      <div
                        key={idx}
                        className="relative flex flex-col items-center sm:items-start text-center sm:text-left pr-2"
                      >
                        {/* Step Icon */}
                        <div className="w-12 h-12 rounded-2xl bg-[#e8f7ee] border border-[#cbeed7] flex items-center justify-center text-[#10793f] mb-3 shadow-2xs">
                          <Icon className="w-6 h-6" />
                        </div>

                        {/* Title & Desc */}
                        <h4 className="text-sm font-bold text-gray-950 mb-1">
                          {stp.title}
                        </h4>
                        <p className="text-xs text-gray-600 leading-relaxed">
                          {stp.desc}
                        </p>

                        {/* Arrow indicator between items (desktop) */}
                        {idx < processSteps.length - 1 && (
                          <div className="hidden sm:block absolute top-4 -right-1 text-gray-400">
                            <ArrowRight className="w-4 h-4 text-gray-400" />
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Right Column: Expert Dietitian Card with Doctor Portrait Cutout */}
              <div className="lg:col-span-5">
                <div className="relative h-full min-h-[220px] rounded-3xl bg-[#dff3e5] border border-[#c3ebd0] p-6 sm:p-7 overflow-hidden flex items-center justify-between shadow-sm">
                  {/* Text & Play Action */}
                  <div className="z-10 max-w-[55%] space-y-4">
                    <h3 className="text-xl sm:text-2xl font-extrabold text-gray-950 leading-tight">
                      Expert Dietitian Support for Your Wellness
                    </h3>

                    <button
                      onClick={handleOpenConsultation}
                      className="w-11 h-11 rounded-full bg-[#10793f] hover:bg-[#0d6333] text-white flex items-center justify-center shadow-md hover:scale-105 transition-all cursor-pointer"
                      title="Book consultation"
                    >
                      <Play className="w-4 h-4 fill-current ml-0.5" />
                    </button>
                  </div>

                  {/* Doctor Cutout Overlap */}
                  <div className="absolute right-0 bottom-0 top-2 w-[48%] max-w-[210px] pointer-events-none">
                    <Image
                      src="/image/smiling-south-asian-doctor-portrait.webp"
                      alt="Smiling expert DietNexa clinical dietitian"
                      fill
                      className="object-contain object-bottom drop-shadow-xl"
                      sizes="220px"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* 6. HEALTH & WELLNESS INSIGHTS                                  */}
        {/* Compact Horizontal Cards matching exact reference image        */}
        {/* ============================================================== */}
        <section className="py-10 sm:py-16 bg-[#fafdfb] border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="space-y-1.5 mb-6 sm:mb-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-950 tracking-tight">
                Health & Wellness Insights
              </h2>
              <div className="w-12 h-1 bg-[#10793f] rounded-full" />
            </div>

            {/* 3 Horizontal Cards in 3-Column Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5">
              {insights.map((item, idx) => (
                <Link
                  key={idx}
                  href={`/resources/guides/${item.slug}`}
                  className="bg-white rounded-2xl border border-gray-200/80 p-2.5 sm:p-3 shadow-2xs hover:shadow-md hover:border-[#cbeed7] transition-all duration-200 flex items-center gap-3 sm:gap-3.5 group cursor-pointer"
                >
                  {/* Left Thumbnail with Rounded Corners */}
                  <div className="relative w-[95px] sm:w-[110px] h-[80px] sm:h-[90px] rounded-xl sm:rounded-2xl overflow-hidden shrink-0 shadow-2xs bg-gray-50">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="120px"
                    />
                  </div>

                  {/* Right Content */}
                  <div className="flex-1 min-w-0 flex flex-col justify-between py-0.5">
                    <div>
                      <h3 className="text-xs sm:text-[13px] font-bold text-gray-950 group-hover:text-[#10793f] transition-colors leading-snug line-clamp-2">
                        {item.title}
                      </h3>
                      <p className="text-[11px] text-gray-500 leading-snug line-clamp-2 mt-1">
                        {item.desc}
                      </p>
                    </div>

                    <div className="mt-2">
                      <span className="inline-flex items-center gap-1 text-[11px] sm:text-xs font-bold text-[#10793f] group-hover:text-[#0d6333] transition-colors">
                        <span>Read More</span>
                        <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* 7. FREQUENTLY ASKED QUESTIONS (2-Column Layout)               */}
        {/* ============================================================== */}
        <section className="py-10 sm:py-16 bg-white border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Heading */}
              <div className="lg:col-span-5 space-y-3">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-950 tracking-tight leading-tight">
                  Frequently Asked Questions
                  <br />
                  <span className="text-gray-700 font-semibold text-xl sm:text-2xl">
                    (General Wellness)
                  </span>
                </h2>
                <div className="w-12 h-1 bg-[#10793f] rounded-full" />
                <p className="text-sm text-gray-600 max-w-sm pt-2">
                  Have questions about our wellness programs and nutrition coaching? Find answers to the most common queries below.
                </p>
              </div>

              {/* Right Column: Accordion */}
              <div className="lg:col-span-7 space-y-3">
                {faqs.map((faq, idx) => {
                  const isOpen = faqOpen === idx;
                  return (
                    <div
                      key={idx}
                      className="bg-white rounded-2xl border border-gray-200/80 shadow-2xs overflow-hidden transition-all duration-200"
                    >
                      <button
                        onClick={() => toggleFaq(idx)}
                        className="w-full px-5 py-4 flex items-center justify-between gap-4 text-left font-bold text-gray-900 text-sm sm:text-base hover:text-[#10793f] transition-colors cursor-pointer"
                      >
                        <span>{faq.q}</span>
                        <ChevronDown
                          className={`w-4 h-4 text-gray-500 shrink-0 transition-transform duration-200 ${
                            isOpen ? "rotate-180 text-[#10793f]" : ""
                          }`}
                        />
                      </button>
                      {isOpen && (
                        <div className="px-5 pb-5 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
                          {faq.a}
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
        {/* 8. BOTTOM CALL TO ACTION BANNER                                */}
        {/* ============================================================== */}
        <section className="py-8 sm:py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="relative rounded-3xl bg-gradient-to-r from-[#eaf6ef] via-[#e2f3e8] to-[#edf9f2] border border-[#ccebd7] p-6 sm:p-8 md:p-10 shadow-sm overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
              {/* Left Leaf Icon + Content */}
              <div className="flex items-center gap-4 sm:gap-5">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white/90 border border-[#cbeed7] flex items-center justify-center text-[#10793f] shadow-2xs shrink-0">
                  <Leaf className="w-7 h-7 text-[#10793f]" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-gray-950 leading-snug">
                    Take the First Step Towards a Healthier You
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1">
                    Get expert nutrition guidance and build a balanced, healthier lifestyle today.
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="shrink-0 w-full md:w-auto flex justify-start md:justify-end">
                <button
                  onClick={handleOpenConsultation}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#10793f] text-white text-sm sm:text-base font-bold shadow-md hover:bg-[#0d6333] hover:shadow-lg transition-all duration-200 cursor-pointer group"
                >
                  <Calendar className="w-4 h-4 text-emerald-200" />
                  <span>Book a Consultation</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
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
