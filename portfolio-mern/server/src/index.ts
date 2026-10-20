import "dotenv/config";
import express, { type ErrorRequestHandler, type Request, type Response } from "express";
import type { ParamsDictionary } from "express-serve-static-core";
import cors from "cors";
import mongoose from "mongoose";
import Contact from "./models/Contact.js";
import { projects } from "./data/projects.js";

const app = express();
const port = Number(process.env.PORT) || 5000;
const allowedOrigins = (process.env.CLIENT_ORIGIN ?? "http://localhost:5173")
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);

app.disable("x-powered-by");
app.use(cors({ origin: allowedOrigins }));
app.use(express.json({ limit: "20kb" }));

app.get("/api/health", (_req: Request, res: Response) => {
  res.json({
    status: "ok",
    database: mongoose.connection.readyState === 1 ? "connected" : "disconnected",
  });
});

app.get("/api/projects", (_req: Request, res: Response) => {
  res.json({ projects });
});

app.get("/api/projects/:slug", (req: Request<{ slug: string }>, res: Response) => {
  const project = projects.find((item) => item.slug === req.params.slug);
  if (!project) {
    res.status(404).json({ message: "Project not found" });
    return;
  }
  res.json({ project });
});

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  subject?: unknown;
  message?: unknown;
};

app.post("/api/contact", async (req: Request<ParamsDictionary, unknown, ContactPayload>, res: Response) => {
  try {
    const { name, email, subject, message } = req.body ?? {};

    if (typeof name !== "string" || name.trim().length < 2 || name.trim().length > 80) {
      res.status(400).json({ message: "Enter a name between 2 and 80 characters." });
      return;
    }
    if (typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254) {
      res.status(400).json({ message: "Enter a valid email address." });
      return;
    }
    if (typeof message !== "string" || message.trim().length < 10 || message.trim().length > 3000) {
      res.status(400).json({ message: "Message must be between 10 and 3000 characters." });
      return;
    }
    if (mongoose.connection.readyState !== 1) {
      res.status(503).json({ message: "Contact service is temporarily unavailable. Please email directly." });
      return;
    }

    await Contact.create({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      subject: typeof subject === "string" ? subject.trim().slice(0, 120) : "",
      message: message.trim(),
    });
    res.status(201).json({ message: "Message received. Thank you for reaching out." });
  } catch (error: unknown) {
    console.error("Contact submission failed:", error instanceof Error ? error.message : error);
    res.status(500).json({ message: "Could not send your message. Please try again later." });
  }
});

app.use((_req: Request, res: Response) => {
  res.status(404).json({ message: "Route not found" });
});

const errorHandler: ErrorRequestHandler = (error, _req, res, _next) => {
  console.error("Unhandled API error:", error instanceof Error ? error.message : error);
  res.status(500).json({ message: "Unexpected server error." });
};
app.use(errorHandler);

async function startServer(): Promise<void> {
  if (process.env.MONGODB_URI) {
    try {
      await mongoose.connect(process.env.MONGODB_URI);
      console.log("MongoDB connected");
    } catch (error: unknown) {
      console.error("MongoDB connection failed:", error instanceof Error ? error.message : error);
    }
  } else {
    console.warn("MONGODB_URI is not set; contact form persistence is disabled.");
  }

  app.listen(port, () => console.log(`Portfolio API listening on port ${port}`));
}

void startServer();
