import React, { useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import Lenis from 'lenis'
import App from './App'
import './index.css'

function Root(){
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      smoothTouch: false,
    })

    let rafId = 0

    // expose lenis for debugging and optional programmatic use
    try { window.__lenis = lenis } catch (e) {}

    function raf(time){
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }

    rafId = requestAnimationFrame(raf)

    // Intercept in-page anchor clicks and use Lenis for smooth scrolling
    function onClick(e){
      const a = e.target.closest && e.target.closest('a')
      if (!a) return
      const href = a.getAttribute('href')
      if (!href || !href.startsWith('#')) return
      const id = href.slice(1)
      const el = document.getElementById(id)
      if (!el) return

      e.preventDefault()
      // compute offset to account for fixed navbar if present
      const nav = document.querySelector('nav')
      const navHeight = nav ? nav.getBoundingClientRect().height : 0
      lenis.scrollTo(el, { offset: -Math.round(navHeight) })
    }

    document.addEventListener('click', onClick)

    return () => {
      if (rafId) cancelAnimationFrame(rafId)
      document.removeEventListener('click', onClick)
      lenis.destroy()
    }
  }, [])

  return <App />
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
)
