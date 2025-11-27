import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [active, setActive] = useState("home");

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

  const linkClass = (id) =>
    `text-sm pb-1 transition-all ${
      active === id ? "border-b-2 border-primary" : "hover:underline"
    }`;

  return (
    <motion.nav
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed left-0 right-0 top-0 z-30 backdrop-blur-md glass"
    >
      <div className="container flex items-center justify-between py-3">
        <a href="#home" className="text-xl font-semibold tracking-wide">
          KP — Kunal Patel
        </a>

        <div className="flex items-center gap-4">
          <a href="#projects" className={linkClass("projects")}>Projects</a>
          <a href="#skills" className={linkClass("skills")}>Skills</a>
          <a href="#contact" className={linkClass("contact")}>Contact</a>

          <a
            href="/resume.pdf"
            className="hidden md:inline-block text-sm bg-primary px-3 py-1 rounded-md text-black font-medium"
          >
            Resume
          </a>

          <ThemeToggle />
        </div>
      </div>
    </motion.nav>
  );
}
