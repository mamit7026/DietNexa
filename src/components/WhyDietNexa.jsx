"use client";

import Image from "next/image";
import { ArrowRight, UserCheck, Utensils, TrendingUp } from "lucide-react";

const features = [
  {
    id: "consultation",
    icon: UserCheck,
    title: "1:1 Consultation",
    subtitle: "with expert dietitians",
  },
  {
    id: "plans",
    icon: Utensils,
    title: "Personalized",
    subtitle: "Diet Plans",
  },
  {
    id: "progress",
    icon: TrendingUp,
    title: "Track Progress",
    subtitle: "& Stay Motivated",
  },
];

export default function WhyDietNexa() {
  return (
    <section
      id="why-dietnexa"
      className="py-14 lg:py-20 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14">

          {/* LEFT: Phone mockup with decorative leaves — contained bounds */}
          <div
            className="relative flex-shrink-0 flex items-center justify-center"
            style={{ width: "100%", maxWidth: "380px", minHeight: "460px" }}
          >
            {/* Soft ambient glow */}
            <div
              className="absolute rounded-full blur-2xl pointer-events-none"
              style={{
                inset: "20px",
                background: "radial-gradient(circle, rgba(72,187,120,0.15) 0%, transparent 70%)",
              }}
            />

            {/* Leaf top-left — constrained to not overflow into next section */}
            <div
              className="absolute pointer-events-none select-none z-0"
              style={{ top: "0px", left: "0px", width: "160px", height: "200px" }}
            >
              <Image
                src="/image/Glossy Green Leaf Branch.png"
                alt=""
                fill
                unoptimized
                priority
                className="object-contain"
              />
            </div>

            {/* Leaf bottom-right — constrained */}
            <div
              className="absolute pointer-events-none select-none z-0"
              style={{ bottom: "0px", right: "10px", width: "120px", height: "150px" }}
            >
              <Image
                src="/image/Dewy Green Leafy Branch.png"
                alt=""
                fill
                unoptimized
                priority
                className="object-contain"
              />
            </div>

            {/* Phone mockup */}
            <div className="relative z-10" style={{ width: "260px", height: "420px" }}>
              <Image
                src="/image/DietNexa Healthy Meal Planner Mockup.png"
                alt="DietNexa app today's plan calorie tracker"
                fill
                unoptimized
                priority
                className="object-contain drop-shadow-2xl"
              />
            </div>
          </div>

          {/* RIGHT: Copy */}
          <div className="flex-1 text-left">
            {/* Pill */}
            <div
              className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4"
              style={{ background: "#dcf2e3", color: "#0f6b37" }}
            >
              WHY DIETNEXA
            </div>

            <h2
              className="font-extrabold text-gray-900 tracking-tight mb-4 leading-tight"
              style={{ fontSize: "clamp(26px, 3.2vw, 42px)" }}
            >
              More Than a Diet Plan —<br />
              A Complete Nutrition Partner
            </h2>

            <p className="text-gray-500 leading-relaxed mb-8 text-base max-w-xl">
              From expert consultations to personalized meal plans and progress
              tracking, DietNexa supports your health goals at every step.
            </p>

            {/* 3 Features */}
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-7 mb-9">
              {features.map((f) => {
                const Icon = f.icon;
                return (
                  <div key={f.id} className="flex items-center gap-3">
                    <div className="text-[#10793f] shrink-0">
                      <Icon className="w-8 h-8" strokeWidth={1.8} />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 text-[14px] leading-tight">
                        {f.title}
                      </div>
                      <div className="text-[12px] text-gray-500 mt-0.5 leading-tight">
                        {f.subtitle}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <a
              href="#services"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white font-semibold text-sm transition-all hover:opacity-95 hover:shadow-lg active:scale-95 cursor-pointer"
              style={{
                background: "#10793f",
                boxShadow: "0 6px 20px rgba(16,121,63,0.30)",
              }}
            >
              Explore Our Services <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
