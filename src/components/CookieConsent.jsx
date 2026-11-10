"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Cookie, ShieldCheck, X, Check, SlidersHorizontal, ChevronRight, Lock } from "lucide-react";

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
        // Show banner after brief delay for smooth appearance
        const timer = setTimeout(() => {
          setVisible(true);
        }, 800);
        return () => clearTimeout(timer);
      }
    } catch {
      // Fallback if storage blocked
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
      {/* 1. Main Cookie Banner */}
      {visible && !showSettings && (
        <aside
          role="region"
          aria-label="Cookie Consent Banner"
          className="fixed bottom-0 inset-x-0 z-50 p-3 sm:p-4 md:p-6 transition-all duration-500 ease-out animate-in fade-in slide-in-from-bottom-8"
        >
          <div className="max-w-6xl mx-auto bg-[#07361e]/95 backdrop-blur-md text-white border border-[#145b34] rounded-2xl sm:rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.4)] p-4 sm:p-6 lg:p-7">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-5 sm:gap-6">
              
              {/* Left Column: Icon & Text */}
              <div className="flex items-start gap-3.5 sm:gap-4 flex-1">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#0f4f2c] border border-[#1b7342] flex items-center justify-center shrink-0 text-emerald-300 shadow-inner">
                  <Cookie className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>

                <div className="space-y-1.5 max-w-3xl">
                  <h3 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                    <span>Cookie Notice &amp; Preferences</span>
                    <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-medium px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                      <ShieldCheck className="w-3 h-3" /> GDPR &amp; Privacy Compliant
                    </span>
                  </h3>
                  <p className="text-xs sm:text-sm text-emerald-100/85 leading-relaxed">
                    By clicking “Accept All Cookies”, you agree to the storing of cookies on your device to enhance site navigation, analyze site usage, and assist in our marketing efforts.
                  </p>
                  <div className="flex items-center gap-2 pt-0.5 text-[11px] text-emerald-200/80">
                    <span>Learn more in our</span>
                    <Link
                      href="/privacy"
                      className="underline underline-offset-2 text-emerald-300 hover:text-white transition-colors"
                    >
                      Privacy Policy
                    </Link>
                    <span>and</span>
                    <Link
                      href="/terms"
                      className="underline underline-offset-2 text-emerald-300 hover:text-white transition-colors"
                    >
                      Terms of Service
                    </Link>
                    .
                  </div>
                </div>
              </div>

              {/* Right Column: Action Buttons */}
              <div className="flex flex-wrap sm:flex-nowrap items-center gap-2.5 w-full lg:w-auto shrink-0 pt-2 lg:pt-0 border-t border-[#0e4827] lg:border-t-0">
                {/* Cookies Setting Button */}
                <button
                  type="button"
                  onClick={() => setShowSettings(true)}
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-emerald-100 hover:text-white bg-[#0e4827]/70 hover:bg-[#125830] border border-[#1b7342] transition-all cursor-pointer whitespace-nowrap active:scale-[0.98]"
                >
                  <SlidersHorizontal className="w-3.5 h-3.5 text-emerald-300" />
                  <span>Cookies Settings</span>
                </button>

                {/* Reject / Disaccept All */}
                <button
                  type="button"
                  onClick={handleRejectAll}
                  className="flex-1 sm:flex-none inline-flex items-center justify-center px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-emerald-100 hover:text-white bg-transparent hover:bg-[#0e4827]/50 border border-emerald-500/30 transition-all cursor-pointer whitespace-nowrap active:scale-[0.98]"
                >
                  Reject All
                </button>

                {/* Accept All Cookies */}
                <button
                  type="button"
                  onClick={handleAcceptAll}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-[#07361e] bg-[#4ade80] hover:bg-[#32d26d] shadow-lg shadow-emerald-950/40 transition-all cursor-pointer whitespace-nowrap active:scale-[0.98]"
                >
                  <Check className="w-4 h-4 stroke-[2.5]" />
                  <span>Accept All Cookies</span>
                </button>
              </div>
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
                  <SlidersHorizontal className="w-5 h-5" />
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
                When you browse DietNexa, we store or retrieve information on your browser in the form of cookies. You can choose not to allow some types of cookies. Notice that blocking some cookies may impact your experience with health calculators and consultations.
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
                    Essential for the website to function securely. These enable core features like user authentication, consultation forms, Google reCAPTCHA v2 verification, and saving your cookie preferences.
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
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#10793f]"></div>
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
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#10793f]"></div>
                  </label>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:p-5 bg-gray-50 border-t border-gray-100 flex flex-wrap sm:flex-nowrap items-center justify-between gap-2.5">
              <button
                type="button"
                onClick={handleRejectAll}
                className="w-full sm:w-auto px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-gray-600 hover:text-gray-900 hover:bg-gray-200/70 border border-gray-300 transition-colors cursor-pointer"
              >
                Reject All
              </button>

              <div className="flex items-center gap-2.5 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={handleSavePreferences}
                  className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-[#07361e] bg-emerald-100 hover:bg-emerald-200 border border-emerald-300 transition-colors cursor-pointer"
                >
                  Save Preferences
                </button>
                <button
                  type="button"
                  onClick={handleAcceptAll}
                  className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#07361e] hover:bg-[#0c4e2a] shadow transition-colors cursor-pointer"
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

