import { useEffect, useState } from "react";
import SiteHeader from "../components/layout/SiteHeader";
import SiteFooter from "../components/layout/SiteFooter";
import HeroSection from "../components/sections/HeroSection";
import TickerSection from "../components/sections/TickerSection";
import ProjectsSection from "../components/sections/ProjectsSection";
import AboutSection from "../components/sections/AboutSection";
import SkillsSection from "../components/sections/SkillsSection";
import EducationSection from "../components/sections/EducationSection";
import ContactSection from "../components/sections/ContactSection";
import { getProjects } from "../services/api";
import { fallbackProjects } from "../data/projects";
import type { Project } from "../types/portfolio";

export default function HomePage() {
  const [projects, setProjects] = useState<Project[]>(fallbackProjects);

  useEffect(() => {
    let active = true;
    getProjects()
      .then((items) => { if (active && items.length) setProjects(items); })
      .catch(() => { /* Keep local fallback projects if the API is offline. */ });
    return () => { active = false; };
  }, []);

  return (
    <>
      <SiteHeader />
      <main id="home">
        <HeroSection />
        <TickerSection />
        <ProjectsSection projects={projects} />
        <AboutSection />
        <SkillsSection />
        <EducationSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
