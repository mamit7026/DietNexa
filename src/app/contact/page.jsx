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
            1. HERO SECTION (Matching User Design)
        ══════════════════════════════════════════════════════════ */}
        <section
          className="relative overflow-hidden pt-8 pb-12 lg:pt-10 lg:pb-16"
          style={{
            background:
              "linear-gradient(110deg, #f2faf4 0%, #f7fcf9 40%, #edf7f1 75%, #e6f5eb 100%)",
          }}
        >
          {/* Subtle top-left leaf branch decorative */}
          <div
            className="absolute -top-6 -left-6 pointer-events-none z-0 hidden lg:block w-[190px] h-[240px] opacity-45"
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
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 min-h-[380px]">

              {/* Left Text Column */}
              <div className="flex-1 flex flex-col justify-center text-left max-w-xl">
                {/* Contact Us Pill Badge */}
                <div
                  className="inline-flex items-center px-4 py-1.5 rounded-full border text-[13px] font-semibold text-gray-700 shadow-2xs self-start mb-4"
                  style={{
                    background: "rgba(255, 255, 255, 0.95)",
                    borderColor: "#d1d5db",
                  }}
                >
                  Contact Us
                </div>

                {/* Headline */}
                <h1
                  className="font-extrabold text-gray-900 tracking-tight mb-4 text-left"
                  style={{
                    fontSize: "clamp(34px, 4.4vw, 52px)",
                    lineHeight: 1.12,
                    letterSpacing: "-0.02em",
                  }}
                >
                  Get in Touch
                  <span className="block text-gray-900">with DietNexa</span>
                </h1>

                {/* Subtext */}
                <p
                  className="text-gray-600 leading-relaxed mb-8 max-w-lg"
                  style={{ fontSize: "clamp(14px, 1.2vw, 16px)" }}
                >
                  Have questions, need support, or want to speak with a dietitian?
                  We’re here to help you on your nutrition and wellness journey.
                </p>

                {/* 3 Trust Badges Row */}
                <div className="flex items-center gap-6 sm:gap-10 pt-2 border-t border-emerald-900/10">
                  {/* Expert Support */}
                  <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                    <div className="text-[#10793f] mb-1.5">
                      <Headphones className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2.2} />
                    </div>
                    <span className="text-[12.5px] sm:text-[13.5px] font-bold text-gray-900">
                      Expert Support
                    </span>
                  </div>

                  {/* Divider */}
                  <div className="h-9 w-px bg-gray-200/80 hidden sm:block" />

                  {/* Quick Response */}
                  <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                    <div className="text-[#10793f] mb-1.5">
                      <Zap className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2.2} />
                    </div>
                    <span className="text-[12.5px] sm:text-[13.5px] font-bold text-gray-900">
                      Quick Response
                    </span>
                  </div>

                  {/* Divider */}
                  <div className="h-9 w-px bg-gray-200/80 hidden sm:block" />

                  {/* Secure & Private */}
                  <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                    <div className="text-[#10793f] mb-1.5">
                      <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2.2} />
                    </div>
                    <span className="text-[12.5px] sm:text-[13.5px] font-bold text-gray-900">
                      Secure & Private
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Hero Image Column (Exact Doctor + Green Circle + Produce) */}
              <div
                className="relative flex-shrink-0 w-full lg:w-[520px] xl:w-[580px] h-[300px] sm:h-[360px] lg:h-[400px] rounded-3xl overflow-hidden shadow-xs"
              >
                <Image
                  src="/image/Smiling Doctor with Fresh Produce (1).png"
                  alt="DietNexa Dietitian Support"
                  fill
                  priority
                  unoptimized
                  className="object-cover object-center lg:object-right"
                />
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

              {/* Map Illustration Box (Left 7 Cols) */}
              <div className="lg:col-span-7 relative w-full h-[240px] sm:h-[280px] rounded-2xl overflow-hidden shadow-xs border border-gray-200 bg-[#eef5f0]">
                {/* Stylized vector street grid */}
                <svg
                  className="w-full h-full object-cover"
                  viewBox="0 0 600 300"
                  fill="none"
                  preserveAspectRatio="xMidYMid slice"
                >
                  <rect width="600" height="300" fill="#f4faf5" />
                  {/* Water River Curve */}
                  <path
                    d="M-20,40 C120,60 180,180 260,320 L200,320 C140,180 80,80 -20,60 Z"
                    fill="#bfe2f7"
                  />
                  {/* Parks / Green Areas */}
                  <rect x="70" y="210" width="80" height="70" rx="12" fill="#cbebd3" />
                  <rect x="480" y="180" width="100" height="80" rx="16" fill="#cbebd3" />
                  <circle cx="510" cy="80" r="40" fill="#d2f0da" />

                  {/* Main Arterial Roads */}
                  <path d="M0,120 L600,160" stroke="#ffffff" strokeWidth="22" />
                  <path d="M0,120 L600,160" stroke="#e0ece3" strokeWidth="18" />
                  <path d="M220,0 L320,300" stroke="#ffffff" strokeWidth="20" />
                  <path d="M220,0 L320,300" stroke="#e0ece3" strokeWidth="16" />
                  <path d="M380,0 L420,300" stroke="#ffffff" strokeWidth="16" />
                  <path d="M380,0 L420,300" stroke="#e0ece3" strokeWidth="12" />
                  <path d="M120,0 L180,300" stroke="#ffffff" strokeWidth="14" />
                  <path d="M120,0 L180,300" stroke="#e0ece3" strokeWidth="10" />
                  <path d="M0,230 L600,210" stroke="#ffffff" strokeWidth="18" />
                  <path d="M0,230 L600,210" stroke="#e0ece3" strokeWidth="14" />
                  <path d="M0,40 L600,60" stroke="#ffffff" strokeWidth="14" />
                  <path d="M0,40 L600,60" stroke="#e0ece3" strokeWidth="10" />

                  {/* Cross Streets */}
                  <path d="M50,0 L50,300" stroke="#ffffff" strokeWidth="8" />
                  <path d="M460,0 L460,300" stroke="#ffffff" strokeWidth="8" />
                  <path d="M540,0 L540,300" stroke="#ffffff" strokeWidth="8" />
                </svg>

                {/* Floating Office Pin Badge */}
                <div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex items-center gap-3 bg-white/96 backdrop-blur-md px-4 py-3 rounded-2xl border border-gray-200/90"
                  style={{
                    boxShadow: "0 10px 28px -4px rgba(0,0,0,0.18)",
                  }}
                >
                  <div className="w-10 h-10 rounded-full bg-[#10793f] flex items-center justify-center text-white shrink-0 shadow-md">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-extrabold text-gray-900 leading-tight">
                      DietNexa Office
                    </div>
                    <div className="text-xs font-semibold text-gray-500 leading-tight mt-0.5">
                      Kolkata, West Bengal
                    </div>
                  </div>
                </div>
              </div>

              {/* Find Us Here Content (Right 5 Cols) */}
              <div className="lg:col-span-5 flex flex-col items-start relative z-10">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight mb-3">
                  Find Us Here
                </h2>

                <div className="flex items-center gap-2 text-gray-700 font-semibold mb-6 text-sm sm:text-base">
                  <MapPin className="w-5 h-5 text-[#10793f] shrink-0" />
                  <span>Kolkata, West Bengal, India</span>
                </div>

                <a
                  href="https://maps.google.com/?q=Kolkata,+West+Bengal,+India"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-gray-800 text-sm border border-gray-300 hover:border-[#10793f] hover:text-[#10793f] hover:bg-white transition-all shadow-2xs hover:shadow-sm active:scale-95"
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
