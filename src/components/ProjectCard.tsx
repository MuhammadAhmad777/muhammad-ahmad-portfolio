import { type Project } from "@/lib/data";
import GlassCard from "./GlassCard";
import { ExternalLinkIcon, GitHubIcon } from "./icons";

interface ProjectCardProps {
  project: Project;
  delay?: number;
  variant?: "featured" | "compact";
  className?: string;
  index?: number;
}

export default function ProjectCard({
  project,
  delay = 0,
  variant = "featured",
  className = "",
  index,
}: ProjectCardProps) {
  const isFeatured = variant === "featured";
  const isFlagship = project.size === "lg";

  return (
    <GlassCard
      delay={delay}
      className={`group h-full ${isFlagship ? "flagship-card" : ""} ${className}`}
    >
      <div className="relative flex flex-col h-full overflow-hidden">
        {isFeatured && (
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            aria-hidden="true"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-transparent to-transparent -translate-y-full group-hover:translate-y-full transition-transform duration-1000 ease-in-out" />
          </div>
        )}

        <div className="flex flex-wrap items-start justify-between gap-2 sm:gap-3 mb-4">
          <div className="flex items-center gap-2.5 min-w-0">
            {index !== undefined && (
              <span className="shrink-0 text-xs font-mono text-blue-400/50">
                {String(index + 1).padStart(2, "0")}
              </span>
            )}
            <span className="text-xs font-medium text-blue-400/80 uppercase tracking-wider truncate">
              {project.category}
            </span>
          </div>
          {project.isPrivate ? (
            <span className="shrink-0 text-[11px] sm:text-xs font-medium text-text-secondary px-2 sm:px-2.5 py-0.5 rounded-full bg-navy-600/80 border border-white/10">
              Private repo
            </span>
          ) : project.stats ? (
            <span className="shrink-0 text-xs font-semibold text-blue-400 px-2 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/15">
              {project.stats}
            </span>
          ) : null}
        </div>

        <h3
          className={`${
            isFeatured ? "text-lg sm:text-xl mb-2" : "text-base sm:text-lg mb-2"
          } font-bold text-text-primary group-hover:text-blue-400 transition-colors duration-200 break-words`}
        >
          {project.title}
        </h3>

        <p
          className={`${
            isFeatured ? "text-[15px]" : "text-sm"
          } text-text-secondary leading-relaxed flex-1`}
        >
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-5 pt-5 border-t border-white/5">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 text-xs rounded-md bg-navy-600/60 text-text-secondary/80 border border-white/5 group-hover:border-blue-500/15 group-hover:text-blue-400/70 transition-all duration-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 mt-4 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors duration-200"
          >
            <GitHubIcon className="w-4 h-4" />
            View on GitHub
            <ExternalLinkIcon className="w-3.5 h-3.5 opacity-70" />
          </a>
        )}

        {project.viewUrl && (
          <a
            href={project.viewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 mt-4 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors duration-200"
          >
            <ExternalLinkIcon className="w-4 h-4" />
            View Live
            <ExternalLinkIcon className="w-3.5 h-3.5 opacity-70" />
          </a>
        )}

        {project.readMoreUrl && (
          <a
            href={project.readMoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 mt-4 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors duration-200"
          >
            <ExternalLinkIcon className="w-4 h-4" />
            Read More
            <ExternalLinkIcon className="w-3.5 h-3.5 opacity-70" />
          </a>
        )}
      </div>
    </GlassCard>
  );
}
