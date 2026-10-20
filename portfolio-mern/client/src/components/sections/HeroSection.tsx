import { ArrowDownRight, ArrowUpRight, Github, Mail, Code2 } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="hero container">
      <div className="hero-copy">
        <div className="eyebrow"><span className="pulse"></span> DEVELOPER · STUDENT · BUILDER</div>
        <h1>Turning ideas into <span>useful software.</span></h1>
        <p className="hero-lead">I’m Ritesh Bhosale, a BCA student and full-stack developer exploring AI-powered products, practical cybersecurity, and better ways to solve real problems.</p>
        <div className="hero-actions"><a className="button button-primary" href="#projects">Explore my work <ArrowDownRight size={17} /></a><a className="button button-ghost" href="mailto:riteshbhosale092007@gmail.com"><Mail size={16} /> Get in touch</a></div>
        <div className="social-line"><a href="https://github.com/riteshhosale" target="_blank" rel="noreferrer"><Github size={16} /> GitHub <ArrowUpRight size={13} /></a><span>Based in India · Open to collaboration</span></div>
      </div>
      <div className="hero-portrait-wrap">
        <div className="hero-portrait-glow"></div>
        <img className="hero-portrait" src="/ritesh-profile.jpg" alt="Portrait of Ritesh Bhosale" />
        <div className="float-chip portrait-chip"><Code2 size={17} /> Full-stack developer</div>
      </div>
    </section>
  );
}
