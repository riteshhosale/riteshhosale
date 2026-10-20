import type { ErrorRequestHandler } from "express";

const errorHandler: ErrorRequestHandler = (error, _req, res, _next) => {
  console.error("Unhandled API error:", error instanceof Error ? error.message : error);
  res.status(500).json({ message: "Unexpected server error." });
};

export default errorHandler;
