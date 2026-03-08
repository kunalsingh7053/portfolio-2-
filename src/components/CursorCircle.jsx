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
    let scale = 1
    let targetScale = 1

    const interactiveSelector = 'a, button, input, textarea, select, [role="button"], [data-cursor="hero-photo"], [data-cursor="project"], .target-lock'

    const move = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY

      if (!(e.target instanceof Element)) return
      const isInteractive = Boolean(e.target.closest(interactiveSelector))
      const isPhotoHover = Boolean(e.target.closest('[data-cursor="hero-photo"]'))
      const isProjectHover = Boolean(e.target.closest('[data-cursor="project"]'))
      el.classList.toggle('cursor-circle--active', isInteractive)
      el.classList.toggle('cursor-circle--photo', isPhotoHover)
      el.classList.toggle('cursor-circle--view', isProjectHover)
      targetScale = isProjectHover ? 1.68 : isInteractive ? 1.45 : 1
    }

    const handleDown = () => {
      el.classList.add('cursor-circle--down')
      targetScale = 0.88
    }

    const handleUp = () => {
      el.classList.remove('cursor-circle--down')
      targetScale = el.classList.contains('cursor-circle--view') ? 1.68 : el.classList.contains('cursor-circle--active') ? 1.45 : 1
    }

    const tick = () => {
      // Lerp creates a soft trailing movement rather than a rigid lock to cursor.
      x += (mouseX - x) * 0.18
      y += (mouseY - y) * 0.18
      scale += (targetScale - scale) * 0.22
      el.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%) scale(${scale})`
      rafId = window.requestAnimationFrame(tick)
    }

    window.addEventListener('mousemove', move, { passive: true })
    window.addEventListener('mousedown', handleDown, { passive: true })
    window.addEventListener('mouseup', handleUp, { passive: true })
    rafId = window.requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mousedown', handleDown)
      window.removeEventListener('mouseup', handleUp)
      if (rafId) window.cancelAnimationFrame(rafId)
    }
  }, [])

  return <div ref={dotRef} className="cursor-circle" aria-hidden />
}
