"use client";

import { useRef } from "react";
import { metrics } from "@/lib/data";
import { useInViewToggle, useCountUp } from "@/lib/hooks";
import NeuralMesh from "./NeuralMesh";

function MetricItem({
  value,
  suffix = "",
  label,
  delay,
}: {
  value: number;
  suffix?: string;
  label: string;
  delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useInViewToggle(ref, 0.35);
  const count = useCountUp(value, visible);

  return (
    <div
      ref={ref}
      className={`text-center reveal-base ${
        visible ? "reveal-shown" : "reveal-exit opacity-0 translate-y-4"
      }`}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
    >
      <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-text-primary tabular-nums">
        {count}
        <span className="text-blue-400">{suffix}</span>
      </p>
      <p className="mt-1.5 text-xs sm:text-sm text-text-secondary leading-snug px-1">
        {label}
      </p>
    </div>
  );
}

export default function Metrics() {
  return (
    <section className="section-shell-compact border-y border-white/5">
      <NeuralMesh variant="nodes" className="opacity-60" />
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-6">
          {metrics.map((metric, i) => (
            <MetricItem
              key={metric.label}
              value={metric.value}
              suffix={metric.suffix}
              label={metric.label}
              delay={i * 80}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
