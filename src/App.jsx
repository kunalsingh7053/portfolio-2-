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
import CursorCircle from './components/CursorCircle'
import ScrollProgress from './components/ScrollProgress'
import SpiderSwing from './components/SpiderSwing'
import ComicTicker from './components/ComicTicker'

export default function App(){
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <ScrollProgress />
      <CursorCircle />
      <div className="web-swing" aria-hidden />
      <div className="site-bg fixed inset-0 -z-20 pointer-events-none" aria-hidden />
      <div className="bg-shapes" aria-hidden>
        <span style={{top:'-60px',left:'-80px',background:'linear-gradient(45deg,#ef4444,#2563eb)'}} />
        <span style={{bottom:'-80px',right:'-120px',background:'linear-gradient(45deg,#b91c1c,#1d4ed8)',width:260,height:260}} />
        <span style={{top:'32%',left:'42%',background:'linear-gradient(45deg,#1d4ed8,#ef4444)',width:170,height:170}} />
      </div>
      <Navbar />
      <main className="pt-20">
        <Hero />
        <SpiderSwing />
        <ComicTicker />
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
