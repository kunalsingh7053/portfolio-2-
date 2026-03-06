import React from 'react'

const items = [
  'Building Fast React Interfaces',
  'Shipping Full-Stack Projects',
  'AI Integrations in Real Apps',
  'Clean UI + Smooth Motion',
  'Node.js APIs with MongoDB',
]

export default function ComicTicker() {
  const looped = [...items, ...items]

  return (
    <section className="container mt-2 mb-8" aria-label="Portfolio highlights">
      <div className="comic-ticker glass rounded-xl overflow-hidden">
        <div className="comic-ticker__track">
          {looped.map((text, idx) => (
            <span key={`${text}-${idx}`} className="comic-ticker__item">
              {text}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
