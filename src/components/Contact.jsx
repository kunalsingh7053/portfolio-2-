import React, { useState } from 'react'
import { FiPhone, FiMail, FiMapPin, FiLinkedin, FiGithub } from 'react-icons/fi'

export default function Contact() {
  const [sent, setSent] = useState(false)

  return (
    <section id="contact" className="mt-12 glass p-6 rounded-2xl">
      <h3 className="text-xl font-semibold mb-4">Contact</h3>

      {sent ? (
        <div className="text-center py-16">
          <h2 className="text-3xl font-bold text-accent">Thank You!</h2>
          <p className="mt-3 text-sm opacity-80">
            Your message has been sent successfully. I will get back to you soon.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* LEFT SIDE */}
          <div>
            <div className="flex items-center gap-3">
              <FiPhone /> <span className="text-sm">+91-8823047856</span>
            </div>

            <div className="flex items-center gap-3 mt-2">
              <FiMail /> <span className="text-sm">kunalsingh7053patel@gmail.com</span>
            </div>

            <div className="flex items-center gap-3 mt-2">
              <FiMapPin /> <span className="text-sm">Indore, Madhya Pradesh</span>
            </div>

            <div className="mt-4 flex gap-4 items-center">
              <a href="https://www.linkedin.com/in/kunal-patel-020b19285/" target="_blank" rel="noreferrer"
                className="flex items-center gap-2 text-sm underline hover:text-accent transition">
                <FiLinkedin className="text-lg" /> LinkedIn
              </a>

              <a href="https://github.com/kunalsingh7053" target="_blank" rel="noreferrer"
                className="flex items-center gap-2 text-sm underline hover:text-accent transition">
                <FiGithub className="text-lg" /> GitHub
              </a>
            </div>
          </div>

          {/* RIGHT SIDE — FORMSUBMIT */}
          <div className="glass p-6 rounded-2xl">
            <h2 className="text-xl font-semibold mb-4">Send a Message</h2>

            <form
              action="https://formsubmit.co/kunalsingh7053patel@gmail.com"
              method="POST"
              className="space-y-4"
              onSubmit={() => setSent(true)}
            >
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value="" /> {/* remove redirect */}

              <p className="flex flex-col gap-1">
                <label className="text-sm font-medium">Your Name:</label>
                <input type="text" name="name" required className="p-2 rounded-md bg-black/10 dark:bg-white/10" />
              </p>

              <p className="flex flex-col gap-1">
                <label className="text-sm font-medium">Your Email:</label>
                <input type="email" name="email" required className="p-2 rounded-md bg-black/10 dark:bg-white/10" />
              </p>

              <p className="flex flex-col gap-1">
                <label className="text-sm font-medium">Message:</label>
                <textarea name="message" required className="p-2 rounded-md bg-black/10 dark:bg-white/10 h-28"></textarea>
              </p>

              <button
                type="submit"
                className="px-4 py-2 rounded-md bg-accent text-black font-medium hover:scale-105 transition"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      )}

      {/* MAP */}
      <div className="mt-6">
        <h4 className="text-sm font-medium mb-2">Location</h4>
        <div className="w-full h-64 md:h-96 rounded-lg overflow-hidden">
          <iframe
            title="Chanakyapuri Square map"
            src="https://www.google.com/maps/embed?pb=..."
            className="w-full h-full border-0"
            allowFullScreen
            loading="lazy"
          />
        </div>
      </div>

    </section>
  )
}
