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
    <section className="container mt-3 mb-9" aria-label="Portfolio highlights">
      <div className="comic-ticker glass rounded-xl overflow-hidden">
        <span className="comic-ticker__shine" aria-hidden />
        <div className="comic-ticker__viewport">
          <div className="comic-ticker__track">
          {looped.map((text, idx) => (
            <span key={`${text}-${idx}`} className="comic-ticker__item">
              <span className="comic-ticker__label">{text}</span>
              <span className="comic-ticker__dot" aria-hidden />
            </span>
          ))}
          </div>
        </div>
      </div>
    </section>
  )
}
