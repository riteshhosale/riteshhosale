import { Sparkles, ShieldCheck } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="section section-muted" id="about">
      <div className="container about-grid">
        <div className="about-portrait-wrap"><img className="about-portrait" src="/ritesh-profile.jpg" alt="Ritesh Bhosale" loading="lazy" /></div>
        <div>
          <div className="section-kicker">02 / ABOUT ME</div>
          <h2>Curious by nature.<br /><span>Practical by design.</span></h2>
          <div className="about-copy">
            <p>I enjoy learning by building: breaking problems down, connecting frontend and backend systems, and improving a product one iteration at a time.</p>
            <p>My main interests are full-stack engineering, AI-assisted learning, and application security. I value clear interfaces, maintainable code, and products that solve a real user problem.</p>
            <div className="values"><div><Sparkles size={19} /><b>Learn continuously</b><small>Explore ideas through real builds.</small></div><div><ShieldCheck size={19} /><b>Build thoughtfully</b><small>Keep reliability and users in mind.</small></div></div>
          </div>
        </div>
      </div>
    </section>
  );
}
