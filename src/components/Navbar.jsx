"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Globe, ChevronDown, Menu, X, ArrowRight, Sparkles } from "lucide-react";

const navLinks = [
  {
    label: "Services",
    href: "/#services",
    dropdown: [
      {
        label: "Weight Loss Management",
        href: "/services/weight-loss",
        description: "Personalized nutrition & clinical dietitian guidance",
      },
      {
        label: "Disease Management (Diabetes, PCOS)",
        href: "/services/disease-management",
        description: "Hormone, blood sugar & metabolic care",
      },
      {
        label: "Sports Nutrition",
        href: "/#services",
        description: "Performance fuel, muscle gain & recovery",
      },
      {
        label: "Pregnancy & Lactation",
        href: "/#services",
        description: "Safe, nurturing maternal & baby nutrition",
      },
      {
        label: "Child & Teen Growth",
        href: "/#services",
        description: "Wholesome development and mindful habits",
      },
      {
        label: "General Wellness",
        href: "/#services",
        description: "Daily energy, gut health & lifestyle balance",
      },
    ],
  },
  { label: "Dietitians", href: "/dietitians" },
  { label: "Plans", href: "/#why-dietnexa" },
  {
    label: "Resources",
    href: "/#reviews",
    dropdown: [
      {
        label: "Patient Stories",
        href: "/#reviews",
        description: "Verified reviews & transformation stories",
      },
      {
        label: "Calorie & Macro Calculator",
        href: "/#why-dietnexa",
        description: "Calculate your daily energy requirements",
      },
      {
        label: "Health & Nutrition Blog",
        href: "/about",
        description: "Evidence-based wellness articles",
      },
      {
        label: "Nutrition Guides",
        href: "/#services",
        description: "Free meal plans and grocery lists",
      },
    ],
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

  // Track scroll position to update elevation
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
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
                  src="/image/DietNexa Logo.png"
                  alt="DietNexa — Your Health, Our Nutrition Expertise"
                  fill
                  priority
                  unoptimized
                  className="object-contain object-left"
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-5 lg:gap-7" aria-label="Main Navigation">
              {navLinks.map((link) => {
                const isActive =
                  pathname === link.href ||
                  (link.href === "/" && pathname === "/");

                return (
                  <div
                    key={link.label}
                    className="relative py-2"
                    onMouseEnter={() => link.dropdown && setOpenDropdown(link.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
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
                      {link.dropdown && (
                        <ChevronDown
                          className={`w-3.5 h-3.5 text-gray-400 transition-transform duration-200 ${
                            openDropdown === link.label ? "rotate-180 text-[#10793f]" : ""
                          }`}
                        />
                      )}
                      {isActive && (
                        <span
                          className="absolute -bottom-1.5 left-0 right-0 h-[2.5px] rounded-full"
                          style={{ background: "#10793f" }}
                        />
                      )}
                    </Link>

                    {/* Desktop Dropdown */}
                    {link.dropdown && openDropdown === link.label && (
                      <div
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
                          const itemLabel = typeof item === "string" ? item : item.label;
                          const itemHref = typeof item === "string" ? link.href : item.href;
                          const itemDesc = typeof item === "object" ? item.description : null;

                          return (
                            <Link
                              key={itemLabel}
                              href={itemHref}
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
                onClick={() => onOpenModal?.("login")}
                className="px-4 py-2 rounded-full text-[14px] font-semibold text-gray-700 border border-gray-300 hover:border-[#10793f] hover:text-[#10793f] transition-all cursor-pointer shadow-2xs hover:shadow-xs"
              >
                Log In
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
                  (link.href === "/" && pathname === "/");
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
                        <span style={{ color: isActive ? "#10793f" : undefined }}>
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
                        <div className="my-1 mx-1 p-2 rounded-xl bg-[#f7fbf8] border border-[#e1f0e7] space-y-1">
                          {link.dropdown.map((sub) => {
                            const subLabel = typeof sub === "string" ? sub : sub.label;
                            const subHref = typeof sub === "string" ? link.href : sub.href;
                            const subDesc = typeof sub === "object" ? sub.description : null;

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
              <div className="pt-4 mt-2 border-t border-gray-100 space-y-2.5">
                <div className="flex gap-2.5">
                  <button
                    onClick={() => {
                      setMobileOpen(false);
                      onOpenModal?.("login");
                    }}
                    className="flex-1 py-2.5 rounded-full text-sm font-semibold text-gray-700 border border-gray-300 hover:border-[#10793f] hover:text-[#10793f] transition-all cursor-pointer"
                  >
                    Log In
                  </button>
                  <button
                    onClick={() => {
                      setMobileOpen(false);
                      onOpenModal?.("get-started");
                    }}
                    className="flex-1 py-2.5 rounded-full text-sm font-semibold text-white shadow-md active:scale-95 transition-all cursor-pointer"
                    style={{ background: "#10793f" }}
                  >
                    Get Started
                  </button>
                </div>

                <div className="flex items-center justify-center gap-1.5 py-1 text-xs text-gray-500">
                  <Globe className="w-3.5 h-3.5" />
                  <span>Available in English & Regional Languages</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Backdrop overlay for mobile drawer */}
      {mobileOpen && (
        <div
          onClick={() => setMobileOpen(false)}
          className="fixed inset-0 top-[68px] sm:top-[76px] bg-black/40 backdrop-blur-xs z-40 md:hidden"
          aria-hidden="true"
        />
      )}

      {/* Spacer to prevent page content from being hidden behind the fixed header */}
      <div className="h-[68px] sm:h-[76px] w-full shrink-0" aria-hidden="true" />
    </>
  );
}

