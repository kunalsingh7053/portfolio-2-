import React from 'react'
import { FiPhone, FiMail, FiMapPin, FiLinkedin, FiGithub } from 'react-icons/fi'

export default function Contact() {
  return (
    <section id="contact" className="mt-12 glass p-6 rounded-2xl">
      <h3 className="text-xl font-semibold mb-4">Contact</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* LEFT SIDE — CONTACT INFO */}
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

          {/* SOCIAL LINKS */}
          <div className="mt-4 flex gap-4 items-center">
            <a
              href="https://www.linkedin.com/in/kunal-patel-020b19285/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-sm underline hover:text-accent transition"
            >
              <FiLinkedin className="text-lg" /> LinkedIn
            </a>

            <a
              href="https://github.com/kunalsingh7053"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-sm underline hover:text-accent transition"
            >
              <FiGithub className="text-lg" /> GitHub
            </a>
          </div>
        </div>

        {/* RIGHT SIDE — FORMSUBMIT CONTACT FORM */}
        <div className="glass p-6 rounded-2xl">
          <h2 className="text-xl font-semibold mb-4">Send a Message</h2>

          <form  
            action="https://formsubmit.co/kunalsingh7053patel@gmail.com"
            method="POST"
            className="space-y-4"
          >
            {/* Disable captcha */}
            <input type="hidden" name="_captcha" value="false" />

            {/* Redirect after submission */}
            <input type="hidden" name="_next" value="https://yourwebsite.com/thanks" />

            <p className="flex flex-col gap-1">
              <label className="text-sm font-medium">Your Name:</label>
              <input
                type="text"
                name="name"
                required
                className="p-2 rounded-md bg-black/10 dark:bg-white/10"
              />
            </p>

            <p className="flex flex-col gap-1">
              <label className="text-sm font-medium">Your Email:</label>
              <input
                type="email"
                name="email"
                required
                className="p-2 rounded-md bg-black/10 dark:bg-white/10"
              />
            </p>

            <p className="flex flex-col gap-1">
              <label className="text-sm font-medium">Message:</label>
              <textarea
                name="message"
                required
                className="p-2 rounded-md bg-black/10 dark:bg-white/10 h-28"
              />
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

      {/* GOOGLE MAP */}
      <div className="mt-6">
        <h4 className="text-sm font-medium mb-2">Location</h4>
        <div className="w-full h-64 md:h-96 rounded-lg overflow-hidden">
          <iframe
            title="Chanakyapuri Square map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2665.031083099024!2d75.83120468885497!3d22.683820400000023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd83263a0075%3A0x93331a4de6550a00!2sChanakyapuri%20Square%20%2F%20Annapurna%20square!5e1!3m2!1sen!2sin!4v1764219049464!5m2!1sen!2sin"
            className="w-full h-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

    </section>
  )
}
