"use client";

import { useRef, type ReactNode } from "react";
import { useScrollReveal } from "@/lib/hooks";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  hover?: boolean;
}

export default function GlassCard({
  children,
  className = "",
  delay = 0,
  hover = true,
}: GlassCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useScrollReveal(ref, 0.12);

  return (
    <div
      ref={ref}
      className={`glass-panel glow-behind rounded-2xl p-5 sm:p-6 h-full reveal-base ${
        hover ? "glass-panel-hover" : ""
      } ${
        isVisible
          ? "reveal-shown"
          : "reveal-exit opacity-0 translate-y-7"
      } ${className}`}
      style={{ transitionDelay: isVisible ? `${delay}ms` : "0ms" }}
    >
      {children}
    </div>
  );
}
