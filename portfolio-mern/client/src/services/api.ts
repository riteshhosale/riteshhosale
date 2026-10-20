import type { ApiMessage, ContactFormValues, Project } from "../types/portfolio";

const API_BASE = (import.meta.env.VITE_API_BASE_URL ?? "").replace(/\/$/, "");

async function parseJson<T>(response: Response): Promise<T> {
  return (await response.json()) as T;
}

export async function getProjects(): Promise<Project[]> {
  const response = await fetch(`${API_BASE}/api/projects`);
  if (!response.ok) throw new Error("Could not load projects.");
  const data = await parseJson<{ projects?: Project[] }>(response);
  return Array.isArray(data.projects) ? data.projects : [];
}

export async function sendContactMessage(values: ContactFormValues): Promise<string> {
  const response = await fetch(`${API_BASE}/api/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(values),
  });
  const data = await parseJson<ApiMessage>(response);
  if (!response.ok) throw new Error(data.message || "Could not send message.");
  return data.message || "Message sent successfully.";
}
