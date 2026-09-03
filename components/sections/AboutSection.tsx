import React from "react";

export function AboutSection({
  scrollToSection,
}: {
  scrollToSection: (id: string) => void;
}) {
  return (
    <section id="about" className="relative bg-white py-20 sm:py-28">
      {/* Subtle background glow */}
      <div className="glow-blob glow-blob-about-left" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Codegnan Center Photo */}
          <div className="lg:col-span-6 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[500px]">
              <div className="rounded-[24px] overflow-hidden shadow-[0_20px_50px_rgba(20,24,68,0.1)] border border-[#eef0f8] bg-[#f8f9fd]">
                <img
                  src="/about_codegnan.jpg"
                  alt="Codegnan IT Solutions and Training Center Building"
                  className="w-full h-[360px] sm:h-[420px] object-cover object-center hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Right Column: About Codegnan Text Content */}
          <div className="lg:col-span-6 max-w-[540px]">
            <h2 className="text-[34px] sm:text-[40px] font-extrabold tracking-[-0.035em] text-[#0d1033] leading-tight">
              About Codegnan
            </h2>

            <div className="mt-6 space-y-4 text-[15px] sm:text-[16px] text-[#606482] leading-[1.75]">
              <p>
                Codegnan is a technology education and training organization
                focused on empowering students with practical, industry-ready
                skills. We provide hands-on learning experiences in
                technologies such as Full Stack Development, Python, Java,
                Data Science, Artificial Intelligence, and other emerging
                technologies.
              </p>
              <p>
                Beyond regular training programs, Codegnan actively conducts{" "}
                <strong className="text-[#0d1033] font-semibold">
                  workshops, hackathons, and bootcamps
                </strong>{" "}
                to help students gain real-world exposure, improve their
                technical skills, collaborate with peers, and solve practical
                challenges. These programs are designed to bridge the gap
                between academic learning and industry requirements while
                encouraging innovation and continuous learning.
              </p>
            </div>

            <div className="mt-8">
              <button
                type="button"
                onClick={() => scrollToSection("why-us")}
                className="px-7 py-3 bg-transparent hover:bg-[#f0f3ff] border border-[#304ffe] text-[#304ffe] text-[12px] font-bold uppercase tracking-[0.08em] rounded-[6px] transition-all hover:-translate-y-0.5 active:translate-y-0"
              >
                LEARN MORE
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal Divider Line */}
        <div className="mt-20 sm:mt-28 border-b border-[#e9ebf4]" />
      </div>
    </section>
  );
}
