import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  // Track scroll to update active section
  useEffect(() => {
    const sections = ["home", "projects", "skills", "contact"];

    const handleScroll = () => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;
        const top = el.getBoundingClientRect().top;

        if (top <= 150 && top >= -200) setActive(id);
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const closeOnResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };

    window.addEventListener("resize", closeOnResize);
    return () => window.removeEventListener("resize", closeOnResize);
  }, []);

  const linkClass = (id) =>
    `text-sm pb-1 transition-all ${
      active === id ? "border-b-2 border-primary" : "hover:underline"
    }`;

  const mobileLinkClass = (id) =>
    `rounded-lg px-3 py-2 text-sm transition ${
      active === id
        ? "bg-primary/15 text-primary font-semibold"
        : "hover:bg-black/5 dark:hover:bg-white/5"
    }`;

  return (
    <motion.nav
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed left-0 right-0 top-0 z-30 backdrop-blur-md glass"
    >
      <div className="container flex items-center justify-between py-3">
        <a href="#home" className="text-lg md:text-xl font-semibold tracking-wide brand-heading text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
          KP — Kunal Patel
        </a>

        <div className="hidden md:flex items-center gap-4">
          <a href="#projects" className={linkClass("projects")}>Projects</a>
          <a href="#skills" className={linkClass("skills")}>Skills</a>
          <a href="#contact" className={linkClass("contact")}>Contact</a>

          <a
            href="/resume.pdf"
            className="hidden md:inline-block text-sm bg-primary px-3 py-1 rounded-md text-white font-medium"
          >
            Resume
          </a>

          <ThemeToggle />
        </div>

        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-black/10 dark:border-white/10"
          >
            {open ? <FiX className="h-5 w-5" /> : <FiMenu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden border-t border-black/10 dark:border-white/10"
        >
          <div className="container py-3 grid gap-2">
            <a href="#projects" className={mobileLinkClass("projects")} onClick={() => setOpen(false)}>Projects</a>
            <a href="#skills" className={mobileLinkClass("skills")} onClick={() => setOpen(false)}>Skills</a>
            <a href="#contact" className={mobileLinkClass("contact")} onClick={() => setOpen(false)}>Contact</a>
            <a
              href="/resume.pdf"
              className="mt-1 rounded-lg bg-primary px-3 py-2 text-sm font-semibold text-white"
              onClick={() => setOpen(false)}
            >
              Resume
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
