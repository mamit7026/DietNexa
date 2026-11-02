"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ConsultationModal from "@/components/ConsultationModal";
import {
  Search,
  Star,
  Calendar,
  GraduationCap,
  ArrowRight,
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  ShieldCheck,
  Heart,
  Leaf,
  Headphones,
  Sparkles,
  Play,
  CheckCircle2,
  Users,
  Award,
  CalendarCheck,
  Check,
  X,
} from "lucide-react";

// 8 Expert Dietitians matching the design mockup exactly
const allDietitians = [
  {
    id: "dr-ananya-sen",
    name: "Dr. Ananya Sen",
    role: "Clinical Dietitian",
    rating: "4.9",
    reviews: "2,300+",
    category: "Weight Management",
    tags: ["Weight Management", "Diabetes Care"],
    experience: "8+ Years Experience",
    education: "M.Sc. in Nutrition & Dietetics",
    image: "/image/dr_ananya_sen.jpg",
  },
  {
    id: "ms-riya-kapoor",
    name: "Ms. Riya Kapoor",
    role: "Sports Nutritionist",
    rating: "4.8",
    reviews: "1,500+",
    category: "Sports Nutrition",
    tags: ["Sports Nutrition", "Weight Loss"],
    experience: "6+ Years Experience",
    education: "M.Sc. in Sports Nutrition",
    image: "/image/ms_riya_kapoor.jpg",
  },
  {
    id: "dr-neha-malhotra",
    name: "Dr. Neha Malhotra",
    role: "Women's Health Dietitian",
    rating: "4.9",
    reviews: "1,800+",
    category: "Pregnancy & Maternal",
    tags: ["Pregnancy Nutrition", "PCOS/PCOD"],
    experience: "10+ Years Experience",
    education: "Ph.D. in Clinical Nutrition",
    image: "/image/dr_neha_malhotra.jpg",
  },
  {
    id: "dr-arjun-mehta",
    name: "Dr. Arjun Mehta",
    role: "Diabetes & Metabolic Health",
    rating: "4.9",
    reviews: "2,100+",
    category: "Diabetes Care",
    tags: ["Diabetes Care", "Heart Health"],
    experience: "9+ Years Experience",
    education: "M.Sc. in Clinical Nutrition",
    image: "/image/dr_arjun_mehta.jpg",
  },
  {
    id: "dr-priya-sharma",
    name: "Dr. Priya Sharma",
    role: "Pediatric Dietitian",
    rating: "4.8",
    reviews: "1,200+",
    category: "Child Nutrition",
    tags: ["Child Nutrition", "Growth & Development"],
    experience: "7+ Years Experience",
    education: "M.Sc. in Pediatric Nutrition",
    image: "/image/dr_priya_sharma.jpg",
  },
  {
    id: "dr-rohit-verma",
    name: "Dr. Rohit Verma",
    role: "Lifestyle & Wellness Coach",
    rating: "4.9",
    reviews: "1,700+",
    category: "Lifestyle Management",
    tags: ["Lifestyle Management", "General Wellness"],
    experience: "8+ Years Experience",
    education: "M.Sc. in Nutrition",
    image: "/image/dr_rohit_verma.jpg",
  },
  {
    id: "ms-kavita-rao",
    name: "Ms. Kavita Rao",
    role: "Weight Loss Specialist",
    rating: "4.8",
    reviews: "1,300+",
    category: "Weight Management",
    tags: ["Weight Loss", "Metabolic Health"],
    experience: "6+ Years Experience",
    education: "M.Sc. in Dietetics",
    image: "/image/ms_kavita_rao.jpg",
  },
  {
    id: "dr-sneha-iyer",
    name: "Dr. Sneha Iyer",
    role: "Clinical Nutritionist",
    rating: "4.9",
    reviews: "1,600+",
    category: "Hormonal Health",
    tags: ["Thyroid Care", "Hormonal Health"],
    experience: "7+ Years Experience",
    education: "M.Sc. in Clinical Nutrition",
    image: "/image/dr_sneha_iyer.jpg",
  },
];

const categoryList = [
  "All Dietitians",
  "Weight Management",
  "Diabetes Care",
  "Sports Nutrition",
  "Pregnancy & Maternal",
  "Child Nutrition",
];

const moreCategories = [
  "Thyroid Care",
  "Hormonal Health",
  "Lifestyle Management",
  "General Wellness",
];

