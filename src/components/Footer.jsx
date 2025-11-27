import React from 'react'

export default function Footer(){
  return (
    <footer className="mt-16 py-6 border-t border-black/6 dark:border-white/6">
      <div className="container flex items-center justify-between">
        <div>© {new Date().getFullYear()} Kunal Patel</div>
      
      </div>
    </footer>
  )
}
