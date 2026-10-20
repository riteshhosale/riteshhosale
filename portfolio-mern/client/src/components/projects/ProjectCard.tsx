import { ArrowUpRight } from "lucide-react";
import type { Project } from "../../types/portfolio";

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className="project-card">
      <div className="project-top"><span className="project-number">{String(index + 1).padStart(2, "0")}</span><span className="category">{project.category}</span></div>
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      <div className="tags">{project.stack?.map((tag) => <span key={tag}>{tag}</span>)}</div>
      <a className="project-link" href={project.repo} target="_blank" rel="noreferrer">Explore repository <ArrowUpRight size={16} /></a>
    </article>
  );
}
