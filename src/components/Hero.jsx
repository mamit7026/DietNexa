"use client";

import Image from "next/image";
import { ArrowRight, Leaf, Sprout, Star, Check, Sparkles, Activity } from "lucide-react";

export default function Hero({ onOpenModal }) {
  return (
    <section
      id="home"
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(115deg, #f2faf4 0%, #f7fcf9 40%, #edf8f1 75%, #e6f5eb 100%)",
      }}
    >
      {/* Decorative leaf — top-left, hidden on mobile */}
      <div
        className="absolute pointer-events-none select-none hidden lg:block z-0"
        style={{ top: "-20px", left: "-22px", width: "220px", height: "270px" }}
      >
        <Image
          src="/image/Dewy Green Leafy Branch.png"
          alt=""
          fill
          unoptimized
          priority
          className="object-contain object-left-top opacity-50"
        />
      </div>

      {/* Subtle modern background glow */}
      <div
        className="absolute top-1/4 right-1/4 w-[450px] h-[450px] rounded-full pointer-events-none z-0 blur-3xl opacity-35"
        style={{
          background: "radial-gradient(circle, #bbf7d0 0%, #86efac 40%, transparent 70%)",
        }}
      />

      {/* Main container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-between min-h-[460px] lg:min-h-[480px]">

          {/* ── LEFT COLUMN ── */}
          <div className="flex-1 flex flex-col justify-center py-10 lg:py-12 text-left lg:pr-6 xl:pr-10 max-w-full lg:max-w-[510px]">

            {/* Redesigned "Online Dietitian Consultation" Badge */}
            <div
              className="inline-flex items-center gap-2.5 mb-5 self-start px-4 py-1.5 rounded-full border transition-all duration-300 hover:scale-[1.02] cursor-default shadow-xs"
              style={{
                background: "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(240,253,244,0.95) 100%)",
                borderColor: "rgba(16,121,63,0.22)",
                boxShadow: "0 4px 18px -2px rgba(16,121,63,0.12), 0 1px 3px rgba(0,0,0,0.04)",
                backdropFilter: "blur(10px)",
              }}
            >
              {/* Pulsing Live Beacon */}
              <span className="relative flex h-2.5 w-2.5 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#10793f]"></span>
              </span>

              {/* Sparkles Icon */}
              <Sparkles className="w-3.5 h-3.5 text-[#10793f] shrink-0" />

              {/* Text */}
              <span className="text-[12.5px] sm:text-[13px] font-bold text-gray-800 tracking-tight">
                Online Dietitian Consultation
              </span>

              {/* AI-Powered Tag */}
              <span
                className="hidden sm:inline-flex items-center text-[10.5px] font-bold text-[#10793f] px-2 py-0.5 rounded-full border"
                style={{
                  background: "rgba(16,121,63,0.08)",
                  borderColor: "rgba(16,121,63,0.18)",
                }}
              >
                AI-Powered
              </span>
            </div>

            {/* Headline */}
            <h1
              className="font-extrabold text-gray-900 tracking-tight mb-4"
              style={{
                fontSize: "clamp(30px, 3.8vw, 45px)",
                lineHeight: 1.14,
                letterSpacing: "-0.02em",
                fontFamily: "var(--font-sans)",
              }}
            >
              Personalized Nutrition
              <span className="block mt-1 bg-gradient-to-r from-[#10793f] via-[#15803d] to-[#16a34a] bg-clip-text text-transparent">
                for a Healthier You
              </span>
            </h1>

            {/* Sub-text */}
            <p
              className="text-gray-600 leading-relaxed mb-7 max-w-[440px]"
              style={{
                fontSize: "clamp(14px, 1.15vw, 15.5px)",
                fontFamily: "var(--font-sans)",
              }}
            >
              Consult expert dietitians, get customized diet plans, and receive
              ongoing guidance for lasting health and wellness.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 mb-8">
              <button
                id="hero-get-diet-plan"
                onClick={() => onOpenModal?.("diet-plan")}
                className="group inline-flex items-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full font-bold text-white text-[14px] transition-all duration-200 hover:opacity-95 hover:shadow-xl active:scale-95 cursor-pointer"
                style={{
                  background: "linear-gradient(135deg, #10793f 0%, #0d6534 100%)",
                  boxShadow: "0 8px 24px -4px rgba(16,121,63,0.42)",
                  fontFamily: "var(--font-sans)",
                }}
              >
                Get My Diet Plan{" "}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              <button
                id="hero-book-consultation"
                onClick={() => onOpenModal?.("consultation")}
                className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full font-bold text-gray-800 text-[14px] border transition-all duration-200 hover:bg-white hover:border-[#10793f]/40 hover:text-[#10793f] hover:shadow-md active:scale-95 cursor-pointer"
                style={{
                  background: "rgba(255,255,255,0.92)",
                  borderColor: "#d1d5db",
                  fontFamily: "var(--font-sans)",
                }}
              >
                Book a Consultation
              </button>
            </div>

            {/* Trust Metrics */}
            <div
              className="flex flex-wrap items-center gap-5 sm:gap-7 pt-5"
              style={{ borderTop: "1px solid rgba(16,121,63,0.12)" }}
            >
              {[
                {
                  icon: <Leaf className="w-4 h-4 text-[#10793f]" strokeWidth={2.2} />,
                  value: "500+",
                  label: "Expert Dietitians",
                },
                {
                  icon: <Sprout className="w-4 h-4 text-[#10793f]" strokeWidth={2.2} />,
                  value: "100K+",
                  label: "Happy Users",
                },
                {
                  icon: <Star className="w-4 h-4 text-amber-500 fill-amber-400" strokeWidth={1.5} />,
                  value: "4.9/5",
                  label: "User Rating",
                },
              ].map((m) => (
                <div key={m.label} className="flex items-center gap-2.5">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
                    style={{
                      background: "rgba(16,121,63,0.08)",
                      border: "1px solid rgba(16,121,63,0.16)",
                    }}
                  >
                    {m.icon}
                  </div>
                  <div>
                    <div
                      className="font-extrabold text-gray-900 leading-tight"
                      style={{ fontSize: "14.5px", fontFamily: "var(--font-sans)" }}
                    >
                      {m.value}
                    </div>
                    <div
                      className="text-gray-500 font-medium text-[11.5px] mt-0.5"
                      style={{ fontFamily: "var(--font-sans)" }}
                    >
                      {m.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT COLUMN: Desktop Layout (lg+) ── */}
          <div
            className="relative flex-shrink-0 hidden lg:block self-stretch"
            style={{ width: "min(590px, 49%)" }}
          >
            {/* Concentric subtle AI halo */}
            <div
              className="absolute pointer-events-none rounded-full border border-emerald-400/25 z-0"
              style={{
                width: "410px",
                height: "410px",
                top: "12px",
                left: "48%",
                transform: "translateX(-50%)",
              }}
            />

            {/* Vibrant green circle blob — behind doctor */}
            <div
              className="absolute pointer-events-none z-0 rounded-full"
              style={{
                width: "350px",
                height: "350px",
                background: "radial-gradient(circle at 45% 45%, #7ed338 0%, #68bf2b 60%, #4f9f1e 100%)",
                top: "28px",
                left: "48%",
                transform: "translateX(-50%)",
                boxShadow: "0 18px 50px rgba(104,191,43,0.28)",
              }}
            />

            {/* Floating Card: Your Personalized Plan */}
            <div
              className="absolute z-20 bg-white/95 backdrop-blur-md rounded-2xl animate-float-card"
              style={{
                top: "24px",
                right: "0px",
                width: "clamp(180px, 35%, 215px)",
                padding: "14px 16px",
                boxShadow: "0 16px 40px -8px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.04)",
                border: "1px solid rgba(220,240,230,0.9)",
              }}
            >
              <div className="flex items-center justify-between mb-2.5">
                <div
                  className="font-extrabold text-gray-900 tracking-tight"
                  style={{ fontSize: "12.5px", fontFamily: "var(--font-sans)" }}
                >
                  Your Personalized Plan
                </div>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              </div>
              <div className="space-y-2">
                {["Custom Meal Plan", "Nutrition Tracking", "Regular Follow-ups", "Lifestyle Guidance"].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <div
                      className="w-4 h-4 rounded-full flex items-center justify-center shrink-0"
                      style={{ background: "#10793f" }}
                    >
                      <Check className="w-2.5 h-2.5 text-white" strokeWidth={3.5} />
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

            {/* Floating Micro Badge: Nutrition Score */}
            <div
              className="absolute z-20 bg-white/95 backdrop-blur-md rounded-xl px-3.5 py-2 hidden xl:flex items-center gap-2.5"
              style={{
                bottom: "55px",
                left: "-10px",
                boxShadow: "0 14px 30px -6px rgba(0,0,0,0.1), 0 2px 6px rgba(0,0,0,0.04)",
                border: "1px solid rgba(220,240,230,0.9)",
                animation: "float-card 4s ease-in-out infinite 1.2s",
              }}
            >
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center text-[#10793f]"
                style={{ background: "rgba(16,121,63,0.1)" }}
              >
                <Activity className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[10px] font-semibold text-gray-500 leading-tight">Nutrition Score</div>
                <div className="text-[12.5px] font-extrabold text-gray-900 leading-tight">98% Optimal</div>
              </div>
            </div>

            {/* Doctor image — anchored cleanly at bottom */}
            <div
              className="absolute z-10 pointer-events-none"
              style={{
                bottom: "0px",
                left: "48%",
                transform: "translateX(-62%)",
                width: "74%",
                height: "96%",
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

            {/* Vegetable medley — bottom right foreground */}
            <div
              className="absolute z-30 pointer-events-none"
              style={{
                bottom: "0px",
                right: "0px",
                width: "52%",
                height: "48%",
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

          {/* ── MOBILE HERO IMAGE (< lg) ── */}
          <div className="relative block lg:hidden w-full mt-6 mb-4" style={{ height: "290px" }}>
            {/* Green blob */}
            <div
              className="absolute pointer-events-none z-0 rounded-full"
              style={{
                width: "230px",
                height: "230px",
                top: "10px",
                left: "50%",
                transform: "translateX(-50%)",
                background: "radial-gradient(circle at 45% 45%, #7ed338 0%, #68bf2b 60%, #4f9f1e 100%)",
                boxShadow: "0 12px 35px rgba(104,191,43,0.25)",
              }}
            />
            {/* Doctor */}
            <div className="absolute inset-0 z-10 pointer-events-none">
              <Image
                src="/image/hero section Smiling Doctor in Green Scrubs.png"
                alt="DietNexa Expert Dietitian"
                fill
                priority
                unoptimized
                className="object-contain object-bottom"
              />
            </div>
            {/* Vegetables */}
            <div
              className="absolute z-20 pointer-events-none"
              style={{ bottom: "0px", right: "6%", width: "48%", height: "55%" }}
            >
              <div className="relative w-full h-full">
                <Image
                  src="/image/hero sectionFresh Vegetable Medley Cutout.png"
                  alt="Fresh Vegetable Medley"
                  fill
                  priority
                  unoptimized
                  className="object-contain object-bottom-right drop-shadow-lg"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
