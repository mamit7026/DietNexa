"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  const isAbout = pathname === "/about";

  return (
    <footer id="about" className="bg-[#07361e] text-white pt-12 pb-8 border-t border-[#0b4728]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top 5-Column Grid Matching Reference Design */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-6 pb-10 border-b border-[#0f4f2c]">
          
          {/* Column 1: Brand Logo & Tagline */}
          <div className="flex flex-col items-start sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block relative w-48 h-12 mb-3">
              <Image
                src="/image/dietnexa-white-logo.webp"
                alt="DietNexa - Your Health, Our Nutrition Expertise"
                fill
                unoptimized
                priority
                className="object-contain object-left hover:opacity-90 transition-opacity"
              />
            </Link>
            <p className="text-xs text-emerald-100/70 leading-relaxed max-w-[220px]">
              Your Health, Our Nutrition Expertise. Evidence-based diet plans and clinical consultations for lifelong wellness.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-sm font-bold tracking-wider text-white uppercase mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm text-emerald-100/80">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/dietitians" className="hover:text-white transition-colors">
                  Dietitians
                </Link>
              </li>
              <li>
                <Link href="/tools" className="hover:text-white transition-colors">
                  Tools &amp; Calculators
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className={
                    isAbout
                      ? "text-[#4ade80] font-semibold hover:text-white transition-colors"
                      : "hover:text-white transition-colors"
                  }
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Our Services */}
          <div>
            <h3 className="text-sm font-bold tracking-wider text-white uppercase mb-4">
              Our Services
            </h3>
            <ul className="space-y-2.5 text-sm text-emerald-100/80">
              <li>
                <Link href="/services/weight-loss" className="hover:text-white transition-colors">
                  Weight Loss Management
                </Link>
              </li>
              <li>
                <Link href="/services/disease-management" className="hover:text-white transition-colors">
                  Disease Management
                </Link>
              </li>
              <li>
                <Link href="/services/sports-nutrition" className="hover:text-white transition-colors">
                  Sports Nutrition
                </Link>
              </li>
              <li>
                <Link href="/services/general-wellness" className="hover:text-white transition-colors">
                  General Wellness
                </Link>
              </li>
              <li>
                <Link href="/services/child-teen-nutrition" className="hover:text-white transition-colors">
                  Child &amp; Teen Nutrition
                </Link>
              </li>
              <li>
                <Link href="/services/pregnancy-nutrition" className="hover:text-white transition-colors">
                  Pregnancy &amp; Lactation
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Resources */}
          <div>
            <h3 className="text-sm font-bold tracking-wider text-white uppercase mb-4">
              Resources
            </h3>
            <ul className="space-y-2.5 text-sm text-emerald-100/80">
              <li>
                <Link href="/tools" className="hover:text-white transition-colors">
                  Nutrition Tools
                </Link>
              </li>
              <li>
                <Link href="/tools" className="hover:text-white transition-colors">
                  Nutrition Blog
                </Link>
              </li>
              <li>
                <Link href="/tools" className="hover:text-white transition-colors">
                  Diet Charts
                </Link>
              </li>
              <li>
                <Link href="/services/general-wellness" className="hover:text-white transition-colors">
                  Health Guides
                </Link>
              </li>
              <li>
                <Link href="/#reviews" className="hover:text-white transition-colors">
                  Success Stories
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  FAQs &amp; Help
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Contact Us & Follow Us */}
          <div className="flex flex-col">
            <h3 className="text-sm font-bold tracking-wider text-white uppercase mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-emerald-100/85 mb-5">
              <li className="flex items-start gap-2.5">
                <svg
                  className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>Nandakumar, West Bengal, India 721632</span>
              </li>

              <li>
                <a
                  href="mailto:support@dietnexa.com"
                  className="flex items-center gap-2.5 hover:text-white transition-colors"
                >
                  <svg
                    className="w-4 h-4 text-emerald-400 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span>support@dietnexa.com</span>
                </a>
              </li>

              <li>
                <a
                  href="tel:+917319328962"
                  className="flex items-center gap-2.5 hover:text-white transition-colors"
                >
                  <svg
                    className="w-4 h-4 text-emerald-400 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span>+91 7319328962</span>
                </a>
              </li>
            </ul>

            {/* Follow Us Subheading and Social Icons */}
            <div className="mt-auto">
              <h4 className="text-xs font-bold tracking-wider text-white uppercase mb-2.5">
                Follow Us
              </h4>
              <div className="flex items-center gap-2.5">
                {/* Instagram */}
                <a
                  href="https://instagram.com/dietnexa"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="w-8 h-8 rounded-full bg-[#0d4728] hover:bg-[#136137] border border-[#145b34] flex items-center justify-center text-emerald-200 hover:text-white transition-all cursor-pointer"
                >
                  <svg className="w-3.5 h-3.5 fill-currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>

                {/* Facebook */}
                <a
                  href="https://facebook.com/dietnexa"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="w-8 h-8 rounded-full bg-[#0d4728] hover:bg-[#136137] border border-[#145b34] flex items-center justify-center text-emerald-200 hover:text-white transition-all cursor-pointer"
                >
                  <svg className="w-3.5 h-3.5 fill-currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a>

                {/* YouTube */}
                <a
                  href="https://youtube.com/@dietnexa"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="YouTube"
                  className="w-8 h-8 rounded-full bg-[#0d4728] hover:bg-[#136137] border border-[#145b34] flex items-center justify-center text-emerald-200 hover:text-white transition-all cursor-pointer"
                >
                  <svg className="w-3.5 h-3.5 fill-currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com/company/dietnexa"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="w-8 h-8 rounded-full bg-[#0d4728] hover:bg-[#136137] border border-[#145b34] flex items-center justify-center text-emerald-200 hover:text-white transition-all cursor-pointer"
                >
                  <svg className="w-3.5 h-3.5 fill-currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.761-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal Links */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-emerald-100/70 gap-3">
          <p>© 2026 DietNexa. All Rights Reserved.</p>
          <div className="flex items-center gap-4 sm:gap-6 font-medium">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span className="text-emerald-100/40">|</span>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms &amp; Conditions
            </Link>
            <span className="text-emerald-100/40">|</span>
            <Link href="/contact" className="hover:text-white transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
