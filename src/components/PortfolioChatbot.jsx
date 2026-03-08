import React, { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FiMessageCircle, FiX } from 'react-icons/fi'

const quickQuestions = [
  'Who is Kunal Patel?',
  'What does Kunal do?',
  'Tell me about projects',
  'How can I contact Kunal?',
]

const answerMap = {
  'who is kunal patel?':
    'Kunal Patel is a web developer from Medi-Caps University, Indore. He builds modern, responsive, and interactive web applications.',
  'what does kunal do?':
    'Kunal works on frontend and full-stack development using React, Node.js, MongoDB, and AI integrations. He focuses on smooth UI, performance, and clean user experience.',
  'tell me about projects':
    'Kunal has built projects like Hostel Hub, Fast Translator, Moody Player, NamkeenAI, GitHub User Finder, and multiple responsive portfolio/UI apps.',
  'how can i contact kunal?':
    'You can contact Kunal from the Contact section in this portfolio. You can also check his project links and resume from the navbar.',
}

const fallbackAnswer =
  'Try one of the quick questions. I can tell you about Kunal, his work, projects, and how to contact him.'

export default function PortfolioChatbot() {
  const [open, setOpen] = useState(false)
  const [isTyping, setIsTyping] = useState(false)
  const chatBodyRef = useRef(null)
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: 'JARVIS online. I can tell you about Kunal Patel, his work, and his projects.',
    },
  ])

  useEffect(() => {
    if (!open) return
    const container = chatBodyRef.current
    if (!container) return

    // Always keep the latest response visible, especially on repeated quick-question clicks.
    window.requestAnimationFrame(() => {
      container.scrollTo({ top: container.scrollHeight, behavior: 'smooth' })
    })
  }, [messages, isTyping, open])

  const pushBotReply = (question) => {
    const key = question.trim().toLowerCase()
    const answer = answerMap[key] || fallbackAnswer

    setIsTyping(true)
    window.setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          sender: 'bot',
          text: answer,
        },
      ])
      setIsTyping(false)
    }, 450)
  }

  const askQuestion = (question) => {
    const text = question.trim()
    if (!text || isTyping) return

    setMessages((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        sender: 'user',
        text,
      },
    ])

    pushBotReply(text)
  }

  return (
    <>
      <motion.button
        type="button"
        whileHover={{ scale: 1.07, y: -2 }}
        whileTap={{ scale: 0.96 }}
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? 'Close chatbot' : 'Open chatbot'}
        className="fixed right-4 bottom-20 md:right-5 md:bottom-24 z-[95] h-12 w-12 md:h-14 md:w-14 rounded-full bg-gradient-to-br from-red-600 via-red-500 to-amber-400 text-white shadow-xl shadow-red-500/35 flex items-center justify-center"
      >
        <span className="absolute inset-0 rounded-full animate-ping bg-red-400/30" aria-hidden />
        {open ? <FiX className="relative h-6 w-6" /> : <FiMessageCircle className="relative h-6 w-6" />}
      </motion.button>

      <AnimatePresence>
        {open && (
          <>
            <motion.button
              type="button"
              aria-label="Close chatbot panel"
              onClick={() => setOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[94] bg-black/15 dark:bg-black/35"
            />

            <motion.aside
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.96 }}
              transition={{ duration: 0.22 }}
              className="fixed left-3 right-3 bottom-36 md:left-auto md:right-5 md:bottom-40 z-[95] w-auto md:w-[min(92vw,360px)] rounded-2xl border border-red-500/25 bg-white/90 text-slate-800 shadow-2xl shadow-red-500/20 dark:bg-slate-900/98 dark:text-slate-100 dark:border-red-400/35 dark:shadow-black/60 backdrop-blur"
            >
              <div className="px-4 py-3 border-b border-red-500/20 bg-gradient-to-r from-red-500/10 to-amber-400/10 dark:from-red-500/20 dark:to-amber-400/20">
                <div className="flex items-center gap-2.5">
                  <motion.div
                    animate={{ boxShadow: ['0 0 0 rgba(248,113,113,0)', '0 0 16px rgba(248,113,113,0.45)', '0 0 0 rgba(248,113,113,0)'] }}
                    transition={{ duration: 1.8, repeat: Infinity }}
                    className="relative h-8 w-8 rounded-full border border-red-300/45 bg-white/75 dark:bg-slate-800 flex items-center justify-center"
                    aria-hidden
                  >
                    <span className="text-[10px] font-black tracking-wide text-amber-300">IM</span>
                    <span className="absolute -bottom-1 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-cyan-300" />
                  </motion.div>
                  <div>
                    <p className="font-semibold text-red-700 dark:text-red-100">Iron Man Assistant</p>
                    <p className="text-xs text-slate-600 dark:text-slate-300">JARVIS mode: portfolio intel</p>
                  </div>
                </div>
              </div>

              <div ref={chatBodyRef} className="max-h-[56vh] md:max-h-80 overflow-y-auto px-3 py-3 space-y-2">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm leading-relaxed ${
                        msg.sender === 'user'
                          ? 'bg-gradient-to-r from-red-600 to-red-500 text-white rounded-br-md'
                          : 'bg-slate-100 text-slate-800 rounded-bl-md border border-red-500/15 dark:bg-slate-800 dark:text-slate-100 dark:border-red-400/25'
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}

                {isTyping && (
                  <div className="inline-flex items-center gap-1 rounded-full bg-slate-200 px-3 py-1 text-xs text-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:border dark:border-red-400/25">
                    <span className="h-1.5 w-1.5 rounded-full bg-slate-700 dark:bg-slate-100 animate-bounce" />
                    <span className="h-1.5 w-1.5 rounded-full bg-slate-700 dark:bg-slate-100 animate-bounce [animation-delay:120ms]" />
                    <span className="h-1.5 w-1.5 rounded-full bg-slate-700 dark:bg-slate-100 animate-bounce [animation-delay:240ms]" />
                  </div>
                )}
              </div>

              <div className="px-3 pb-3 pt-1 border-t border-red-500/20">
                <div className="mb-2 flex flex-wrap gap-2">
                  {quickQuestions.map((question) => (
                    <button
                      key={question}
                      type="button"
                      onClick={() => askQuestion(question)}
                      className="rounded-full border border-red-400/35 bg-red-500/10 text-slate-700 dark:text-slate-100 dark:bg-red-500/20 px-2.5 py-1 text-[11px] hover:bg-red-400/20 transition"
                    >
                      {question}
                    </button>
                  ))}
                </div>
                <p className="text-[11px] text-slate-600 dark:text-slate-300">
                  Select a question above to chat.
                </p>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
