"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer id="about" className="bg-[#07361e] text-white pt-10 pb-8 border-t border-[#0b4728]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-8 border-b border-[#0f4f2c]">
          {/* Column 1: Brand Info (col-span-4) */}
          <div className="lg:col-span-4 flex flex-col items-start">
            {/* White Logo */}
            <div className="relative w-48 h-12 mb-4">
              <Image
                src="/image/DietNexa White Logo.png"
                alt="DietNexa - Your Health, Our Nutrition Expertise"
                fill
                unoptimized
                priority
                className="object-contain object-left"
              />
            </div>

            <p className="text-sm text-emerald-100/80 leading-relaxed mb-6 max-w-sm">
              Your trusted partner for personalized nutrition, expert dietitian consultation, and long-term wellness.
            </p>

            {/* Social Icons (SVGs) */}
            <div className="flex items-center gap-3">
              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-[#0d4728] hover:bg-[#136137] border border-[#145b34] flex items-center justify-center text-emerald-200 hover:text-white transition-all cursor-pointer"
              >
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-[#0d4728] hover:bg-[#136137] border border-[#145b34] flex items-center justify-center text-emerald-200 hover:text-white transition-all cursor-pointer"
              >
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 rounded-full bg-[#0d4728] hover:bg-[#136137] border border-[#145b34] flex items-center justify-center text-emerald-200 hover:text-white transition-all cursor-pointer"
              >
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full bg-[#0d4728] hover:bg-[#136137] border border-[#145b34] flex items-center justify-center text-emerald-200 hover:text-white transition-all cursor-pointer"
              >
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.761-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (col-span-2) */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-bold tracking-wider text-white uppercase mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm text-emerald-100/75">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/#dietitians" className="hover:text-white transition-colors">
                  Dietitians
                </Link>
              </li>
              <li>
                <Link href="/#why-dietnexa" className="hover:text-white transition-colors">
                  Plans
                </Link>
              </li>
              <li>
                <Link href="/#about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services (col-span-2) */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-bold tracking-wider text-white uppercase mb-4">
              Services
            </h3>
            <ul className="space-y-2.5 text-sm text-emerald-100/75">
              <li>
                <Link href="/#services" className="hover:text-white transition-colors">
                  Weight Loss
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-white transition-colors">
                  Disease Management
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-white transition-colors">
                  Sports Nutrition
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-white transition-colors">
                  Pregnancy Nutrition
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-white transition-colors">
                  General Wellness
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Resources (col-span-2) */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-bold tracking-wider text-white uppercase mb-4">
              Resources
            </h3>
            <ul className="space-y-2.5 text-sm text-emerald-100/75">
              <li>
                <Link href="/#reviews" className="hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/#reviews" className="hover:text-white transition-colors">
                  Nutrition Guides
                </Link>
              </li>
              <li>
                <Link href="/#faqs" className="hover:text-white transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/#reviews" className="hover:text-white transition-colors">
                  Success Stories
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Get the App (col-span-2) */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-bold tracking-wider text-white uppercase mb-4">
              Get the App
            </h3>
            <div className="flex flex-col gap-3">
              {/* App Store button */}
              <a
                href="#download-ios"
                className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-black/40 hover:bg-black/60 border border-emerald-800/80 transition-all hover:scale-[1.02]"
              >
                <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.84c.62-.75 1.04-1.8 0.93-2.84-.89.04-1.98.6-2.62 1.34-.57.65-1.07 1.71-.93 2.72.99.08 2-.47 2.62-1.22z"/>
                </svg>
                <div className="text-left">
                  <div className="text-[10px] uppercase tracking-wider text-gray-300 leading-none">Download on the</div>
                  <div className="text-xs font-bold text-white leading-tight">App Store</div>
                </div>
              </a>

              {/* Google Play button */}
              <a
                href="#download-android"
                className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-black/40 hover:bg-black/60 border border-emerald-800/80 transition-all hover:scale-[1.02]"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M3.6 1.4L13.8 11.6 3.6 21.8C3.2 21.3 3 20.7 3 20V3.2C3 2.5 3.2 1.9 3.6 1.4z"/>
                  <path fill="#FBBC05" d="M17.3 8.1L13.8 11.6 17.3 15.1 20.3 13.4C21.2 12.9 21.2 11.9 20.3 11.4L17.3 8.1z"/>
                  <path fill="#EA4335" d="M13.8 11.6L3.6 1.4C4.1 0.9 4.9 0.7 5.7 1.2L17.3 8.1 13.8 11.6z"/>
                  <path fill="#34A853" d="M17.3 15.1L5.7 22C4.9 22.5 4.1 22.3 3.6 21.8L13.8 11.6 17.3 15.1z"/>
                </svg>
                <div className="text-left">
                  <div className="text-[10px] uppercase tracking-wider text-gray-300 leading-none">Get it on</div>
                  <div className="text-xs font-bold text-white leading-tight">Google Play</div>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-emerald-100/60 gap-4">
          <p>© 2026 DietNexa. All rights reserved.</p>
          <div className="flex items-center gap-4 sm:gap-6">
            <Link href="/#privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span>|</span>
            <Link href="/#terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <span>|</span>
            <Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
