import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/ui/SmoothScrollProvider";
import { JsonLd } from "@/components/seo/JsonLd";

export const viewport: Viewport = {
  themeColor: "#304ffe",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://labs.codegnan.com"),
  title: {
    default:
      "Codegnan Labs — Campus Innovation & Technology Experiences for Colleges",
    template: "%s | Codegnan Labs",
  },
  description:
    "We bring industry learning to your campus. Hands-on technical Workshops, Bootcamps, and Hackathons in AI, Full Stack, and Cloud for engineering colleges and universities across India.",
  keywords: [
    "Codegnan Labs",
    "Codegnan",
    "College Workshops",
    "Campus Bootcamps",
    "College Hackathons",
    "Engineering College Workshops",
    "Hands-on AI Workshop",
    "Generative AI Bootcamp",
    "Full Stack Web Development Workshop",
    "Student Technical Upskilling",
    "Campus Placement Training",
    "Hyderabad College Workshops",
    "Vijayawada College Workshops",
    "Bangalore Engineering Workshops",
    "Technical Student Projects",
  ],
  authors: [{ name: "Codegnan Labs", url: "https://labs.codegnan.com" }],
  creator: "Codegnan IT Solutions",
  publisher: "Codegnan Labs",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: "https://labs.codegnan.com",
  },
  openGraph: {
    title:
      "Codegnan Labs — Campus Innovation & Technology Experiences for Colleges",
    description:
      "Hands-on workshops, bootcamps, and hackathons that help engineering students learn, build, compete, and discover what they are capable of.",
    url: "https://labs.codegnan.com",
    siteName: "Codegnan Labs",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://labs.codegnan.com/codegnan_lab.png",
        width: 1200,
        height: 630,
        alt: "Codegnan Labs — Campus Innovation & Technology Experiences",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Codegnan Labs — Hands-on Campus Workshops & Hackathons",
    description:
      "Empowering college campuses through hands-on technical workshops, intensive bootcamps, and 24-48 hr hackathons in AI, Full-Stack, and Cloud.",
    creator: "@codegnan",
    site: "@codegnan",
    images: ["https://labs.codegnan.com/codegnan_lab.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/codegnan_logo.webp", type: "image/webp" },
      { url: "/favicon.ico", type: "image/x-icon" },
    ],
    shortcut: "/codegnan_logo.webp",
    apple: "/codegnan_logo.webp",
  },
  verification: {
    google: "google-site-verification-id", // placeholder for GSC verification code
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <JsonLd />
      </head>
      <body className="antialiased bg-white text-[#0d1033] selection:bg-[#304ffe] selection:text-white">
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
