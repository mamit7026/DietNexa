"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ConsultationModal from "@/components/ConsultationModal";
import {
  Headphones,
  Zap,
  ShieldCheck,
  User,
  Mail,
  Phone,
  MessageSquare,
  Send,
  MapPin,
  ExternalLink,
  Plus,
  Minus,
  CheckCircle2,
  FileText,
  ArrowRight,
} from "lucide-react";

export default function ContactPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState("consultation");

  // Form State
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "Dietitian Consultation",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  // FAQ Accordion State (open items map)
  const [openFaqs, setOpenFaqs] = useState({
    0: false,
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
  });

  const toggleFaq = (index) => {
    setOpenFaqs((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const handleOpenModal = (type = "consultation") => {
    setModalType(type);
    setModalOpen(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  const faqsLeft = [
    {
      q: "How do I book a dietitian consultation?",
      a: "You can book directly by clicking 'Book a Consultation', selecting your preferred specialist based on your health goals, choosing a suitable date and time, and confirming your session.",
    },
    {
      q: "Are the diet plans personalized?",
      a: "Yes, absolutely! Every diet plan is custom-tailored around your medical reports, body composition, dietary preferences (vegetarian, vegan, non-vegetarian), lifestyle, and routine.",
    },
    {
      q: "Can I change my plan later?",
      a: "Yes, you can modify, upgrade, or switch your diet plan at any time through your DietNexa account or directly during your follow-up check-in with your dietitian.",
    },
  ];

  const faqsRight = [
    {
      q: "Is my health information kept private?",
      a: "100% confidential. All consultations, clinical assessments, and medical reports are encrypted with enterprise-grade 256-bit security adhering strictly to medical confidentiality guidelines.",
    },
    {
      q: "Do you offer online consultations?",
      a: "Yes, we specialize in 1-on-1 online video and audio consultations with follow-up guidance on WhatsApp, making it seamless to consult top dietitians from home.",
    },
    {
      q: "How can I get a refund or cancel my plan?",
      a: "We offer an easy 7-day money-back guarantee on all our consultation packages if you're not satisfied with your experience. Simply reach out via email or phone.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col font-sans selection:bg-[#dcf2e3] selection:text-[#0b4728]">
      {/* Top Navbar */}
      <Navbar onOpenModal={handleOpenModal} />

      <main className="flex-1">
        {/* ══════════════════════════════════════════════════════════
            1. HERO SECTION
        ══════════════════════════════════════════════════════════ */}
        <section
          className="relative overflow-hidden pt-6 pb-0 lg:pt-8 lg:pb-0"
        >
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

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="flex flex-col lg:flex-row items-center justify-between min-h-[440px] lg:min-h-[460px] gap-8 lg:gap-4">

              {/* Left Text Column */}
              <div className="flex-1 flex flex-col justify-center py-6 lg:py-8 text-left max-w-full lg:max-w-[500px] z-10">
                {/* Contact Us Pill Badge */}
                <div
                  className="inline-flex items-center mb-5 self-start px-4 py-1.5 rounded-full border bg-white/95 shadow-xs"
                  style={{
                    borderColor: "rgba(16,121,63,0.18)",
                    boxShadow: "0 2px 8px -1px rgba(0,0,0,0.04)",
                  }}
                >
                  <span className="text-[12.5px] font-bold text-gray-800 tracking-tight">
                    Contact Us
                  </span>
                </div>

                {/* Headline */}
                <h1
                  className="font-extrabold text-[#0c3820] tracking-tight mb-4 text-left"
                  style={{
                    fontSize: "clamp(34px, 4.2vw, 48px)",
                    lineHeight: 1.14,
                    letterSpacing: "-0.025em",
                    fontFamily: "var(--font-sans)",
                  }}
                >
                  Get in Touch
                  <span className="block mt-1 text-[#0c3820]">
                    with DietNexa
                  </span>
                </h1>

                {/* Subtext */}
                <p
                  className="text-gray-600 leading-relaxed mb-8 max-w-md text-sm sm:text-base font-normal"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  Have questions, need support, or want to speak with a dietitian?
                  We’re here to help you on your nutrition and wellness journey.
                </p>

                {/* 3 Trust Feature Chips — horizontal icon+label layout */}
                <div className="flex flex-wrap items-center gap-x-5 gap-y-3 pt-4 border-t border-gray-200">

                  {/* Expert Support */}
                  <div className="flex items-center gap-2.5">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
                      style={{ background: "rgba(16,121,63,0.10)" }}
                    >
                      <Headphones className="w-[17px] h-[17px] text-[#10793f]" strokeWidth={2.2} />
                    </div>
                    <span className="text-[13px] font-bold text-gray-800 whitespace-nowrap">Expert Support</span>
                  </div>

                  <div className="h-5 w-px bg-gray-200 hidden sm:block shrink-0" />

                  {/* Quick Response */}
                  <div className="flex items-center gap-2.5">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
                      style={{ background: "rgba(16,121,63,0.10)" }}
                    >
                      <Zap className="w-[17px] h-[17px] text-[#10793f]" strokeWidth={2.2} />
                    </div>
                    <span className="text-[13px] font-bold text-gray-800 whitespace-nowrap">Quick Response</span>
                  </div>

                  <div className="h-5 w-px bg-gray-200 hidden sm:block shrink-0" />

                  {/* Secure & Private */}
                  <div className="flex items-center gap-2.5">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
                      style={{ background: "rgba(16,121,63,0.10)" }}
                    >
                      <ShieldCheck className="w-[17px] h-[17px] text-[#10793f]" strokeWidth={2.2} />
                    </div>
                    <span className="text-[13px] font-bold text-gray-800 whitespace-nowrap">Secure &amp; Private</span>
                  </div>

                </div>
              </div>

              {/* ── RIGHT COLUMN: Doctor + Fresh Veggies (lg+) ── */}
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

              {/* ── MOBILE HERO VISUAL (< lg) ── */}
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
                      className="object-contain object-bottom"
                    />
                  </div>
                </div>

                {/* Vegetables */}
                <div
                  className="absolute z-20 pointer-events-none"
                  style={{
                    bottom: "0px",
                    right: "0px",
                    width: "56%",
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
                      className="object-contain object-bottom-right drop-shadow-md"
                    />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>


        {/* ══════════════════════════════════════════════════════════
            2. SEND US A MESSAGE & OTHER WAYS TO REACH US
        ══════════════════════════════════════════════════════════ */}
        <section className="py-12 lg:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">

              {/* ── LEFT: Send Us a Message Form Card (7 Cols) ── */}
              <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-gray-200/80 shadow-[0_4px_25px_-5px_rgba(0,0,0,0.06)]">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight mb-2">
                  Send Us a Message
                </h2>
                <p className="text-gray-500 text-sm sm:text-[15px] mb-8">
                  Fill in the form below and our team will get back to you as soon as possible.
                </p>

                {submitted ? (
                  <div className="py-12 flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center text-[#10793f] mb-4">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Thank You, {formData.fullName || "Friend"}!
                    </h3>
                    <p className="text-gray-600 max-w-md mb-6 text-sm">
                      Your message regarding <span className="font-semibold text-emerald-800">{formData.subject}</span> has been received. Our clinical team will respond to <span className="font-semibold">{formData.email}</span> within 24 hours.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          fullName: "",
                          email: "",
                          phone: "",
                          subject: "Dietitian Consultation",
                          message: "",
                        });
                      }}
                      className="px-6 py-2.5 rounded-full bg-[#10793f] text-white font-bold text-sm hover:opacity-90 transition-all cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Full Name */}
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                          <User className="w-4 h-4" />
                        </div>
                        <input
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={(e) =>
                            setFormData({ ...formData, fullName: e.target.value })
                          }
                          placeholder="Full Name *"
                          className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#10793f] focus:ring-2 focus:ring-emerald-500/20 transition-all bg-gray-50/50"
                        />
                      </div>

                      {/* Email Address */}
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                          <Mail className="w-4 h-4" />
                        </div>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          placeholder="Email Address *"
                          className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#10793f] focus:ring-2 focus:ring-emerald-500/20 transition-all bg-gray-50/50"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Phone Number */}
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                          <Phone className="w-4 h-4" />
                        </div>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          placeholder="Phone Number"
                          className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#10793f] focus:ring-2 focus:ring-emerald-500/20 transition-all bg-gray-50/50"
                        />
                      </div>

                      {/* Subject Dropdown */}
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                          <FileText className="w-4 h-4" />
                        </div>
                        <select
                          value={formData.subject}
                          onChange={(e) =>
                            setFormData({ ...formData, subject: e.target.value })
                          }
                          className="w-full pl-10 pr-8 py-3 rounded-xl border border-gray-200 text-sm text-gray-900 focus:outline-none focus:border-[#10793f] focus:ring-2 focus:ring-emerald-500/20 transition-all bg-gray-50/50 appearance-none cursor-pointer"
                        >
                          <option value="Dietitian Consultation">
                            Dietitian Consultation
                          </option>
                          <option value="Custom Meal Plan Inquiry">
                            Custom Meal Plan Inquiry
                          </option>
                          <option value="Weight Loss Program">
                            Weight Loss Program
                          </option>
                          <option value="Diabetes / Clinical Care">
                            Diabetes / Clinical Care
                          </option>
                          <option value="Corporate Wellness">
                            Corporate Wellness
                          </option>
                          <option value="General Support">General Support</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-gray-400">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Message Area */}
                    <div className="relative">
                      <div className="absolute top-3.5 left-3.5 pointer-events-none text-gray-400">
                        <MessageSquare className="w-4 h-4" />
                      </div>
                      <textarea
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        placeholder="Your Message *"
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#10793f] focus:ring-2 focus:ring-emerald-500/20 transition-all bg-gray-50/50 resize-y"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-bold text-white text-sm sm:text-base transition-all duration-200 hover:opacity-95 hover:shadow-lg active:scale-95 cursor-pointer"
                      style={{
                        background: "#10793f",
                        boxShadow: "0 6px 20px -3px rgba(16,121,63,0.38)",
                      }}
                    >
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </button>
                  </form>
                )}
              </div>


              {/* ── RIGHT: Other Ways to Reach Us (5 Cols) ── */}
              <div className="lg:col-span-5 flex flex-col justify-start">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight mb-2">
                  Other Ways to Reach Us
                </h2>
                {/* Green Underline Indicator */}
                <div className="w-12 h-1 bg-[#10793f] rounded-full mb-6" />

                <div className="space-y-3.5">
                  {/* Call Us */}
                  <a
                    href="tel:+919876543210"
                    className="flex items-start gap-4 p-4 rounded-2xl border border-gray-100 transition-all hover:border-emerald-300 hover:shadow-xs group"
                    style={{ background: "#f4fbf6" }}
                  >
                    <div className="w-11 h-11 rounded-full flex items-center justify-center shrink-0 bg-[#e4f6ec] text-[#10793f] group-hover:scale-105 transition-transform">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-0.5">
                        Call Us
                      </div>
                      <div className="text-base font-extrabold text-gray-900 group-hover:text-[#10793f] transition-colors">
                        +91 98765 43210
                      </div>
                      <div className="text-xs text-gray-500 font-medium mt-0.5">
                        Mon – Sat, 9:00 AM – 7:00 PM (IST)
                      </div>
                    </div>
                  </a>

                  {/* Email Us */}
                  <a
                    href="mailto:support@dietnexa.com"
                    className="flex items-start gap-4 p-4 rounded-2xl border border-gray-100 transition-all hover:border-emerald-300 hover:shadow-xs group"
                    style={{ background: "#f4fbf6" }}
                  >
                    <div className="w-11 h-11 rounded-full flex items-center justify-center shrink-0 bg-[#e4f6ec] text-[#10793f] group-hover:scale-105 transition-transform">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-0.5">
                        Email Us
                      </div>
                      <div className="text-base font-extrabold text-gray-900 group-hover:text-[#10793f] transition-colors">
                        support@dietnexa.com
                      </div>
                      <div className="text-xs text-gray-500 font-medium mt-0.5">
                        We’ll respond within 24 hours.
                      </div>
                    </div>
                  </a>

                  {/* Chat on WhatsApp */}
                  <a
                    href="https://wa.me/919876543210?text=Hi%20DietNexa,%20I%20would%20like%20to%20consult%20a%20dietitian"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-start gap-4 p-4 rounded-2xl border border-gray-100 transition-all hover:border-emerald-300 hover:shadow-xs group"
                    style={{ background: "#f4fbf6" }}
                  >
                    <div className="w-11 h-11 rounded-full flex items-center justify-center shrink-0 bg-[#e4f6ec] text-[#10793f] group-hover:scale-105 transition-transform">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-0.5">
                        Chat on WhatsApp
                      </div>
                      <div className="text-base font-extrabold text-gray-900 group-hover:text-[#10793f] transition-colors">
                        +91 98765 43210
                      </div>
                      <div className="text-xs text-gray-500 font-medium mt-0.5">
                        Get quick assistance from our team.
                      </div>
                    </div>
                  </a>

                  {/* Our Office */}
                  <div
                    className="flex items-start gap-4 p-4 rounded-2xl border border-gray-100"
                    style={{ background: "#f4fbf6" }}
                  >
                    <div className="w-11 h-11 rounded-full flex items-center justify-center shrink-0 bg-[#e4f6ec] text-[#10793f]">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-0.5">
                        Our Office
                      </div>
                      <div className="text-base font-extrabold text-gray-900">
                        Kolkata, West Bengal, India
                      </div>
                      <div className="text-xs text-gray-500 font-medium mt-0.5">
                        Visit us by appointment only.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>


        {/* ══════════════════════════════════════════════════════════
            3. FIND US HERE & MAP SECTION
        ══════════════════════════════════════════════════════════ */}
        <section className="py-6 sm:py-10 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#f8fbf9] border border-gray-200/80 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xs relative">

              {/* Decorative leafy branch on right */}
              <div
                className="absolute -top-10 -right-6 pointer-events-none z-0 hidden lg:block w-[180px] h-[260px] opacity-85 rotate-12"
              >
                <Image
                  src="/image/Glossy Green Leaf Branch.png"
                  alt=""
                  fill
                  priority
                  unoptimized
                  className="object-contain object-right"
                />
              </div>

              {/* Map Box (Left 7 Cols) — Real Google Map with Theme-based Frame */}
              <div className="lg:col-span-7 relative w-full h-[280px] sm:h-[340px] lg:h-[360px] rounded-2xl overflow-hidden shadow-sm border border-emerald-200/90 bg-white ring-4 ring-[#10793f]/5">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1847.6355210289087!2d87.92621240529176!3d22.153752479401945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjLCsDA5JzEzLjUiTiA4N8KwNTUnMzkuMCJF!5e0!3m2!1sen!2sin!4v1793267420008!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  className="w-full h-full"
                  title="DietNexa Location Map"
                />
              </div>

              {/* Find Us Here Content (Right 5 Cols) */}
              <div className="lg:col-span-5 flex flex-col items-start relative z-10">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight mb-3">
                  Find Us Here
                </h2>

                <div className="flex items-center gap-2 text-gray-700 font-semibold mb-2 text-sm sm:text-base">
                  <MapPin className="w-5 h-5 text-[#10793f] shrink-0" />
                  <span>Kolkata, West Bengal, India</span>
                </div>

                <p className="text-gray-500 text-xs sm:text-sm mb-6 leading-relaxed">
                  Visit our consultation center for in-person dietitian assessments and personalized wellness guidance.
                </p>

                <a
                  href="https://www.google.com/maps?q=22.153752479401945,87.92621240529176"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-white text-sm transition-all shadow-md hover:shadow-lg active:scale-95"
                  style={{
                    background: "linear-gradient(135deg, #10793f 0%, #0d6534 100%)",
                  }}
                >
                  <span>Get Directions</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

            </div>
          </div>
        </section>


        {/* ══════════════════════════════════════════════════════════
            4. FREQUENTLY ASKED QUESTIONS (FAQ) SECTION
        ══════════════════════════════════════════════════════════ */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div
              className="rounded-3xl p-6 sm:p-10 lg:p-12 border border-emerald-900/10 shadow-xs"
              style={{
                background:
                  "linear-gradient(135deg, #f0faf3 0%, #f6fcf8 50%, #edf8f2 100%)",
              }}
            >
              {/* FAQ Section Header */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight mb-1">
                    Frequently Asked Questions
                  </h2>
                  <p className="text-gray-600 text-sm sm:text-[15px]">
                    Find quick answers to common queries.
                  </p>
                </div>

                <Link
                  href="/#why-dietnexa"
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full font-bold text-gray-800 text-xs sm:text-sm bg-white border border-gray-200/90 hover:border-[#10793f] hover:text-[#10793f] transition-all shadow-2xs hover:shadow-sm"
                >
                  <span>View All FAQs</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* 2-Column Accordion Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-start">

                {/* Left Column FAQs */}
                <div className="space-y-3.5">
                  {faqsLeft.map((faq, i) => {
                    const isOpen = openFaqs[i];
                    return (
                      <div
                        key={faq.q}
                        className="bg-white rounded-2xl border border-gray-200/80 overflow-hidden shadow-2xs transition-all hover:border-emerald-300"
                      >
                        <button
                          type="button"
                          onClick={() => toggleFaq(i)}
                          className="w-full flex items-center justify-between p-4 sm:p-5 text-left font-bold text-gray-900 text-sm sm:text-[15px] cursor-pointer"
                        >
                          <span className="pr-4">{faq.q}</span>
                          <span className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 bg-emerald-50 text-[#10793f]">
                            {isOpen ? (
                              <Minus className="w-4 h-4" />
                            ) : (
                              <Plus className="w-4 h-4" />
                            )}
                          </span>
                        </button>
                        {isOpen && (
                          <div className="px-5 pb-5 pt-1 text-gray-600 text-xs sm:text-sm leading-relaxed border-t border-gray-100">
                            {faq.a}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Right Column FAQs */}
                <div className="space-y-3.5">
                  {faqsRight.map((faq, i) => {
                    const idx = i + 3;
                    const isOpen = openFaqs[idx];
                    return (
                      <div
                        key={faq.q}
                        className="bg-white rounded-2xl border border-gray-200/80 overflow-hidden shadow-2xs transition-all hover:border-emerald-300"
                      >
                        <button
                          type="button"
                          onClick={() => toggleFaq(idx)}
                          className="w-full flex items-center justify-between p-4 sm:p-5 text-left font-bold text-gray-900 text-sm sm:text-[15px] cursor-pointer"
                        >
                          <span className="pr-4">{faq.q}</span>
                          <span className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 bg-emerald-50 text-[#10793f]">
                            {isOpen ? (
                              <Minus className="w-4 h-4" />
                            ) : (
                              <Plus className="w-4 h-4" />
                            )}
                          </span>
                        </button>
                        {isOpen && (
                          <div className="px-5 pb-5 pt-1 text-gray-600 text-xs sm:text-sm leading-relaxed border-t border-gray-100">
                            {faq.a}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

              </div>

            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <Footer />

      {/* Consultation Modal */}
      <ConsultationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultType={modalType}
      />
    </div>
  );
}
