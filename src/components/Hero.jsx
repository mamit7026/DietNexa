"use client";

import Image from "next/image";
import { ArrowRight, Leaf, Sprout, Star } from "lucide-react";

export default function Hero({ onOpenModal }) {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-white"
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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center justify-between pt-8 pb-4 lg:pt-12 lg:pb-0 min-h-[580px]">

          {/* ── LEFT COLUMN: Text Content ── */}
          <div className="flex-1 flex flex-col justify-center py-8 lg:py-12 text-left lg:pr-8 xl:pr-12 max-w-xl">
            {/* Pill badge */}
            <div
              className="inline-flex items-center gap-2 mb-5 self-start px-3.5 py-1.5 rounded-full border text-[13px] font-semibold text-gray-800 shadow-xs"
              style={{
                background: "rgba(255,255,255,0.92)",
                borderColor: "#d1d5db",
              }}
            >
              <span
                className="w-2 h-2 rounded-full"
                style={{ background: "#10793f" }}
              />
              Online Dietitian Consultation
            </div>

            {/* Headline */}
            <h1
              className="font-extrabold text-gray-900 tracking-tight mb-4"
              style={{
                fontSize: "clamp(32px, 3.8vw, 50px)",
                lineHeight: 1.15,
              }}
            >
              Personalized Nutrition
              <br />
              for a Healthier You
            </h1>

            {/* Sub-text */}
            <p
              className="text-gray-600 leading-relaxed mb-8 max-w-[490px]"
              style={{ fontSize: "clamp(14px, 1.1vw, 16px)" }}
            >
              Consult expert dietitians, get customized diet plans, and receive
              ongoing guidance for lasting health and wellness.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 mb-10">
              <button
                onClick={() => onOpenModal?.("diet-plan")}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-white text-[14px] transition-all hover:opacity-95 hover:shadow-lg active:scale-95 cursor-pointer"
                style={{
                  background: "#10793f",
                  boxShadow: "0 6px 20px rgba(16,121,63,0.32)",
                }}
              >
                Get My Diet Plan <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onOpenModal?.("consultation")}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-gray-800 text-[14px] border transition-all hover:bg-white hover:border-gray-400 cursor-pointer shadow-xs"
                style={{
                  background: "rgba(255,255,255,0.85)",
                  borderColor: "#d1d5db",
                }}
              >
                Book a Consultation
              </button>
            </div>

            {/* Trust Metrics */}
            <div
              className="flex flex-wrap items-center gap-6 sm:gap-8 pt-6"
              style={{ borderTop: "1px solid rgba(0,0,0,0.06)" }}
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
                      style={{ fontSize: "16px" }}
                    >
                      {m.value}
                    </div>
                    <div className="text-[12px] text-gray-500 font-medium mt-1">
                      {m.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT COLUMN: Exact Doctor Artwork ── */}
          <div
            className="relative flex-shrink-0 flex items-end justify-center lg:justify-end self-end w-full lg:w-[560px] xl:w-[610px] mt-6 lg:mt-0"
            style={{ height: "350px", maxHeight: "400px" }}
          >
            <div className="relative w-full h-full">
              <Image
                src="/image/hero_doctor_seamless.png"
                alt="DietNexa Expert Dietitian with Personalized Plan"
                fill
                priority
                unoptimized
                sizes="(max-width: 1024px) 100vw, 610px"
                className="object-contain object-bottom lg:object-right-bottom"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

