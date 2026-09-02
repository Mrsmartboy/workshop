import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Codegnan — Grow your skills, define your future.",
  description:
    "Presenting Codegnan, the tech school of the future. We teach you the right skills to be prepared for tomorrow.",
  icons: {
    icon: [
      { url: "/codegnan_logo.webp", type: "image/webp" },
      { url: "/favicon.ico" },
    ],
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
