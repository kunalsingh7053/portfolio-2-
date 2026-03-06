import React, { useEffect, useRef } from 'react'

export default function CursorCircle() {
  const dotRef = useRef(null)

  useEffect(() => {
    const el = dotRef.current
    if (!el) return undefined

    let rafId = 0
    let mouseX = window.innerWidth / 2
    let mouseY = window.innerHeight / 2
    let x = mouseX
    let y = mouseY

    const move = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    const tick = () => {
      // Lerp creates a soft trailing movement rather than a rigid lock to cursor.
      x += (mouseX - x) * 0.18
      y += (mouseY - y) * 0.18
      el.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`
      rafId = window.requestAnimationFrame(tick)
    }

    window.addEventListener('mousemove', move, { passive: true })
    rafId = window.requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('mousemove', move)
      if (rafId) window.cancelAnimationFrame(rafId)
    }
  }, [])

  return <div ref={dotRef} className="cursor-circle" aria-hidden />
}
