import React from "react";

export function MentorsSection() {
  return (
    <section id="mentors" className="relative bg-[#f8faff] py-20 sm:py-28 border-b border-[#eaedf6]">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
        {/* Main Title Matching Reference Screenshot */}
        <div className="max-w-[860px] mb-12">
          <h2 className="text-[30px] sm:text-[42px] lg:text-[46px] font-bold tracking-tight text-[#162947] leading-[1.18]">
            Our top notch teams involved in helping you learn programming, not just coding.
          </h2>
        </div>

        {/* Outer Rounded White Card Container */}
        <div className="rounded-[28px] bg-white border border-[#e2e8f0] shadow-[0_6px_30px_rgba(20,24,68,0.04)] p-6 sm:p-10 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
            {/* Left Column: 2 Groups (Trainers & Product Developers) */}
            <div className="lg:col-span-4 flex flex-col justify-between gap-10">
              {/* Top-Left Group: Trainers */}
              <div>
                <h3 className="text-[14px] sm:text-[15px] text-[#1e293b] mb-4">
                  <strong className="font-bold text-[#0f172a]">Executive Leadership</strong> at Codegnan
                </h3>
                <div className="grid grid-cols-2 gap-3.5">
                  {/* Madhu Parvathaneni - CTO */}
                  <div className="rounded-[14px] bg-white border border-[#304ffe]/30 overflow-hidden shadow-sm flex flex-col items-center text-center group hover:shadow-md transition-shadow relative">
                    <span className="absolute top-1.5 right-1.5 z-10 bg-[#304ffe] text-white text-[9px] font-black uppercase px-2 py-0.5 rounded-full shadow-xs">
                      CTO
                    </span>
                    <div className="w-full h-[140px] sm:h-[150px] overflow-hidden bg-[#f1f5f9]">
                      <img
                        src="/gallery/madhuparvathaneni_cto.png"
                        alt="Madhu Parvathaneni - CTO at Codegnan"
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-3 w-full bg-white">
                      <h4 className="text-[13.5px] font-bold text-[#0f172a] leading-tight">
                        Madhu Parvathaneni
                      </h4>
                      <p className="text-[11.5px] text-[#304ffe] font-bold mt-0.5">
                        CTO at Codegnan
                      </p>
                    </div>
                  </div>

                  {/* Saketh K - CMO */}
                  <div className="rounded-[14px] bg-white border border-[#7c3aed]/30 overflow-hidden shadow-sm flex flex-col items-center text-center group hover:shadow-md transition-shadow relative">
                    <span className="absolute top-1.5 right-1.5 z-10 bg-[#7c3aed] text-white text-[9px] font-black uppercase px-2 py-0.5 rounded-full shadow-xs">
                      CMO
                    </span>
                    <div className="w-full h-[140px] sm:h-[150px] overflow-hidden bg-[#f1f5f9]">
                      <img
                        src="/gallery/saketh K-cmo.png"
                        alt="Saketh K - CMO at Codegnan"
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-3 w-full bg-white">
                      <h4 className="text-[13.5px] font-bold text-[#0f172a] leading-tight">
                        Saketh K
                      </h4>
                      <p className="text-[11.5px] text-[#7c3aed] font-bold mt-0.5">
                        CMO at Codegnan
                      </p>
                    </div>
                  </div>
                </div>
                <p className="text-center text-[12px] text-[#94a3b8] mt-2.5 font-normal">
                  and executive leadership...
                </p>
              </div>

              {/* Bottom-Left Group: Product Developers & Core Engineers */}
              <div>
                <h3 className="text-[14px] sm:text-[15px] text-[#1e293b] mb-4">
                  Learn directly from{" "}
                  <strong className="font-bold text-[#0f172a]">
                    Core Engineers &amp; Mentors
                  </strong>
                </h3>
                <div className="grid grid-cols-2 gap-3.5">
                  {/* Kesava Datta - Full Stack Engineer */}
                  <div className="rounded-[14px] bg-white border border-[#e2e8f0] overflow-hidden shadow-sm flex flex-col items-center text-center group hover:shadow-md transition-shadow relative">
                    <span className="absolute top-1.5 right-1.5 z-10 bg-[#059669] text-white text-[8.5px] font-black uppercase px-1.5 py-0.5 rounded-full shadow-xs">
                      FULL STACK
                    </span>
                    <div className="w-full h-[140px] sm:h-[150px] overflow-hidden bg-[#f1f5f9]">
                      <img
                        src="/gallery/kesavadatta_fullstackengineer.png"
                        alt="Kesava Datta - Full Stack Engineer, Top MNC"
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-3 w-full bg-white">
                      <h4 className="text-[13px] font-bold text-[#0f172a] leading-tight">
                        Kesava Datta
                      </h4>
                      <p className="text-[11px] text-[#059669] font-bold mt-0.5 leading-tight">
                        Full Stack Engineer
                      </p>
                      <p className="text-[10px] text-[#94a3b8]">Top MNC Company</p>
                    </div>
                  </div>

                  {/* Supraja - AI Engineer */}
                  <div className="rounded-[14px] bg-white border border-[#e2e8f0] overflow-hidden shadow-sm flex flex-col items-center text-center group hover:shadow-md transition-shadow relative">
                    <span className="absolute top-1.5 right-1.5 z-10 bg-[#ea580c] text-white text-[8.5px] font-black uppercase px-1.5 py-0.5 rounded-full shadow-xs">
                      AI ENGINEER
                    </span>
                    <div className="w-full h-[140px] sm:h-[150px] overflow-hidden bg-[#f1f5f9]">
                      <img
                        src="/gallery/supraja_ai_engineer.jpeg"
                        alt="Supraja - AI Engineer at Codegnan"
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-3 w-full bg-white">
                      <h4 className="text-[13px] font-bold text-[#0f172a] leading-tight">
                        Supraja
                      </h4>
                      <p className="text-[11px] text-[#ea580c] font-bold mt-0.5 leading-tight">
                        AI Engineer
                      </p>
                      <p className="text-[10px] text-[#94a3b8]">Codegnan Labs</p>
                    </div>
                  </div>
                </div>
                <p className="text-center text-[12px] text-[#94a3b8] mt-2.5 font-normal">
                  and more engineering leads...
                </p>
              </div>
            </div>

            {/* Center Column: Student Portrait Card */}
            <div className="lg:col-span-4 flex justify-center py-2">
              <div className="w-full max-w-[280px] rounded-[22px] overflow-hidden border border-[#dce3ec] shadow-[0_12px_35px_rgba(20,24,68,0.08)] bg-white flex flex-col items-center">
                <div className="w-full h-[270px] sm:h-[310px] overflow-hidden bg-[#e2e8f0] relative">
                  <video
                    src="/gallery/engagewithstudents.MP4"
                    muted
                    loop
                    autoPlay
                    playsInline
                    aria-label="Students building in a Codegnan workshop"
                    className="absolute left-1/2 top-1/2 h-[90%] w-[184%] -translate-x-1/2 -translate-y-1/2 -rotate-90 object-cover object-center transition-transform duration-500"
                  />
                </div>
                <div className="py-4 px-6 w-full text-center bg-white flex flex-col items-center justify-center border-t border-[#edf2f7]">
                  <span className="text-[14px] font-medium text-[#475569] mb-1.5">
                    Student at
                  </span>
                  <img
                    src="/codegnan_lab.png"
                    alt="Codegnan Lab"
                    className="h-8 sm:h-9 w-auto object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Right Column: 2 Groups (Career Coaches & Masterclasses) */}
            <div className="lg:col-span-4 flex flex-col justify-between gap-10">
              {/* Top-Right Group: Career Coaches */}
              <div>
                <h3 className="text-[14px] sm:text-[15px] text-[#1e293b] mb-4">
                  <strong className="font-bold text-[#0f172a]">
                    Career Coaches
                  </strong>{" "}
                  help you land your first job
                </h3>
                <div className="grid grid-cols-2 gap-3.5">
                  {/* Eswar K - Senior Agentic AI Engineer */}
                  <div className="rounded-[14px] bg-white border border-[#e2e8f0] overflow-hidden shadow-sm flex flex-col items-center text-center group hover:shadow-md transition-shadow relative">
                    <span className="absolute top-1.5 right-1.5 z-10 bg-[#304ffe] text-white text-[8px] font-black uppercase px-1.5 py-0.5 rounded-full shadow-xs">
                      AGENTIC AI
                    </span>
                    <div className="w-full h-[125px] sm:h-[135px] overflow-hidden bg-[#f1f5f9]">
                      <img
                        src="/gallery/eswark-Senior Agentic AI Engineer.png"
                        alt="Eswar K - Senior Agentic AI Engineer"
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-3 w-full bg-white">
                      <h4 className="text-[14px] font-bold text-[#0f172a] leading-tight">
                        Eswar K
                      </h4>
                      <p className="text-[11px] sm:text-[12px] text-[#64748b] mt-0.5">
                        Senior Agentic AI Engineer
                      </p>
                    </div>
                  </div>

                  {/* Sivaram - Senior Full Stack Engineer */}
                  <div className="rounded-[14px] bg-white border border-[#e2e8f0] overflow-hidden shadow-sm flex flex-col items-center text-center group hover:shadow-md transition-shadow relative">
                    <span className="absolute top-1.5 right-1.5 z-10 bg-[#304ffe] text-white text-[8px] font-black uppercase px-1.5 py-0.5 rounded-full shadow-xs">
                      SENIOR FULL STACK
                    </span>
                    <div className="w-full h-[125px] sm:h-[135px] overflow-hidden bg-[#f1f5f9]">
                      <img
                        src="/gallery/sivaram_fullStackEngineer.png"
                        alt="Sivaram - Senior Full Stack Engineer at Codegnan"
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-3 w-full bg-white">
                      <h4 className="text-[14px] font-bold text-[#0f172a] leading-tight">
                        Sivaram
                      </h4>
                      <p className="text-[11px] sm:text-[12px] text-[#64748b] mt-0.5">
                        Senior Full Stack Engineer
                      </p>
                    </div>
                  </div>
                </div>
                <p className="text-center text-[12px] text-[#94a3b8] mt-2.5 font-normal">
                  and more...
                </p>
              </div>

              {/* Bottom-Right Group: Masterclasses & Agentic AI */}
              <div>
                <h3 className="text-[14px] sm:text-[15px] text-[#1e293b] mb-4">
                  Gain expert insights from{" "}
                  <strong className="font-bold text-[#0f172a]">
                    Agentic AI &amp; Masterclasses
                  </strong>
                </h3>
                <div className="grid grid-cols-2 gap-3.5">
                  {/* Joseph - MERN Stack Developer */}
                  <div className="rounded-[14px] bg-white border border-[#304ffe]/30 overflow-hidden shadow-sm flex flex-col items-center text-center group hover:shadow-md transition-shadow relative">
                    <span className="absolute top-1.5 right-1.5 z-10 bg-[#304ffe] text-white text-[8px] font-black uppercase px-1.5 py-0.5 rounded-full shadow-xs">
                      MERN STACK
                    </span>
                    <div className="w-full h-[140px] sm:h-[150px] overflow-hidden bg-[#f1f5f9]">
                      <img
                        src="/gallery/joseph_mernstack.png"
                        alt="Joseph - MERN Stack Developer at Codegnan"
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-3 w-full bg-white">
                      <h4 className="text-[13px] font-bold text-[#0f172a] leading-tight">
                        Joseph
                      </h4>
                      <p className="text-[11px] text-[#304ffe] font-bold mt-0.5 leading-tight">
                        MERN Stack Developer
                      </p>
                      <p className="text-[10px] text-[#94a3b8]">Codegnan Labs</p>
                    </div>
                  </div>

                  {/* Pranathi - AI Engineer */}
                  <div className="rounded-[14px] bg-white border border-[#7c3aed]/30 overflow-hidden shadow-sm flex flex-col items-center text-center group hover:shadow-md transition-shadow relative">
                    <span className="absolute top-1.5 right-1.5 z-10 bg-[#7c3aed] text-white text-[8px] font-black uppercase px-1.5 py-0.5 rounded-full shadow-xs">
                      AI ENGINEER
                    </span>
                    <div className="w-full h-[140px] sm:h-[150px] overflow-hidden bg-[#f1f5f9]">
                      <img
                        src="/gallery/pranathi_ai_engineer.png"
                        alt="Pranathi - AI Engineer at Codegnan"
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-3 w-full bg-white">
                      <h4 className="text-[13px] font-bold text-[#0f172a] leading-tight">
                        Pranathi
                      </h4>
                      <p className="text-[11px] text-[#7c3aed] font-bold mt-0.5 leading-tight">
                        AI Engineer
                      </p>
                      <p className="text-[10px] text-[#94a3b8]">Codegnan Labs</p>
                    </div>
                  </div>
                </div>
                <p className="text-center text-[12px] text-[#94a3b8] mt-2.5 font-normal">
                  and more...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
