"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, Star, ChevronLeft, ChevronRight } from "lucide-react";

const dietitians = [
  {
    id: "dr-ananya",
    name: "Dr. Ananya Sen",
    role: "Clinical Dietitian",
    rating: "4.9",
    reviews: "2,300+",
    image: "/image/dr_ananya_sen.jpg",
  },
  {
    id: "ms-riya",
    name: "Ms. Riya Kapoor",
    role: "Sports Nutritionist",
    rating: "4.8",
    reviews: "1,500+",
    image: "/image/ms_riya_kapoor.jpg",
  },
  {
    id: "dr-neha",
    name: "Dr. Neha Malhotra",
    role: "Women's Health Dietitian",
    rating: "4.9",
    reviews: "1,800+",
    image: "/image/dr_neha_malhotra.jpg",
  },
];

export default function ExpertDietitians({ onSelectDietitian, onOpenModal }) {
  const [activeIdx, setActiveIdx] = useState(0);

  const prev = () => setActiveIdx((i) => (i === 0 ? dietitians.length - 1 : i - 1));
  const next = () => setActiveIdx((i) => (i === dietitians.length - 1 ? 0 : i + 1));

  return (
    <section
      id="dietitians"
      className="relative py-14 lg:py-20 overflow-hidden"
      style={{
        background: "radial-gradient(ellipse at 85% 50%, #edf7f1 0%, #f7fcf9 45%, #ffffff 75%)",
      }}
    >
      {/* Decorative leaf — left side */}
      <div className="absolute -left-10 top-1/2 -translate-y-1/2 w-44 h-80 pointer-events-none select-none z-0 hidden lg:block">
        <Image
          src="/image/Glossy Green Leaf Branch.png"
          alt=""
          fill
          unoptimized
          className="object-contain object-left opacity-70"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

          {/* LEFT: Salad bowl image + heading + CTA */}
          <div
            className="flex-shrink-0 flex flex-col items-start text-left"
            style={{ maxWidth: "360px" }}
          >
            {/* Circular salad bowl image */}
            <div
              className="relative rounded-full overflow-hidden border-4 border-white shadow-2xl mb-7 hover:scale-105 transition-transform duration-500"
              style={{
                width: "200px",
                height: "200px",
                boxShadow: "0 12px 40px rgba(0,0,0,0.14)",
              }}
            >
              <Image
                src="/image/Colorful Grilled Chicken Salad Bowl.png"
                alt="Nutritious colourful salad bowl"
                fill
                unoptimized
                priority
                className="object-cover"
              />
            </div>

            <h2
              className="font-extrabold text-gray-900 tracking-tight leading-tight mb-3"
              style={{
                fontSize: "clamp(26px, 2.8vw, 38px)",
                letterSpacing: "-0.015em",
                fontFamily: "var(--font-sans)",
              }}
            >
              Meet Our<br />Expert Dietitians
            </h2>
            <p
              className="text-gray-500 leading-relaxed mb-7"
              style={{
                fontSize: "clamp(13px, 1vw, 14.5px)",
                maxWidth: "300px",
                fontFamily: "var(--font-sans)",
              }}
            >
              Certified nutrition professionals with real experience in helping people achieve their health goals.
            </p>

            <button
              id="view-all-dietitians"
              onClick={() => onOpenModal?.("all-dietitians")}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-semibold text-sm transition-all hover:opacity-90 hover:shadow-lg active:scale-95 cursor-pointer"
              style={{
                background: "#10793f",
                boxShadow: "0 6px 20px rgba(16,121,63,0.28)",
                fontFamily: "var(--font-sans)",
              }}
            >
              View All Dietitians <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* RIGHT: Dietitian cards with carousel arrows */}
          <div className="flex-1 relative min-w-0">

            {/* Left chevron */}
            <button
              onClick={prev}
              aria-label="Previous dietitian"
              className="absolute -left-5 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center text-gray-500 hover:text-[#10793f] hover:border-[#10793f] transition-all cursor-pointer"
              style={{ boxShadow: "0 2px 10px rgba(0,0,0,0.10)" }}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Right chevron */}
            <button
              onClick={next}
              aria-label="Next dietitian"
              className="absolute -right-5 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center text-gray-500 hover:text-[#10793f] hover:border-[#10793f] transition-all cursor-pointer"
              style={{ boxShadow: "0 2px 10px rgba(0,0,0,0.10)" }}
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Cards grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 px-4">
              {dietitians.map((doc, idx) => {
                const isActive = idx === activeIdx;
                return (
                  <div
                    key={doc.id}
                    id={`dietitian-card-${doc.id}`}
                    onClick={() => {
                      setActiveIdx(idx);
                      onSelectDietitian?.(doc);
                    }}
                    className="group flex flex-col items-center text-center bg-white rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1.5"
                    style={{
                      border: isActive ? "2px solid #10793f" : "1.5px solid #e5e7eb",
                      boxShadow: isActive
                        ? "0 8px 28px rgba(16,121,63,0.18)"
                        : "0 2px 8px rgba(0,0,0,0.05)",
                    }}
                  >
                    {/* Photo */}
                    <div className="relative w-full overflow-hidden bg-slate-50" style={{ height: "195px" }}>
                      <Image
                        src={doc.image}
                        alt={doc.name}
                        fill
                        unoptimized
                        priority
                        className="object-cover object-top transition-transform duration-400 group-hover:scale-105"
                      />
                      {/* Active green accent stripe at top */}
                      {isActive && (
                        <div
                          className="absolute top-0 left-0 right-0 h-1 z-10"
                          style={{ background: "#10793f" }}
                        />
                      )}
                    </div>

                    {/* Info */}
                    <div className="px-4 py-4 w-full">
                      <h3
                        className="font-bold text-gray-900 leading-snug mb-0.5 group-hover:text-[#10793f] transition-colors"
                        style={{ fontSize: "14.5px", fontFamily: "var(--font-sans)" }}
                      >
                        {doc.name}
                      </h3>
                      <p
                        className="text-gray-500 font-medium mb-3"
                        style={{ fontSize: "12px", fontFamily: "var(--font-sans)" }}
                      >
                        {doc.role}
                      </p>
                      {/* Star rating pill */}
                      <div
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full"
                        style={{
                          background: "#fefce8",
                          border: "1px solid #fde68a",
                        }}
                      >
                        <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        <span
                          className="text-gray-900 font-bold"
                          style={{ fontSize: "12px", fontFamily: "var(--font-sans)" }}
                        >
                          {doc.rating}
                        </span>
                        <span
                          className="text-gray-500"
                          style={{ fontSize: "11.5px", fontFamily: "var(--font-sans)" }}
                        >
                          ({doc.reviews})
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Dot indicators */}
            <div className="flex items-center justify-center gap-2 mt-5">
              {dietitians.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIdx(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className="rounded-full transition-all duration-300 cursor-pointer"
                  style={{
                    width: idx === activeIdx ? "22px" : "8px",
                    height: "8px",
                    background: idx === activeIdx ? "#10793f" : "#d1d5db",
                  }}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
