import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'
import Footer from './Footer'
function Layout() {
  return (
    <div>
        <div className="bg-[#0f0f0f] text-white min-h-screen flex justify-center md:justify-start">

      <div className="bg-[#0f0f0f] text-white min-h-screen flex">

      {/* LEFT NAVBAR */}
      <div className="hidden md:block px-6 py-12 w-1/4">
        <Navbar />
      </div>

      {/* RIGHT CONTENT */}
      <div className="w-full md:w-3/4 px-6 py-12">
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>

    </div>
    </div>
    </div>
  )
}

export default Layout