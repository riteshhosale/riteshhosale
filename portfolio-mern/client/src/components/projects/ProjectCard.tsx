import { ArrowUpRight, ExternalLink, Github, Globe } from "lucide-react";
import type { Project } from "../../types/portfolio";

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className="project-card" style={{ animationDelay: `${Math.min(index, 8) * 90}ms` }}>
      <div className="project-top">
        <span className="project-number">{String(index + 1).padStart(2, "0")}</span>
        <span className="category">{project.category}</span>
      </div>
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      <div className="tags">{project.stack?.map((tag) => <span key={tag}>{tag}</span>)}</div>
      <div className="project-actions">
        {project.liveUrl && (
          <a className="project-link project-live-link" href={project.liveUrl} target="_blank" rel="noreferrer">
            <Globe size={15} /> Visit website <ArrowUpRight size={15} />
          </a>
        )}
        {project.repo && (
          <a className="project-link" href={project.repo} target="_blank" rel="noreferrer">
            <Github size={15} /> Source code <ExternalLink size={14} />
          </a>
        )}
      </div>
    </article>
  );
}
