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
    <section id="certifications" className="mt-12">
      <h3 className="text-xl font-semibold mb-4">Certifications</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {certs.map(c=> (
          <motion.div key={c} className="glass p-4 rounded-lg flex items-center gap-3" whileHover={{scale:1.02}}>
            <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-primary to-accent flex items-center justify-center text-black font-bold">✓</div>
            <div>
              <div className="font-semibold">{c.split('—')[0].trim()}</div>
              <div className="text-sm text-slate-400 mt-1">{c.split('—')[1] ? c.split('—')[1].trim() : ''}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
