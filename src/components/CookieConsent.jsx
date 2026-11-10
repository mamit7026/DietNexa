"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Settings, ShieldCheck, Check, X, Lock } from "lucide-react";

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

    return () => {
      window.removeEventListener("dietnexa-open-cookie-settings", handleOpenSettings);
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
      {/* 1. Compact Pill-Shaped Cookie Banner (Matching Reference Design) */}
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
                  {/* Outer cookie circle with bite cutout */}
                  <path
                    d="M30 11.5A5.5 5.5 0 0 1 35.5 17c0 .16-.01.32-.03.48A14 14 0 1 1 20 6c.16 0 .32.01.48.03A5.5 5.5 0 0 1 26 11.5c0 .34-.03.67-.1 1a5.5 5.5 0 0 1 4.1-1z"
                    stroke="#16a34a"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  {/* Cookie chips */}
                  <circle cx="16" cy="15" r="1.4" fill="#16a34a" />
                  <circle cx="14" cy="22" r="1.4" fill="#16a34a" />
                  <circle cx="21" cy="20" r="1.4" fill="#16a34a" />
                  <circle cx="23" cy="27" r="1.4" fill="#16a34a" />
                  <circle cx="28" cy="21" r="1.4" fill="#16a34a" />
                  {/* Sprouting leaf on bottom left */}
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

              {/* Text: We use cookies [GDPR Compliant] / to improve your experience. Privacy Policy and Terms */}
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

      {/* 2. Comprehensive Cookie Settings Modal */}
      {showSettings && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="cookie-settings-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200"
        >
          <div
            className="w-full max-w-2xl bg-white text-gray-900 rounded-3xl shadow-2xl border border-gray-100 overflow-hidden flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-5 sm:p-6 bg-gradient-to-r from-[#07361e] to-[#0c4e2a] text-white flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-emerald-300">
                  <Settings className="w-5 h-5" />
                </div>
                <div>
                  <h2 id="cookie-settings-title" className="text-lg sm:text-xl font-bold tracking-tight">
                    Cookie Preferences
                  </h2>
                  <p className="text-xs text-emerald-100/80">
                    Customize which cookies you wish to allow during your visit.
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setShowSettings(false)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close cookie settings"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Body / Scrollable Content */}
            <div className="p-5 sm:p-6 overflow-y-auto space-y-4 sm:space-y-5 text-left divide-y divide-gray-100">
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed pb-2">
                By clicking “Accept All Cookies”, you agree to the storing of cookies on your device to enhance site navigation, analyze site usage, and assist in our marketing efforts. You can choose not to allow some categories below.
              </p>

              {/* Group 1: Strictly Necessary */}
              <div className="pt-4 flex items-start justify-between gap-4">
                <div className="space-y-1 pr-2">
                  <div className="flex items-center gap-2">
                    <h4 className="text-sm font-bold text-gray-900">
                      Strictly Necessary Cookies
                    </h4>
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                      <Lock className="w-3 h-3 text-emerald-600" /> Always Active
                    </span>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Essential for the website to function securely. These enable core features like user authentication, consultation forms, Google reCAPTCHA v2 verification, and saving your preferences.
                  </p>
                </div>
                <div className="shrink-0 pt-1">
                  <input
                    type="checkbox"
                    checked={true}
                    disabled
                    aria-label="Strictly necessary cookies always enabled"
                    className="w-5 h-5 accent-[#10793f] cursor-not-allowed opacity-75"
                  />
                </div>
              </div>

              {/* Group 2: Performance & Analytics */}
              <div className="pt-4 flex items-start justify-between gap-4">
                <div className="space-y-1 pr-2">
                  <div className="flex items-center gap-2">
                    <h4 className="text-sm font-bold text-gray-900">
                      Performance &amp; Analytics Cookies
                    </h4>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Allow us to measure visitor traffic, popular nutrition tools, and diagnostic page performance so we can optimize calculator accuracy and improve your platform experience. All data is aggregated and anonymized.
                  </p>
                </div>
                <div className="shrink-0 pt-1">
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={preferences.analytics}
                      onChange={(e) =>
                        setPreferences((prev) => ({ ...prev, analytics: e.target.checked }))
                      }
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#059669]"></div>
                  </label>
                </div>
              </div>

              {/* Group 3: Marketing & Experience */}
              <div className="pt-4 flex items-start justify-between gap-4">
                <div className="space-y-1 pr-2">
                  <div className="flex items-center gap-2">
                    <h4 className="text-sm font-bold text-gray-900">
                      Marketing &amp; Personalization Cookies
                    </h4>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Used to remember your dietary preferences, calculate health goals, and deliver relevant dietitian consultation options tailored to your wellness journey.
                  </p>
                </div>
                <div className="shrink-0 pt-1">
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={preferences.marketing}
                      onChange={(e) =>
                        setPreferences((prev) => ({ ...prev, marketing: e.target.checked }))
                      }
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#059669]"></div>
                  </label>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:p-5 bg-gray-50 border-t border-gray-100 flex flex-wrap sm:flex-nowrap items-center justify-between gap-2.5">
              <button
                type="button"
                onClick={handleRejectAll}
                className="w-full sm:w-auto px-4 py-2 rounded-full text-xs sm:text-sm font-semibold text-gray-600 hover:text-gray-900 hover:bg-gray-200/70 border border-gray-300 transition-colors cursor-pointer"
              >
                Reject All
              </button>

              <div className="flex items-center gap-2.5 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={handleSavePreferences}
                  className="flex-1 sm:flex-none px-4 py-2 rounded-full text-xs sm:text-sm font-semibold text-[#07361e] bg-emerald-100 hover:bg-emerald-200 border border-emerald-300 transition-colors cursor-pointer"
                >
                  Save Preferences
                </button>
                <button
                  type="button"
                  onClick={handleAcceptAll}
                  className="flex-1 sm:flex-none px-5 py-2 rounded-full text-xs sm:text-sm font-bold text-white bg-[#059669] hover:bg-[#047857] shadow transition-colors cursor-pointer"
                >
                  Accept All
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
