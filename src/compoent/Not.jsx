import React from "react";

const Portfolio = () => {
  const projects = [
    {
      title: "Modern Portfolio Website",
      description:
        "A fully responsive portfolio website showcasing my projects with sleek dark theme and smooth transitions.",
      tech: "React, Tailwind CSS",
      link: "#",
    },
    {
      title: "E-commerce Dashboard",
      description:
        "Admin dashboard for e-commerce website with analytics, charts, and real-time updates.",
      tech: "React, Chart.js, Tailwind CSS",
      link: "#",
    },
    {
      title: "Chat App",
      description:
        "Real-time chat application with user authentication, private messaging, and dark mode support.",
      tech: "React, Firebase, Tailwind CSS",
      link: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-sans">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 bg-gray-800">
        <h1 className="text-2xl font-bold text-white">Brassy Ame</h1>
        <ul className="flex gap-6 text-gray-300">
          <li className="hover:text-white cursor-pointer">Home</li>
          <li className="hover:text-white cursor-pointer">About</li>
          <li className="hover:text-white cursor-pointer">Projects</li>
          <li className="hover:text-white cursor-pointer">Contact</li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center h-[80vh] bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 px-6">
        <h2 className="text-5xl md:text-6xl font-bold mb-4">
          Hi, I'm Brassy
        </h2>
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mb-6">
          I'm a full-stack developer building modern, responsive, and professional web applications. I love clean design, smooth interactions, and dark-themed aesthetics.
        </p>
        <button className="px-8 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg text-white font-medium transition">
          DM Me
        </button>
      </section>

      {/* About Section */}
      <section className="p-12 md:p-24 bg-gray-850">
        <h3 className="text-3xl font-semibold mb-6">About Me</h3>
        <p className="text-gray-300 leading-relaxed max-w-3xl mb-4">
          I am a passionate full-stack developer with experience in React, Node.js, and modern web technologies. I focus on creating clean, responsive, and professional web applications.
        </p>
        <p className="text-gray-300 leading-relaxed max-w-3xl">
          When I'm not coding, I enjoy exploring new UI/UX trends, working on personal projects, and learning the latest frontend and backend frameworks.
        </p>
      </section>

      {/* Projects Section */}
      <section className="p-12 md:p-24 bg-gray-900">
        <h3 className="text-3xl font-semibold mb-10 text-center">Projects</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((proj, idx) => (
            <div
              key={idx}
              className="bg-gray-800 rounded-lg p-6 hover:scale-105 transition-transform"
            >
              <h4 className="text-xl font-bold mb-2">{proj.title}</h4>
              <p className="text-gray-400 mb-2">{proj.description}</p>
              <span className="text-gray-500 text-sm mb-2 block">
                Tech: {proj.tech}
              </span>
              <a
                href={proj.link}
                className="text-blue-400 hover:text-blue-300 transition"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="p-12 md:p-24 bg-gray-850 text-center">
        <h3 className="text-3xl font-semibold mb-6">Contact Me</h3>
        <p className="text-gray-400 mb-6">
          I'm open to work and collaborations. Feel free to reach out via DM or email!
        </p>
        <button className="px-8 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg text-white font-medium transition">
          DM Me
        </button>
        <p className="text-gray-500 mt-4">Email: brassy@example.com</p>
      </section>

      {/* Footer */}
      <footer className="p-6 bg-gray-800 text-gray-400 text-center">
        © 2026 Brassy Ame. All rights reserved.
      </footer>
    </div>
  );
};

export default Portfolio;
