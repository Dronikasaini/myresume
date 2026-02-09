import React from "react";
import { FaReact, FaShoppingCart } from "react-icons/fa";
import { GiRibbon } from "react-icons/gi";

const Projects = () => {
  const projects = [
    {
      title: "Modern Portfolio Website",
      description:
        "A fully responsive portfolio website showcasing my projects with sleek dark theme and smooth transitions.",
      tech: "React, Tailwind CSS",
      link: "#",
      icon: <FaReact className="absolute top-2 right-2 w-20 md:w-24 h-20 md:h-24 text-white/10 pointer-events-none" />
    },
    {
      title: "E-commerce Dashboard",
      description:
        "Admin dashboard for e-commerce website with analytics, charts, and real-time updates.",
      tech: "React, Chart.js, Tailwind CSS",
      link: "#",
      icon: <FaShoppingCart className="absolute top-2 right-2 w-20 md:w-24 h-20 md:h-24 text-white/10 pointer-events-none" />
    },
    {
      title: "Chat App",
      description:
        "Real-time chat application with user authentication, private messaging, and dark mode support.",
      tech: "React, Firebase, Tailwind CSS",
      link: "#",
      icon: <GiRibbon className="absolute top-2 right-2 w-20 md:w-24 h-20 md:h-24 text-white/10 pointer-events-none" />
    },
  ];

  return (
    <section  id="projects" className="p-6 md:p-24 bg-gray-900 mb-18">
      {/* Mirror Heading */}
      <div className="relative w-full flex justify-center items-center mb-32" >
        <h3 className="absolute  abc font-extrabold text-5xl sm:text-8xl md:text-9xl text-gray-800 opacity-20 pointer-events-none select-none text-center">
          PROJECTS
        </h3>
        <h3 className="relative abc text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center z-10">
          Projects
        </h3>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
        {projects.map((proj, idx) => (
          <div
            key={idx}
            className="relative  bg-gray-800 rounded-lg p-6 overflow-hidden transform transition-all duration-300
                       hover:scale-105 hover:shadow-lg hover:shadow-blue-400/50"
          >
            {/* Background Icon */}
            {proj.icon}

            {/* Card Content */}
            <h4 className="text-lg sm:text-xl font-bold mb-2 text-gray-100 transition-colors duration-300 abc">
              {proj.title}
            </h4>
            <p className="text-gray-400 mb-2 text-sm sm:text-lg transition-colors duration-300 abc">
              {proj.description}
            </p>
            <span className="text-gray-500 text-xs sm:text-lg mb-2 block transition-colors duration-300 abc">
              Tech: {proj.tech}
            </span>
            <a
              href={proj.link}
              className= "text-blue-300 hover:text-blue-400 text-sm sm:text-base transition-colors duration-300 abc"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
