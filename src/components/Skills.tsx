import { skillCategories } from "@/lib/data";
import GlassCard from "./GlassCard";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  return (
    <section id="skills" className="section-shell">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow="Expertise">Skills &amp; Technologies</SectionHeading>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {skillCategories.map((category, i) => (
            <GlassCard
              key={category.title}
              delay={60 + i * 70}
              className={category.span === "lg" ? "md:col-span-2" : ""}
            >
              <h3 className="text-base sm:text-lg font-semibold text-text-primary mb-4 sm:mb-5">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2 sm:gap-2.5">
                {category.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="px-2.5 sm:px-3.5 py-1 sm:py-1.5 text-xs sm:text-sm rounded-lg bg-blue-500/8 text-blue-400/90 border border-blue-500/10 hover:bg-blue-500/15 hover:text-blue-400 hover:border-blue-500/25 transition-all duration-200 cursor-default"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
