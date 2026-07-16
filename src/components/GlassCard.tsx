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
  const isVisible = useScrollReveal(ref);

  return (
    <div
      ref={ref}
      className={`glass-panel glow-behind rounded-2xl p-5 sm:p-6 h-full transition-all duration-500 ${
        hover ? "glass-panel-hover" : ""
      } ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
