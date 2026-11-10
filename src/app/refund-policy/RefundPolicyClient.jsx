"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ConsultationModal from "@/components/ConsultationModal";
import {
  RefreshCw,
  Clock,
  CalendarCheck,
  CreditCard,
  FileCheck2,
  Mail,
  Phone,
  MapPin,
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
} from "lucide-react";

export default function RefundPolicyClient() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState("consultation");
  const [activeSection, setActiveSection] = useState("consultation-cancellation");

  const handleOpenModal = (type = "consultation") => {
    setModalType(type);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const sections = [
    {
      id: "principles",
      title: "1. Scope & Ethical Standards",
      icon: ShieldCheck,
      content: (
        <>
          <p className="text-gray-700 leading-relaxed mb-4">
            At <strong>DietNexa</strong>, we are committed to delivering evidence-based clinical nutrition, tailored dietary therapy, and high-trust healthcare services. Because our offerings combine professional consultation time with customized medical meal charting, we maintain an open, fair, and transparent Cancellation and Refund Policy.
          </p>
          <p className="text-gray-700 leading-relaxed">
            This policy outlines your entitlements and obligations when booking clinical consultations, purchasing personalized diet programs, or requesting session adjustments across our platform.
          </p>
        </>
      ),
    },
    {
      id: "consultation-cancellation",
      title: "2. Consultation Cancellation & Rescheduling",
      icon: CalendarCheck,
      content: (
        <>
          <p className="text-gray-700 leading-relaxed mb-4">
            We understand that medical emergencies and schedule changes occur. To respect our dietitians&apos; committed consultation slots, the following terms apply:
          </p>
          <div className="space-y-3.5 mb-5">
            <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-100 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#10793f] shrink-0 mt-0.5" />
              <div>
                <strong className="text-gray-900 block text-sm sm:text-base">
                  Advance Cancellation (24+ Hours Notice)
                </strong>
                <p className="text-xs sm:text-sm text-gray-600 mt-0.5">
                  If you cancel your scheduled appointment at least 24 hours prior to the session start time, you are eligible for an immediate <strong>100% full refund</strong> or a free reschedule to a date of your choice.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80 flex items-start gap-3">
              <Clock className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-gray-900 block text-sm sm:text-base">
                  Late Reschedule (Within 24 Hours)
                </strong>
                <p className="text-xs sm:text-sm text-gray-600 mt-0.5">
                  Appointments rescheduled within 24 hours of the slot can be rescheduled once without extra charge subject to practitioner availability. Cancellations requested less than 4 hours before the session may incur a nominal slot retention fee of up to 30%.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-100 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-[#10793f] shrink-0 mt-0.5" />
              <div>
                <strong className="text-gray-900 block text-sm sm:text-base">
                  Dietitian Unavailability / Platform Cancellation
                </strong>
                <p className="text-xs sm:text-sm text-gray-600 mt-0.5">
                  In the rare event that an accredited DietNexa clinician is unable to attend due to an emergency or clinical contingency, you are entitled to a <strong>guaranteed 100% immediate refund</strong> or priority rescheduling with an equivalent senior specialist.
                </p>
              </div>
            </div>
          </div>
        </>
      ),
    },
    {
      id: "personalized-plans",
      title: "3. Customized Diet Plans & Digital Delivery",
      icon: FileCheck2,
      content: (
        <>
          <p className="text-gray-700 leading-relaxed mb-4">
            Our personalized diet plans are bespoke intellectual health assets crafted specifically according to your physiological biomarkers, blood chemistry, daily caloric expenditure, and chronic health conditions.
          </p>
          <ul className="space-y-3 mb-4 text-sm text-gray-700">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#10793f] shrink-0 mt-0.5" />
              <div>
                <strong className="text-gray-900">Before Formulation:</strong> If you request a cancellation before the dietitian begins clinical chart formulation, a full 100% refund will be issued.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#10793f] shrink-0 mt-0.5" />
              <div>
                <strong className="text-gray-900">After Chart Delivery:</strong> Once the customized meal plan has been formulated and sent to your email or patient portal, the fee is non-refundable due to the custom intellectual nature of clinical health charts.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#10793f] shrink-0 mt-0.5" />
              <div>
                <strong className="text-gray-900">Satisfaction Revision Guarantee:</strong> If any dietary element does not match your prescribed lifestyle, taste tolerance, or medical constraints, our dietitians provide <strong>free plan revisions</strong> within 7 days of delivery.
              </div>
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "multi-session-packages",
      title: "4. Multi-Week & Subscription Packages",
      icon: RefreshCw,
      content: (
        <>
          <p className="text-gray-700 leading-relaxed mb-4">
            For users enrolled in multi-week or multi-month wellness transformations (e.g. 1-Month, 3-Month, or 6-Month disease management programs):
          </p>
          <div className="p-4 sm:p-5 rounded-2xl bg-gray-50 border border-gray-200 text-xs sm:text-sm text-gray-700 space-y-2.5">
            <p>
              • If you choose to discontinue your program mid-way, refunds are calculated on a <strong>pro-rata basis</strong> for the remaining unutilized weeks or sessions, deducting sessions already completed at standard single-consultation rates.
            </p>
            <p>
              • Medical pause: You may pause your subscription for up to 60 days without penalty if advised by your medical doctor.
            </p>
          </div>
        </>
      ),
    },
    {
      id: "refund-timelines",
      title: "5. Refund Processing Timelines & Modes",
      icon: CreditCard,
      content: (
        <>
          <p className="text-gray-700 leading-relaxed mb-4">
            All approved refunds are initiated through our automated banking gateway to ensure security and traceability:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div className="p-4 rounded-2xl bg-[#edf8f1] border border-[#d2edd9]">
              <div className="text-xs font-semibold text-emerald-800 uppercase tracking-wider mb-1">
                Processing Window
              </div>
              <div className="text-lg font-bold text-[#0c3820]">
                5 to 7 Business Days
              </div>
              <p className="text-xs text-gray-600 mt-1">
                Credited directly to the original payment source (UPI, Debit/Credit Card, Net Banking).
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#edf8f1] border border-[#d2edd9]">
              <div className="text-xs font-semibold text-emerald-800 uppercase tracking-wider mb-1">
                Zero Hidden Deductions
              </div>
              <div className="text-lg font-bold text-[#0c3820]">
                Direct Settlement
              </div>
              <p className="text-xs text-gray-600 mt-1">
                Approved consultation refunds are credited without arbitrary administrative penalties.
              </p>
            </div>
          </div>
        </>
      ),
    },
    {
      id: "grievance-contact",
      title: "6. How to Request a Refund & Grievance Support",
      icon: HelpCircle,
      content: (
        <>
          <p className="text-gray-700 leading-relaxed mb-4">
            To submit a cancellation or refund request, please provide your booking ID, registered phone number, and reason for the request:
          </p>
          <div className="p-5 rounded-2xl bg-emerald-950 text-white space-y-3.5">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-emerald-400 shrink-0" />
              <div>
                <span className="text-xs text-emerald-200 block">Email Grievance Team:</span>
                <a
                  href="mailto:support@dietnexa.com"
                  className="text-sm font-semibold hover:underline text-white"
                >
                  support@dietnexa.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-emerald-400 shrink-0" />
              <div>
                <span className="text-xs text-emerald-200 block">Customer Helpline / WhatsApp:</span>
                <a
                  href="tel:+917319328962"
                  className="text-sm font-semibold hover:underline text-white"
                >
                  +91 7319328962
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <span className="text-xs text-emerald-200 block">Registered Office:</span>
                <span className="text-sm text-emerald-100">
                  Nandakumar, West Bengal, India 721632
                </span>
              </div>
            </div>
          </div>
        </>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-[#fbfdfa] text-gray-900 flex flex-col justify-between">
      <Navbar onOpenModal={handleOpenModal} />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-[#07361e] to-[#0c4e2a] text-white pt-28 pb-16 sm:pb-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#4ade80_1px,transparent_1px)] [background-size:16px_16px]"></div>
          
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            {/* Breadcrumb */}
            <div className="inline-flex items-center gap-2 text-xs text-emerald-200/90 mb-4 bg-white/10 px-3 py-1 rounded-full border border-white/15">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-emerald-400" />
              <span>Legal</span>
              <ChevronRight className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-white font-medium">Refund Policy</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
              Cancellation &amp; Refund Policy
            </h1>
            <p className="text-sm sm:text-base text-emerald-100/90 max-w-2xl mx-auto leading-relaxed">
              Transparent, patient-first guidelines for consultation bookings, plan adjustments, and financial settlements.
            </p>
            <div className="mt-4 text-xs text-emerald-300">
              Last Updated: November 2026 • Effective Worldwide
            </div>
          </div>
        </section>

        {/* Content Layout */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column / Table of Contents */}
            <aside className="lg:col-span-4 sticky top-24 hidden lg:block">
              <div className="p-5 rounded-3xl bg-white border border-gray-100 shadow-sm space-y-2">
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider px-3 mb-3">
                  Policy Sections
                </h3>
                <nav className="space-y-1">
                  {sections.map((section) => {
                    const Icon = section.icon;
                    const isActive = activeSection === section.id;
                    return (
                      <a
                        key={section.id}
                        href={`#${section.id}`}
                        onClick={() => setActiveSection(section.id)}
                        className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-medium transition-all ${
                          isActive
                            ? "bg-[#edf8f1] text-[#0c3820] font-semibold"
                            : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                        }`}
                      >
                        <Icon className={`w-4 h-4 ${isActive ? "text-[#10793f]" : "text-gray-400"}`} />
                        <span className="truncate">{section.title}</span>
                      </a>
                    );
                  })}
                </nav>

                <div className="pt-4 mt-4 border-t border-gray-100">
                  <div className="p-3.5 rounded-2xl bg-emerald-50/60 border border-emerald-100 text-xs text-emerald-950">
                    <p className="font-semibold mb-1">Need help with an order?</p>
                    <p className="text-gray-600 mb-2">Our support desk responds within 24 hours.</p>
                    <Link
                      href="/contact"
                      className="font-bold text-[#10793f] hover:underline inline-flex items-center gap-1"
                    >
                      Contact Support <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </aside>

            {/* Right Column / Content Cards */}
            <div className="lg:col-span-8 space-y-6">
              {sections.map((section) => {
                const Icon = section.icon;
                return (
                  <div
                    key={section.id}
                    id={section.id}
                    className="p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 shadow-sm transition-all hover:shadow-md"
                  >
                    <div className="flex items-center gap-3 mb-4 pb-3 border-b border-gray-100">
                      <div className="w-10 h-10 rounded-xl bg-[#edf8f1] border border-[#d2edd9] flex items-center justify-center text-[#10793f] shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h2 className="text-lg sm:text-xl font-bold text-gray-900">
                        {section.title}
                      </h2>
                    </div>

                    <div className="prose prose-sm max-w-none text-gray-700">
                      {section.content}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <ConsultationModal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        initialType={modalType}
      />
    </div>
  );
}

