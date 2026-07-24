"use client";

import {
  useRef,
  useState,
  useEffect,
  useCallback,
  type RefObject,
} from "react";
import { experiences, type Experience as ExperienceEntry } from "@/lib/data";
import { useInViewToggle } from "@/lib/hooks";
import GlassCard from "./GlassCard";
import SectionHeading from "./SectionHeading";
import NeuralMesh from "./NeuralMesh";

function ExperienceRow({
  experience,
  index,
  nodeRef,
  onVisibilityChange,
}: {
  experience: ExperienceEntry;
  index: number;
  nodeRef: (el: HTMLDivElement | null) => void;
  onVisibilityChange: (index: number, visible: boolean) => void;
}) {
  const rowRef = useRef<HTMLDivElement>(null);
  const visible = useInViewToggle(rowRef, 0.22);
  const initial = experience.company.charAt(0);

  useEffect(() => {
    onVisibilityChange(index, visible);
  }, [index, visible, onVisibilityChange]);

  return (
    <div
      ref={rowRef}
      className={`experience-row ${visible ? "is-visible" : ""}`}
    >
      <div className="experience-node-col">
        <div
          ref={nodeRef}
          className={`experience-node ${visible ? "is-active" : ""}`}
          aria-hidden="true"
        >
          <span className="experience-node-ring" />
          <span className="experience-node-core" />
        </div>
      </div>

      <div className="experience-content-col min-w-0">
        <GlassCard delay={index * 70} className="experience-card">
          <div className="flex flex-col gap-5 sm:gap-6">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
              <div className="flex items-start gap-3.5 sm:gap-4 min-w-0">
                <div className="experience-logo shrink-0">{initial}</div>
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1.5">
                    <h3 className="text-lg sm:text-xl font-bold text-text-primary break-words">
                      {experience.company}
                    </h3>
                    {experience.current && (
                      <span className="shrink-0 text-[11px] sm:text-xs font-medium text-blue-400 px-2 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20">
                        Current
                      </span>
                    )}
                  </div>
                  <p className="text-sm sm:text-base font-medium text-blue-400/90">
                    {experience.role}
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-1.5 sm:items-end sm:text-right shrink-0">
                <p className="text-xs sm:text-sm text-text-secondary">
                  {experience.duration}
                </p>
                <p className="text-xs sm:text-sm text-text-secondary">
                  {experience.location}
                </p>
              </div>
            </div>

            <p className="text-text-secondary text-sm sm:text-[15px] leading-relaxed">
              {experience.description}
            </p>

            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-blue-400/70 mb-3">
                Key highlights
              </p>
              <ul className="space-y-2.5 sm:space-y-3">
                {experience.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="experience-highlight text-sm sm:text-[15px] text-text-secondary leading-relaxed pl-4 border-l border-white/8"
                  >
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1 border-t border-white/5">
              {experience.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2 sm:px-2.5 py-0.5 sm:py-1 text-[11px] sm:text-xs rounded-md bg-navy-600/60 text-text-secondary/80 border border-white/5"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </GlassCard>
      </div>
    </div>
  );
}

function useTimelineProgress(
  timelineRef: RefObject<HTMLDivElement | null>,
  nodeRefs: RefObject<(HTMLDivElement | null)[]>,
  activeMap: Record<number, boolean>,
) {
  const [progress, setProgress] = useState({ top: 0, height: 0, trackTop: 0, trackHeight: 0 });

  const updateProgress = useCallback(() => {
    const timeline = timelineRef.current;
    const nodes = nodeRefs.current;
    if (!timeline || !nodes.length) return;

    const timelineRect = timeline.getBoundingClientRect();
    const firstNode = nodes[0];
    const lastNode = nodes[nodes.length - 1];

    if (!firstNode || !lastNode) return;

    const firstCenter =
      firstNode.getBoundingClientRect().top +
      firstNode.getBoundingClientRect().height / 2 -
      timelineRect.top;
    const lastCenter =
      lastNode.getBoundingClientRect().top +
      lastNode.getBoundingClientRect().height / 2 -
      timelineRect.top;

    const activeIndices = Object.entries(activeMap)
      .filter(([, visible]) => visible)
      .map(([index]) => Number(index));

    const maxActive =
      activeIndices.length > 0 ? Math.max(...activeIndices) : -1;

    let fillHeight = 0;
    if (maxActive >= 0) {
      const targetNode = nodes[maxActive];
      if (targetNode) {
        const targetCenter =
          targetNode.getBoundingClientRect().top +
          targetNode.getBoundingClientRect().height / 2 -
          timelineRect.top;
        fillHeight = Math.max(0, targetCenter - firstCenter);
      }
    }

    setProgress({
      top: firstCenter,
      height: fillHeight,
      trackTop: firstCenter,
      trackHeight: Math.max(0, lastCenter - firstCenter),
    });
  }, [timelineRef, nodeRefs, activeMap]);

  useEffect(() => {
    updateProgress();
    const frame = requestAnimationFrame(updateProgress);
    window.addEventListener("resize", updateProgress);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", updateProgress);
    };
  }, [updateProgress]);

  return progress;
}

export default function Experience() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeMap, setActiveMap] = useState<Record<number, boolean>>({});

  const handleVisibilityChange = useCallback(
    (index: number, visible: boolean) => {
      setActiveMap((prev) => {
        if (prev[index] === visible) return prev;
        return { ...prev, [index]: visible };
      });
    },
    [],
  );

  const progress = useTimelineProgress(timelineRef, nodeRefs, activeMap);

  const setNodeRef = useCallback((index: number, el: HTMLDivElement | null) => {
    nodeRefs.current[index] = el;
  }, []);

  return (
    <section id="experience" className="section-shell relative overflow-hidden">
      <NeuralMesh className="opacity-25" />
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Career"
          subtitle="Three years across healthcare AI, computer vision, and production software. Here is where I have worked and what I owned."
        >
          Professional Experience
        </SectionHeading>

        <div
          ref={timelineRef}
          className="experience-timeline mt-10 sm:mt-12 lg:mt-14"
        >
          <div className="experience-rail hidden sm:block" aria-hidden="true">
            <div
              className="experience-rail-track"
              style={{
                top: progress.trackTop,
                height: progress.trackHeight,
              }}
            />
            <div
              className="experience-rail-progress"
              style={{
                top: progress.top,
                height: progress.height,
              }}
            />
          </div>

          {experiences.map((experience, index) => (
            <ExperienceRow
              key={experience.company}
              experience={experience}
              index={index}
              nodeRef={(el) => setNodeRef(index, el)}
              onVisibilityChange={handleVisibilityChange}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
