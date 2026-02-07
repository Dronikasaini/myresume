import React from "react";
import Navbar from "./compoent/Navbar";
import Hero from "./compoent/Hero";
import About from "./compoent/About";
import Projects from "./compoent/Projects";
import Contact from "./compoent/Contact";
import Footer from "./compoent/Footer";

function App() {
  return (
    <div className="bg-[#0f0f0f] text-white min-h-screen flex justify-center md:justify-start">

      {/* LEFT NAVBAR */}
      <div className="px-6 py-12 flex justify-center md:block w-full md:w-1/4">
        <Navbar />
      </div>

      {/* RIGHT CONTENT - hide on small screens */}
      <div className="w-3/4 md:w-3/4 px-6 py-12 hidden md:block">
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>

    </div>
  );
}

export default App;
