import { useEffect, useState } from "react";
import { ArrowDownRight, ArrowUpRight, Github, Mail, Menu, X, Code2, Sparkles, ShieldCheck, GraduationCap, ExternalLink } from "lucide-react";

const fallbackProjects = [
  { slug:"eduavatar-ai",name:"EduAvatar AI / AI Teacher",category:"AI & Education",description:"An AI-assisted learning project exploring document-based teaching, generated lessons, learner questions, and adaptive practice.",stack:["React","TypeScript","Node.js","MongoDB","RAG"],repo:"https://github.com/riteshhosale/Ai-Teacher",featured:true },
  { slug:"hireguard",name:"HireGuard",category:"Cybersecurity",description:"A job-safety project exploring ways to assess suspicious job listings and help people identify potentially fraudulent opportunities.",stack:["React","Web security","Full-stack"],repo:"https://github.com/riteshhosale/HireGuard",featured:true },
  { slug:"travel-together",name:"Travel Together",category:"Collaboration",description:"A trip-planning app where users can create or join trips and communicate with fellow travelers.",stack:["MERN","Socket.IO","JWT","MongoDB"],repo:"https://github.com/riteshhosale/travel-together",featured:true },
  { slug:"expense-tracker",name:"Expense Tracker",category:"Personal Finance",description:"A full-stack expense tracking application with a React frontend and Node.js/Express backend.",stack:["React","Node.js","Express"],repo:"https://github.com/riteshhosale/expenses-tracker",featured:true },
  { slug:"mediscan",name:"MediScan",category:"Health Technology",description:"A medical-related application project. See the repository for current implementation details.",stack:["Web development","Product building"],repo:"https://github.com/riteshhosale/MediScan" },
  { slug:"dsa",name:"DSA Practice",category:"Programming Foundations",description:"A collection of data structures and algorithms practice programs.",stack:["C++","Data structures","Algorithms"],repo:"https://github.com/riteshhosale/DSA" },
  { slug:"notes-app",name:"Notes App",category:"Productivity",description:"A lightweight notes application focused on capturing and organizing information.",stack:["Web development","JavaScript"],repo:"https://github.com/riteshhosale/notes-app" },
  { slug:"age-calculator",name:"Age Calculator",category:"Web Utilities",description:"A simple utility that calculates age from a date of birth.",stack:["HTML","CSS","JavaScript"],repo:"https://github.com/riteshhosale/age-calcualator" }
];
const groups = [
  { title:"Frontend",detail:"React, JavaScript, TypeScript, HTML, CSS, Tailwind CSS, Vite" },
  { title:"Backend",detail:"Node.js, Express, REST APIs, JWT, Socket.IO" },
  { title:"Databases",detail:"MongoDB, Mongoose, data modeling" },
  { title:"AI & learning systems",detail:"LLM integrations, embeddings, retrieval-augmented generation concepts" },
  { title:"Programming foundations",detail:"C, C++, Python, data structures and algorithms" },
  { title:"Tools & deployment",detail:"Git, GitHub, Docker, Vercel, Render, GitHub Actions, Figma" }
];

function ProjectCard({ project, index }) {
  return <article className="project-card">
    <div className="project-top"><span className="project-number">0{index + 1}</span><span className="category">{project.category}</span></div>
    <h3>{project.name}</h3><p>{project.description}</p>
    <div className="tags">{project.stack?.map(tag => <span key={tag}>{tag}</span>)}</div>
    <a className="project-link" href={project.repo} target="_blank" rel="noreferrer">Explore repository <ArrowUpRight size={16}/></a>
  </article>;
}

