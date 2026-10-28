"use client";

import { Scale, Activity, Zap, Baby, Smile, Apple } from "lucide-react";

const services = [
  {
    id: "weight-loss",
    title: "Weight Loss",
    description: "Sustainable and healthy weight management",
    icon: Scale,
  },
  {
    id: "disease-management",
    title: "Disease Management",
    description: "Diabetes, BP, thyroid, PCOS/PCOD and more",
    icon: Activity,
  },
  {
    id: "sports-nutrition",
    title: "Sports Nutrition",
    description: "Fuel your performance with the right diet",
    icon: Zap,
  },
  {
    id: "pregnancy-nutrition",
    title: "Pregnancy Nutrition",
    description: "Safe and balanced nutrition for mother & baby",
    icon: Baby,
  },
  {
    id: "child-teen",
    title: "Child & Teen Nutrition",
    description: "Healthy growth and development",
    icon: Smile,
  },
  {
    id: "general-wellness",
    title: "General Wellness",
    description: "Build better eating and lifestyle habits",
    icon: Apple,
  },
];

export default function OurServices({ onSelectService }) {
  return (
    <section id="services" className="py-14 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">

        {/* Heading */}
        <div className="text-center mb-10 sm:mb-12">
          <h2
            className="font-extrabold text-gray-900 tracking-tight"
            style={{ fontSize: "clamp(24px, 3vw, 36px)" }}
          >
            Our Services
          </h2>
          <p className="text-gray-500 text-base mt-2">
            Professional nutrition support for every health goal
          </p>
        </div>

        {/* 6 Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5 sm:gap-4">
          {services.map((svc) => {
            const Icon = svc.icon;
            return (
              <div
                key={svc.id}
                onClick={() => onSelectService?.(svc)}
                className="group flex flex-col items-center text-center p-5 rounded-2xl border border-gray-100 bg-white hover:border-[#10793f]/40 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                style={{
                  boxShadow: "0 2px 8px rgba(0,0,0,0.03)",
                }}
              >
                {/* Icon circle */}
                <div
                  className="w-13 h-13 rounded-full flex items-center justify-center mb-3.5 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: "#edf7f1", color: "#10793f" }}
                >
                  <Icon className="w-6 h-6 text-[#10793f]" strokeWidth={1.8} />
                </div>

                <h3 className="text-[14px] font-bold text-gray-900 mb-1.5 group-hover:text-[#10793f] transition-colors leading-snug">
                  {svc.title}
                </h3>
                <p className="text-[12px] text-gray-500 leading-relaxed">
                  {svc.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
