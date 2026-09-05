import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Campus Lab Gallery & Student Highlights",
  description:
    "Explore photos, videos, and highlights from Codegnan Labs workshops, bootcamps, and hackathons across premier engineering campuses in India.",
  alternates: {
    canonical: "https://labs.codegnan.com/gallery",
  },
  openGraph: {
    title: "Campus Lab Gallery & Student Highlights | Codegnan Labs",
    description:
      "Witness real student energy, coding sprints, and project presentations across university campuses.",
    url: "https://labs.codegnan.com/gallery",
  },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
