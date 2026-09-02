"use client";

import { useState } from "react";
import {
  ShoppingBag,
  ChevronDown,
  Menu,
  X,
  Check,
  ArrowRight,
  Sparkles,
  Search,
  BookOpen,
  Users,
  Award,
  MessageSquare,
  BarChart2,
  ExternalLink,
  Calendar,
  Clock,
  MapPin,
} from "lucide-react";

// Types
interface Course {
  id: string;
  title: string;
  description: string;
  label: "Workshop" | "Hackathon" | "Bootcamp";
  level: "Beginner" | "Intermediate" | "Advanced";
  price: string;
  priceNum: number;
  type: "design" | "analytics" | "cro";
}

interface EventItem {
  id: string;
  title: string;
  description: string;
  tag: string;
  date: string;
  time: string;
  venueLine1: string;
  venueLine2: string;
  imageUrl: string;
  imageAlt: string;
}

const COURSES: Course[] = [
  {
    id: "workshops",
    title: "Hands-on Workshops",
    description:
      "Learn trending technologies through interactive sessions, practical exercises, and expert guidance.",
    label: "Workshop",
    level: "Beginner",
    price: "$ 399.00 USD",
    priceNum: 399,
    type: "design",
  },
  {
    id: "hackathons",
    title: "Coding Hackathons",
    description:
      "Collaborate, innovate, and solve real-world challenges while competing and building impactful solutions.",
    label: "Hackathon",
    level: "Advanced",
    price: "$ 399.00 USD",
    priceNum: 399,
    type: "analytics",
  },
  {
    id: "bootcamps",
    title: "Intensive Bootcamps",
    description:
      "Accelerate your skills with focused, project-based training designed for practical learning and career growth.",
    label: "Bootcamp",
    level: "Intermediate",
    price: "$ 399.00 USD",
    priceNum: 399,
    type: "cro",
  },
];

const UPCOMING_EVENTS: EventItem[] = [
  {
    id: "data-ai-business",
    title: "Data & AI for Business Professionals",
    tag: "Working Professional Flagship",
    description:
      "Master data analytics, machine learning fundamentals, and AI-driven decision making designed for working professionals ready to lead digital transformation.",
    date: "September 20, 2026",
    time: "10:00 am",
    venueLine1: "Codegnan Training Center",
    venueLine2: "Vijayawada, Andhra Pradesh",
    imageUrl:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=85",
    imageAlt: "Data analytics dashboard with AI-powered charts and insights",
  },
  {
    id: "ai-coding-agents",
    title: "AI Coding & Coding Agents",
    tag: "Developer Flagship",
    description:
      "Learn to build intelligent coding agents, leverage AI-assisted development workflows, and master prompt engineering for production-grade software.",
    date: "October 5, 2026",
    time: "10:00 am",
    venueLine1: "Codegnan Training Center",
    venueLine2: "Vijayawada, Andhra Pradesh",
    imageUrl: "/gallery/ai_coding.png",
    imageAlt: "AI Coding and Autonomous Agents 3D technology visual",
  },
  {
    id: "claude-mastery-bootcamp",
    title: "Claude Mastery Bootcamp",
    tag: "Certification Flagship",
    description:
      "Deep-dive into Claude AI — master advanced prompting, tool use, agents, and enterprise integration patterns to earn your Anthropic-aligned certification.",
    date: "October 18, 2026",
    time: "10:00 am",
    venueLine1: "Codegnan Training Center",
    venueLine2: "Vijayawada, Andhra Pradesh",
    imageUrl: "/gallery/claude_banner.jpg",
    imageAlt: "Anthropic Claude Generative AI Mastery Bootcamp Visual",
  },
];

