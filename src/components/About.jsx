import React from 'react'
import { motion } from 'framer-motion'
import GitHubContrib from './GitHubContrib'

const aboutAnim = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.12 }
  }
}

const aboutItem = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0 }
}

export default function About(){
  return (
    <motion.section
      id="about"
      className="mt-12 glass p-6 rounded-2xl section-reveal"
      variants={aboutAnim}
      initial="hidden"
      whileInView="show"
      viewport={{once:true, amount:0.25}}
    >
      <motion.h2 variants={aboutItem} className="text-2xl font-bold inline-flex items-center gap-2">
        About Me
        <motion.span
          aria-hidden
          animate={{ opacity: [0.35, 1, 0.35], scale: [0.9, 1.1, 0.9] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
          className="inline-block w-2.5 h-2.5 rounded-full bg-accent"
        />
      </motion.h2>
      <motion.p variants={aboutItem} className="mt-3 text-slate-700 dark:text-slate-300 leading-relaxed">
        Passionate and motivated developer with hands-on experience in Full-Stack Web Development, AI Integration, Backend APIs, Cloud Hosting, MongoDB, and modern UI/UX. Focused on creating real, working projects with clean code and smooth user experience. Quick learner with strong problem-solving abilities. Always building, learning, and upgrading.
      </motion.p>
      <motion.div variants={aboutItem} className="mt-4">
        <p className="text-sm font-semibold text-slate-800 dark:text-slate-100">Favorite Books</p>
        <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="flex items-center gap-3 rounded-xl border border-primary/30 bg-primary/10 p-2.5">
            <img
              src="https://i.pinimg.com/1200x/ad/33/04/ad3304779417a8866a2eaf1a20157a61.jpg"
              alt="The Alchemist book cover"
              loading="lazy"
              className="h-16 w-12 rounded-md object-cover"
            />
            <p className="text-sm text-red-700 dark:text-red-300">
              <span className="font-semibold">The Alchemist</span>
              <br />
              Paulo Coelho
            </p>
          </div>

          <div className="flex items-center gap-3 rounded-xl border border-accent/30 bg-accent/10 p-2.5">
            <img
              src="https://i.pinimg.com/736x/a5/de/b9/a5deb90fc77d3b3957cd67a8041ef434.jpg"
              alt="Can't Hurt Me book cover"
              loading="lazy"
              className="h-16 w-12 rounded-md object-cover"
            />
            <p className="text-sm text-blue-700 dark:text-blue-300">
              <span className="font-semibold">Can't Hurt Me</span>
              <br />
              David Goggins
            </p>
          </div>
        </div>
      </motion.div>
      <motion.div variants={aboutItem} className="mt-4">
        <p className="text-sm font-semibold text-slate-800 dark:text-slate-100">Favorite Quote</p>
        <blockquote className="mt-2 rounded-xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5 p-4 text-slate-800 dark:text-slate-200 leading-relaxed">
          "Never accept the definition of life from others; it's your life, define it yourself."
        </blockquote>
      </motion.div>
      <motion.div variants={aboutItem} className="mt-4">
        <GitHubContrib username="kunalsingh7053" />
      </motion.div>
    </motion.section>
  )
}
