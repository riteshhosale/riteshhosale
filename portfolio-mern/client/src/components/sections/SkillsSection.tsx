import { skillGroups } from "../../data/skills";

export default function SkillsSection() {
  return (
    <section className="section container" id="skills"><div className="section-heading"><div><div className="section-kicker">03 / MY TOOLKIT</div><h2>Tools for the <span>job.</span></h2></div><p>Technologies I use or have explored through coursework and projects.</p></div><div className="skills-grid">{skillGroups.map((group, index) => <article className="skill-card" key={group.title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{group.title}</h3><p>{group.detail}</p></article>)}</div></section>
  );
}
