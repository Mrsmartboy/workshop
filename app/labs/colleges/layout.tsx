import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "For Colleges & Universities — Institutional Technical Blueprint",
  description:
    "Tailored hands-on technology workshops, bootcamps, and hackathons designed for college academic calendars, NAAC/NBA criteria, and campus placement excellence.",
  alternates: {
    canonical: "https://labs.codegnan.com/labs/colleges",
  },
  openGraph: {
    title: "For Colleges & Universities — Institutional Technical Blueprint | Codegnan Labs",
    description:
      "Partner with Codegnan Labs to bring industry-grade technology experiences to your engineering campus.",
    url: "https://labs.codegnan.com/labs/colleges",
  },
};

export default function CollegesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
