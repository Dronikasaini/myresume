import React from "react";
import { motion } from "framer-motion";
import profile from "./download.jpg";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {

  // Variants for staggered animation
  const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <section
  id="home"
  className="bg-[#0f0f0f] flex items-center"
  style={{ minHeight: "80vh" }}
>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center w-full max-w-7xl mx-auto px-6 md:px-24">

    {/* LEFT TEXT */}
    <motion.div
      className="space-y-4 sm:space-y-6 text-center md:text-left order-2 md:order-1"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      {/* Subtle intro */}
      <motion.p
        className="text-yellow-500 text-sm sm:text-lg tracking-wide uppercase font-bold pt-2 abc"
        variants={itemVariants}
      >
        Hi, I’m
      </motion.p>

      {/* Name */}
      <motion.h1
        className=" abc text-3xl sm:text-5xl md:text-6xl font-bold leading-tight text-white"
        variants={itemVariants}
      >
        Dronika Saini
      </motion.h1>

      {/* Role Typewriter */}
      <motion.div
        className="text-yellow-500 text-xs sm:text-lg tracking-wide uppercase font-bold abc"
        variants={itemVariants}
      >
        <Typewriter
          words={["FULL STACK DEVELOPER"]}
          loop={true}
          cursor
          cursorStyle="_"
          typeSpeed={120}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </motion.div>

      {/* Profession */}
      <motion.p
        className="text-gray-400 max-w-full sm:max-w-lg text-2xl font-medium sm:text-base md:text-2xl font-mediumleading-relaxed abc"
        variants={itemVariants}
      >
        Full-stack developer crafting clean, scalable, and user-friendly web applications.
        I love modern design, smooth animations, and creating professional digital experiences.
      </motion.p>

      {/* CTA Button */}
      <motion.a
        href="https://www.linkedin.com/in/dronika-saini-2b502a261?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
        target="_blank"
        rel="noopener noreferrer"
        className=" abc  text-sm sm:text-lg inline-block mt-2 sm:mt-6 px-6 sm:px-8 py-1 sm:py-3 bg-gradient-to-r from-gray-700 to-gray-600 text-white font-medium  mb-12 "
        whileHover={{ scale: 1.05, y: -2 }}
        transition={{ type: "spring", stiffness: 120 }}
        variants={itemVariants}
      >
        LinkedIn
      </motion.a>
    </motion.div>

    {/* RIGHT IMAGE */}
    <motion.div
      className="flex justify-center md:justify-end mt-8 md:mt-0 order-1 md:order-2"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: 1 }}
    >
      <div className="w-64 sm:w-80 md:w-[400px] h-64 sm:h-80 md:h-[400px] rounded-2xl overflow-hidden border-4 border-gray-700 shadow-lg hover:scale-105 transform transition-transform duration-500">
        <img
          src={profile}
          alt="Dronika Saini"
          className="w-full h-full object-cover"
        />
      </div>
    </motion.div>

  </div>
</section>

  );
};

export default Hero;
