import React, { useEffect, useState } from 'react'
import { FiArrowUp } from 'react-icons/fi'

export default function BackToTop(){
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    function onScroll(){
      setVisible(window.scrollY > 300)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function goTop(){
    // Prefer Lenis if available for smoothness
    try{
      const lenis = window.__lenis
      if (lenis && typeof lenis.scrollTo === 'function'){
        lenis.scrollTo(0)
        return
      }
    }catch(e){}

    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      onClick={goTop}
      aria-label="Back to top"
      className={`back-to-top ${visible ? 'back-to-top--visible' : ''}`}
      title="Back to top"
    >
      <FiArrowUp />
    </button>
  )
}
