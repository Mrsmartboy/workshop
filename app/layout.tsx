import type { Metadata } from "next";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/ui/SmoothScrollProvider";

export const metadata: Metadata = {
  title: "Codegnan Labs — Campus Innovation & Technology Experiences",
  description:
    "We bring industry learning to your campus. Hands-on Workshops, Bootcamps, and Hackathons for colleges and students.",
  icons: {
    icon: "/codegnan_logo.webp",
    shortcut: "/codegnan_logo.webp",
    apple: "/codegnan_logo.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-white text-[#0d1033] selection:bg-[#304ffe] selection:text-white">
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
