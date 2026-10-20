import { useState } from "react";
import { ArrowUpRight, Menu, Triangle, X } from "lucide-react";

const navItems: [string, string][] = [["Projects", "#projects"], ["About", "#about"], ["Skills", "#skills"], ["Education", "#education"], ["Contact", "#contact"]];

export default function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeMenu = () => setMobileOpen(false);

  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <a href="#home" className="brand" onClick={closeMenu}>RB<span>.</span></a>
        <nav className={mobileOpen ? "nav-links open" : "nav-links"}>{navItems.map(([label, href]) => <a key={href} href={href} onClick={closeMenu}>{label}</a>)}</nav>
        <div className="nav-actions">
          <a className="vercel-header-link" href="https://vercel.com/riteshs-projects-660a63e8" target="_blank" rel="noreferrer" aria-label="Open Vercel dashboard">
            <Triangle size={15} fill="currentColor" strokeWidth={1.5} /> <span>Vercel</span> <ArrowUpRight size={13} />
          </a>
          <a className="nav-cta" href="mailto:riteshbhosale092007@gmail.com">Let’s talk <ArrowUpRight size={15} /></a>
        </div>
        <button className="mobile-toggle" type="button" onClick={() => setMobileOpen((value) => !value)} aria-label={mobileOpen ? "Close navigation" : "Open navigation"}>{mobileOpen ? <X /> : <Menu />}</button>
      </div>
    </header>
  );
}
