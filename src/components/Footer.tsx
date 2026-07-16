"use client";

import { siteConfig } from "@/lib/data";
import Reveal from "./Reveal";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-6 sm:py-8">
      <Reveal className="mx-auto max-w-6xl px-4 sm:px-6" variant="fade" delay={40}>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-xs sm:text-sm text-text-secondary" suppressHydrationWarning>
            &copy; {new Date().getFullYear()} {siteConfig.name}. Built with
            precision.
          </p>
          <div className="flex items-center gap-5 sm:gap-6">
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-blue-400 transition-colors text-sm"
            >
              GitHub
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-blue-400 transition-colors text-sm"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-text-secondary hover:text-blue-400 transition-colors text-sm"
            >
              Email
            </a>
          </div>
        </div>
      </Reveal>
    </footer>
  );
}
