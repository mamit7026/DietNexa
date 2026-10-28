"use client";

import Image from "next/image";
import { ArrowRight, Leaf, Sprout, Star } from "lucide-react";

export default function Hero({ onOpenModal }) {
  return (
    <section
      id="home"
      className="relative overflow-hidden"
      style={{
        background: "radial-gradient(ellipse at 80% 40%, #eaf6ee 0%, #f7fbf8 50%, #ffffff 80%)",
      }}
    >
      {/* Decorative leaf — top-left */}
      <div
        className="absolute pointer-events-none select-none hidden lg:block z-0"
        style={{ top: "-10px", left: "-20px", width: "240px", height: "300px" }}
      >
        <Image
          src="/image/Dewy Green Leafy Branch.png"
          alt=""
          fill
          unoptimized
          priority
          className="object-contain object-left-top opacity-60"
        />
      </div>

      {/* Main container — matches navbar padding */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center justify-between pt-8 pb-4 lg:pt-12 lg:pb-0 min-h-[560px]">

          {/* LEFT COLUMN: Text Content */}
          <div className="flex-1 flex flex-col justify-center py-8 lg:py-12 text-left lg:pr-8 xl:pr-12 max-w-xl">

            {/* Pill badge */}
            <div
              className="inline-flex items-center gap-2 mb-5 self-start px-3.5 py-1.5 rounded-full border text-[13px] font-semibold text-gray-800"
              style={{
                background: "rgba(255,255,255,0.92)",
                borderColor: "#d1d5db",
                boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
                fontFamily: "var(--font-sans)",
              }}
            >
              <span
                className="w-2 h-2 rounded-full flex-shrink-0"
                style={{ background: "#10793f" }}
              />
              Online Dietitian Consultation
            </div>

            {/* Headline */}
            <h1
              className="font-extrabold text-gray-900 tracking-tight mb-4"
              style={{
                fontSize: "clamp(30px, 3.6vw, 48px)",
                lineHeight: 1.13,
                letterSpacing: "-0.015em",
                fontFamily: "var(--font-sans)",
              }}
            >
              Personalized Nutrition
              <br />
              for a Healthier You
            </h1>

            {/* Sub-text */}
            <p
              className="text-gray-500 leading-relaxed mb-8"
              style={{
                fontSize: "clamp(13.5px, 1.05vw, 15.5px)",
                maxWidth: "460px",
                fontFamily: "var(--font-sans)",
              }}
            >
              Consult expert dietitians, get customized diet plans, and receive
              ongoing guidance for lasting health and wellness.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 mb-9">
              <button
                id="hero-get-diet-plan"
                onClick={() => onOpenModal?.("diet-plan")}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-white text-[14px] transition-all hover:opacity-90 hover:shadow-lg active:scale-95 cursor-pointer"
                style={{
                  background: "#10793f",
                  boxShadow: "0 6px 20px rgba(16,121,63,0.32)",
                  fontFamily: "var(--font-sans)",
                }}
              >
                Get My Diet Plan <ArrowRight className="w-4 h-4" />
              </button>
              <button
                id="hero-book-consultation"
                onClick={() => onOpenModal?.("consultation")}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-gray-800 text-[14px] border transition-all hover:bg-white hover:border-gray-400 cursor-pointer"
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
              className="flex flex-wrap items-center gap-6 sm:gap-8 pt-5"
              style={{ borderTop: "1px solid rgba(0,0,0,0.07)" }}
            >
              {[
                {
                  icon: <Leaf className="w-5 h-5 text-[#10793f]" strokeWidth={2} />,
                  value: "500+",
                  label: "Expert Dietitians",
                },
                {
                  icon: <Sprout className="w-5 h-5 text-[#10793f]" strokeWidth={2} />,
                  value: "100K+",
                  label: "Happy Users",
                },
                {
                  icon: <Star className="w-5 h-5 text-[#10793f]" strokeWidth={2} fill="none" />,
                  value: "4.9/5",
                  label: "User Rating",
                },
              ].map((m) => (
                <div key={m.label} className="flex items-center gap-2">
                  <div className="shrink-0 text-[#10793f]">{m.icon}</div>
                  <div>
                    <div
                      className="font-bold text-gray-900 leading-none"
                      style={{ fontSize: "15px", fontFamily: "var(--font-sans)" }}
                    >
                      {m.value}
                    </div>
                    <div
                      className="text-gray-500 font-medium mt-0.5"
                      style={{ fontSize: "12px", fontFamily: "var(--font-sans)" }}
                    >
                      {m.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN: Doctor + Vegetable Composition */}
          <div
            className="relative flex-shrink-0 flex items-end justify-center lg:justify-end self-end w-full lg:w-[600px] xl:w-[640px] mt-8 lg:mt-0 select-none"
            style={{ height: "478px" }}
          >
            {/* Ambient soft glow */}
            <div
              className="absolute pointer-events-none rounded-full blur-3xl opacity-35 z-0"
              style={{
                width: "450px",
                height: "450px",
                background: "radial-gradient(circle, #7bc850 0%, #bde6a3 50%, transparent 70%)",
                top: "15px",
                right: "25px",
              }}
            />

            {/* Organic lime-green blob backdrop */}
            <div
              className="absolute pointer-events-none z-0"
              style={{
                width: "420px",
                height: "412px",
                background: "linear-gradient(140deg, #6dc535 0%, #73c43c 55%, #5faf2a 100%)",
                borderRadius: "44% 56% 58% 42% / 48% 46% 54% 52%",
                top: "22px",
                right: "28px",
                opacity: 0.97,
                boxShadow: "0 14px 48px rgba(115,196,60,0.30)",
              }}
            />

            {/* Floating Your Personalized Plan Card */}
            <div
              className="absolute z-10 bg-white rounded-2xl animate-float-card"
              style={{
                top: "32px",
                right: "8px",
                width: "228px",
                padding: "16px 18px",
                boxShadow: "0 18px 48px rgba(0,0,0,0.13)",
                border: "1px solid rgba(230,230,230,0.8)",
              }}
            >
              <div
                className="font-extrabold text-gray-900 mb-3 tracking-tight"
                style={{ fontSize: "14.5px", fontFamily: "var(--font-sans)" }}
              >
                Your Personalized Plan
              </div>
              <div className="space-y-2.5">
                {[
                  "Custom Meal Plan",
                  "Nutrition Tracking",
                  "Regular Follow-ups",
                  "Lifestyle Guidance",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2.5">
                    <div
                      className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: "#10793f" }}
                    >
                      <svg
                        className="w-2.5 h-2.5 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={3.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span
                      className="font-semibold text-gray-800 leading-tight"
                      style={{ fontSize: "12px", fontFamily: "var(--font-sans)" }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Desk Surface Strip */}
            <div
              className="absolute bottom-0 left-[-40px] right-0 z-[15] rounded-t-sm"
              style={{
                height: "26px",
                background: "linear-gradient(to bottom, #f3ede2 0%, #e6dccb 45%, #d5c7b0 100%)",
                borderTop: "2px solid #dfd4c0",
                boxShadow: "0 -3px 10px rgba(0,0,0,0.04)",
              }}
            />

            {/* Doctor Cutout Image */}
            <div
              className="absolute z-20 pointer-events-none"
              style={{
                bottom: "2px",
                left: "-8px",
                width: "clamp(350px, 36vw, 460px)",
                height: "460px",
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

            {/* Fresh Vegetable Medley Cutout */}
            <div
              className="absolute z-30 pointer-events-none"
              style={{
                bottom: "4px",
                right: "-8px",
                width: "clamp(220px, 23vw, 310px)",
                height: "clamp(148px, 16vw, 195px)",
              }}
            >
              <div className="relative w-full h-full">
                <Image
                  src="/image/hero sectionFresh Vegetable Medley Cutout.png"
                  alt="Fresh Vegetable Medley"
                  fill
                  priority
                  unoptimized
                  className="object-contain object-bottom-right drop-shadow-2xl"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
