import React, { useState, useEffect, useRef, useContext, createContext } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  ArrowRight,
  ArrowUpRight,
  Menu,
  X,
  Server,
  Layout as LayoutIcon,
  Database,
  Wrench,
  Sun,
  Moon,
  Languages,
} from "lucide-react";
import photo from "./assets/photo.jpg";
import certificate from "./assets/certificate.jpeg";
/* ------------------------------------------------------------------ */
/*  Theme + Language context                                           */
/* ------------------------------------------------------------------ */

const ThemeContext = createContext(null);
const useTheme = () => useContext(ThemeContext);

const LangContext = createContext(null);
const useLang = () => useContext(LangContext);

function getColors(dark) {
  return dark
    ? {
        bg: "bg-stone-950",
        surface: "bg-stone-900",
        surfaceAlt: "bg-stone-800",
        border: "border-stone-800",
        text: "text-stone-50",
        textMuted: "text-stone-400",
        textFaint: "text-stone-500",
        emphasisBorder: "border-amber-400",
        emphasisAccent: "text-amber-400",
        chip: "border-stone-700 bg-stone-800 text-stone-300 hover:border-amber-400",
        chipEmphasis: "border-stone-700 bg-stone-800 text-stone-300 hover:border-amber-400",
        navBg: "bg-stone-900/90",
        hover: "hover:bg-stone-800",
        dot: "bg-amber-400",
        dotMuted: "bg-stone-500",
        primaryBtn: "bg-amber-400 text-stone-950",
        ghostBtn: "border-stone-700 bg-stone-900 text-stone-50 hover:bg-stone-800",
        iconRing: "bg-amber-400 text-stone-950",
      }
    : {
        bg: "bg-stone-100",
        surface: "bg-white",
        surfaceAlt: "bg-stone-50",
        border: "border-stone-200",
        text: "text-stone-900",
        textMuted: "text-stone-600",
        textFaint: "text-stone-500",
        emphasisBorder: "border-stone-900",
        emphasisAccent: "text-stone-900",
        chip: "border-stone-200 bg-stone-50 text-stone-900 hover:border-stone-900",
        chipEmphasis: "border-stone-200 bg-stone-50 text-stone-900 hover:border-stone-900",
        navBg: "bg-white/90",
        hover: "hover:bg-stone-100",
        dot: "bg-stone-900",
        dotMuted: "bg-stone-400",
        primaryBtn: "bg-stone-900 text-white",
        ghostBtn: "border-stone-200 bg-white text-stone-900 hover:bg-stone-100",
        iconRing: "bg-stone-900 text-white",
      };
}

/* ------------------------------------------------------------------ */
/*  Translations                                                       */
/* ------------------------------------------------------------------ */

