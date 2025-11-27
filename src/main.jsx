import React, { useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'

function Root(){
  useEffect(() => {
    let rafId
    let cleanupClick = () => {}
    // Load Lenis from CDN at runtime so project runs even without npm dependency installed
    import('https://cdn.jsdelivr.net/npm/@studio-freight/lenis@0.2.30/+esm')
      .then(mod => {
        const Lenis = mod.default
        const lenis = new Lenis({
          duration: 1.2,
          easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          smooth: true,
        })

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
          if (el) {
            e.preventDefault()
            // compute offset to account for fixed navbar if present
            const nav = document.querySelector('nav')
            const navHeight = nav ? nav.getBoundingClientRect().height : 0
            // lenis offset expects a number (positive scroll will go past, so negate nav height)
            lenis.scrollTo(el, { offset: -Math.round(navHeight) })
          }
        }

        document.addEventListener('click', onClick)
        cleanupClick = () => document.removeEventListener('click', onClick)
      })
      .catch(() => {
        // CDN failed or blocked; silently skip smooth programmatic scrolling
      })

    return () => {
      if (rafId) cancelAnimationFrame(rafId)
      cleanupClick()
    }
  }, [])

  return <App />
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
)
