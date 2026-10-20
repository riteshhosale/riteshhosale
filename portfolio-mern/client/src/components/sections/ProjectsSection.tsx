import { ExternalLink, Globe } from "lucide-react";
import ProjectCard from "../projects/ProjectCard";
import type { Project } from "../../types/portfolio";

export default function ProjectsSection({ projects }: { projects: Project[] }) {
  const orderedProjects = [...projects].sort((a, b) => Number(Boolean(b.liveUrl)) - Number(Boolean(a.liveUrl)));
  const liveCount = orderedProjects.filter((project) => Boolean(project.liveUrl)).length;

  return (
    <section className="section container projects-section" id="projects">
      <div className="section-heading">
        <div>
          <div className="section-kicker">01 / MY WEBSITES & PROJECTS</div>
          <h2>Things I’ve <span>built.</span></h2>
        </div>
        <p>Live websites appear first, followed by projects and programming work. Open a live site or explore its source code.</p>
      </div>
      <div className="website-count"><Globe size={16} /> {liveCount} live website{liveCount === 1 ? "" : "s"} <span>·</span> {orderedProjects.length} projects in total</div>
      <div className="project-grid">
        {orderedProjects.map((project, index) => <ProjectCard key={project.slug || project.name} project={project} index={index} />)}
      </div>
      <div className="center-link">
        <a href="https://github.com/riteshhosale?tab=repositories" target="_blank" rel="noreferrer">
          Browse all GitHub repositories <ExternalLink size={15} />
        </a>
      </div>
    </section>
  );
}
