"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Globe,
  ChevronDown,
  ChevronRight,
  Menu,
  X,
  ArrowRight,
  Sparkles,
} from "lucide-react";

// Service Icons matching reference design
const AppleServiceIcon = ({ className = "w-5 h-5 text-[#10793f]" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.9"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z" />
    <path d="M10 2c1 .5 2 2 2 5" />
  </svg>
);

const DropServiceIcon = ({ className = "w-5 h-5 text-[#10793f]" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.9"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
    <path d="M12 11v5" />
    <path d="M9.5 13.5h5" />
  </svg>
);

const RunnerServiceIcon = ({ className = "w-5 h-5 text-[#10793f]" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.9"
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

const PregnantServiceIcon = ({ className = "w-5 h-5 text-[#10793f]" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.9"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="12" cy="4" r="2" />
    <path d="M10 8h3.5a3.5 3.5 0 0 1 3.5 3.5v.5a4.5 4.5 0 0 1-4.5 4.5H11a4 4 0 0 1-4-4V10a2 2 0 0 1 2-2z" />
    <path d="M13 16.5c1.2 0 2.2.8 2.2 2" />
    <circle cx="13.5" cy="12" r="1.5" />
  </svg>
);

const ChildGrowthServiceIcon = ({ className = "w-5 h-5 text-[#10793f]" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.9"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="12" cy="6" r="2" />
    <path d="M9 19v-4a3 3 0 0 1 6 0v4" />
    <circle cx="6" cy="11" r="1.5" />
    <path d="M4 19v-2.5a2 2 0 0 1 4 0V19" />
    <circle cx="18" cy="11" r="1.5" />
    <path d="M16 19v-2.5a2 2 0 0 1 4 0V19" />
  </svg>
);

const LotusServiceIcon = ({ className = "w-5 h-5 text-[#10793f]" }) => (
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

// Resource Icons matching Services style
const PatientStoriesIcon = ({ className = "w-5 h-5 text-[#10793f]" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.9"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const CalculatorResourceIcon = ({ className = "w-5 h-5 text-[#10793f]" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.9"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="16" height="20" x="4" y="2" rx="2" />
    <line x1="8" x2="16" y1="6" y2="6" />
    <line x1="16" x2="16" y1="14" y2="18" />
    <path d="M8 10h.01" />
    <path d="M12 10h.01" />
    <path d="M16 10h.01" />
    <path d="M8 14h.01" />
    <path d="M12 14h.01" />
    <path d="M8 18h.01" />
    <path d="M12 18h.01" />
  </svg>
);

const BlogResourceIcon = ({ className = "w-5 h-5 text-[#10793f]" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.9"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" />
    <path d="M6 6h10" />
    <path d="M6 10h10" />
    <path d="M6 14h6" />
  </svg>
);

const MealGuidesResourceIcon = ({ className = "w-5 h-5 text-[#10793f]" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.9"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M18 2v6a3 3 0 0 1-3 3 3 3 0 0 1-3-3V2" />
    <path d="M15 11v11" />
    <path d="M5 2v10a3 3 0 0 0 3 3h1" />
    <path d="M9 22V2" />
  </svg>
);

const FaqResourceIcon = ({ className = "w-5 h-5 text-[#10793f]" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.9"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
    <line x1="12" x2="12.01" y1="17" y2="17" />
  </svg>
);

const HabitTipsIcon = ({ className = "w-5 h-5 text-[#10793f]" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.9"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
    <path d="M5 3v4" />
    <path d="M19 17v4" />
    <path d="M3 5h4" />
    <path d="M17 19h4" />
  </svg>
);

// 6 Services corresponding exactly to the reference image
const servicesData = [
  {
    title: "Weight Loss Management",
    description: "Personalized nutrition & sustainable weight loss plans",
    href: "/services/weight-loss",
    icon: AppleServiceIcon,
  },
  {
    title: "Disease Management",
    description: "Diabetes, BP, thyroid, PCOS/PCOD and more",
    href: "/services/disease-management",
    icon: DropServiceIcon,
  },
  {
    title: "Sports Nutrition",
    description: "Performance, muscle gain & recovery nutrition",
    href: "/services/sports-nutrition",
    icon: RunnerServiceIcon,
  },
  {
    title: "Pregnancy & Lactation",
    description: "Safe, balanced nutrition for mothers and babies",
    href: "/services/pregnancy-nutrition",
    icon: PregnantServiceIcon,
  },
  {
    title: "Child & Teen Growth",
    description: "Healthy growth, immunity & focused nutrition",
    href: "/services/child-teen-nutrition",
    icon: ChildGrowthServiceIcon,
  },
  {
    title: "General Wellness",
    description: "Daily energy, gut health & lifestyle balance",
    href: "/services/general-wellness",
    icon: LotusServiceIcon,
  },
];

// 6 Resources corresponding to the Services mega dropdown design
const resourcesData = [
  {
    title: "Patient Stories",
    description: "Verified reviews & transformation stories",
    href: "/#reviews",
    icon: PatientStoriesIcon,
  },
  {
    title: "Calorie & Macro Calculator",
    description: "Calculate your daily energy requirements",
    href: "/#why-dietnexa",
    icon: CalculatorResourceIcon,
  },
  {
    title: "Health & Nutrition Blog",
    description: "Evidence-based wellness articles & research",
    href: "/about",
    icon: BlogResourceIcon,
  },
  {
    title: "Nutrition Guides",
    description: "Free meal plans, diet charts & grocery lists",
    href: "/#services",
    icon: MealGuidesResourceIcon,
  },
  {
    title: "Diet & Health FAQs",
    description: "Common questions answered by clinical dietitians",
    href: "/#faq",
    icon: FaqResourceIcon,
  },
  {
    title: "Wellness & Lifestyle Tips",
    description: "Daily habits for sustained energy and vitality",
    href: "/services/general-wellness",
    icon: HabitTipsIcon,
  },
];

const navLinks = [
  {
    label: "Services",
    href: "/#services",
    dropdown: servicesData,
  },
  { label: "Dietitians", href: "/dietitians" },
  { label: "Tools", href: "/tools" },
  {
    label: "Resources",
    href: "/#reviews",
    dropdown: resourcesData,
  },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
];

export default function Navbar({ onOpenModal }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [expandedMobileDropdown, setExpandedMobileDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const navRef = useRef(null);
  const closeTimeoutRef = useRef(null);

  // Track scroll position to update elevation
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown & mobile drawer on route change
  useEffect(() => {
    setOpenDropdown(null);
    setMobileOpen(false);
    setExpandedMobileDropdown(null);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalStyle;
      };
    }
  }, [mobileOpen]);

  // Close mobile drawer on desktop resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleDocumentClick = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("click", handleDocumentClick);
    return () => document.removeEventListener("click", handleDocumentClick);
  }, []);

  const handleMouseEnter = (label) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    closeTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 220);
  };

  const handleDropdownClick = (e, link) => {
    if (link.dropdown) {
      e.preventDefault();
      e.stopPropagation();
      setOpenDropdown((prev) => (prev === link.label ? null : link.label));
    }
  };

  const toggleMobileDropdown = (label) => {
    setExpandedMobileDropdown((prev) => (prev === label ? null : label));
  };

  return (
    <>
      {/* Fixed Top Header */}
      <header
        className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-200 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-md border-b border-gray-100"
            : "bg-white/95 backdrop-blur-md border-b border-gray-100/80 shadow-xs"
        }`}
        style={{
          WebkitBackdropFilter: "blur(12px)",
        }}
      >
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-12">
          <div className="flex items-center justify-between h-[68px] sm:h-[76px]">
            {/* Logo */}
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className="flex items-center shrink-0 focus:outline-hidden"
              aria-label="DietNexa Home"
            >
              <div className="relative h-[38px] w-[136px] min-[380px]:w-[155px] sm:h-[44px] sm:w-[185px] md:h-[48px] md:w-[200px]">
                <Image
                  src="/image/dietnexa-logo.webp"
                  alt="DietNexa — Your Health, Our Nutrition Expertise"
                  fill
                  priority
                  sizes="200px"
                  className="object-contain object-left"
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav
              ref={navRef}
              className="hidden md:flex items-center gap-5 lg:gap-7"
              aria-label="Main Navigation"
            >
              {navLinks.map((link) => {
                const isActive =
                  pathname === link.href ||
                  (link.href === "/" && pathname === "/") ||
                  (link.href === "/tools" && pathname?.startsWith("/tools"));
                const isServices = link.label === "Services";
                const isResources = link.label === "Resources";
                const isDropdownOpen = openDropdown === link.label;

                return (
                  <div
                    key={link.label}
                    className="relative py-2"
                    onMouseEnter={() =>
                      link.dropdown && handleMouseEnter(link.label)
                    }
                    onMouseLeave={() =>
                      link.dropdown && handleMouseLeave()
                    }
                  >
                    {link.dropdown ? (
                      <button
                        type="button"
                        onClick={(e) => handleDropdownClick(e, link)}
                        className="relative flex items-center gap-1 text-[14px] font-semibold transition-colors cursor-pointer bg-transparent border-0 p-0"
                        style={{
                          color:
                            isActive ||
                            (isServices &&
                              (pathname.startsWith("/services") ||
                                isDropdownOpen)) ||
                            (isResources &&
                              (pathname.startsWith("/resources") ||
                                isDropdownOpen))
                              ? "#10793f"
                              : "#374151",
                        }}
                        onMouseOver={(e) => {
                          e.currentTarget.style.color = "#10793f";
                        }}
                        onMouseOut={(e) => {
                          if (
                            !isActive &&
                            !(
                              isServices &&
                              pathname.startsWith("/services")
                            ) &&
                            !(
                              isResources &&
                              pathname.startsWith("/resources")
                            ) &&
                            !isDropdownOpen
                          ) {
                            e.currentTarget.style.color = "#374151";
                          }
                        }}
                      >
                        <span>{link.label}</span>
                        <ChevronDown
                          className={`w-3.5 h-3.5 transition-transform duration-200 ${
                            isDropdownOpen
                              ? "rotate-180 text-[#10793f]"
                              : "text-gray-400"
                          }`}
                        />
                        {(isActive ||
                          (isServices &&
                            pathname.startsWith("/services")) ||
                          (isResources &&
                            pathname.startsWith("/resources"))) && (
                          <span
                            className="absolute -bottom-1.5 left-0 right-0 h-[2.5px] rounded-full"
                            style={{ background: "#10793f" }}
                          />
                        )}
                      </button>
                    ) : (
                      <Link
                        href={link.href}
                        className="relative flex items-center gap-1 text-[14px] font-semibold transition-colors cursor-pointer"
                        style={{
                          color: isActive ? "#10793f" : "#374151",
                        }}
                        onMouseOver={(e) => {
                          if (!isActive) e.currentTarget.style.color = "#10793f";
                        }}
                        onMouseOut={(e) => {
                          if (!isActive) e.currentTarget.style.color = "#374151";
                        }}
                      >
                        {link.label}
                        {isActive && (
                          <span
                            className="absolute -bottom-1.5 left-0 right-0 h-[2.5px] rounded-full"
                            style={{ background: "#10793f" }}
                          />
                        )}
                      </Link>
                    )}

                    {/* ============================================================== */}
                    {/* Services Mega Dropdown (Matching Reference Design)             */}
                    {/* ============================================================== */}
                    {isServices && isDropdownOpen && (
                      <div
                        onMouseEnter={() => handleMouseEnter("Services")}
                        onMouseLeave={handleMouseLeave}
                        className="absolute top-full left-0 sm:-left-4 lg:-left-10 mt-2 z-50 w-[780px] lg:w-[840px] max-w-[calc(100vw-32px)] bg-white rounded-3xl p-4 sm:p-5 shadow-[0_20px_50px_rgba(0,0,0,0.12)] border border-gray-150 animate-in fade-in zoom-in-95 duration-150"
                      >
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch">
                          {/* Left Promo Card: Our Services */}
                          <div
                            className="w-full sm:w-[220px] lg:w-[235px] shrink-0 rounded-2xl p-4 sm:p-5 flex flex-col justify-between relative overflow-hidden"
                            style={{
                              background:
                                "linear-gradient(180deg, #ecf8ef 0%, #daf3e2 50%, #c4edd0 100%)",
                            }}
                          >
                            {/* Corner leaf accent */}
                            <div className="absolute top-0 right-0 w-20 h-20 pointer-events-none opacity-40">
                              <Image
                                src="/image/glossy-green-leaf-branch.webp"
                                alt=""
                                fill
                                sizes="80px"
                                className="object-contain object-top-right"
                              />
                            </div>

                            <div>
                              <h3 className="text-xl sm:text-[22px] font-extrabold text-[#0d3b1f] tracking-tight mb-2 leading-tight">
                                Our Services
                              </h3>
                              <p className="text-xs sm:text-[13px] text-gray-700 leading-relaxed font-medium">
                                Personalized nutrition solutions for every health goal.
                              </p>
                            </div>

                            {/* Salad bowl image at bottom */}
                            <div className="relative w-full h-[115px] sm:h-[130px] mt-4 flex items-end justify-center">
                              <Image
                                src="/image/services-menu-salad.webp"
                                alt="Our Services Healthy Nutrition"
                                fill
                                sizes="220px"
                                className="object-contain object-bottom drop-shadow-sm"
                              />
                            </div>
                          </div>

                          {/* Right: 6 Services (2 columns x 3 rows) */}
                          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                            {servicesData.map((svc) => {
                              const Icon = svc.icon;
                              const isCurrentActive = pathname === svc.href;

                              return (
                                <Link
                                  key={svc.title}
                                  href={svc.href}
                                  onClick={() => setOpenDropdown(null)}
                                  className={`group flex items-center justify-between p-3 sm:p-3.5 rounded-2xl border transition-all duration-200 cursor-pointer ${
                                    isCurrentActive
                                      ? "border-[#84d9a2] bg-[#f2faf5] shadow-xs"
                                      : "border-gray-200/80 bg-white hover:border-[#10793f] hover:bg-[#f2faf5] hover:shadow-xs"
                                  }`}
                                >
                                  <div className="flex items-center gap-3 min-w-0 pr-1">
                                    <div className="w-11 h-11 rounded-2xl bg-[#edf8f1] group-hover:bg-white flex items-center justify-center shrink-0 text-[#10793f] transition-colors border border-transparent group-hover:border-emerald-100">
                                      <Icon className="w-5 h-5" />
                                    </div>

                                    <div className="min-w-0">
                                      <h4 className="text-[13.5px] sm:text-[14px] font-bold text-gray-900 group-hover:text-[#10793f] transition-colors leading-snug">
                                        {svc.title}
                                      </h4>
                                      <p className="text-[11px] sm:text-[11.5px] text-gray-500 group-hover:text-gray-700 leading-tight mt-0.5 line-clamp-2">
                                        {svc.description}
                                      </p>
                                    </div>
                                  </div>

                                  <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-[#10793f] group-hover:translate-x-0.5 transition-all shrink-0 ml-1.5" />
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* ============================================================== */}
                    {/* Resources Mega Dropdown (Matching Services Design exactly)     */}
                    {/* ============================================================== */}
                    {isResources && isDropdownOpen && (
                      <div
                        onMouseEnter={() => handleMouseEnter("Resources")}
                        onMouseLeave={handleMouseLeave}
                        className="absolute top-full -left-48 sm:-left-60 lg:-left-72 mt-2 z-50 w-[780px] lg:w-[840px] max-w-[calc(100vw-32px)] bg-white rounded-3xl p-4 sm:p-5 shadow-[0_20px_50px_rgba(0,0,0,0.12)] border border-gray-150 animate-in fade-in zoom-in-95 duration-150"
                      >
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch">
                          {/* Left Promo Card: Our Resources */}
                          <div
                            className="w-full sm:w-[220px] lg:w-[235px] shrink-0 rounded-2xl p-4 sm:p-5 flex flex-col justify-between relative overflow-hidden"
                            style={{
                              background:
                                "linear-gradient(180deg, #ecf8ef 0%, #daf3e2 50%, #c4edd0 100%)",
                            }}
                          >
                            {/* Corner leaf accent */}
                            <div className="absolute top-0 right-0 w-20 h-20 pointer-events-none opacity-40">
                              <Image
                                src="/image/glossy-green-leaf-branch.webp"
                                alt=""
                                fill
                                sizes="80px"
                                className="object-contain object-top-right"
                              />
                            </div>

                            <div>
                              <h3 className="text-xl sm:text-[22px] font-extrabold text-[#0d3b1f] tracking-tight mb-2 leading-tight">
                                Our Resources
                              </h3>
                              <p className="text-xs sm:text-[13px] text-gray-700 leading-relaxed font-medium">
                                Evidence-based guides, tools and patient transformation stories.
                              </p>
                            </div>

                            {/* Healthy food arrangement image at bottom */}
                            <div className="relative w-full h-[115px] sm:h-[130px] mt-4 flex items-end justify-center">
                              <Image
                                src="/image/healthy-foods-and-fresh-fruit-arrangement.webp"
                                alt="Healthy Foods & Nutrition Resources"
                                fill
                                sizes="220px"
                                className="object-contain object-bottom drop-shadow-sm"
                              />
                            </div>
                          </div>

                          {/* Right: 6 Resources (2 columns x 3 rows) */}
                          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                            {resourcesData.map((res) => {
                              const Icon = res.icon;
                              const isCurrentActive = pathname === res.href;

                              return (
                                <Link
                                  key={res.title}
                                  href={res.href}
                                  onClick={() => setOpenDropdown(null)}
                                  className={`group flex items-center justify-between p-3 sm:p-3.5 rounded-2xl border transition-all duration-200 cursor-pointer ${
                                    isCurrentActive
                                      ? "border-[#84d9a2] bg-[#f2faf5] shadow-xs"
                                      : "border-gray-200/80 bg-white hover:border-[#10793f] hover:bg-[#f2faf5] hover:shadow-xs"
                                  }`}
                                >
                                  <div className="flex items-center gap-3 min-w-0 pr-1">
                                    <div className="w-11 h-11 rounded-2xl bg-[#edf8f1] group-hover:bg-white flex items-center justify-center shrink-0 text-[#10793f] transition-colors border border-transparent group-hover:border-emerald-100">
                                      <Icon className="w-5 h-5" />
                                    </div>

                                    <div className="min-w-0">
                                      <h4 className="text-[13.5px] sm:text-[14px] font-bold text-gray-900 group-hover:text-[#10793f] transition-colors leading-snug">
                                        {res.title}
                                      </h4>
                                      <p className="text-[11px] sm:text-[11.5px] text-gray-500 group-hover:text-gray-700 leading-tight mt-0.5 line-clamp-2">
                                        {res.description}
                                      </p>
                                    </div>
                                  </div>

                                  <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-[#10793f] group-hover:translate-x-0.5 transition-all shrink-0 ml-1.5" />
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Standard Dropdown for other menus (if any) */}
                    {!isServices && !isResources && link.dropdown && isDropdownOpen && (
                      <div
                        onMouseEnter={() => handleMouseEnter(link.label)}
                        onMouseLeave={handleMouseLeave}
                        className="absolute top-full left-0 mt-1 py-2 rounded-2xl z-50 bg-white shadow-xl border border-gray-100 transition-all duration-150 animate-in fade-in"
                        style={{
                          minWidth: "280px",
                        }}
                      >
                        <div className="px-3 py-1.5 border-b border-gray-50 mb-1">
                          <p className="text-[11px] font-semibold uppercase tracking-wider text-gray-400">
                            {link.label} Overview
                          </p>
                        </div>
                        {link.dropdown.map((item) => {
                          const itemLabel =
                            typeof item === "string" ? item : item.label;
                          const itemHref =
                            typeof item === "string" ? link.href : item.href;
                          const itemDesc =
                            typeof item === "object"
                              ? item.description
                              : null;

                          return (
                            <Link
                              key={itemLabel}
                              href={itemHref}
                              onClick={() => setOpenDropdown(null)}
                              className="group block px-3.5 py-2 hover:bg-[#f0f9f4] transition-colors rounded-xl mx-1.5"
                            >
                              <div className="text-[13px] font-semibold text-gray-800 group-hover:text-[#10793f] transition-colors">
                                {itemLabel}
                              </div>
                              {itemDesc && (
                                <p className="text-[11px] text-gray-500 line-clamp-1 mt-0.5 group-hover:text-[#10793f]/80">
                                  {itemDesc}
                                </p>
                              )}
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* Desktop Right CTA Actions */}
            <div className="hidden md:flex items-center gap-3">
              <button
                aria-label="Change language"
                className="p-2 rounded-full text-gray-500 hover:text-[#10793f] hover:bg-emerald-50 transition-colors cursor-pointer"
              >
                <Globe className="w-5 h-5" />
              </button>


              <button
                onClick={() => onOpenModal?.("get-started")}
                className="px-5 py-2.5 rounded-full text-[14px] font-semibold text-white transition-all hover:opacity-95 active:scale-95 cursor-pointer shadow-md"
                style={{
                  background: "#10793f",
                  boxShadow: "0 4px 14px rgba(16,121,63,0.3)",
                }}
              >
                Get Started
              </button>
            </div>

            {/* Mobile Actions: Compact CTA + Hamburger Menu */}
            <div className="flex md:hidden items-center gap-2">
              <button
                onClick={() => onOpenModal?.("get-started")}
                className="hidden min-[360px]:inline-flex items-center gap-1 px-3.5 py-1.5 rounded-full text-xs font-bold text-white transition-all active:scale-95 shadow-sm"
                style={{ background: "#10793f" }}
                aria-label="Get Started"
              >
                <Sparkles className="w-3 h-3" />
                <span>Get Started</span>
              </button>

              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="p-2 sm:p-2.5 rounded-xl text-gray-700 hover:text-[#10793f] hover:bg-[#f0f9f4] active:scale-95 transition-all focus:outline-hidden"
                aria-label="Toggle navigation menu"
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? (
                  <X className="w-6 h-6 text-[#10793f]" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileOpen && (
          <div
            className="md:hidden fixed top-[68px] sm:top-[76px] left-0 right-0 w-full bg-white border-b border-gray-200 shadow-2xl z-50 overflow-y-auto"
            style={{
              maxHeight: "calc(100dvh - 68px)",
            }}
          >
            <div className="px-4 pt-3 pb-6 space-y-1">
              {navLinks.map((link) => {
                const isActive =
                  pathname === link.href ||
                  (link.href === "/" && pathname === "/") ||
                  (link.href === "/tools" && pathname?.startsWith("/tools"));
                const hasDropdown = !!link.dropdown;
                const isExpanded = expandedMobileDropdown === link.label;

                if (hasDropdown) {
                  return (
                    <div
                      key={link.label}
                      className="border-b border-gray-100 last:border-b-0 pb-1"
                    >
                      <button
                        type="button"
                        onClick={() => toggleMobileDropdown(link.label)}
                        className="w-full flex items-center justify-between py-3 px-2 rounded-xl text-[15px] font-semibold text-gray-800 hover:bg-[#f0f9f4] hover:text-[#10793f] transition-colors"
                      >
                        <span
                          style={{
                            color: isActive ? "#10793f" : undefined,
                          }}
                        >
                          {link.label}
                        </span>
                        <ChevronDown
                          className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${
                            isExpanded ? "rotate-180 text-[#10793f]" : ""
                          }`}
                        />
                      </button>

                      {/* Expanded Accordion Sublinks */}
                      {isExpanded && (
                        link.label === "Services" ? (
                          <div className="my-1 mx-1 p-2 rounded-2xl bg-[#f7fbf8] border border-[#e1f0e7] space-y-2">
                            {servicesData.map((svc) => {
                              const Icon = svc.icon;
                              const isCurrentActive =
                                pathname === svc.href;

                              return (
                                <Link
                                  key={svc.title}
                                  href={svc.href}
                                  onClick={() => setMobileOpen(false)}
                                  className={`flex items-center justify-between p-2.5 rounded-xl transition-colors ${
                                    isCurrentActive
                                      ? "bg-white border border-[#84d9a2]"
                                      : "bg-white/80 hover:bg-white"
                                  }`}
                                >
                                  <div className="flex items-center gap-2.5 min-w-0 pr-1">
                                    <div className="w-9 h-9 rounded-xl bg-[#edf8f1] flex items-center justify-center shrink-0 text-[#10793f]">
                                      <Icon className="w-4 h-4" />
                                    </div>
                                    <div className="min-w-0">
                                      <div className="text-[13px] font-bold text-gray-900 leading-snug">
                                        {svc.title}
                                      </div>
                                      <p className="text-[11px] text-gray-500 line-clamp-1">
                                        {svc.description}
                                      </p>
                                    </div>
                                  </div>
                                  <ChevronRight className="w-4 h-4 text-gray-400 shrink-0" />
                                </Link>
                              );
                            })}
                          </div>
                        ) : link.label === "Resources" ? (
                          <div className="my-1 mx-1 p-2 rounded-2xl bg-[#f7fbf8] border border-[#e1f0e7] space-y-2">
                            {resourcesData.map((res) => {
                              const Icon = res.icon;
                              const isCurrentActive =
                                pathname === res.href;

                              return (
                                <Link
                                  key={res.title}
                                  href={res.href}
                                  onClick={() => setMobileOpen(false)}
                                  className={`flex items-center justify-between p-2.5 rounded-xl transition-colors ${
                                    isCurrentActive
                                      ? "bg-white border border-[#84d9a2]"
                                      : "bg-white/80 hover:bg-white"
                                  }`}
                                >
                                  <div className="flex items-center gap-2.5 min-w-0 pr-1">
                                    <div className="w-9 h-9 rounded-xl bg-[#edf8f1] flex items-center justify-center shrink-0 text-[#10793f]">
                                      <Icon className="w-4 h-4" />
                                    </div>
                                    <div className="min-w-0">
                                      <div className="text-[13px] font-bold text-gray-900 leading-snug">
                                        {res.title}
                                      </div>
                                      <p className="text-[11px] text-gray-500 line-clamp-1">
                                        {res.description}
                                      </p>
                                    </div>
                                  </div>
                                  <ChevronRight className="w-4 h-4 text-gray-400 shrink-0" />
                                </Link>
                              );
                            })}
                          </div>
                        ) : (
                          <div className="my-1 mx-1 p-2 rounded-xl bg-[#f7fbf8] border border-[#e1f0e7] space-y-1">
                            {link.dropdown.map((sub) => {
                              const subLabel =
                                typeof sub === "string" ? sub : sub.label;
                              const subHref =
                                typeof sub === "string" ? link.href : sub.href;
                              const subDesc =
                                typeof sub === "object"
                                  ? sub.description
                                  : null;

                              return (
                                <Link
                                  key={subLabel}
                                  href={subHref}
                                  onClick={() => setMobileOpen(false)}
                                  className="block p-2.5 rounded-lg hover:bg-white transition-colors group"
                                >
                                  <div className="text-[13px] font-semibold text-gray-800 group-hover:text-[#10793f] flex items-center justify-between">
                                    <span>{subLabel}</span>
                                    <ArrowRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#10793f] transition-colors opacity-0 group-hover:opacity-100" />
                                  </div>
                                  {subDesc && (
                                    <p className="text-[11px] text-gray-500 mt-0.5 line-clamp-1">
                                      {subDesc}
                                    </p>
                                  )}
                                </Link>
                              );
                            })}
                          </div>
                        )
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-between py-3 px-2 rounded-xl text-[15px] font-semibold border-b border-gray-100 last:border-b-0 transition-colors"
                    style={{ color: isActive ? "#10793f" : "#374151" }}
                  >
                    <span>{link.label}</span>
                    <ArrowRight className="w-4 h-4 text-gray-400" />
                  </Link>
                );
              })}

              {/* Action buttons inside drawer */}
              <div className="pt-4 mt-2 border-t border-gray-100">
                <div className="flex gap-2.5">
                  <button
                    onClick={() => {
                      setMobileOpen(false);
                      onOpenModal?.("get-started");
                    }}
                    className="flex-1 py-2.5 rounded-full text-sm font-semibold text-white transition-all cursor-pointer shadow-md"
                    style={{
                      background: "#10793f",
                      boxShadow: "0 4px 14px rgba(16,121,63,0.25)",
                    }}
                  >
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Spacer so page content starts below the fixed header */}
      <div className="h-[68px] sm:h-[76px]" />
    </>
  );
}
