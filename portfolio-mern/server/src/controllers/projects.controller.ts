import type { Request, Response } from "express";
import { projects } from "../data/projects.js";

export function listProjects(_req: Request, res: Response): void {
  res.json({ projects });
}

export function getProjectBySlug(req: Request<{ slug: string }>, res: Response): void {
  const project = projects.find((item) => item.slug === req.params.slug);
  if (!project) {
    res.status(404).json({ message: "Project not found" });
    return;
  }
  res.json({ project });
}
