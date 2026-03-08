import React, { useEffect, useRef, useState } from 'react'

function ReactLogo() {
  return (
    <svg viewBox="0 0 128 128" aria-hidden="true" focusable="false" className="react-burst__logo">
      <circle cx="64" cy="64" r="11" fill="currentColor" />
      <g fill="none" stroke="currentColor" strokeWidth="6">
        <ellipse cx="64" cy="64" rx="52" ry="20" />
        <ellipse cx="64" cy="64" rx="52" ry="20" transform="rotate(60 64 64)" />
        <ellipse cx="64" cy="64" rx="52" ry="20" transform="rotate(120 64 64)" />
      </g>
    </svg>
  )
}

export default function ReactClickBurst() {
  const [bursts, setBursts] = useState([])
  const idRef = useRef(0)

  useEffect(() => {
    const interactiveSelector = 'a, button, input, textarea, select, label, summary, [role="button"], [data-cursor="hero-photo"]'

    const onClick = (event) => {
      if (!(event.target instanceof Element)) return
      if (event.target.closest(interactiveSelector)) return

      const id = idRef.current++
      const burst = {
        id,
        x: event.clientX,
        y: event.clientY,
      }

      setBursts((prev) => [...prev, burst])
      window.setTimeout(() => {
        setBursts((prev) => prev.filter((item) => item.id !== id))
      }, 900)
    }

    window.addEventListener('click', onClick)
    return () => window.removeEventListener('click', onClick)
  }, [])

  return (
    <div className="react-burst-layer" aria-hidden>
      {bursts.map((burst) => (
        <span
          key={burst.id}
          className="react-burst"
          style={{ left: burst.x, top: burst.y }}
        >
          <span className="react-burst__pulse" />
          <ReactLogo />
        </span>
      ))}
    </div>
  )
}
