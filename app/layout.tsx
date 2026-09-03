import type { Metadata } from "next";
import "./globals.css";

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
      <head>
        <link rel="icon" href="/codegnan_logo.webp" type="image/webp" />
        <link rel="shortcut icon" href="/codegnan_logo.webp" type="image/webp" />
        <link rel="apple-touch-icon" href="/codegnan_logo.webp" />
      </head>
      <body className="antialiased bg-white text-[#0d1033] selection:bg-[#304ffe] selection:text-white">
        {children}
      </body>
    </html>
  );
}
