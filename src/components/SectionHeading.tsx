"use client";

import type { ReactNode } from "react";
import Reveal from "./Reveal";

interface SectionHeadingProps {
  eyebrow: string;
  children: ReactNode;
  subtitle?: string;
  className?: string;
  headingClassName?: string;
}

export default function SectionHeading({
  eyebrow,
  children,
  subtitle,
  className = "mb-10 sm:mb-12 lg:mb-14",
  headingClassName = "",
}: SectionHeadingProps) {
  return (
    <Reveal className={className}>
      <p className="eyebrow mb-3 sm:mb-4">{eyebrow}</p>
      <h2 className={`section-heading ${headingClassName}`}>{children}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </Reveal>
  );
}
