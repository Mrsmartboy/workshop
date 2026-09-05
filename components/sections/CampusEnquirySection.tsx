"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Send, CheckCircle2, Phone, Mail, Clock, Share2, MessageCircle } from "lucide-react";
import { CampusEnquiryFormData } from "@/types";

interface CampusEnquiryProps {
  triggerToast: (msg: string) => void;
  recommenderDetails?: {
    year: string;
    studentCount: string;
    format: string;
    outcome: string;
    recommendationTitle: string;
  } | null;
}

export function CampusEnquirySection({
  triggerToast,
  recommenderDetails,
}: CampusEnquiryProps) {
  const [formData, setFormData] = useState<CampusEnquiryFormData>({
    collegeName: "",
    city: "",
    contactPerson: "",
    designation: "",
    phone: "",
    email: "",
    expectedStudentCount: "",
    programInterest: "",
    preferredDuration: "",
    preferredDate: "",
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // Sync recommender selections into form if present
  useEffect(() => {
    if (recommenderDetails) {
      setFormData((prev) => ({
        ...prev,
        expectedStudentCount: recommenderDetails.studentCount || prev.expectedStudentCount,
        programInterest: recommenderDetails.recommendationTitle || recommenderDetails.format || prev.programInterest,
        notes: prev.notes
          ? prev.notes
          : `Interested in: ${recommenderDetails.recommendationTitle} for ${recommenderDetails.year} students (Goal: ${recommenderDetails.outcome}).`,
      }));
    }
  }, [recommenderDetails]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !formData.collegeName ||
      !formData.city ||
      !formData.contactPerson ||
      !formData.phone ||
      !formData.email ||
      !formData.designation ||
      !formData.expectedStudentCount ||
      !formData.programInterest
    ) {
      triggerToast("Please fill in all mandatory fields (*).");
      return;
    }

    setSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send enquiry');
      }

      setSubmitting(false);
      setSubmitted(true);
      triggerToast("Campus enquiry submitted! Our academic coordinator will contact you within 24 hours.");
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitting(false);
      triggerToast("Failed to send enquiry. Please try again later.");
    }
  };

  const shareViaWhatsApp = () => {
    const text = encodeURIComponent(
      "Respected Sir/Madam, check out Codegnan Labs for our college campus! They organize hands-on technical workshops, bootcamps, and hackathons in AI, Full Stack, and Cloud where students build real projects: https://codegnan-workshop.vercel.app"
    );
    window.open(`https://wa.me/?text=${text}`, "_blank");
  };

  return (
    <section id="campus-enquiry" className="relative bg-gradient-to-br from-[#020719] via-[#071139] to-[#210061] py-14 sm:py-20 lg:py-20 text-white overflow-hidden">
      {/* Background glow halos */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#304ffe]/20 rounded-full filter blur-[140px] pointer-events-none -z-0" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#60a5fa]/15 rounded-full filter blur-[120px] pointer-events-none -z-0" />

      <div className="max-w-[1370px] mx-auto px-5 sm:px-8 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[0.86fr_1.32fr] gap-10 lg:gap-12 items-center">
          {/* Left Column: Heading & Value Proposition */}
          <div className="max-w-[560px] pt-2 lg:pt-0">
            <span className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#172764] text-white text-[11px] font-extrabold uppercase tracking-wider rounded-full mb-5 border border-[#30458e]">
              <span className="text-[#a98bff]">✦</span>
              Bring Codegnan to Your Campus
            </span>

            <h2 className="text-[34px] sm:text-[44px] lg:text-[48px] font-black tracking-[-0.04em] leading-[1.12]">
              <span className="block whitespace-nowrap">Plan a Codegnan Lab</span>
              <span className="block bg-gradient-to-r from-[#3561ff] via-[#7243f1] to-[#f0d8ff] bg-clip-text text-transparent">
                for your college students
              </span>
            </h2>

            <p className="mt-5 text-[15px] sm:text-[16px] text-[#d9def5] leading-[1.75] max-w-[490px]">
              Whether you want a 4-hour AI Coding workshop, a 3-day Full-Stack bootcamp, or an institution-wide Hackathon — share your requirements and our academic team will provide a tailored blueprint.
            </p>

            {/* Direct Contact Links */}
            <div className="mt-8 space-y-4 pt-6 border-t border-white/20 text-xs text-white/80">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#302174] to-[#171c68] border border-[#40378f] flex items-center justify-center text-[#c5a9ff]">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-white text-sm font-extrabold">Direct Campus Line</span>
                  <a href="tel:+918121289993" className="block mt-0.5 text-[#8aa2ff] text-base font-extrabold hover:underline">+91 81212 89993</a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#302174] to-[#171c68] border border-[#40378f] flex items-center justify-center text-[#c5a9ff]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-white text-sm font-extrabold">Curriculum &amp; Proposals</span>
                  <a href="mailto:labs@codegnan.com" className="block mt-0.5 text-[#8aa2ff] text-base font-extrabold hover:underline">labs@codegnan.com</a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#302174] to-[#171c68] border border-[#40378f] flex items-center justify-center text-[#c5a9ff]">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-white text-sm font-extrabold">Proposal Turnaround</span>
                  <span className="block mt-0.5 text-[#8aa2ff] text-base font-extrabold">Within 24 Hours</span>
                </div>
              </div>
            </div>

            {/* Student Sharing Banner */}
            <div className="mt-8 rounded-2xl bg-white/10 border border-white/15 p-5">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#fbbf24] mb-1.5">
                <MessageCircle className="w-4 h-4" />
                <span>Are you a student or club lead?</span>
              </div>
              <p className="text-xs text-[#cbd5e1] mb-3">
                Want Codegnan Labs on your campus? Share this page directly with your HOD or Placement Officer on WhatsApp.
              </p>
              <button
                type="button"
                onClick={shareViaWhatsApp}
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#25d366] hover:bg-[#20bd5a] text-black text-xs font-black uppercase tracking-wider rounded-lg transition-all"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>Share with HOD on WhatsApp</span>
              </button>
            </div>
          </div>

          {/* Right Column: Lead Form Card */}
          <div>
            <div className="rounded-[24px] bg-[#fbfbff] p-6 sm:p-8 lg:p-10 text-[#0d1033] shadow-[0_18px_70px_rgba(0,0,0,0.28)] border border-white/70">
              {submitted ? (
                <div className="py-12 text-center animate-in fade-in">
                  <div className="w-16 h-16 bg-[#dcfce7] rounded-full flex items-center justify-center mx-auto mb-5 text-[#16a34a]">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <h3 className="text-2xl font-black text-[#0d1033] mb-2">
                    Enquiry Received!
                  </h3>
                  <p className="text-sm text-[#606482] max-w-[400px] mx-auto mb-6">
                    Our academic partnership team will review your requirements and reach out within 24 hours with a customized proposal.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 bg-[#304ffe] text-white text-xs font-bold rounded-lg uppercase tracking-wider"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {recommenderDetails && (
                    <div className="p-3.5 rounded-xl bg-[#f0f4ff] border border-[#304ffe]/30 text-xs text-[#0d1033] mb-2">
                      <strong className="text-[#304ffe] block font-bold mb-0.5">
                        Prefilled from Campus Planner:
                      </strong>
                      <span>{recommenderDetails.recommendationTitle}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[13px] font-bold text-[#0d1033] mb-1.5">
                        College / University Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.collegeName}
                        onChange={(e) => setFormData({ ...formData, collegeName: e.target.value })}
                        placeholder="e.g. MLR Institute of Technology"
                        className="w-full px-4 py-3 bg-white border border-[#dce3ec] rounded-[10px] text-sm text-[#0d1033] placeholder:text-[#8892b0] focus:outline-none focus:border-[#304ffe] focus:ring-2 focus:ring-[#304ffe]/10 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-[13px] font-bold text-[#0d1033] mb-1.5">
                        City / Location *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        placeholder="e.g. Hyderabad"
                        className="w-full px-4 py-3 bg-white border border-[#dce3ec] rounded-[10px] text-sm text-[#0d1033] placeholder:text-[#8892b0] focus:outline-none focus:border-[#304ffe] focus:ring-2 focus:ring-[#304ffe]/10 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[13px] font-bold text-[#0d1033] mb-1.5">
                        Contact Person Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.contactPerson}
                        onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                        placeholder="e.g. Dr. K. Srinivas"
                        className="w-full px-4 py-3 bg-white border border-[#dce3ec] rounded-[10px] text-sm text-[#0d1033] placeholder:text-[#8892b0] focus:outline-none focus:border-[#304ffe] focus:ring-2 focus:ring-[#304ffe]/10 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-[13px] font-bold text-[#0d1033] mb-1.5">
                        Designation *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.designation}
                        onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                        placeholder="e.g. HOD / TPO / Club Lead"
                        className="w-full px-4 py-3 bg-white border border-[#dce3ec] rounded-[10px] text-sm text-[#0d1033] placeholder:text-[#8892b0] focus:outline-none focus:border-[#304ffe] focus:ring-2 focus:ring-[#304ffe]/10 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[13px] font-bold text-[#0d1033] mb-1.5">
                        Official Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@college.edu"
                        className="w-full px-4 py-3 bg-white border border-[#dce3ec] rounded-[10px] text-sm text-[#0d1033] placeholder:text-[#8892b0] focus:outline-none focus:border-[#304ffe] focus:ring-2 focus:ring-[#304ffe]/10 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-[13px] font-bold text-[#0d1033] mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 bg-white border border-[#dce3ec] rounded-[10px] text-sm text-[#0d1033] placeholder:text-[#8892b0] focus:outline-none focus:border-[#304ffe] focus:ring-2 focus:ring-[#304ffe]/10 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[13px] font-bold text-[#0d1033] mb-1.5">
                        Expected Student Count *
                      </label>
                      <select
                        required
                        value={formData.expectedStudentCount}
                        onChange={(e) => setFormData({ ...formData, expectedStudentCount: e.target.value })}
                        className="w-full px-4 py-3 bg-white border border-[#dce3ec] rounded-[10px] text-sm text-[#0d1033] focus:outline-none focus:border-[#304ffe] focus:ring-2 focus:ring-[#304ffe]/10 transition-all"
                      >
                        <option value="">Select Student Count</option>
                        <option value="<50 Students">&lt; 50 Students</option>
                        <option value="50–100 Students">50–100 Students</option>
                        <option value="100–300 Students">100–300 Students</option>
                        <option value="300+ Students">300+ Students</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[13px] font-bold text-[#0d1033] mb-1.5">
                        Program Interest *
                      </label>
                      <select
                        required
                        value={formData.programInterest}
                        onChange={(e) => setFormData({ ...formData, programInterest: e.target.value })}
                        className="w-full px-4 py-3 bg-white border border-[#dce3ec] rounded-[10px] text-sm text-[#0d1033] focus:outline-none focus:border-[#304ffe] focus:ring-2 focus:ring-[#304ffe]/10 transition-all"
                      >
                        <option value="">Select Format</option>
                        <option value="Hands-on Workshop (2–6 Hours)">Hands-on Workshop (2–6 Hours)</option>
                        <option value="Intensive Bootcamp (1–5 Days)">Intensive Bootcamp (1–5 Days)</option>
                        <option value="Campus Hackathon (24–48 Hours)">Campus Hackathon (24–48 Hours)</option>
                        <option value="Multiple / Customized Tracks">Multiple / Customized Tracks</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[13px] font-bold text-[#0d1033] mb-1.5">
                      Additional Requirements or Goals (Optional)
                    </label>
                    <textarea
                      rows={3}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="Share your student year, specific tech interests, or tentative dates..."
                      className="w-full px-4 py-3 bg-white border border-[#dce3ec] rounded-[10px] text-sm text-[#0d1033] placeholder:text-[#8892b0] focus:outline-none focus:border-[#304ffe] focus:ring-2 focus:ring-[#304ffe]/10 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-4 bg-[#304ffe] hover:bg-[#253bdf] disabled:bg-gray-400 text-white font-bold text-xs uppercase tracking-[0.08em] rounded-xl shadow-[0_8px_20px_rgba(48,79,254,0.3)] transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>{submitting ? "Submitting..." : "REQUEST TAILORED CAMPUS PROPOSAL"}</span>
                  </button>

                  <p className="text-center text-[11px] text-[#697390]">
                    🔒 Official inquiries only. Tailored blueprint provided within 24 hours.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
