import React from 'react'
import { motion } from 'framer-motion'

export default function SpiderSwing() {
  return (
    <div className="spider-swing-wrap" aria-hidden>
      <motion.div
        className="spider-rig"
        animate={{ rotate: [10, -14, 10] }}
        transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span className="spider-thread" />
        <motion.span
          className="spider-body"
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <span className="spider-eye" />
          <span className="spider-eye spider-eye--right" />
        </motion.span>
      </motion.div>
    </div>
  )
}
