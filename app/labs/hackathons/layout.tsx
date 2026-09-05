import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Campus Hackathons — 24-48 Hour High-Energy Coding Festivals",
  description:
    "Organize a flagship collegiate hackathon on your campus. Round-the-clock mentorship, curated AI and Full Stack problem statements, live pitching, and awards.",
  alternates: {
    canonical: "https://labs.codegnan.com/labs/hackathons",
  },
  openGraph: {
    title: "Campus Hackathons — 24-48 Hour High-Energy Coding Festivals | Codegnan Labs",
    description:
      "High-energy competitive hackathons where student teams build real-world software prototypes with 24/7 industry mentorship.",
    url: "https://labs.codegnan.com/labs/hackathons",
  },
};

export default function HackathonsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
