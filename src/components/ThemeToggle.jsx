import React, { useEffect, useState } from 'react'
import { FiSun, FiMoon } from 'react-icons/fi'

export default function ThemeToggle(){
  const [theme, setTheme] = useState(() => {
    try {
      const saved = localStorage.getItem('theme')
      if (saved) return saved
      // fallback to system preference
      return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    } catch (e) {
      return 'light'
    }
  })

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    try { localStorage.setItem('theme', theme) } catch (e) {}
  }, [theme])

  function toggle(){
    setTheme(t => t === 'dark' ? 'light' : 'dark')
  }

  return (
    <button aria-label="Toggle theme" onClick={toggle} className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors duration-200 flex items-center justify-center" title="Toggle theme">
      {theme === 'dark' ? <FiSun size={18} className="text-amber-400" /> : <FiMoon size={18} className="text-slate-700" />}
    </button>
  )
}
