import express from "express";
import cors from "cors";
import projectsRouter from "./routes/projects.routes.js";
import contactRouter from "./routes/contact.routes.js";
import healthRouter from "./routes/health.routes.js";
import errorHandler from "./middleware/errorHandler.js";

const app = express();
const allowedOrigins = (process.env.CLIENT_ORIGIN ?? "http://localhost:5173")
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);

app.disable("x-powered-by");
app.use(cors({ origin: allowedOrigins }));
app.use(express.json({ limit: "20kb" }));

app.use("/api/health", healthRouter);
app.use("/api/projects", projectsRouter);
app.use("/api/contact", contactRouter);

app.use((_req, res) => {
  res.status(404).json({ message: "Route not found" });
});
app.use(errorHandler);

export default app;
