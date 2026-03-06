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
        <GitHubContrib username="kunalsingh7053" />
      </motion.div>
    </motion.section>
  )
}
