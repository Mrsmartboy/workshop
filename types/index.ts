export interface Course {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  label: "Workshop" | "Bootcamp" | "Hackathon";
  duration: string;
  outcome: string;
  type: "workshop" | "bootcamp" | "hackathon";
  verb: "EXPLORE" | "BUILD" | "COMPETE";
  ctaText: string;
  idealFor: string;
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
  outcomeTitle: string;
  category: string;
  tag: string;
  tagColor?: string;
  chipColor?: string;
  description: string;
  iconName: string;
  badgeColor: string;
  duration: string;
  level: string;
  topics: string[];
  image?: string;
  isFlagship?: boolean;
  whoItIsFor: string;
  whatStudentsBuild: string;
  whatTheyLeaveWith: string;
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

export interface CohortStage {
  year: "I Year" | "II Year" | "III Year" | "IV Year";
  verb: "DISCOVER" | "EXPLORE" | "BUILD" | "SHOWCASE";
  tagline: string;
  description: string;
  recommendedExperiences: {
    title: string;
    format: "Workshop" | "Bootcamp" | "Hackathon";
    duration: string;
    skills: string[];
  }[];
}

export interface StudentProject {
  id: string;
  title: string;
  builtDuring: string;
  format: "Bootcamp" | "Workshop" | "Hackathon";
  description: string;
  team: string;
  techStack: string[];
  githubUrl?: string;
  demoUrl?: string;
  outputEvidence: string;
  image?: string;
}

export interface CampusStory {
  id: string;
  collegeName: string;
  city: string;
  programType: string;
  studentCount: number;
  duration: string;
  whatStudentsBuilt: string;
  image: string;
  quote?: string;
  quoteAuthor?: string;
  quoteRole?: string;
}
