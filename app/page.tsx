"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { EmpathySection } from "@/components/sections/EmpathySection";
import { CoursesSection } from "@/components/sections/CoursesSection";
import { StudentExperienceSection } from "@/components/sections/StudentExperienceSection";
import { TechTracksSection } from "@/components/sections/TechTracksSection";
import { CohortExplorerSection } from "@/components/sections/CohortExplorerSection";
import { CampusRecommender } from "@/components/sections/CampusRecommender";
import { StudentProjectsSection } from "@/components/sections/StudentProjectsSection";
import { WhyUsSection } from "@/components/sections/WhyUsSection";
import { MentorsSection } from "@/components/sections/MentorsSection";
import { CertificationSection } from "@/components/sections/CertificationSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { CampusEnquirySection } from "@/components/sections/CampusEnquirySection";

export default function HomePage() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [recommenderDetails, setRecommenderDetails] = useState<{
    year: string;
    studentCount: string;
    format: string;
    outcome: string;
    recommendationTitle: string;
  } | null>(null);

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

      {/* 04. CHOOSE YOUR CAMPUS EXPERIENCE (WORKSHOP • BOOTCAMP • HACKATHON) */}
      <CoursesSection scrollToSection={scrollToSection} />

      {/* 05. OUTCOME-FIRST TECH TRACKS (WHAT COULD YOUR STUDENTS BUILD?) */}
      <TechTracksSection scrollToSection={scrollToSection} />

      {/* 06. COHORT RELEVANCE (I, II, III, IV YEAR TABS) */}
      <CohortExplorerSection scrollToSection={scrollToSection} />

      {/* 07. "DESIGN YOUR CAMPUS LAB" INTERACTIVE RECOMMENDER */}
      <CampusRecommender
        scrollToSection={scrollToSection}
        onSelectRecommendation={(details) => setRecommenderDetails(details)}
      />

      {/* 08. TANGIBLE STUDENT PROJECTS SHOWCASE (THEY DO NOT JUST ATTEND. THEY BUILD.) */}
      <StudentProjectsSection scrollToSection={scrollToSection} />

      {/* 09. REAL CAMPUS ACTIVITY & STUDENT VOICES */}
      <StudentExperienceSection scrollToSection={scrollToSection} />

      {/* 13. WHY CODEGNAN LABS - PROVEN DIFFERENTIATORS */}
      <WhyUsSection scrollToSection={scrollToSection} />

      {/* 14. TOP NOTCH TEAMS & MENTORS */}
      <MentorsSection />

      {/* 15. STUDENT OUTCOMES & VERIFIED CREDENTIALS */}
      <CertificationSection scrollToSection={scrollToSection} />

      {/* 16. CAMPUS & STUDENT FAQS */}
      <FaqSection triggerToast={triggerToast} />

      {/* 17. FINAL COLLEGE CTA & LEAD FORM */}
      <CampusEnquirySection
        triggerToast={triggerToast}
        recommenderDetails={recommenderDetails}
      />

      {/* Persistent mobile conversion action */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[#dfe5f3] bg-white/95 px-4 py-3 shadow-[0_-8px_24px_rgba(13,16,51,0.12)] backdrop-blur-md sm:hidden">
        <button
          type="button"
          onClick={() => scrollToSection("campus-enquiry")}
          className="flex w-full items-center justify-center rounded-xl bg-[#304ffe] px-4 py-3 text-[11px] font-black uppercase tracking-[0.08em] text-white shadow-[0_6px_16px_rgba(48,79,254,0.25)] transition-colors hover:bg-[#253bdf]"
        >
          Bring Codegnan to Your Campus
        </button>
      </div>

      {/* 18. FOOTER */}
      <Footer />
    </div>
  );
}
