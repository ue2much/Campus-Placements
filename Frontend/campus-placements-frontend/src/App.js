import React from "react";
import "./App.css";

function Nav() {
  return (
    <nav className="nav">
      <div className="brand">Campus<span>Placements</span></div>
      <div className="nav-actions">
        <a href="#jobs" className="link">Jobs</a>
        <a href="#companies" className="link">Companies</a>
        <a href="#how" className="link">How it works</a>
        <button className="btn btn-outline">Sign in</button>
        <button className="btn btn-primary">Sign up</button>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <header className="hero">
      <div className="hero-copy">
        <h1>Launch your career, from campus to company</h1>
        <p className="sub">
          Discover internships and graduate roles matched to your skills.
          Verified employers. Smart recommendations. Zero noise.
        </p>
        <form
          className="search"
          onSubmit={(e) => { e.preventDefault(); alert("Search submitted!"); }}
        >
          <input placeholder="Try: Frontend intern, Data analyst…" />
          <select defaultValue="All locations">
            <option>All locations</option>
            <option>On-site</option>
            <option>Hybrid</option>
            <option>Remote</option>
          </select>
          <button className="btn btn-primary">Search jobs</button>
        </form>
        <div className="hero-stats">
          <div><strong>2,300+</strong><span>active roles</span></div>
          <div><strong>480+</strong><span>partner companies</span></div>
          <div><strong>95%</strong><span>student satisfaction</span></div>
        </div>
      </div>
      <div className="hero-visual" aria-hidden>
        <div className="card">
          <div className="badge">🔥 Trending</div>
          <h3>Software Engineer Intern</h3>
          <p className="muted">ByteWorks • Remote • Summer 2026</p>
          <ul className="tags">
            <li>React</li><li>Python</li><li>SQL</li>
          </ul>
          <button className="btn btn-outline small">View role</button>
        </div>
        <div className="card ghost">
          <h3>Data Analyst Graduate</h3>
          <p className="muted">Insightly • NYC • Full-time</p>
          <ul className="tags"><li>Excel</li><li>Tableau</li><li>SQL</li></ul>
        </div>
      </div>
    </header>
  );
}

function Logos() {
  return (
    <section id="companies" className="logos">
      <p className="muted">Trusted by recruiting teams at</p>
      <div className="logo-row">
        <div className="logo">▲ Apex</div>
        <div className="logo">◎ NovaLab</div>
        <div className="logo">▨ Finlytics</div>
        <div className="logo">◈ SkyNet</div>
        <div className="logo">◆ Cloudify</div>
      </div>
    </section>
  );
}

function Features() {
  const items = [
    { icon: "🎯", title: "Smart matching", text: "Get roles tailored to your major, skills, and visa status." },
    { icon: "📝", title: "1-click apply", text: "Upload once. Reuse your profile for every application." },
    { icon: "🤝", title: "Verified employers", text: "Every company is screened to reduce spam and ghosting." },
  ];
  return (
    <section className="features">
      {items.map(i => (
        <div className="feature" key={i.title}>
          <div className="icon">{i.icon}</div>
          <h3>{i.title}</h3>
          <p>{i.text}</p>
        </div>
      ))}
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { n: 1, t: "Create your profile", d: "Import your resume. Add skills, coursework, and graduation date." },
    { n: 2, t: "Get curated jobs", d: "We recommend roles from partner companies that fit your profile." },
    { n: 3, t: "Apply & track", d: "1-click apply, then track interviews, offers, and deadlines in one place." },
  ];
  return (
    <section id="how" className="how">
      <h2>How it works</h2>
      <ol>
        {steps.map(s => (
          <li key={s.n}>
            <span className="step">{s.n}</span>
            <div>
              <h4>{s.t}</h4>
              <p className="muted">{s.d}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

function CTA() {
  return (
    <section className="cta">
      <h2>Ready to land your first offer?</h2>
      <p className="sub">Join thousands of students who’ve launched their careers with Campus Placements.</p>
      <div className="cta-actions">
        <button className="btn btn-primary">Create free account</button>
        <button className="btn btn-outline">Browse roles</button>
      </div>
      <p className="tiny muted">No credit card required • Cancel anytime</p>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Campus Placements</p>
      <div className="links">
        <a href="#!">Privacy</a>
        <a href="#!">Terms</a>
        <a href="#!">Contact</a>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Logos />
      <Features />
      <HowItWorks />
      <CTA />
      <Footer />
    </>
  );
}
