"use client";

import {
  UtensilsCrossed,
  HeartPulse,
  CalendarDays,
  BellRing,
  Dumbbell,
  Users,
} from "lucide-react";

const categories = [
  { id: "weight", label: "Weight Management", icon: UtensilsCrossed },
  { id: "disease", label: "Disease-Specific\nNutrition", icon: HeartPulse },
  { id: "meals", label: "Daily Meal Plans", icon: CalendarDays },
  { id: "reminders", label: "Reminders & Tracking", icon: BellRing },
  { id: "fitness", label: "Fitness & Wellness", icon: Dumbbell },
  { id: "family", label: "Family Nutrition", icon: Users },
];

export default function CategoriesBar({ onSelectCategory }) {
  return (
    <section className="bg-white py-3 sm:py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div
          className="rounded-2xl sm:rounded-3xl py-3 sm:py-3.5 px-3 sm:px-6 shadow-xs"
          style={{
            background: "#f2f9ed",
            border: "1px solid #dfeed8",
          }}
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 divide-y sm:divide-y-0 lg:divide-x divide-[#d6ecd0]">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <button
                  key={cat.id}
                  onClick={() => onSelectCategory?.(cat.id)}
                  className="group flex flex-col items-center justify-center gap-2 py-2.5 px-2 transition-all duration-200 cursor-pointer hover:bg-white/60 rounded-xl"
                >
                  {/* Clean green line icon */}
                  <div className="h-9 flex items-center justify-center transition-transform duration-200 group-hover:scale-110">
                    <Icon
                      strokeWidth={1.8}
                      className="w-7 h-7 text-[#10793f]"
                    />
                  </div>

                  {/* Label */}
                  <span
                    className="text-[12px] sm:text-[13px] font-bold text-center leading-tight whitespace-pre-line text-gray-900 group-hover:text-[#10793f] transition-colors"
                  >
                    {cat.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
