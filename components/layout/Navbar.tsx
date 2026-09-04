"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X, ArrowRight, Building2, Sparkles } from "lucide-react";

export function Navbar({
  scrollToSection,
}: {
  scrollToSection: (id: string) => void;
}) {
  const pathname = usePathname();
  const [pagesDropdownOpen, setPagesDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setPagesDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Scroll spy for home page sections
  useEffect(() => {
    if (pathname !== "/") return;

    const sections = [
      { id: "hero", navId: "home" },
      { id: "experiences", navId: "programs" },
      { id: "tech-tracks", navId: "pages" },
      { id: "cohort-explorer", navId: "pages" },
      { id: "campus-recommender", navId: "pages" },
      { id: "student-projects", navId: "pages" },
      { id: "why-us", navId: "about" },
      { id: "mentors", navId: "about" },
      { id: "faq", navId: "pages" },
      { id: "campus-enquiry", navId: "pages" },
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 160;

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i].id);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sections[i].navId);
            return;
          }
        }
      }
      setActiveSection("home");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const isHomeActive = pathname === "/" && activeSection === "home";
  const isProgramsActive = pathname === "/" && activeSection === "programs";
  const isGalleryActive = pathname === "/labs/gallery" || pathname === "/gallery";
  const isAboutActive = pathname === "/" && activeSection === "about";
  const isPagesActive =
    pathname.startsWith("/labs") ||
    (pathname === "/" && activeSection === "pages");

  const pageDropdownLinks = [
    { label: "What Students Build", href: "/#student-projects" },
    { label: "Design Your Campus Lab", href: "/#campus-recommender" },
    { label: "By Student Year (I–IV)", href: "/#cohort-explorer" },
    { label: "Campus Hackathons", href: "/labs/hackathons" },
    { label: "For Colleges (B2B Blueprint)", href: "/labs/colleges" },
    { label: "Mentors & Leaders", href: "/#mentors" },
    { label: "Campus FAQs", href: "/#faq" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms-of-service" },
  ];

  const handleLinkClick = (sectionId: string, e: React.MouseEvent) => {
    setMobileMenuOpen(false);
    setPagesDropdownOpen(false);

    if (pathname === "/") {
      if (sectionId === "home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        setActiveSection("home");
      } else {
        const el = document.getElementById(sectionId);
        if (el) {
          e.preventDefault();
          el.scrollIntoView({ behavior: "smooth" });
          setActiveSection(sectionId === "experiences" ? "programs" : sectionId === "why-us" ? "about" : "pages");
        }
      }
    }
  };

  const handleCtaClick = () => {
    setMobileMenuOpen(false);
    if (pathname === "/") {
      scrollToSection("experiences");
      setActiveSection("programs");
    } else {
      window.location.href = "/#experiences";
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#f0f1f7]">
      <div className="max-w-[1360px] mx-auto px-5 sm:px-6 lg:px-8 h-[76px] sm:h-[84px] flex items-center justify-between gap-6">
        {/* Left: Brand Logo & Main Nav */}
        <div className="flex min-w-0 items-center gap-8 lg:gap-11">
          <Link
            href="/"
            className="flex items-center group py-1 shrink-0"
            aria-label="Codegnan Lab Home"
          >
            <img
              src="/codegnan_lab.png"
              alt="Codegnan Lab"
              className="h-10 sm:h-12 lg:h-[50px] w-auto object-contain transition-transform group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation Links matching Screenshot */}
          <nav className="hidden lg:flex items-center gap-7 xl:gap-8 whitespace-nowrap text-[15px] font-semibold text-[#0d1033]">
            {/* 1. Home */}
            <Link
              href="/"
              onClick={(e) => handleLinkClick("home", e)}
              className={`transition-colors py-1 ${
                isHomeActive
                  ? "text-[#304ffe] font-bold"
                  : "text-[#0d1033] hover:text-[#304ffe]"
              }`}
            >
              Home
            </Link>

            {/* 2. Pages Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setPagesDropdownOpen(!pagesDropdownOpen)}
                className={`flex items-center gap-1 transition-colors py-1 ${
                  isPagesActive
                    ? "text-[#304ffe] font-bold"
                    : "text-[#0d1033] hover:text-[#304ffe]"
                }`}
              >
                <span>Pages</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    pagesDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {pagesDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 rounded-2xl bg-white border border-[#e2e8f5] shadow-[0_16px_36px_rgba(20,24,68,0.12)] py-2 z-50 animate-in fade-in slide-in-from-top-2">
                  {pageDropdownLinks.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={(e) => {
                        setPagesDropdownOpen(false);
                        if (item.href.startsWith("/#") && pathname === "/") {
                          const id = item.href.replace("/#", "");
                          const el = document.getElementById(id);
                          if (el) {
                            e.preventDefault();
                            el.scrollIntoView({ behavior: "smooth" });
                            setActiveSection("pages");
                          }
                        }
                      }}
                      className="block px-4 py-2.5 text-xs font-semibold text-[#334155] hover:bg-[#f0f4ff] hover:text-[#304ffe] transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* 3. Programs */}
            <Link
              href="/#experiences"
              onClick={(e) => handleLinkClick("experiences", e)}
              className={`transition-colors py-1 ${
                isProgramsActive
                  ? "text-[#304ffe] font-bold"
                  : "text-[#0d1033] hover:text-[#304ffe]"
              }`}
            >
              Programs
            </Link>

            {/* 4. Gallery */}
            <Link
              href="/labs/gallery"
              className={`transition-colors py-1 ${
                isGalleryActive
                  ? "text-[#304ffe] font-bold"
                  : "text-[#0d1033] hover:text-[#304ffe]"
              }`}
            >
              Gallery
            </Link>

            {/* 5. About */}
            <Link
              href="/#why-us"
              onClick={(e) => handleLinkClick("why-us", e)}
              className={`transition-colors py-1 ${
                isAboutActive
                  ? "text-[#304ffe] font-bold"
                  : "text-[#0d1033] hover:text-[#304ffe]"
              }`}
            >
              About
            </Link>
          </nav>
        </div>

        {/* Right Action: EXPLORE PROGRAMS Button matching Screenshot */}
        <div className="flex shrink-0 items-center gap-4">
          <button
            type="button"
            onClick={handleCtaClick}
            className="hidden sm:inline-flex items-center justify-center px-6 py-3 bg-[#304ffe] hover:bg-[#253bdf] text-white text-[12px] font-bold uppercase tracking-[0.08em] rounded-lg shadow-[0_8px_20px_rgba(48,79,254,0.28)] transition-all hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>EXPLORE PROGRAMS</span>
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
        <div className="lg:hidden border-t border-[#f0f1f7] bg-white px-6 py-5 space-y-3 shadow-xl animate-in slide-in-from-top-2">
          <Link
            href="/"
            onClick={(e) => handleLinkClick("home", e)}
            className={`block text-sm font-bold ${
              isHomeActive ? "text-[#304ffe]" : "text-[#0d1033]"
            }`}
          >
            Home
          </Link>

          <Link
            href="/#experiences"
            onClick={(e) => handleLinkClick("experiences", e)}
            className={`block text-sm font-bold ${
              isProgramsActive ? "text-[#304ffe]" : "text-[#0d1033]"
            }`}
          >
            Programs (Workshops • Bootcamps • Hackathons)
          </Link>

          <Link
            href="/labs/gallery"
            onClick={() => setMobileMenuOpen(false)}
            className={`block text-sm font-bold ${
              isGalleryActive ? "text-[#304ffe]" : "text-[#0d1033]"
            }`}
          >
            Gallery
          </Link>

          <Link
            href="/#why-us"
            onClick={(e) => handleLinkClick("why-us", e)}
            className={`block text-sm font-bold ${
              isAboutActive ? "text-[#304ffe]" : "text-[#0d1033]"
            }`}
          >
            About
          </Link>

          <div className="pt-2 border-t border-[#f0f1f7] space-y-2">
            <span className="text-[11px] font-black uppercase tracking-wider text-[#94a3b8] block">
              Campus Pages:
            </span>
            <Link
              href="/labs/hackathons"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-xs font-semibold text-[#475569] hover:text-[#304ffe]"
            >
              • Campus Hackathons Event Page
            </Link>
            <Link
              href="/labs/colleges"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-xs font-semibold text-[#475569] hover:text-[#304ffe]"
            >
              • For Colleges (Institutional Blueprint)
            </Link>
            <Link
              href="/#campus-recommender"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-xs font-semibold text-[#475569] hover:text-[#304ffe]"
            >
              • Design Your Campus Lab (Planner)
            </Link>
            <Link
              href="/#student-projects"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-xs font-semibold text-[#475569] hover:text-[#304ffe]"
            >
              • Student Projects Showcase
            </Link>
            <Link
              href="/privacy-policy"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-xs font-semibold text-[#475569] hover:text-[#304ffe]"
            >
              • Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-xs font-semibold text-[#475569] hover:text-[#304ffe]"
            >
              • Terms of Service
            </Link>
          </div>

          <div className="pt-3 border-t border-[#f0f1f7]">
            <button
              type="button"
              onClick={handleCtaClick}
              className="w-full py-3.5 bg-[#304ffe] hover:bg-[#253bdf] text-white text-xs font-bold uppercase tracking-[0.08em] rounded-xl shadow-md transition-all"
            >
              EXPLORE PROGRAMS
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
