import { ArrowDownRight, ArrowUpRight, Github, Mail, Code2, Sparkles } from "lucide-react";

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
          <div className="hero-art" aria-label="Developer code illustration">
            <div className="art-orbit orbit-one"></div><div className="art-orbit orbit-two"></div>
            <div className="code-window"><div className="window-bar"><span></span><span></span><span></span><small>ritesh.ts</small></div>
              <div className="code-content">
                <div><i>01</i><b className="syntax-purple">const</b> <b>developer</b> = {"{"}</div>
                <div><i>02</i>&nbsp; name: <b className="syntax-green">"Ritesh"</b>,</div><div><i>03</i>&nbsp; focus: [</div>
                <div><i>04</i>&nbsp;&nbsp; <b className="syntax-green">"MERN stack"</b>,</div><div><i>05</i>&nbsp;&nbsp; <b className="syntax-green">"AI applications"</b>,</div>
                <div><i>06</i>&nbsp;&nbsp; <b className="syntax-green">"Security"</b></div><div><i>07</i>&nbsp; ],</div>
                <div><i>08</i>&nbsp; mindset: <b className="syntax-blue">"Keep building"</b></div><div><i>09</i>{"}"};</div>
                <div><i>10</i><b className="syntax-purple">export default</b> developer;</div>
              </div><div className="window-footer"><span className="live-dot"></span> Ready to build something useful</div>
            </div>
            <div className="float-chip chip-top"><Code2 size={17} /> Full-stack</div><div className="float-chip chip-bottom"><Sparkles size={17} /> AI curious</div>
          </div></section>
  );
}
