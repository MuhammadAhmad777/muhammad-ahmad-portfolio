import { philosophyPrinciples } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Philosophy() {
  return (
    <section className="py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionHeading eyebrow="Approach" className="mb-6">
          Engineering Philosophy
        </SectionHeading>

        <div className="mt-8 sm:mt-12">
          {philosophyPrinciples.map((principle, i) => (
            <Reveal key={principle.title} delay={i * 90} variant="up">
              <div
                className={`flex items-start gap-3 sm:gap-5 py-6 sm:py-8 ${
                  i < philosophyPrinciples.length - 1
                    ? "border-b border-white/5"
                    : ""
                }`}
              >
                <span className="shrink-0 text-sm font-mono text-blue-400/50 mt-1 w-7 sm:w-8">
                  0{i + 1}
                </span>
                <div className="min-w-0">
                  <h3 className="text-base sm:text-lg font-semibold text-text-primary mb-2">
                    {principle.title}
                  </h3>
                  <p className="text-text-secondary text-sm sm:text-[15px] leading-relaxed max-w-xl">
                    {principle.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
