import React, { useEffect, useState } from 'react'

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement
      const total = doc.scrollHeight - window.innerHeight
      if (total <= 0) {
        setProgress(0)
        return
      }

      const next = (window.scrollY / total) * 100
      setProgress(Math.min(100, Math.max(0, next)))
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="scroll-progress" aria-hidden>
      <div className="scroll-progress__bar" style={{ width: `${progress}%` }} />
    </div>
  )
}
