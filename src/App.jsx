import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'

export default function App(){
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <div className="site-bg fixed inset-0 -z-20 pointer-events-none" aria-hidden />
      <div className="bg-shapes" aria-hidden>
        <span style={{top:'-60px',left:'-80px',background:'linear-gradient(45deg,#06b6d4,#8b5cf6)'}} />
        <span style={{bottom:'-80px',right:'-120px',background:'linear-gradient(45deg,#ff7ab6,#06b6d4)',width:260,height:260}} />
      </div>
      <Navbar />
      <main className="pt-20">
        <Hero />
        <section className="container py-16">
          <About />
          <Skills />
          <Projects />
          <Certifications />
          <Achievements />
          <Contact />
        </section>
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}
