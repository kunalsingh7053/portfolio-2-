import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ];

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

      setIsScrolled(window.scrollY > 14);
    };

    handleScroll();
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
    `relative inline-flex items-center rounded-full px-3 py-1.5 text-sm font-medium transition-colors ${
      active === id
        ? "text-primary bg-primary/10"
        : "text-slate-700 dark:text-slate-200 hover:text-primary"
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
      className={`fixed left-0 right-0 top-0 z-30 backdrop-blur-md glass transition-all duration-300 ${
        isScrolled ? "shadow-lg shadow-slate-900/10 border-b border-black/10 dark:border-white/10" : ""
      }`}
    >
      <div className={`container flex items-center justify-between transition-all duration-300 ${isScrolled ? "py-2" : "py-3"}`}>
        <motion.a
          href="#home"
          whileHover={{ y: -1 }}
          className="text-lg md:text-xl font-semibold tracking-wide brand-heading text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent"
        >
          KP — Kunal Patel
        </motion.a>

        <div className="hidden md:flex items-center gap-4">
          {navItems.map((item) => (
            <motion.a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setActive(item.id)}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className={linkClass(item.id)}
            >
              {item.label}
              {active === item.id && (
                <motion.span
                  layoutId="nav-active-pill"
                  className="absolute inset-0 -z-10 rounded-full border border-primary/20"
                  transition={{ type: "spring", stiffness: 380, damping: 28 }}
                />
              )}
            </motion.a>
          ))}

          <motion.a
            href="/resume.pdf"
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="hidden md:inline-block text-sm bg-primary px-3 py-1 rounded-md text-white font-medium shadow-md shadow-primary/30"
          >
            Resume
          </motion.a>

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
            <motion.span
              animate={{ rotate: open ? 90 : 0, scale: open ? 1.08 : 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 18 }}
            >
              {open ? <FiX className="h-5 w-5" /> : <FiMenu className="h-5 w-5" />}
            </motion.span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.22 }}
            className="md:hidden border-t border-black/10 dark:border-white/10"
          >
            <div className="container py-3 grid gap-2">
              {navItems.map((item) => (
                <motion.a
                  key={item.id}
                  href={`#${item.id}`}
                  className={mobileLinkClass(item.id)}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    setActive(item.id);
                    setOpen(false);
                  }}
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.a
                href="/resume.pdf"
                className="mt-1 rounded-lg bg-primary px-3 py-2 text-sm font-semibold text-white"
                whileTap={{ scale: 0.98 }}
                onClick={() => setOpen(false)}
              >
                Resume
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
