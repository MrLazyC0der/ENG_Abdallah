import { useState, useEffect, useRef } from "react";
import { Github, Linkedin, Mail, ExternalLink, ArrowUpRight, Menu, X } from "lucide-react";
import img from "./assets/photo_2025-12-17_14-26-21.jpg";
// ─── Design tokens ───────────────────────────────────────────────
const C = {
  bg: "#F5F5F0",
  surface: "#FFFFFF",
  accent: "#0A84FF",
  accentMuted: "#E8F2FF",
  text: "#1A1A1A",
  muted: "#6B6B6B",
  border: "#E5E5E5",
};

// ─── Data ────────────────────────────────────────────────────────
const skills = {
  Backend:   ["Node.js", "Express.js", "MongoDB", "Redis", "JWT Auth"],
  Frontend:  ["React.js", "Tailwind CSS", "Bootstrap", "HTML", "CSS"],
  Languages: ["JavaScript", "TypeScript", "C++", "Python"],
  Tools:     ["Git", "GitHub", "Postman", "Docker", "Vercel", "VS Code"],
};

const projects = [
  {
    name: "Sara7a",
    type: "Backend",
    description:
      "Anonymous messaging platform with dual-token JWT authentication, Redis-based session management, role-based access control, and event-driven email notifications.",
    tech: ["Node.js", "Express", "MongoDB", "Redis", "JWT"],
    github: "#",
    demo: null,
  },
  {
    name: "Note App",
    type: "Frontend",
    description:
      "Task and note management app built with React, focused on clean component architecture and state management.",
    tech: ["React", "JavaScript", "CSS"],
    github: "#",
    demo: "#",
  },
  {
    name: "Weather Dashboard",
    type: "Frontend",
    description:
      "Responsive weather dashboard with REST API integration and dynamic UI updates.",
    tech: ["React", "Tailwind CSS", "API"],
    github: "https://github.com/MrLazyC0der/Weather_Dashboard",
    demo: "https://weather-dashboard-nine-ochre.vercel.app/",
  },
];

const experience = [
  {
    role: "Backend Developer",
    org: "Route Academy",
    period: "Nov 2024 – Present",
    current: true,
    desc: "Node.js Diploma — building production-grade APIs with Express, MongoDB, and Redis.",
  },
  {
    role: "Frontend Developer",
    org: "Route Academy",
    period: "Feb 2024 – Oct 2024",
    current: false,
    desc: "Frontend Diploma — building UI with React and Tailwind CSS.",
  },
];

// ─── Scroll reveal hook ──────────────────────────────────────────
function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return [ref, visible];
}

// ─── Helpers ─────────────────────────────────────────────────────
const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

const revealStyle = (visible, delay = 0) => ({
  opacity: visible ? 1 : 0,
  transform: visible ? "translateY(0)" : "translateY(24px)",
  transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
});

// ─── Sub-components ──────────────────────────────────────────────
function Tag({ label, accent }) {
  return (
    <span style={{
      display: "inline-block", padding: "3px 10px", borderRadius: 99,
      fontSize: 12, fontWeight: 500,
      background: accent ? C.accentMuted : "#F0F0EC",
      color: accent ? C.accent : C.muted,
      letterSpacing: "0.01em",
    }}>
      {label}
    </span>
  );
}

function Divider() {
  return <div style={{ borderTop: `1px solid ${C.border}` }} />;
}

