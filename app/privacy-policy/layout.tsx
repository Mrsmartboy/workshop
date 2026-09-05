import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Codegnan Labs. Learn how we handle student information, institutional confidentiality, and data security.",
  alternates: {
    canonical: "https://labs.codegnan.com/privacy-policy",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
