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
  Activity,
  RotateCw,
  ShieldCheck,
  Sprout,
  Scale,
  Users,
  ClipboardList,
  Utensils,
  TrendingUp,
  Apple,
  CalendarDays,
  Headphones,
  HelpCircle,
  Play,
} from "lucide-react";

// Custom SVG Icons matching exact reference design
const DumbbellIcon = ({ className = "w-5 h-5 text-[#10793f]" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M6 5v14" />
    <path d="M18 5v14" />
    <path d="M2 9v6" />
    <path d="M22 9v6" />
    <line x1="6" y1="12" x2="18" y2="12" />
    <rect x="4" y="7" width="2" height="10" rx="1" fill="currentColor" fillOpacity="0.15" />
    <rect x="18" y="7" width="2" height="10" rx="1" fill="currentColor" fillOpacity="0.15" />
  </svg>
);

const RunnerFigureIcon = ({ className = "w-5 h-5 text-[#10793f]" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="16" cy="4" r="2" />
    <path d="m14 8-3.5 3-2.5-1.5-4 3" />
    <path d="m10.5 11 2 4 3.5 1" />
    <path d="m12.5 15-2 5" />
    <path d="m16 16 3-2.5" />
  </svg>
);

const CyclistIcon = ({ className = "w-5 h-5 text-[#10793f]" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.9"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="5.5" cy="17.5" r="3.5" />
    <circle cx="18.5" cy="17.5" r="3.5" />
    <circle cx="12" cy="5" r="1.5" />
    <path d="M12 9l3 3.5-3 2H9l-2-3.5" />
    <path d="M15 12.5L18.5 17.5" />
    <path d="M5.5 17.5L9 11l4-2" />
  </svg>
);

const YogaLotusIcon = ({ className = "w-5 h-5 text-[#10793f]" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.9"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="12" cy="5" r="2" />
    <path d="M12 9v5" />
    <path d="M8 14l4 2 4-2" />
    <path d="M5 19l4-2 3 3 3-3 4 2" />
    <path d="M7 11l5 2 5-2" />
  </svg>
);

const BicepStrengthIcon = ({ className = "w-5 h-5 text-[#10793f]" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.9"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M4 14c-1.5 0-2.5-1-2.5-2.5S3.5 9 5 9h2c1 0 2 .5 2.5 1.5L11 13l2-1.5c1-1 2.5-1 3.5 0l2 2c1 1 1 2.5 0 3.5l-2 2c-1.5 1.5-3.5 1.5-5 0l-3.5-3.5" />
    <path d="M9 9l2-3c.8-1 2.2-1.2 3.2-.5l1.8 1.3" />
  </svg>
);

const RefreshRecoveryIcon = ({ className = "w-5 h-5 text-[#10793f]" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
    <path d="M3 3v5h5" />
    <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
    <path d="M16 21h5v-5" />
  </svg>
);

export default function SportsNutritionPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState("consultation");
  const [faqOpen, setFaqOpen] = useState(null);

  const handleOpenModal = (type = "consultation") => {
    setModalType(type);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const toggleFaq = (index) => {
    setFaqOpen(faqOpen === index ? null : index);
  };

  // 1. Benefits Bar Items (5 columns directly under hero)
  const benefits = [
    {
      title: "Higher Energy\n& Stamina",
      icon: Zap,
    },
    {
      title: "Better Strength\n& Muscle Gain",
      icon: BicepStrengthIcon,
    },
    {
      title: "Faster\nRecovery",
      icon: RefreshRecoveryIcon,
    },
    {
      title: "Injury\nPrevention",
      icon: ShieldCheck,
    },
    {
      title: "Healthy\nBody Composition",
      icon: Sprout,
    },
  ];

  // 2. Nutrition Support for Every Active Goal (4 Cards)
  const activeGoals = [
    {
      id: "endurance",
      title: "Endurance\nPerformance",
      desc: "Sustain energy for longer workouts and tournaments.",
      image: "/image/determined-runner-in-the-green-park.webp",
      icon: RunnerFigureIcon,
    },
    {
      id: "muscle-gain",
      title: "Muscle Gain\n& Strength",
      desc: "Build lean muscle with the right nutrition and meal timing.",
      image: "/image/focused-ez-bar-curl-in-a-modern-gym.webp",
      icon: DumbbellIcon,
    },
    {
      id: "fat-loss",
      title: "Fat Loss &\nBody Recomposition",
      desc: "Reduce excess fat while maintaining performance and muscle.",
      image: "/image/focused-indoor-gym-run.webp",
      icon: Scale,
    },
    {
      id: "recovery",
      title: "Recovery &\nInjury Support",
      desc: "Replenish nutrients, reduce muscle soreness and recover faster.",
      image: "/image/focused-outdoor-crunch-workout.webp",
      icon: RefreshRecoveryIcon,
    },
  ];

  // 3. Who Is It For? (5 categories)
  const whoIsItFor = [
    { title: "Athletes\n(Any Sport)", icon: RunnerFigureIcon },
    { title: "Gym & Fitness\nEnthusiasts", icon: DumbbellIcon },
    { title: "Runners &\nCyclists", icon: CyclistIcon },
    { title: "Yoga &\nEndurance Training", icon: YogaLotusIcon },
    { title: "Sports\nTeams & Clubs", icon: Users },
  ];

  // 4. Why Choose DietNexa? (5 bullet points)
  const whyChoosePoints = [
    "Consult with a qualified sports nutrition expert",
    "Customized, goal-based meal plans",
    "Pre-, post-workout and recovery nutrition",
    "Performance and progress tracking",
    "Safe, practical and sustainable approach",
  ];

  // 5. Our Sports Nutrition Process (4 steps)
  const processSteps = [
    {
      title: "Assessment",
      desc: "Understand your goals, training and lifestyle.",
      icon: ClipboardList,
    },
    {
      title: "Personalized Plan",
      desc: "Get a customized nutrition and meal strategy.",
      icon: Utensils,
    },
    {
      title: "Track Progress",
      desc: "Monitor your performance, recovery and body changes.",
      icon: TrendingUp,
    },
    {
      title: "Plan Adjustment",
      desc: "Optimize your plan based on your progress and goals.",
      icon: RefreshRecoveryIcon,
    },
  ];

  // 6. What You Get (6 Cards)
  const whatYouGet = [
    { title: "Personalized\nMeal Plans", icon: Utensils },
    { title: "Pre & Post\nWorkout Nutrition", icon: Apple },
    { title: "Daily Nutrition\nGuidance", icon: CalendarDays },
    { title: "Performance\nTracking", icon: TrendingUp },
    { title: "Sustainable\nEating Habits", icon: Sprout },
    { title: "Ongoing\nDietitian Support", icon: Headphones },
  ];

  // 7. Frequently Asked Questions
  const faqs = [
    {
      q: "Do I need artificial protein powders or supplements to build muscle?",
      a: "Not necessarily. Whole foods—such as eggs, paneer, chicken, fish, lentils, sprouts, greek yogurt, tofu, and seeds—can meet most daily protein targets. If your sport demands higher intake or tight training schedules, our certified sports dietitians advise safe, clean, and certified supplements without harmful additives.",
    },
    {
      q: "What should I eat before and after a high-intensity workout?",
      a: "Pre-workout nutrition focuses on easily digestible complex carbohydrates and light protein 60–90 minutes before training to fuel glycogen stores. Post-workout nutrition focuses on rapid recovery with protein and carbs within 30–45 minutes to repair muscle micro-tears and replenish energy.",
    },
    {
      q: "Can vegetarian or vegan athletes perform at elite levels?",
      a: "Absolutely! Many world-class athletes thrive on plant-based diets. We balance complete amino acid profiles by combining complementary proteins (e.g. rice + pulses, quinoa, chia, hemp, soy) alongside targeted iron, zinc, and B12 optimization.",
    },
    {
      q: "How does nutrition prevent athletic injuries and cramping?",
      a: "Proper electrolyte balance (sodium, potassium, magnesium), optimal hydration, anti-inflammatory micronutrients (omega-3s, curcumin, antioxidants), and sufficient energy availability drastically decrease muscle fatigue and tissue tears.",
    },
    {
      q: "How often will my meal plan be updated as my training changes?",
      a: "Your plan evolves dynamically with your training cycle (off-season, hypertrophy, pre-competition, match day, and recovery phases) with continuous weekly dietitian reviews.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col font-sans selection:bg-[#dcf2e3] selection:text-[#0b4728] relative overflow-x-hidden">
      {/* Sticky Navigation Bar */}
      <Navbar onOpenModal={handleOpenModal} />

      <main className="flex-1">
        {/* ============================================================== */}
        {/* 1. HERO SECTION: Sports Nutrition                              */}
        {/* Exact match to the reference mockup design                      */}
        {/* ============================================================== */}
        <section className="relative overflow-hidden pt-2 sm:pt-3 pb-0">
          {/* Dreamy Teal and Green Bokeh Background — Spreads edge-to-edge */}
          <div className="absolute inset-0 z-0 pointer-events-none select-none">
            <Image
              src="/image/dreamy-teal-and-green-bokeh.webp"
              alt="Dreamy Teal and Green Bokeh Background"
              fill
              priority
              unoptimized
              className="object-cover object-center"
            />
            {/* Directional gradient wash: preserves maximum text readability on left while letting athletic visuals pop */}
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
              <span className="text-gray-900">Sports Nutrition</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-end">
              {/* Left Column: Pill Badge, Heading, Subtitle & Action Buttons */}
              <div className="lg:col-span-5 pb-6 sm:pb-10 z-10">
                {/* Pill Badge matching reference design */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#e8f7ee] border border-[#cbeed7] text-[#10793f] text-xs font-bold mb-3.5 shadow-2xs">
                  <div className="w-5 h-5 rounded-full bg-[#10793f]/15 flex items-center justify-center shrink-0">
                    <DumbbellIcon className="w-3.5 h-3.5 text-[#10793f]" />
                  </div>
                  <span>Sports Nutrition</span>
                </div>

                {/* Main Heading */}
                <h1
                  className="font-extrabold text-gray-950 tracking-tight leading-[1.12]"
                  style={{ fontSize: "clamp(34px, 3.8vw, 50px)" }}
                >
                  Fuel Your Performance
                  <br />
                  with Expert
                  <br />
                  <span className="text-[#10793f]">Sports Nutrition</span>
                </h1>

                {/* Subtitle */}
                <p className="mt-3.5 text-gray-600 text-sm sm:text-base leading-relaxed max-w-lg">
                  Personalized nutrition plans for athletes, fitness enthusiasts
                  and active lifestyles to boost performance, build strength,
                  recover faster and stay injury-free.
                </p>

                {/* Action Buttons */}
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => handleOpenModal("consultation")}
                    className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full font-bold text-white text-sm transition-all duration-200 cursor-pointer shadow-lg shadow-emerald-700/25 hover:scale-[1.02] active:scale-[0.99]"
                    style={{ background: "#10793f" }}
                    onMouseOver={(e) =>
                      (e.currentTarget.style.background = "#0c592e")
                    }
                    onMouseOut={(e) =>
                      (e.currentTarget.style.background = "#10793f")
                    }
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Book a Consultation</span>
                    <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                  </button>

                  <a
                    href="#goals"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold text-gray-900 text-sm bg-white border border-gray-700/80 hover:border-gray-950 hover:bg-gray-50/90 transition-all duration-200 cursor-pointer shadow-xs hover:scale-[1.01]"
                  >
                    <Play className="w-3.5 h-3.5 text-[#10793f] fill-[#10793f]" />
                    <span>Learn More</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Hero Visuals (Large Athletic Man, Breakfast Spread & Floating Activity Badges) */}
              <div className="lg:col-span-7 relative flex items-end justify-center self-end min-h-[430px] sm:min-h-[480px] lg:min-h-[520px]">
              

                {/* Main Hero Visual: Athletic Man with Shaker & Towel — Large & Hero Dominating */}
                <div className="relative w-[420px] sm:w-[530px] lg:w-[620px] h-[390px] sm:h-[460px] lg:h-[505px] z-10 flex items-end justify-center">
                  <Image
                    src="/image/fitness-nutrition-shake-and-healthy-meal.webp"
                    alt="Fitness Nutrition Shake and Healthy Meal — Expert Sports Nutrition"
                    fill
                    priority
                    unoptimized
                    className="object-contain object-bottom drop-shadow-xl"
                  />
                </div>

                {/* Foreground Healthy Breakfast and Salad Spread resting on bottom table */}
                <div
                  className="absolute z-20 pointer-events-none bottom-0 left-[2%] sm:left-[5%] lg:left-[8%] w-[270px] sm:w-[340px] lg:w-[410px] h-[95px] sm:h-[125px] lg:h-[150px] drop-shadow-md"
                >
                  <Image
                    src="/image/healthy-breakfast-and-salad-spread.webp"
                    alt="Healthy Breakfast and Salad Spread — Fresh Bananas, Smoothie & Lean Protein"
                    fill
                    priority
                    unoptimized
                    className="object-contain object-bottom"
                  />
                </div>

                {/* Far Right 4 Floating Activity Icons in White Rounded Boxes */}
                <div className="absolute right-1 sm:right-3 top-6 sm:top-10 z-20 flex flex-col gap-3 pointer-events-none select-none">
                  {[
                    { icon: RunnerFigureIcon, label: "Running" },
                    { icon: DumbbellIcon, label: "Gym" },
                    { icon: CyclistIcon, label: "Cycling" },
                    { icon: YogaLotusIcon, label: "Yoga" },
                  ].map((act, i) => {
                    const ActIcon = act.icon;
                    return (
                      <div
                        key={i}
                        className="w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 rounded-2xl bg-white/95 backdrop-blur-md shadow-md border border-emerald-100 flex items-center justify-center text-[#10793f] transition-all duration-300 hover:scale-110"
                      >
                        <ActIcon className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2]" />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* 2. BENEFITS / HIGHLIGHTS BAR (5 COLUMNS)                       */}
        {/* Exact match to the reference image below the hero               */}
        {/* ============================================================== */}
        <section className="relative z-20 -mt-2 sm:-mt-3 pb-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="bg-white rounded-2xl sm:rounded-3xl border border-gray-100 shadow-sm p-4 sm:p-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 divide-y lg:divide-y-0 lg:divide-x divide-gray-100">
              {benefits.map((b, idx) => {
                const IconComponent = b.icon;
                return (
                  <div
                    key={b.title}
                    className={`flex flex-col items-center text-center px-2 ${idx !== 0 ? "pt-3 lg:pt-0" : ""
                      }`}
                  >
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#10793f] flex items-center justify-center mb-2 shrink-0 transition-transform duration-200 hover:scale-105">
                      <IconComponent className="w-5 h-5 stroke-[2]" />
                    </div>
                    <span className="text-xs sm:text-[13px] font-bold text-gray-800 leading-tight whitespace-pre-line">
                      {b.title}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* 3. NUTRITION SUPPORT FOR EVERY ACTIVE GOAL                     */}
        {/* 4 Goal Cards with photos, overlapping icons & bottom border     */}
        {/* ============================================================== */}
        <section id="goals" className="py-8 sm:py-12 bg-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="mb-6 sm:mb-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-950 tracking-tight">
                Nutrition Support for Every Active Goal
              </h2>
              <div className="w-12 h-1 bg-[#10793f] rounded-full mt-2" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
              {activeGoals.map((goal) => {
                const GoalIcon = goal.icon;
                return (
                  <div
                    key={goal.id}
                    className="group bg-white rounded-2xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_30px_rgba(16,121,63,0.12)] hover:-translate-y-1.5 hover:border-emerald-200 transition-all duration-300 flex flex-col justify-between overflow-hidden relative border-b-2 border-b-[#10793f]"
                  >
                    <div>
                      {/* Top Photo with subtle vignette and overlapping round badge */}
                      <div className="relative w-full aspect-16/10 overflow-hidden bg-gray-100">
                        <Image
                          src={goal.image}
                          alt={goal.title.replace("\n", " ")}
                          fill
                          unoptimized
                          priority
                          className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-108"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />

                        {/* Overlapping Round Badge at bottom-left of photo */}
                        <div className="absolute left-4.5 -bottom-5 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white shadow-md border-2 border-white flex items-center justify-center text-[#10793f] transition-transform duration-300 group-hover:scale-110 group-hover:shadow-lg">
                          <GoalIcon className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.2]" />
                        </div>
                      </div>

                      {/* Card Body */}
                      <div className="pt-7 pb-5 px-4.5 sm:px-5 flex-1 flex flex-col justify-between">
                        <h3 className="text-base sm:text-[17px] font-extrabold text-gray-950 tracking-tight leading-snug mb-2 whitespace-pre-line group-hover:text-[#10793f] transition-colors duration-200">
                          {goal.title}
                        </h3>
                        <p className="text-xs sm:text-[13px] text-gray-600 leading-relaxed font-normal">
                          {goal.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* 4. WHO IS IT FOR? & WHY CHOOSE DIETNEXA?                       */}
        {/* Two-column layout divided by vertical line                     */}
        {/* ============================================================== */}
        <section className="py-8 sm:py-12 bg-white relative border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              {/* Left Column: Who Is It For? (5 categories) */}
              <div className="lg:col-span-7">
                <div className="mb-6">
                  <h3 className="text-xl sm:text-2xl font-extrabold text-gray-950 tracking-tight">
                    Who Is It For?
                  </h3>
                  <div className="w-12 h-1 bg-[#10793f] rounded-full mt-2" />
                </div>

                <div className="grid grid-cols-3 sm:grid-cols-5 gap-3 sm:gap-4">
                  {whoIsItFor.map((item, idx) => {
                    const ItemIcon = item.icon;
                    return (
                      <div
                        key={idx}
                        className="flex flex-col items-center text-center p-2 rounded-xl transition-all duration-200 hover:bg-emerald-50/40"
                      >
                        <div className="w-12 h-12 rounded-full bg-[#e8f7ee] text-[#10793f] flex items-center justify-center mb-2 shrink-0">
                          <ItemIcon className="w-6 h-6 stroke-[2]" />
                        </div>
                        <span className="text-xs font-bold text-gray-900 leading-tight whitespace-pre-line">
                          {item.title}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Right Column: Why Choose DietNexa? (5 bullet points) */}
              <div className="lg:col-span-5 lg:border-l lg:border-gray-200 lg:pl-8">
                <div className="mb-6">
                  <h3 className="text-xl sm:text-2xl font-extrabold text-gray-950 tracking-tight">
                    Why Choose DietNexa?
                  </h3>
                </div>

                <div className="space-y-3">
                  {whyChoosePoints.map((pt, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-[#10793f] text-white flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                      <span className="text-xs sm:text-sm font-semibold text-gray-800 leading-snug">
                        {pt}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* 5. OUR SPORTS NUTRITION PROCESS                                */}
        {/* Soft mint banner: Salad bowl on left + 4 steps connected by -> */}
        {/* ============================================================== */}
        <section className="py-8 sm:py-10 bg-[#edf8f1] border-y border-[#dcf0e4] relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
              {/* Left Column: Salad Bowl Photo */}
              <div className="lg:col-span-4 relative flex items-center justify-center">
                <div className="relative w-48 h-48 sm:w-60 sm:h-60 rounded-full overflow-hidden shadow-md border-4 border-white">
                  <Image
                    src="/image/colorful-grilled-chicken-salad-bowl.webp"
                    alt="Nutrient-Dense Sports Nutrition Meal Bowl"
                    fill
                    unoptimized
                    className="object-cover object-center"
                  />
                </div>
              </div>

              {/* Right Column: Title + 4 Steps */}
              <div className="lg:col-span-8">
                <div className="mb-6 sm:mb-7">
                  <h3 className="text-xl sm:text-2xl font-extrabold text-gray-950 tracking-tight">
                    Our Sports Nutrition Process
                  </h3>
                  <div className="w-12 h-1 bg-[#10793f] rounded-full mt-2" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-3 items-start relative">
                  {processSteps.map((step, idx) => {
                    const StepIcon = step.icon;
                    return (
                      <div key={idx} className="flex flex-col items-center text-center relative px-2">
                        <div className="w-11 h-11 rounded-full bg-white text-[#10793f] shadow-sm flex items-center justify-center mb-2.5 shrink-0">
                          <StepIcon className="w-5 h-5 stroke-[2]" />
                        </div>
                        <h4 className="text-xs sm:text-sm font-bold text-gray-950 mb-1">
                          {step.title}
                        </h4>
                        <p className="text-[11px] sm:text-xs text-gray-600 leading-snug">
                          {step.desc}
                        </p>

                        {/* Arrow separator between steps on desktop */}
                        {idx !== processSteps.length - 1 && (
                          <div className="hidden md:block absolute -right-3 top-4 text-[#10793f] font-bold text-sm">
                            →
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* 6. WHAT YOU GET                                                */}
        {/* 6 White Cards in a Row                                         */}
        {/* ============================================================== */}
        <section className="py-8 sm:py-12 bg-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="mb-6 sm:mb-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-950 tracking-tight">
                What You Get
              </h2>
              <div className="w-12 h-1 bg-[#10793f] rounded-full mt-2" />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
              {whatYouGet.map((item, idx) => {
                const ItemIcon = item.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl border border-gray-100 shadow-2xs hover:shadow-md p-4 flex flex-col items-center text-center transition-all duration-200"
                  >
                    <div className="w-10 h-10 rounded-full bg-emerald-50 text-[#10793f] flex items-center justify-center mb-2 shrink-0">
                      <ItemIcon className="w-5 h-5 stroke-[2]" />
                    </div>
                    <span className="text-xs font-bold text-gray-900 leading-tight whitespace-pre-line">
                      {item.title}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* 7. BOTTOM CALL-TO-ACTION BANNER                                */}
        {/* Soft mint gradient with Runner Badge & Book Consultation Button */}
        {/* ============================================================== */}
        <section className="py-6 sm:py-8 bg-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div
              className="rounded-3xl p-5 sm:p-6 border border-[#cbeed7] shadow-xs flex flex-col md:flex-row items-center justify-between gap-4"
              style={{
                background:
                  "linear-gradient(90deg, #dcf2e3 0%, #eaf6ef 50%, #d4eedd 100%)",
              }}
            >
              <div className="flex items-center gap-3.5 text-center md:text-left flex-col md:flex-row">
                <div className="w-11 h-11 rounded-full bg-white shadow-xs flex items-center justify-center shrink-0 text-[#10793f]">
                  <RunnerFigureIcon className="w-6 h-6 stroke-[2]" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-extrabold text-gray-950 tracking-tight leading-tight">
                    Ready to Take Your Performance to the Next Level?
                  </h3>
                  <p className="text-xs sm:text-[13px] text-gray-700 mt-0.5">
                    Get a personalized sports nutrition plan from our expert dietitians.
                  </p>
                </div>
              </div>

              <button
                onClick={() => handleOpenModal("consultation")}
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 rounded-xl font-bold text-white text-xs sm:text-sm transition-all duration-200 cursor-pointer shadow-md shadow-emerald-700/25 hover:scale-[1.02] active:scale-[0.99] shrink-0"
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
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* 8. FREQUENTLY ASKED QUESTIONS                                  */}
        {/* Accordion with sports nutrition answers                        */}
        {/* ============================================================== */}
        <section className="py-10 sm:py-16 bg-[#fafdfb] relative border-t border-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e8f7ee] text-[#10793f] text-xs font-bold mb-3">
                <HelpCircle className="w-3.5 h-3.5" />
                <span>Sports Nutrition FAQs</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-950 tracking-tight">
                Frequently Asked Questions
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-gray-600 max-w-lg mx-auto">
                Clear, evidence-backed answers from certified sports dietitians to fuel your workouts and recovery.
              </p>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, idx) => {
                const isOpen = faqOpen === idx;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-xl sm:rounded-2xl border border-gray-200/80 shadow-2xs overflow-hidden transition-all duration-200"
                  >
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full px-4 sm:px-5 py-3.5 sm:py-4 flex items-center justify-between gap-4 text-left font-bold text-gray-900 text-sm sm:text-base hover:text-[#10793f] transition-colors cursor-pointer"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-gray-500 shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180 text-[#10793f]" : ""
                          }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-4 sm:px-5 pb-4 sm:pb-5 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
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

      {/* Footer (Preserved untouched) */}
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
