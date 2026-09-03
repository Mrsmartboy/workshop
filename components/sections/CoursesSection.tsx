import React from "react";
import { Clock, CheckCircle } from "lucide-react";
import { THREE_EXPERIENCES } from "@/data/content";

export function CoursesSection({
  scrollToSection,
}: {
  scrollToSection: (id: string) => void;
}) {
  return (
    <section id="experiences" className="relative bg-white py-16 sm:py-24">
      {/* Backwards compatibility anchor */}
      <span id="courses" className="sr-only" />

      <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <span className="inline-block px-3.5 py-1.5 bg-[#f0f3ff] text-[#304ffe] text-[11px] font-extrabold uppercase tracking-wider rounded-full mb-3.5 border border-[#dce4ff]">
              Three Core Formats
            </span>
            <h2 className="text-[34px] sm:text-[42px] font-extrabold tracking-[-0.035em] text-[#0d1033] leading-tight">
              Workshops • Bootcamps • Hackathons
            </h2>
            <p className="mt-3 text-[15px] sm:text-[16px] text-[#606482] max-w-[580px] leading-relaxed">
              Designed for college auditoriums and computer labs — scalable from a single classroom of 50 to campus-wide cohorts of 1,000+ students.
            </p>
          </div>

          <button
            type="button"
            onClick={() => scrollToSection("campus-enquiry")}
            className="self-start md:self-auto px-7 py-3 bg-transparent hover:bg-[#f0f3ff] border border-[#304ffe] text-[#304ffe] text-[12px] font-bold uppercase tracking-[0.08em] rounded-[6px] transition-all hover:-translate-y-0.5 active:translate-y-0 shrink-0"
          >
            BRING TO YOUR CAMPUS
          </button>
        </div>

        {/* 3 Experience Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {THREE_EXPERIENCES.map((exp) => (
            <div
              key={exp.id}
              className="course-card rounded-[22px] bg-white border border-[#eaedf6] overflow-hidden shadow-[0_10px_30px_rgba(20,24,68,0.06)] flex flex-col group hover:border-[#304ffe]/30 transition-all duration-300"
            >
              {/* Top Banner Video */}
              <div className="h-[200px] sm:h-[210px] overflow-hidden bg-black relative">
                {exp.type === "workshop" && (
                  <video
                    src="/gallery/computer_vision_workshop.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                )}
                {exp.type === "bootcamp" && (
                  <video
                    src="/gallery/agentic_ai_workshop.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                )}
                {exp.type === "hackathon" && (
                  <video
                    src="/gallery/voice_chatbot_workshop.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    style={{ objectPosition: "center 18%" }}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                )}

                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider text-[#0d1033] shadow-sm">
                  {exp.label}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-7 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[12px] font-bold text-[#304ffe] block mb-1">
                    {exp.subtitle}
                  </span>
                  <h3 className="text-[21px] font-bold text-[#0d1033] leading-[1.3] group-hover:text-[#304ffe] transition-colors">
                    {exp.title}
                  </h3>
                  <p className="mt-3 text-[14px] text-[#606482] leading-[1.65]">
                    {exp.description}
                  </p>
                </div>

                {/* Card Footer Details */}
                <div className="mt-8 pt-5 border-t border-[#f0f2f8] space-y-2.5">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#0d1033]">
                    <Clock className="w-3.5 h-3.5 text-[#304ffe]" />
                    <span>Duration: {exp.duration}</span>
                  </div>

                  <div className="flex items-start gap-2 text-xs text-[#606482]">
                    <CheckCircle className="w-3.5 h-3.5 text-[#16a34a] shrink-0 mt-0.5" />
                    <span>{exp.outcome}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
