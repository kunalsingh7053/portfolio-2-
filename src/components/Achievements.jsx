import React from 'react'
import { motion } from 'framer-motion'

const featuredAchievement = {
  title: 'IBM Hackathon',
  organization: 'IBM',
  date: '18/02/2026',
  summary: 'Won silver at the college-level hackathon organized by IBM.'
}

const items = [
  'Selected at college level in SIH',
  'Awarded laptop for academic performance',
  'State-level volleyball player',
  'District-level Yoga participant',
  '7.6 CGPA in first year'
]

export default function Achievements(){
  return (
    <section id="achievements" className="mt-14 section-reveal">
      <h3 className="text-2xl font-semibold mb-5">Achievements</h3>

      <motion.article
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        whileHover={{ y: -4 }}
        className="achievement-feature glass rounded-2xl p-5 md:p-6 mb-6"
      >
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h4 className="text-lg md:text-xl font-bold text-slate-900 dark:text-slate-100">
            {featuredAchievement.title}
          </h4>
          <span className="achievement-feature__badge">Silver Winner</span>
        </div>

        <div className="mt-2 flex flex-wrap gap-2 text-xs sm:text-sm">
          <span className="rounded-full bg-primary/10 text-red-700 dark:text-red-300 px-3 py-1 border border-primary/25">
            {featuredAchievement.organization}
          </span>
          <span className="rounded-full bg-accent/10 text-blue-700 dark:text-blue-300 px-3 py-1 border border-accent/25">
            {featuredAchievement.date}
          </span>
        </div>

        <p className="mt-3 text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
          {featuredAchievement.summary}
        </p>
      </motion.article>

      <div className="flex flex-wrap gap-3">
        {items.map((it, idx)=> (
          <motion.div
            key={it}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: idx * 0.06 }}
            whileHover={{ scale: 1.05, y: -2 }}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-black/5 dark:bg-white/5 text-sm text-slate-800 dark:text-slate-100 border border-black/10 dark:border-white/10"
          >
            <span aria-hidden>🏆</span>
            {it}
          </motion.div>
        ))}
      </div>
    </section>
  )
}