export default function DietitiansPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState("consultation");
  const [selectedDietitian, setSelectedDietitian] = useState(null);
  const [howItWorksOpen, setHowItWorksOpen] = useState(false);

  // Filter & Search states
  const [selectedCategory, setSelectedCategory] = useState("All Dietitians");
  const [searchQuery, setSearchQuery] = useState("");
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const handleOpenModal = (type = "consultation", dietitian = null) => {
    setModalType(type);
    setSelectedDietitian(dietitian);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  // Filter logic
  const filteredDietitians = useMemo(() => {
    return allDietitians.filter((d) => {
      const matchesSearch =
        d.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        d.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
        d.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      if (!matchesSearch) return false;

      if (selectedCategory === "All Dietitians") return true;

      return (
        d.category === selectedCategory ||
        d.tags.some(
          (t) => t.toLowerCase() === selectedCategory.toLowerCase()
        )
      );
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col font-sans selection:bg-[#dcf2e3] selection:text-[#0b4728] w-full overflow-x-hidden">
      {/* 1. TOP NAVBAR */}
      <Navbar onOpenModal={handleOpenModal} />

      <main className="flex-1">
        {/* ============================================================== */}
        {/* 2. HERO SECTION: "Meet Our Expert Dietitians"                  */}
        {/* ============================================================== */}
        <section className="relative pt-6 sm:pt-10 pb-8 sm:pb-12 overflow-hidden">
          {/* Serene Greenhouse Bokeh Background — Spreads edge-to-edge */}
          <div className="absolute inset-0 z-0 pointer-events-none select-none">
            <Image
              src="/image/Serene Greenhouse Bokeh Background.png"
              alt="Clinic Greenhouse Setting"
              fill
              priority
              unoptimized
              className="object-cover object-center"
            />
            {/* Directional gradient wash: preserves maximum text readability on left while letting lush greenhouse bokeh show beautifully across the right and behind doctor */}
            <div
              className="absolute inset-0 hidden md:block"
              style={{
                background:
                  "linear-gradient(90deg, rgba(243, 250, 245, 0.97) 0%, rgba(247, 252, 249, 0.90) 38%, rgba(240, 250, 243, 0.38) 68%, rgba(240, 250, 243, 0.12) 100%)",
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

          {/* Top-left decorative leafy branch */}
          <div
            className="absolute -top-4 -left-4 pointer-events-none z-10 hidden sm:block w-[180px] h-[220px] opacity-70 select-none"
          >
            <Image
              src="/image/Dewy Green Leafy Branch.png"
              alt=""
              fill
              priority
              unoptimized
              className="object-contain object-left-top"
            />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">

              {/* LEFT CONTENT */}
              <div className="lg:col-span-6 flex flex-col items-start text-left">
                {/* Badge: "Our Dietitians" */}
                <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs sm:text-[13px] font-bold text-[#10793f] bg-[#eaf6ee] border border-[#d2ecd9] mb-4 shadow-2xs">
                  Our Dietitians
                </span>

                {/* H1 Heading */}
                <h1
                  className="font-extrabold text-gray-900 tracking-tight leading-[1.12] mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-[50px]"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  Meet Our<br />
                  <span className="text-gray-900">Expert Dietitians</span>
                </h1>

                {/* Subtitle */}
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 max-w-lg">
                  A trusted team of certified dietitians and nutrition experts,
                  dedicated to helping you achieve your health and wellness goals.
                </p>

                {/* CTAs */}
                <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 w-full sm:w-auto">
                  <button
                    onClick={() => handleOpenModal("consultation")}
                    className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 rounded-full text-white font-semibold text-sm sm:text-base transition-all hover:opacity-95 active:scale-95 shadow-md cursor-pointer"
                    style={{
                      background: "#10793f",
                      boxShadow: "0 6px 20px rgba(16,121,63,0.30)",
                    }}
                  >
                    <span>Book a Consultation</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => setHowItWorksOpen(true)}
                    className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 rounded-full text-gray-800 bg-white border border-gray-300 hover:border-gray-400 hover:bg-gray-50 font-semibold text-sm sm:text-base transition-all shadow-2xs active:scale-95 cursor-pointer"
                  >
                    <div className="w-5 h-5 rounded-full border-1.5 border-gray-700 flex items-center justify-center">
                      <Play className="w-2.5 h-2.5 fill-gray-700 text-gray-700 ml-0.5" />
                    </div>
                    <span>How It Works</span>
                  </button>
                </div>
              </div>

              {/* RIGHT VISUAL COMPOSITION */}
              <div className="lg:col-span-6 relative flex flex-col items-center justify-center lg:items-end w-full">
                {/* ── DESKTOP VISUAL (lg: >= 1024px) ── */}
                <div className="hidden lg:block relative w-[540px] xl:w-[580px] h-[440px] xl:h-[460px]">
                  {/* 1. Vibrant Green Circle Backdrop Blob */}
                  <div
                    className="absolute pointer-events-none z-0 rounded-full"
                    style={{
                      width: "350px",
                      height: "350px",
                      background:
                        "radial-gradient(circle at 45% 45%, #7ed338 0%, #68bf2b 60%, #4f9f1e 100%)",
                      top: "46%",
                      left: "38%",
                      transform: "translate(-50%, -50%)",
                      boxShadow: "0 18px 45px rgba(104,191,43,0.28)",
                    }}
                  />

                  {/* 2. Doctor Cutout in Green Scrubs + White Coat */}
                  <div
                    className="absolute z-10 pointer-events-none"
                    style={{
                      bottom: "0px",
                      left: "38%",
                      transform: "translateX(-50%)",
                      width: "350px",
                      height: "98%",
                    }}
                  >
                    <div className="relative w-full h-full">
                      <Image
                        src="/image/hero section Smiling Doctor in Green Scrubs.png"
                        alt="DietNexa Certified Clinical Dietitian"
                        fill
                        priority
                        unoptimized
                        className="object-contain object-bottom"
                      />
                    </div>
                  </div>

                  {/* 3. Fresh Vegetable Medley Cutout — Bottom Foreground */}
                  <div
                    className="absolute z-20 pointer-events-none"
                    style={{
                      bottom: "0px",
                      left: "24%",
                      width: "240px",
                      height: "46%",
                    }}
                  >
                    <div className="relative w-full h-full">
                      <Image
                        src="/image/hero sectionFresh Vegetable Medley Cutout.png"
                        alt="Fresh Healthy Vegetables"
                        fill
                        priority
                        unoptimized
                        className="object-contain object-bottom drop-shadow-xl"
                      />
                    </div>
                  </div>

                  {/* 4. Desktop Floating Feature Pills Stacked on Right (Vertically Centered) */}
                  <div
                    className="absolute right-0 flex flex-col gap-2.5 z-30 w-[215px]"
                    style={{
                      top: "50%",
                      transform: "translateY(-50%)",
                    }}
                  >
                    <div
                      className="flex items-center gap-3 bg-white/95 backdrop-blur-md px-3.5 py-2.5 rounded-2xl border border-emerald-100 shadow-sm transition-transform duration-200 hover:scale-102"
                      style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.06)" }}
                    >
                      <div className="w-8 h-8 rounded-xl bg-[#eaf6ee] flex items-center justify-center shrink-0 text-[#10793f]">
                        <ShieldCheck className="w-4 h-4" />
                      </div>
                      <span className="text-[12.5px] font-bold text-gray-800 leading-tight">
                        Certified & Experienced
                      </span>
                    </div>

                    <div
                      className="flex items-center gap-3 bg-white/95 backdrop-blur-md px-3.5 py-2.5 rounded-2xl border border-emerald-100 shadow-sm transition-transform duration-200 hover:scale-102"
                      style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.06)" }}
                    >
                      <div className="w-8 h-8 rounded-xl bg-[#eaf6ee] flex items-center justify-center shrink-0 text-[#10793f]">
                        <Heart className="w-4 h-4" />
                      </div>
                      <span className="text-[12.5px] font-bold text-gray-800 leading-tight">
                        Personalized Nutrition
                      </span>
                    </div>

                    <div
                      className="flex items-center gap-3 bg-white/95 backdrop-blur-md px-3.5 py-2.5 rounded-2xl border border-emerald-100 shadow-sm transition-transform duration-200 hover:scale-102"
                      style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.06)" }}
                    >
                      <div className="w-8 h-8 rounded-xl bg-[#eaf6ee] flex items-center justify-center shrink-0 text-[#10793f]">
                        <Leaf className="w-4 h-4" />
                      </div>
                      <span className="text-[12.5px] font-bold text-gray-800 leading-tight">
                        Evidence-Based Plans
                      </span>
                    </div>

                    <div
                      className="flex items-center gap-3 bg-white/95 backdrop-blur-md px-3.5 py-2.5 rounded-2xl border border-emerald-100 shadow-sm transition-transform duration-200 hover:scale-102"
                      style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.06)" }}
                    >
                      <div className="w-8 h-8 rounded-xl bg-[#eaf6ee] flex items-center justify-center shrink-0 text-[#10793f]">
                        <Headphones className="w-4 h-4" />
                      </div>
                      <span className="text-[12.5px] font-bold text-gray-800 leading-tight">
                        Ongoing Support
                      </span>
                    </div>
                  </div>
                </div>

                {/* ── MOBILE & TABLET VISUAL (< lg: < 1024px) ── */}
                <div className="block lg:hidden w-full max-w-[460px] mx-auto mt-4 sm:mt-6">
                  {/* Doctor + Circle + Vegetables Centered Container */}
                  <div className="relative w-full h-[270px] sm:h-[310px] mx-auto flex items-center justify-center">
                    {/* Centered Green Circle Blob */}
                    <div
                      className="absolute pointer-events-none z-0 rounded-full"
                      style={{
                        width: "230px",
                        height: "230px",
                        background:
                          "radial-gradient(circle at 45% 45%, #7ed338 0%, #68bf2b 60%, #4f9f1e 100%)",
                        top: "16px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        boxShadow: "0 14px 40px rgba(104,191,43,0.26)",
                      }}
                    />

                    {/* Centered Doctor Cutout */}
                    <div className="absolute inset-0 z-10 pointer-events-none">
                      <Image
                        src="/image/hero section Smiling Doctor in Green Scrubs.png"
                        alt="DietNexa Certified Clinical Dietitian"
                        fill
                        priority
                        unoptimized
                        className="object-contain object-bottom"
                      />
                    </div>

                    {/* Foreground Fresh Vegetables */}
                    <div
                      className="absolute z-20 pointer-events-none"
                      style={{
                        bottom: "0px",
                        right: "6%",
                        width: "50%",
                        height: "54%",
                      }}
                    >
                      <div className="relative w-full h-full">
                        <Image
                          src="/image/hero sectionFresh Vegetable Medley Cutout.png"
                          alt="Fresh Healthy Vegetables"
                          fill
                          priority
                          unoptimized
                          className="object-contain object-bottom-right drop-shadow-lg"
                        />
                      </div>
                    </div>
                  </div>

                  {/* 4 Feature Pills in a Balanced 2x2 Grid */}
                  <div className="grid grid-cols-2 gap-2.5 sm:gap-3 w-full mt-4">
                    <div className="flex items-center gap-2.5 bg-white/95 backdrop-blur-md px-3 sm:px-3.5 py-2.5 rounded-xl sm:rounded-2xl border border-emerald-100 shadow-2xs">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl bg-[#eaf6ee] flex items-center justify-center shrink-0 text-[#10793f]">
                        <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </div>
                      <span className="text-[11.5px] sm:text-xs font-bold text-gray-800 leading-tight">
                        Certified & Experienced
                      </span>
                    </div>

                    <div className="flex items-center gap-2.5 bg-white/95 backdrop-blur-md px-3 sm:px-3.5 py-2.5 rounded-xl sm:rounded-2xl border border-emerald-100 shadow-2xs">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl bg-[#eaf6ee] flex items-center justify-center shrink-0 text-[#10793f]">
                        <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </div>
                      <span className="text-[11.5px] sm:text-xs font-bold text-gray-800 leading-tight">
                        Personalized Nutrition
                      </span>
                    </div>

                    <div className="flex items-center gap-2.5 bg-white/95 backdrop-blur-md px-3 sm:px-3.5 py-2.5 rounded-xl sm:rounded-2xl border border-emerald-100 shadow-2xs">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl bg-[#eaf6ee] flex items-center justify-center shrink-0 text-[#10793f]">
                        <Leaf className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </div>
                      <span className="text-[11.5px] sm:text-xs font-bold text-gray-800 leading-tight">
                        Evidence-Based Plans
                      </span>
                    </div>

                    <div className="flex items-center gap-2.5 bg-white/95 backdrop-blur-md px-3 sm:px-3.5 py-2.5 rounded-xl sm:rounded-2xl border border-emerald-100 shadow-2xs">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl bg-[#eaf6ee] flex items-center justify-center shrink-0 text-[#10793f]">
                        <Headphones className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </div>
                      <span className="text-[11.5px] sm:text-xs font-bold text-gray-800 leading-tight">
                        Ongoing Support
                      </span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* 3. STATS BAR: 4 Stats in Rounded Card                          */}
        {/* ============================================================== */}
        <section className="py-2 sm:py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div
              className="rounded-2xl sm:rounded-3xl py-4 sm:py-5 px-4 sm:px-8 shadow-xs"
              style={{
                background: "#f2f9ed",
                border: "1px solid #dfeed8",
              }}
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 divide-y sm:divide-y-0 sm:divide-x divide-[#d6ecd0]">
                {/* 1. Certified Dietitians */}
                <div className="flex items-center gap-3.5 px-2 sm:px-4 py-2">
                  <div className="w-11 h-11 rounded-2xl bg-[#e2f3e6] flex items-center justify-center text-[#10793f] shrink-0">
                    <Award className="w-6 h-6 stroke-[1.8]" />
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl font-black text-gray-900 leading-none">
                      100+
                    </div>
                    <div className="text-xs sm:text-[13px] font-medium text-gray-600 mt-1">
                      Certified Dietitians
                    </div>
                  </div>
                </div>

                {/* 2. Consultations */}
                <div className="flex items-center gap-3.5 px-2 sm:px-4 py-2">
                  <div className="w-11 h-11 rounded-2xl bg-[#e2f3e6] flex items-center justify-center text-[#10793f] shrink-0">
                    <Users className="w-6 h-6 stroke-[1.8]" />
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl font-black text-gray-900 leading-none">
                      10K+
                    </div>
                    <div className="text-xs sm:text-[13px] font-medium text-gray-600 mt-1">
                      Consultations
                    </div>
                  </div>
                </div>

                {/* 3. Average Rating */}
                <div className="flex items-center gap-3.5 px-2 sm:px-4 py-2">
                  <div className="w-11 h-11 rounded-2xl bg-[#e2f3e6] flex items-center justify-center text-[#10793f] shrink-0">
                    <Star className="w-6 h-6 stroke-[1.8] fill-[#10793f]" />
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl font-black text-gray-900 leading-none">
                      4.9/5
                    </div>
                    <div className="text-xs sm:text-[13px] font-medium text-gray-600 mt-1">
                      Average Rating
                    </div>
                  </div>
                </div>

                {/* 4. Specialization Areas */}
                <div className="flex items-center gap-3.5 px-2 sm:px-4 py-2">
                  <div className="w-11 h-11 rounded-2xl bg-[#e2f3e6] flex items-center justify-center text-[#10793f] shrink-0">
                    <CalendarCheck className="w-6 h-6 stroke-[1.8]" />
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl font-black text-gray-900 leading-none">
                      15+
                    </div>
                    <div className="text-xs sm:text-[13px] font-medium text-gray-600 mt-1">
                      Specialization Areas
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* 4. MAIN SECTION: "Our Expert Dietitians" & Filter Grid         */}
        {/* ============================================================== */}
        <section className="py-8 sm:py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">

            {/* Section Header + Search Bar */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 sm:mb-8">
              <div className="text-center md:text-left">
                <h2
                  className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  Our Expert Dietitians
                </h2>
                <p className="text-gray-500 text-xs sm:text-sm mt-1">
                  Browse our certified dietitians and find the right expert for your health needs.
                </p>
              </div>

              {/* Search Bar */}
              <div className="relative w-full md:w-80 shrink-0">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setCurrentPage(1);
                  }}
                  placeholder="Search dietitian by name..."
                  className="w-full pl-4 pr-10 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-800 placeholder-gray-400 focus:outline-hidden focus:border-[#10793f] focus:ring-2 focus:ring-[#10793f]/20 transition-all bg-[#fafafa]"
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                  <Search className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Filter Tabs / Category Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 no-scrollbar">
              {categoryList.map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => {
                      setSelectedCategory(cat);
                      setCurrentPage(1);
                    }}
                    className={`shrink-0 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                      isActive
                        ? "bg-[#10793f] text-white shadow-sm"
                        : "bg-white text-gray-700 border border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}

              {/* More Dropdown */}
              <div className="relative shrink-0">
                <button
                  type="button"
                  onClick={() => setMoreDropdownOpen(!moreDropdownOpen)}
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                    moreCategories.includes(selectedCategory)
                      ? "bg-[#10793f] text-white shadow-sm"
                      : "bg-white text-gray-700 border border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                  }`}
                >
                  <span>
                    {moreCategories.includes(selectedCategory)
                      ? selectedCategory
                      : "More"}
                  </span>
                  <ChevronDown className="w-3.5 h-3.5" />
                </button>

                {moreDropdownOpen && (
                  <div className="absolute top-full left-0 mt-1 w-52 bg-white rounded-2xl shadow-xl border border-gray-100 py-1.5 z-30 animate-in fade-in">
                    {moreCategories.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => {
                          setSelectedCategory(cat);
                          setMoreDropdownOpen(false);
                          setCurrentPage(1);
                        }}
                        className="w-full text-left px-4 py-2 text-xs sm:text-sm font-medium text-gray-700 hover:bg-[#f0f9f4] hover:text-[#10793f] transition-colors"
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* 8 DIETITIANS GRID */}
            {filteredDietitians.length === 0 ? (
              <div className="text-center py-16 bg-[#f9fbf9] rounded-3xl border border-dashed border-gray-200">
                <p className="text-gray-500 text-sm">
                  No dietitians found matching &quot;{searchQuery}&quot;.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("All Dietitians");
                  }}
                  className="mt-3 text-xs font-semibold text-[#10793f] hover:underline cursor-pointer"
                >
                  Reset all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
                {filteredDietitians.map((dietitian) => (
                  <div
                    key={dietitian.id}
                    className="group bg-white rounded-2xl sm:rounded-3xl border border-gray-200/80 overflow-hidden shadow-2xs hover:shadow-xl hover:border-[#bde3cb] transition-all duration-300 flex flex-col"
                  >
                    {/* Top Image Banner */}
                    <div className="relative w-full h-52 sm:h-56 bg-slate-100 overflow-hidden shrink-0">
                      <Image
                        src={dietitian.image}
                        alt={dietitian.name}
                        fill
                        unoptimized
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    {/* Body Content */}
                    <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                      <div>
                        {/* Name & Star Rating Row */}
                        <div className="flex items-start justify-between gap-1 mb-1">
                          <h3 className="font-bold text-gray-900 text-base sm:text-[17px] leading-tight group-hover:text-[#10793f] transition-colors">
                            {dietitian.name}
                          </h3>
                          <div className="flex items-center gap-1 text-xs font-bold text-gray-900 shrink-0">
                            <Star className="w-3.5 h-3.5 fill-[#f59e0b] text-[#f59e0b]" />
                            <span>{dietitian.rating}</span>
                            <span className="text-[11px] font-normal text-gray-500">
                              ({dietitian.reviews})
                            </span>
                          </div>
                        </div>

                        {/* Role */}
                        <p className="text-xs font-medium text-gray-500 mb-3">
                          {dietitian.role}
                        </p>

                        {/* Specialization Tags */}
                        <div className="flex flex-wrap gap-1.5 mb-3.5">
                          {dietitian.tags.map((tag) => (
                            <span
                              key={tag}
                              className="inline-block px-2.5 py-0.5 rounded-md text-[11px] font-semibold text-[#10793f] bg-[#eef7f1] border border-[#d9edd2]"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Meta lines: Experience & Education */}
                        <div className="space-y-1.5 pt-1 text-[12px] text-gray-600 mb-4">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                            <span className="truncate">{dietitian.experience}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <GraduationCap className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                            <span className="truncate">{dietitian.education}</span>
                          </div>
                        </div>
                      </div>

                      {/* CTA Button */}
                      <button
                        onClick={() => handleOpenModal("consultation", dietitian)}
                        className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl text-white font-semibold text-xs sm:text-[13px] transition-all hover:opacity-95 active:scale-98 shadow-xs cursor-pointer mt-1"
                        style={{
                          background: "#10793f",
                        }}
                      >
                        <span>Book Consultation</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Pagination Controls */}
            <div className="flex items-center justify-center gap-2 mt-10 sm:mt-12">
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                aria-label="Previous page"
                className="w-9 h-9 rounded-xl border border-gray-200 bg-white flex items-center justify-center text-gray-600 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              {[1, 2, 3, 4].map((pageNum) => (
                <button
                  key={pageNum}
                  onClick={() => setCurrentPage(pageNum)}
                  className={`w-9 h-9 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                    currentPage === pageNum
                      ? "bg-[#10793f] text-white shadow-xs"
                      : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50"
                  }`}
                >
                  {pageNum}
                </button>
              ))}

              <button
                disabled={currentPage === 4}
                onClick={() => setCurrentPage((p) => Math.min(4, p + 1))}
                aria-label="Next page"
                className="w-9 h-9 rounded-xl border border-gray-200 bg-white flex items-center justify-center text-gray-600 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </section>

        {/* ============================================================== */}
        {/* 5. BOTTOM BANNER: "Can't decide which dietitian to choose?"    */}
        {/* ============================================================== */}
        <section className="py-8 sm:py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div
              className="rounded-3xl p-6 sm:p-10 border border-[#d6ebd9] relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 shadow-xs"
              style={{
                background:
                  "linear-gradient(135deg, #f2faf4 0%, #e8f7ee 50%, #f6fcf8 100%)",
              }}
            >
              {/* Left Text & CTA */}
              <div className="flex-1 max-w-xl text-center md:text-left">
                <h3
                  className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight leading-snug"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  Can&apos;t decide which dietitian to choose?
                </h3>
                <p className="text-gray-600 text-sm sm:text-base mt-2 mb-6">
                  Tell us your goals, and we&apos;ll help you find the right expert.
                </p>

                <button
                  onClick={() => handleOpenModal("diet-plan")}
                  className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 rounded-full text-white font-semibold text-sm sm:text-base transition-all hover:opacity-95 active:scale-95 shadow-md cursor-pointer"
                  style={{
                    background: "#10793f",
                    boxShadow: "0 6px 20px rgba(16,121,63,0.30)",
                  }}
                >
                  <span>Match with a Dietitian</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Right Graphic: Nutrition Assessment Checklist & Green Apple */}
              <div className="relative w-48 sm:w-56 md:w-64 h-48 sm:h-56 md:h-64 shrink-0">
                <Image
                  src="/image/diet_match_clipboard.png"
                  alt="Nutrition Assessment Checklist & Apple with Measuring Tape"
                  fill
                  unoptimized
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* 6. FOOTER */}
      <Footer />

      {/* 7. HOW IT WORKS MODAL */}
      {howItWorksOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in"
          onClick={() => setHowItWorksOpen(false)}
        >
          <div
            className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative border border-gray-100"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setHowItWorksOpen(false)}
              className="absolute right-5 top-5 p-2 rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold text-[#10793f] bg-[#eaf6ee] mb-3">
              Simple 3-Step Process
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900 mb-4">
              How DietNexa Consultations Work
            </h3>

            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3.5 p-3 rounded-2xl bg-[#f8fcf9] border border-[#e1f2e7]">
                <div className="w-8 h-8 rounded-full bg-[#10793f] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  1
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900">
                    Choose Your Expert
                  </h4>
                  <p className="text-xs text-gray-600 mt-0.5">
                    Select a certified clinical dietitian specialized in your health goal.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3 rounded-2xl bg-[#f8fcf9] border border-[#e1f2e7]">
                <div className="w-8 h-8 rounded-full bg-[#10793f] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  2
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900">
                    1:1 Online Video Session
                  </h4>
                  <p className="text-xs text-gray-600 mt-0.5">
                    Discuss your medical history, routine, dietary likes, and specific goals.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3 rounded-2xl bg-[#f8fcf9] border border-[#e1f2e7]">
                <div className="w-8 h-8 rounded-full bg-[#10793f] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  3
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900">
                    Tailored Plan & Daily Tracking
                  </h4>
                  <p className="text-xs text-gray-600 mt-0.5">
                    Receive your customized diet chart with continuous follow-up and adjustments.
                  </p>
                </div>
              </div>
            </div>

            <button
              onClick={() => {
                setHowItWorksOpen(false);
                handleOpenModal("consultation");
              }}
              className="w-full py-3 rounded-full text-white font-semibold text-sm transition-all hover:opacity-95 shadow-md"
              style={{ background: "#10793f" }}
            >
              Get Started Now
            </button>
          </div>
        </div>
      )}

      {/* 8. CONSULTATION MODAL */}
      <ConsultationModal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        initialType={modalType}
        selectedDietitian={selectedDietitian}
      />
    </div>
  );
}
