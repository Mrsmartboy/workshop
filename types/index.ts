export interface Course {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  label: "Workshop" | "Bootcamp" | "Hackathon";
  duration: string;
  outcome: string;
  type: "workshop" | "bootcamp" | "hackathon";
}

export interface EventItem {
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

export interface TechTrack {
  id: string;
  name: string;
  tag: string;
  description: string;
  iconName: string;
  badgeColor: string;
  topics: string[];
}

export interface CollegeMatrixItem {
  experience: string;
  duration: string;
  purpose: string;
  studentOutcome: string;
  idealFor: string;
}

export interface HowItWorksStep {
  stepNumber: string;
  title: string;
  description: string;
  highlight: string;
}

export interface Mentor {
  id: string;
  name: string;
  role: string;
  organization: string;
  experience: string;
  category: "AI & ML" | "Full-Stack & Cloud" | "System Architecture";
  avatarUrl: string;
  bio: string;
  expertise: string[];
  achievements: string[];
  featuredBadge?: string;
  linkedinUrl?: string;
  githubUrl?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "All" | "Colleges & Management" | "Workshops & Bootcamps" | "Hackathons" | "Certificates & Outcomes";
}

export interface CampusEnquiryFormData {
  collegeName: string;
  city: string;
  contactPerson: string;
  designation: string;
  phone: string;
  email: string;
  expectedStudentCount: string;
  programInterest: string;
  preferredDuration: string;
  preferredDate: string;
  notes?: string;
}
