import React from 'react'
import { motion } from 'framer-motion'
import GitHubContrib from './GitHubContrib'

export default function About(){
  return (
    <motion.section id="about" className="mt-12 glass p-6 rounded-2xl" initial={{opacity:0, y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6}}>
      <h2 className="text-2xl font-bold">About Me</h2>
      <p className="mt-3 text-slate-700 dark:text-slate-300">Passionate and motivated developer with hands-on experience in Full-Stack Web Development, AI Integration, Backend APIs, Cloud Hosting, MongoDB, and modern UI/UX. Focused on creating real, working projects with clean code and smooth user experience. Quick learner with strong problem-solving abilities. Always building, learning, and upgrading.</p>
      <GitHubContrib username="kunalsingh7053" />
    </motion.section>
  )
}
