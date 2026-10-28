"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Globe, ChevronDown, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home", active: true },
  {
    label: "Services",
    href: "#services",
    dropdown: [
      "Weight Loss Management",
      "Disease Management (Diabetes, PCOS)",
      "Sports Nutrition",
      "Pregnancy & Lactation",
      "Child & Teen Growth",
      "General Wellness",
    ],
  },
  { label: "Dietitians", href: "#dietitians" },
  { label: "Plans", href: "#why-dietnexa" },
  {
    label: "Resources",
    href: "#reviews",
    dropdown: [
      "Patient Stories",
      "Calorie Calculator",
      "Health Blog",
      "Nutrition Guides",
    ],
  },
  { label: "About Us", href: "#about" },
];

export default function Navbar({ onOpenModal }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  return (
    <header
      className="sticky top-0 z-50 bg-white/96"
      style={{
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: "1px solid #f0f0f0",
        boxShadow: "0 1px 6px rgba(0,0,0,0.05)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between h-[70px] sm:h-[76px]">

          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <div className="relative h-[48px] w-[180px] sm:w-[200px]">
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

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative py-2"
                onMouseEnter={() => link.dropdown && setOpenDropdown(link.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <a
                  href={link.href}
                  className="relative flex items-center gap-1 text-[14px] font-semibold transition-colors cursor-pointer"
                  style={{
                    color: link.active ? "#10793f" : "#374151",
                  }}
                  onMouseOver={(e) => {
                    if (!link.active) e.currentTarget.style.color = "#10793f";
                  }}
                  onMouseOut={(e) => {
                    if (!link.active) e.currentTarget.style.color = "#374151";
                  }}
                >
                  {link.label}
                  {link.dropdown && (
                    <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
                  )}
                  {link.active && (
                    <span
                      className="absolute -bottom-2 left-0 right-0 h-[2.5px] rounded-full"
                      style={{ background: "#10793f" }}
                    />
                  )}
                </a>

                {/* Dropdown */}
                {link.dropdown && openDropdown === link.label && (
                  <div
                    className="absolute top-full left-0 mt-1 py-2 rounded-xl z-50"
                    style={{
                      background: "#fff",
                      border: "1px solid #e5e7eb",
                      boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
                      minWidth: "220px",
                    }}
                  >
                    {link.dropdown.map((item) => (
                      <a
                        key={item}
                        href={link.href}
                        className="block px-4 py-2.5 text-[13px] font-medium text-gray-700 hover:bg-[#f0f9f4] hover:text-[#10793f] transition-colors"
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right actions */}
          <div className="hidden md:flex items-center gap-3">
            <button
              aria-label="Change language"
              className="p-2 rounded-full text-gray-500 hover:text-[#10793f] hover:bg-emerald-50 transition-colors cursor-pointer"
            >
              <Globe className="w-5 h-5" />
            </button>

            <button
              onClick={() => onOpenModal?.("login")}
              className="px-5 py-2 rounded-full text-[14px] font-semibold text-gray-700 border border-gray-300 hover:border-[#10793f] hover:text-[#10793f] transition-all cursor-pointer"
              style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.06)" }}
            >
              Log In
            </button>

            <button
              onClick={() => onOpenModal?.("get-started")}
              className="px-6 py-2.5 rounded-full text-[14px] font-semibold text-white transition-all hover:opacity-90 active:scale-95 cursor-pointer shadow-md"
              style={{
                background: "#10793f",
                boxShadow: "0 4px 14px rgba(16,121,63,0.3)",
              }}
            >
              Get Started
            </button>
          </div>

          {/* Mobile hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => onOpenModal?.("get-started")}
              className="px-4 py-1.5 rounded-full text-xs font-bold text-white"
              style={{ background: "#10793f" }}
            >
              Get Started
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-lg text-gray-700"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-5 pt-2 pb-6 shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 border-b border-gray-100 text-[15px] font-semibold"
              style={{ color: link.active ? "#10793f" : "#374151" }}
            >
              {link.label}
            </a>
          ))}
          <div className="flex gap-3 mt-5">
            <button
              onClick={() => { setMobileOpen(false); onOpenModal?.("login"); }}
              className="flex-1 py-2.5 rounded-full text-sm font-semibold text-gray-700 border border-gray-300"
            >
              Log In
            </button>
            <button
              onClick={() => { setMobileOpen(false); onOpenModal?.("get-started"); }}
              className="flex-1 py-2.5 rounded-full text-sm font-semibold text-white"
              style={{ background: "#10793f" }}
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
