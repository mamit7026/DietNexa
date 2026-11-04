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
  ShieldCheck,
  Utensils,
  Headphones,
  Sprout,
  TrendingUp,
  CalendarDays,
  Heart,
  Scale,
  Activity,
  Sparkles,
  Droplets,
  HelpCircle,
} from "lucide-react";

// Custom SVG Icons matching exact reference design
const PregnantMotherIcon = ({ className = "w-5 h-5 text-[#d64555]" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.9"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="12" cy="4" r="2.2" />
    <path d="M10 8.5h3a3.5 3.5 0 0 1 3.5 3.5v.5a5 5 0 0 1-5 5H10.5a4 4 0 0 1-4-4V11a2.5 2.5 0 0 1 2.5-2.5z" />
    <path d="M13 17.5c1.2 0 2.2.8 2.2 2" />
    <circle cx="13" cy="13" r="1.5" />
  </svg>
);

const BoneCalciumIcon = ({ className = "w-6 h-6 text-[#10793f]" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.9"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M17.5 5.5a2.5 2.5 0 0 0-3.5 0l-7 7a2.5 2.5 0 1 0 3.5 3.5l7-7a2.5 2.5 0 0 0 0-3.5z" />
    <circle cx="6" cy="18" r="2" />
    <circle cx="18" cy="6" r="2" />
  </svg>
);

const BrainOmegaIcon = ({ className = "w-6 h-6 text-[#10793f]" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.9"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M9.5 2A2.5 2.5 0 0 0 7 4.5v.2A3 3 0 0 0 5 7.5a2.9 2.9 0 0 0 .5 1.7A3 3 0 0 0 5 12a3 3 0 0 0 1 2.2A3 3 0 0 0 7 19.5a2.5 2.5 0 0 0 2.5 2.5h.5V2h-.5z" />
    <path d="M14.5 2A2.5 2.5 0 0 1 17 4.5v.2a3 3 0 0 1 2 2.8 2.9 2.9 0 0 1-.5 1.7 3 3 0 0 1 .5 2.8 3 3 0 0 1-1 2.2 3 3 0 0 1-1 5.3 2.5 2.5 0 0 1-2.5 2.5h-.5V2h.5z" />
  </svg>
);

const DropletIronIcon = ({ className = "w-6 h-6 text-[#10793f]" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.9"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M12 2.5C12 2.5 6 10 6 15a6 6 0 0 0 12 0c0-5-6-12.5-6-12.5z" />
    <path d="M10 13a3 3 0 0 0 3 3" />
  </svg>
);

const LeafFolicIcon = ({ className = "w-6 h-6 text-[#10793f]" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.9"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M11 20A7 7 0 0 1 4 13c0-4 3-8 8-10 1 3 3 7 7 8a7 7 0 0 1-8 9z" />
    <path d="M11 20v-7" />
  </svg>
);

const ShieldProteinIcon = ({ className = "w-6 h-6 text-[#10793f]" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.9"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <line x1="12" y1="8" x2="12" y2="14" />
    <line x1="9" y1="11" x2="15" y2="11" />
  </svg>
);

const StomachDiscomfortIcon = ({ className = "w-6 h-6 text-[#10793f]" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.9"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M12 4c-3.5 0-6 2-6 5.5 0 4 2.5 6.5 4 8 1.5 1.5 2.5 2.5 2.5 2.5s1-1 2.5-2.5c1.5-1.5 3-4 3-8 0-3.5-2.5-5.5-6-5.5z" />
    <path d="M9.5 9c.5-1 1.5-1.5 2.5-1.5s2 .5 2.5 1.5" />
    <path d="M10 13c.5.5 1.2.8 2 .8s1.5-.3 2-.8" />
  </svg>
);

const LotusEnergyIcon = ({ className = "w-6 h-6 text-[#10793f]" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.9"
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

export default function PregnancyNutritionPage() {
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

  // 1. Benefits bar items (6 columns directly below hero)
  const benefits = [
    {
      title: "Safe &\nEvidence-Based",
      icon: ShieldCheck,
    },
    {
      title: "Right Nutrients\nfor Mom & Baby",
      icon: Sprout,
    },
    {
      title: "Supports\nHealthy Weight Gain",
      icon: TrendingUp,
    },
    {
      title: "Trimester-wise\nGuidance",
      icon: CalendarDays,
    },
    {
      title: "Tasty &\nPractical Meals",
      icon: Utensils,
    },
    {
      title: "Ongoing\nDietitian Support",
      icon: Headphones,
    },
  ];

  // 2. Trimester-Wise Nutrition Focus (3 cards with exact image mapping)
  const trimesters = [
    {
      id: "1st-trimester",
      name: "1st Trimester",
      weeks: "(Weeks 1–12)",
      themeBg: "bg-[#fdf4f4]",
      themeBorder: "border-[#fae0e0]",
      badgeBg: "bg-[#fce9e9]",
      badgeText: "text-[#d64555]",
      image: "/image/Pregnant Woman Holding Belly.png",
      bullets: [
        "Manage nausea and food aversions",
        "Get key nutrients like folic acid, iron and B12",
        "Support early baby development",
      ],
    },
    {
      id: "2nd-trimester",
      name: "2nd Trimester",
      weeks: "(Weeks 13–27)",
      themeBg: "bg-[#f2faf5]",
      themeBorder: "border-[#d8f0e1]",
      badgeBg: "bg-[#e5f7ed]",
      badgeText: "text-[#10793f]",
      image: "/image/Serene Pregnant Woman Cradling Belly.png",
      bullets: [
        "Meet higher nutrient needs for you and your growing baby",
        "Support baby's bone, brain and organ development",
        "Maintain steady and healthy weight gain",
      ],
    },
    {
      id: "3rd-trimester",
      name: "3rd Trimester",
      weeks: "(Weeks 28–Delivery)",
      themeBg: "bg-[#f0f7fd]",
      themeBorder: "border-[#d7ebfa]",
      badgeBg: "bg-[#e4f2fc]",
      badgeText: "text-[#1e74b3]",
      image: "/image/Pregnant Woman in Blue Maternity Dress.png",
      bullets: [
        "Support baby's brain and weight gain",
        "Prepare your body for delivery",
        "Manage common discomforts like acidity, bloating and swelling",
      ],
    },
  ];

  // 3. Key Nutrients During Pregnancy
  const nutrients = [
    {
      name: "Folic Acid",
      desc: "Supports early baby development",
      icon: LeafFolicIcon,
    },
    {
      name: "Iron",
      desc: "Helps prevent anemia",
      icon: DropletIronIcon,
    },
    {
      name: "Calcium",
      desc: "Builds strong bones & teeth",
      icon: BoneCalciumIcon,
    },
    {
      name: "Omega-3",
      desc: "Supports baby's brain & eye health",
      icon: BrainOmegaIcon,
    },
    {
      name: "Protein",
      desc: "Aids healthy growth & repair",
      icon: ShieldProteinIcon,
    },
  ];

  // 4. Benefits for You & Your Baby (6 items)
  const babyBenefits = [
    {
      title: "Supports healthy baby growth",
      icon: Heart,
    },
    {
      title: "Boosts immunity",
      icon: ShieldCheck,
    },
    {
      title: "Helps maintain a healthy weight",
      icon: Scale,
    },
    {
      title: "Improves energy levels",
      icon: LotusEnergyIcon,
    },
    {
      title: "Reduces common pregnancy discomforts",
      icon: StomachDiscomfortIcon,
    },
    {
      title: "Promotes a smoother delivery",
      icon: Sprout,
    },
  ];

  // 5. Frequently Asked Questions
  const faqs = [
    {
      q: "When should I begin pregnancy nutrition guidance?",
      a: "Ideally, from pre-conception or as soon as you find out you are expecting. Early nutrition ensures adequate folic acid, iron, and optimal micronutrient reserves during critical organogenesis in the first 12 weeks.",
    },
    {
      q: "How can a dietitian help with severe morning sickness and nausea?",
      a: "Our clinical prenatal dietitians design low-aroma, small-frequency meal strategies, electrolyte-rich hydration recipes, and ginger/B6-supportive foods that calm morning sickness while ensuring your baby gets continuous nourishment.",
    },
    {
      q: "How much weight is healthy and safe to gain during pregnancy?",
      a: "Healthy weight gain depends on your pre-pregnancy BMI. Typically, women gain 1 to 2 kg in the first trimester, followed by about 0.4–0.5 kg per week in the second and third trimesters. We closely monitor steady, non-excessive progress tailored to your personal health parameters.",
    },
    {
      q: "Are pure vegetarian or Jain diets safe for a healthy pregnancy?",
      a: "Absolutely! We specialize in plant-based prenatal meal planning. By combining traditional lentils, paneer, sprouts, dairy, seeds, nuts, and greens, we ensure complete proteins, bioactive iron, zinc, and B12 without compromising your dietary ethics.",
    },
    {
      q: "Can you help manage Gestational Diabetes (GDM) or High Blood Pressure (Pre-eclampsia)?",
      a: "Yes. Our senior dietitians work closely with your obstetrician's medical reports. We balance your complex carbohydrates and glycemic load with timed snacks to stabilize blood sugars and blood pressure throughout your pregnancy.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col font-sans selection:bg-[#fce9e9] selection:text-[#991b1b] relative overflow-x-hidden">
      {/* Sticky Navigation Bar */}
      <Navbar onOpenModal={handleOpenModal} />

      <main className="flex-1">
        {/* ============================================================== */}
        {/* 1. HERO SECTION: Pregnancy Nutrition                           */}
        {/* Exact match to the reference mockup design & standardized size */}
        {/* ============================================================== */}
        <section className="relative overflow-hidden pt-2 sm:pt-3 pb-0">
          {/* Softly Lit Airy Living Room Background — Spreads edge-to-edge */}
          <div className="absolute inset-0 z-0 pointer-events-none select-none">
            <Image
              src="/image/Softly Lit Airy Living Room.png"
              alt="Softly Lit Airy Living Room Setting"
              fill
              priority
              unoptimized
              className="object-cover object-center"
            />
            {/* Directional gradient wash: preserves maximum text readability on left while letting soft airy living room show beautifully across the right */}
            <div
              className="absolute inset-0 hidden md:block"
              style={{
                background:
                  "linear-gradient(90deg, rgba(255, 255, 255, 0.96) 0%, rgba(255, 255, 255, 0.90) 38%, rgba(255, 255, 255, 0.40) 65%, rgba(255, 255, 255, 0.10) 100%)",
              }}
            />
            <div
              className="absolute inset-0 md:hidden"
              style={{
                background:
                  "linear-gradient(180deg, rgba(255, 255, 255, 0.96) 0%, rgba(255, 255, 255, 0.90) 50%, rgba(255, 255, 255, 0.35) 100%)",
              }}
            />
          </div>

          {/* Subtle green leaves on the far left edge */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-16 sm:w-24 h-52 pointer-events-none opacity-40 z-0">
            <Image
              src="/image/Dewy Green Leafy Branch.png"
              alt=""
              fill
              unoptimized
              className="object-contain object-left"
            />
          </div>

          {/* Subtle green leaves on the far right edge */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-16 sm:w-24 h-52 pointer-events-none opacity-40 z-0">
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
              <span className="text-gray-900">Pregnancy Nutrition</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-end">
              {/* Left Column: Pill Badge, Heading, Subtitle & Action Buttons */}
              <div className="lg:col-span-5 pb-4 sm:pb-6 z-10">
                {/* Pill Badge matching reference design with soft pink & mother/baby icon */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#fdf0f0] border border-[#fbd4d6] text-[#d64555] text-xs font-bold mb-2.5 shadow-2xs">
                  <div className="w-4 h-4 rounded-full bg-[#d64555]/15 flex items-center justify-center shrink-0">
                    <PregnantMotherIcon className="w-3 h-3 text-[#d64555]" />
                  </div>
                  <span>Pregnancy Nutrition</span>
                </div>

                {/* Main Heading */}
                <h1
                  className="font-extrabold text-gray-950 tracking-tight leading-[1.12]"
                  style={{ fontSize: "clamp(30px, 3.4vw, 46px)" }}
                >
                  Healthy Nutrition for
                  <br />
                  <span className="text-gray-950">You &amp; Your Baby</span>
                </h1>

                {/* Subtitle */}
                <p className="mt-2 sm:mt-2.5 text-gray-600 text-xs sm:text-sm leading-relaxed max-w-md">
                  Personalized, safe and balanced nutrition guidance for a
                  healthy pregnancy, better maternal wellness and optimal baby
                  development.
                </p>

                {/* Action Buttons */}
                <div className="mt-4 sm:mt-5 flex flex-wrap items-center gap-2.5 sm:gap-3">
                  <button
                    onClick={() => handleOpenModal("consultation")}
                    className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 rounded-xl font-bold text-white text-xs sm:text-sm transition-all duration-200 cursor-pointer shadow-md shadow-emerald-700/20 hover:scale-[1.02] active:scale-[0.99]"
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

                  <a
                    href="#trimesters"
                    className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl font-bold text-gray-800 text-xs sm:text-sm bg-white border border-gray-300 hover:border-gray-400 hover:bg-gray-50/90 transition-all duration-200 cursor-pointer shadow-xs hover:scale-[1.01]"
                  >
                    <span>Learn More</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Hero Visuals (Pregnant Woman, Heart Emblem, Healthy Food Arrangement) */}
              <div className="lg:col-span-7 relative flex items-end justify-center self-end h-[320px] sm:h-[350px] lg:h-[370px]">
                {/* Circular Soft Rose Glow Backdrop centered behind the pregnant woman */}
                <div
                  className="absolute w-[300px] sm:w-[340px] lg:w-[370px] h-[300px] sm:h-[340px] lg:h-[370px] rounded-full pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(254, 226, 226, 0.85) 0%, rgba(254, 242, 242, 0.5) 50%, rgba(255, 255, 255, 0) 70%)",
                    left: "26%",
                    bottom: "-5px",
                    transform: "translateX(-20%)",
                  }}
                />

                {/* Mother and Baby Heart Emblem Floating on the upper-left of the right visual */}
                <div
                  className="absolute z-20 pointer-events-none w-24 sm:w-32 lg:w-36 h-20 sm:h-28 lg:h-32 drop-shadow-sm"
                  style={{ left: "10%", top: "8%" }}
                >
                  <Image
                    src="/image/Mother and Baby Heart Emblem.png"
                    alt="Mother and Baby Heart Emblem"
                    fill
                    unoptimized
                    className="object-contain"
                  />
                </div>

                {/* Hero Pregnant Woman Visual - Resting flush on the bottom */}
                <div className="relative w-[340px] sm:w-[410px] lg:w-[460px] h-[310px] sm:h-[345px] lg:h-[365px] z-10 flex items-end justify-center">
                  <Image
                    src="/image/Pregnant Woman Enjoying Healthy Snacks.png"
                    alt="Pregnant Woman Enjoying Healthy Snacks — Safe Pregnancy Nutrition"
                    fill
                    priority
                    unoptimized
                    className="object-contain object-bottom drop-shadow-md"
                  />
                </div>

                {/* Foreground Healthy Foods & Fresh Fruit Arrangement resting on bottom table */}
                <div
                  className="absolute z-20 pointer-events-none bottom-0 left-[8%] sm:left-[12%] w-[190px] sm:w-[230px] lg:w-[260px] h-[75px] sm:h-[95px] lg:h-[108px] drop-shadow-md"
                >
                  <Image
                    src="/image/Healthy Foods and Fresh Fruit Arrangement.png"
                    alt="Healthy Foods and Fresh Fruit Arrangement — Milk, Fruits & Nourishing Snacks"
                    fill
                    priority
                    unoptimized
                    className="object-contain object-bottom"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* 2. BENEFITS / HIGHLIGHTS BAR (6 COLUMNS)                       */}
        {/* Exact match to the reference image below the hero               */}
        {/* ============================================================== */}
        <section className="relative z-20 -mt-2 sm:-mt-3 pb-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="bg-white rounded-2xl sm:rounded-3xl border border-gray-100 shadow-sm p-4 sm:p-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 divide-y lg:divide-y-0 lg:divide-x divide-gray-100">
              {benefits.map((b, idx) => {
                const IconComponent = b.icon;
                return (
                  <div
                    key={b.title}
                    className={`flex flex-col items-center text-center px-2 ${
                      idx !== 0 ? "pt-3 lg:pt-0" : ""
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
        {/* 3. TRIMESTER-WISE NUTRITION FOCUS                              */}
        {/* 3 Cards: 1st (Pink), 2nd (Green), 3rd (Blue) with cutouts      */}
        {/* ============================================================== */}
        <section id="trimesters" className="py-8 sm:py-12 bg-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="mb-6 sm:mb-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-950 tracking-tight">
                Trimester-Wise Nutrition Focus
              </h2>
              <div className="w-12 h-1 bg-[#10793f] rounded-full mt-2" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
              {trimesters.map((tri) => (
                <div
                  key={tri.id}
                  className={`${tri.themeBg} ${tri.themeBorder} border rounded-2xl p-5 sm:p-6 relative overflow-hidden flex flex-col justify-between shadow-2xs hover:shadow-md transition-all duration-300 min-h-[240px] sm:min-h-[260px]`}
                >
                  {/* Card Header: Icon + Title + Weeks */}
                  <div>
                    <div className="flex items-center gap-3 mb-3.5">
                      <div
                        className={`w-9 h-9 rounded-full ${tri.badgeBg} flex items-center justify-center shrink-0`}
                      >
                        <PregnantMotherIcon
                          className={`w-5 h-5 ${tri.badgeText}`}
                        />
                      </div>
                      <div>
                        <h3 className="text-sm sm:text-base font-bold text-gray-950 leading-tight">
                          {tri.name}
                        </h3>
                        <p className="text-xs font-semibold text-gray-700">
                          {tri.weeks}
                        </p>
                      </div>
                    </div>

                    {/* Bullet Points with solid green check circles */}
                    <div className="space-y-2 max-w-[58%] sm:max-w-[62%] relative z-10">
                      {tri.bullets.map((bullet, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <div className="w-4 h-4 rounded-full bg-[#10793f] text-white flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-2.5 h-2.5 stroke-[3]" />
                          </div>
                          <span className="text-[11px] sm:text-xs font-semibold text-gray-800 leading-snug">
                            {bullet}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Cutout Image of Pregnant Woman anchored flush to bottom-right */}
                  <div
                    className="absolute right-0 bottom-0 pointer-events-none select-none w-[42%] sm:w-[40%] h-[90%] sm:h-[94%]"
                  >
                    <Image
                      src={tri.image}
                      alt={`${tri.name} ${tri.weeks}`}
                      fill
                      unoptimized
                      className="object-contain object-bottom-right drop-shadow-xs"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* 4. KEY NUTRIENTS DURING PREGNANCY                              */}
        {/* Grilled Chicken Quinoa Salad Bowl on Left + 5 Nutrients Right  */}
        {/* ============================================================== */}
        <section className="py-8 sm:py-12 bg-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
              {/* Left Column: Grilled Chicken Quinoa Salad Bowl */}
              <div className="lg:col-span-4 relative flex items-center justify-center">
                <div className="relative w-full aspect-4/3 sm:aspect-square max-w-[360px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm border border-gray-100">
                  <Image
                    src="/image/Grilled Chicken Quinoa Salad Bowl.png"
                    alt="Nutrient-Rich Balanced Pregnancy Meal Bowl with Lean Grilled Chicken, Greens, Avocado & Quinoa"
                    fill
                    unoptimized
                    className="object-cover object-center"
                  />
                </div>
              </div>

              {/* Right Column: Key Nutrients Grid */}
              <div className="lg:col-span-8">
                <div className="mb-6">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-950 tracking-tight">
                    Key Nutrients During Pregnancy
                  </h2>
                  <div className="w-12 h-1 bg-[#10793f] rounded-full mt-2" />
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4">
                  {nutrients.map((n) => {
                    const NutrientIcon = n.icon;
                    return (
                      <div
                        key={n.name}
                        className="flex flex-col items-center text-center p-2 sm:p-3 rounded-xl transition-all duration-200 hover:bg-emerald-50/40"
                      >
                        <div className="w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center mb-2 shrink-0 text-[#10793f]">
                          <NutrientIcon className="w-7 h-7 sm:w-8 sm:h-8" />
                        </div>
                        <h4 className="text-xs sm:text-sm font-bold text-gray-950 leading-tight mb-1">
                          {n.name}
                        </h4>
                        <p className="text-[11px] sm:text-xs text-gray-600 leading-snug">
                          {n.desc}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* 5. BENEFITS FOR YOU & YOUR BABY                                */}
        {/* Benefits List on Left + Ultrasound Still Life Photo on Right  */}
        {/* ============================================================== */}
        <section className="py-8 sm:py-12 bg-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
              {/* Left Column: 6 Benefits Grid */}
              <div className="lg:col-span-7">
                <div className="mb-6">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-950 tracking-tight">
                    Benefits for You &amp; Your Baby
                  </h2>
                  <div className="w-12 h-1 bg-[#10793f] rounded-full mt-2" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                  {babyBenefits.map((b) => {
                    const BIcon = b.icon;
                    return (
                      <div
                        key={b.title}
                        className="flex items-center gap-3 p-2.5 rounded-xl transition-all duration-200 hover:bg-emerald-50/40"
                      >
                        <div className="w-9 h-9 rounded-full bg-[#e8f7ee] text-[#10793f] flex items-center justify-center shrink-0">
                          <BIcon className="w-4 h-4 stroke-[2]" />
                        </div>
                        <span className="text-xs sm:text-sm font-bold text-gray-800">
                          {b.title}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Right Column: Cozy Ultrasound Baby Announcement Still Life */}
              <div className="lg:col-span-5 relative flex items-center justify-center">
                <div className="relative w-full aspect-16/10 rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm border border-gray-100">
                  <Image
                    src="/image/Cozy Ultrasound Baby Announcement Still Life.png"
                    alt="Cozy Ultrasound Baby Announcement with Soft Booties and Plush Toy"
                    fill
                    unoptimized
                    className="object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* 6. GET EXPERT PREGNANCY NUTRITION GUIDANCE                     */}
        {/* Banner with Doctor Cutout, Subtext, Checklist & CTA Button    */}
        {/* ============================================================== */}
        <section className="py-8 sm:py-12 bg-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="bg-[#eaf6ef] border border-[#cbebd7] rounded-3xl p-6 sm:p-8 relative overflow-hidden shadow-xs">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                {/* Left: Friendly Doctor Cutout Portrait */}
                <div className="lg:col-span-3 flex items-center justify-center">
                  <div className="relative w-[180px] sm:w-[210px] lg:w-[230px] h-[190px] sm:h-[220px] lg:h-[240px]">
                    <Image
                      src="/image/Friendly Medical Professional Portrait.png"
                      alt="Qualified Friendly Pregnancy Dietitian in White Lab Coat"
                      fill
                      unoptimized
                      className="object-contain object-bottom drop-shadow-sm"
                    />
                  </div>
                </div>

                {/* Center: Title & Friendly Subtitle */}
                <div className="lg:col-span-5 text-left">
                  <h3 className="text-xl sm:text-2xl font-extrabold text-gray-950 tracking-tight leading-snug">
                    Get Expert Pregnancy
                    <br />
                    Nutrition Guidance
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-gray-600 leading-relaxed max-w-md">
                    Consult with our qualified dietitians for safe, practical and
                    personalized nutrition support throughout your pregnancy
                    journey.
                  </p>
                </div>

                {/* Right: Checklist & Book Consultation Button */}
                <div className="lg:col-span-4 flex flex-col gap-2.5 justify-center">
                  {[
                    "Personalized dietary advice for each trimester",
                    "Safe and practical meal recommendations",
                    "Ongoing support for a healthier, happier pregnancy",
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <div className="w-4 h-4 rounded-full bg-[#10793f] text-white flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                      <span className="text-xs sm:text-sm font-semibold text-gray-800 leading-snug">
                        {item}
                      </span>
                    </div>
                  ))}

                  <div className="mt-2">
                    <button
                      onClick={() => handleOpenModal("consultation")}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl font-bold text-white text-xs sm:text-sm transition-all duration-200 cursor-pointer shadow-md shadow-emerald-700/25 hover:scale-[1.02] active:scale-[0.99]"
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* 7. FREQUENTLY ASKED QUESTIONS                                  */}
        {/* Accordion with reassuring pregnancy nutrition answers          */}
        {/* ============================================================== */}
        <section className="py-10 sm:py-16 bg-[#fafdfb] relative border-t border-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e8f7ee] text-[#10793f] text-xs font-bold mb-3">
                <HelpCircle className="w-3.5 h-3.5" />
                <span>Pregnancy FAQs</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-950 tracking-tight">
                Frequently Asked Questions
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-gray-600 max-w-lg mx-auto">
                Got questions about nutrition during your trimesters? Here are
                clear answers from our pediatric &amp; prenatal specialists.
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
                        className={`w-4 h-4 text-gray-500 shrink-0 transition-transform duration-200 ${
                          isOpen ? "rotate-180 text-[#10793f]" : ""
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