const TRANSLATIONS = {
  en: {
    dir: "ltr",
    brand: "A. Mohamed",
    nav: { about: "About", skills: "Skills", training: "Training", projects: "Projects", contact: "Contact", contactBtn: "Contact Me" },
    hero: {
      eyebrow: "Full Stack Developer · Backend-focused (Node.js)",
      name: "Abdallah Mohamed",
      description:
        "Backend-focused Full Stack Developer and Computer Science student passionate about building scalable APIs and modern web applications using Node.js, Express, MongoDB, and React.",
      viewProjects: "View Projects",
      contactMe: "Contact Me",
    },
    about: {
      eyebrow: "Who I am",
      heading: "About",
      p1: "Computer Science student at FCIS, Mansoura University, specializing in backend development with Node.js and Express.",
      p2: "Completed a 300-hour Full Stack Web Development diploma at Route Academy covering both frontend and backend technologies.",
      p3: "Passionate about building scalable APIs, authentication systems, and modern web applications.",
    },
    skillsSection: { eyebrow: "What I work with", heading: "Technical Skills" },
    skillCategories: { backend: "Backend", frontend: "Frontend", databases: "Databases", tools: "Tools" },
    training: {
      eyebrow: "Route Academy",
      heading: "Training & Certifications",
      subtitle: "Full Stack Web Development — 300 Hours",
    },
    trainingStages: { frontend: "Frontend Stage", backend: "Backend Stage" },
    certificate: { caption: "Full Stack Web Development Diploma", issuer: "Route Academy", view: "View full certificate" },
    projectsSection: { eyebrow: "Case studies", heading: "Projects", viewGithub: "View on GitHub" },
    projectTypes: { backend: "Backend", fullstack: "Full Stack", frontend: "Frontend" },
    projectDescriptions: {
  sara7a: "Anonymous messaging platform featuring JWT authentication, Redis session management, role-based authorization, and email notifications.",
  social: "Modern social media platform with authentication, posts, comments, likes, and real-time interactions.",
  ecommerce: "E-commerce application with authentication, product management, cart, orders, and payment integration.",
  noteApp: "SPA for managing notes with register/login, JWT authentication, and full create, edit, and delete flows, built with React Router, Hero UI components, and React Hook Form + Zod validation.",
  weather: "Weather dashboard with city search, live conditions (temperature, feels-like, humidity, wind, pressure, visibility), a 5-day forecast with icons, and dark mode, powered by the free wttr.in API.",
},
    contactSection: { eyebrow: "Let's build something", heading: "Get in Touch" },
    contactLabels: { email: "Email", phone: "Phone", location: "Location", linkedin: "LinkedIn", github: "GitHub" },
    locationValue: "Dakahlia, Egypt",
    footer: {
      role: "Full Stack Developer — Backend-focused with Node.js",
      copyright: "© 2026 Abdallah Mohamed — Built with React + Tailwind CSS",
    },
    toggleLangLabel: "العربية",
  },
  ar: {
    dir: "rtl",
    brand: "ع. محمد",
    nav: { about: "نبذة عني", skills: "المهارات", training: "التدريب", projects: "المشاريع", contact: "تواصل", contactBtn: "تواصل معي" },
    hero: {
      eyebrow: "مطور فل ستاك · متخصص في الباك اند (Node.js)",
      name: "عبدالله محمد",
      description:
        "مطور فل ستاك متخصص في الباك اند وطالب علوم حاسب، شغوف ببناء واجهات برمجية قابلة للتوسع وتطبيقات ويب حديثة باستخدام Node.js وExpress وMongoDB وReact.",
      viewProjects: "عرض المشاريع",
      contactMe: "تواصل معي",
    },
    about: {
      eyebrow: "من أنا",
      heading: "نبذة عني",
      p1: "طالب علوم حاسب بكلية الحاسبات والمعلومات، جامعة المنصورة، متخصص في تطوير الباك اند باستخدام Node.js وExpress.",
      p2: "أكملت دبلومة تطوير الويب المتكامل لمدة 300 ساعة في أكاديمية روت، تغطي تقنيات الفرونت اند والباك اند.",
      p3: "شغوف ببناء واجهات برمجية قابلة للتوسع وأنظمة مصادقة وتطبيقات ويب حديثة.",
    },
    skillsSection: { eyebrow: "أدوات العمل", heading: "المهارات التقنية" },
    skillCategories: { backend: "الباك اند", frontend: "الفرونت اند", databases: "قواعد البيانات", tools: "الأدوات" },
    training: {
      eyebrow: "أكاديمية روت",
      heading: "التدريب والشهادات",
      subtitle: "تطوير الويب المتكامل — 300 ساعة",
    },
    trainingStages: { frontend: "مرحلة الفرونت اند", backend: "مرحلة الباك اند" },
    certificate: { caption: "دبلومة تطوير الويب المتكامل", issuer: "أكاديمية روت", view: "عرض الشهادة كاملة" },
    projectsSection: { eyebrow: "دراسات حالة", heading: "المشاريع", viewGithub: "عرض على جيت هاب" },
    projectTypes: { backend: "باك اند", fullstack: "فل ستاك", frontend: "فرونت اند" },
    projectDescriptions: {
  sara7a: "منصة مراسلة مجهولة الهوية تتضمن مصادقة JWT، وإدارة جلسات عبر Redis، وصلاحيات حسب الأدوار، وإشعارات بريد إلكتروني.",
  social: "منصة تواصل اجتماعي حديثة تتضمن مصادقة، ومنشورات، وتعليقات، وإعجابات، وتفاعلات لحظية.",
  ecommerce: "تطبيق تجارة إلكترونية يتضمن مصادقة، وإدارة منتجات، وسلة شراء، وطلبات، وربط بوسائل الدفع.",
  noteApp: "تطبيق SPA لإدارة الملاحظات فيه تسجيل حساب وتسجيل دخول بمصادقة JWT، وعمليات إضافة وتعديل وحذف كاملة، مبني بـ React Router ومكونات Hero UI، مع فاليديشن عبر React Hook Form وZod.",
  weather: "لوحة تحكم للطقس فيها بحث عن أي مدينة، وعرض الحالة الحالية (الحرارة، الإحساس بالحرارة، الرطوبة، الرياح، الضغط، الرؤية)، وتوقعات 5 أيام بأيقونات، ودعم الوضع الليلي، باستخدام API مجاني من wttr.in.",
},
    contactSection: { eyebrow: "لنبني شيئًا معًا", heading: "تواصل معي" },
    contactLabels: { email: "البريد الإلكتروني", phone: "الهاتف", location: "الموقع", linkedin: "لينكدإن", github: "جيت هاب" },
    locationValue: "الدقهلية، مصر",
    footer: {
      role: "مطور فل ستاك — متخصص في الباك اند باستخدام Node.js",
      copyright: "© 2026 عبدالله محمد — تم البناء باستخدام React + Tailwind CSS",
    },
    toggleLangLabel: "English",
  },
};

