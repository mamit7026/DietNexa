"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ConsultationModal from "@/components/ConsultationModal";
import { ArrowRight, ChevronRight } from "lucide-react";

export default function AboutPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState("diet-plan");

  const handleOpenModal = (type = "diet-plan") => {
    setModalType(type);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col font-sans selection:bg-[#dcf2e3] selection:text-[#0b4728] relative overflow-x-hidden">
      {/* Sticky Navigation Bar */}
      <Navbar onOpenModal={handleOpenModal} />

      <main className="flex-1 relative">
        {/* ============================================================== */}
        {/* 1. HERO SECTION: "Nutrition That Puts You First"               */}
        {/* ============================================================== */}
        <section className="relative overflow-hidden pt-6 pb-0 lg:pt-8 lg:pb-0">
          {/* Greenhouse Bokeh Background — Spreads edge-to-edge from left to right */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/image/Serene Greenhouse Bokeh Background.png"
              alt="Clinic Greenhouse Setting"
              fill
              priority
              unoptimized
              className="object-cover object-center"
            />
            {/* Soft gradient wash on left for maximum text contrast and readability */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(90deg, rgba(243, 250, 245, 0.97) 0%, rgba(247, 252, 249, 0.91) 40%, rgba(240, 250, 243, 0.45) 68%, rgba(240, 250, 243, 0.10) 100%)",
              }}
            />
          </div>

          {/* Top-left decorative leaf branch */}
          <div
            className="absolute -top-4 -left-4 pointer-events-none z-10 hidden sm:block w-[180px] h-[220px] opacity-70"
          >
            <Image
              src="/image/Dewy Green Leafy Branch.png"
              alt=""
              fill
              priority
              unoptimized
              className="object-contain object-left-top"
            />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
            <div className="flex flex-col lg:flex-row items-center justify-between min-h-[440px] lg:min-h-[460px] gap-8 lg:gap-4">
              {/* Left Column: Heading, Subtitle & CTA */}
              <div className="flex-1 flex flex-col justify-center py-6 lg:py-8 text-left max-w-full lg:max-w-[540px] z-10">
                {/* Pill Badge */}
                <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-gray-300 bg-white/95 shadow-2xs mb-5 sm:mb-6 self-start">
                  <span className="text-xs sm:text-[13px] font-semibold text-gray-800 tracking-tight">
                    About DietNexa
                  </span>
                </div>

                {/* Main Heading */}
                <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold tracking-tight text-[#0e3b24] leading-[1.12] mb-5">
                  Nutrition That <br />
                  Puts You First
                </h1>

                {/* Subtitle */}
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-lg mb-7 sm:mb-8 font-normal">
                  Expert dietitians, personalized nutrition, and sustainable healthy
                  habits to help you feel healthier, stronger, and more confident
                  every day.
                </p>

                {/* CTA Button */}
                <button
                  onClick={() => handleOpenModal("get-started")}
                  className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3 rounded-full text-white font-semibold text-sm sm:text-base bg-[#10793f] hover:bg-[#0c6132] transition-all shadow-md hover:shadow-lg active:scale-95 cursor-pointer self-start"
                  style={{
                    boxShadow: "0 4px 14px rgba(16,121,63,0.28)",
                  }}
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </button>
              </div>

              {/* Right Column: Doctor + Fresh Produce (Desktop lg+) */}
              <div
                className="relative flex-shrink-0 hidden lg:block self-stretch"
                style={{
                  width: "min(600px, 50%)",
                  minHeight: "460px",
                }}
              >
                {/* Doctor Image Cutout */}
                <div
                  className="absolute z-10 pointer-events-none"
                  style={{
                    bottom: "0px",
                    left: "46%",
                    transform: "translateX(-50%)",
                    width: "82%",
                    height: "98%",
                  }}
                >
                  <div className="relative w-full h-full">
                    <Image
                      src="/image/hero section Smiling Doctor in Green Scrubs.png"
                      alt="DietNexa Doctor"
                      fill
                      priority
                      unoptimized
                      className="object-contain object-bottom drop-shadow-sm"
                    />
                  </div>
                </div>

                {/* Fresh Vegetable Medley Cutout on the right */}
                <div
                  className="absolute z-20 pointer-events-none"
                  style={{
                    bottom: "0px",
                    right: "-10px",
                    width: "58%",
                    height: "52%",
                  }}
                >
                  <div className="relative w-full h-full">
                    <Image
                      src="/image/hero sectionFresh Vegetable Medley Cutout.png"
                      alt="Fresh Produce"
                      fill
                      priority
                      unoptimized
                      className="object-contain object-bottom-right drop-shadow-lg"
                    />
                  </div>
                </div>
              </div>

              {/* Mobile Hero Visual (< lg) */}
              <div
                className="relative block lg:hidden w-full mt-4"
                style={{ height: "300px" }}
              >
                {/* Doctor */}
                <div
                  className="absolute z-10 pointer-events-none"
                  style={{
                    bottom: "0px",
                    left: "45%",
                    transform: "translateX(-50%)",
                    width: "84%",
                    height: "98%",
                  }}
                >
                  <div className="relative w-full h-full">
                    <Image
                      src="/image/hero section Smiling Doctor in Green Scrubs.png"
                      alt="DietNexa Doctor"
                      fill
                      priority
                      unoptimized
                      className="object-contain object-bottom drop-shadow-sm"
                    />
                  </div>
                </div>

                {/* Fresh Vegetable Medley */}
                <div
                  className="absolute z-20 pointer-events-none"
                  style={{
                    bottom: "0px",
                    right: "0px",
                    width: "60%",
                    height: "52%",
                  }}
                >
                  <div className="relative w-full h-full">
                    <Image
                      src="/image/hero sectionFresh Vegetable Medley Cutout.png"
                      alt="Fresh Produce"
                      fill
                      priority
                      unoptimized
                      className="object-contain object-bottom-right drop-shadow-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* 2. OUR STORY SECTION                                           */}
        {/* ============================================================== */}
        <section className="py-6 sm:py-12 relative overflow-hidden">
          {/* Ambient Right Decorative Leaves */}
          <div
            className="absolute top-1/4 -right-8 w-28 sm:w-40 h-40 pointer-events-none select-none z-0 opacity-75 hidden md:block"
            style={{ transform: "rotate(35deg)" }}
          >
            <Image
              src="/image/Glossy Green Leaf Branch.png"
              alt=""
              width={1024}
              height={1536}
              className="w-full h-auto object-contain"
              unoptimized
            />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
            {/* Top row: Story Image + Story Content */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-8 sm:mb-10">
              {/* Story Consultation Photo (Left) */}
              <div className="lg:col-span-6">
                <div className="w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-md border border-emerald-100/70">
                  <Image
                    src="/image/about Friendly Nutrition Consultation.png"
                    alt="DietNexa friendly personalized nutrition consultation"
                    width={1774}
                    height={887}
                    unoptimized
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>

              {/* Story Narrative (Right) */}
              <div className="lg:col-span-6 flex flex-col justify-center">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0e3b24] tracking-tight mb-4">
                  Our Story
                </h2>
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-normal">
                  DietNexa was founded with a simple mission — to make expert
                  nutrition guidance accessible, practical, and personalized for
                  everyone. We believe that the right nutrition can transform lives,
                  and professional support should be easy to reach, trustworthy, and
                  tailored to individual needs.
                </p>
              </div>
            </div>

            {/* Bottom row: Our Mission & Our Vision Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
              {/* Card 1: Our Mission */}
              <div className="bg-[#edf7f1] border border-[#cfe8d6] rounded-2xl sm:rounded-3xl p-5 sm:p-7 flex items-start gap-4 shadow-2xs">
                {/* Target Bullseye Icon Badge */}
                <div className="w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-white flex items-center justify-center shrink-0 border border-emerald-200/80 shadow-2xs">
                  <svg
                    viewBox="0 0 44 44"
                    fill="none"
                    className="w-7 h-7 sm:w-8 sm:h-8 text-[#10793f]"
                  >
                    <circle
                      cx="22"
                      cy="22"
                      r="16"
                      stroke="#10793f"
                      strokeWidth="2.4"
                    />
                    <circle
                      cx="22"
                      cy="22"
                      r="9.5"
                      stroke="#10793f"
                      strokeWidth="2.4"
                    />
                    <circle cx="22" cy="22" r="3.2" fill="#10793f" />
                    <path
                      d="M34 10L24.5 19.5"
                      stroke="#10793f"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                    />
                    <path
                      d="M34 10H28.5M34 10V15.5"
                      stroke="#10793f"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>

                <div>
                  <h3 className="text-base sm:text-lg font-bold text-[#0e3b24] mb-1">
                    Our Mission
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-normal">
                    To empower people to lead healthier, happier lives through
                    expert dietitian consultations, personalized nutrition plans,
                    and sustainable habits.
                  </p>
                </div>
              </div>

              {/* Card 2: Our Vision */}
              <div className="bg-[#edf7f1] border border-[#cfe8d6] rounded-2xl sm:rounded-3xl p-5 sm:p-7 flex items-start gap-4 shadow-2xs">
                {/* Eye Icon Badge */}
                <div className="w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-white flex items-center justify-center shrink-0 border border-emerald-200/80 shadow-2xs">
                  <svg
                    viewBox="0 0 44 44"
                    fill="none"
                    className="w-7 h-7 sm:w-8 sm:h-8 text-[#10793f]"
                  >
                    <path
                      d="M7 22C10.5 14 16 11 22 11C28 11 33.5 14 37 22C33.5 30 28 33 22 33C16 33 10.5 30 7 22Z"
                      stroke="#10793f"
                      strokeWidth="2.4"
                      strokeLinejoin="round"
                    />
                    <circle
                      cx="22"
                      cy="22"
                      r="5.5"
                      stroke="#10793f"
                      strokeWidth="2.4"
                    />
                    <circle cx="22" cy="22" r="2.5" fill="#10793f" />
                  </svg>
                </div>

                <div>
                  <h3 className="text-base sm:text-lg font-bold text-[#0e3b24] mb-1">
                    Our Vision
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-normal">
                    To be a globally trusted nutrition and wellness partner,
                    helping individuals and families achieve long-term health and
                    better quality of life.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* 3. WHAT MAKES DIETNEXA DIFFERENT                               */}
        {/* ============================================================== */}
        <section className="py-10 sm:py-16 relative overflow-hidden">
          {/* Ambient Left Decorative Leaf */}
          <div
            className="absolute top-1/2 -left-8 w-28 sm:w-40 h-40 pointer-events-none select-none z-0 opacity-75 hidden md:block"
            style={{ transform: "rotate(-35deg) translateY(-50%)" }}
          >
            <Image
              src="/image/Glossy Green Leaf Branch.png"
              alt=""
              width={1024}
              height={1536}
              className="w-full h-auto object-contain"
              unoptimized
            />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
            {/* Section Header */}
            <div className="text-center mb-10 sm:mb-14">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0e3b24] tracking-tight mb-2.5">
                What Makes DietNexa Different
              </h2>

              {/* Subtitle with accent line flourishes */}
              <div className="flex items-center justify-center gap-3 sm:gap-4 max-w-2xl mx-auto">
                <span className="h-[1.5px] w-8 sm:w-16 bg-[#52c385]" />
                <p className="text-xs sm:text-sm text-gray-700 font-medium tracking-tight">
                  A people-first, expert-led approach to your nutrition and wellness journey.
                </p>
                <span className="h-[1.5px] w-8 sm:w-16 bg-[#52c385]" />
              </div>
            </div>

            {/* 4 Feature Columns with subtle vertical dividers on desktop */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-gray-200">
              {/* Feature 1: Personalized Care */}
              <div className="flex flex-col items-center text-center px-4 lg:px-6">
                <div className="w-13 h-13 sm:w-15 sm:h-15 rounded-full bg-[#eef8f2] border border-[#cfe8d6] flex items-center justify-center mb-3.5 text-[#10793f]">
                  <svg
                    viewBox="0 0 36 36"
                    fill="none"
                    className="w-7 h-7 sm:w-8 sm:h-8"
                  >
                    <circle
                      cx="18"
                      cy="12"
                      r="4.5"
                      stroke="#10793f"
                      strokeWidth="2.2"
                    />
                    <path
                      d="M10 25C10 21.5 13.5 19 18 19C22.5 19 26 21.5 26 25"
                      stroke="#10793f"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M18 28.5L16.2 26.8C14.5 25.2 13.5 24.3 13.5 23.1C13.5 22.1 14.3 21.3 15.3 21.3C15.9 21.3 16.5 21.6 16.8 22L18 23.2L19.2 22C19.5 21.6 20.1 21.3 20.7 21.3C21.7 21.3 22.5 22.1 22.5 23.1C22.5 24.3 21.5 25.2 19.8 26.8L18 28.5Z"
                      fill="#10793f"
                    />
                  </svg>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-[#0e3b24] mb-1.5">
                  Personalized Care
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed max-w-[250px]">
                  Nutrition guidance tailored to your health goals, lifestyle,
                  and preferences.
                </p>
              </div>

              {/* Feature 2: Qualified Dietitians */}
              <div className="flex flex-col items-center text-center px-4 lg:px-6">
                <div className="w-13 h-13 sm:w-15 sm:h-15 rounded-full bg-[#eef8f2] border border-[#cfe8d6] flex items-center justify-center mb-3.5 text-[#10793f]">
                  <svg
                    viewBox="0 0 36 36"
                    fill="none"
                    className="w-7 h-7 sm:w-8 sm:h-8"
                  >
                    <circle
                      cx="18"
                      cy="11"
                      r="4.2"
                      stroke="#10793f"
                      strokeWidth="2.2"
                    />
                    <path
                      d="M9 25.5C9 21.8 13 19 18 19C23 19 27 21.8 27 25.5"
                      stroke="#10793f"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M14 20V23.5C14 25.5 15.8 27 18 27C20.2 27 22 25.5 22 23.5V20"
                      stroke="#10793f"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <circle cx="18" cy="29" r="1.5" fill="#10793f" />
                  </svg>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-[#0e3b24] mb-1.5">
                  Qualified Dietitians
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed max-w-[250px]">
                  Certified and experienced dietitians who provide trusted,
                  professional support.
                </p>
              </div>

              {/* Feature 3: Practical Meal Plans */}
              <div className="flex flex-col items-center text-center px-4 lg:px-6">
                <div className="w-13 h-13 sm:w-15 sm:h-15 rounded-full bg-[#eef8f2] border border-[#cfe8d6] flex items-center justify-center mb-3.5 text-[#10793f]">
                  <svg
                    viewBox="0 0 36 36"
                    fill="none"
                    className="w-7 h-7 sm:w-8 sm:h-8"
                  >
                    <path
                      d="M8 18H28C28 24.5 23.5 27 18 27C12.5 27 8 24.5 8 18Z"
                      stroke="#10793f"
                      strokeWidth="2.2"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M18 18V10M18 10C18 10 14 9.5 13 13C13 15 16 16.5 18 15M18 10C18 10 22 9.5 23 13C23 15 20 16.5 18 15"
                      stroke="#10793f"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle cx="15" cy="18" r="1.2" fill="#10793f" />
                    <circle cx="21" cy="18" r="1.2" fill="#10793f" />
                  </svg>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-[#0e3b24] mb-1.5">
                  Practical Meal Plans
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed max-w-[250px]">
                  Balanced, delicious, and easy-to-follow plans that fit your daily
                  routine.
                </p>
              </div>

              {/* Feature 4: Ongoing Support */}
              <div className="flex flex-col items-center text-center px-4 lg:px-6">
                <div className="w-13 h-13 sm:w-15 sm:h-15 rounded-full bg-[#eef8f2] border border-[#cfe8d6] flex items-center justify-center mb-3.5 text-[#10793f]">
                  <svg
                    viewBox="0 0 36 36"
                    fill="none"
                    className="w-7 h-7 sm:w-8 sm:h-8"
                  >
                    <rect
                      x="8"
                      y="10"
                      width="20"
                      height="18"
                      rx="3"
                      stroke="#10793f"
                      strokeWidth="2.2"
                    />
                    <path
                      d="M13 7V11M23 7V11"
                      stroke="#10793f"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                    />
                    <path d="M8 15H28" stroke="#10793f" strokeWidth="1.8" />
                    <path
                      d="M13.5 21.5L16.5 24.5L22.5 18.5"
                      stroke="#10793f"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-[#0e3b24] mb-1.5">
                  Ongoing Support
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed max-w-[250px]">
                  Regular follow-ups, progress tracking, and guidance to keep you
                  motivated.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* 4. OUR APPROACH SECTION                                        */}
        {/* ============================================================== */}
        <section className="py-8 sm:py-14 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            {/* Section Header */}
            <div className="text-center mb-8 sm:mb-10">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0e3b24] tracking-tight mb-2.5">
                Our Approach
              </h2>

              <div className="flex items-center justify-center gap-3 sm:gap-4 max-w-2xl mx-auto">
                <span className="h-[1.5px] w-8 sm:w-16 bg-[#52c385]" />
                <p className="text-xs sm:text-sm text-gray-700 font-medium tracking-tight">
                  A simple, effective, and personalized process designed for real, lasting results.
                </p>
                <span className="h-[1.5px] w-8 sm:w-16 bg-[#52c385]" />
              </div>
            </div>

            {/* Approach 3-Step Container Card */}
            <div className="bg-[#edf7f1] border border-[#cfe8d6] rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-9 shadow-2xs">
              <div className="grid grid-cols-1 md:grid-cols-11 items-center gap-6 md:gap-2">
                {/* Step 1 */}
                <div className="md:col-span-3 flex items-start gap-3.5">
                  {/* Step Number Badge */}
                  <div className="w-7 h-7 rounded-full bg-[#10793f] text-white font-bold text-xs flex items-center justify-center shrink-0 shadow-2xs mt-0.5">
                    1
                  </div>

                  {/* Icon */}
                  <div className="shrink-0 text-[#10793f] mt-0.5">
                    <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7 sm:w-8 sm:h-8">
                      <rect
                        x="7"
                        y="6"
                        width="18"
                        height="22"
                        rx="2.5"
                        stroke="#10793f"
                        strokeWidth="2.2"
                      />
                      <path
                        d="M12 4H20V7H12V4Z"
                        stroke="#10793f"
                        strokeWidth="2"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M11 13H21M11 17H21M11 21H17"
                        stroke="#10793f"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>

                  {/* Copy */}
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-[#0e3b24] mb-0.5">
                      Understand Your Needs
                    </h3>
                    <p className="text-xs text-gray-700 leading-relaxed font-normal">
                      Learn about your health, lifestyle, preferences, and goals.
                    </p>
                  </div>
                </div>

                {/* Chevron Divider 1 */}
                <div className="hidden md:flex md:col-span-1 justify-center text-gray-400">
                  <ChevronRight className="w-5 h-5 text-gray-600 stroke-[2.2]" />
                </div>

                {/* Step 2 */}
                <div className="md:col-span-3 flex items-start gap-3.5">
                  {/* Step Number Badge */}
                  <div className="w-7 h-7 rounded-full bg-[#10793f] text-white font-bold text-xs flex items-center justify-center shrink-0 shadow-2xs mt-0.5">
                    2
                  </div>

                  {/* Icon */}
                  <div className="shrink-0 text-[#10793f] mt-0.5">
                    <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7 sm:w-8 sm:h-8">
                      <path
                        d="M7 16H25C25 22 21 24.5 16 24.5C11 24.5 7 22 7 16Z"
                        stroke="#10793f"
                        strokeWidth="2.2"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M16 16V9M16 9C16 9 12.5 8.5 11.5 11.5C11.5 13.5 14 15 16 13.5M16 9C16 9 19.5 8.5 20.5 11.5C20.5 13.5 18 15 16 13.5"
                        stroke="#10793f"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  {/* Copy */}
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-[#0e3b24] mb-0.5">
                      Build Your Plan
                    </h3>
                    <p className="text-xs text-gray-700 leading-relaxed font-normal">
                      Get a personalized nutrition plan designed by our dietitians.
                    </p>
                  </div>
                </div>

                {/* Chevron Divider 2 */}
                <div className="hidden md:flex md:col-span-1 justify-center text-gray-400">
                  <ChevronRight className="w-5 h-5 text-gray-600 stroke-[2.2]" />
                </div>

                {/* Step 3 */}
                <div className="md:col-span-3 flex items-start gap-3.5">
                  {/* Step Number Badge */}
                  <div className="w-7 h-7 rounded-full bg-[#10793f] text-white font-bold text-xs flex items-center justify-center shrink-0 shadow-2xs mt-0.5">
                    3
                  </div>

                  {/* Icon */}
                  <div className="shrink-0 text-[#10793f] mt-0.5">
                    <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7 sm:w-8 sm:h-8">
                      <rect
                        x="7"
                        y="18"
                        width="4"
                        height="9"
                        rx="1"
                        stroke="#10793f"
                        strokeWidth="2"
                      />
                      <rect
                        x="14"
                        y="13"
                        width="4"
                        height="14"
                        rx="1"
                        stroke="#10793f"
                        strokeWidth="2"
                      />
                      <rect
                        x="21"
                        y="8"
                        width="4"
                        height="19"
                        rx="1"
                        stroke="#10793f"
                        strokeWidth="2"
                      />
                      <path
                        d="M8 12L15 6L24 10"
                        stroke="#10793f"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  {/* Copy */}
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-[#0e3b24] mb-0.5">
                      Support Your Progress
                    </h3>
                    <p className="text-xs text-gray-700 leading-relaxed font-normal">
                      Stay on track with regular follow-ups, practical tips, and
                      ongoing guidance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* 5. OUR VALUES SECTION                                          */}
        {/* ============================================================== */}
        <section className="py-8 sm:py-14 relative overflow-hidden">
          {/* Ambient Right Decorative Leaves */}
          <div
            className="absolute top-1/2 -right-8 w-28 sm:w-44 h-44 pointer-events-none select-none z-0 opacity-75 hidden md:block"
            style={{ transform: "rotate(35deg) translateY(-50%)" }}
          >
            <Image
              src="/image/Glossy Green Leaf Branch.png"
              alt=""
              width={1024}
              height={1536}
              className="w-full h-auto object-contain"
              unoptimized
            />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-end">
              {/* Doctor Team Cutout (Left) */}
              <div className="lg:col-span-5 flex justify-center lg:justify-start">
                <div className="w-full max-w-[460px]">
                  <Image
                    src="/image/Smiling Medical Team Cutout.png"
                    alt="DietNexa certified medical and dietitian team"
                    width={1621}
                    height={970}
                    unoptimized
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>

              {/* Our Values Info (Right) */}
              <div className="lg:col-span-7 flex flex-col justify-center pb-2">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0e3b24] tracking-tight mb-1.5">
                  Our Values
                </h2>
                <p className="text-xs sm:text-sm text-gray-700 font-medium mb-7 sm:mb-8">
                  The core principles that guide everything we do at DietNexa.
                </p>

                {/* 3 Values Horizontally aligned */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-6">
                  {/* Value 1: Empathy */}
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full bg-[#eef8f2] border border-[#cfe8d6] flex items-center justify-center mb-3 text-[#10793f]">
                      <svg
                        viewBox="0 0 32 32"
                        fill="none"
                        className="w-6 h-6"
                      >
                        <path
                          d="M16 19.5L14.2 17.8C12.5 16.2 11.5 15.3 11.5 14.1C11.5 13.1 12.3 12.3 13.3 12.3C13.9 12.3 14.5 12.6 14.8 13L16 14.2L17.2 13C17.5 12.6 18.1 12.3 18.7 12.3C19.7 12.3 20.5 13.1 20.5 14.1C20.5 15.3 19.5 16.2 17.8 17.8L16 19.5Z"
                          fill="#10793f"
                        />
                        <path
                          d="M9 19C9 23 12 25 16 25C20 25 23 23 23 19"
                          stroke="#10793f"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                        <path
                          d="M7 16C7 16 8.5 19 12 19M25 16C25 16 23.5 19 20 19"
                          stroke="#10793f"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>

                    <h3 className="text-sm sm:text-base font-bold text-[#0e3b24] mb-1">
                      Empathy
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed font-normal">
                      We listen, understand, and support your unique health journey.
                    </p>
                  </div>

                  {/* Value 2: Evidence-Based Guidance */}
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full bg-[#eef8f2] border border-[#cfe8d6] flex items-center justify-center mb-3 text-[#10793f]">
                      <svg
                        viewBox="0 0 32 32"
                        fill="none"
                        className="w-6 h-6"
                      >
                        <path
                          d="M13 7H19M14 7V13L8 23C7 24.5 8 26 10 26H22C24 26 25 24.5 24 23L18 13V7"
                          stroke="#10793f"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M10 21C12 20 14 22 16 21C18 20 20 22 22 21"
                          stroke="#10793f"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>

                    <h3 className="text-sm sm:text-base font-bold text-[#0e3b24] mb-1">
                      Evidence-Based Guidance
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed font-normal">
                      Our recommendations are rooted in trusted nutrition science.
                    </p>
                  </div>

                  {/* Value 3: Long-Term Wellbeing */}
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full bg-[#eef8f2] border border-[#cfe8d6] flex items-center justify-center mb-3 text-[#10793f]">
                      <svg
                        viewBox="0 0 32 32"
                        fill="none"
                        className="w-6 h-6"
                      >
                        <path
                          d="M11 23C11 23 11 15 17 11C23 7 24 8 24 8C24 8 25 9 21 15C17 21 9 21 9 21"
                          stroke="#10793f"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M11 23C13 19 16 16 20 14"
                          stroke="#10793f"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>

                    <h3 className="text-sm sm:text-base font-bold text-[#0e3b24] mb-1">
                      Long-Term Wellbeing
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed font-normal">
                      We focus on sustainable habits for lasting health and wellness.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* 6. CALL TO ACTION BANNER                                       */}
        {/* ============================================================== */}
        <section className="pt-4 pb-12 sm:pb-20 relative overflow-hidden">
          {/* Ambient Left Leaf Branch */}
          <div
            className="absolute bottom-2 -left-8 w-28 sm:w-40 h-40 pointer-events-none select-none z-0 opacity-75 hidden md:block"
            style={{ transform: "rotate(-25deg)" }}
          >
            <Image
              src="/image/Glossy Green Leaf Branch.png"
              alt=""
              width={1024}
              height={1536}
              className="w-full h-auto object-contain"
              unoptimized
            />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
            <div className="bg-[#edf7f1] border border-[#cfe8d6] rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:px-10 lg:py-7 shadow-xs relative overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                {/* Left/Middle: Headline & Button */}
                <div className="lg:col-span-7 flex flex-col items-start z-10">
                  <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-extrabold text-[#0e3b24] tracking-tight mb-2">
                    Let&apos;s Build Healthier Habits Together
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed max-w-xl mb-5 font-normal">
                    Get expert guidance, a personalized nutrition plan, and
                    ongoing support — all in one place with DietNexa.
                  </p>

                  <button
                    onClick={() => handleOpenModal("get-started")}
                    className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3 rounded-full text-white font-semibold text-sm sm:text-base bg-[#10793f] hover:bg-[#0c6132] transition-all shadow-md hover:shadow-lg active:scale-95 cursor-pointer"
                    style={{
                      boxShadow: "0 4px 14px rgba(16,121,63,0.28)",
                    }}
                  >
                    <span>Get Started</span>
                    <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                  </button>
                </div>

                {/* Right: Fresh Produce, Smoothie & Measuring Tape */}
                <div className="lg:col-span-5 flex justify-center lg:justify-end z-10">
                  <div className="w-full max-w-[460px]">
                    <Image
                      src="/image/Vibrant Healthy Foods with Measuring Tape.png"
                      alt="Fresh fruits, vegetables, green smoothie, and fitness measuring tape"
                      width={2172}
                      height={724}
                      unoptimized
                      className="w-full h-auto object-contain object-right"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Shared Footer */}
      <Footer />

      {/* Interactive Consultation / Get-Started / Login Modal */}
      <ConsultationModal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        initialType={modalType}
      />
    </div>
  );
}
