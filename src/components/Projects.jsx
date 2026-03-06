import React from "react";
import { motion } from "framer-motion";

const sectionAnim = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.08 },
  },
};

const cardAnim = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
};

// FRONTEND PROJECTS
const frontendProjects = [
  {
    title: "Youthiapa Clone",
    type: "Frontend UI",
    desc: "Fully responsive e-commerce design with smooth UI & animations.",
    tech: "HTML, CSS, JS, Tailwind",
    link: "https://youthiapa.netlify.app/",
  },
  {
    title: "QR Code Generator",
    type: "Web App",
    desc: "Real-time QR generator with copy & download features.",
    tech: "HTML, CSS, JavaScript, QRCode API",
    link: "https://lnkd.in/gv_Ab9dT",
    repo: "https://lnkd.in/gSZeKMNN",
  },
  {
    title: "GitHub User Finder",
    type: "Web App",
    desc: "Instant GitHub profile fetcher built using GitHub API.",
    tech: "HTML, CSS, JavaScript, GitHub API",
    link: "https://lnkd.in/gzDgfRBf",
    repo: "https://lnkd.in/gMrMnHch",
  },
  {
    title: "To-Do List (JavaScript)",
    type: "Frontend App",
    desc: "LocalStorage based todo app with progress bar UI.",
    tech: "HTML, CSS, JavaScript",
    link: "https://lnkd.in/gmg2YPbN",
    repo: "https://lnkd.in/gSW33kQJ",
  },
  {
    title: "Portfolio Website",
    type: "Portfolio",
    desc: "Personal portfolio showing projects, education and certifications.",
    tech: "HTML, CSS, JavaScript",
    link: "https://lnkd.in/gqeP_Aqe",
    repo: "https://lnkd.in/g36KusfH",
  },
  {
    title: "Medicaps University Website",
    type: "Frontend",
    desc: "Responsive clone of Medicaps academic website.",
    tech: "HTML, CSS",
    link: "https://lnkd.in/gxSrpi8i",
  },
  {
    title: "StudySync Website",
    type: "UI Design",
    desc: "Modern responsive landing page UI.",
    tech: "HTML, CSS",
    link: "https://lnkd.in/gxSrpi8i",
  },
  {
    title: "Browser OS Interface",
    type: "JavaScript Project",
    desc: "Desktop-like UI with folders, calculator, brightness & map.",
    tech: "HTML, CSS, JavaScript",
    link: "https://lnkd.in/gNbTe_9X",
    repo: "https://lnkd.in/gjnEMdEh",
  },
  {
    title: "Todo App (React)",
    type: "React Frontend",
    desc: "React based todo app with animations & toast notifications.",
    tech: "React, Tailwind, Reactbits",
    link: "https://lnkd.in/gADY6xtk",
    repo: "https://lnkd.in/gEd2SRYN",
  },
];

// BACKEND + FULL-STACK + AI PROJECTS
const backendProjects = [
  {
    title: "Hostel Hub",
    type: "Front-End + Backend",
    desc: "Hostel management system for students and wardens to handle complaints, attendance, and hostel menu digitally with Admin, Warden, and Student panels.",
    tech: "Front-End Web Development, MongoDB, Node.js, Express.js, Bcrypt.js",
    link: "https://hoostelhub.netlify.app/",
  },
  {
    title: "Fast Translator",
    type: "Full-Stack",
    desc: "Google AI translation, Auth, Cloud Storage, Responsive UI.",
    tech: "React, Node, Express, MongoDB, Cloud Storage, JWT",
    link: "https://fasttranslator.netlify.app/",
  },
  {
    title: "Moody Player",
    type: "AI + Full-Stack",
    desc: "AI facial emotion detection to play music based on mood.",
    tech: "React, AI Model, Node.js",
    link: "https://moody-player-1-5480.onrender.com/",
  },
  {
    title: "NamkeenAI",
    type: "AI Chatbot Platform",
    desc: "VectorDB, realtime AI chat, auth, secure dashboard.",
    tech: "React, VectorDB, MongoDB, Auth",
    link: "https://namkeenai-1-frontend.onrender.com/login",
  },
  {
    title: "My Recipe Book",
    type: "React CRUD App",
    desc: "CRUD recipes with GSAP animations & Three.js 3D UI.",
    tech: "React, Tailwind, GSAP, Three.js",
    link: "https://lnkd.in/gjR-8-2y",
    repo: "https://lnkd.in/g3y5RDYn",
  },
  {
    title: "Nexa AI Chatbot",
    type: "Full-Stack AI",
    desc: "Gemini-powered AI chatbot with realtime socket communication.",
    tech: "React, Node, Socket.io, Gemini AI",
    link: "https://lnkd.in/gnSZSh-J",
    repo: "https://lnkd.in/gcVJfCZw",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="mt-14 section-reveal">

      {/* FRONTEND SECTION */}
      <h3 className="text-2xl font-semibold mb-5">Frontend Projects</h3>
      <motion.div
        variants={sectionAnim}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
      >
        {frontendProjects.map((p) => (
          <motion.div
            key={p.title}
            variants={cardAnim}
            whileHover={{ y: -8, scale: 1.01 }}
            className="glass p-5 rounded-2xl flex flex-col"
          >
            <h4 className="text-lg font-bold">
              {p.title}{" "}
              <span className="text-sm text-slate-600 dark:text-slate-300">
                — {p.type}
              </span>
            </h4>
            <p className="mt-2 text-slate-700 dark:text-slate-300 leading-relaxed">{p.desc}</p>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
              Tech: {p.tech}
            </p>

            <div className="mt-5 flex flex-wrap gap-3 text-sm pt-2">
              <a
                href={p.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex rounded-md bg-primary/12 px-3 py-1.5 text-red-700 dark:text-red-300 font-semibold"
              >
                Live ↗
              </a>
              {p.repo && (
                <a
                  href={p.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex rounded-md bg-accent/12 px-3 py-1.5 text-blue-700 dark:text-blue-300 font-semibold"
                >
                  Code ↗
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* BACKEND SECTION */}
      <h3 className="text-2xl font-semibold mb-5">Full-Stack & Backend Projects</h3>
      <motion.div
        variants={sectionAnim}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {backendProjects.map((p) => (
          <motion.div
            key={p.title}
            variants={cardAnim}
            whileHover={{ y: -8, scale: 1.01 }}
            className="glass p-5 rounded-2xl flex flex-col"
          >
            <h4 className="text-lg font-bold">
              {p.title}
              <span className="text-sm text-slate-600 dark:text-slate-300">
                {" "}
                — {p.type}
              </span>
            </h4>
            <p className="mt-2 text-slate-700 dark:text-slate-300 leading-relaxed">{p.desc}</p>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
              Tech: {p.tech}
            </p>

            <div className="mt-5 flex flex-wrap gap-3 text-sm pt-2">
              <a
                href={p.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex rounded-md bg-primary/12 px-3 py-1.5 text-red-700 dark:text-red-300 font-semibold"
              >
                Live ↗
              </a>
              {p.repo && (
                <a
                  href={p.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex rounded-md bg-accent/12 px-3 py-1.5 text-blue-700 dark:text-blue-300 font-semibold"
                >
                  Code ↗
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
