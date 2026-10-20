import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import projectsRouter from "./routes/projects.routes.js";
import contactRouter from "./routes/contact.routes.js";
import healthRouter from "./routes/health.routes.js";
import errorHandler from "./middleware/errorHandler.js";

const app = express();
const allowedOrigins = (process.env.CLIENT_ORIGIN ?? "http://localhost:5173")
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);

let databaseConnection: Promise<typeof mongoose> | undefined;

async function connectToDatabase(): Promise<void> {
  if (mongoose.connection.readyState === 1 || !process.env.MONGODB_URI) return;

  databaseConnection ??= mongoose.connect(process.env.MONGODB_URI).catch((error: unknown) => {
    databaseConnection = undefined;
    throw error;
  });
  await databaseConnection;
}

app.disable("x-powered-by");
app.use(cors({ origin: allowedOrigins }));
app.use(express.json({ limit: "20kb" }));

app.use("/api/health", healthRouter);
app.use("/api/projects", projectsRouter);

// Vercel's serverless entrypoint exports this app directly, so establish the
// database connection lazily for contact submissions instead of relying on
// server.ts startup code or app.listen().
app.use("/api/contact", async (_req, _res, next) => {
  try {
    await connectToDatabase();
    next();
  } catch (error: unknown) {
    next(error);
  }
});
app.use("/api/contact", contactRouter);

app.use((_req, res) => {
  res.status(404).json({ message: "Route not found" });
});
app.use(errorHandler);

export default app;
