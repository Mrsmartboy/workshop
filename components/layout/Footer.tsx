import React from "react";

export function Footer() {
  return (
    <footer className="bg-white border-t border-[#eaedf5] pt-16 pb-10">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-14 border-b border-[#eaedf5]">
          {/* Column 1: Brand Logo + Description + Social Icons */}
          <div className="md:col-span-4">
            <a href="/" className="inline-block" aria-label="Codegnan Lab Home">
              <img
                src="/codegnan_lab.png"
                alt="Codegnan Lab"
                className="h-11 sm:h-12 w-auto object-contain"
              />
            </a>
            <p className="mt-4 text-[14px] text-[#606482] leading-relaxed max-w-[320px]">
              Codegnan Labs brings hands-on technology experiences directly to college campuses. Empowering students to explore, learn, build, and compete.
            </p>

            {/* Social Media Icons */}
            <div className="mt-6 flex items-center gap-4">
              {/* Facebook */}
              <a
                href="#"
                className="w-9 h-9 rounded-full border border-[#dfe2ea] flex items-center justify-center text-[#606482] hover:text-[#304ffe] hover:border-[#304ffe] transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 1.09.044 1.613.115V7.95c-.263-.026-.72-.044-1.182-.044-1.676 0-2.327.633-2.327 2.282v1.856h3.32l-.57 3.667H13.063v7.98h-3.962z" />
                </svg>
              </a>
              {/* Twitter / X */}
              <a
                href="#"
                className="w-9 h-9 rounded-full border border-[#dfe2ea] flex items-center justify-center text-[#606482] hover:text-[#304ffe] hover:border-[#304ffe] transition-colors"
                aria-label="Twitter"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              {/* Instagram */}
              <a
                href="#"
                className="w-9 h-9 rounded-full border border-[#dfe2ea] flex items-center justify-center text-[#606482] hover:text-[#304ffe] hover:border-[#304ffe] transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              {/* LinkedIn */}
              <a
                href="#"
                className="w-9 h-9 rounded-full border border-[#dfe2ea] flex items-center justify-center text-[#606482] hover:text-[#304ffe] hover:border-[#304ffe] transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: CAMPUS PROGRAMS */}
          <div className="md:col-span-2">
            <h4 className="text-[13px] font-bold uppercase tracking-wider text-[#304ffe] mb-5">
              Experiences
            </h4>
            <ul className="space-y-3 text-[14px] text-[#0d1033]">
              <li>
                <a href="#experiences" className="hover:text-[#304ffe] transition-colors">
                  Hands-on Workshops
                </a>
              </li>
              <li>
                <a href="#experiences" className="hover:text-[#304ffe] transition-colors">
                  Intensive Bootcamps
                </a>
              </li>
              <li>
                <a href="#experiences" className="hover:text-[#304ffe] transition-colors">
                  Campus Hackathons
                </a>
              </li>
              <li>
                <a href="#for-colleges" className="hover:text-[#304ffe] transition-colors">
                  College Tech Fests
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: TECH TRACKS */}
          <div className="md:col-span-3">
            <h4 className="text-[13px] font-bold uppercase tracking-wider text-[#304ffe] mb-5">
              Tech Tracks
            </h4>
            <ul className="space-y-3 text-[14px] text-[#0d1033]">
              <li>
                <a href="#tech-tracks" className="hover:text-[#304ffe] transition-colors">
                  AI &amp; Generative AI
                </a>
              </li>
              <li>
                <a href="#tech-tracks" className="hover:text-[#304ffe] transition-colors">
                  AI Coding Tools &amp; Agents
                </a>
              </li>
              <li>
                <a href="#tech-tracks" className="hover:text-[#304ffe] transition-colors">
                  Full Stack Web Development
                </a>
              </li>
              <li>
                <a href="#tech-tracks" className="hover:text-[#304ffe] transition-colors">
                  Python &amp; Data Engineering
                </a>
              </li>
              <li>
                <a href="#tech-tracks" className="hover:text-[#304ffe] transition-colors">
                  Java Microservices
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: CAMPUS DESK */}
          <div className="md:col-span-3">
            <h4 className="text-[13px] font-bold uppercase tracking-wider text-[#304ffe] mb-5">
              Campus Partnerships
            </h4>
            <p className="text-[14px] text-[#606482] leading-relaxed mb-3">
              Codegnan IT Solutions, Lakshmi Basaveswara Residency, Vijayawada, AP, India.
            </p>
            <div className="space-y-1 text-xs">
              <a
                href="mailto:cto@codegnan.com"
                className="block font-semibold text-[#304ffe] hover:underline"
              >
                cto@codegnan.com
              </a>
              <a href="tel:+918121289993" className="block font-semibold text-[#0d1033] hover:text-[#304ffe] transition-colors">
                +91 81212 89993
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#606482]">
          <span>© 2026 Codegnan Labs • A Codegnan Colleges Initiative. All rights reserved.</span>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-[#304ffe] transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-[#304ffe] transition-colors">
              Terms of Service
            </a>
            <a href="#campus-enquiry" className="text-[#304ffe] font-bold hover:underline">
              Bring Codegnan to Your Campus &rarr;
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
