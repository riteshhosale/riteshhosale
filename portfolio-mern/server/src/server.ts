import "dotenv/config";
import mongoose from "mongoose";
import app from "./app.js";

const port = Number(process.env.PORT) || 5000;

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
