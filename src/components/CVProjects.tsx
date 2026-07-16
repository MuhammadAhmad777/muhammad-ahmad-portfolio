import { cvProjects } from "@/lib/data";
import ProjectCard from "./ProjectCard";
import SectionHeading from "./SectionHeading";

export default function CVProjects() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Computer Vision">
          Vision &amp; Detection Projects
        </SectionHeading>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl">
          {cvProjects.map((project, i) => (
            <ProjectCard
              key={project.title}
              project={project}
              delay={i * 90}
              variant="compact"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
