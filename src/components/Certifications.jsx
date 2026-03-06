import React from 'react'
import { motion } from 'framer-motion'

const certs = [
  'Job Ready AI Powered Cohort — Sheryians Coding School',
  'Externship in Web Development (React + Tailwind)',
  'Digital Marketing Workshop — CiggyTech',
  'AI Tools Workshop — Be10x'
]

export default function Certifications(){
  return (
    <section id="certifications" className="mt-14 section-reveal">
      <h3 className="text-2xl font-semibold mb-5">Certifications</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {certs.map((c, idx)=> (
          <motion.div
            key={c}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.08 }}
            className="glass p-4 rounded-xl flex items-center gap-3"
            whileHover={{scale:1.02, y:-3}}
          >
            <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-primary to-accent flex items-center justify-center text-white font-bold shadow-md shadow-blue-500/25">✓</div>
            <div>
              <div className="font-semibold leading-snug">{c.split('—')[0].trim()}</div>
              <div className="text-sm text-slate-500 dark:text-slate-400 mt-1">{c.split('—')[1] ? c.split('—')[1].trim() : ''}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
