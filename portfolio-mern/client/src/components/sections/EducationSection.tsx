import { GraduationCap } from "lucide-react";

export default function EducationSection() {
  return (
    <section className="section section-muted" id="education"><div className="container education-grid"><div><div className="section-kicker">04 / EDUCATION & GROWTH</div><h2>Building a strong <span>foundation.</span></h2><p className="education-intro">Learning computer science fundamentals while building practical projects and exploring where technology can make a difference.</p></div><div className="education-card"><div className="education-icon"><GraduationCap size={24} /></div><div><span className="category">EDUCATION</span><h3>Bachelor of Computer Applications (BCA)</h3><p>Sheth N.K.T.T. College of Commerce and Sheth J.T.T. College of Science and Arts</p><div className="tags"><span>Programming</span><span>Databases</span><span>Data Structures</span></div></div></div></div></section>
  );
}
