import React from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin } from 'react-icons/fi'

export default function Footer(){
  return (
    <footer className="mt-16 py-8 border-t border-black/10 dark:border-white/10 relative overflow-hidden">
      <motion.div
        aria-hidden
        className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-primary via-red-600 to-accent"
        initial={{ opacity: 0.2 }}
        animate={{ opacity: [0.25, 0.8, 0.25] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="container flex flex-col sm:flex-row items-center justify-between gap-3 text-sm">
        <div className="text-slate-700 dark:text-slate-300">© {new Date().getFullYear()} Kunal Patel. Crafted with React + Motion.</div>
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/kunalsingh7053"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 hover:bg-black/5 dark:hover:bg-white/5 transition"
          >
            <FiGithub /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/kunal-patel-020b19285/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 hover:bg-black/5 dark:hover:bg-white/5 transition"
          >
            <FiLinkedin /> LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}
