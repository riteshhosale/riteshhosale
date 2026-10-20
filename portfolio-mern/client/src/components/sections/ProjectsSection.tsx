import { ExternalLink } from "lucide-react";
import ProjectCard from "../projects/ProjectCard";
import type { Project } from "../../types/portfolio";

export default function ProjectsSection({ projects }: { projects: Project[] }) {
  return (
    <section className="section container" id="projects">
          <div className="section-heading"><div><div className="section-kicker">01 / SELECTED WORK</div><h2>Ideas made <span>real.</span></h2></div><p>Projects that help me learn by shipping, testing, and improving across different problem spaces.</p></div>
          <div className="project-grid">{projects.map((project, index) => <ProjectCard key={project.slug || project.name} project={project} index={index} />)}</div>
          <div className="center-link"><a href="https://github.com/riteshhosale?tab=repositories" target="_blank" rel="noreferrer">Browse all GitHub repositories <ExternalLink size={15} /></a></div></section>
  );
}
