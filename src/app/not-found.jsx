"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Home,
  Apple,
  HeartPulse,
  Dumbbell,
  Baby,
  Users,
  Leaf,
  ArrowRight,
} from "lucide-react";

export default function NotFound() {
  return (
    <div
      className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-white text-gray-900 select-none"
      style={{
        background:
          "radial-gradient(ellipse at 50% 25%, #f4faf6 0%, #fbfdfc 55%, #ffffff 90%)",
        fontFamily: "var(--font-sans)",
      }}
    >
      {/* ── TOP-LEFT DECORATIVE BRANCH ── */}
      <div
        className="absolute -top-4 -left-4 sm:-top-2 sm:-left-2 pointer-events-none z-10 w-[170px] h-[220px] sm:w-[240px] sm:h-[300px] md:w-[300px] md:h-[360px]"
      >
        <Image
          src="/image/Dewy Green Leafy Branch.png"
          alt="Green Leaves"
          fill
          priority
          unoptimized
          className="object-contain object-left-top drop-shadow-xs opacity-95"
        />
      </div>

      {/* ── RIGHT DECORATIVE BRANCH ── */}
      <div
        className="absolute top-[28%] -right-6 sm:-right-4 pointer-events-none z-10 w-[150px] h-[240px] sm:w-[210px] sm:h-[310px] md:w-[260px] md:h-[380px]"
      >
        <Image
          src="/image/Glossy Green Leaf Branch.png"
          alt="Glossy Leaves"
          fill
          priority
          unoptimized
          className="object-contain object-right drop-shadow-xs opacity-95"
        />
      </div>

      {/* ── TOP BAR LOGO ── */}
      <header className="relative z-20 max-w-7xl mx-auto w-full px-6 pt-5 sm:pt-6 flex items-center justify-between">
        <Link href="/" className="inline-block transition-transform hover:scale-105">
          <div className="relative h-[38px] w-[150px] sm:h-[46px] sm:w-[185px]">
            <Image
              src="/image/DietNexa Logo.png"
              alt="DietNexa Logo"
              fill
              priority
              unoptimized
              className="object-contain object-left"
            />
          </div>
        </Link>
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-emerald-800 hover:text-emerald-950 transition-colors bg-emerald-50/80 px-3 py-1.5 rounded-full border border-emerald-200/60"
        >
          <span>Back to DietNexa</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </header>

      {/* ── MAIN 404 CONTENT ── */}
      <main className="relative z-20 flex-1 flex flex-col items-center justify-center px-4 py-4 sm:py-6 max-w-5xl mx-auto w-full text-center">

        {/* Soft organic green backdrop glow behind 404 */}
        <div
          className="absolute pointer-events-none -z-10 rounded-full blur-2xl opacity-70"
          style={{
            width: "min(480px, 85vw)",
            height: "min(300px, 55vw)",
            background:
              "radial-gradient(ellipse at 50% 50%, #cbf2d8 0%, #e5f8ee 50%, transparent 75%)",
          }}
        />

        {/* ── 4 🍽️ 4 ARTWORK COMPOSITION ── */}
        <div className="relative flex items-center justify-center mb-4 sm:mb-6 select-none pt-4">

          {/* Floating tiny leaf top left */}
          <div className="absolute top-2 left-8 sm:left-14 pointer-events-none animate-float-card opacity-90">
            <svg
              className="w-5 h-5 sm:w-7 sm:h-7 text-[#58b73a] drop-shadow-sm rotate-[-25deg]"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 008 20C19 20 22 3 22 3c-1 2-8 2-11 5" />
            </svg>
          </div>

          {/* Floating tiny leaf top right */}
          <div
            className="absolute top-4 right-10 sm:right-16 pointer-events-none opacity-90"
            style={{ animation: "float-card 4s ease-in-out infinite 1s" }}
          >
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6 text-[#72c738] drop-shadow-sm rotate-[35deg]"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 008 20C19 20 22 3 22 3c-1 2-8 2-11 5" />
            </svg>
          </div>

          {/* ── GREEN FORK (Left) ── */}
          <div className="relative -mr-3 sm:-mr-5 md:-mr-7 z-10 transform -rotate-12 hover:rotate-[-6deg] transition-transform duration-300">
            <svg
              className="w-9 h-28 sm:w-14 sm:h-44 md:w-18 md:h-56 text-[#148344] drop-shadow-md"
              viewBox="0 0 40 160"
              fill="currentColor"
            >
              <rect x="6" y="4" width="4" height="42" rx="2" />
              <rect x="14" y="2" width="4" height="44" rx="2" />
              <rect x="22" y="2" width="4" height="44" rx="2" />
              <rect x="30" y="4" width="4" height="42" rx="2" />
              <path d="M6 34 C6 52 34 52 34 34 L34 46 C34 60 25 66 23 70 L23 150 C23 154 17 154 17 150 L17 70 C15 66 6 60 6 46 Z" />
            </svg>
          </div>

          {/* ── LEFT NUMBER "4" ── */}
          <span
            className="font-black text-[#0b5429] tracking-tighter leading-none select-none z-10"
            style={{
              fontSize: "clamp(85px, 15vw, 180px)",
              fontFamily: "var(--font-sans)",
              filter: "drop-shadow(0 14px 22px rgba(11,84,41,0.30))",
              textShadow: "0 2px 0 #073b1c, 0 4px 0 #063118, 0 6px 0 #042211",
            }}
          >
            4
          </span>

          {/* ── CENTER PLATE "0" ── */}
          <div className="relative mx-1 sm:mx-2.5 md:mx-3 z-20 flex flex-col items-center justify-center">

            {/* Radiance sunburst rays above plate */}
            <div className="absolute -top-6 sm:-top-8 flex items-center justify-center gap-1.5 sm:gap-2">
              <span className="w-1 sm:w-1.5 h-3 sm:h-4.5 bg-[#6ac836] rounded-full rotate-[-28deg] shadow-xs" />
              <span className="w-1 sm:w-1.5 h-3.5 sm:h-5.5 bg-[#6ac836] rounded-full shadow-xs" />
              <span className="w-1 sm:w-1.5 h-3 sm:h-4.5 bg-[#6ac836] rounded-full rotate-[28deg] shadow-xs" />
            </div>

            {/* Ceramic Plate */}
            <div
              className="relative rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-105"
              style={{
                width: "clamp(90px, 16vw, 175px)",
                height: "clamp(90px, 16vw, 175px)",
                background:
                  "radial-gradient(circle at 38% 34%, #ffffff 0%, #f6faf7 45%, #e1ebe4 90%, #d2ded5 100%)",
                boxShadow:
                  "0 18px 40px -4px rgba(12,89,44,0.22), 0 8px 16px -2px rgba(0,0,0,0.08), inset 0 3px 6px rgba(255,255,255,1), inset 0 -5px 12px rgba(0,0,0,0.06)",
                border: "3px solid #f8fbf9",
              }}
            >
              {/* Inner recessed plate circle */}
              <div
                className="rounded-full flex items-center justify-center relative"
                style={{
                  width: "74%",
                  height: "74%",
                  background:
                    "radial-gradient(circle at 40% 35%, #ffffff 0%, #eff6f1 60%, #e2ece5 100%)",
                  boxShadow:
                    "inset 0 3px 8px rgba(0,0,0,0.08), inset 0 -2px 4px rgba(255,255,255,0.9), 0 1px 3px rgba(0,0,0,0.04)",
                  border: "1.5px solid rgba(0,0,0,0.03)",
                }}
              >
                {/* Green Leaf in Center */}
                <svg
                  className="w-10 h-10 sm:w-14 sm:h-14 md:w-18 md:h-18 transform -rotate-12 transition-transform duration-300 hover:scale-110"
                  viewBox="0 0 64 64"
                  fill="none"
                  style={{
                    filter: "drop-shadow(0 6px 12px rgba(16,121,63,0.35))",
                  }}
                >
                  <path
                    d="M12 52 C12 52 14 36 28 22 C42 8 54 8 54 8 C54 8 54 20 40 34 C26 48 12 52 12 52 Z"
                    fill="url(#leafGrad2)"
                  />
                  <path
                    d="M12 52 C22 42 34 30 54 8"
                    stroke="#ffffff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeOpacity="0.85"
                  />
                  <path
                    d="M26 38 C30 35 34 36 34 36"
                    stroke="#ffffff"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeOpacity="0.7"
                  />
                  <path
                    d="M34 30 C38 27 42 28 42 28"
                    stroke="#ffffff"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeOpacity="0.7"
                  />
                  <defs>
                    <linearGradient id="leafGrad2" x1="12" y1="52" x2="54" y2="8" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#0d6534" />
                      <stop offset="0.5" stopColor="#1bb45b" />
                      <stop offset="1" stopColor="#5cd838" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>

          {/* ── RIGHT NUMBER "4" ── */}
          <span
            className="font-black text-[#0b5429] tracking-tighter leading-none select-none z-10"
            style={{
              fontSize: "clamp(85px, 15vw, 180px)",
              fontFamily: "var(--font-sans)",
              filter: "drop-shadow(0 14px 22px rgba(11,84,41,0.30))",
              textShadow: "0 2px 0 #073b1c, 0 4px 0 #063118, 0 6px 0 #042211",
            }}
          >
            4
          </span>

          {/* ── GREEN KNIFE (Right) ── */}
          <div className="relative -ml-3 sm:-ml-5 md:-ml-7 z-10 transform rotate-12 hover:rotate-[6deg] transition-transform duration-300">
            <svg
              className="w-9 h-28 sm:w-14 sm:h-44 md:w-18 md:h-56 text-[#148344] drop-shadow-md"
              viewBox="0 0 40 160"
              fill="currentColor"
            >
              <path d="M16 4 C25 15 28 45 28 66 L23 70 L23 150 C23 154 17 154 17 150 L17 70 L16 68 Z" />
            </svg>
          </div>

          {/* ── FRESH PRODUCE AT BASE OF 404 ── */}
          <div
            className="absolute -bottom-7 sm:-bottom-10 md:-bottom-12 left-1/2 -translate-x-1/2 z-30 pointer-events-none"
            style={{
              width: "clamp(190px, 32vw, 340px)",
              height: "clamp(80px, 13vw, 140px)",
            }}
          >
            <div className="relative w-full h-full">
              <Image
                src="/image/hero sectionFresh Vegetable Medley Cutout.png"
                alt="Fresh produce"
                fill
                priority
                unoptimized
                className="object-contain object-bottom drop-shadow-[0_10px_20px_rgba(0,0,0,0.22)]"
              />
            </div>
          </div>

        </div>

        {/* Spacing for overlapping produce */}
        <div className="h-4 sm:h-6" />

        {/* ── HEADLINE ── */}
        <h1
          className="font-extrabold text-[#093e20] tracking-tight mb-2"
          style={{
            fontSize: "clamp(24px, 3.8vw, 40px)",
            lineHeight: 1.15,
            fontFamily: "var(--font-sans)",
          }}
        >
          Oops! Page Not Found
        </h1>

        {/* ── SUBTITLE ── */}
        <p
          className="text-gray-600 font-medium mb-6 max-w-md mx-auto"
          style={{
            fontSize: "clamp(13.5px, 1.2vw, 16px)",
            fontFamily: "var(--font-sans)",
          }}
        >
          The page you’re looking for doesn’t exist or has been moved.
        </p>

        {/* ── ACTION BUTTONS ── */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-6 sm:mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 sm:px-7 py-2.5 sm:py-3 rounded-full font-bold text-white text-[13.5px] sm:text-[14.5px] transition-all duration-200 hover:opacity-95 hover:shadow-xl active:scale-95 cursor-pointer"
            style={{
              background: "#10793f",
              boxShadow: "0 6px 20px -3px rgba(16,121,63,0.42)",
            }}
          >
            <Home className="w-4 h-4" />
            <span>Go to Home</span>
          </Link>

          <Link
            href="/#services"
            className="inline-flex items-center gap-2 px-6 sm:px-7 py-2.5 sm:py-3 rounded-full font-bold text-gray-800 text-[13.5px] sm:text-[14.5px] border transition-all duration-200 hover:bg-white hover:border-[#10793f]/40 hover:text-[#10793f] hover:shadow-md active:scale-95 cursor-pointer"
            style={{
              background: "rgba(255,255,255,0.92)",
              borderColor: "#d1d5db",
            }}
          >
            Browse Services
          </Link>
        </div>

        {/* ── 6 SERVICE CATEGORIES ROW (Matching Reference Image) ── */}
        <div className="w-full max-w-4xl mx-auto pt-2 pb-2">
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 sm:gap-3 py-2 px-2 rounded-2xl bg-white/60 backdrop-blur-xs border border-emerald-900/5 shadow-xs">
            {[
              {
                label: "Weight Loss",
                href: "/#services",
                icon: <Apple className="w-5 h-5 text-[#10793f]" strokeWidth={2} />,
              },
              {
                label: "Diabetes Care",
                href: "/#services",
                icon: <HeartPulse className="w-5 h-5 text-[#10793f]" strokeWidth={2} />,
              },
              {
                label: "Sports Nutrition",
                href: "/#services",
                icon: <Dumbbell className="w-5 h-5 text-[#10793f]" strokeWidth={2} />,
              },
              {
                label: "Pregnancy Nutrition",
                href: "/#services",
                icon: <Baby className="w-5 h-5 text-[#10793f]" strokeWidth={2} />,
              },
              {
                label: "Child Nutrition",
                href: "/#services",
                icon: <Users className="w-5 h-5 text-[#10793f]" strokeWidth={2} />,
              },
              {
                label: "General Wellness",
                href: "/#services",
                icon: <Leaf className="w-5 h-5 text-[#10793f]" strokeWidth={2} />,
              },
            ].map((cat, idx) => (
              <Link
                key={cat.label}
                href={cat.href}
                className={`group flex flex-col items-center justify-center p-2.5 rounded-xl hover:bg-emerald-50/70 transition-all duration-200 hover:-translate-y-0.5 ${
                  idx < 5 ? "sm:border-r sm:border-gray-200/60" : ""
                }`}
              >
                <div className="w-9 h-9 rounded-full flex items-center justify-center text-[#10793f] group-hover:scale-110 transition-transform mb-1.5">
                  {cat.icon}
                </div>
                <span className="text-[11px] sm:text-[12px] font-semibold text-gray-800 text-center leading-tight group-hover:text-[#10793f] transition-colors">
                  {cat.label}
                </span>
              </Link>
            ))}
          </div>
        </div>

      </main>

      {/* ── GENTLE WAVY BACKGROUND AT BOTTOM ── */}
      <div className="relative w-full h-[60px] sm:h-[80px] pointer-events-none overflow-hidden">
        <svg
          className="w-full h-full object-cover opacity-75"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          fill="none"
        >
          <path
            d="M0,40 C320,90 580,10 880,50 C1140,85 1320,25 1440,45 L1440,120 L0,120 Z"
            fill="#edf8f1"
          />
          <path
            d="M0,65 C360,105 640,35 960,75 C1220,105 1360,55 1440,70 L1440,120 L0,120 Z"
            fill="#e2f5e8"
          />
        </svg>
      </div>

    </div>
  );
}
