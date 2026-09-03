"use client";

import React, { useState } from "react";
import { ChevronDown, Menu, X, Building2 } from "lucide-react";

export function Navbar({
  scrollToSection,
}: {
  scrollToSection: (id: string) => void;
}) {
  const [pagesDropdownOpen, setPagesDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#f0f1f7]">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 h-[88px] sm:h-[94px] flex items-center justify-between">
        {/* Left: Codegnan Brand Logo */}
        <div className="flex items-center gap-8 lg:gap-10">
          <a
            href="/"
            className="flex items-center group py-1"
            aria-label="Codegnan Lab Home"
          >
            <img
              src="/codegnan_lab.png"
              alt="Codegnan Lab"
              className="h-12 sm:h-14 lg:h-[60px] w-auto object-contain transition-transform group-hover:scale-105"
            />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-[14px] font-semibold text-[#606482]">
            <a
              href="#"
              className="text-[#304ffe] font-bold transition-colors hover:text-[#253bdf]"
            >
              Home
            </a>

            <a
              href="#experiences"
              className="hover:text-[#304ffe] transition-colors"
            >
              Experiences
            </a>

            <a
              href="#tech-tracks"
              className="hover:text-[#304ffe] transition-colors"
            >
              Tracks
            </a>

            <a
              href="#for-colleges"
              className="hover:text-[#304ffe] transition-colors"
            >
              For Colleges
            </a>

            <a
              href="#how-it-works"
              className="hover:text-[#304ffe] transition-colors"
            >
              How It Works
            </a>

            <a
              href="#mentors"
              className="hover:text-[#304ffe] transition-colors"
            >
              Mentors
            </a>

            <a
              href="/gallery"
              className="hover:text-[#304ffe] transition-colors"
            >
              Gallery
            </a>

            <a
              href="#faq"
              className="hover:text-[#304ffe] transition-colors"
            >
              FAQ
            </a>
          </nav>
        </div>

        {/* Right Action Items: Primary Campus CTA Button */}
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={() => scrollToSection("campus-enquiry")}
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 bg-[#304ffe] hover:bg-[#253bdf] text-white text-[12px] font-bold uppercase tracking-[0.08em] rounded-[6px] shadow-[0_6px_18px_rgba(48,79,254,0.25)] transition-all hover:-translate-y-0.5"
          >
            <Building2 className="w-3.5 h-3.5" />
            <span>BRING TO CAMPUS</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#0d1033] hover:text-[#304ffe]"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#f0f1f7] bg-white px-6 py-5 space-y-3.5 shadow-lg">
          <a
            href="#"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-bold text-[#304ffe]"
          >
            Home
          </a>
          <a
            href="#experiences"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold text-[#606482]"
          >
            Three Experiences (Workshops / Bootcamps / Hackathons)
          </a>
          <a
            href="#tech-tracks"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold text-[#606482]"
          >
            Technology Tracks
          </a>
          <a
            href="#for-colleges"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold text-[#606482]"
          >
            For Colleges (Duration Matrix)
          </a>
          <a
            href="#how-it-works"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold text-[#606482]"
          >
            How It Works
          </a>
          <a
            href="#why-us"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold text-[#606482]"
          >
            Why Codegnan Labs
          </a>
          <a
            href="#mentors"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold text-[#606482]"
          >
            Top Notch Teams &amp; Mentors
          </a>
          <a
            href="/gallery"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold text-[#606482]"
          >
            Past Labs &amp; Gallery
          </a>
          <a
            href="#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold text-[#606482]"
          >
            FAQs
          </a>
          <button
            type="button"
            onClick={() => {
              setMobileMenuOpen(false);
              scrollToSection("campus-enquiry");
            }}
            className="w-full py-3 bg-[#304ffe] text-white text-xs font-bold uppercase tracking-wider rounded-md mt-2 flex items-center justify-center gap-2"
          >
            <Building2 className="w-4 h-4" />
            <span>BRING TO YOUR CAMPUS</span>
          </button>
        </div>
      )}
    </header>
  );
}
