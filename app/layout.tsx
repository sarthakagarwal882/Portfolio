import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Sarthak Agarwal - Full-Stack Developer",
  description:
    "Full-Stack Developer specializing in React.js, Next.js, Node.js, and modern web technologies. Building digital solutions for tomorrow.",
  keywords: "Full-Stack Developer, React.js, Next.js, Node.js, JavaScript, TypeScript, Web Development",
  authors: [{ name: "Sarthak Agarwal" }],
  openGraph: {
    title: "Sarthak Agarwal - Full-Stack Developer",
    description: "Full-Stack Developer specializing in modern web technologies",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
