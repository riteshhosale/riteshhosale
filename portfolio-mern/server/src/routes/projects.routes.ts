import { Router } from "express";
import { getProjectBySlug, listProjects } from "../controllers/projects.controller.js";

const projectsRouter = Router();

projectsRouter.get("/", listProjects);
projectsRouter.get("/:slug", getProjectBySlug);

export default projectsRouter;
