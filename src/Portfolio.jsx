import React, { useState } from "react";
import {
  Moon,
  Sun,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Briefcase,
  User,
  GraduationCap,
} from "lucide-react";
import img from "./assets/photo_2025-12-17_14-26-21.jpg";
export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const skills = {
    languages: [ "JavaScript", "C++", "Python", "HTML", "CSS",],
    frontend: ["React.js", "Tailwind CSS", "Bootstrap"],
    backend: ["Node.js", "Express.js", "MongoDB"],
    tools: [
      "Git",
      "GitHub",
      "VS Code",
      "Postman",
      "MongoDB Compass",
      "npm",
      "Docker",
      "Vercel",
    ],
  };

  const experience = [
    {
      title: "Backend Developer",
      company: "Route Training",
      period: "نوفمبر 2025 - حالياً",
      description:
        "التركيز على تطوير Backend باستخدام Node.js, Express.js, MongoDB",
      current: true,
    },
    {
      title: "Frontend Developer",
      company: "Route Training",
      period: "فبراير 2025 - أكتوبر 2025",
      description: "تطوير واجهات المستخدم باستخدام React.js و Tailwind CSS",
      current: false,
    },
  ];

  const projects = [
    {
      title: "E-Commerce Platform (UNDER DEVELOPMENT)",
      description: "منصة تجارة إلكترونية متكاملة مع نظام دفع وإدارة منتجات",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      github: "#",
      demo: "#",
    },
    {
      title: "EduTrack Pro - Management System",
      description: "نظام احترافي لإدارة الطلاب والحضور والبيانات التعليمية",
      tech: ["JavaScript", "Bootstrap", "CSS", "HTML"],
      github: "https://github.com/MrLazyC0der/web-project",
      demo: "https://github.com/MrLazyC0der/web-project",
    },
    {
      title: "Weather Dashboard",
      description: "لوحة تحكم للطقس مع API integration وتصميم responsive",
      tech: ["React", "API", "Tailwind CSS"],
      github: "https://github.com/MrLazyC0der/Weather_Dashboard",
      demo: "https://weather-dashboard-nine-ochre.vercel.app/",
    },
  ];

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
          darkMode ? "bg-gray-900/95" : "bg-white/95"
        } backdrop-blur-sm shadow-md`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
            MrLazyC0der
          </h1>

          <div className="flex items-center gap-8">
            <div className="hidden md:flex gap-6">
              <button
                onClick={() => scrollToSection("home")}
                className={`hover:text-blue-600 transition-colors ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className={`hover:text-blue-600 transition-colors ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className={`hover:text-blue-600 transition-colors ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("experience")}
                className={`hover:text-blue-600 transition-colors ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className={`hover:text-blue-600 transition-colors ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className={`hover:text-blue-600 transition-colors ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Contact
              </button>
            </div>

            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-full transition-all ${
                darkMode
                  ? "bg-gray-800 hover:bg-gray-700"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-blue-600" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center pt-20 px-6"
      >
        <div className="max-w-4xl text-center">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-56 h-56 rounded-full border-4 border-blue-600 p-2 shadow-xl bg-white">
                <div className="w-full h-full rounded-full overflow-hidden">
                  {/* ضع صورتك هنا - استبدل src بمسار الصورة */}
                  <img
                    src={img}
                    alt="Abdallah Mohamed"
                    className="w-full h-full object-cover object-top scale-110"
                  />
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 bg-green-500 w-10 h-10 rounded-full border-4 border-white dark:border-gray-900"></div>
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Hello, I'm{" "}
            <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              Abdallah Mohamed
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-6 text-gray-600 dark:text-gray-400">
            Computer Science Student | Full Stack Developer
          </p>
          <p
            className={`text-lg mb-8 max-w-2xl mx-auto ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Passionate about building real-world projects and continuously
            learning new technologies using the MERN Stack
          </p>

          <div className="flex gap-4 justify-center">
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-all hover:scale-105 shadow-lg"
            >
              Get In Touch
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className={`px-8 py-3 rounded-full font-semibold transition-all hover:scale-105 ${
                darkMode
                  ? "bg-gray-800 hover:bg-gray-700"
                  : "bg-white hover:bg-gray-100 shadow-lg"
              }`}
            >
              View Projects
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className={`py-20 px-6 ${darkMode ? "bg-gray-800" : "bg-white"}`}
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">
            <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div
                className={`p-6 rounded-2xl ${
                  darkMode ? "bg-gray-900" : "bg-gray-50"
                }`}
              >
                <GraduationCap className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-2xl font-bold mb-2">Education</h3>
                <p
                  className={`${darkMode ? "text-gray-300" : "text-gray-600"}`}
                >
                  Bachelor of Computer Science
                  <br />
                  <span className="text-blue-600">Mansoura University</span>
                  <br />
                  May 2024
                </p>
              </div>
            </div>

            <div
              className={`p-6 rounded-2xl ${
                darkMode ? "bg-gray-900" : "bg-gray-50"
              }`}
            >
              <Code className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Current Focus</h3>
              <p
                className={`${
                  darkMode ? "text-gray-300" : "text-gray-600"
                } leading-relaxed`}
              >
                Currently enhancing my Backend Development skills with Node.js,
                Express, and MongoDB, while building full-stack applications
                using the MERN stack. Always learning and exploring new
                technologies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              Tech Stack
            </span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div
              className={`p-6 rounded-2xl ${
                darkMode ? "bg-gray-800" : "bg-white"
              } shadow-lg hover:shadow-xl transition-all`}
            >
              <h3 className="text-xl font-bold mb-4 text-blue-600">
                Languages
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.languages.map((skill) => (
                  <span
                    key={skill}
                    className={`px-3 py-1 rounded-full text-sm ${
                      darkMode ? "bg-gray-900" : "bg-gray-100"
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div
              className={`p-6 rounded-2xl ${
                darkMode ? "bg-gray-800" : "bg-white"
              } shadow-lg hover:shadow-xl transition-all`}
            >
              <h3 className="text-xl font-bold mb-4 text-blue-600">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {skills.frontend.map((skill) => (
                  <span
                    key={skill}
                    className={`px-3 py-1 rounded-full text-sm ${
                      darkMode ? "bg-gray-900" : "bg-gray-100"
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div
              className={`p-6 rounded-2xl ${
                darkMode ? "bg-gray-800" : "bg-white"
              } shadow-lg hover:shadow-xl transition-all`}
            >
              <h3 className="text-xl font-bold mb-4 text-blue-600">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {skills.backend.map((skill) => (
                  <span
                    key={skill}
                    className={`px-3 py-1 rounded-full text-sm ${
                      darkMode ? "bg-gray-900" : "bg-gray-100"
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div
              className={`p-6 rounded-2xl ${
                darkMode ? "bg-gray-800" : "bg-white"
              } shadow-lg hover:shadow-xl transition-all`}
            >
              <h3 className="text-xl font-bold mb-4 text-blue-600">Tools</h3>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((skill) => (
                  <span
                    key={skill}
                    className={`px-3 py-1 rounded-full text-sm ${
                      darkMode ? "bg-gray-900" : "bg-gray-100"
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className={`py-20 px-6 ${darkMode ? "bg-gray-800" : "bg-white"}`}
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>

          <div className="space-y-6">
            {experience.map((exp, index) => (
              <div
                key={index}
                className={`p-6 rounded-2xl ${
                  darkMode ? "bg-gray-900" : "bg-gray-50"
                } hover:shadow-lg transition-all`}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-600 rounded-lg">
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="text-xl font-bold">{exp.title}</h3>
                        <p className="text-blue-600">{exp.company}</p>
                      </div>
                      {exp.current && (
                        <span className="px-3 py-1 bg-green-500 text-white text-sm rounded-full">
                          حالياً
                        </span>
                      )}
                    </div>
                    <p
                      className={`text-sm mb-2 ${
                        darkMode ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      {exp.period}
                    </p>
                    <p className={darkMode ? "text-gray-300" : "text-gray-700"}>
                      {exp.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`rounded-2xl overflow-hidden ${
                  darkMode ? "bg-gray-800" : "bg-white"
                } shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2`}
              >
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <p
                    className={`mb-4 ${
                      darkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-600 text-white text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                        darkMode
                          ? "bg-gray-900 hover:bg-gray-700"
                          : "bg-gray-100 hover:bg-gray-200"
                      }`}
                    >
                      <Github className="w-4 h-4" />
                      <span className="text-sm">Code</span>
                    </a>
                    <a
                      href={project.demo}
                      className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm">Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className={`py-20 px-6 ${darkMode ? "bg-gray-800" : "bg-white"}`}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h2>
          <p
            className={`text-lg mb-12 ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            I'm open to opportunities in Backend or Frontend Development. Let's
            build something amazing together!
          </p>

          <div className="flex gap-6 justify-center">
            <a
              href="https://github.com/MrLazyC0der"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-4 rounded-full transition-all hover:scale-110 ${
                darkMode
                  ? "bg-gray-900 hover:bg-gray-700"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              <Github className="w-8 h-8" />
            </a>
            <a
              href="https://www.linkedin.com/in/engabdallahmohamed/"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-4 rounded-full transition-all hover:scale-110 ${
                darkMode
                  ? "bg-gray-900 hover:bg-gray-700"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              <Linkedin className="w-8 h-8 text-blue-600" />
            </a>
            <a
              href="mailto:engabdallahmo@icloud.com"
              className={`p-4 rounded-full transition-all hover:scale-110 ${
                darkMode
                  ? "bg-gray-900 hover:bg-gray-700"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              <Mail className="w-8 h-8 text-red-500" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className={`py-8 px-6 border-t ${
          darkMode ? "border-gray-800 bg-gray-900" : "border-gray-200"
        }`}
      >
        <div className="max-w-6xl mx-auto text-center">
          <p className={darkMode ? "text-gray-400" : "text-gray-600"}>
            © 2025 Abdallah Mohamed. Built with React & Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
}
