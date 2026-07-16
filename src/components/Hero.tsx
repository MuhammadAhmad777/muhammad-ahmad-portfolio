import { siteConfig } from "@/lib/data";
import SignalRing from "./SignalRing";
import NeuralMesh from "./NeuralMesh";
import { GitHubIcon, LinkedInIcon } from "./icons";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden pt-20 pb-12 sm:pt-16 sm:pb-0"
    >
      <NeuralMesh variant="nodes" className="opacity-40" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(800px,120vw)] h-[min(800px,120vw)] bg-blue-500/[0.03] rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[min(400px,80vw)] h-[min(400px,80vw)] bg-violet-500/[0.02] rounded-full blur-[100px]" />
      </div>

      <SignalRing />

      <div className="relative z-10 mx-auto w-full max-w-5xl px-4 sm:px-6 text-center">
        <div className="hero-enter hero-enter-1 inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/15 mb-6 sm:mb-8">
          <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
          <span className="text-xs sm:text-sm text-blue-400 font-medium">
            {siteConfig.location}
          </span>
        </div>

        <h1 className="hero-enter hero-enter-2 text-[2.35rem] leading-[1.1] sm:text-6xl lg:text-7xl font-bold text-text-primary tracking-tight mb-4 sm:mb-6 break-words">
          {siteConfig.name}
        </h1>

        <p className="hero-enter hero-enter-3 text-base sm:text-xl text-text-secondary max-w-2xl mx-auto mb-3 sm:mb-4 font-medium px-1">
          {siteConfig.title}
        </p>

        <p className="hero-enter hero-enter-4 text-sm sm:text-base text-text-secondary/80 max-w-xl mx-auto mb-8 sm:mb-10 leading-relaxed px-1">
          {siteConfig.tagline}
        </p>

        <div className="hero-enter hero-enter-5 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-10 w-full max-w-md sm:max-w-none mx-auto">
          <a
            href="#projects"
            className="w-full sm:w-auto px-8 py-3 rounded-xl bg-blue-500 text-white font-semibold text-sm hover:bg-blue-400 transition-colors duration-200 shadow-lg shadow-blue-500/25 text-center"
          >
            View Projects
          </a>
          <a
            href={siteConfig.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            download
            className="w-full sm:w-auto px-8 py-3 rounded-xl bg-white/5 text-text-primary font-semibold text-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-200 text-center"
          >
            Download Resume
          </a>
        </div>

        <div className="hero-enter hero-enter-6 flex items-center justify-center gap-5">
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
