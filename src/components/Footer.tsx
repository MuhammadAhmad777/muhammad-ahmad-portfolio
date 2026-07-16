"use client";

import { siteConfig } from "@/lib/data";
import Reveal from "./Reveal";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8">
      <Reveal className="mx-auto max-w-6xl px-6" variant="fade" delay={40}>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-text-secondary" suppressHydrationWarning>
            &copy; {new Date().getFullYear()} {siteConfig.name}. Built with
            precision.
          </p>
          <div className="flex items-center gap-6">
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
