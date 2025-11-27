import React from 'react'
import { motion } from 'framer-motion'

const items = [
  'Selected at college level in SIH',
  'Awarded laptop for academic performance',
  'State-level volleyball player',
  'District-level Yoga participant',
  '7.6 CGPA in first year'
]

export default function Achievements(){
  return (
    <section id="achievements" className="mt-12">
      <h3 className="text-xl font-semibold mb-4">Achievements</h3>
      <div className="flex flex-wrap gap-3">
        {items.map(it=> (
          <motion.div key={it} className="px-3 py-2 rounded-full bg-black/5 dark:bg-white/5 text-sm text-slate-800 dark:text-slate-100" whileHover={{scale:1.03}}>{it}</motion.div>
        ))}
      </div>
    </section>
  )
}
