"use client";

import { Star } from "lucide-react";

const reviews = [
  {
    id: "arjun",
    text: "The personalized diet plan and regular guidance helped me lose 8 kg in 3 months. Highly recommend DietNexa!",
    name: "Arjun Mehta",
    city: "Bengaluru",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    rating: 5,
  },
  {
    id: "priya",
    text: "The dietitian was very supportive and understood my health concerns perfectly. My energy and overall well-being have improved a lot.",
    name: "Priya Sharma",
    city: "Delhi",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
    rating: 5,
  },
  {
    id: "michael",
    text: "Easy to use, professional dietitians, and practical meal plans. DietNexa makes healthy living simple!",
    name: "Michael D'Souza",
    city: "UAE",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="reviews" className="py-8 lg:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center mb-7 sm:mb-9">
          <h2
            className="font-extrabold text-gray-900 tracking-tight"
            style={{ fontSize: "clamp(24px, 3vw, 36px)" }}
          >
            What Our Users Say
          </h2>
          <div className="w-14 h-1 rounded-full mx-auto mt-2.5" style={{ background: "#10793f" }} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {reviews.map((r) => (
            <div
              key={r.id}
              className="flex flex-col bg-white rounded-2xl border border-gray-200/80 p-5 sm:p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Green Quote Mark */}
              <div className="flex items-center mb-2">
                <span
                  className="font-serif text-3xl font-black leading-none select-none text-[#10793f]"
                >
                  “
                </span>
              </div>

              {/* Review text */}
              <p className="text-gray-600 text-[13.5px] leading-relaxed flex-1 mb-4">
                {r.text}
              </p>

              {/* User + stars */}
              <div className="flex items-center justify-between border-t border-gray-100 pt-4 mt-auto">
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden border border-gray-200 shrink-0">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={r.avatar}
                      alt={r.name}
                      className="w-full h-full object-cover"
                      loading="eager"
                    />
                  </div>
                  <div>
                    <div className="text-[13.5px] font-bold text-gray-900 leading-none">
                      {r.name}
                    </div>
                    <div className="text-[11.5px] text-gray-500 mt-1">{r.city}</div>
                  </div>
                </div>
                <div className="flex gap-0.5">
                  {[...Array(r.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
