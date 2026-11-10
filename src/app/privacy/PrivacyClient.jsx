"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ConsultationModal from "@/components/ConsultationModal";
import {
  ShieldCheck,
  Lock,
  FileText,
  UserCheck,
  Eye,
  Database,
  Mail,
  ChevronRight,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export default function PrivacyClient() {
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
      id: "introduction",
      title: "1. Introduction & Scope",
      icon: ShieldCheck,
      content: (
        <>
          <p className="text-gray-700 leading-relaxed mb-4">
            Welcome to <strong>DietNexa</strong> (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;).
            DietNexa is committed to protecting the privacy, confidentiality, and security
            of your personal and medical information. As a provider of scientific dietary
            guidance, nutritional calculators, and certified dietitian consultations, we
            treat your health data with the utmost discretion and care.
          </p>
          <p className="text-gray-700 leading-relaxed">
            This Privacy Policy explains how we collect, use, process, and safeguard your
            information when you visit our website (
            <Link href="/" className="text-[#10793f] underline font-medium">
              https://dietnexa.com
            </Link>
            ), interact with our 100+ dietary tools, or consult with our clinical dietitians.
          </p>
        </>
      ),
    },
    {
      id: "information-collected",
      title: "2. Information We Collect",
      icon: Database,
      content: (
        <>
          <p className="text-gray-700 leading-relaxed mb-4">
            To deliver personalized dietary plans and accurate nutritional assessments,
            we may collect the following categories of information:
          </p>
          <ul className="space-y-3.5 mb-4">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#10793f] shrink-0 mt-0.5" />
              <div>
                <strong className="text-gray-900">Personal Contact Details:</strong> Name,
                email address, phone number, city, and state when you register, book a consultation,
                or submit an inquiry.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#10793f] shrink-0 mt-0.5" />
              <div>
                <strong className="text-gray-900">Health &amp; Dietary Information:</strong> Age,
                gender, height, weight, activity levels, dietary preferences (vegetarian, vegan, non-vegetarian),
                food allergies, metabolic goals, and voluntary medical conditions (e.g., diabetes, PCOS, thyroid, hypertension)
                provided during consultations or meal plan creation.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#10793f] shrink-0 mt-0.5" />
              <div>
                <strong className="text-gray-900">Nutritional Tool Inputs:</strong> Anonymous or
                user-entered metrics (e.g., BMI, caloric intake, macro splits, hydration requirements)
                processed locally in your browser to generate instant health estimates.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#10793f] shrink-0 mt-0.5" />
              <div>
                <strong className="text-gray-900">Technical &amp; Usage Data:</strong> Browser
                type, device identifiers, IP address, page views, and navigation patterns
                collected via secure analytics to improve website performance and user experience.
              </div>
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "use-of-data",
      title: "3. How We Use Your Information",
      icon: UserCheck,
      content: (
        <>
          <p className="text-gray-700 leading-relaxed mb-4">
            We use your personal and nutritional data strictly for legitimate clinical,
            operational, and analytical purposes:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-4">
            <div className="p-4 rounded-xl bg-[#edf8f1] border border-[#d2edd9]">
              <div className="font-bold text-[#0c3820] text-sm mb-1">
                Clinical Consultations
              </div>
              <div className="text-xs text-gray-700 leading-relaxed">
                Empowering assigned certified dietitians to curate individualized, safe,
                and sustainable nutrition plans.
              </div>
            </div>
            <div className="p-4 rounded-xl bg-[#edf8f1] border border-[#d2edd9]">
              <div className="font-bold text-[#0c3820] text-sm mb-1">
                Progress Tracking
              </div>
              <div className="text-xs text-gray-700 leading-relaxed">
                Monitoring body composition changes, caloric adherence, and biometric
                improvements across consultation cycles.
              </div>
            </div>
            <div className="p-4 rounded-xl bg-[#edf8f1] border border-[#d2edd9]">
              <div className="font-bold text-[#0c3820] text-sm mb-1">
                Customer Support
              </div>
              <div className="text-xs text-gray-700 leading-relaxed">
                Responding promptly to inquiries, scheduling reminders, and technical
                assistance requests.
              </div>
            </div>
            <div className="p-4 rounded-xl bg-[#edf8f1] border border-[#d2edd9]">
              <div className="font-bold text-[#0c3820] text-sm mb-1">
                Service Improvements
              </div>
              <div className="text-xs text-gray-700 leading-relaxed">
                Enhancing calculation algorithms, tool precision, and educational
                nutrition content.
              </div>
            </div>
          </div>
        </>
      ),
    },
    {
      id: "medical-confidentiality",
      title: "4. Medical Data Protection & Confidentiality",
      icon: Lock,
      content: (
        <>
          <div className="p-4 sm:p-5 rounded-2xl bg-[#0c3820] text-white mb-5 shadow-sm">
            <div className="flex items-center gap-2.5 font-bold text-emerald-300 text-sm sm:text-base mb-2">
              <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
              <span>Zero-Sale Policy for Health Records</span>
            </div>
            <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed">
              DietNexa <strong>never sells, rents, or commercializes</strong> your personal
              medical records, dietary history, or consultation notes to third-party advertisers,
              pharmaceutical companies, or data brokers.
            </p>
          </div>
          <p className="text-gray-700 leading-relaxed mb-3">
            Health and dietary information you provide during clinical consultations is treated
            as privileged patient-practitioner communication. Access is restricted strictly to
            authorized dietitians directly involved in your nutritional care.
          </p>
          <p className="text-gray-700 leading-relaxed">
            All data transmitted between your browser and our servers is secured using
            modern 256-bit Transport Layer Security (TLS/SSL) encryption.
          </p>
        </>
      ),
    },
    {
      id: "cookies",
      title: "5. Cookies & Tracking Technologies",
      icon: Eye,
      content: (
        <>
          <p className="text-gray-700 leading-relaxed mb-4">
            DietNexa uses essential cookies and aggregated analytics to remember user
            preferences (such as metric vs. imperial units in calculators) and maintain
            secure sessions.
          </p>
          <p className="text-gray-700 leading-relaxed">
            You may modify your browser settings to decline or delete cookies at any time.
            Note that disabling functional cookies may prevent certain interactive tools
            from remembering your previous calculation values.
          </p>
        </>
      ),
    },
    {
      id: "user-rights",
      title: "6. Your Privacy Rights & Data Control",
      icon: FileText,
      content: (
        <>
          <p className="text-gray-700 leading-relaxed mb-4">
            Depending on your jurisdiction and applicable data protection regulations, you
            hold the following rights regarding your personal information:
          </p>
          <ul className="space-y-2.5 text-gray-700 text-sm mb-4">
            <li className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-[#10793f] shrink-0" />
              <span><strong>Right to Access:</strong> Request a copy of your stored profile and dietary records.</span>
            </li>
            <li className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-[#10793f] shrink-0" />
              <span><strong>Right to Rectification:</strong> Request correction of incomplete or outdated health details.</span>
            </li>
            <li className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-[#10793f] shrink-0" />
              <span><strong>Right to Erasure:</strong> Request the deletion of your account and associated consultations.</span>
            </li>
            <li className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-[#10793f] shrink-0" />
              <span><strong>Right to Opt-Out:</strong> Unsubscribe from non-essential communications with one click.</span>
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "contact-privacy",
      title: "7. Contact Our Data Protection Team",
      icon: Mail,
      content: (
        <>
          <p className="text-gray-700 leading-relaxed mb-4">
            If you have questions, concerns, or requests regarding this Privacy Policy or
            our data protection practices, please contact our designated privacy officer:
          </p>
          <div className="p-5 rounded-2xl bg-white border border-gray-200 shadow-xs space-y-2 text-sm text-gray-700">
            <div>
              <strong className="text-gray-900">DietNexa Privacy &amp; Compliance Team</strong>
            </div>
            <div>
              Email:{" "}
              <a
                href="mailto:support@dietnexa.com"
                className="text-[#10793f] font-semibold hover:underline"
              >
                support@dietnexa.com
              </a>{" "}
              (or{" "}
              <a
                href="mailto:privacy@dietnexa.com"
                className="text-[#10793f] font-semibold hover:underline"
              >
                privacy@dietnexa.com
              </a>
              )
            </div>
            <div>Location: Kolkata, West Bengal, India</div>
            <div>Phone: +91 98765 43210 / +91 7319328962</div>
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
              src="/image/Serene Greenhouse Bokeh Background.png"
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
              <span className="text-gray-800 font-semibold">Privacy Policy</span>
            </nav>

            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-200 bg-white/90 shadow-2xs mb-4">
              <ShieldCheck className="w-4 h-4 text-[#10793f]" />
              <span className="text-xs font-bold text-gray-800 tracking-tight">
                Data Protection &amp; Patient Privacy
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0c3820] mb-3">
              Privacy Policy
            </h1>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl leading-relaxed">
              We are dedicated to safeguarding your personal health, dietary information, and
              consultation confidentiality with industry-standard security.
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
                      Need custom diet assistance or have confidentiality questions?
                    </div>
                    <button
                      onClick={() => handleOpenModal("consultation")}
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full text-xs font-bold text-white bg-[#10793f] hover:bg-[#0c6132] transition-colors cursor-pointer shadow-xs"
                    >
                      <span>Consult a Dietitian</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </aside>

              {/* Main Policy Articles */}
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
                      Ready to start your personalized nutrition plan?
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-700">
                      Connect 1-on-1 with certified clinical dietitians in complete privacy.
                    </p>
                  </div>
                  <button
                    onClick={() => handleOpenModal("consultation")}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold text-white bg-[#10793f] hover:bg-[#0c6132] transition-colors cursor-pointer shrink-0 shadow-xs"
                  >
                    <span>Book Consultation</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
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