// ─── Nav ─────────────────────────────────────────────────────────
function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = [
    { label: "About", target: "about" },
    { label: "Skills", target: "skills" },
    { label: "Experience", target: "experience" },
    { label: "Projects", target: "projects" },
    { label: "Contact", target: "contact" },
  ];

  const handleNav = (target) => {
    scrollTo(target);
    setMenuOpen(false);
  };

  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: "rgba(245,245,240,0.88)",
        backdropFilter: "blur(14px)", WebkitBackdropFilter: "blur(14px)",
        borderBottom: `1px solid ${C.border}`,
        padding: "0 24px", height: 56,
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <span style={{ fontSize: 15, fontWeight: 700, color: C.text, letterSpacing: "-0.01em" }}>
          Abdallah<span style={{ color: C.accent }}>.</span>
        </span>

        {/* Desktop links */}
        <div style={{ display: "flex", gap: 28, alignItems: "center" }}
             className="desktop-nav">
          {navLinks.map(l => (
            <button key={l.target} onClick={() => handleNav(l.target)}
              style={{ color: C.muted, fontSize: 14, fontWeight: 500, background: "none", border: "none", cursor: "pointer", padding: "4px 0" }}
              onMouseEnter={e => (e.target.style.color = C.text)}
              onMouseLeave={e => (e.target.style.color = C.muted)}>
              {l.label}
            </button>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button onClick={() => setMenuOpen(!menuOpen)}
          className="mobile-menu-btn"
          style={{ background: "none", border: "none", cursor: "pointer", color: C.text, display: "none", padding: 4 }}>
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <div style={{
          position: "fixed", top: 56, left: 0, right: 0, zIndex: 99,
          background: C.surface, borderBottom: `1px solid ${C.border}`,
          display: "flex", flexDirection: "column",
          padding: "12px 0",
        }}
        className="mobile-dropdown">
          {navLinks.map(l => (
            <button key={l.target} onClick={() => handleNav(l.target)}
              style={{ color: C.text, fontSize: 15, fontWeight: 500, background: "none", border: "none", cursor: "pointer", padding: "12px 24px", textAlign: "left" }}>
              {l.label}
            </button>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 640px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </>
  );
}

// ─── Hero ────────────────────────────────────────────────────────
function Hero() {
  // Replace this URL with your actual hosted image URL
  const PHOTO_URL = "https://i.pravatar.cc/300?img=11"; // placeholder — replace with your real photo URL

  return (
    <section id="home" style={{
      minHeight: "100vh", display: "flex", alignItems: "center",
      padding: "120px 24px 80px", position: "relative", overflow: "hidden",
    }}>
      {/* Ambient decoration */}
      <span aria-hidden style={{
        position: "absolute", right: "6%", top: "28%",
        fontSize: 200, fontWeight: 700, color: C.accent,
        opacity: 0.035, fontFamily: "monospace", userSelect: "none", lineHeight: 1,
      }}>{"{}"}</span>

      <div style={{
        maxWidth: 760, margin: "0 auto", width: "100%",
        display: "flex", alignItems: "center", gap: 56,
        flexWrap: "wrap",
      }}>
        {/* Photo */}
        <div style={{ flexShrink: 0 }}>
          <div style={{
            width: 140, height: 140, borderRadius: "50%",
            overflow: "hidden",
            border: `2px solid ${C.border}`,
            background: C.accentMuted,
          }}>
            <img
              src={img}
              alt="Abdallah Mohamed"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </div>

        {/* Text */}
        <div style={{ flex: 1, minWidth: 260 }}>
          <p style={{ fontSize: 13, color: C.accent, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 16, margin: "0 0 16px" }}>
            Backend Developer
          </p>
          <h1 style={{ fontSize: "clamp(36px, 5.5vw, 64px)", fontWeight: 700, color: C.text, lineHeight: 1.08, letterSpacing: "-0.03em", margin: "0 0 20px" }}>
            Abdallah<br />Mohamed
          </h1>
          <p style={{ fontSize: 16, color: C.muted, lineHeight: 1.65, maxWidth: 420, margin: "0 0 36px" }}>
            CS student at Mansoura University, building scalable APIs with Node.js, Express, and MongoDB.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <button onClick={() => scrollTo("projects")}
              style={{ padding: "10px 22px", background: C.accent, color: "#fff", border: "none", borderRadius: 99, fontSize: 14, fontWeight: 600, cursor: "pointer" }}>
              View Projects
            </button>
            <button onClick={() => scrollTo("contact")}
              style={{ padding: "10px 22px", background: "transparent", color: C.text, border: `1.5px solid ${C.border}`, borderRadius: 99, fontSize: 14, fontWeight: 600, cursor: "pointer" }}>
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── About ───────────────────────────────────────────────────────
function About() {
  const [ref, visible] = useReveal();
  return (
    <section id="about" style={{ padding: "80px 24px", background: C.surface }}>
      <Divider />
      <div ref={ref} style={{ maxWidth: 680, margin: "60px auto 0", ...revealStyle(visible) }}>
        <p style={{ fontSize: 11, color: C.accent, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16 }}>About</p>
        <h2 style={{ fontSize: "clamp(24px, 3.5vw, 36px)", fontWeight: 700, color: C.text, letterSpacing: "-0.02em", margin: "0 0 24px", lineHeight: 1.2 }}>
          Building toward a backend internship through real projects.
        </h2>
        <p style={{ fontSize: 16, color: C.muted, lineHeight: 1.7, margin: "0 0 16px" }}>
          Second-year CS student at Mansoura University (Faculty of Computer & Information Sciences), with a backend-first focus. Completed both a Frontend/React Diploma and a Node.js Backend Diploma through Route Academy.
        </p>
        <p style={{ fontSize: 16, color: C.muted, lineHeight: 1.7 }}>
          I build in public — documenting the journey on YouTube and Instagram under{" "}
          <span style={{ color: C.text, fontWeight: 500 }}>Big-Abdallah</span>.
        </p>
      </div>
    </section>
  );
}

// ─── Skills ──────────────────────────────────────────────────────
function Skills() {
  const [ref, visible] = useReveal();
  return (
    <section id="skills" style={{ padding: "80px 24px", background: C.bg }}>
      <Divider />
      <div ref={ref} style={{ maxWidth: 680, margin: "60px auto 0", ...revealStyle(visible) }}>
        <p style={{ fontSize: 11, color: C.accent, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 40 }}>Tech Stack</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 32 }}>
          {Object.entries(skills).map(([cat, list]) => (
            <div key={cat}>
              <p style={{ fontSize: 12, color: C.muted, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 12, margin: "0 0 12px" }}>{cat}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {list.map(s => <Tag key={s} label={s} accent={cat === "Backend"} />)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Experience ──────────────────────────────────────────────────
function Experience() {
  const [ref, visible] = useReveal();
  return (
    <section id="experience" style={{ padding: "80px 24px", background: C.surface }}>
      <Divider />
      <div ref={ref} style={{ maxWidth: 680, margin: "60px auto 0", ...revealStyle(visible) }}>
        <p style={{ fontSize: 11, color: C.accent, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 40 }}>Experience</p>
        {experience.map((e, i) => (
          <div key={i}>
            <div style={{ padding: "24px 0", display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 16, flexWrap: "wrap" }}>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4 }}>
                  <p style={{ fontSize: 16, fontWeight: 600, color: C.text, margin: 0 }}>{e.role}</p>
                  {e.current && (
                    <span style={{ fontSize: 11, fontWeight: 600, color: C.accent, background: C.accentMuted, padding: "2px 8px", borderRadius: 99 }}>
                      Current
                    </span>
                  )}
                </div>
                <p style={{ fontSize: 14, color: C.accent, margin: "0 0 8px" }}>{e.org}</p>
                <p style={{ fontSize: 14, color: C.muted, margin: 0, lineHeight: 1.6 }}>{e.desc}</p>
              </div>
              <p style={{ fontSize: 13, color: C.muted, whiteSpace: "nowrap", margin: 0 }}>{e.period}</p>
            </div>
            {i < experience.length - 1 && <Divider />}
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── Projects ────────────────────────────────────────────────────
function Projects() {
  const [ref, visible] = useReveal();
  return (
    <section id="projects" style={{ padding: "80px 24px", background: C.bg }}>
      <Divider />
      <div ref={ref} style={{ maxWidth: 680, margin: "60px auto 0", ...revealStyle(visible) }}>
        <p style={{ fontSize: 11, color: C.accent, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 40 }}>Projects</p>
        {projects.map((p, i) => (
          <div key={i}>
            <div style={{ padding: "28px 0" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8, flexWrap: "wrap", gap: 8 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <h3 style={{ fontSize: 17, fontWeight: 700, color: C.text, margin: 0 }}>{p.name}</h3>
                  <Tag label={p.type} />
                </div>
                <div style={{ display: "flex", gap: 16 }}>
                  {p.github && p.github !== "#" && (
                    <a href={p.github} target="_blank" rel="noreferrer"
                      style={{ color: C.muted, display: "flex", alignItems: "center", gap: 4, fontSize: 13, textDecoration: "none", fontWeight: 500 }}>
                      <Github size={13} /> Code
                    </a>
                  )}
                  {p.demo && p.demo !== "#" && (
                    <a href={p.demo} target="_blank" rel="noreferrer"
                      style={{ color: C.accent, display: "flex", alignItems: "center", gap: 4, fontSize: 13, textDecoration: "none", fontWeight: 500 }}>
                      <ExternalLink size={13} /> Demo
                    </a>
                  )}
                </div>
              </div>
              <p style={{ fontSize: 14, color: C.muted, lineHeight: 1.65, margin: "0 0 12px" }}>{p.description}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {p.tech.map(t => <Tag key={t} label={t} />)}
              </div>
            </div>
            {i < projects.length - 1 && <Divider />}
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── Contact ─────────────────────────────────────────────────────
function Contact() {
  const [ref, visible] = useReveal();
  const links = [
    { icon: <Mail size={15} />, label: "swe.abdallah.m@icloud.com", href: "mailto:swe.abdallah.m@icloud.com" },
    { icon: <Linkedin size={15} />, label: "LinkedIn", href: "https://www.linkedin.com/in/engabdallahmohamed/" },
    { icon: <Github size={15} />, label: "GitHub", href: "https://github.com/MrLazyC0der" },
  ];
  return (
    <section id="contact" style={{ padding: "80px 24px 100px", background: C.surface }}>
      <Divider />
      <div ref={ref} style={{ maxWidth: 680, margin: "60px auto 0", ...revealStyle(visible) }}>
        <p style={{ fontSize: 11, color: C.accent, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16 }}>Contact</p>
        <h2 style={{ fontSize: "clamp(24px, 3.5vw, 36px)", fontWeight: 700, color: C.text, letterSpacing: "-0.02em", margin: "0 0 40px", lineHeight: 1.2 }}>
          Open to backend internship<br />and junior opportunities.
        </h2>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          {links.map(({ icon, label, href }) => (
            <a key={label} href={href} target="_blank" rel="noreferrer"
              style={{
                display: "flex", alignItems: "center", gap: 8,
                padding: "10px 18px", border: `1.5px solid ${C.border}`,
                borderRadius: 99, fontSize: 13, fontWeight: 500, color: C.text,
                textDecoration: "none", background: C.bg, transition: "border-color 0.2s",
              }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = C.accent)}
              onMouseLeave={e => (e.currentTarget.style.borderColor = C.border)}>
              {icon} {label} <ArrowUpRight size={11} color={C.muted} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── App ─────────────────────────────────────────────────────────
export default function Portfolio() {
  return (
    <div style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif", background: C.bg, color: C.text, minHeight: "100vh" }}>
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <div style={{ borderTop: `1px solid ${C.border}`, padding: "24px", textAlign: "center" }}>
        <p style={{ fontSize: 12, color: C.muted, margin: 0 }}>© 2025 Abdallah Mohamed · Built with React</p>
      </div>
    </div>
  );
}
