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
  ChevronRight,
  ChevronDown,
  Check,
  ShieldCheck,
  Brain,
  Scale,
  Utensils,
  TrendingUp,
  Activity,
  Flame,
  Apple,
  Sparkles,
  Rocket,
  Heart,
  Smile,
  GraduationCap,
  Lightbulb,
  CheckCircle2,
  Users,
} from "lucide-react";

// Custom SVG Icons tailored to Child & Teen Nutrition reference design
const SproutGrowthIcon = ({ className = "w-6 h-6 text-[#10793f]" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M7 20h10" />
    <path d="M12 20v-8" />
    <path d="M12 12c0-4 4-6 8-6 0 4-2 8-8 8z" />
    <path d="M12 12c0-3-3-5-7-5 0 3 2 6 7 5z" />
  </svg>
);

const ImmunityShieldIcon = ({ className = "w-6 h-6 text-[#10793f]" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

const FocusBrainIcon = ({ className = "w-6 h-6 text-[#10793f]" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M9.5 2A4.5 4.5 0 0 0 5 6.5a4.4 4.4 0 0 0 .5 2 4.5 4.5 0 0 0-.5 6.5A4.5 4.5 0 0 0 9 21.5h1" />
    <path d="M14.5 2A4.5 4.5 0 0 1 19 6.5a4.4 4.4 0 0 1-.5 2 4.5 4.5 0 0 1 .5 6.5A4.5 4.5 0 0 1 15 21.5h-1" />
    <path d="M12 4v16" />
    <path d="M8 8h3" />
    <path d="M13 8h3" />
    <path d="M7 13h4" />
    <path d="M13 13h4" />
    <path d="M8 17h3" />
    <path d="M13 17h3" />
  </svg>
);

const ScaleWeightIcon = ({ className = "w-6 h-6 text-[#10793f]" }) => (
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

const CutleryHabitsIcon = ({ className = "w-6 h-6 text-[#10793f]" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M18 2v8a3 3 0 0 1-3 3h-1" />
    <path d="M18 13v9" />
    <path d="M6 2v7a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2V2" />
    <path d="M8 11v11" />
    <path d="M6 5h4" />
  </svg>
);

const AgeGroupGuidanceIcon = ({ className = "w-6 h-6 text-[#10793f]" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="12" cy="7" r="3" />
    <path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
    <circle cx="5" cy="11" r="2" />
    <path d="M2 21v-1a3 3 0 0 1 3-3h1" />
    <circle cx="19" cy="11" r="2" />
    <path d="M22 21v-1a3 3 0 0 0-3-3h-1" />
  </svg>
);

const RunningAthleteIcon = ({ className = "w-6 h-6 text-[#10793f]" }) => (
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

const StomachDigestionIcon = ({ className = "w-6 h-6 text-[#10793f]" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M12 4c-3.5 0-6 2-6 5.5 0 4 2.5 6.5 4 8 1.5 1.5 2.5 2.5 2.5 2.5s1-1 2.5-2.5c1.5-1.5 3-4 3-8 0-3.5-2.5-5.5-6-5.5z" />
    <path d="M9.5 9c.5-1 1.5-1.5 2.5-1.5s2 .5 2.5 1.5" />
    <path d="M10 13c.5.5 1.2.8 2 .8s1.5-.3 2-.8" />
  </svg>
);

const CornWholeGrainsIcon = ({ className = "w-6 h-6 text-[#10793f]" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.9"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M7 17L17 7c2-2 3-1 3 1s-3 7-5 9-7 3-9 3-1-1 1-3z" />
    <path d="M10 8l6 6" />
    <path d="M8 12l6 6" />
    <path d="M12 6l6 6" />
    <path d="M4 20c2-1 4-3 5-6" />
    <path d="M8 20c1-2 2-4 2-7" />
  </svg>
);

const AppleFruitsVegIcon = ({ className = "w-6 h-6 text-[#10793f]" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.9"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M12 4c.5-1.5 2-2.5 3.5-2.5 0 2-1 3.5-3.5 3.5" />
    <path d="M12 5c-3-1.5-7 0-7 5.5 0 5 3.5 9.5 7 11.5 3.5-2 7-6.5 7-11.5 0-5.5-4-7-7-5.5z" />
  </svg>
);

const DropletHealthyFatsIcon = ({ className = "w-6 h-6 text-[#10793f]" }) => (
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

const BicepQualityProteinIcon = ({ className = "w-6 h-6 text-[#10793f]" }) => (
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

const MilkCartonCalciumIcon = ({ className = "w-6 h-6 text-[#10793f]" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.9"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M8 2h8l2 4H6l2-4z" />
    <rect x="6" y="6" width="12" height="15" rx="1.5" />
    <path d="M10 11a2 2 0 1 0 4 0 2 2 0 0 0-4 0z" />
    <path d="M12 9v1" />
  </svg>
);

const ChildNutritionBadgeIcon = ({ className = "w-4 h-4 text-[#10793f]" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="12" cy="7" r="3.5" />
    <path d="M5.5 21v-2a6.5 6.5 0 0 1 13 0v2" />
    <path d="M12 10.5v3" />
    <path d="M10.5 12h3" />
  </svg>
);

export default function ChildTeenNutritionPage() {
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
      title: "Supports\nHealthy Growth",
      icon: SproutGrowthIcon,
    },
    {
      title: "Builds Strong\nImmunity",
      icon: ImmunityShieldIcon,
    },
    {
      title: "Improves Focus\n& Learning",
      icon: FocusBrainIcon,
    },
    {
      title: "Maintains\nHealthy Weight",
      icon: ScaleWeightIcon,
    },
    {
      title: "Encourages Better\nEating Habits",
      icon: CutleryHabitsIcon,
    },
    {
      title: "Guidance for\nEvery Age Group",
      icon: AgeGroupGuidanceIcon,
    },
  ];

  // 2. How We Support Your Child's Health (6 cards)
  const supportPillars = [
    {
      title: "Growth & Development",
      icon: TrendingUp,
      desc: "Optimal height, bone density, and muscle growth tracking.",
    },
    {
      title: "Immunity Boost",
      icon: ImmunityShieldIcon,
      desc: "Antioxidant and micronutrient defense to reduce sick days.",
    },
    {
      title: "Better Concentration",
      icon: FocusBrainIcon,
      desc: "Brain-boosting meals that support sharp classroom learning.",
    },
    {
      title: "Energy & Stamina",
      icon: RunningAthleteIcon,
      desc: "Sustained fuel for sports, academics, and active playtime.",
    },
    {
      title: "Healthy Digestion",
      icon: StomachDigestionIcon,
      desc: "Gut-friendly fiber and hydration for happy bellies.",
    },
    {
      title: "Healthy Weight Management",
      icon: ScaleWeightIcon,
      desc: "Gentle, non-restrictive balance for steady body composition.",
    },
  ];

  // 3. Nutrition Focus Areas (6 items with cutouts)
  const focusAreas = [
    {
      id: "fussy-eating",
      title: "Fussy Eating",
      desc: "Practical strategies to build healthy food habits.",
      image: "/image/happy_girl_healthy_salad.png",
      icon: CutleryHabitsIcon,
      badgeBg: "bg-amber-50 text-amber-700",
      cardBg: "bg-[#fcfaf4]",
      border: "border-amber-100",
    },
    {
      id: "low-immunity",
      title: "Low Immunity",
      desc: "Nutrient-rich guidance to strengthen natural defenses.",
      image: "/image/smiling_boy_flexing_blue_shirt.png",
      icon: ImmunityShieldIcon,
      badgeBg: "bg-emerald-50 text-emerald-700",
      cardBg: "bg-[#f3faf6]",
      border: "border-emerald-100",
    },
    {
      id: "underweight",
      title: "Underweight Concerns",
      desc: "Support healthy and steady weight gain.",
      image: "/image/smiling_boy_two_thumbs_up.png",
      icon: SproutGrowthIcon,
      badgeBg: "bg-emerald-50 text-emerald-700",
      cardBg: "bg-[#f4faf6]",
      border: "border-emerald-100",
    },
    {
      id: "overweight",
      title: "Overweight Tendency",
      desc: "Balanced, enjoyable nutrition for a healthy weight.",
      image: "/image/smiling_girl_triumphant_pose.png",
      icon: ScaleWeightIcon,
      badgeBg: "bg-emerald-50 text-emerald-700",
      cardBg: "bg-[#fcfaf6]",
      border: "border-emerald-100",
    },
    {
      id: "bone-health",
      title: "Bone Health",
      desc: "Calcium and Vitamin D support for strong bones.",
      image: "/image/milk_swiss_cheese_broccoli.png",
      icon: Activity,
      badgeBg: "bg-emerald-50 text-emerald-700",
      cardBg: "bg-[#f4faf6]",
      border: "border-emerald-100",
    },
    {
      id: "active-sports",
      title: "Active & Sports Kids",
      desc: "Nutrition for energy, performance and recovery.",
      image: "/image/soccer_water_bottle_bananas.png",
      icon: RunningAthleteIcon,
      badgeBg: "bg-emerald-50 text-emerald-700",
      cardBg: "bg-[#f3faf6]",
      border: "border-emerald-100",
    },
  ];

  // 4. Age Groups Breakdown
  const ageGroups = [
    {
      range: "Ages 2 – 5 Years",
      title: "Early Childhood Nutrition",
      highlight: "Habit Formation & Sensory Play",
      points: [
        "Positive food relationship and self-feeding confidence",
        "Overcoming texture aversion and picky eating phase",
        "Adequate iron, zinc, and brain-essential fatty acids",
      ],
    },
    {
      range: "Ages 6 – 12 Years",
      title: "School-Age Development",
      highlight: "Academic Focus & Sports Fuel",
      points: [
        "Smart school lunchbox planning that kids actually finish",
        "Sustained glucose release for classroom attention",
        "Immunity building to prevent recurrent seasonal absences",
      ],
    },
    {
      range: "Ages 13 – 18 Years",
      title: "Teens & Adolescents",
      highlight: "Pubertal Growth & Hormonal Balance",
      points: [
        "Fueling rapid growth spurts without nutrient gaps",
        "Skin clarity, hormonal balance, and mood regulation",
        "Competitive athletic nutrition and post-workout recovery",
      ],
    },
  ];

  // 5. Frequently Asked Questions
  const faqs = [
    {
      q: "My child is a very picky eater and refuses vegetables. How can your dietitian help?",
      a: "Picky eating is extremely common. Our pediatric dietitians never force bland foods or strict mandates. Instead, we use gentle food bridges, playful recipe adaptations, texture swaps, and sensory-friendly meal styling that introduce wholesome vegetables naturally without mealtime power struggles.",
    },
    {
      q: "Are the diet plans safe for growing children? Will my child feel starved?",
      a: "Never. We strictly avoid restrictive caloric limits or crash dieting for kids and teenagers. Every plan is rich in growth-critical proteins, complex carbohydrates, and essential micronutrients designed to fuel their natural growth spurts and active lifestyle.",
    },
    {
      q: "My teenager plays competitive sports. Do they need protein shakes or supplements?",
      a: "In 95% of young athletes, whole-food nutrition with timed meals and hydration is superior and safer than commercial protein supplements. Our dietitians calculate precise pre-training, during-game, and post-match recovery meals using natural, delicious home foods.",
    },
    {
      q: "Can you help with childhood underweight or overweight issues sensitively?",
      a: "Yes, compassionate, body-positive guidance is our highest priority. We focus entirely on nourishing the body, building athletic stamina, and establishing positive lifelong eating habits rather than obsessing over the scale.",
    },
    {
      q: "How are the consultations conducted?",
      a: "Consultations are conducted online via high-definition video calls with certified pediatric nutrition specialists. Parents and children participate together in a friendly, encouraging environment with weekly follow-ups and WhatsApp meal support.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col font-sans selection:bg-[#dcf2e3] selection:text-[#0b4728] relative overflow-x-hidden">
      {/* Sticky Navigation Bar */}
      <Navbar onOpenModal={handleOpenModal} />

      <main className="flex-1">
        {/* ============================================================== */}
        {/* 1. HERO SECTION: Child & Teen Nutrition                        */}
        {/* Exact match to the reference mockup design                      */}
        {/* ============================================================== */}
        <section className="relative overflow-hidden pt-3 sm:pt-4 pb-0">
          {/* Serene Greenhouse Bokeh Background */}
          <div className="absolute inset-0 z-0 pointer-events-none select-none">
            <Image
              src="/image/Serene Greenhouse Bokeh Background.png"
              alt="Serene Greenhouse Setting"
              fill
              priority
              unoptimized
              className="object-cover object-center"
            />
            {/* Directional gradient wash for crisp readability */}
            <div
              className="absolute inset-0 hidden md:block"
              style={{
                background:
                  "linear-gradient(90deg, rgba(243, 250, 245, 0.96) 0%, rgba(247, 252, 249, 0.90) 38%, rgba(240, 250, 243, 0.35) 68%, rgba(240, 250, 243, 0.12) 100%)",
              }}
            />
            <div
              className="absolute inset-0 md:hidden"
              style={{
                background:
                  "linear-gradient(180deg, rgba(243, 250, 245, 0.96) 0%, rgba(247, 252, 249, 0.92) 50%, rgba(240, 250, 243, 0.35) 100%)",
              }}
            />
          </div>

          {/* Leaf accents */}
          <div className="absolute left-0 top-1/3 -translate-y-1/2 w-16 sm:w-24 h-52 pointer-events-none opacity-40 z-0">
            <Image
              src="/image/Dewy Green Leafy Branch.png"
              alt=""
              fill
              unoptimized
              className="object-contain object-left"
            />
          </div>
          <div className="absolute right-0 top-1/4 w-16 sm:w-28 h-56 pointer-events-none opacity-40 z-0">
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
            <nav className="flex items-center gap-1.5 text-xs font-semibold mb-3">
              <Link
                href="/#services"
                className="text-gray-500 hover:text-[#10793f] transition-colors"
              >
                Services
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
              <span className="text-gray-900">Child & Teen Nutrition</span>
            </nav>

            {/* Main Hero Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-end">
              {/* Left Column: Pill Badge, Heading, Subtitle & Action Buttons */}
              <div className="lg:col-span-5 pb-6 sm:pb-10 z-10">
                {/* Pill Badge matching reference design with round icon */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#e8f7ee] border border-[#cbeed7] text-[#10793f] text-xs font-bold mb-4 shadow-2xs">
                  <div className="w-5 h-5 rounded-full bg-[#10793f]/15 flex items-center justify-center shrink-0">
                    <ChildNutritionBadgeIcon className="w-3.5 h-3.5 text-[#10793f]" />
                  </div>
                  <span>Child &amp; Teen Nutrition</span>
                </div>

                {/* Main Heading */}
                <h1
                  className="font-extrabold text-gray-950 tracking-tight leading-[1.12]"
                  style={{ fontSize: "clamp(30px, 3.6vw, 48px)" }}
                >
                  Right Nutrition for
                  <br />
                  <span className="text-[#10793f]">Healthy Growth &amp;</span>
                  <br />
                  <span className="text-[#10793f]">Brighter Future</span>
                </h1>

                {/* Subtitle */}
                <p className="mt-3.5 text-gray-600 text-sm sm:text-base leading-relaxed max-w-lg">
                  Expert nutrition guidance for children and teenagers to
                  support healthy growth, strong immunity, better focus and
                  lifelong wellness.
                </p>

                {/* Action Buttons */}
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => handleOpenModal("consultation")}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold text-white text-sm transition-all duration-200 cursor-pointer shadow-md shadow-emerald-700/25 hover:scale-[1.02] active:scale-[0.99]"
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
                    href="#focus-areas"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold text-gray-900 text-sm bg-white border border-gray-700/80 hover:border-gray-950 hover:bg-gray-50/90 transition-all duration-200 cursor-pointer shadow-xs hover:scale-[1.01]"
                  >
                    <span>Learn More</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Hero Visuals (Kids + Doodles + Food Arrangement) */}
              <div className="lg:col-span-7 relative flex items-end justify-center self-end min-h-[420px] sm:min-h-[490px] lg:min-h-[540px]">
                {/* Organic Mint Backdrop Glow behind Kids */}
                <div
                  className="absolute w-[320px] sm:w-[400px] lg:w-[460px] h-[320px] sm:h-[400px] lg:h-[460px] rounded-full pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(195, 241, 213, 0.90) 0%, rgba(220, 248, 232, 0.55) 55%, rgba(240, 252, 245, 0) 75%)",
                    left: "22%",
                    bottom: "20px",
                  }}
                />
                <div
                  className="absolute w-[320px] sm:w-[420px] lg:w-[480px] h-[320px] sm:h-[420px] lg:h-[480px] rounded-full pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(206, 244, 221, 0.80) 0%, rgba(228, 250, 237, 0.50) 55%, rgba(240, 252, 245, 0) 75%)",
                    right: "4%",
                    bottom: "35px",
                  }}
                />

                {/* Main Kids Image Container: Doodles are anchored directly to this container */}
                <div className="relative w-[440px] sm:w-[560px] lg:w-[640px] h-[390px] sm:h-[480px] lg:h-[530px] z-10 flex items-end justify-center">
                  
                  {/* 1. Radiating burst lines directly above boy's flexing fist */}
                  <div
                    className="absolute z-20 pointer-events-none w-10 sm:w-12 lg:w-14 h-8 sm:h-10 lg:h-12"
                    style={{ left: "8%", top: "14%" }}
                  >
                    <Image
                      src="/image/doodle_burst.png"
                      alt=""
                      fill
                      unoptimized
                      className="object-contain"
                    />
                  </div>

                  {/* 2. Growth Chart with bars & curved arrow on upper right */}
                  <div
                    className="absolute z-20 pointer-events-none hidden sm:block w-11 sm:w-13 lg:w-15 h-10 sm:h-12 lg:h-14"
                    style={{ right: "3%", top: "4%" }}
                  >
                    <Image
                      src="/image/doodle_chart.png"
                      alt=""
                      fill
                      unoptimized
                      className="object-contain"
                    />
                  </div>

                  {/* 3. Graduation Cap beside girl's shoulder */}
                  <div
                    className="absolute z-20 pointer-events-none hidden sm:block w-11 sm:w-13 lg:w-15 h-10 sm:h-12 lg:h-14"
                    style={{ right: "-4%", top: "22%" }}
                  >
                    <Image
                      src="/image/doodle_cap.png"
                      alt=""
                      fill
                      unoptimized
                      className="object-contain"
                    />
                  </div>

                  {/* 4. Lightbulb Doodle beside girl's arm */}
                  <div
                    className="absolute z-20 pointer-events-none hidden sm:block w-9 sm:w-11 lg:w-13 h-9 sm:h-11 lg:h-13"
                    style={{ right: "1%", top: "42%" }}
                  >
                    <Image
                      src="/image/doodle_bulb.png"
                      alt=""
                      fill
                      unoptimized
                      className="object-contain"
                    />
                  </div>

                  {/* 5. 4-pointed Star Sparkle beside girl's books */}
                  <div
                    className="absolute z-20 pointer-events-none hidden sm:block w-7 sm:w-9 lg:w-10 h-7 sm:h-9 lg:h-10"
                    style={{ right: "-3%", top: "62%" }}
                  >
                    <Image
                      src="/image/doodle_star.png"
                      alt=""
                      fill
                      unoptimized
                      className="object-contain"
                    />
                  </div>

                  {/* The Kids Image */}
                  <Image
                    src="/image/Happy Siblings with Books and Strength.png"
                    alt="Happy Siblings with Books and Strength — Child & Teen Nutrition"
                    fill
                    priority
                    unoptimized
                    className="object-contain object-bottom drop-shadow-xs"
                  />
                </div>

                {/* Foreground Table Arrangement: Compact, smaller sized healthy food & fruits */}
                {/* Clean, smaller size resting on the bottom without overwhelming the kids */}
                <div
                  className="absolute z-20 pointer-events-none"
                  style={{
                    bottom: "-2px",
                    left: "14%",
                    width: "clamp(240px, 32vw, 360px)",
                    height: "clamp(95px, 12vw, 145px)",
                  }}
                >
                  <Image
                    src="/image/Healthy Food Still Life Arrangement.png"
                    alt="Healthy Food Still Life — Fresh Milk, Fruits & Balanced Nutrition"
                    fill
                    priority
                    unoptimized
                    className="object-contain object-bottom drop-shadow-md"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* 2. BENEFITS / HIGHLIGHTS BAR (6 COLUMNS)                       */}
        {/* Clean rounded container right below the hero                   */}
        {/* ============================================================== */}
        <section className="relative z-20 -mt-2 sm:-mt-3 pb-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="bg-white rounded-2xl sm:rounded-3xl border border-gray-100 shadow-sm p-4 sm:p-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 divide-y lg:divide-y-0 lg:divide-x divide-gray-100">
              {benefits.map((b, idx) => {
                const IconComponent = b.icon;
                return (
                  <div
                    key={b.title}
                    className={`flex flex-col items-center text-center px-2 py-2 sm:py-0 ${
                      idx !== 0 ? "pt-4 lg:pt-0" : ""
                    }`}
                  >
                    <div className="w-12 h-12 rounded-full bg-[#eef8f2] border border-emerald-100/80 flex items-center justify-center mb-2.5 group-hover:scale-110 transition-transform shadow-2xs">
                      <IconComponent className="w-5 h-5 text-[#10793f]" />
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
        {/* 3. SPLIT SECTION: Nutrition Support for Growing Minds & Bodies */}
        {/* Rounded outdoor kids image on left + explanatory text on right */}
        {/* ============================================================== */}
        <section className="py-10 sm:py-14 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Rounded Outdoor Kids Photo */}
              <div className="lg:col-span-6 relative">
                <div className="relative h-[260px] sm:h-[320px] lg:h-[350px] w-full rounded-3xl overflow-hidden shadow-lg border-4 border-white/90">
                  <Image
                    src="/image/Joyful Soccer Game in the Park.png"
                    alt="Joyful Soccer Game in the Park — Nutrition Support for Growing Minds & Bodies"
                    fill
                    priority
                    unoptimized
                    className="object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  />
                  {/* Subtle soft gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Decorative floating leaf on the corner */}
                <div className="absolute -top-5 -right-5 w-20 h-20 pointer-events-none opacity-85 z-10">
                  <Image
                    src="/image/Dewy Green Leafy Branch.png"
                    alt=""
                    fill
                    unoptimized
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Right Column: Heading & Description */}
              <div className="lg:col-span-6">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-950 tracking-tight leading-tight">
                  Nutrition Support for
                  <br />
                  <span className="text-gray-950">Growing Minds & Bodies</span>
                </h2>

                {/* Green accent line */}
                <div className="w-14 h-1 bg-[#10793f] rounded-full my-3.5" />

                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mt-4">
                  A balanced, age-appropriate diet helps children and teenagers
                  grow stronger, stay energetic, perform better in studies and
                  sports, and develop healthy lifelong habits.
                </p>

                <div className="mt-6 space-y-3">
                  {[
                    "Customized macro & micronutrient profiling for each age stage",
                    "Practical solutions for picky eating, lunchboxes & snacks",
                    "Continuous parental coaching and WhatsApp diet review",
                  ].map((feat) => (
                    <div key={feat} className="flex items-start gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-[#10793f] text-white flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span className="text-xs sm:text-sm font-semibold text-gray-800">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-7">
                  <button
                    onClick={() => handleOpenModal("consultation")}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-bold text-white text-xs sm:text-sm shadow-md transition-all hover:scale-[1.02] cursor-pointer"
                    style={{ background: "#10793f" }}
                  >
                    <span>Get a Pediatric Nutrition Plan</span>
                    <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* 4. HOW WE SUPPORT YOUR CHILD'S HEALTH (6 CARDS)               */}
        {/* Mint pastel rounded cards matching the mockup                  */}
        {/* ============================================================== */}
        <section className="py-12 sm:py-16 bg-[#f9fcfa] border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-950 tracking-tight">
                How We Support Your Child&apos;s Health
              </h2>
              <div className="w-14 h-1 bg-[#10793f] rounded-full mx-auto my-3" />
              <p className="text-gray-600 text-xs sm:text-sm">
                Targeted clinical nutrition across the critical milestones of childhood and teenage growth.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3.5 sm:gap-4">
              {supportPillars.map((pillar) => {
                const IconComponent = pillar.icon;
                return (
                  <div
                    key={pillar.title}
                    className="bg-white rounded-2xl p-4 sm:p-5 border border-emerald-100/70 shadow-2xs hover:shadow-md transition-all duration-200 flex flex-col items-center text-center group hover:-translate-y-1"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-[#edf8f2] border border-[#cbeed7] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-6 h-6 text-[#10793f]" />
                    </div>
                    <h3 className="text-xs sm:text-sm font-bold text-gray-900 leading-tight">
                      {pillar.title}
                    </h3>
                    <p className="text-[11px] text-gray-500 mt-1.5 leading-snug hidden sm:block">
                      {pillar.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* 5. NUTRITION FOCUS AREAS & A BALANCED PLATE                    */}
        {/* 2-Column layout matching mockup exactly                        */}
        {/* ============================================================== */}
        <section id="focus-areas" className="py-12 sm:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            {/* Section Header sitting cleanly above both columns */}
            <div className="mb-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-950 tracking-tight">
                Nutrition Focus Areas
              </h2>
              <div className="w-12 h-1 bg-[#10793f] rounded-full mt-2.5" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
              {/* Left Column: Nutrition Focus Areas (6 Cards) */}
              <div className="lg:col-span-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                  {focusAreas.map((area) => {
                    const AreaIcon = area.icon;
                    return (
                      <div
                        key={area.id}
                        className={`${area.cardBg} ${area.border} border rounded-2xl p-3.5 sm:p-4 min-h-[105px] sm:min-h-[115px] flex items-center justify-between gap-3 shadow-xs hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 group`}
                      >
                        {/* Text and Icon on the Left - Full view with no cutoffs */}
                        <div className="flex-1 min-w-0 pr-1">
                          <div className="flex items-center gap-2 mb-1.5">
                            <div className="w-7 h-7 rounded-lg bg-white border border-emerald-100 flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 transition-transform">
                              <AreaIcon className="w-4 h-4 text-[#10793f]" />
                            </div>
                            <h3 className="text-xs sm:text-[13px] font-bold text-gray-950 leading-tight">
                              {area.title}
                            </h3>
                          </div>
                          <p className="text-[11px] sm:text-xs text-gray-600 leading-snug">
                            {area.desc}
                          </p>
                        </div>

                        {/* Child Cutout Image on the Right */}
                        <div className="relative w-14 sm:w-16 h-14 sm:h-16 shrink-0 flex items-center justify-end">
                          <Image
                            src={area.image}
                            alt={area.title}
                            fill
                            unoptimized
                            className="object-contain object-right drop-shadow-sm group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Right Column: A Balanced Plate for Children & Teens (Compact card, no unnecessary space) */}
              <div className="lg:col-span-6">
                <div className="bg-[#f4faf6] border border-[#d6eedf] rounded-[28px] sm:rounded-[32px] p-3 sm:p-4 md:p-5 relative overflow-hidden shadow-xs">
                  {/* Visual Meal Plate Graphic matching reference mockup with Title in top-left */}
                  <div className="relative w-full aspect-[451/355] max-w-[480px] mx-auto select-none">
                    
                    {/* Title inside card at top-left, exactly matching reference image */}
                    <div
                      className="absolute z-20"
                      style={{ left: "4%", top: "4%" }}
                    >
                      <h3 className="text-base sm:text-lg md:text-[21px] font-black text-gray-950 tracking-tight leading-tight">
                        A Balanced Plate
                        <br />
                        for Children &amp; Teens
                      </h3>
                    </div>

                    {/* SVG Layer for Hand-drawn Curved Indicator Arrows */}
                    <svg
                      viewBox="0 0 451 355"
                      className="absolute inset-0 w-full h-full pointer-events-none z-20"
                      fill="none"
                    >
                      <defs>
                        <marker
                          id="plate-arrow"
                          viewBox="0 0 10 10"
                          refX="6"
                          refY="5"
                          markerWidth="5"
                          markerHeight="5"
                          orient="auto-start-reverse"
                        >
                          <path d="M 0 1.5 L 7 5 L 0 8.5 z" fill="#374151" />
                        </marker>
                      </defs>

                      {/* 1. Whole Grains Arrow -> Grains partition (top edge) */}
                      <path
                        d="M 140 116 C 152 118, 160 124, 164 128"
                        stroke="#374151"
                        strokeWidth="1.3"
                        strokeLinecap="round"
                        markerEnd="url(#plate-arrow)"
                      />

                      {/* 2. Fruits & Vegetables Arrow -> Salad/Cucumber partition */}
                      <path
                        d="M 112 190 C 120 188, 126 190, 132 192"
                        stroke="#374151"
                        strokeWidth="1.3"
                        strokeLinecap="round"
                        markerEnd="url(#plate-arrow)"
                      />

                      {/* 3. Healthy Fats Arrow -> Bottom section */}
                      <path
                        d="M 142 290 C 158 286, 168 280, 174 272"
                        stroke="#374151"
                        strokeWidth="1.3"
                        strokeLinecap="round"
                        markerEnd="url(#plate-arrow)"
                      />

                      {/* 4. Quality Protein Arrow -> Protein/Rice section */}
                      <path
                        d="M 326 114 C 310 118, 300 122, 294 128"
                        stroke="#374151"
                        strokeWidth="1.3"
                        strokeLinecap="round"
                        markerEnd="url(#plate-arrow)"
                      />

                      {/* 5. Calcium-Rich Foods Arrow -> Calcium section */}
                      <path
                        d="M 344 252 C 328 250, 318 244, 310 238"
                        stroke="#374151"
                        strokeWidth="1.3"
                        strokeLinecap="round"
                        markerEnd="url(#plate-arrow)"
                      />
                    </svg>

                    {/* Central Partitioned Meal Plate */}
                    <div
                      className="absolute z-10"
                      style={{
                        left: "50%",
                        top: "56%",
                        width: "43%",
                        height: "55%",
                        transform: "translate(-50%, -50%)",
                      }}
                    >
                      <Image
                        src="/image/Colorful Balanced Meal Plate.png"
                        alt="A Balanced Plate for Children & Teens"
                        fill
                        unoptimized
                        className="object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.1)]"
                      />
                    </div>

                    {/* 1. Whole Grains Callout (Top-Left) */}
                    <div
                      className="absolute flex items-start gap-1.5 sm:gap-2 z-20"
                      style={{ left: "4%", top: "27%" }}
                    >
                      <CornWholeGrainsIcon className="w-5 h-5 sm:w-6 sm:h-6 text-[#10793f] shrink-0 mt-0.5" />
                      <div>
                        <div className="text-[11px] sm:text-[13px] font-black text-gray-950 leading-tight">
                          Whole Grains
                        </div>
                        <div className="text-[9px] sm:text-[11px] text-gray-500 font-medium leading-tight mt-0.5">
                          for lasting energy
                        </div>
                      </div>
                    </div>

                    {/* 2. Fruits & Vegetables Callout (Middle-Left) */}
                    <div
                      className="absolute flex items-start gap-1.5 sm:gap-2 z-20"
                      style={{ left: "4%", top: "50%" }}
                    >
                      <AppleFruitsVegIcon className="w-5 h-5 sm:w-6 sm:h-6 text-[#10793f] shrink-0 mt-0.5" />
                      <div>
                        <div className="text-[11px] sm:text-[13px] font-black text-gray-950 leading-tight">
                          Fruits &amp;
                          <br />
                          Vegetables
                        </div>
                        <div className="text-[9px] sm:text-[11px] text-gray-500 font-medium leading-tight mt-0.5">
                          for vitamins
                          <br />
                          &amp; immunity
                        </div>
                      </div>
                    </div>

                    {/* 3. Healthy Fats Callout (Bottom-Left) */}
                    <div
                      className="absolute flex items-start gap-1.5 sm:gap-2 z-20"
                      style={{ left: "7%", top: "80%" }}
                    >
                      <DropletHealthyFatsIcon className="w-5 h-5 sm:w-6 sm:h-6 text-[#10793f] shrink-0 mt-0.5" />
                      <div>
                        <div className="text-[11px] sm:text-[13px] font-black text-gray-950 leading-tight">
                          Healthy Fats
                        </div>
                        <div className="text-[9px] sm:text-[11px] text-gray-500 font-medium leading-tight mt-0.5">
                          for brain development
                        </div>
                      </div>
                    </div>

                    {/* 4. Quality Protein Callout (Top-Right) */}
                    <div
                      className="absolute flex items-start gap-1.5 sm:gap-2 z-20"
                      style={{ right: "4%", top: "26%" }}
                    >
                      <BicepQualityProteinIcon className="w-5 h-5 sm:w-6 sm:h-6 text-[#10793f] shrink-0 mt-0.5" />
                      <div>
                        <div className="text-[11px] sm:text-[13px] font-black text-gray-950 leading-tight">
                          Quality
                          <br />
                          Protein
                        </div>
                        <div className="text-[9px] sm:text-[11px] text-gray-500 font-medium leading-tight mt-0.5">
                          for growth
                          <br />
                          &amp; repair
                        </div>
                      </div>
                    </div>

                    {/* 5. Calcium-Rich Foods Callout (Middle/Bottom-Right) */}
                    <div
                      className="absolute flex items-start gap-1.5 sm:gap-2 z-20"
                      style={{ right: "4%", top: "58%" }}
                    >
                      <MilkCartonCalciumIcon className="w-5 h-5 sm:w-6 sm:h-6 text-[#10793f] shrink-0 mt-0.5" />
                      <div>
                        <div className="text-[11px] sm:text-[13px] font-black text-gray-950 leading-tight">
                          Calcium-
                          <br />
                          Rich Foods
                        </div>
                        <div className="text-[9px] sm:text-[11px] text-gray-500 font-medium leading-tight mt-0.5">
                          for strong
                          <br />
                          bones
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* 6. AGE GROUPS GUIDANCE (PEDIATRIC NUTRITION BY MILESTONE)      */}
        {/* ============================================================== */}
        <section className="py-12 sm:py-16 bg-[#fafcfa] border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-[#10793f] text-xs font-bold mb-3">
                <Users className="w-3.5 h-3.5" />
                <span>Tailored for Every Stage</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-950 tracking-tight">
                Nutrition Solutions by Age Milestone
              </h2>
              <div className="w-14 h-1 bg-[#10793f] rounded-full mx-auto my-3" />
              <p className="text-gray-600 text-xs sm:text-sm">
                Because nutritional demands shift drastically between toddlers, schoolchildren, and adolescents.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {ageGroups.map((grp) => (
                <div
                  key={grp.range}
                  className="bg-white rounded-3xl p-6 border border-emerald-100/80 shadow-2xs hover:shadow-md transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-extrabold bg-[#e8f7ee] text-[#10793f] mb-3">
                      {grp.range}
                    </span>
                    <h3 className="text-lg font-bold text-gray-950">
                      {grp.title}
                    </h3>
                    <p className="text-xs font-semibold text-[#10793f] mt-1 mb-4">
                      {grp.highlight}
                    </p>

                    <div className="space-y-2.5 border-t border-gray-100 pt-4">
                      {grp.points.map((pt) => (
                        <div key={pt} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#10793f] shrink-0 mt-0.5" />
                          <span className="text-xs text-gray-600 leading-snug">
                            {pt}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <button
                      onClick={() => handleOpenModal("consultation")}
                      className="w-full py-2.5 rounded-xl text-xs font-bold text-emerald-800 bg-emerald-50/80 hover:bg-emerald-100 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <span>Consult for this Age</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* 7. FREQUENTLY ASKED QUESTIONS                                 */}
        {/* ============================================================== */}
        <section className="py-12 sm:py-16 bg-white border-t border-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-950 tracking-tight">
                Frequently Asked Questions
              </h2>
              <div className="w-14 h-1 bg-[#10793f] rounded-full mx-auto my-3" />
              <p className="text-gray-600 text-xs sm:text-sm">
                Got questions about pediatric nutrition? Our senior dietitians have answers.
              </p>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, idx) => {
                const isOpen = faqOpen === idx;
                return (
                  <div
                    key={faq.q}
                    className="border border-gray-200 rounded-2xl overflow-hidden transition-colors"
                  >
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 bg-white hover:bg-gray-50/80 transition-colors cursor-pointer"
                    >
                      <span className="text-sm sm:text-base font-bold text-gray-900">
                        {faq.q}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-gray-500 transition-transform duration-200 shrink-0 ${
                          isOpen ? "rotate-180 text-[#10793f]" : ""
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100 bg-[#fbfdfb]">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* 8. BOTTOM CTA BANNER: Give Your Child a Stronger Tomorrow     */}
        {/* Exact match to the banner at the bottom of the mockup          */}
        {/* ============================================================== */}
        <section className="py-10 sm:py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="bg-[#e6f7ec] border border-[#cbeed7] rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden shadow-sm">
              {/* Rocket Badge + Heading */}
              <div className="flex items-center gap-4 sm:gap-5 w-full md:w-auto">
                <div className="w-14 h-14 rounded-2xl bg-white shadow-xs flex items-center justify-center text-[#10793f] shrink-0 border border-emerald-100">
                  <Rocket className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-2xl font-extrabold text-gray-950 tracking-tight leading-snug">
                    Give Your Child a Stronger,
                    <br className="hidden sm:inline" /> Healthier Tomorrow
                  </h3>
                </div>
              </div>

              {/* Vertical divider on desktop */}
              <div className="hidden md:block w-px h-12 bg-emerald-300/70 shrink-0" />

              {/* Subtitle */}
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed max-w-sm text-center md:text-left">
                Get personalized nutrition guidance from our expert dietitians
                for your child&apos;s unique needs.
              </p>

              {/* CTA Button */}
              <button
                onClick={() => handleOpenModal("consultation")}
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 rounded-xl font-bold text-white text-xs sm:text-sm transition-all duration-200 cursor-pointer shadow-md shadow-emerald-700/25 hover:scale-[1.02] shrink-0 w-full sm:w-auto"
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
        </section>
      </main>

      {/* Global Consultation & Assessment Modal */}
      <ConsultationModal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        defaultTab={modalType}
      />

      {/* Footer Component */}
      <Footer onOpenModal={handleOpenModal} />
    </div>
  );
}

