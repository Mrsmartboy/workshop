"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { EmpathySection } from "@/components/sections/EmpathySection";
import { CoursesSection } from "@/components/sections/CoursesSection";
import { TechTracksSection } from "@/components/sections/TechTracksSection";
import { ForCollegesSection } from "@/components/sections/ForCollegesSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { WhyUsSection } from "@/components/sections/WhyUsSection";
import { MentorsSection } from "@/components/sections/MentorsSection";
import { CertificationSection } from "@/components/sections/CertificationSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { CampusEnquirySection } from "@/components/sections/CampusEnquirySection";

export default function HomePage() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const triggerToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#0d1033] font-sans antialiased overflow-x-hidden selection:bg-[#304ffe] selection:text-white">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#0d1033] text-white px-5 py-3 rounded-xl shadow-2xl flex items-center gap-3 border border-white/15 animate-in slide-in-from-bottom-5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#304ffe] animate-pulse shrink-0" />
          <p className="text-xs font-semibold">{toastMessage}</p>
        </div>
      )}

      {/* 01. NAVIGATION BAR */}
      <Navbar scrollToSection={scrollToSection} />

      {/* 02. HERO SECTION */}
      <HeroSection scrollToSection={scrollToSection} />

      {/* 03. STUDENT PROBLEM / EMPATHY SECTION */}
      <EmpathySection />

      {/* 04. THREE EXPERIENCES (WORKSHOPS • BOOTCAMPS • HACKATHONS) */}
      <CoursesSection scrollToSection={scrollToSection} />

      {/* 05. TECHNOLOGY TRACKS GRID */}
      <TechTracksSection scrollToSection={scrollToSection} />

      {/* 06. FOR COLLEGES - ENGAGEMENT MATRIX */}
      <ForCollegesSection scrollToSection={scrollToSection} />

      {/* 07. HOW IT WORKS - 5-STEP CAMPUS FLOW */}
      <HowItWorksSection scrollToSection={scrollToSection} />

      {/* 08. WHY CODEGNAN LABS - PROVEN DIFFERENTIATORS */}
      <WhyUsSection scrollToSection={scrollToSection} />

      {/* 09. TOP NOTCH TEAMS & MENTORS */}
      <MentorsSection />

      {/* 10. STUDENT OUTCOMES & VERIFIED CREDENTIALS */}
      <CertificationSection scrollToSection={scrollToSection} />

      {/* 11. CAMPUS & STUDENT FAQS */}
      <FaqSection triggerToast={triggerToast} />

      {/* 12. FINAL COLLEGE CTA & LEAD FORM */}
      <CampusEnquirySection triggerToast={triggerToast} />

      {/* 13. FOOTER */}
      <Footer />
    </div>
  );
}
