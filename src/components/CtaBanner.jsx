"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function CtaBanner({ onOpenModal }) {
  return (
    <section className="py-6 sm:py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div
          className="relative overflow-hidden rounded-2xl sm:rounded-3xl flex flex-col md:flex-row items-center justify-between shadow-xs"
          style={{
            background: "#edf7ee",
            border: "1px solid #d2eade",
            minHeight: "170px",
          }}
        >
          {/* Left: Text Content */}
          <div className="relative z-10 px-6 sm:px-10 py-6 md:py-8 text-left max-w-lg">
            <h2
              className="font-extrabold text-gray-900 tracking-tight mb-2"
              style={{ fontSize: "clamp(22px, 2.4vw, 32px)", lineHeight: 1.2 }}
            >
              Start Your Health Journey Today
            </h2>
            <p className="text-gray-600 text-[13.5px] sm:text-[14.5px] leading-relaxed max-w-md">
              Get expert dietitian support, a personalized nutrition plan, and
              ongoing guidance for a healthier, happier you.
            </p>
          </div>

          {/* Middle: CTA Button */}
          <div className="relative z-10 my-4 md:my-0 px-6 md:px-0">
            <button
              onClick={() => onOpenModal?.("get-started")}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white font-semibold text-sm transition-all hover:opacity-95 hover:shadow-lg active:scale-95 cursor-pointer whitespace-nowrap shadow-md"
              style={{
                background: "#10793f",
                boxShadow: "0 6px 20px rgba(16,121,63,0.30)",
              }}
            >
              Get Started Now <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Right: Fresh healthy foods & smoothie */}
          <div
            className="relative flex-shrink-0 self-end w-full md:w-[320px] lg:w-[360px] h-[180px] md:h-[200px]"
          >
            <Image
              src="/image/Vibrant Healthy Foods with Measuring Tape.png"
              alt="Fresh healthy fruits, vegetables, measuring tape and smoothie"
              fill
              unoptimized
              priority
              className="object-contain object-right-bottom"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
