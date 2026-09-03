import React from "react";

export function TestimonialBanner({
  scrollToSection,
}: {
  scrollToSection: (id: string) => void;
}) {
  return (
    <section
      id="testimonial"
      className="testimonial-bg py-20 sm:py-28 text-white relative"
    >
      {/* Background Translucent Ovals matching reference screenshot */}
      <div className="blue-banner-oval blue-banner-oval-left" />
      <div className="blue-banner-oval blue-banner-oval-bottom" />
      <div className="blue-banner-oval blue-banner-oval-right" />
      <div className="blue-banner-oval blue-banner-oval-top" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Content */}
          <div className="lg:col-span-7 max-w-[580px]">
            <h2 className="text-[32px] sm:text-[42px] lg:text-[46px] font-black tracking-[-0.035em] leading-[1.12]">
              Codegnan helped me to learn the skills to land my dream job.
            </h2>

            <blockquote className="mt-6 text-[15px] sm:text-[16px] text-white/90 leading-[1.75] font-normal">
              &ldquo;Codegnan gave me the practical coding experience and
              mentorship I needed to land my dream software developer role.
              The hands-on workshops and real-world project reviews bridged
              the exact gap between theory and industry expectations.&rdquo;
            </blockquote>

            <div className="mt-9">
              <button
                type="button"
                onClick={() => scrollToSection("courses")}
                className="px-8 py-3.5 bg-white text-[#304ffe] hover:bg-[#f0f3ff] text-[12px] font-bold uppercase tracking-[0.08em] rounded-[6px] shadow-[0_10px_25px_rgba(0,0,0,0.15)] transition-all hover:-translate-y-0.5 active:translate-y-0"
              >
                EXPLORE PROGRAMS
              </button>
            </div>
          </div>

          {/* Right Photo Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[460px]">
              <div className="rounded-[24px] overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.25)] border-2 border-white/20">
                <img
                  src="/gallery/student_laptop_cropped.jpg"
                  alt="Codegnan student coding and working on a laptop during hands-on workshop"
                  className="w-full h-[340px] sm:h-[400px] object-cover object-top"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
