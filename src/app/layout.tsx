import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  themeColor: "#0A0E17",
};

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
  // App icons also come from src/app/favicon.ico, icon.png, apple-icon.png
  icons: {
    icon: [
      { url: "/favicon/favicon.ico", sizes: "any" },
      {
        url: "/favicon/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/favicon/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/favicon/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/favicon/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/favicon/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  manifest: "/favicon/site.webmanifest",
  openGraph: {
    title: "Muhammad Ahmad | AI Engineer",
    description:
      "Building production AI systems from computer vision to LLM-powered agents.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/favicon/android-chrome-512x512.png",
        width: 512,
        height: 512,
        alt: "Muhammad Ahmad",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Muhammad Ahmad | AI Engineer",
    description:
      "Building production AI systems from computer vision to LLM-powered agents.",
    images: ["/favicon/android-chrome-512x512.png"],
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
