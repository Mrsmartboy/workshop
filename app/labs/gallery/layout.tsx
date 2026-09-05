import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Campus Lab Gallery & Highlights",
  description:
    "Explore photos, videos, and highlights from Codegnan Labs workshops, bootcamps, and hackathons across colleges in India.",
  alternates: {
    canonical: "https://labs.codegnan.com/labs/gallery",
  },
};

export default function LabsGalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
