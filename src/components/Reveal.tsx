"use client";

import { useRef, type ReactNode } from "react";
import { useScrollReveal } from "@/lib/hooks";

export type RevealVariant = "up" | "left" | "right" | "fade" | "scale";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: RevealVariant;
  /** When true, element stays revealed (for above-the-fold content). */
  instant?: boolean;
}

const hiddenByVariant: Record<RevealVariant, string> = {
  up: "opacity-0 translate-y-7",
  left: "opacity-0 -translate-x-8",
  right: "opacity-0 translate-x-8",
  fade: "opacity-0",
  scale: "opacity-0 scale-[0.96]",
};

/**
 * Scroll-triggered entrance that re-plays every time the element
 * enters the viewport (scroll up or down).
 */
export default function Reveal({
  children,
  className = "",
  delay = 0,
  variant = "up",
  instant = false,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useScrollReveal(ref, 0.12, instant);

  return (
    <div
      ref={ref}
      className={`reveal-base ${
        visible ? "reveal-shown" : `reveal-exit ${hiddenByVariant[variant]}`
      } ${className}`}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
    >
      {children}
    </div>
  );
}
