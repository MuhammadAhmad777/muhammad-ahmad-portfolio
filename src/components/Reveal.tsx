"use client";

import { useRef, type ReactNode } from "react";
import { useScrollReveal } from "@/lib/hooks";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

/**
 * Wraps content in a scroll-triggered fade/slide-up entrance animation.
 * Falls back to instantly visible when prefers-reduced-motion is set
 * (handled inside useScrollReveal).
 */
export default function Reveal({
  children,
  className = "",
  delay = 0,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useScrollReveal(ref);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
