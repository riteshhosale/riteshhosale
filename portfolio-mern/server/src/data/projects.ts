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
  { slug: "mediscan", name: "MediScan", category: "Health Technology", description: "A medical-related application project. See the repository for current implementation details.", stack: ["Web development", "Product building"], repo: "https://github.com/riteshhosale/MediScan", featured: false },
  { slug: "dsa", name: "DSA Practice", category: "Programming Foundations", description: "A collection of data structures and algorithms practice programs.", stack: ["C++", "Data structures", "Algorithms"], repo: "https://github.com/riteshhosale/DSA", featured: false },
];
