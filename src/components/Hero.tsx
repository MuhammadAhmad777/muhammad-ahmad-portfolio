import { siteConfig } from "@/lib/data";
import SignalRing from "./SignalRing";
import NeuralMesh from "./NeuralMesh";
import { GitHubIcon, LinkedInIcon } from "./icons";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      <NeuralMesh variant="nodes" className="opacity-40" />
      {/* Ambient background gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/[0.03] rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-violet-500/[0.02] rounded-full blur-[100px]" />
      </div>

      <SignalRing />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/15 mb-8">
          <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
          <span className="text-sm text-blue-400 font-medium">
            {siteConfig.location}
          </span>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-text-primary leading-[1.1] tracking-tight mb-6">
          {siteConfig.name}
        </h1>

        <p className="text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto mb-4 font-medium">
          {siteConfig.title}
        </p>

        <p className="text-base text-text-secondary/80 max-w-xl mx-auto mb-10 leading-relaxed">
          {siteConfig.tagline}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
          <a
            href="#projects"
            className="px-8 py-3 rounded-xl bg-blue-500 text-white font-semibold text-sm hover:bg-blue-400 transition-colors duration-200 shadow-lg shadow-blue-500/25"
          >
            View Projects
          </a>
          <a
            href={siteConfig.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            download
            className="px-8 py-3 rounded-xl bg-white/5 text-text-primary font-semibold text-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-200"
          >
            Download Resume
          </a>
        </div>

        <div className="flex items-center justify-center gap-5">
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-blue-400 transition-colors duration-200"
            aria-label="GitHub profile"
          >
            <GitHubIcon />
          </a>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-blue-400 transition-colors duration-200"
            aria-label="LinkedIn profile"
          >
            <LinkedInIcon />
          </a>
        </div>
      </div>
    </section>
  );
}
