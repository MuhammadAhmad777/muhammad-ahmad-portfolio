import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Muhammad Ahmad | AI Engineer & Full Stack Developer",
  description:
    "Portfolio of Muhammad Ahmad, an AI Engineer specializing in production AI systems, LLMs, RAG, AI Agents, Computer Vision, and scalable backend architecture.",
  metadataBase: new URL("https://muhammadahmad.dev"),
  authors: [{ name: "Muhammad Ahmad" }],
  keywords: [
    "AI Engineer",
    "Machine Learning Engineer",
    "Full Stack Developer",
    "LLM",
    "RAG",
    "AI Agents",
    "Computer Vision",
    "FastAPI",
    "Next.js",
  ],
  openGraph: {
    title: "Muhammad Ahmad | AI Engineer",
    description:
      "Building production AI systems from computer vision to LLM-powered agents.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen overflow-x-hidden bg-navy-900 text-text-primary">
        {children}
      </body>
    </html>
  );
}
