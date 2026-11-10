"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Settings,
  ShieldCheck,
  Check,
  X,
  Lock,
  SlidersHorizontal,
  BarChart3,
  Target,
  FileText,
  Shield,
} from "lucide-react";

const STORAGE_KEY = "dietnexa_cookie_consent";

export default function CookieConsent() {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  // Cookie categories state
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    setMounted(true);

    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        setPreferences({
          necessary: true,
          analytics: Boolean(parsed.analytics),
          marketing: Boolean(parsed.marketing),
        });
      } else {
        // Show banner after brief delay
        const timer = setTimeout(() => {
          setVisible(true);
        }, 600);
        return () => clearTimeout(timer);
      }
    } catch {
      setVisible(true);
    }

    // Expose global opener for Footer "Cookie Settings" button
    const handleOpenSettings = () => {
      setShowSettings(true);
      setVisible(false);
    };

    window.addEventListener("dietnexa-open-cookie-settings", handleOpenSettings);
    window.openDietnexaCookieSettings = handleOpenSettings;

    // ESC key listener to close modal
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setShowSettings(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("dietnexa-open-cookie-settings", handleOpenSettings);
      window.removeEventListener("keydown", handleKeyDown);
      delete window.openDietnexaCookieSettings;
    };
  }, []);

  const saveConsent = (analyticsVal, marketingVal) => {
    const data = {
      accepted: true,
      necessary: true,
      analytics: analyticsVal,
      marketing: marketingVal,
      timestamp: new Date().toISOString(),
    };

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
      window.dispatchEvent(new CustomEvent("dietnexa-cookie-updated", { detail: data }));
    } catch (e) {
      console.warn("Unable to save cookie preferences:", e);
    }

    setPreferences({
      necessary: true,
      analytics: analyticsVal,
      marketing: marketingVal,
    });
    setVisible(false);
    setShowSettings(false);
  };

  const handleAcceptAll = () => {
    saveConsent(true, true);
  };

  const handleRejectAll = () => {
    saveConsent(false, false);
  };

  const handleSavePreferences = () => {
    saveConsent(preferences.analytics, preferences.marketing);
  };

  if (!mounted) return null;

  return (
    <>
      {/* 1. Compact Pill-Shaped Cookie Banner (Reference Design 1) */}
      {visible && !showSettings && (
        <aside
          role="region"
          aria-label="Cookie Consent Banner"
          className="fixed bottom-3 sm:bottom-5 inset-x-0 z-50 px-3 sm:px-4 flex justify-center pointer-events-none transition-all duration-500 ease-out animate-in fade-in slide-in-from-bottom-5"
        >
          <div className="pointer-events-auto relative w-full max-w-4xl bg-white/95 backdrop-blur-md rounded-3xl sm:rounded-full border border-[#dcfce7] shadow-[0_12px_36px_rgba(16,121,63,0.14)] p-3 sm:px-6 sm:py-2.5 flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4 overflow-hidden">
            
            {/* Subtle decorative leafy background on far right edge */}
            <div className="hidden sm:flex absolute -right-2 -top-1 -bottom-1 w-20 pointer-events-none opacity-80 items-center justify-end overflow-hidden">
              <svg className="w-16 h-16 text-emerald-400 translate-x-3 -rotate-12" viewBox="0 0 64 64" fill="none">
                <path
                  d="M54 10C38 12 30 26 32 40C24 38 14 46 16 56C28 58 40 50 42 40C54 42 62 32 60 20C58 14 56 11 54 10Z"
                  fill="url(#leafGradientCompact)"
                />
                <defs>
                  <linearGradient id="leafGradientCompact" x1="16" y1="10" x2="60" y2="56" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#4ade80" stopOpacity="0.8" />
                    <stop offset="1" stopColor="#15803d" stopOpacity="0.65" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Left Section: Cookie Icon + Vertical Divider + Text */}
            <div className="flex items-center gap-3 sm:gap-4 w-full md:w-auto relative z-10">
              
              {/* Custom Green Cookie Icon with Leaf Accent */}
              <div className="relative shrink-0 flex items-center justify-center">
                <svg className="w-9 h-9 sm:w-10 sm:h-10 text-[#16a34a]" viewBox="0 0 40 40" fill="none">
                  <path
                    d="M30 11.5A5.5 5.5 0 0 1 35.5 17c0 .16-.01.32-.03.48A14 14 0 1 1 20 6c.16 0 .32.01.48.03A5.5 5.5 0 0 1 26 11.5c0 .34-.03.67-.1 1a5.5 5.5 0 0 1 4.1-1z"
                    stroke="#16a34a"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="16" cy="15" r="1.4" fill="#16a34a" />
                  <circle cx="14" cy="22" r="1.4" fill="#16a34a" />
                  <circle cx="21" cy="20" r="1.4" fill="#16a34a" />
                  <circle cx="23" cy="27" r="1.4" fill="#16a34a" />
                  <circle cx="28" cy="21" r="1.4" fill="#16a34a" />
                  <path
                    d="M12 28.5C6.5 28.5 5.5 33.5 5.5 35.5C8 35.5 13.5 34.5 13.5 29.5"
                    fill="#22c55e"
                    stroke="#15803d"
                    strokeWidth="1.3"
                  />
                  <path
                    d="M7 34C9 32.5 11 30.5 12 29"
                    stroke="#166534"
                    strokeWidth="1"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              {/* Vertical divider */}
              <div className="hidden sm:block h-8 w-px bg-emerald-200/80 shrink-0" />

              {/* Text */}
              <div className="text-left leading-tight">
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="font-extrabold text-[#0d2a1d] text-sm sm:text-base tracking-tight">
                    We use cookies
                  </span>
                  <span className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-bold text-[#16a34a] bg-[#dcfce7] border border-[#bbf7d0] px-2 py-0.5 rounded-full">
                    <ShieldCheck className="w-3 h-3 text-[#16a34a]" /> GDPR Compliant
                  </span>
                </div>
                <p className="text-xs text-gray-600 font-normal">
                  to improve your experience.{" "}
                  <Link
                    href="/privacy"
                    className="text-[#15803d] font-semibold underline underline-offset-2 hover:text-[#0c4e2a] transition-colors"
                  >
                    Privacy Policy
                  </Link>
                  {" "}and{" "}
                  <Link
                    href="/terms"
                    className="text-[#15803d] font-semibold underline underline-offset-2 hover:text-[#0c4e2a] transition-colors"
                  >
                    Terms
                  </Link>
                </p>
              </div>
            </div>

            {/* Right Section: Action Buttons */}
            <div className="flex items-center gap-2 w-full md:w-auto justify-end shrink-0 relative z-10 pt-1 md:pt-0">
              {/* Settings Button */}
              <button
                type="button"
                onClick={() => setShowSettings(true)}
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold text-[#15803d] bg-white hover:bg-emerald-50 border border-[#16a34a] transition-all cursor-pointer whitespace-nowrap active:scale-[0.98]"
              >
                <Settings className="w-3.5 h-3.5 text-[#16a34a]" />
                <span>Settings</span>
              </button>

              {/* Reject All Button */}
              <button
                type="button"
                onClick={handleRejectAll}
                className="flex-1 sm:flex-none inline-flex items-center justify-center px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold text-[#15803d] bg-[#dcfce7] hover:bg-[#bbf7d0] transition-all cursor-pointer whitespace-nowrap active:scale-[0.98]"
              >
                Reject All
              </button>

              {/* Accept All Button */}
              <button
                type="button"
                onClick={handleAcceptAll}
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold text-white bg-[#059669] hover:bg-[#047857] shadow-sm transition-all cursor-pointer whitespace-nowrap active:scale-[0.98]"
              >
                <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                <span>Accept All</span>
              </button>
            </div>
          </div>
        </aside>
      )}

      {/* 2. Pixel-Perfect Premium Cookie Preferences Modal (Exact Match to User's Screenshot) */}
      {showSettings && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="cookie-settings-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-6 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setShowSettings(false)}
        >
          <div
            className="w-full max-w-[880px] bg-white text-gray-900 rounded-[28px] sm:rounded-[32px] shadow-[0_25px_70px_rgba(0,0,0,0.35)] border border-gray-100 overflow-hidden flex flex-col md:flex-row max-h-[92vh] animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Left Column: Forest Green Branded Sidebar */}
            <div className="w-full md:w-[280px] lg:w-[295px] shrink-0 bg-gradient-to-b from-[#084524] via-[#0b542c] to-[#0f6334] text-white p-6 sm:p-7 flex flex-col justify-between relative overflow-hidden select-none">
              
              {/* Subtle ambient lighting */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(74,222,128,0.12),transparent_70%)] pointer-events-none" />

              {/* Top: Brand Logo */}
              <div className="relative z-10 mb-4 sm:mb-6">
                <div className="relative w-36 h-9">
                  <Image
                    src="/image/dietnexa-white-logo.webp"
                    alt="DietNexa - Your Health, Our Nutrition Expertise"
                    fill
                    unoptimized
                    priority
                    className="object-contain object-left"
                  />
                </div>
              </div>

              {/* Center: Shield Icon + Title + Value Checklist */}
              <div className="relative z-10 my-auto py-2 space-y-4">
                
                {/* 3D Glass Shield Graphic with Cookie & Floating Leaves */}
                <div className="relative w-24 h-24 mx-auto flex items-center justify-center">
                  
                  {/* Top-Right Floating Leaf */}
                  <div className="absolute top-2 -right-1 w-6 h-6 text-[#86efac] drop-shadow-md rotate-[40deg] z-20">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17 8C8 10 5 17 6 22C11 22 18 19 19 14C19 10 17 8 17 8Z" />
                    </svg>
                  </div>

                  {/* Top-Left Floating Leaf */}
                  <div className="absolute top-4 -left-1 w-5 h-5 text-[#4ade80] drop-shadow-md rotate-[-30deg] z-20">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17 8C8 10 5 17 6 22C11 22 18 19 19 14C19 10 17 8 17 8Z" />
                    </svg>
                  </div>

                  {/* Translucent Shield */}
                  <svg className="w-20 h-22 drop-shadow-[0_10px_20px_rgba(0,0,0,0.25)]" viewBox="0 0 100 115" fill="none">
                    <defs>
                      <linearGradient id="shieldBg" x1="0" y1="0" x2="100" y2="115" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#f0fdf4" stopOpacity="0.95" />
                        <stop offset="1" stopColor="#dcfce7" stopOpacity="0.8" />
                      </linearGradient>
                      <linearGradient id="shieldBorder" x1="0" y1="0" x2="100" y2="115" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#ffffff" stopOpacity="0.9" />
                        <stop offset="1" stopColor="#86efac" stopOpacity="0.5" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M50 4 C76 4 94 15 94 42 C94 78 50 106 50 110 C50 106 6 78 6 42 C6 15 24 4 50 4 Z"
                      fill="url(#shieldBg)"
                      stroke="url(#shieldBorder)"
                      strokeWidth="3"
                    />
                  </svg>

                  {/* Cookie with bite cutout & checkmark inside shield */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-10 h-10 flex items-center justify-center -translate-y-1">
                      <svg className="w-9 h-9 text-[#16a34a]" viewBox="0 0 40 40" fill="none">
                        <path
                          d="M30 11.5A5.5 5.5 0 0 1 35.5 17c0 .16-.01.32-.03.48A14 14 0 1 1 20 6c.16 0 .32.01.48.03A5.5 5.5 0 0 1 26 11.5c0 .34-.03.67-.1 1a5.5 5.5 0 0 1 4.1-1z"
                          stroke="#15803d"
                          strokeWidth="2.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <circle cx="16" cy="15" r="1.5" fill="#15803d" />
                        <circle cx="14" cy="22" r="1.5" fill="#15803d" />
                        <circle cx="21" cy="20" r="1.5" fill="#15803d" />
                        <circle cx="23" cy="27" r="1.5" fill="#15803d" />
                        <circle cx="28" cy="21" r="1.5" fill="#15803d" />
                      </svg>

                      {/* Small circular badge with checkmark on bottom right of cookie */}
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-[#15803d] border-2 border-white flex items-center justify-center shadow-sm">
                        <Check className="w-2.5 h-2.5 text-white stroke-[3.5]" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Title & Description */}
                <div className="text-left">
                  <h3 className="text-2xl font-extrabold text-white tracking-tight leading-tight">
                    Cookie<br />Preferences
                  </h3>
                  <p className="text-xs text-emerald-100/85 mt-2 leading-relaxed">
                    Customize which cookies you wish to allow during your visit.
                  </p>
                </div>

                {/* Benefits Bullet Checklist (Green circles with white checkmark) */}
                <div className="space-y-2 pt-1 text-xs text-white">
                  <div className="flex items-center gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-[#16a34a] flex items-center justify-center shrink-0 shadow-sm">
                      <Check className="w-2.5 h-2.5 text-white stroke-[3]" />
                    </div>
                    <span className="font-medium text-emerald-50">Better experience</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-[#16a34a] flex items-center justify-center shrink-0 shadow-sm">
                      <Check className="w-2.5 h-2.5 text-white stroke-[3]" />
                    </div>
                    <span className="font-medium text-emerald-50">Personalized content</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-[#16a34a] flex items-center justify-center shrink-0 shadow-sm">
                      <Check className="w-2.5 h-2.5 text-white stroke-[3]" />
                    </div>
                    <span className="font-medium text-emerald-50">Relevant recommendations</span>
                  </div>
                </div>
              </div>

              {/* Bottom: Fresh Leaf Branch + Wave Curves */}
              <div className="relative h-20 w-full mt-4 pointer-events-none">
                {/* Wavy gradient curves */}
                <svg className="absolute bottom-0 inset-x-0 w-full h-16 text-emerald-400/30" viewBox="0 0 200 60" fill="none">
                  <path
                    d="M0 45 C40 25 80 50 130 30 C165 15 185 25 200 20 L200 60 L0 60 Z"
                    fill="currentColor"
                  />
                  <path
                    d="M0 50 C50 35 100 55 150 40 C175 32 190 35 200 30 L200 60 L0 60 Z"
                    fill="#4ade80"
                    opacity="0.35"
                  />
                </svg>

                {/* Dewy Glossy Leaves on bottom left corner */}
                <div className="absolute -bottom-2 -left-3 w-28 h-24">
                  <Image
                    src="/image/dewy-green-leafy-branch.webp"
                    alt="DietNexa Botanical Leaves"
                    fill
                    unoptimized
                    priority
                    className="object-contain object-bottom-left drop-shadow-md select-none"
                  />
                </div>
              </div>
            </div>

            {/* Right Column: Settings Content & Controls */}
            <div className="flex-1 p-5 sm:p-7 md:p-8 flex flex-col justify-between overflow-y-auto max-h-[88vh] bg-white">
              <div>
                {/* Header: Sliders Icon + Title + Close Button */}
                <div className="flex items-start justify-between gap-4 mb-2.5">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#eaf8ee] flex items-center justify-center text-[#16a34a] shrink-0">
                      <SlidersHorizontal className="w-5 h-5" />
                    </div>
                    <h2 id="cookie-settings-title" className="text-lg sm:text-[19px] font-extrabold text-[#111827] tracking-tight">
                      Manage Your Cookie Preferences
                    </h2>
                  </div>

                  {/* Close X Button */}
                  <button
                    type="button"
                    onClick={() => setShowSettings(false)}
                    className="w-8 h-8 rounded-full bg-[#f0fbf4] hover:bg-[#dcfce7] text-[#16a34a] flex items-center justify-center transition-colors cursor-pointer shrink-0"
                    aria-label="Close cookie settings"
                  >
                    <X className="w-4 h-4 stroke-[2.5]" />
                  </button>
                </div>

                {/* Subtitle Description */}
                <p className="text-xs text-gray-600 leading-relaxed mb-5 max-w-2xl">
                  When you browse DietNexa, we store or retrieve information on your browser in the form of cookies. You can choose not to allow some types of cookies. Notice that blocking some cookies may impact your experience with health calculators and consultations.
                </p>

                {/* Option Cards */}
                <div className="space-y-3 mb-6">
                  
                  {/* Card 1: Strictly Necessary Cookies */}
                  <div className="p-3.5 sm:p-4 rounded-2xl bg-[#f0fbf4] border border-[#dcfce7] flex items-start justify-between gap-3 sm:gap-4 transition-all">
                    <div className="flex items-start gap-3.5 flex-1">
                      <div className="w-10 h-10 rounded-2xl bg-[#dcfce7] flex items-center justify-center text-[#16a34a] shrink-0 mt-0.5">
                        <ShieldCheck className="w-5 h-5 text-[#16a34a]" />
                      </div>
                      <div className="space-y-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <h4 className="text-sm font-bold text-gray-900">
                            Strictly Necessary Cookies
                          </h4>
                          <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#15803d] bg-[#dcfce7] px-2 py-0.5 rounded-full">
                            <Lock className="w-3 h-3 text-[#16a34a]" /> Always Active
                          </span>
                        </div>
                        <p className="text-xs text-gray-600 leading-relaxed">
                          Essential for the website to function securely. These enable core features like user authentication, consultation forms, Google reCAPTCHA v2 verification, and saving your cookie preferences.
                        </p>
                      </div>
                    </div>

                    {/* Disabled Checkbox indicator */}
                    <div className="shrink-0 pt-1">
                      <div className="w-6 h-6 rounded-md bg-[#cbd5e1] text-white flex items-center justify-center cursor-not-allowed">
                        <Check className="w-4 h-4 stroke-[3]" />
                      </div>
                    </div>
                  </div>

                  {/* Card 2: Performance & Analytics Cookies */}
                  <div className="p-3.5 sm:p-4 rounded-2xl bg-white border border-gray-200 hover:border-gray-300 flex items-start justify-between gap-3 sm:gap-4 transition-colors">
                    <div className="flex items-start gap-3.5 flex-1">
                      <div className="w-10 h-10 rounded-2xl bg-[#f0fbf4] flex items-center justify-center text-[#16a34a] shrink-0 mt-0.5">
                        <BarChart3 className="w-5 h-5 text-[#16a34a]" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-sm font-bold text-gray-900">
                          Performance &amp; Analytics Cookies
                        </h4>
                        <p className="text-xs text-gray-600 leading-relaxed">
                          Allow us to measure visitor traffic, popular nutrition tools, and diagnostic page performance so we can optimize calculator accuracy and improve your platform experience. All data is aggregated and anonymized.
                        </p>
                      </div>
                    </div>

                    {/* iOS Style Sliding Toggle */}
                    <div className="shrink-0 pt-1">
                      <button
                        type="button"
                        role="switch"
                        aria-checked={preferences.analytics}
                        aria-label="Toggle Performance & Analytics Cookies"
                        onClick={() =>
                          setPreferences((prev) => ({ ...prev, analytics: !prev.analytics }))
                        }
                        className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                          preferences.analytics ? "bg-[#059669]" : "bg-gray-200"
                        }`}
                      >
                        <span
                          className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-md ring-0 transition duration-200 ease-in-out ${
                            preferences.analytics ? "translate-x-5" : "translate-x-0"
                          }`}
                        />
                      </button>
                    </div>
                  </div>

                  {/* Card 3: Marketing & Personalization Cookies */}
                  <div className="p-3.5 sm:p-4 rounded-2xl bg-white border border-gray-200 hover:border-gray-300 flex items-start justify-between gap-3 sm:gap-4 transition-colors">
                    <div className="flex items-start gap-3.5 flex-1">
                      <div className="w-10 h-10 rounded-2xl bg-[#f0fbf4] flex items-center justify-center text-[#16a34a] shrink-0 mt-0.5">
                        <Target className="w-5 h-5 text-[#16a34a]" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-sm font-bold text-gray-900">
                          Marketing &amp; Personalization Cookies
                        </h4>
                        <p className="text-xs text-gray-600 leading-relaxed">
                          Used to remember your dietary preferences, calculate health goals, and deliver relevant dietitian consultation options tailored to your wellness journey.
                        </p>
                      </div>
                    </div>

                    {/* iOS Style Sliding Toggle */}
                    <div className="shrink-0 pt-1">
                      <button
                        type="button"
                        role="switch"
                        aria-checked={preferences.marketing}
                        aria-label="Toggle Marketing & Personalization Cookies"
                        onClick={() =>
                          setPreferences((prev) => ({ ...prev, marketing: !prev.marketing }))
                        }
                        className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                          preferences.marketing ? "bg-[#059669]" : "bg-gray-200"
                        }`}
                      >
                        <span
                          className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-md ring-0 transition duration-200 ease-in-out ${
                            preferences.marketing ? "translate-x-5" : "translate-x-0"
                          }`}
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Action Bar: Legal Links on Left, Action Buttons on Right */}
              <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                {/* Legal Links */}
                <div className="flex items-center gap-4 text-xs">
                  <Link
                    href="/privacy"
                    className="inline-flex items-center gap-1.5 text-[#15803d] font-semibold hover:underline"
                  >
                    <Shield className="w-3.5 h-3.5 text-[#16a34a]" />
                    <span>Privacy Policy</span>
                  </Link>
                  <Link
                    href="/terms"
                    className="inline-flex items-center gap-1.5 text-[#15803d] font-semibold hover:underline"
                  >
                    <FileText className="w-3.5 h-3.5 text-[#16a34a]" />
                    <span>Terms of Service</span>
                  </Link>
                </div>

                {/* Right Action Buttons */}
                <div className="flex items-center gap-2 sm:gap-2.5 w-full sm:w-auto justify-end">
                  {/* Reject All */}
                  <button
                    type="button"
                    onClick={handleRejectAll}
                    className="flex-1 sm:flex-none px-4 sm:px-5 py-2 rounded-full text-xs font-semibold text-gray-700 hover:text-gray-900 bg-white hover:bg-gray-50 border border-gray-300 transition-colors cursor-pointer whitespace-nowrap"
                  >
                    Reject All
                  </button>

                  {/* Save Preferences */}
                  <button
                    type="button"
                    onClick={handleSavePreferences}
                    className="flex-1 sm:flex-none px-4 sm:px-5 py-2 rounded-full text-xs font-bold text-[#15803d] bg-[#dcfce7] hover:bg-[#bbf7d0] transition-colors cursor-pointer whitespace-nowrap"
                  >
                    Save Preferences
                  </button>

                  {/* Accept All */}
                  <button
                    type="button"
                    onClick={handleAcceptAll}
                    className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-5 sm:px-6 py-2 rounded-full text-xs font-bold text-white bg-[#059669] hover:bg-[#047857] shadow-sm transition-all cursor-pointer whitespace-nowrap"
                  >
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                    <span>Accept All</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