export default function App() {
  const [projects, setProjects] = useState(fallbackProjects);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [form, setForm] = useState({ name:"", email:"", subject:"", message:"" });
  const [sending, setSending] = useState(false);
  const [notice, setNotice] = useState("");
  useEffect(() => { fetch("/api/projects").then(r => r.ok ? r.json() : Promise.reject()).then(data => { if (Array.isArray(data.projects)) setProjects(data.projects); }).catch(() => {}); }, []);
  const update = event => setForm(current => ({ ...current, [event.target.name]: event.target.value }));
  async function submit(event) {
    event.preventDefault(); setNotice(""); setSending(true);
    try {
      const response = await fetch("/api/contact", { method:"POST", headers:{ "Content-Type":"application/json" }, body:JSON.stringify(form) });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Could not send message.");
      setNotice(data.message); setForm({ name:"", email:"", subject:"", message:"" });
    } catch (error) {
      setNotice(error.message || "The contact API is not available yet. Please email me directly.");
    } finally { setSending(false); }
  }
  const closeMenu = () => setMobileOpen(false);
  const navItems = [["Projects","#projects"],["About","#about"],["Skills","#skills"],["Education","#education"],["Contact","#contact"]];
  return <>
    <header className="site-header"><div className="container nav-wrap"><a href="#home" className="brand" onClick={closeMenu}>RB<span>.</span></a>
      <nav className={mobileOpen ? "nav-links open" : "nav-links"}>{navItems.map(([label,href]) => <a key={href} href={href} onClick={closeMenu}>{label}</a>)}</nav>
      <a className="nav-cta" href="mailto:riteshbhosale092007@gmail.com">Let’s talk <ArrowUpRight size={15}/></a>
      <button className="mobile-toggle" onClick={() => setMobileOpen(v => !v)} aria-label={mobileOpen ? "Close navigation" : "Open navigation"}>{mobileOpen ? <X/> : <Menu/>}</button>
    </div></header>
    <main id="home">
      <section className="hero container">
        <div className="hero-copy"><div className="eyebrow"><span className="pulse"></span> DEVELOPER · STUDENT · BUILDER</div>
          <h1>Turning ideas into <span>useful software.</span></h1>
          <p className="hero-lead">I’m Ritesh Bhosale, a BCA student and full-stack developer exploring AI-powered products, practical cybersecurity, and better ways to solve real problems.</p>
          <div className="hero-actions"><a className="button button-primary" href="#projects">Explore my work <ArrowDownRight size={17}/></a><a className="button button-ghost" href="mailto:riteshbhosale092007@gmail.com"><Mail size={16}/> Get in touch</a></div>
          <div className="social-line"><a href="https://github.com/riteshhosale" target="_blank" rel="noreferrer"><Github size={16}/> GitHub <ArrowUpRight size={13}/></a><span>Based in India · Open to collaboration</span></div>
        </div>
        <div className="hero-art" aria-label="Developer code illustration"><div className="art-orbit orbit-one"></div><div className="art-orbit orbit-two"></div><div className="code-window"><div className="window-bar"><span></span><span></span><span></span><small>ritesh.js</small></div><div className="code-content"><div><i>01</i><b className="syntax-purple">const</b> <b>developer</b> = {'{'}</div><div><i>02</i>&nbsp; name: <b className="syntax-green">"Ritesh"</b>,</div><div><i>03</i>&nbsp; focus: [</div><div><i>04</i>&nbsp;&nbsp; <b className="syntax-green">"MERN stack"</b>,</div><div><i>05</i>&nbsp;&nbsp; <b className="syntax-green">"AI applications"</b>,</div><div><i>06</i>&nbsp;&nbsp; <b className="syntax-green">"Security"</b></div><div><i>07</i>&nbsp; ],</div><div><i>08</i>&nbsp; mindset: <b className="syntax-blue">"Keep building"</b></div><div><i>09</i>{'}'};</div><div><i>10</i><b className="syntax-purple">export default</b> developer;</div></div><div className="window-footer"><span className="live-dot"></span> Ready to build something useful</div></div><div className="float-chip chip-top"><Code2 size={17}/> Full-stack</div><div className="float-chip chip-bottom"><Sparkles size={17}/> AI curious</div></div>
      </section>
      <section className="ticker"><div className="container ticker-inner"><span>WHAT I BUILD</span><b>Full-stack apps</b><i>✳</i><b>AI experiences</b><i>✳</i><b>Safer products</b><i>✳</i><b>Useful tools</b></div></section>
      <section className="section container" id="projects"><div className="section-heading"><div><div className="section-kicker">01 / SELECTED WORK</div><h2>Ideas made <span>real.</span></h2></div><p>Projects that help me learn by shipping, testing, and improving across different problem spaces.</p></div>
        <div className="project-grid">{projects.map((project,index) => <ProjectCard key={project.slug || project.name} project={project} index={index}/>)}</div>
        <div className="center-link"><a href="https://github.com/riteshhosale?tab=repositories" target="_blank" rel="noreferrer">Browse all GitHub repositories <ExternalLink size={15}/></a></div>
      </section>
      <section className="section section-muted" id="about"><div className="container about-grid"><div><div className="section-kicker">02 / ABOUT ME</div><h2>Curious by nature.<br/><span>Practical by design.</span></h2></div><div className="about-copy"><p>I enjoy learning by building: breaking problems down, connecting frontend and backend systems, and improving a product one iteration at a time.</p><p>My main interests are full-stack engineering, AI-assisted learning, and application security. I value clear interfaces, maintainable code, and products that solve a real user problem.</p><div className="values"><div><Sparkles size={19}/><b>Learn continuously</b><small>Explore ideas through real builds.</small></div><div><ShieldCheck size={19}/><b>Build thoughtfully</b><small>Keep reliability and users in mind.</small></div></div></div></div></section>
      <section className="section container" id="skills"><div className="section-heading"><div><div className="section-kicker">03 / MY TOOLKIT</div><h2>Tools for the <span>job.</span></h2></div><p>Technologies I use or have explored through coursework and projects.</p></div><div className="skills-grid">{groups.map((group,index)=><article className="skill-card" key={group.title}><span>0{index+1}</span><h3>{group.title}</h3><p>{group.detail}</p></article>)}</div></section>
      <section className="section section-muted" id="education"><div className="container education-grid"><div><div className="section-kicker">04 / EDUCATION & GROWTH</div><h2>Building a strong <span>foundation.</span></h2><p className="education-intro">Learning computer science fundamentals while building practical projects and exploring where technology can make a difference.</p></div><div className="education-card"><div className="education-icon"><GraduationCap size={24}/></div><div><span className="category">EDUCATION</span><h3>Bachelor of Computer Applications (BCA)</h3><p>Sheth N.K.T.T. College of Commerce and Sheth J.T.T. College of Science and Arts</p><div className="tags"><span>Programming</span><span>Databases</span><span>Data Structures</span></div></div></div></div></section>
      <section className="section container contact-section" id="contact"><div className="contact-copy"><div className="section-kicker">05 / GET IN TOUCH</div><h2>Have a good idea?<br/><span>Let’s build it.</span></h2><p>Interested in internships, hackathons, open-source collaboration, or building something useful together? Send a message.</p><a className="email-link" href="mailto:riteshbhosale092007@gmail.com"><Mail size={17}/> riteshbhosale092007@gmail.com <ArrowUpRight size={15}/></a><a className="github-link" href="https://github.com/riteshhosale" target="_blank" rel="noreferrer"><Github size={17}/> github.com/riteshhosale <ArrowUpRight size={15}/></a></div>
        <form className="contact-form" onSubmit={submit}><div className="form-row"><label>Your name<input name="name" value={form.name} onChange={update} required minLength="2" maxLength="80" placeholder="Jane Doe"/></label><label>Email address<input name="email" value={form.email} onChange={update} required type="email" maxLength="254" placeholder="jane@example.com"/></label></div><label>Subject <span className="optional">(optional)</span><input name="subject" value={form.subject} onChange={update} maxLength="120" placeholder="Project collaboration"/></label><label>Your message<textarea name="message" value={form.message} onChange={update} required minLength="10" maxLength="3000" rows="5" placeholder="Tell me a little about what you have in mind..."/></label><button className="button button-primary submit-button" disabled={sending}>{sending ? "Sending…" : "Send message"} <ArrowUpRight size={16}/></button>{notice && <p className="form-notice" role="status">{notice}</p>}<p className="form-footnote">The form saves messages through the API when MongoDB is connected. You can always email me directly.</p></form>
      </section>
    </main>
    <footer className="site-footer"><div className="container footer-inner"><a className="brand" href="#home">RB<span>.</span></a><p>Designed & built by Ritesh Bhosale</p><span>© {new Date().getFullYear()} · Keep creating.</span></div></footer>
  </>;
}
