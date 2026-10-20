import type { Request, Response } from "express";
import type { ParamsDictionary } from "express-serve-static-core";
import mongoose from "mongoose";
import Contact from "../models/Contact.js";

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  subject?: unknown;
  message?: unknown;
};

export async function createContact(
  req: Request<ParamsDictionary, unknown, ContactPayload>,
  res: Response,
): Promise<void> {
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
}
