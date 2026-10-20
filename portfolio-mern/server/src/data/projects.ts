export type PortfolioProject = {
  slug: string;
  name: string;
  category: string;
  description: string;
  stack: string[];
  repo?: string;
  liveUrl?: string;
  vercelUrl?: string;
  featured: boolean;
};

export const projects: PortfolioProject[] = [
  { slug: "hireguard", name: "HireGuard / JobGuard AI", category: "Cybersecurity", description: "A job-safety project exploring ways to assess suspicious job listings and help people identify potentially fraudulent opportunities.", stack: ["React", "Web security", "Full-stack"], repo: "https://github.com/riteshhosale/HireGuard", liveUrl: "https://job-guard-ai-i4od.vercel.app", vercelUrl: "https://vercel.com/riteshs-projects-660a63e8/job-guard-ai-i4od", featured: true },
  { slug: "eduavatar-ai", name: "EduAvatar AI / AI Teacher", category: "AI & Education", description: "An AI-assisted learning project exploring document-based teaching, generated lessons, learner questions, and adaptive practice.", stack: ["React", "TypeScript", "Node.js", "MongoDB", "RAG"], repo: "https://github.com/riteshhosale/Ai-Teacher", liveUrl: "https://ai-teacher-seven-jade.vercel.app", vercelUrl: "https://vercel.com/riteshs-projects-660a63e8/ai-teacher", featured: true },
  { slug: "todo-app", name: "ToDo App", category: "Productivity", description: "A simple task management website for organizing everyday tasks.", stack: ["React", "Task management", "Web app"], liveUrl: "https://toda-app-tawny.vercel.app", vercelUrl: "https://vercel.com/riteshs-projects-660a63e8/toda-app", featured: true },
  { slug: "expense-tracker", name: "Expense Tracker", category: "Personal Finance", description: "A full-stack expense tracking application with a React frontend and Node.js/Express backend.", stack: ["React", "Node.js", "Express"], repo: "https://github.com/riteshhosale/expenses-tracker", liveUrl: "https://expenses-tracker-phi-blush.vercel.app", vercelUrl: "https://vercel.com/riteshs-projects-660a63e8/expenses-tracker", featured: true },
  { slug: "travel-together", name: "Travel Together", category: "Collaboration", description: "A trip-planning app where users can create or join trips and communicate with fellow travelers.", stack: ["MERN", "Socket.IO", "JWT", "MongoDB"], repo: "https://github.com/riteshhosale/travel-together", liveUrl: "https://travel-together-neon.vercel.app", vercelUrl: "https://vercel.com/riteshs-projects-660a63e8/travel-together", featured: true },
  { slug: "notes-app", name: "Notes App", category: "Productivity", description: "A lightweight notes application focused on capturing and organizing information.", stack: ["Web development", "JavaScript"], repo: "https://github.com/riteshhosale/notes-app", liveUrl: "https://notes-app-brct.vercel.app", vercelUrl: "https://vercel.com/riteshs-projects-660a63e8/notes-app-brct", featured: true },
  { slug: "age-calculator", name: "Age Calculator", category: "Web Utilities", description: "A simple utility that calculates age from a date of birth.", stack: ["HTML", "CSS", "JavaScript"], repo: "https://github.com/riteshhosale/age-calcualator", liveUrl: "https://age-calcualator.vercel.app", vercelUrl: "https://vercel.com/riteshs-projects-660a63e8/age-calcualator", featured: true },
  { slug: "mediscan", name: "MediScan", category: "Health Technology", description: "A medical-related application project. See the repository for current implementation details.", stack: ["Web development", "Product building"], repo: "https://github.com/riteshhosale/MediScan", featured: false },
  { slug: "dsa", name: "DSA Practice", category: "Programming Foundations", description: "A collection of data structures and algorithms practice programs.", stack: ["C++", "Data structures", "Algorithms"], repo: "https://github.com/riteshhosale/DSA", featured: false },
];
