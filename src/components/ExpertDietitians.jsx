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
      className="relative py-14 lg:py-20 overflow-hidden bg-white"
      style={{
        background: "radial-gradient(ellipse at 85% 50%, #edf7f1 0%, #f7fcf9 45%, #ffffff 75%)",
      }}
    >
      {/* Decorative leaf — left side */}
      <div
        className="absolute -left-10 top-1/2 -translate-y-1/2 w-40 h-80 pointer-events-none select-none z-0 hidden lg:block"
      >
        <Image
          src="/image/Glossy Green Leaf Branch.png"
          alt=""
          fill
          unoptimized
          priority
          className="object-contain object-left opacity-65"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14">

          {/* ── LEFT: Salad bowl + heading ── */}
          <div
            className="flex-shrink-0 flex flex-col items-start text-left"
            style={{ maxWidth: "380px" }}
          >
            {/* Salad bowl */}
            <div
              className="relative rounded-full overflow-hidden border-4 border-white shadow-xl mb-6 hover:rotate-2 transition-transform duration-500"
              style={{ width: "210px", height: "210px" }}
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
              style={{ fontSize: "clamp(26px, 3vw, 40px)" }}
            >
              Meet Our<br />Expert Dietitians
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-6 max-w-xs">
              Certified nutrition professionals with real experience in helping people achieve their health goals.
            </p>

            <button
              onClick={() => onOpenModal?.("all-dietitians")}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-semibold text-sm transition-all hover:opacity-95 hover:shadow-lg active:scale-95 shadow-md cursor-pointer"
              style={{ background: "#10793f", boxShadow: "0 6px 20px rgba(16,121,63,0.28)" }}
            >
              View All Dietitians <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* ── RIGHT: Dietitian cards + chevrons ── */}
          <div className="flex-1 relative">
            {/* Left chevron */}
            <button
              onClick={prev}
              aria-label="Previous"
              className="absolute -left-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center text-gray-600 hover:text-[#10793f] hover:border-[#10793f] transition-all cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Right chevron */}
            <button
              onClick={next}
              aria-label="Next"
              className="absolute -right-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center text-gray-600 hover:text-[#10793f] hover:border-[#10793f] transition-all cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Cards grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 px-2">
              {dietitians.map((doc, idx) => {
                const isActive = idx === activeIdx;
                return (
                  <div
                    key={doc.id}
                    onClick={() => onSelectDietitian?.(doc)}
                    className="group flex flex-col items-center text-center bg-white rounded-2xl border transition-all duration-300 overflow-hidden hover:-translate-y-1 hover:shadow-xl cursor-pointer"
                    style={{
                      border: isActive
                        ? "2px solid #10793f"
                        : "1px solid #e5e7eb",
                      boxShadow: isActive
                        ? "0 6px 24px rgba(16,121,63,0.16)"
                        : "0 2px 6px rgba(0,0,0,0.04)",
                    }}
                  >
                    {/* Photo area */}
                    <div
                      className="relative w-full h-[180px] bg-slate-100 overflow-hidden"
                    >
                      <Image
                        src={doc.image}
                        alt={doc.name}
                        fill
                        unoptimized
                        priority
                        className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>

                    {/* Info */}
                    <div className="p-4 w-full">
                      <h3
                        className="font-bold text-gray-900 text-[15px] group-hover:text-[#10793f] transition-colors leading-snug mb-0.5"
                      >
                        {doc.name}
                      </h3>
                      <p className="text-xs text-gray-500 font-medium mb-3">
                        {doc.role}
                      </p>
                      <div
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold"
                        style={{ background: "#fefce8", border: "1px solid #fef08a" }}
                      >
                        <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        <span className="text-gray-900 font-bold">
                          {doc.rating}
                        </span>
                        <span className="text-gray-500 font-normal">
                          ({doc.reviews})
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
