import "dotenv/config";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import Contact from "./models/Contact.js";
import { projects } from "./data/projects.js";

const app = express();
const port = Number(process.env.PORT) || 5000;
app.disable("x-powered-by");
app.use(cors({ origin: process.env.CLIENT_ORIGIN?.split(",") || "http://localhost:5173" }));
app.use(express.json({ limit: "20kb" }));

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", database: mongoose.connection.readyState === 1 ? "connected" : "disconnected" });
});
app.get("/api/projects", (_req, res) => res.json({ projects }));
app.get("/api/projects/:slug", (req, res) => {
  const project = projects.find(item => item.slug === req.params.slug);
  if (!project) return res.status(404).json({ message: "Project not found" });
  return res.json({ project });
});
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body ?? {};
    if (typeof name !== "string" || name.trim().length < 2 || name.trim().length > 80)
      return res.status(400).json({ message: "Enter a name between 2 and 80 characters." });
    if (typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254)
      return res.status(400).json({ message: "Enter a valid email address." });
    if (typeof message !== "string" || message.trim().length < 10 || message.trim().length > 3000)
      return res.status(400).json({ message: "Message must be between 10 and 3000 characters." });
    if (mongoose.connection.readyState !== 1)
      return res.status(503).json({ message: "Contact service is temporarily unavailable. Please email directly." });
    await Contact.create({ name: name.trim(), email: email.trim(), subject: typeof subject === "string" ? subject.trim().slice(0, 120) : "", message: message.trim() });
    return res.status(201).json({ message: "Message received. Thank you for reaching out." });
  } catch (error) {
    console.error("Contact submission failed:", error.message);
    return res.status(500).json({ message: "Could not send your message. Please try again later." });
  }
});
app.use((req, res) => res.status(404).json({ message: "Route not found" }));

if (process.env.MONGODB_URI) {
  mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log("MongoDB connected"))
    .catch(error => console.error("MongoDB connection failed:", error.message));
} else {
  console.warn("MONGODB_URI is not set; contact form persistence is disabled.");
}
app.listen(port, () => console.log(`Portfolio API listening on port ${port}`));
