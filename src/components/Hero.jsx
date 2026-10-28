"use client";

import Image from "next/image";
import { ArrowRight, Leaf, Sprout, Star } from "lucide-react";

export default function Hero({ onOpenModal }) {
  return (
    <section
      id="home"
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(110deg, #f0faf3 0%, #f6fcf8 40%, #eef8f2 70%, #e8f5ec 100%)",
        minHeight: "380px",
      }}
    >
      {/* Decorative leaf — top-left */}
      <div
        className="absolute pointer-events-none select-none hidden lg:block z-0"
        style={{ top: "-20px", left: "-22px", width: "200px", height: "260px" }}
      >
        <Image
          src="/image/Dewy Green Leafy Branch.png"
          alt=""
          fill
          unoptimized
          priority
          className="object-contain object-left-top opacity-55"
        />
      </div>

      {/* Main container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div
          className="flex flex-col lg:flex-row items-stretch justify-between"
          style={{ minHeight: "380px" }}
        >

          {/* LEFT COLUMN */}
          <div
            className="flex-1 flex flex-col justify-center py-8 lg:py-10 text-left lg:pr-6 xl:pr-10"
            style={{ maxWidth: "480px" }}
          >
            {/* Pill badge */}
            <div
              className="inline-flex items-center gap-2 mb-4 self-start px-3.5 py-1.5 rounded-full border text-[12.5px] font-semibold text-gray-700"
              style={{
                background: "rgba(255,255,255,0.90)",
                borderColor: "#d1d5db",
                boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
                fontFamily: "var(--font-sans)",
              }}
            >
              <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: "#10793f" }} />
              Online Dietitian Consultation
            </div>

            {/* Headline */}
            <h1
              className="font-extrabold text-gray-900 tracking-tight mb-3"
              style={{
                fontSize: "clamp(26px, 3.2vw, 42px)",
                lineHeight: 1.12,
                letterSpacing: "-0.018em",
                fontFamily: "var(--font-sans)",
              }}
            >
              Personalized Nutrition
              <br />
              for a Healthier You
            </h1>

            {/* Sub-text */}
            <p
              className="text-gray-500 leading-relaxed mb-6"
              style={{
                fontSize: "clamp(13px, 1vw, 14.5px)",
                maxWidth: "400px",
                fontFamily: "var(--font-sans)",
              }}
            >
              Consult expert dietitians, get customized diet plans, and receive
              ongoing guidance for lasting health and wellness.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 mb-7">
              <button
                id="hero-get-diet-plan"
                onClick={() => onOpenModal?.("diet-plan")}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white text-[13.5px] transition-all hover:opacity-90 hover:shadow-lg active:scale-95 cursor-pointer"
                style={{
                  background: "#10793f",
                  boxShadow: "0 5px 18px rgba(16,121,63,0.32)",
                  fontFamily: "var(--font-sans)",
                }}
              >
                Get My Diet Plan <ArrowRight className="w-4 h-4" />
              </button>
              <button
                id="hero-book-consultation"
                onClick={() => onOpenModal?.("consultation")}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-gray-700 text-[13.5px] border transition-all hover:bg-white hover:border-gray-400 cursor-pointer"
                style={{
                  background: "rgba(255,255,255,0.85)",
                  borderColor: "#d1d5db",
                  fontFamily: "var(--font-sans)",
                }}
              >
                Book a Consultation
              </button>
            </div>

            {/* Trust Metrics */}
            <div
              className="flex flex-wrap items-center gap-5 sm:gap-7 pt-4"
              style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }}
            >
              {[
                { icon: <Leaf className="w-4 h-4 text-[#10793f]" strokeWidth={2} />, value: "500+", label: "Expert Dietitians" },
                { icon: <Sprout className="w-4 h-4 text-[#10793f]" strokeWidth={2} />, value: "100K+", label: "Happy Users" },
                { icon: <Star className="w-4 h-4 text-[#10793f]" strokeWidth={2} fill="none" />, value: "4.9/5", label: "User Rating" },
              ].map((m) => (
                <div key={m.label} className="flex items-center gap-1.5">
                  <div className="shrink-0">{m.icon}</div>
                  <div>
                    <div className="font-bold text-gray-900 leading-none" style={{ fontSize: "14px", fontFamily: "var(--font-sans)" }}>{m.value}</div>
                    <div className="text-gray-500 font-medium mt-0.5" style={{ fontSize: "11px", fontFamily: "var(--font-sans)" }}>{m.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div
            className="relative flex-shrink-0 hidden lg:block self-stretch"
            style={{ width: "580px" }}
          >
            {/* Green oval blob — centered behind doctor */}
            <div
              className="absolute pointer-events-none z-0"
              style={{
                width: "340px",
                height: "340px",
                background: "radial-gradient(circle at 50% 50%, #6dc535 0%, #73c43c 60%, #5aad28 100%)",
                borderRadius: "50%",
                top: "14px",
                left: "50%",
                transform: "translateX(-55%)",
                boxShadow: "0 10px 40px rgba(115,196,60,0.25)",
              }}
            />

            {/* Ambient glow */}
            <div
              className="absolute pointer-events-none rounded-full blur-3xl opacity-25 z-0"
              style={{
                width: "380px",
                height: "380px",
                background: "radial-gradient(circle, #7bc850 0%, #c5e8a8 60%, transparent 80%)",
                top: "0px",
                left: "50%",
                transform: "translateX(-50%)",
              }}
            />

            {/* Your Personalized Plan card */}
            <div
              className="absolute z-20 bg-white rounded-2xl animate-float-card"
              style={{
                top: "22px",
                right: "0px",
                width: "200px",
                padding: "14px 16px",
                boxShadow: "0 12px 40px rgba(0,0,0,0.14)",
                border: "1px solid rgba(230,230,230,0.9)",
              }}
            >
              <div
                className="font-extrabold text-gray-900 mb-2.5 tracking-tight"
                style={{ fontSize: "13px", fontFamily: "var(--font-sans)" }}
              >
                Your Personalized Plan
              </div>
              <div className="space-y-2">
                {["Custom Meal Plan", "Nutrition Tracking", "Regular Follow-ups", "Lifestyle Guidance"].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <div
                      className="w-3.5 h-3.5 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: "#10793f" }}
                    >
                      <svg className="w-2 h-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span
                      className="font-semibold text-gray-800 leading-tight"
                      style={{ fontSize: "11px", fontFamily: "var(--font-sans)" }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Desk surface */}
            <div
              className="absolute bottom-0 left-0 right-0 z-[15]"
              style={{
                height: "22px",
                background: "linear-gradient(to bottom, #f0ebe0 0%, #e3d8c8 50%, #d2c6ae 100%)",
                borderTop: "1.5px solid #dcd0bb",
              }}
            />

            {/* Doctor Cutout Image — centered */}
            <div
              className="absolute z-10 pointer-events-none"
              style={{
                bottom: "0px",
                left: "50%",
                transform: "translateX(-62%)",
                width: "420px",
                height: "370px",
              }}
            >
              <div className="relative w-full h-full">
                <Image
                  src="/image/hero section Smiling Doctor in Green Scrubs.png"
                  alt="DietNexa Expert Dietitian"
                  fill
                  priority
                  unoptimized
                  className="object-contain object-bottom"
                />
              </div>
            </div>

            {/* Fresh Vegetable Medley — bottom right */}
            <div
              className="absolute z-30 pointer-events-none"
              style={{
                bottom: "0px",
                right: "0px",
                width: "280px",
                height: "175px",
              }}
            >
              <div className="relative w-full h-full">
                <Image
                  src="/image/hero sectionFresh Vegetable Medley Cutout.png"
                  alt="Fresh Vegetable Medley"
                  fill
                  priority
                  unoptimized
                  className="object-contain object-bottom-right drop-shadow-xl"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
