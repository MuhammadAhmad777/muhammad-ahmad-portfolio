import { research } from "@/lib/data";
import GlassCard from "./GlassCard";
import SectionHeading from "./SectionHeading";
import { BookIcon, ExternalLinkIcon } from "./icons";

export default function Research() {
  return (
    <section id="research" className="py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading eyebrow="Research">Publication</SectionHeading>

        <GlassCard className="max-w-2xl">
          <div className="flex items-start gap-4">
            <div className="shrink-0 w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/15 flex items-center justify-center mt-0.5">
              <BookIcon className="w-5 h-5 text-blue-400" />
            </div>
            <div>
              <span className="inline-block text-xs font-medium text-blue-400 bg-blue-500/10 px-2.5 py-0.5 rounded-full mb-3">
                {research.type}
              </span>
              <h3 className="text-lg font-bold text-text-primary mb-1.5 leading-snug">
                {research.title}
              </h3>
              <p className="text-sm text-blue-400/80 font-medium mb-3">
                {research.publication}
              </p>
              <p className="text-text-secondary text-[15px] leading-relaxed mb-4">
                {research.description}
              </p>
              {research.url && (
                <a
                  href={research.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-blue-400 hover:text-blue-300 transition-colors duration-200 font-medium"
                >
                  View on Springer
                  <ExternalLinkIcon className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