/* ------------------------------------------------------------------ */
/*  Scroll reveal hook + wrapper                                       */
/* ------------------------------------------------------------------ */

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(el);
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, inView];
}

function Reveal({ children, delay = 0, className = "" }) {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      className={
        "transition-all duration-700 ease-out " +
        (inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6") +
        " " +
        className
      }
      style={{ transitionDelay: inView ? `${delay}ms` : "0ms" }}
    >
      {children}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Data (localized via translation object)                            */
/* ------------------------------------------------------------------ */

// Place route-certificate.jpg inside your project's /public folder (Vite/CRA)
// so this path resolves. Swap the string for a hosted URL if you prefer.


function getNavLinks(t) {
  return [
    { label: t.nav.about, href: "#about" },
    { label: t.nav.skills, href: "#skills" },
    { label: t.nav.training, href: "#training" },
    { label: t.nav.projects, href: "#projects" },
    { label: t.nav.contact, href: "#contact" },
  ];
}

function getContactInfo(t) {
  return [
    { icon: Mail, label: t.contactLabels.email, value: "swe.abdallah.m@icloud.com", href: "mailto:swe.abdallah.m@icloud.com" },
    { icon: Phone, label: t.contactLabels.phone, value: "01090768249", href: "tel:01090768249" },
    { icon: MapPin, label: t.contactLabels.location, value: t.locationValue, href: null },
    { icon: Linkedin, label: t.contactLabels.linkedin, value: "engabdallahmohamed", href: "https://www.linkedin.com/in/engabdallahmohamed/" },
    { icon: Github, label: t.contactLabels.github, value: "Big-Abdallah", href: "https://github.com/Big-Abdallah" },
  ];
}

function getSkills(t) {
  return [
    {
      category: t.skillCategories.backend,
      icon: Server,
      emphasis: true,
      items: ["Node.js", "Express.js", "MVC", "Middleware", "REST APIs", "JWT Authentication", "Authorization", "Joi Validation", "Socket.IO"],
    },
    {
      category: t.skillCategories.frontend,
      icon: LayoutIcon,
      emphasis: false,
      items: ["HTML5", "CSS3", "Bootstrap", "Tailwind CSS", "JavaScript ES6+", "TypeScript", "React.js", "Hooks", "Context API", "React Router", "Redux Toolkit", "React Query", "Axios", "Fetch API"],
    },
    {
      category: t.skillCategories.databases,
      icon: Database,
      emphasis: false,
      items: ["MongoDB", "Mongoose ODM", "MySQL", "Sequelize ORM"],
    },
    {
      category: t.skillCategories.tools,
      icon: Wrench,
      emphasis: false,
      items: ["Git", "GitHub", "Docker (Intro)", "Deployment", "Postman", "API Documentation", "VS Code"],
    },
  ];
}

function getTrainingStages(t) {
  return [
    { stage: t.trainingStages.frontend, range: "Feb 2025 — Oct 2025", emphasis: false },
    { stage: t.trainingStages.backend, range: "Nov 2025 — Aug 2026", emphasis: true },
  ];
}

function getProjects(t) {
  return [
    {
      title: "Sara7a",
      type: t.projectTypes.backend,
      description: t.projectDescriptions.sara7a,
      tags: ["Node.js", "Express.js", "MongoDB", "Redis", "JWT"],
      githubUrl: "https://github.com/Big-Abdallah/sara7a-App/blob/main/README.md",
    },
    {
      title: "Social Media Platform",
      type: t.projectTypes.backend,
      description: t.projectDescriptions.social,
      tags: ["React", "Node.js", "Express", "MongoDB", "Socket.IO"],
      githubUrl: "https://github.com/Big-Abdallah",
    },
    {
      title: "E-Commerce Platform",
      type: t.projectTypes.backend,
      description: t.projectDescriptions.ecommerce,
      tags: ["React", "Node.js", "Express", "MongoDB", "JWT"],
      githubUrl: "https://github.com/Big-Abdallah",
    },
           {
      title: "Note App",
      type: t.projectTypes.frontend,
      description: t.projectDescriptions.noteApp,
      tags: ["React", "Tailwind CSS", "React Hook Form", "Zod", "JWT"],
      githubUrl: "https://github.com/Big-Abdallah/AppNote",
      demoUrl: "https://app-note-nu.vercel.app/",
    },
    {
      title: "Weather Dashboard",
      type: t.projectTypes.frontend,
      description: t.projectDescriptions.weather,
      tags: ["React", "Tailwind CSS", "wttr.in API"],
      githubUrl: "https://github.com/MrLazyC0der/Weather_Dashboard",
      demoUrl: "https://weather-dashboard-nine-ochre.vercel.app/",
    },
  ];
}
/* ------------------------------------------------------------------ */
/*  Small building blocks                                              */
/* ------------------------------------------------------------------ */

function Eyebrow({ children }) {
  const c = getColors(useTheme().dark);
  return <span className={"font-mono text-xs uppercase tracking-widest " + c.textFaint}>{children}</span>;
}

function Card({ className = "", children }) {
  const c = getColors(useTheme().dark);
  return (
    <div
      className={
        "rounded-3xl border transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg " +
        c.border +
        " " +
        c.surface +
        " " +
        className
      }
    >
      {children}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Navbar                                                             */
/* ------------------------------------------------------------------ */

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { dark, toggleDark } = useTheme();
  const { lang, dir, t, toggleLang } = useLang();
  const c = getColors(dark);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = getNavLinks(t);

  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
      <nav
        className={
          "flex w-full max-w-3xl items-center justify-between rounded-full border px-4 py-2.5 backdrop-blur transition-shadow duration-300 " +
          c.border +
          " " +
          c.navBg +
          " " +
          (scrolled ? "shadow-lg" : "shadow-sm")
        }
      >
        <a href="#home" className={"px-2 font-mono text-sm font-semibold tracking-tight " + c.text}>
          {t.brand}
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={"rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors duration-200 " + c.textMuted + " " + c.hover}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1.5">
          <button
            onClick={toggleDark}
            aria-label="Toggle theme"
            className={"hidden h-9 w-9 items-center justify-center rounded-full border transition-colors duration-200 md:flex " + c.border + " " + c.hover + " " + c.text}
          >
            {dark ? <Sun size={15} /> : <Moon size={15} />}
          </button>
          <button
            onClick={toggleLang}
            aria-label="Toggle language"
            className={"hidden items-center gap-1 rounded-full border px-3 py-2 text-xs font-medium transition-colors duration-200 md:flex " + c.border + " " + c.hover + " " + c.text}
          >
            <Languages size={13} />
            {t.toggleLangLabel}
          </button>
          <a
            href="#contact"
            className={"hidden rounded-full px-4 py-2 text-sm font-medium transition-transform duration-200 hover:-translate-y-0.5 md:inline-block " + c.primaryBtn}
          >
            {t.nav.contactBtn}
          </a>
          <button
            className={"rounded-full p-2 md:hidden " + c.text}
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle navigation"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className={"absolute top-16 w-11/12 max-w-3xl rounded-2xl border p-3 shadow-xl md:hidden " + c.border + " " + c.surface}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={"block rounded-xl px-4 py-2.5 text-sm font-medium " + c.text + " " + c.hover}
            >
              {link.label}
            </a>
          ))}
          <div className="mt-2 flex items-center gap-2">
            <button
              onClick={toggleDark}
              className={"flex flex-1 items-center justify-center gap-1.5 rounded-xl border px-4 py-2.5 text-sm font-medium " + c.border + " " + c.text}
            >
              {dark ? <Sun size={14} /> : <Moon size={14} />}
              {dark ? "Light" : "Dark"}
            </button>
            <button
              onClick={toggleLang}
              className={"flex flex-1 items-center justify-center gap-1.5 rounded-xl border px-4 py-2.5 text-sm font-medium " + c.border + " " + c.text}
            >
              <Languages size={14} />
              {t.toggleLangLabel}
            </button>
          </div>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className={"mt-2 block rounded-xl px-4 py-2.5 text-center text-sm font-medium " + c.primaryBtn}
          >
            {t.nav.contactBtn}
          </a>
        </div>
      )}
    </header>
  );
}

