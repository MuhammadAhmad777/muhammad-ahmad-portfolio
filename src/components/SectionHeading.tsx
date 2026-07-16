import type { ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow: string;
  children: ReactNode;
  className?: string;
  headingClassName?: string;
}

export default function SectionHeading({
  eyebrow,
  children,
  className = "mb-14",
  headingClassName = "",
}: SectionHeadingProps) {
  return (
    <div className={className}>
      <p className="eyebrow mb-4">{eyebrow}</p>
      <h2 className={`section-heading ${headingClassName}`}>{children}</h2>
    </div>
  );
}
