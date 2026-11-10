"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ConsultationModal from "@/components/ConsultationModal";
import {
  Compass,
  Search,
  ChevronRight,
  FileText,
  Activity,
  Calculator,
  Shield,
  ExternalLink,
  Sparkles,
} from "lucide-react";

export default function SitemapClient({ tools = [], categories = [] }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState("consultation");
  const [searchQuery, setSearchQuery] = useState("");

  const handleOpenModal = (type = "consultation") => {
    setModalType(type);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  // Static site categories
  const mainPages = [
    { name: "Home", href: "/", desc: "DietNexa homepage and personalized nutrition overview" },
    { name: "Certified Dietitians", href: "/dietitians", desc: "Meet our accredited clinical nutritionists" },
    { name: "Tools & Calculators Directory", href: "/tools", desc: "100 free scientific health calculators" },
    { name: "About Us", href: "/about", desc: "Our evidence-based medical philosophy and mission" },
    { name: "Contact Us", href: "/contact", desc: "Consultation desk, helpline, and clinic details" },
  ];

  const servicePages = [
    { name: "Weight Loss Management", href: "/services/weight-loss", desc: "Metabolic and fat-loss protocols" },
    { name: "Disease Management", href: "/services/disease-management", desc: "Diabetes, PCOS, Thyroid, and Cardiac therapy" },
    { name: "Sports Nutrition", href: "/services/sports-nutrition", desc: "Athletic performance and muscle hypertrophy" },
    { name: "General Wellness", href: "/services/general-wellness", desc: "Energy, gut health, and longevity counseling" },
    { name: "Child & Teen Nutrition", href: "/services/child-teen-nutrition", desc: "Growth curves, immunity, and picky eating" },
    { name: "Pregnancy & Lactation", href: "/services/pregnancy-nutrition", desc: "Trimester-specific maternal and fetal nourishment" },
  ];

  const legalPages = [
    { name: "Privacy Policy", href: "/privacy", desc: "Data protection and HIPAA/GDPR health compliance" },
    { name: "Terms & Conditions", href: "/terms", desc: "Platform terms, medical disclaimers, and service rules" },
    { name: "Cancellation & Refund Policy", href: "/refund-policy", desc: "Consultation cancellation, reschedule, and refund rules" },
    { name: "XML Machine Sitemap", href: "/sitemap.xml", desc: "XML feed for Google, Bing, and search crawlers", external: true },
    { name: "LLM Context Index", href: "/llms.txt", desc: "Structured index for ChatGPT, Perplexity, Claude, and Gemini", external: true },
  ];

  // Filter tools based on search
  const filteredTools = useMemo(() => {
    if (!searchQuery.trim()) return tools;
    const q = searchQuery.toLowerCase();
    return tools.filter(
      (t) =>
        t.name?.toLowerCase().includes(q) ||
        t.description?.toLowerCase().includes(q) ||
        t.category?.toLowerCase().includes(q)
    );
  }, [tools, searchQuery]);

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
              <span className="text-white font-medium">Sitemap</span>
            </div>

            <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mx-auto mb-4 text-emerald-300">
              <Compass className="w-6 h-6" />
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
              DietNexa Sitemap &amp; Directory
            </h1>
            <p className="text-sm sm:text-base text-emerald-100/90 max-w-2xl mx-auto leading-relaxed mb-6">
              Navigate all pages, clinical nutrition therapy programs, and over 100 evidence-based health calculators in one unified directory.
            </p>

            {/* Quick Search */}
            <div className="max-w-md mx-auto relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search calculators or pages..."
                className="w-full bg-white/15 text-white placeholder-emerald-200/70 text-sm px-4 py-3 pl-10 rounded-2xl border border-white/25 focus:outline-none focus:ring-2 focus:ring-[#4ade80] backdrop-blur-sm"
              />
              <Search className="w-4 h-4 text-emerald-200 absolute left-3.5 top-3.5" />
            </div>
          </div>
        </section>

        {/* Directory Content */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12">
          
          {/* Section 1: Main Pages */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-emerald-100 text-[#10793f] flex items-center justify-center">
                <Compass className="w-4 h-4" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                Core Website Pages
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {mainPages.map((page) => (
                <Link
                  key={page.href}
                  href={page.href}
                  className="p-5 rounded-2xl bg-white border border-gray-100 shadow-sm hover:border-emerald-300 hover:shadow-md transition-all group flex flex-col justify-between"
                >
                  <div>
                    <h3 className="font-bold text-gray-900 group-hover:text-[#10793f] transition-colors text-base mb-1 flex items-center justify-between">
                      <span>{page.name}</span>
                      <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-[#10793f] group-hover:translate-x-1 transition-all" />
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {page.desc}
                    </p>
                  </div>
                  <div className="text-[11px] text-[#10793f] font-mono mt-3">
                    {page.href}
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Section 2: Clinical Services */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-emerald-100 text-[#10793f] flex items-center justify-center">
                <Activity className="w-4 h-4" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                Clinical Nutrition Services
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {servicePages.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="p-5 rounded-2xl bg-white border border-gray-100 shadow-sm hover:border-emerald-300 hover:shadow-md transition-all group flex flex-col justify-between"
                >
                  <div>
                    <h3 className="font-bold text-gray-900 group-hover:text-[#10793f] transition-colors text-base mb-1 flex items-center justify-between">
                      <span>{service.name}</span>
                      <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-[#10793f] group-hover:translate-x-1 transition-all" />
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                  <div className="text-[11px] text-[#10793f] font-mono mt-3">
                    {service.href}
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Section 3: 100+ Health & Nutrition Calculators */}
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 text-[#10793f] flex items-center justify-center">
                  <Calculator className="w-4 h-4" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                    Nutrition &amp; Dietary Calculators ({filteredTools.length})
                  </h2>
                  <p className="text-xs text-gray-600">
                    Evidence-based clinical formulas certified by registered dietitians.
                  </p>
                </div>
              </div>

              <Link
                href="/tools"
                className="text-xs font-bold text-[#10793f] hover:underline inline-flex items-center gap-1"
              >
                Browse Interactive Directory <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-gray-100 shadow-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {filteredTools.map((tool) => (
                  <Link
                    key={tool.slug}
                    href={`/tools/${tool.slug}`}
                    className="p-3 rounded-xl border border-gray-100 hover:border-emerald-200 hover:bg-emerald-50/40 transition-colors group flex items-start gap-2"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-[#10793f] mt-1.5 shrink-0 group-hover:scale-125 transition-transform" />
                    <div className="overflow-hidden">
                      <span className="text-xs font-semibold text-gray-800 group-hover:text-[#10793f] transition-colors block truncate">
                        {tool.name}
                      </span>
                      <span className="text-[10px] text-gray-400 font-mono block truncate">
                        /tools/{tool.slug}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>

              {filteredTools.length === 0 && (
                <div className="text-center py-10 text-gray-500 text-sm">
                  No calculators matching &quot;{searchQuery}&quot;. Try another search term.
                </div>
              )}
            </div>
          </div>

          {/* Section 4: Legal, Compliance & Feeds */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-emerald-100 text-[#10793f] flex items-center justify-center">
                <Shield className="w-4 h-4" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                Legal, Privacy &amp; Data Feeds
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {legalPages.map((legal) => (
                <a
                  key={legal.href}
                  href={legal.href}
                  target={legal.external ? "_blank" : undefined}
                  rel={legal.external ? "noreferrer" : undefined}
                  className="p-5 rounded-2xl bg-white border border-gray-100 shadow-sm hover:border-emerald-300 hover:shadow-md transition-all group flex flex-col justify-between"
                >
                  <div>
                    <h3 className="font-bold text-gray-900 group-hover:text-[#10793f] transition-colors text-base mb-1 flex items-center justify-between">
                      <span>{legal.name}</span>
                      {legal.external ? (
                        <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-[#10793f] transition-all" />
                      ) : (
                        <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-[#10793f] group-hover:translate-x-1 transition-all" />
                      )}
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {legal.desc}
                    </p>
                  </div>
                  <div className="text-[11px] text-[#10793f] font-mono mt-3">
                    {legal.href}
                  </div>
                </a>
              ))}
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