export default function AcademyPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [pagesDropdownOpen, setPagesDropdownOpen] = useState(false);
  const [cartItems, setCartItems] = useState<Course[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const addToCart = (course: Course) => {
    if (!cartItems.some((item) => item.id === course.id)) {
      setCartItems([...cartItems, course]);
      triggerToast(`Added "${course.title}" to cart!`);
    } else {
      triggerToast(`"${course.title}" is already in your cart.`);
    }
  };

  const removeFromCart = (id: string) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const cartTotal = cartItems.reduce((acc, curr) => acc + curr.priceNum, 0);

  return (
    <div className="min-h-screen bg-white text-[#0d1033] flex flex-col font-sans relative overflow-x-hidden selection:bg-[#304ffe] selection:text-white">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#0d1033] text-white px-5 py-3 rounded-lg shadow-xl flex items-center gap-3 border border-white/10 animate-bounce">
          <div className="w-2 h-2 rounded-full bg-[#304ffe]" />
          <span className="text-xs font-semibold">{toastMessage}</span>
        </div>
      )}

      {/* ========================================================= */}
      {/* 1. NAVIGATION BAR */}
      {/* ========================================================= */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#f0f1f7]">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8 h-[84px] flex items-center justify-between">
          {/* Left: Codegnan Brand Logo */}
          <div className="flex items-center gap-8 lg:gap-12">
            <a
              href="#"
              className="flex items-center gap-3 group text-[#0d1033]"
              aria-label="Codegnan Home"
            >
              <img
                src="/Codegnan-New-Logo.pngw3.webp"
                alt="Codegnan"
                className="h-9 sm:h-10 w-auto object-contain transition-transform group-hover:scale-105"
              />
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-8 text-[14px] font-semibold text-[#606482]">
              <a
                href="#"
                className="text-[#304ffe] font-bold transition-colors hover:text-[#253bdf]"
              >
                Home
              </a>

              {/* Pages Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setPagesDropdownOpen(true)}
                onMouseLeave={() => setPagesDropdownOpen(false)}
              >
                <button
                  type="button"
                  onClick={() => setPagesDropdownOpen(!pagesDropdownOpen)}
                  className="flex items-center gap-1.5 hover:text-[#304ffe] transition-colors py-2"
                >
                  <span>Pages</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      pagesDropdownOpen ? "rotate-180 text-[#304ffe]" : ""
                    }`}
                  />
                </button>

                {pagesDropdownOpen && (
                  <div className="absolute top-full left-0 w-48 bg-white rounded-xl shadow-[0_12px_30px_rgba(13,16,51,0.1)] border border-[#eef0f7] py-2 px-1 z-50 animate-in fade-in slide-in-from-top-2">
                    <a
                      href="#courses"
                      onClick={() => setPagesDropdownOpen(false)}
                      className="block px-4 py-2 text-xs font-medium text-[#606482] hover:text-[#304ffe] hover:bg-[#f8f9ff] rounded-lg"
                    >
                      Featured Courses
                    </a>
                    <a
                      href="#about"
                      onClick={() => setPagesDropdownOpen(false)}
                      className="block px-4 py-2 text-xs font-medium text-[#606482] hover:text-[#304ffe] hover:bg-[#f8f9ff] rounded-lg"
                    >
                      About Us
                    </a>
                    <a
                      href="#why-us"
                      onClick={() => setPagesDropdownOpen(false)}
                      className="block px-4 py-2 text-xs font-medium text-[#606482] hover:text-[#304ffe] hover:bg-[#f8f9ff] rounded-lg"
                    >
                      Why Learning With Us
                    </a>
                    <a
                      href="#testimonial"
                      onClick={() => setPagesDropdownOpen(false)}
                      className="block px-4 py-2 text-xs font-medium text-[#606482] hover:text-[#304ffe] hover:bg-[#f8f9ff] rounded-lg"
                    >
                      Student Stories
                    </a>
                  </div>
                )}
              </div>

              <a
                href="#courses"
                className="hover:text-[#304ffe] transition-colors"
              >
                Courses
              </a>
              <a
                href="/gallery"
                className="hover:text-[#304ffe] transition-colors"
              >
                Gallery
              </a>
              <a
                href="#about"
                className="hover:text-[#304ffe] transition-colors"
              >
                About
              </a>
            </nav>
          </div>

          {/* Right Action Items: Courses Button */}
          <div className="flex items-center gap-5">
            {/* Blue Action Button */}
            <button
              type="button"
              onClick={() => scrollToSection("courses")}
              className="hidden sm:inline-flex items-center justify-center px-6 py-2.5 bg-[#304ffe] hover:bg-[#253bdf] text-white text-[12px] font-bold uppercase tracking-[0.08em] rounded-[6px] shadow-[0_6px_18px_rgba(48,79,254,0.25)] transition-all hover:-translate-y-0.5"
            >
              COURSES
            </button>

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#0d1033] hover:text-[#304ffe]"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-[#f0f1f7] bg-white px-6 py-5 space-y-4 shadow-lg">
            <a
              href="#"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-bold text-[#304ffe]"
            >
              Home
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-semibold text-[#606482]"
            >
              About
            </a>
            <a
              href="#courses"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-semibold text-[#606482]"
            >
              Courses
            </a>
            <a
              href="/gallery"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-semibold text-[#606482]"
            >
              Gallery
            </a>
            <a
              href="#why-us"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-semibold text-[#606482]"
            >
              Why Learning With Us
            </a>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                scrollToSection("courses");
              }}
              className="w-full py-3 bg-[#304ffe] text-white text-xs font-bold uppercase tracking-wider rounded-md"
            >
              COURSES
            </button>
          </div>
        )}
      </header>

      {/* ========================================================= */}
      {/* 2. HERO SECTION (IMAGE 1) */}
      {/* ========================================================= */}
      <section className="relative bg-white pt-12 pb-24 sm:pt-16 sm:pb-32 lg:pt-20 lg:pb-36 overflow-hidden">
        {/* Glowing Background Radial Blobs */}
        <div className="glow-blob glow-blob-hero-left" />
        <div className="glow-blob glow-blob-hero-top" />
        <div className="glow-blob glow-blob-hero-center" />
        <div className="glow-blob glow-blob-hero-bottom" />

        <div className="relative z-10 max-w-[1200px] mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-6 xl:col-span-6 max-w-[540px]">
              {/* Program type chips */}
              <div className="flex flex-wrap gap-2.5 mb-6">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#f0f3ff] text-[#304ffe] text-[11px] font-bold uppercase tracking-wider rounded-full">
                  <BookOpen className="w-3.5 h-3.5" />
                  Workshops
                </span>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#fff4e6] text-[#e67700] text-[11px] font-bold uppercase tracking-wider rounded-full">
                  <Users className="w-3.5 h-3.5" />
                  Hackathons
                </span>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#e6fcf5] text-[#0ca678] text-[11px] font-bold uppercase tracking-wider rounded-full">
                  <Award className="w-3.5 h-3.5" />
                  Bootcamps
                </span>
              </div>

              <h1 className="text-[44px] sm:text-[56px] lg:text-[62px] font-black leading-[1.06] tracking-[-0.045em] text-[#0d1033]">
                Grow your skills,
                <br />
                <span className="text-[#304ffe]">define your future</span>
                <span className="text-[#0d1033]">.</span>
              </h1>

              <p className="mt-6 text-[16px] sm:text-[17px] text-[#606482] leading-[1.65] max-w-[480px]">
                Join Codegnan&apos;s hands-on <strong className="text-[#0d1033] font-semibold">workshops</strong> to master trending technologies,
                compete in <strong className="text-[#0d1033] font-semibold">hackathons</strong> to solve real-world challenges,
                and accelerate your career through intensive <strong className="text-[#0d1033] font-semibold">bootcamps</strong> with
                project-based learning.
              </p>

              {/* Quick stats */}
              <div className="mt-7 flex items-center gap-6 text-[13px] text-[#606482]">
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-[#304ffe]" />
                  <span><strong className="text-[#0d1033] font-semibold">150+</strong> Workshops</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-[#e67700]" />
                  <span><strong className="text-[#0d1033] font-semibold">80+</strong> Hackathons</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-[#0ca678]" />
                  <span><strong className="text-[#0d1033] font-semibold">120+</strong> Bootcamps</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => scrollToSection("courses")}
                  className="px-8 py-3.5 bg-[#304ffe] hover:bg-[#253bdf] text-white text-[12px] font-bold uppercase tracking-[0.08em] rounded-[6px] shadow-[0_8px_20px_rgba(48,79,254,0.28)] transition-all hover:-translate-y-0.5 active:translate-y-0"
                >
                  EXPLORE PROGRAMS
                </button>

                <button
                  type="button"
                  onClick={() => scrollToSection("about")}
                  className="px-8 py-3.5 bg-transparent hover:bg-[#f0f3ff] border border-[#304ffe] text-[#304ffe] text-[12px] font-bold uppercase tracking-[0.08em] rounded-[6px] transition-all hover:-translate-y-0.5 active:translate-y-0"
                >
                  ABOUT US
                </button>
              </div>
            </div>

            {/* Right Hero Video Column */}
            <div className="lg:col-span-6 xl:col-span-6 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[500px]">
                {/* Decorative glow aura behind video */}
                <div className="absolute -inset-4 bg-gradient-to-tr from-[#304ffe]/15 to-[#8a9bff]/25 rounded-[32px] filter blur-xl -z-10" />

                {/* Hero Video Card */}
                <div className="relative rounded-[28px] overflow-hidden shadow-[0_24px_60px_rgba(20,24,68,0.16)] border-2 border-white/80 bg-black">
                  <video
                    src="/gallery/Build-Intelligent-RAG-Systems-WORKSHOP.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-[380px] sm:h-[460px] object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Gentle curved wave at bottom */}
        <div className="hero-bottom-curve">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="w-full h-12 text-[#ffffff]"
            fill="currentColor"
          >
            <path d="M0,0 C300,70 900,70 1200,0 L1200,120 L0,120 Z" />
          </svg>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. ABOUT ACADEMY SECTION (IMAGE 2) */}
      {/* ========================================================= */}
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

      {/* ========================================================= */}
      {/* 4. OUR COURSES SECTION (IMAGE 3) */}
      {/* ========================================================= */}
      <section id="courses" className="relative bg-white py-16 sm:py-24">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <h2 className="text-[34px] sm:text-[42px] font-extrabold tracking-[-0.035em] text-[#0d1033] leading-tight">
                Learn. Build. Innovate.
              </h2>
              <p className="mt-3 text-[15px] sm:text-[16px] text-[#606482] max-w-[580px] leading-relaxed">
                Gain practical experience through Codegnan’s hands-on workshops,
                hackathons, and intensive bootcamps designed to build
                industry-ready skills.
              </p>
            </div>

            <button
              type="button"
              onClick={() => {
                triggerToast(
                  "Explore all Codegnan workshops, hackathons, and bootcamps"
                );
              }}
              className="self-start md:self-auto px-7 py-3 bg-transparent hover:bg-[#f0f3ff] border border-[#304ffe] text-[#304ffe] text-[12px] font-bold uppercase tracking-[0.08em] rounded-[6px] transition-all hover:-translate-y-0.5 active:translate-y-0"
            >
              EXPLORE PROGRAMS
            </button>
          </div>

          {/* 3 Course Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {COURSES.map((course) => (
              <div
                key={course.id}
                className="course-card rounded-[20px] bg-white border border-[#eaedf6] overflow-hidden shadow-[0_10px_30px_rgba(20,24,68,0.06)] flex flex-col group"
              >
                {/* Top Banner Video */}
                <div className="h-[200px] sm:h-[210px] overflow-hidden bg-black">
                  {course.type === "design" && (
                    <video
                      src="/gallery/computer_vision_workshop.mp4"
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  )}
                  {course.type === "analytics" && (
                    <video
                      src="/gallery/agentic_ai_workshop.mp4"
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  )}
                  {course.type === "cro" && (
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
                </div>

                {/* Card Body */}
                <div className="p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-[20px] font-bold text-[#0d1033] leading-[1.3] group-hover:text-[#304ffe] transition-colors">
                      {course.title}
                    </h3>
                    <p className="mt-3 text-[14px] text-[#606482] leading-[1.65]">
                      {course.description}
                    </p>
                  </div>

                  {/* Card Footer */}
                  <div className="mt-8 pt-5 border-t border-[#f0f2f8] flex items-center justify-between">
                    {/* Label with Signal Bars */}
                    <div className="flex items-center gap-2">
                      <LevelSignal level={course.level} />
                      <span className="text-[13px] font-bold text-[#606482]">
                        {course.label}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 5. TESTIMONIAL / HIGHLIGHT BANNER (IMAGE 4) */}
      {/* ========================================================= */}
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

      {/* ========================================================= */}
      {/* 6. WHY LEARNING WITH US? SECTION (IMAGE 5) */}
      {/* ========================================================= */}
      <section id="why-us" className="relative bg-white py-20 sm:py-32">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
          {/* Header Row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-16">
            <h2 className="text-[34px] sm:text-[42px] font-extrabold tracking-[-0.035em] text-[#0d1033] leading-tight">
              Why Learning With us?
            </h2>

            <button
              type="button"
              onClick={() => scrollToSection("courses")}
              className="self-start sm:self-auto px-8 py-3.5 bg-[#304ffe] hover:bg-[#253bdf] text-white text-[12px] font-bold uppercase tracking-[0.08em] rounded-[6px] shadow-[0_6px_18px_rgba(48,79,254,0.25)] transition-all hover:-translate-y-0.5 active:translate-y-0"
            >
              OUR COURSES
            </button>
          </div>

          {/* 2x2 Grid with Middle Vertical Divider */}
          <div className="relative">
            {/* Center Vertical Divider Line (Visible on Large Screens) */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-[#eaedf5] -translate-x-1/2" />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-12 lg:gap-y-14 lg:gap-x-16">
              {/* Feature 1: World-Class Teachers */}
              <div className="flex items-start gap-6 lg:pr-8">
                <div className="shrink-0 w-20 h-20 sm:w-22 sm:h-22 rounded-full bg-[#f0f3ff] flex items-center justify-center shadow-[0_4px_20px_rgba(48,79,254,0.06)]">
                  <WorldClassTeachersIcon />
                </div>
                <div>
                  <h3 className="text-[20px] font-bold text-[#0d1033] leading-snug">
                    World-Class Teachers
                  </h3>
                  <p className="mt-2 text-[14px] text-[#606482] leading-[1.65]">
                    Lorem ipsum dolor sit amet, consecteturirem adipiscing elit.
                    Volutpat quis molestie tortorerrm, gravida a aenean neque.
                    Placerat
                  </p>
                </div>
              </div>

              {/* Feature 2: Global Students Community */}
              <div className="flex items-start gap-6 lg:pl-8">
                <div className="shrink-0 w-20 h-20 sm:w-22 sm:h-22 rounded-full bg-[#f0f3ff] flex items-center justify-center shadow-[0_4px_20px_rgba(48,79,254,0.06)]">
                  <GlobalStudentsCommunityIcon />
                </div>
                <div>
                  <h3 className="text-[20px] font-bold text-[#0d1033] leading-snug">
                    Global Students Community
                  </h3>
                  <p className="mt-2 text-[14px] text-[#606482] leading-[1.65]">
                    Lorem ipsum dolor sit amet, consecteturirem adipiscing elit.
                    Volutpat quis molestie tortorerrm, gravida a aenean neque.
                    Placerat
                  </p>
                </div>
              </div>

              {/* Feature 3: Top Notch Courses */}
              <div className="flex items-start gap-6 lg:pr-8">
                <div className="shrink-0 w-20 h-20 sm:w-22 sm:h-22 rounded-full bg-[#f0f3ff] flex items-center justify-center shadow-[0_4px_20px_rgba(48,79,254,0.06)]">
                  <TopNotchCoursesIcon />
                </div>
                <div>
                  <h3 className="text-[20px] font-bold text-[#0d1033] leading-snug">
                    Top Notch Courses
                  </h3>
                  <p className="mt-2 text-[14px] text-[#606482] leading-[1.65]">
                    Lorem ipsum dolor sit amet, consecteturirem adipiscing elit.
                    Volutpat quis molestie tortorerrm, gravida a aenean neque.
                    Placerat
                  </p>
                </div>
              </div>

              {/* Feature 4: One-on-One Mentorship */}
              <div className="flex items-start gap-6 lg:pl-8">
                <div className="shrink-0 w-20 h-20 sm:w-22 sm:h-22 rounded-full bg-[#f0f3ff] flex items-center justify-center shadow-[0_4px_20px_rgba(48,79,254,0.06)]">
                  <OneOnOneMentorshipIcon />
                </div>
                <div>
                  <h3 className="text-[20px] font-bold text-[#0d1033] leading-snug">
                    One-on-One Mentorship
                  </h3>
                  <p className="mt-2 text-[14px] text-[#606482] leading-[1.65]">
                    Lorem ipsum dolor sit amet, consecteturirem adipiscing elit.
                    Volutpat quis molestie tortorerrm, gravida a aenean neque.
                    Placerat
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Horizontal Divider matching reference screenshot */}
          <div className="mt-16 sm:mt-24 border-b border-[#eaedf5]" />
        </div>
      </section>

      {/* ========================================================= */}
      {/* 7. UPCOMING EVENTS SECTION (NEW REFERENCE) */}
      {/* ========================================================= */}
      <section id="events" className="relative bg-white py-16 sm:py-24">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
          {/* Header Row */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <h2 className="text-[34px] sm:text-[42px] font-extrabold tracking-[-0.035em] text-[#0d1033] leading-tight">
                Upcoming Events
              </h2>
              <p className="mt-3 text-[15px] sm:text-[16px] text-[#606482] max-w-[520px] leading-relaxed">
                Join our Wave-1 flagship programs — designed for business
                professionals, developers, and AI practitioners.
              </p>
            </div>

            <button
              type="button"
              onClick={() => {
                triggerToast("Showing all upcoming workshops and events");
              }}
              className="self-start md:self-auto px-7 py-3 bg-transparent hover:bg-[#f0f3ff] border border-[#304ffe] text-[#304ffe] text-[12px] font-bold uppercase tracking-[0.08em] rounded-[6px] transition-all hover:-translate-y-0.5 active:translate-y-0"
            >
              ALL EVENTS
            </button>
          </div>

          {/* Stacked Event Cards */}
          <div className="space-y-8">
            {UPCOMING_EVENTS.map((event) => (
              <div
                key={event.id}
                className="rounded-[22px] bg-white border border-[#eaedf6] overflow-hidden shadow-[0_12px_35px_rgba(20,24,68,0.06)] hover:shadow-[0_20px_45px_rgba(20,24,68,0.1)] transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 group"
              >
                {/* Left Photo Container */}
                <div className="lg:col-span-5 h-[230px] sm:h-[260px] lg:h-auto overflow-hidden bg-[#f4f6fc]">
                  <img
                    src={event.imageUrl}
                    alt={event.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>

                {/* Right Content */}
                <div className="lg:col-span-7 p-7 sm:p-9 flex flex-col justify-between">
                  <div>
                    {/* Flagship Tag Badge */}
                    <span className="inline-block px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#304ffe] bg-[#f0f3ff] rounded-full mb-3">
                      {event.tag}
                    </span>
                    <h3 className="text-[20px] sm:text-[22px] font-bold text-[#0d1033] leading-snug group-hover:text-[#304ffe] transition-colors">
                      {event.title}
                    </h3>
                    <p className="mt-3 text-[14px] text-[#606482] leading-[1.65]">
                      {event.description}
                    </p>
                  </div>

                  {/* Metadata Row with subtle divider */}
                  <div className="mt-8 pt-6 border-t border-[#f0f2f8] grid grid-cols-1 sm:grid-cols-2 gap-4 text-[13px] text-[#606482]">
                    {/* Date & Time */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-[#304ffe] shrink-0" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-[#304ffe] shrink-0" />
                        <span>{event.time}</span>
                      </div>
                    </div>

                    {/* Venue Location */}
                    <div className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-[#304ffe] shrink-0 mt-0.5" />
                      <div className="leading-snug">
                        <span>{event.venueLine1}</span>
                        <br />
                        <span>{event.venueLine2}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 8. GROW YOUR CAREER CTA BANNER SECTION (NEW REFERENCE) */}
      {/* ========================================================= */}
      <section className="testimonial-bg py-16 sm:py-24 text-white relative overflow-hidden">
        {/* Background Translucent Ovals matching reference screenshot */}
        <div className="blue-banner-oval blue-banner-oval-left" />
        <div className="blue-banner-oval blue-banner-oval-bottom" />
        <div className="blue-banner-oval blue-banner-oval-right" />
        <div className="blue-banner-oval blue-banner-oval-top" />

        <div className="relative z-10 max-w-[1200px] mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-5 max-w-[500px]">
              <h2 className="text-[34px] sm:text-[44px] lg:text-[46px] font-black tracking-[-0.035em] leading-[1.12]">
                Grow your career!
                <br />
                Start learning with Codegnan.
              </h2>

              <p className="mt-5 text-[15px] sm:text-[16px] text-white/90 leading-[1.75] font-normal max-w-[440px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio
                quisque integer elementum egestas aliquet tincidunt.
              </p>

              <div className="mt-8">
                <button
                  type="button"
                  onClick={() => scrollToSection("courses")}
                  className="px-8 py-3.5 bg-white text-[#304ffe] hover:bg-[#f0f3ff] text-[12px] font-bold uppercase tracking-[0.08em] rounded-[6px] shadow-[0_10px_25px_rgba(0,0,0,0.15)] transition-all hover:-translate-y-0.5 active:translate-y-0"
                >
                  OUR COURSES
                </button>
              </div>
            </div>

            {/* Right Multi-Device Learning Platform Illustration */}
            <div className="lg:col-span-7 flex justify-center lg:justify-end">
              <div className="w-full max-w-[560px]">
                <LearningPlatformDevicesIllustration />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 8. FOOTER */}
      {/* ========================================================= */}
      <footer className="bg-white border-t border-[#eaedf5] pt-16 pb-10">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-14 border-b border-[#eaedf5]">
            {/* Column 1: Brand Logo + Social Icons */}
            <div className="md:col-span-3">
              <a href="#" className="inline-block" aria-label="Codegnan Home">
                <img
                  src="/Codegnan-New-Logo.pngw3.webp"
                  alt="Codegnan"
                  className="h-9 w-auto object-contain"
                />
              </a>

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

            {/* Column 2: PAGES */}
            <div className="md:col-span-3">
              <h4 className="text-[13px] font-bold uppercase tracking-wider text-[#304ffe] mb-5">
                Pages
              </h4>
              <ul className="space-y-3 text-[14px] text-[#0d1033]">
                <li>
                  <a href="#" className="hover:text-[#304ffe] transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-[#304ffe] transition-colors">
                    About Codegnan
                  </a>
                </li>
                <li>
                  <a href="#courses" className="hover:text-[#304ffe] transition-colors">
                    Courses &amp; Programs
                  </a>
                </li>
                <li>
                  <a href="/gallery" className="hover:text-[#304ffe] transition-colors">
                    Gallery
                  </a>
                </li>
                <li>
                  <a href="#events" className="hover:text-[#304ffe] transition-colors">
                    Upcoming Events
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: PROGRAMS */}
            <div className="md:col-span-3">
              <h4 className="text-[13px] font-bold uppercase tracking-wider text-[#304ffe] mb-5">
                Programs
              </h4>
              <ul className="space-y-3 text-[14px] text-[#0d1033]">
                <li>
                  <a href="#courses" className="hover:text-[#304ffe] transition-colors">
                    Hands-on Workshops
                  </a>
                </li>
                <li>
                  <a href="#courses" className="hover:text-[#304ffe] transition-colors">
                    Coding Hackathons
                  </a>
                </li>
                <li>
                  <a href="#courses" className="hover:text-[#304ffe] transition-colors">
                    Intensive Bootcamps
                  </a>
                </li>
                <li>
                  <a href="#events" className="hover:text-[#304ffe] transition-colors">
                    Data &amp; AI for Business
                  </a>
                </li>
                <li>
                  <a href="#events" className="hover:text-[#304ffe] transition-colors">
                    AI Coding &amp; Agents
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4: CONTACT & CAMPUS */}
            <div className="md:col-span-3">
              <h4 className="text-[13px] font-bold uppercase tracking-wider text-[#304ffe] mb-5">
                Contact &amp; Campus
              </h4>
              <p className="text-[14px] text-[#606482] leading-relaxed mb-3">
                Codegnan IT Solutions, Lakshmi Basaveswara Residency, Vijayawada, Andhra Pradesh, India.
              </p>
              <a
                href="mailto:contact@codegnan.com"
                className="text-xs font-semibold text-[#304ffe] hover:underline"
              >
                contact@codegnan.com
              </a>
            </div>
          </div>

          {/* Bottom Copyright */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#606482]">
            <span>© 2026 Codegnan. All rights reserved.</span>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-[#304ffe] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-[#304ffe] transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-[#304ffe] transition-colors">
                Support
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* ========================================================= */}
      {/* 8. SHOPPING CART DRAWER */}
      {/* ========================================================= */}
      {cartOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/40 backdrop-blur-sm animate-in fade-in">
          <div
            className="w-full max-w-[420px] bg-white h-full shadow-2xl p-6 flex flex-col justify-between animate-in slide-in-from-right"
            role="dialog"
            aria-modal="true"
          >
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#eaedf5]">
                <div className="flex items-center gap-2">
                  <ShoppingBag className="w-5 h-5 text-[#304ffe]" />
                  <h3 className="text-lg font-bold text-[#0d1033]">
                    Your Program Cart ({cartItems.length})
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setCartOpen(false)}
                  className="p-1 rounded-md text-[#606482] hover:text-[#0d1033]"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Cart List */}
              <div className="mt-6 space-y-4 max-h-[50vh] overflow-y-auto">
                {cartItems.length === 0 ? (
                  <div className="py-12 text-center">
                    <div className="w-12 h-12 rounded-full bg-[#f4f6ff] text-[#304ffe] flex items-center justify-center mx-auto mb-3">
                      <ShoppingBag className="w-6 h-6" />
                    </div>
                    <p className="text-sm font-semibold text-[#0d1033]">
                      Your cart is empty
                    </p>
                    <p className="text-xs text-[#606482] mt-1">
                      Explore our workshops, hackathons, and bootcamps.
                    </p>
                  </div>
                ) : (
                  cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="p-4 rounded-xl border border-[#eaedf5] flex items-center justify-between gap-3 bg-[#fbfcff]"
                    >
                      <div>
                        <h4 className="text-xs font-bold text-[#0d1033] line-clamp-1">
                          {item.title}
                        </h4>
                        <span className="text-[11px] text-[#304ffe] font-semibold">
                          {item.label}
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeFromCart(item.id)}
                        className="text-xs text-red-500 hover:text-red-700 font-semibold"
                      >
                        Remove
                      </button>
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* Cart Summary & Checkout */}
            <div className="pt-6 border-t border-[#eaedf5]">
              <div className="flex items-center justify-between text-sm mb-4">
                <span className="text-[#606482]">Programs Selected:</span>
                <span className="text-lg font-bold text-[#0d1033]">
                  {cartItems.length}
                </span>
              </div>
              <button
                type="button"
                disabled={cartItems.length === 0}
                onClick={() => {
                  setCartOpen(false);
                  triggerToast("Registration initiated! Welcome to Codegnan.");
                  setCartItems([]);
                }}
                className="w-full py-3.5 bg-[#304ffe] disabled:bg-gray-300 hover:bg-[#253bdf] text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-colors"
              >
                Proceed to Registration
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* 9. COURSE ENROLLMENT MODAL */}
      {selectedCourse && modalOpen && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/40 backdrop-blur-sm p-4 animate-in fade-in">
          <div
            className="w-full max-w-[500px] bg-white rounded-2xl p-7 shadow-2xl relative animate-in zoom-in-95"
            role="dialog"
            aria-modal="true"
          >
            <button
              type="button"
              onClick={() => setModalOpen(false)}
              className="absolute top-5 right-5 p-1 rounded-md text-[#606482] hover:text-[#0d1033]"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#304ffe]">
              <Sparkles className="w-4 h-4" /> Codegnan Program
            </div>

            <h3 className="mt-3 text-2xl font-black text-[#0d1033]">
              {selectedCourse.title}
            </h3>

            <p className="mt-3 text-sm text-[#606482] leading-relaxed">
              {selectedCourse.description}
            </p>

            <div className="mt-6 flex items-center justify-between p-4 bg-[#f8f9fd] rounded-xl border border-[#eaedf5]">
              <div>
                <span className="block text-[11px] font-semibold text-[#888c9f] uppercase tracking-wider">
                  Skill Level
                </span>
                <span className="text-sm font-bold text-[#0d1033]">
                  {selectedCourse.level}
                </span>
              </div>
              <div className="text-right">
                <span className="block text-[11px] font-semibold text-[#888c9f] uppercase tracking-wider">
                  Tuition
                </span>
                <span className="text-sm font-bold text-[#304ffe]">
                  {selectedCourse.price}
                </span>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <button
                type="button"
                onClick={() => {
                  addToCart(selectedCourse);
                  setModalOpen(false);
                }}
                className="flex-1 py-3 bg-[#304ffe] hover:bg-[#253bdf] text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-colors"
              >
                Add to Cart
              </button>
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="px-5 py-3 border border-[#eaedf5] text-[#606482] hover:text-[#0d1033] font-bold text-xs uppercase tracking-wider rounded-lg transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// =========================================================================
// CUSTOM VECTOR ARTWORK FOR COURSE CARDS (MATCHING SCREENSHOTS)
// =========================================================================

/**
 * Card 1: Brand & Identity Design for Marketers Illustration
 * Features: Ruler on left, browser window with eye, typography "A" card, vector pen tool
 */
function DesignCourseIllustration() {
  return (
    <svg
      viewBox="0 0 340 180"
      className="w-full h-full drop-shadow-[0_8px_16px_rgba(0,0,0,0.15)]"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background soft glow card */}
      <rect
        x="15"
        y="15"
        width="310"
        height="150"
        rx="8"
        fill="rgba(255,255,255,0.08)"
      />

      {/* Vertical Ruler on Left */}
      <rect x="25" y="24" width="16" height="132" rx="2" fill="#ffffff" />
      <line x1="33" y1="36" x2="41" y2="36" stroke="#99a8ff" strokeWidth="1.5" />
      <line x1="37" y1="44" x2="41" y2="44" stroke="#99a8ff" strokeWidth="1.2" />
      <line x1="33" y1="52" x2="41" y2="52" stroke="#99a8ff" strokeWidth="1.5" />
      <line x1="37" y1="60" x2="41" y2="60" stroke="#99a8ff" strokeWidth="1.2" />
      <line x1="33" y1="68" x2="41" y2="68" stroke="#99a8ff" strokeWidth="1.5" />
      <line x1="37" y1="76" x2="41" y2="76" stroke="#99a8ff" strokeWidth="1.2" />
      <line x1="33" y1="84" x2="41" y2="84" stroke="#99a8ff" strokeWidth="1.5" />
      <line x1="37" y1="92" x2="41" y2="92" stroke="#99a8ff" strokeWidth="1.2" />
      <line x1="33" y1="100" x2="41" y2="100" stroke="#99a8ff" strokeWidth="1.5" />
      <line x1="37" y1="108" x2="41" y2="108" stroke="#99a8ff" strokeWidth="1.2" />
      <line x1="33" y1="116" x2="41" y2="116" stroke="#99a8ff" strokeWidth="1.5" />
      <line x1="37" y1="124" x2="41" y2="124" stroke="#99a8ff" strokeWidth="1.2" />
      <line x1="33" y1="132" x2="41" y2="132" stroke="#99a8ff" strokeWidth="1.5" />
      <line x1="37" y1="140" x2="41" y2="140" stroke="#99a8ff" strokeWidth="1.2" />

      {/* Main White Canvas/Card */}
      <rect
        x="49"
        y="24"
        width="234"
        height="132"
        rx="8"
        fill="#ffffff"
        className="shadow-md"
      />

      {/* Canvas Top Bar with Dots */}
      <circle cx="61" cy="36" r="3" fill="#304ffe" />
      <circle cx="70" cy="36" r="3" fill="#304ffe" />
      <circle cx="79" cy="36" r="3" fill="#304ffe" />
      <circle cx="88" cy="36" r="3" fill="#304ffe" />
      <line
        x1="52"
        y1="46"
        x2="280"
        y2="46"
        stroke="#f0f2f9"
        strokeWidth="1.5"
      />

      {/* Left Sub-Card: Eye Design Focus */}
      <rect
        x="58"
        y="56"
        width="96"
        height="88"
        rx="4"
        fill="#f4f6fc"
        stroke="#e5e9f6"
        strokeWidth="1"
      />
      {/* Grid lines inside eye card */}
      <line x1="58" y1="100" x2="154" y2="100" stroke="#e0e4f2" strokeDasharray="3 3" />
      <line x1="106" y1="56" x2="106" y2="144" stroke="#e0e4f2" strokeDasharray="3 3" />
      {/* Eye graphic */}
      <path
        d="M80 100 C90 86, 122 86, 132 100 C122 114, 90 114, 80 100 Z"
        fill="#304ffe"
      />
      <circle cx="106" cy="100" r="5" fill="#ffffff" />

      {/* Right Sub-Cards */}
      {/* Typography Card with letter 'A' */}
      <rect
        x="164"
        y="56"
        width="54"
        height="38"
        rx="4"
        fill="#f4f6fc"
        stroke="#e5e9f6"
        strokeWidth="1"
      />
      <text
        x="183"
        y="83"
        fill="#9fa8da"
        fontSize="22"
        fontWeight="bold"
        fontFamily="sans-serif"
      >
        A
      </text>

      {/* Paragraph line previews */}
      <rect x="226" y="60" width="48" height="4" rx="2" fill="#c5cae9" />
      <rect x="226" y="68" width="38" height="4" rx="2" fill="#e0e4f2" />
      <rect x="226" y="76" width="44" height="4" rx="2" fill="#e0e4f2" />

      {/* Image Block Preview 1 */}
      <rect
        x="164"
        y="102"
        width="54"
        height="42"
        rx="4"
        fill="#e8eaf6"
      />
      <circle cx="178" cy="115" r="4" fill="#c5cae9" />
      <polygon points="170,136 182,124 194,136" fill="#c5cae9" />
      <polygon points="186,136 198,120 210,136" fill="#9fa8da" />

      {/* Image Block Preview 2 */}
      <rect
        x="226"
        y="102"
        width="48"
        height="42"
        rx="4"
        fill="#e8eaf6"
      />
      <circle cx="238" cy="115" r="3.5" fill="#c5cae9" />
      <polygon points="232,136 242,126 252,136" fill="#c5cae9" />
      <polygon points="246,136 256,122 268,136" fill="#9fa8da" />

      {/* Vector Pen Tool on Right */}
      <g transform="translate(290, 48)">
        <path
          d="M6 0 L14 8 L8 14 L0 6 Z"
          fill="#ffffff"
          stroke="#304ffe"
          strokeWidth="1"
        />
        <path d="M0 6 L-2 40 L4 44 L10 40 L8 14 Z" fill="#ffffff" />
        <path d="M4 44 L4 90 L6 90 L6 44 Z" fill="#ffffff" />
        <polygon points="2,44 6,56 10,44" fill="#304ffe" />
      </g>
    </svg>
  );
}

/**
 * Card 2: Advanced Funnels with Google Analytics Illustration
 * Features: Growth line chart with blue fill, checkmark indicator, circular donut chart, bar chart
 */
function AnalyticsCourseIllustration() {
  return (
    <svg
      viewBox="0 0 340 180"
      className="w-full h-full drop-shadow-[0_8px_16px_rgba(0,0,0,0.15)]"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background card container */}
      <rect
        x="15"
        y="15"
        width="310"
        height="150"
        rx="8"
        fill="rgba(255,255,255,0.08)"
      />

      {/* Left Analytics Window (Large) */}
      <rect
        x="25"
        y="24"
        width="180"
        height="132"
        rx="8"
        fill="#ffffff"
        className="shadow-md"
      />
      {/* Window headers */}
      <rect x="37" y="36" width="24" height="4" rx="2" fill="#c5cae9" />
      <rect x="69" y="36" width="24" height="4" rx="2" fill="#c5cae9" />
      <rect x="101" y="36" width="24" height="4" rx="2" fill="#304ffe" />

      {/* Growth Funnel Area Chart */}
      <path
        d="M37 136 L37 114 L75 106 L120 72 L165 48 L195 48 L195 136 Z"
        fill="#e8eaf6"
      />
      <path
        d="M37 114 L75 106 L120 72 L165 48 L195 48"
        stroke="#9fa8da"
        strokeWidth="2.5"
      />
      <path
        d="M120 72 L120 136 L195 136 L195 48 Z"
        fill="#304ffe"
      />

      {/* Checkmark verification badge on growth chart */}
      <circle cx="158" cy="120" r="10" fill="#ffffff" />
      <path
        d="M153 120 L156 123 L163 116"
        stroke="#304ffe"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Bottom status indicator pill */}
      <rect x="85" y="146" width="30" height="3" rx="1.5" fill="#304ffe" />

      {/* Right Top Card: Bar Chart Card */}
      <rect
        x="215"
        y="24"
        width="100"
        height="60"
        rx="8"
        fill="#ffffff"
        className="shadow-md"
      />
      {/* Bars */}
      <rect x="227" y="52" width="6" height="24" rx="2" fill="#c5cae9" />
      <rect x="241" y="44" width="6" height="32" rx="2" fill="#c5cae9" />
      <rect x="255" y="36" width="6" height="40" rx="2" fill="#9fa8da" />
      <rect x="269" y="48" width="6" height="28" rx="2" fill="#c5cae9" />
      <rect x="283" y="32" width="6" height="44" rx="2" fill="#304ffe" />
      <rect x="297" y="40" width="6" height="36" rx="2" fill="#9fa8da" />

      {/* Right Bottom Card: Donut Circular Chart Card */}
      <rect
        x="215"
        y="94"
        width="100"
        height="62"
        rx="8"
        fill="#ffffff"
        className="shadow-md"
      />
      {/* Donut graphic */}
      <circle
        cx="265"
        cy="125"
        r="20"
        stroke="#e8eaf6"
        strokeWidth="6"
      />
      <circle
        cx="265"
        cy="125"
        r="20"
        stroke="#304ffe"
        strokeWidth="6"
        strokeDasharray="95 130"
        strokeDashoffset="25"
      />
      <circle
        cx="265"
        cy="125"
        r="20"
        stroke="#9fa8da"
        strokeWidth="6"
        strokeDasharray="30 130"
        strokeDashoffset="-70"
      />
    </svg>
  );
}

/**
 * Card 3: Landing Page A/B Testing Illustration
 * Features: Layered wireframe responsive layouts, circles, pill controls, cards
 */
function CroCourseIllustration() {
  return (
    <svg
      viewBox="0 0 340 180"
      className="w-full h-full drop-shadow-[0_8px_16px_rgba(0,0,0,0.15)]"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background card container */}
      <rect
        x="15"
        y="15"
        width="310"
        height="150"
        rx="8"
        fill="rgba(255,255,255,0.08)"
      />

      {/* Wireframe Mockup 1 (Underneath/Left) */}
      <rect
        x="40"
        y="32"
        width="150"
        height="124"
        rx="8"
        fill="#ffffff"
        className="shadow-sm"
      />
      <rect x="52" y="44" width="30" height="5" rx="2" fill="#c5cae9" />
      <rect x="52" y="57" width="60" height="3" rx="1.5" fill="#e0e4f2" />
      <rect x="52" y="65" width="80" height="3" rx="1.5" fill="#e0e4f2" />
      <rect x="52" y="78" width="38" height="24" rx="4" fill="#e8eaf6" />
      <rect x="98" y="78" width="38" height="24" rx="4" fill="#e8eaf6" />
      <circle cx="60" cy="122" r="7" fill="#c5cae9" />
      <circle cx="82" cy="122" r="7" fill="#c5cae9" />
      <circle cx="104" cy="122" r="7" fill="#c5cae9" />

      {/* Wireframe Mockup 2 (Active/Right Top Layer) */}
      <rect
        x="135"
        y="24"
        width="165"
        height="132"
        rx="8"
        fill="#ffffff"
        className="shadow-lg"
      />

      {/* Top Header Pill / Navigation */}
      <rect x="150" y="38" width="38" height="6" rx="3" fill="#304ffe" />
      <rect x="250" y="38" width="35" height="6" rx="3" fill="#e0e4f2" />

      {/* Hero Block with Avatars & CTA */}
      <rect x="150" y="52" width="90" height="4" rx="2" fill="#9fa8da" />
      <rect x="150" y="60" width="70" height="4" rx="2" fill="#c5cae9" />

      {/* Avatar Circles */}
      <circle cx="160" cy="80" r="9" fill="#e8eaf6" />
      <circle cx="184" cy="80" r="9" fill="#e8eaf6" />
      <circle cx="208" cy="80" r="9" fill="#e8eaf6" />

      {/* Sidebar small controls */}
      <rect x="248" y="74" width="36" height="3" rx="1.5" fill="#c5cae9" />
      <rect x="248" y="82" width="28" height="3" rx="1.5" fill="#e0e4f2" />

      {/* Solid Primary Button on Wireframe */}
      <rect
        x="150"
        y="102"
        width="76"
        height="20"
        rx="4"
        fill="#304ffe"
      />

      {/* Bottom Switch Pill */}
      <rect
        x="248"
        y="105"
        width="28"
        height="14"
        rx="7"
        fill="#304ffe"
      />
      <circle cx="268" cy="112" r="5" fill="#ffffff" />

      {/* Mini line indicators */}
      <rect x="150" y="134" width="40" height="3" rx="1.5" fill="#e0e4f2" />
      <rect x="200" y="134" width="40" height="3" rx="1.5" fill="#e0e4f2" />
    </svg>
  );
}

// =========================================================================
// CUSTOM VECTOR ICONS FOR "WHY LEARNING WITH US" (MATCHING SCREENSHOTS)
// =========================================================================

/**
 * 1. World-Class Teachers Icon
 * People group outline with solid blue star badge
 */
function WorldClassTeachersIcon() {
  return (
    <svg
      viewBox="0 0 64 64"
      className="w-12 h-12 sm:w-14 sm:h-14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Left Person */}
      <circle cx="18" cy="24" r="5" stroke="#0d1033" strokeWidth="2.2" />
      <path
        d="M9 40 C9 34, 21 33, 23 38"
        stroke="#0d1033"
        strokeWidth="2.2"
        strokeLinecap="round"
      />

      {/* Right Person */}
      <circle cx="46" cy="24" r="5" stroke="#0d1033" strokeWidth="2.2" />
      <path
        d="M41 38 C43 33, 55 34, 55 40"
        stroke="#0d1033"
        strokeWidth="2.2"
        strokeLinecap="round"
      />

      {/* Center Main Person */}
      <circle cx="32" cy="18" r="6.5" stroke="#0d1033" strokeWidth="2.4" fill="#ffffff" />
      <path
        d="M21 35 C21 29, 43 29, 43 35"
        stroke="#0d1033"
        strokeWidth="2.4"
        strokeLinecap="round"
      />

      {/* Bottom Blue Star Badge */}
      <g transform="translate(36, 33)">
        <polygon
          points="10,0 12.8,6.8 20,7.3 14.5,12 16.2,19 10,15.2 3.8,19 5.5,12 0,7.3 7.2,6.8"
          fill="#304ffe"
        />
      </g>
    </svg>
  );
}

/**
 * 2. Global Students Community Icon
 * Connected network nodes with center person and blue accent dots
 */
function GlobalStudentsCommunityIcon() {
  return (
    <svg
      viewBox="0 0 64 64"
      className="w-12 h-12 sm:w-14 sm:h-14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Connection Lines */}
      <line x1="32" y1="28" x2="16" y2="18" stroke="#0d1033" strokeWidth="2" />
      <line x1="32" y1="28" x2="48" y2="18" stroke="#0d1033" strokeWidth="2" />
      <line x1="32" y1="28" x2="14" y2="39" stroke="#0d1033" strokeWidth="2" />
      <line x1="32" y1="28" x2="50" y2="39" stroke="#0d1033" strokeWidth="2" />
      <line x1="32" y1="28" x2="32" y2="51" stroke="#0d1033" strokeWidth="2" />

      {/* Center Main Node with Person */}
      <circle cx="32" cy="28" r="11" stroke="#0d1033" strokeWidth="2.4" fill="#ffffff" />
      <circle cx="32" cy="24" r="3.5" stroke="#0d1033" strokeWidth="2" />
      <path
        d="M25 34 C25 31, 39 31, 39 34"
        stroke="#0d1033"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Top Left Outline Node */}
      <circle cx="16" cy="18" r="5" stroke="#0d1033" strokeWidth="2.2" fill="#ffffff" />

      {/* Top Right Blue Solid Node */}
      <circle cx="48" cy="18" r="5.5" fill="#304ffe" />

      {/* Mid Left Blue Solid Node */}
      <circle cx="14" cy="39" r="5.5" fill="#304ffe" />

      {/* Mid Right Outline Node */}
      <circle cx="50" cy="39" r="5" stroke="#0d1033" strokeWidth="2.2" fill="#ffffff" />

      {/* Bottom Outline Node */}
      <circle cx="32" cy="51" r="5" stroke="#0d1033" strokeWidth="2.2" fill="#ffffff" />
    </svg>
  );
}

/**
 * 3. Top Notch Courses Icon
 * Certificate / diploma paper with blue star ribbon badge
 */
function TopNotchCoursesIcon() {
  return (
    <svg
      viewBox="0 0 64 64"
      className="w-12 h-12 sm:w-14 sm:h-14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Behind Diploma Page Outline */}
      <rect
        x="10"
        y="13"
        width="38"
        height="28"
        rx="5"
        stroke="#0d1033"
        strokeWidth="2.2"
      />

      {/* Front Diploma Page */}
      <rect
        x="15"
        y="19"
        width="38"
        height="28"
        rx="5"
        stroke="#0d1033"
        strokeWidth="2.4"
        fill="#ffffff"
      />

      {/* Certificate Content Lines */}
      <line x1="21" y1="27" x2="39" y2="27" stroke="#c5cae9" strokeWidth="2.2" strokeLinecap="round" />
      <line x1="21" y1="33" x2="33" y2="33" stroke="#c5cae9" strokeWidth="2.2" strokeLinecap="round" />

      {/* Blue Ribbon & Star Badge on Bottom Right */}
      <g transform="translate(37, 32)">
        {/* Ribbon tails */}
        <path d="M7 16 L4 23 L9 20 L14 23 L11 16 Z" fill="#304ffe" />
        {/* Star */}
        <polygon
          points="9,1 11.5,6.5 17,7.2 13,11 14.2,16.5 9,13.5 3.8,16.5 5,11 1,7.2 6.5,6.5"
          fill="#304ffe"
        />
        <circle cx="9" cy="9" r="2.5" fill="#ffffff" />
      </g>
    </svg>
  );
}

/**
 * 4. One-on-One Mentorship Icon
 * Two speech bubbles with one solid blue active message bubble
 */
function OneOnOneMentorshipIcon() {
  return (
    <svg
      viewBox="0 0 64 64"
      className="w-12 h-12 sm:w-14 sm:h-14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Top Left Outline Speech Bubble */}
      <path
        d="M12 28 C12 17, 36 17, 36 28 C36 35, 29 37, 25 37 L18 42 L19 37 C14 37, 12 33, 12 28 Z"
        stroke="#0d1033"
        strokeWidth="2.4"
        fill="#ffffff"
        strokeLinejoin="round"
      />

      {/* Bottom Right Solid Blue Speech Bubble */}
      <g transform="translate(27, 26)">
        <path
          d="M2 13 C2 4, 27 4, 27 13 C27 20, 21 22, 18 22 L13 28 L14 22 C6 22, 2 18, 2 13 Z"
          fill="#304ffe"
        />
        {/* Message Lines inside blue bubble */}
        <line x1="9" y1="11" x2="20" y2="11" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" />
        <line x1="9" y1="16" x2="16" y2="16" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" />
      </g>
    </svg>
  );
}

// Level Bar Indicator Helper
function LevelSignal({ level }: { level: "Beginner" | "Intermediate" | "Advanced" }) {
  const bars = level === "Beginner" ? 1 : level === "Intermediate" ? 2 : 3;

  return (
    <div className="flex items-end gap-1 h-3.5" aria-hidden="true">
      <div
        className={`w-1 h-2 rounded-sm ${
          bars >= 1 ? "bg-[#304ffe]" : "bg-[#d9dcf0]"
        }`}
      />
      <div
        className={`w-1 h-2.5 rounded-sm ${
          bars >= 2 ? "bg-[#304ffe]" : "bg-[#d9dcf0]"
        }`}
      />
      <div
        className={`w-1 h-3.5 rounded-sm ${
          bars >= 3 ? "bg-[#304ffe]" : "bg-[#d9dcf0]"
        }`}
      />
    </div>
  );
}

/**
 * Multi-Device Learning Platform Illustration with Responsive Motion
 * Uses the authentic template SVG assets from /public with floating keyframe animations
 */
function LearningPlatformDevicesIllustration() {
  return (
    <div className="relative w-full max-w-[480px] sm:max-w-[520px] lg:max-w-[540px] mx-auto select-none pt-4 pb-6 px-3">
      {/* 1. Base Desktop Screen (Centered Back with smooth bottom-to-top float) */}
      <div className="relative z-10 w-full animate-float-base transition-transform duration-500 hover:scale-[1.01]">
        <img
          src="/60e48aaaeeee35b6510b2e49_image-cta-01-academy-template.svg"
          alt="Academy interactive video learning platform"
          className="w-full h-auto drop-shadow-[0_24px_50px_rgba(0,0,0,0.22)]"
        />
      </div>

      {/* 2. Floating Mobile Device (Bottom Left with float-1 motion) */}
      <div className="absolute -left-2 sm:-left-5 -bottom-3 sm:-bottom-6 z-20 w-[27%] max-w-[132px] animate-float-1 transition-transform duration-300 hover:scale-110 hover:z-30 cursor-pointer">
        <img
          src="/60e48aaaeeee352ed20b2e4b_image-cta-2.svg"
          alt="Academy mobile learning app"
          className="w-full h-auto drop-shadow-[0_16px_32px_rgba(0,0,0,0.3)]"
        />
      </div>

      {/* 3. Floating Notes & Code Document Card (Top Right with float-2 motion) */}
      <div className="absolute -right-2 sm:-right-6 -top-3 sm:-top-6 z-20 w-[36%] max-w-[180px] animate-float-2 transition-transform duration-300 hover:scale-110 hover:z-30 cursor-pointer">
        <img
          src="/60e48aaaeeee3545970b2e4a_image-cta-03-academy-template.svg"
          alt="Academy lesson notes and resources"
          className="w-full h-auto drop-shadow-[0_16px_32px_rgba(0,0,0,0.25)]"
        />
      </div>

      {/* 4. Floating Progress Bar Chart Card (Bottom Right with float-3 motion) */}
      <div className="absolute -right-1 sm:-right-4 -bottom-3 sm:-bottom-5 z-20 w-[39%] max-w-[195px] animate-float-3 transition-transform duration-300 hover:scale-110 hover:z-30 cursor-pointer">
        <img
          src="/60e48aaaeeee35630c0b2e4c_image-cta-04-academy-template.svg"
          alt="Academy student growth and analytics"
          className="w-full h-auto drop-shadow-[0_16px_32px_rgba(0,0,0,0.3)]"
        />
      </div>
    </div>
  );
}
