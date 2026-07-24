import { featuredProjects } from "@/lib/data";
import ProjectCard from "./ProjectCard";
import SectionHeading from "./SectionHeading";
import NeuralMesh from "./NeuralMesh";

export default function Projects() {
  return (
    <section id="projects" className="section-shell relative">
      <NeuralMesh className="opacity-30" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow="Featured Projects" className="mb-8 sm:mb-10">
          What I&apos;ve built
        </SectionHeading>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 auto-rows-fr">
          {featuredProjects.map((project, i) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={i}
              delay={i * 80}
              className={`min-w-0 ${project.bentoClass ?? "lg:col-span-6"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
