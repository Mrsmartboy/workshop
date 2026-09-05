import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service for Codegnan Labs academic programs, college partnerships, bootcamps, and hackathons.",
  alternates: {
    canonical: "https://labs.codegnan.com/terms-of-service",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