/* ------------------------------------------------------------------ */
/*  Hero                                                                */
/* ------------------------------------------------------------------ */

function Hero() {
  const { dark } = useTheme();
  const { t, dir } = useLang();
  const c = getColors(dark);
  const textAlign = dir === "rtl" ? "text-right" : "text-left";
  const mdTextAlign = dir === "rtl" ? "md:text-right" : "md:text-left";
  const arrowRotate = dir === "rtl" ? "rotate-180" : "";

  return (
    <section id="home" className="relative mx-auto max-w-6xl overflow-hidden px-4 pt-32 md:pt-40">
      <span
        aria-hidden="true"
        className={"pointer-events-none absolute -left-6 top-16 select-none font-mono text-9xl font-bold opacity-5 " + c.text}
      >
        {"{}"}
      </span>
      <span
        aria-hidden="true"
        className={"pointer-events-none absolute -right-4 bottom-0 select-none font-mono text-9xl font-bold opacity-5 " + c.text}
      >
        {"</>"}
      </span>

      <Card className={"relative flex flex-col items-center gap-10 px-6 py-14 text-center md:flex-row md:items-center md:px-16 md:py-20 " + mdTextAlign}>
        <div className={"flex h-32 w-32 shrink-0 items-center justify-center rounded-full border font-mono text-3xl font-semibold md:h-40 md:w-40 " + c.border + " " + c.surfaceAlt + " " + c.text}>
          <img src={photo} alt="Profile" className="h-32 w-32 rounded-full object-cover ..." />
        </div>

        <div className="flex flex-col items-center md:items-start">
          <Eyebrow>{t.hero.eyebrow}</Eyebrow>

          <h1 className={"mt-4 max-w-2xl text-4xl font-bold leading-tight tracking-tight md:text-6xl " + c.text}>
            {t.hero.name}
          </h1>

          <p className={"mt-6 max-w-xl text-base leading-relaxed md:text-lg " + c.textMuted}>
            {t.hero.description}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className={"flex items-center justify-center gap-1.5 rounded-full px-6 py-3 text-sm font-medium transition-transform duration-200 hover:-translate-y-0.5 " + c.primaryBtn}
            >
              {t.hero.viewProjects} <ArrowRight size={14} className={arrowRotate} />
            </a>
            <a
              href="#contact"
              className={"flex items-center justify-center gap-1.5 rounded-full border px-6 py-3 text-sm font-medium transition-colors duration-200 " + c.ghostBtn}
            >
              {t.hero.contactMe}
            </a>
          </div>
        </div>
      </Card>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  About                                                              */
/* ------------------------------------------------------------------ */

function AboutSection() {
  const { dark } = useTheme();
  const { t } = useLang();
  const c = getColors(dark);
  return (
    <section id="about" className="mx-auto mt-6 max-w-6xl scroll-mt-24 px-4">
      <Reveal>
        <Card className="grid grid-cols-1 gap-8 p-8 md:grid-cols-3 md:p-12">
          <div>
            <Eyebrow>{t.about.eyebrow}</Eyebrow>
            <h2 className={"mt-2 text-2xl font-bold tracking-tight md:text-3xl " + c.text}>{t.about.heading}</h2>
          </div>
          <div className="space-y-4 md:col-span-2">
            <p className={"text-base leading-relaxed " + c.textMuted}>{t.about.p1}</p>
            <p className={"text-base leading-relaxed " + c.textMuted}>{t.about.p2}</p>
            <p className={"text-base leading-relaxed " + c.textMuted}>{t.about.p3}</p>
          </div>
        </Card>
      </Reveal>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Skills                                                             */
/* ------------------------------------------------------------------ */

function SkillsSection() {
  const { dark } = useTheme();
  const { t } = useLang();
  const c = getColors(dark);
  const skills = getSkills(t);

  return (
    <section id="skills" className="mx-auto mt-6 max-w-6xl scroll-mt-24 px-4">
      <Reveal>
        <div className="mb-6">
          <Eyebrow>{t.skillsSection.eyebrow}</Eyebrow>
          <h2 className={"mt-2 text-2xl font-bold tracking-tight md:text-3xl " + c.text}>{t.skillsSection.heading}</h2>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {skills.map(({ category, icon: Icon, items, emphasis }, i) => (
          <Reveal key={category} delay={i * 80} className={emphasis ? "md:col-span-2" : ""}>
            <Card className={"p-6 md:p-7 " + (emphasis ? "border-2 " + c.emphasisBorder : "")}>
              <div className="mb-4 flex items-center gap-2">
                <Icon size={16} className={emphasis ? c.emphasisAccent : c.text} />
                <span className={"font-mono text-xs font-semibold uppercase tracking-widest " + (emphasis ? c.emphasisAccent : c.text)}>
                  {category}
                </span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {items.map((item) => (
                  <span
                    key={item}
                    className={"rounded-full border px-3 py-1 text-xs font-medium transition-colors duration-200 " + c.chip}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Training                                                           */
/* ------------------------------------------------------------------ */

function CertificateFrame() {
  const { dark } = useTheme();
  const { t } = useLang();
  const c = getColors(dark);

  return (
    <a
      href={certificate}
      target="_blank"
      rel="noreferrer"
      className="group block"
      aria-label={t.certificate.view}
    >
      <div className={"rounded-2xl border p-3 transition-colors duration-300 " + c.border + " " + c.surfaceAlt}>
        <div className={"overflow-hidden rounded-xl border " + c.border}>
          <img
            src={certificate}
            alt={t.certificate.caption + " — " + t.certificate.issuer}
            className="aspect-[16/11] w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="mt-3 flex items-center justify-between gap-3 px-1">
          <span className="min-w-0">
            <span className={"block truncate text-sm font-semibold " + c.text}>{t.certificate.caption}</span>
            <span className={"block text-xs " + c.textFaint}>{t.certificate.issuer}</span>
          </span>
          <span
            className={
              "shrink-0 rounded-full border px-3 py-1.5 text-xs font-medium transition-colors duration-200 " + c.chip
            }
          >
            {t.certificate.view}
          </span>
        </div>
      </div>
    </a>
  );
}

function TrainingSection() {
  const { dark } = useTheme();
  const { t } = useLang();
  const c = getColors(dark);
  const stages = getTrainingStages(t);

  return (
    <section id="training" className="mx-auto mt-6 max-w-6xl scroll-mt-24 px-4">
      <Reveal>
        <Card className="p-8 md:p-10">
          <Eyebrow>{t.training.eyebrow}</Eyebrow>
          <h2 className={"mt-2 text-2xl font-bold tracking-tight md:text-3xl " + c.text}>{t.training.heading}</h2>
          <p className={"mt-2 text-sm font-medium " + c.textMuted}>{t.training.subtitle}</p>

          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-5">
            <div className="space-y-3 md:col-span-3">
              {stages.map((s) => (
                <div
                  key={s.stage}
                  className={
                    "flex flex-col gap-1 rounded-2xl p-5 sm:flex-row sm:items-center sm:justify-between " +
                    (s.emphasis ? "border-2 " + c.emphasisBorder + " " + c.surfaceAlt : "border " + c.border + " " + c.surfaceAlt)
                  }
                >
                  <div className="flex items-center gap-3">
                    <span className={"h-2 w-2 shrink-0 rounded-full " + (s.emphasis ? c.dot : c.dotMuted)} />
                    <span className={"font-mono text-sm font-semibold " + (s.emphasis ? c.emphasisAccent : c.text)}>{s.stage}</span>
                  </div>
                  <span className={"text-xs font-medium " + c.textFaint}>{s.range}</span>
                </div>
              ))}
            </div>

            <div className="md:col-span-2">
              <CertificateFrame />
            </div>
          </div>
        </Card>
      </Reveal>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Projects                                                           */
/* ------------------------------------------------------------------ */

function ProjectCard({ project, index }) {
  const { dark } = useTheme();
  const { t, dir } = useLang();
  const c = getColors(dark);
  const arrowRotate = dir === "rtl" ? "rotate-180" : "";

  return (
    <Reveal delay={index * 90}>
      <Card className="flex h-full flex-col p-7">
        <div className="mb-4 flex items-center justify-between">
          <div className={"flex h-10 w-10 items-center justify-center rounded-xl border font-mono text-sm font-semibold " + c.border + " " + c.surfaceAlt + " " + c.text}>
            {project.title.charAt(0)}
          </div>
          <span className={"rounded-full border px-2.5 py-1 font-mono text-xs font-medium " + c.border + " " + c.surfaceAlt + " " + c.textFaint}>
            {project.type}
          </span>
        </div>

        <h4 className={"text-lg font-semibold " + c.text}>{project.title}</h4>
        <p className={"mt-3 flex-1 text-sm leading-relaxed " + c.textMuted}>{project.description}</p>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span key={tag} className={"rounded-full border px-2.5 py-1 text-xs font-medium " + c.border + " " + c.surfaceAlt + " " + c.textMuted}>
              {tag}
            </span>
          ))}
        </div>

        <div className={"mt-6 border-t pt-4 " + c.border}>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className={"flex w-fit items-center gap-1.5 text-sm font-medium transition-opacity hover:opacity-60 " + c.text}
          >
            {t.projectsSection.viewGithub} <ArrowUpRight size={14} className={arrowRotate} />
          </a>
        </div>

        
      </Card>
    </Reveal>
  );
}

function ProjectsSection() {
  const { dark } = useTheme();
  const { t } = useLang();
  const c = getColors(dark);
  const projects = getProjects(t);

  return (
    <section id="projects" className="mx-auto mt-6 max-w-6xl scroll-mt-24 px-4">
      <Reveal>
        <div className="mb-6">
          <Eyebrow>{t.projectsSection.eyebrow}</Eyebrow>
          <h2 className={"mt-2 text-2xl font-bold tracking-tight md:text-3xl " + c.text}>{t.projectsSection.heading}</h2>
        </div>
      </Reveal>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Contact                                                             */
/* ------------------------------------------------------------------ */

function ContactSection() {
  const { dark } = useTheme();
  const { t } = useLang();
  const c = getColors(dark);
  const contactInfo = getContactInfo(t);

  return (
    <section id="contact" className="mx-auto mt-6 max-w-6xl scroll-mt-24 px-4">
      <Reveal>
        <Card className="p-8 md:p-12">
          <div className="mb-8 text-center">
            <Eyebrow>{t.contactSection.eyebrow}</Eyebrow>
            <h2 className={"mt-2 text-2xl font-bold tracking-tight md:text-3xl " + c.text}>{t.contactSection.heading}</h2>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
            {contactInfo.map(({ icon: Icon, label, value, href }) => {
              const inner = (
                <div className={"flex items-center gap-3 rounded-2xl border px-4 py-3.5 transition-colors duration-200 " + c.border + " " + c.surfaceAlt}>
                  <span className={"flex h-9 w-9 shrink-0 items-center justify-center rounded-full " + c.iconRing}>
                    <Icon size={15} />
                  </span>
                  <span className="min-w-0">
                    <span className={"block font-mono text-xs uppercase tracking-wide " + c.textFaint}>{label}</span>
                    <span className={"block truncate text-sm font-medium " + c.text}>{value}</span>
                  </span>
                </div>
              );
              return href ? (
                <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                  {inner}
                </a>
              ) : (
                <div key={label}>{inner}</div>
              );
            })}
          </div>
        </Card>
      </Reveal>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Footer                                                              */
/* ------------------------------------------------------------------ */

function Footer() {
  const { dark } = useTheme();
  const { t } = useLang();
  const c = getColors(dark);

  return (
    <footer className="mx-auto mt-6 max-w-6xl px-4 pb-10">
      <Card className="flex flex-col items-center gap-5 px-6 py-10 text-center md:px-16">
        <div>
          <h3 className={"text-xl font-bold tracking-tight " + c.text}>{t.hero.name}</h3>
          <p className={"mt-1 text-sm " + c.textMuted}>{t.footer.role}</p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://www.linkedin.com/in/engabdallahmohamed/"
            target="_blank"
            rel="noreferrer"
            className={"flex h-10 w-10 items-center justify-center rounded-full border transition-colors " + c.border + " " + c.text + " " + c.hover}
            aria-label="LinkedIn"
          >
            <Linkedin size={16} />
          </a>
          <a
            href="https://github.com/Big-Abdallah"
            target="_blank"
            rel="noreferrer"
            className={"flex h-10 w-10 items-center justify-center rounded-full border transition-colors " + c.border + " " + c.text + " " + c.hover}
            aria-label="GitHub"
          >
            <Github size={16} />
          </a>
          <a
            href="mailto:swe.abdallah.m@icloud.com"
            className={"flex h-10 w-10 items-center justify-center rounded-full border transition-colors " + c.border + " " + c.text + " " + c.hover}
            aria-label="Email"
          >
            <Mail size={16} />
          </a>
        </div>

        <p className={"font-mono text-xs " + c.textFaint}>{t.footer.copyright}</p>
      </Card>
    </footer>
  );
}

/* ------------------------------------------------------------------ */
/*  Root                                                                */
/* ------------------------------------------------------------------ */

export default function PortfolioSite() {
  const [dark, setDark] = useState(false);
  const [lang, setLang] = useState("en");
  const t = TRANSLATIONS[lang];
  const dir = t.dir;
  const c = getColors(dark);

  const themeValue = { dark, toggleDark: () => setDark((v) => !v) };
  const langValue = { lang, dir, t, toggleLang: () => setLang((v) => (v === "en" ? "ar" : "en")) };

  return (
    <ThemeContext.Provider value={themeValue}>
      <LangContext.Provider value={langValue}>
        <div
          dir={dir}
          lang={lang}
          className={"min-h-screen w-full antialiased transition-colors duration-300 " + c.bg + " " + c.text}
          style={{ scrollBehavior: "smooth", fontFamily: lang === "ar" ? "'Tajawal','Segoe UI',sans-serif" : undefined }}
        >
          <Navbar />
          <Hero />
          <AboutSection />
          <SkillsSection />
          <TrainingSection />
          <ProjectsSection />
          <ContactSection />
          <Footer />
        </div>
      </LangContext.Provider>
    </ThemeContext.Provider>
  );
}