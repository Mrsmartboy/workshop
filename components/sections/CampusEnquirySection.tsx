"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Send, CheckCircle2, Phone, Mail, Clock } from "lucide-react";
import { CampusEnquiryFormData } from "@/types";

export function CampusEnquirySection({
  triggerToast,
}: {
  triggerToast: (msg: string) => void;
}) {
  const [formData, setFormData] = useState<CampusEnquiryFormData>({
    collegeName: "",
    city: "",
    contactPerson: "",
    designation: "HOD / Department Head",
    phone: "",
    email: "",
    expectedStudentCount: "100 - 250 Students",
    programInterest: "Tech Workshop (2-6 Hours)",
    preferredDuration: "",
    preferredDate: "",
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.collegeName || !formData.contactPerson || !formData.phone || !formData.email) {
      triggerToast("Please fill in all mandatory fields (*).");
      return;
    }

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      triggerToast("Campus enquiry submitted! Our academic coordinator will contact you within 24 hours.");
    }, 900);
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
              Get Started with Codegnan Labs
            </span>

            <h2 className="text-[34px] sm:text-[44px] lg:text-[48px] font-black tracking-[-0.04em] leading-[1.12]">
              <span className="block whitespace-nowrap">Want Codegnan Labs</span>
              <span className="block bg-gradient-to-r from-[#3561ff] via-[#7243f1] to-[#f0d8ff] bg-clip-text text-transparent">
                at your college?
              </span>
            </h2>

            <p className="mt-5 text-[15px] sm:text-[16px] text-[#d9def5] leading-[1.75] max-w-[490px]">
              Whether you want a 3-hour AI Coding workshop, a 3-day Full Stack bootcamp, or an institution-wide Hackathon — submit your requirements and our team will prepare a tailored proposal.
            </p>

            <div className="mt-8 space-y-4 pt-6 border-t border-white/20 text-xs text-white/80">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#302174] to-[#171c68] border border-[#40378f] flex items-center justify-center text-[#c5a9ff]">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-white text-sm font-extrabold">Have Questions?</span>
                  <a href="tel:+918121289993" className="block mt-1 text-[#4d66ff] text-base font-extrabold hover:underline">+91 81212 89993</a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#302174] to-[#171c68] border border-[#40378f] flex items-center justify-center text-[#c5a9ff]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-white text-sm font-extrabold">Email Us</span>
                  <a href="mailto:cto@codegnan.com" className="block mt-1 text-[#4d66ff] text-base font-extrabold hover:underline">cto@codegnan.com</a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#302174] to-[#171c68] border border-[#40378f] flex items-center justify-center text-[#c5a9ff]">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-white text-sm font-extrabold">Our Response Time</span>
                  <span className="block mt-1 text-[#4d66ff] text-base font-extrabold">Within 24 Hours</span>
                </div>
              </div>
            </div>

            <div className="relative mt-5 h-[180px] sm:h-[210px] w-full max-w-[500px]">
              <Image src="/gallery/campus.png" alt="Codegnan Labs campus" fill className="object-contain object-left-bottom" sizes="500px" />
            </div>
          </div>

          {/* Right Column: Lead Form Card */}
          <div>
            <div className="rounded-[24px] bg-[#fbfbff] p-6 sm:p-8 lg:p-10 text-[#0d1033] shadow-[0_18px_70px_rgba(0,0,0,0.28)] border border-white/70">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#e6fcf5] text-[#0ca678] flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-black text-[#0d1033]">
                    Campus Request Received!
                  </h3>
                  <p className="text-sm text-[#606482] max-w-[420px] mx-auto leading-relaxed">
                    Thank you for inviting Codegnan Labs. Our academic partnerships director will get in touch with you shortly to schedule dates and finalize curriculum.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        collegeName: "",
                        city: "",
                        contactPerson: "",
                        designation: "HOD / Department Head",
                        phone: "",
                        email: "",
                        expectedStudentCount: "100 - 250 Students",
                        programInterest: "Tech Workshop (2-6 Hours)",
                        preferredDuration: "",
                        preferredDate: "",
                        notes: "",
                      });
                    }}
                    className="mt-4 px-6 py-2.5 bg-[#304ffe] text-white text-xs font-bold uppercase tracking-wider rounded-lg"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* College Name */}
                    <div>
                      <label className="block text-[13px] font-bold text-[#0d1033] mb-2">
                        College / Institute Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.collegeName}
                        onChange={(e) => setFormData({ ...formData, collegeName: e.target.value })}
                        placeholder="Enter your college or institute name"
                        className="h-[49px] w-full px-4 py-3 bg-white border border-[#dce3ec] rounded-[10px] text-sm text-[#0d1033] placeholder:text-[#697390] focus:outline-none focus:border-[#304ffe] focus:ring-2 focus:ring-[#304ffe]/10 transition-all"
                      />
                    </div>

                    {/* City */}
                    <div>
                      <label className="block text-[13px] font-bold text-[#0d1033] mb-2">
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.contactPerson}
                        onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                        placeholder="Enter your full name"
                        className="h-[49px] w-full px-4 py-3 bg-white border border-[#dce3ec] rounded-[10px] text-sm text-[#0d1033] placeholder:text-[#697390] focus:outline-none focus:border-[#304ffe] focus:ring-2 focus:ring-[#304ffe]/10 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Contact Number */}
                    <div>
                      <label className="block text-[13px] font-bold text-[#0d1033] mb-2">
                        Contact Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 81212 89993"
                        className="h-[49px] w-full px-4 py-3 bg-white border border-[#dce3ec] rounded-[10px] text-sm text-[#0d1033] placeholder:text-[#697390] focus:outline-none focus:border-[#304ffe] focus:ring-2 focus:ring-[#304ffe]/10 transition-all"
                      />
                    </div>

                    {/* Official Email */}
                    <div>
                      <label className="block text-[13px] font-bold text-[#0d1033] mb-2">
                        Official Email ID <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="your.email@college.edu"
                        className="h-[49px] w-full px-4 py-3 bg-white border border-[#dce3ec] rounded-[10px] text-sm text-[#0d1033] placeholder:text-[#697390] focus:outline-none focus:border-[#304ffe] focus:ring-2 focus:ring-[#304ffe]/10 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Designation */}
                    <div>
                      <label className="block text-[13px] font-bold text-[#0d1033] mb-2">
                        Your Designation <span className="text-red-500">*</span>
                      </label>
                      <select
                        required
                        value={formData.designation}
                        onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                        className="h-[49px] w-full px-4 py-3 bg-white border border-[#dce3ec] rounded-[10px] text-sm text-[#697390] focus:outline-none focus:border-[#304ffe] focus:ring-2 focus:ring-[#304ffe]/10 transition-all"
                      >
                        <option>Principal / Dean</option>
                        <option>HOD / Department Head</option>
                        <option>Training &amp; Placement Officer (TPO)</option>
                        <option>Faculty Coordinator</option>
                        <option>Student Club Lead / President</option>
                      </select>
                    </div>

                    {/* Department */}
                    <div>
                      <label className="block text-[13px] font-bold text-[#0d1033] mb-2">
                        Department
                      </label>
                      <input
                        type="text"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        placeholder="Select department"
                        className="h-[49px] w-full px-4 py-3 bg-white border border-[#dce3ec] rounded-[10px] text-sm text-[#0d1033] placeholder:text-[#697390] focus:outline-none focus:border-[#304ffe] focus:ring-2 focus:ring-[#304ffe]/10 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Preferred Program Type */}
                    <div>
                      <label className="block text-[13px] font-bold text-[#0d1033] mb-2">
                        Preferred Program Type <span className="text-red-500">*</span>
                      </label>
                      <select
                        value={formData.programInterest}
                        onChange={(e) => setFormData({ ...formData, programInterest: e.target.value })}
                        required
                        className="h-[49px] w-full px-4 py-3 bg-white border border-[#dce3ec] rounded-[10px] text-sm text-[#697390] focus:outline-none focus:border-[#304ffe] focus:ring-2 focus:ring-[#304ffe]/10 transition-all"
                      >
                        <option>Tech Workshop (2-6 Hours)</option>
                        <option>Intensive Bootcamp (1-5 Days)</option>
                        <option>Campus Hackathon (24-48 Hours)</option>
                        <option>College Tech Fest Partner</option>
                        <option>Multiple / Customized Tracks</option>
                      </select>
                    </div>

                    {/* Preferred Duration */}
                    <div>
                      <label className="block text-[13px] font-bold text-[#0d1033] mb-2">
                        Preferred Duration
                      </label>
                      <select
                        value={formData.preferredDuration}
                        onChange={(e) => setFormData({ ...formData, preferredDuration: e.target.value })}
                        className="h-[49px] w-full px-4 py-3 bg-white border border-[#dce3ec] rounded-[10px] text-sm text-[#697390] focus:outline-none focus:border-[#304ffe] focus:ring-2 focus:ring-[#304ffe]/10 transition-all"
                      >
                        <option value="">Select duration</option>
                        <option>2 to 6 Hours</option>
                        <option>1 to 5 Days</option>
                        <option>24 to 48 Hours</option>
                        <option>Custom (1 to 3 Days)</option>
                      </select>
                    </div>
                  </div>

                  {/* Preferred Date */}
                  <div>
                    <label className="block text-[13px] font-bold text-[#0d1033] mb-2">
                      Preferred Month / Date to Conduct Program
                    </label>
                    <input
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      aria-label="Preferred date to conduct program"
                      onClick={(e) => e.currentTarget.showPicker?.()}
                      className="h-[49px] w-full px-4 py-3 bg-white border border-[#dce3ec] rounded-[10px] text-sm text-[#0d1033] focus:outline-none focus:border-[#304ffe] focus:ring-2 focus:ring-[#304ffe]/10 transition-all"
                    />
                  </div>

                  {/* Notes / Special Requests */}
                  <div>
                    <label className="block text-[13px] font-bold text-[#0d1033] mb-2">
                      Additional Requirements or Message (Optional)
                    </label>
                    <textarea
                      rows={3}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="Tell us more about your expectations, number of students, venue, or any other details..."
                      className="w-full px-4 py-3 bg-white border border-[#dce3ec] rounded-[10px] text-sm text-[#0d1033] placeholder:text-[#697390] focus:outline-none focus:border-[#304ffe] focus:ring-2 focus:ring-[#304ffe]/10 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-4 bg-[#304ffe] hover:bg-[#253bdf] disabled:bg-gray-400 text-white font-bold text-xs uppercase tracking-[0.08em] rounded-xl shadow-[0_8px_20px_rgba(48,79,254,0.3)] transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>{submitting ? "Submitting..." : "SEND REQUEST"}</span>
                  </button>
                  <p className="flex items-center justify-center gap-2 text-[11px] text-[#697390]">
                    <span aria-hidden="true">🔒</span>
                    Your information is secure and will only be used to contact you.
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
