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
                  <strong className="font-bold text-[#0f172a]">Trainers</strong> are alumni of IITs and Top MNCs
                </h3>
                <div className="grid grid-cols-2 gap-3.5">
                  {/* Rahul */}
                  <div className="rounded-[14px] bg-white border border-[#e2e8f0] overflow-hidden shadow-sm flex flex-col items-center text-center group hover:shadow-md transition-shadow">
                    <div className="w-full h-[125px] sm:h-[135px] overflow-hidden bg-[#f1f5f9]">
                      <img
                        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80"
                        alt="Rahul - Ex. Amazon"
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-3 w-full bg-white">
                      <h4 className="text-[14px] font-bold text-[#0f172a] leading-tight">
                        Rahul
                      </h4>
                      <p className="text-[11px] sm:text-[12px] text-[#64748b] mt-0.5">
                        Ex. Amazon
                      </p>
                    </div>
                  </div>

                  {/* Shashank */}
                  <div className="rounded-[14px] bg-white border border-[#e2e8f0] overflow-hidden shadow-sm flex flex-col items-center text-center group hover:shadow-md transition-shadow">
                    <div className="w-full h-[125px] sm:h-[135px] overflow-hidden bg-[#f1f5f9]">
                      <img
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80"
                        alt="Shashank - IIT Bombay"
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-3 w-full bg-white">
                      <h4 className="text-[14px] font-bold text-[#0f172a] leading-tight">
                        Shashank
                      </h4>
                      <p className="text-[11px] sm:text-[12px] text-[#64748b] mt-0.5">
                        IIT Bombay
                      </p>
                    </div>
                  </div>
                </div>
                <p className="text-center text-[12px] text-[#94a3b8] mt-2.5 font-normal">
                  and more...
                </p>
              </div>

              {/* Bottom-Left Group: Product Developers */}
              <div>
                <h3 className="text-[14px] sm:text-[15px] text-[#1e293b] mb-4">
                  Get doubts resolved by{" "}
                  <strong className="font-bold text-[#0f172a]">
                    Product Developers
                  </strong>
                </h3>
                <div className="grid grid-cols-2 gap-3.5">
                  {/* Revanth */}
                  <div className="rounded-[14px] bg-white border border-[#e2e8f0] overflow-hidden shadow-sm flex flex-col items-center text-center group hover:shadow-md transition-shadow">
                    <div className="w-full h-[125px] sm:h-[135px] overflow-hidden bg-[#f1f5f9]">
                      <img
                        src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80"
                        alt="Revanth - Backend Architect IIT Guwahati"
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-3 w-full bg-white">
                      <h4 className="text-[14px] font-bold text-[#0f172a] leading-tight">
                        Revanth
                      </h4>
                      <p className="text-[11px] sm:text-[12px] text-[#64748b] mt-0.5 leading-tight">
                        Backend Architect
                      </p>
                      <p className="text-[10px] text-[#94a3b8]">IIT Guwahati</p>
                    </div>
                  </div>

                  {/* Pavan */}
                  <div className="rounded-[14px] bg-white border border-[#e2e8f0] overflow-hidden shadow-sm flex flex-col items-center text-center group hover:shadow-md transition-shadow">
                    <div className="w-full h-[125px] sm:h-[135px] overflow-hidden bg-[#f1f5f9]">
                      <img
                        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80"
                        alt="Pavan - Software Development Lead BIT Mesra"
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-3 w-full bg-white">
                      <h4 className="text-[14px] font-bold text-[#0f172a] leading-tight">
                        Pavan
                      </h4>
                      <p className="text-[11px] sm:text-[12px] text-[#64748b] mt-0.5 leading-tight">
                        Software Development Lead
                      </p>
                      <p className="text-[10px] text-[#94a3b8]">BIT Mesra</p>
                    </div>
                  </div>
                </div>
                <p className="text-center text-[12px] text-[#94a3b8] mt-2.5 font-normal">
                  and more...
                </p>
              </div>
            </div>

            {/* Center Column: Student Portrait Card */}
            <div className="lg:col-span-4 flex justify-center py-2">
              <div className="w-full max-w-[280px] rounded-[22px] overflow-hidden border border-[#dce3ec] shadow-[0_12px_35px_rgba(20,24,68,0.08)] bg-white flex flex-col items-center">
                <div className="w-full h-[270px] sm:h-[310px] overflow-hidden bg-[#e2e8f0] relative">
                  <img
                    src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&q=80"
                    alt="Student learning coding at Codegnan"
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                    loading="lazy"
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
                  {/* Sriram Teja */}
                  <div className="rounded-[14px] bg-white border border-[#e2e8f0] overflow-hidden shadow-sm flex flex-col items-center text-center group hover:shadow-md transition-shadow">
                    <div className="w-full h-[125px] sm:h-[135px] overflow-hidden bg-[#f1f5f9]">
                      <img
                        src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80"
                        alt="Sriram Teja - AIR 84, IIT Bombay"
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-3 w-full bg-white">
                      <h4 className="text-[14px] font-bold text-[#0f172a] leading-tight">
                        Sriram Teja
                      </h4>
                      <p className="text-[11px] sm:text-[12px] text-[#64748b] mt-0.5">
                        AIR 84, IIT Bombay
                      </p>
                    </div>
                  </div>

                  {/* Trivikram */}
                  <div className="rounded-[14px] bg-white border border-[#e2e8f0] overflow-hidden shadow-sm flex flex-col items-center text-center group hover:shadow-md transition-shadow">
                    <div className="w-full h-[125px] sm:h-[135px] overflow-hidden bg-[#f1f5f9]">
                      <img
                        src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=400&q=80"
                        alt="Trivikram - AIR 93, IIT Delhi"
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-3 w-full bg-white">
                      <h4 className="text-[14px] font-bold text-[#0f172a] leading-tight">
                        Trivikram
                      </h4>
                      <p className="text-[11px] sm:text-[12px] text-[#64748b] mt-0.5">
                        AIR 93, IIT Delhi
                      </p>
                    </div>
                  </div>
                </div>
                <p className="text-center text-[12px] text-[#94a3b8] mt-2.5 font-normal">
                  and more...
                </p>
              </div>

              {/* Bottom-Right Group: Masterclasses */}
              <div>
                <h3 className="text-[14px] sm:text-[15px] text-[#1e293b] mb-4">
                  Gain expert insights from{" "}
                  <strong className="font-bold text-[#0f172a]">
                    Masterclasses
                  </strong>
                </h3>
                <div className="grid grid-cols-2 gap-3.5">
                  {/* Rakesh Misra */}
                  <div className="rounded-[14px] bg-white border border-[#e2e8f0] overflow-hidden shadow-sm flex flex-col items-center text-center group hover:shadow-md transition-shadow">
                    <div className="w-full h-[125px] sm:h-[135px] overflow-hidden bg-[#f1f5f9]">
                      <img
                        src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80"
                        alt="Rakesh Misra - Cofounder, Uhana Stanford Alumnus"
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-3 w-full bg-white">
                      <h4 className="text-[14px] font-bold text-[#0f172a] leading-tight">
                        Rakesh Misra
                      </h4>
                      <p className="text-[11px] sm:text-[12px] text-[#64748b] mt-0.5 leading-tight">
                        Cofounder, Uhana
                      </p>
                      <p className="text-[10px] text-[#94a3b8]">Stanford Alumnus</p>
                    </div>
                  </div>

                  {/* Pranavi */}
                  <div className="rounded-[14px] bg-white border border-[#e2e8f0] overflow-hidden shadow-sm flex flex-col items-center text-center group hover:shadow-md transition-shadow">
                    <div className="w-full h-[125px] sm:h-[135px] overflow-hidden bg-[#f1f5f9]">
                      <img
                        src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80"
                        alt="Pranavi - Machine Learning Scientist, Apple"
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-3 w-full bg-white">
                      <h4 className="text-[14px] font-bold text-[#0f172a] leading-tight">
                        Pranavi
                      </h4>
                      <p className="text-[11px] sm:text-[12px] text-[#64748b] mt-0.5 leading-tight">
                        Machine Learning
                      </p>
                      <p className="text-[10px] text-[#94a3b8]">Scientist, Apple</p>
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
