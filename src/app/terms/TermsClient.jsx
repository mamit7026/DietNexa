"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ConsultationModal from "@/components/ConsultationModal";
import {
  FileText,
  AlertTriangle,
  CalendarCheck,
  CreditCard,
  Scale,
  ShieldAlert,
  ChevronRight,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export default function TermsClient() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState("consultation");

  const handleOpenModal = (type = "consultation") => {
    setModalType(type);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const sections = [
    {
      id: "acceptance",
      title: "1. Acceptance of Terms",
      icon: Scale,
      content: (
        <>
          <p className="text-gray-700 leading-relaxed mb-4">
            By accessing or using the website, tools, calculators, digital diet plans, or
            consultation services provided by <strong>DietNexa</strong> (&quot;Platform,&quot;
            &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), you acknowledge that you have
            read, understood, and agreed to be legally bound by these Terms and Conditions
            (&quot;Terms&quot;) and our Privacy Policy.
          </p>
          <p className="text-gray-700 leading-relaxed">
            If you do not agree to all terms and conditions herein, you must refrain from using
            our website and services.
          </p>
        </>
      ),
    },
    {
      id: "medical-disclaimer",
      title: "2. Medical Disclaimer & Educational Purpose",
      icon: AlertTriangle,
      content: (
        <>
          <div className="p-4 sm:p-5 rounded-2xl bg-[#fff7ed] border border-[#fed7aa] text-amber-950 mb-5">
            <div className="flex items-center gap-2.5 font-bold text-amber-800 text-sm sm:text-base mb-2">
              <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0" />
              <span>Not a Substitute for Emergency Medical Care</span>
            </div>
            <p className="text-xs sm:text-sm text-amber-900 leading-relaxed">
              DietNexa provides scientific dietary guidance, personalized nutrition plans, and
              lifestyle counseling by certified clinical dietitians. The information provided
              on this platform, including our 100+ calculators, is for educational and wellness
              purposes only. It is not intended as medical diagnosis or emergency medical treatment.
            </p>
          </div>
          <p className="text-gray-700 leading-relaxed mb-3">
            Always consult your primary care physician or qualified healthcare provider regarding
            any acute medical condition, medication adjustments, or chronic pathology before
            initiating a drastic caloric deficit or dietary modification.
          </p>
          <p className="text-gray-700 leading-relaxed">
            If you experience a medical emergency, immediately contact your local emergency
            services or visit the nearest hospital emergency room.
          </p>
        </>
      ),
    },
    {
      id: "consultation-booking",
      title: "3. Dietitian Consultations & Appointments",
      icon: CalendarCheck,
      content: (
        <>
          <p className="text-gray-700 leading-relaxed mb-4">
            Consultations booked via DietNexa are conducted by accredited dietitians and
            clinical nutritionists:
          </p>
          <ul className="space-y-3 mb-4 text-sm text-gray-700">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#10793f] shrink-0 mt-0.5" />
              <div>
                <strong className="text-gray-900">Appointment Scheduling:</strong> Sessions
                must be booked through our official platform or customer support channel.
                You will receive confirmation via email and/or WhatsApp.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#10793f] shrink-0 mt-0.5" />
              <div>
                <strong className="text-gray-900">Rescheduling &amp; Cancellations:</strong> We
                request at least 12 hours advance notice for rescheduling consultation sessions
                to accommodate our clinical staff schedule.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#10793f] shrink-0 mt-0.5" />
              <div>
                <strong className="text-gray-900">Accurate Patient Disclosure:</strong> You agree
                to provide truthful, complete, and accurate information regarding your age,
                weight, medical history, medications, allergies, and dietary habits to ensure safe
                nutrition prescription.
              </div>
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "intellectual-property",
      title: "4. Intellectual Property & Tool Proprietary Rights",
      icon: FileText,
      content: (
        <>
          <p className="text-gray-700 leading-relaxed mb-4">
            All content on DietNexa, including but not limited to text, graphics, logos, images,
            curated meal plan templates, calculation engines, and interactive calculators, is the
            exclusive property of DietNexa and is protected by copyright, trademark, and
            intellectual property laws.
          </p>
          <p className="text-gray-700 leading-relaxed">
            You may not scrape, reproduce, reverse engineer, distribute, or create derivative
            works from our calculator algorithms or content without prior written permission from
            DietNexa management.
          </p>
        </>
      ),
    },
    {
      id: "payments-refunds",
      title: "5. Pricing, Payments & Refund Policy",
      icon: CreditCard,
      content: (
        <>
          <p className="text-gray-700 leading-relaxed mb-4">
            All prices for consultations, diet charts, and personalized packages are quoted in
            Indian Rupees (INR) unless otherwise specified.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-4">
            <div className="p-4 rounded-xl bg-[#edf8f1] border border-[#d2edd9]">
              <div className="font-bold text-[#0c3820] text-sm mb-1">
                Transparent Pricing
              </div>
              <div className="text-xs text-gray-700 leading-relaxed">
                Consultation charges are disclosed upfront prior to session confirmation with no
                hidden clinical fees.
              </div>
            </div>
            <div className="p-4 rounded-xl bg-[#edf8f1] border border-[#d2edd9]">
              <div className="font-bold text-[#0c3820] text-sm mb-1">
                Refund Assessment
              </div>
              <div className="text-xs text-gray-700 leading-relaxed">
                If a consultation is cancelled by DietNexa due to unforeseen practitioner unavailability,
                a 100% refund or priority reschedule is guaranteed.
              </div>
            </div>
          </div>
        </>
      ),
    },
    {
      id: "limitation-liability",
      title: "6. Limitation of Liability",
      icon: ShieldAlert,
      content: (
        <>
          <p className="text-gray-700 leading-relaxed mb-4">
            To the maximum extent permitted by applicable law, DietNexa, its officers, dietitians,
            and affiliates shall not be liable for any indirect, incidental, special, or consequential
            damages resulting from the use or inability to use our tools, diet plans, or nutritional
            recommendations.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Nutritional responses vary among individuals. DietNexa does not guarantee specific
            numerical weight loss or biometric outcomes within arbitrary timeframes, as clinical
            progress depends on individual metabolic genetics, adherence, sleep, and physical activity.
          </p>
        </>
      ),
    },
    {
      id: "governing-law",
      title: "7. Governing Law & Dispute Resolution",
      icon: Scale,
      content: (
        <>
          <p className="text-gray-700 leading-relaxed mb-4">
            These Terms and any contractual disputes arising out of or related to your use of
            DietNexa shall be governed by and construed in accordance with the laws of India.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Any legal dispute, suit, or proceeding shall be subject to the exclusive jurisdiction
            of the competent courts located in <strong>Kolkata, West Bengal, India</strong>.
          </p>
          <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 text-xs sm:text-sm text-gray-700">
            <strong>Contact Support:</strong> For legal notices or queries regarding these Terms,
            please email{" "}
            <a href="mailto:support@dietnexa.com" className="text-[#10793f] font-semibold hover:underline">
              support@dietnexa.com
            </a>
            .
          </div>
        </>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col font-sans selection:bg-[#dcf2e3] selection:text-[#0b4728] relative overflow-x-hidden">
      <Navbar onOpenModal={handleOpenModal} />

      <main className="flex-1">
        {/* Hero Banner with Greenhouse Bokeh Background */}
        <section className="relative overflow-hidden pt-8 pb-10 lg:pt-12 lg:pb-14 border-b border-gray-100">
          <div className="absolute inset-0 z-0">
            <Image
              src="/image/serene-greenhouse-bokeh-background.webp"
              alt="DietNexa Background"
              fill
              priority
              unoptimized
              className="object-cover object-center"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(90deg, rgba(243, 250, 245, 0.98) 0%, rgba(247, 252, 249, 0.94) 50%, rgba(240, 250, 243, 0.85) 100%)",
              }}
            />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-xs sm:text-sm text-gray-500 mb-4">
              <Link href="/" className="hover:text-[#10793f] transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
              <span className="text-gray-800 font-semibold">Terms &amp; Conditions</span>
            </nav>

            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-200 bg-white/90 shadow-2xs mb-4">
              <Scale className="w-4 h-4 text-[#10793f]" />
              <span className="text-xs font-bold text-gray-800 tracking-tight">
                User Agreement &amp; Service Terms
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0c3820] mb-3">
              Terms &amp; Conditions
            </h1>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl leading-relaxed">
              Please review these terms governing the use of DietNexa services, online dietary
              calculators, and certified dietitian consultations.
            </p>
            <p className="text-xs text-gray-500 mt-2 font-medium">
              Last Updated: January 2026 • Effective Date: January 1, 2026
            </p>
          </div>
        </section>

        {/* Content Section with Sticky Sidebar & Clean Typography */}
        <section className="py-10 lg:py-16 bg-[#fcfdfc]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              {/* Quick Navigation Sidebar */}
              <aside className="lg:col-span-4 hidden lg:block">
                <div className="sticky top-28 p-6 rounded-2xl bg-white border border-gray-200/90 shadow-xs space-y-4">
                  <div className="text-xs font-bold uppercase tracking-wider text-gray-500">
                    Table of Contents
                  </div>
                  <nav className="space-y-1.5">
                    {sections.map((sec) => (
                      <a
                        key={sec.id}
                        href={`#${sec.id}`}
                        className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs sm:text-sm text-gray-600 hover:text-[#10793f] hover:bg-[#edf8f1] transition-all font-medium"
                      >
                        <ChevronRight className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                        <span>{sec.title}</span>
                      </a>
                    ))}
                  </nav>

                  <div className="pt-4 border-t border-gray-100">
                    <div className="text-xs text-gray-600 mb-3">
                      Ready to consult a licensed clinical nutritionist?
                    </div>
                    <button
                      onClick={() => handleOpenModal("consultation")}
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full text-xs font-bold text-white bg-[#10793f] hover:bg-[#0c6132] transition-colors cursor-pointer shadow-xs"
                    >
                      <span>Book Consultation</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </aside>

              {/* Main Terms Articles */}
              <div className="lg:col-span-8 space-y-8">
                {sections.map((sec) => {
                  const Icon = sec.icon;
                  return (
                    <article
                      key={sec.id}
                      id={sec.id}
                      className="p-6 sm:p-8 rounded-2xl bg-white border border-gray-200/80 shadow-xs transition-shadow hover:shadow-sm"
                    >
                      <div className="flex items-center gap-3 mb-4 pb-3 border-b border-gray-100">
                        <div className="w-9 h-9 rounded-xl bg-[#edf8f1] text-[#10793f] flex items-center justify-center shrink-0">
                          <Icon className="w-5 h-5" />
                        </div>
                        <h2 className="text-lg sm:text-xl font-bold text-[#0c3820]">
                          {sec.title}
                        </h2>
                      </div>
                      <div className="text-sm sm:text-base">{sec.content}</div>
                    </article>
                  );
                })}

                {/* Bottom Trust Note */}
                <div className="p-6 rounded-2xl bg-[#edf8f1] border border-[#cbe6d4] flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <h3 className="font-bold text-[#0c3820] text-base mb-1">
                      Have questions regarding our service terms?
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-700">
                      Our support team is happy to assist you with any questions.
                    </p>
                  </div>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold text-white bg-[#10793f] hover:bg-[#0c6132] transition-colors cursor-pointer shrink-0 shadow-xs"
                  >
                    <span>Contact Us</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
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

