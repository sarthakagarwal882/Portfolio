import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sarthak Agarwal - Full-Stack Developer",
  description:
    "Full-Stack Developer specializing in React.js, Next.js, Node.js, and modern web technologies. Building digital solutions for tomorrow.",
  keywords:
    "Full-Stack Developer, React.js, Next.js, Node.js, JavaScript, TypeScript, Web Development",
  authors: [{ name: "Sarthak Agarwal" }],
  openGraph: {
    title: "Sarthak Agarwal - Full-Stack Developer",
    description: "Full-Stack Developer specializing in modern web technologies",
    type: "website",
  },
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
      </head>
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
