import React from "react";
import { motion } from "framer-motion";

// Variants for staggered animation
const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const About = () => {
  return (
    <section id="about" className="p-6 sm:p-12 md:p-24 bg-gray-850">
<div className="relative flex justify-center items-center mb-12 sm:mb-32">
  <h3 className="absolute font-extrabold text-5xl sm:text-8xl md:text-9xl text-gray-800 opacity-30 select-none ">
    ABOUT ME
  </h3>
  <h3 className="relative text-2xl sm:text-4xl  font-bold text-white z-10 gap-4 ">
    About Me
  </h3>
</div>



      {/* Main paragraphs */}
      <motion.div
        className="max-w-full sm:max-w-3xl flex flex-col gap-6 mx-auto text-center px-4 sm:px-0 mt-3 sm:mt-5"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.p
          className="text-gray-300 leading-relaxed text-sm sm:text-xl abc "
          variants={itemVariants}
        >
          I am a passionate Full-Stack Developer specializing in React and Node.js, crafting clean, responsive, and scalable web applications. I focus on delivering smooth user experiences with modern design principles and robust functionality.
        </motion.p>

        <motion.p
          className="text-gray-300 leading-relaxed text-sm sm:text-xl abc"
          variants={itemVariants}
        >
          When I'm not coding, I enjoy exploring the latest UI/UX trends, experimenting with personal projects, and continuously learning new frontend and backend technologies to stay at the forefront of modern web development.
        </motion.p>
      </motion.div>

      {/* Profile Details */}
      <motion.div
        className="max-w-full sm:max-w-3xl mx-auto mt-12 bg-gray-800 p-6 sm:p-8 rounded-lg shadow-lg space-y-4 text-left"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.div variants={itemVariants}>
          <span className="font-bold text-sm sm:text-lg text-yellow-400 abc">Profile:</span> Full Stack Developer
        </motion.div>
        <motion.div variants={itemVariants}>
          <span className="font-bold text-sm sm:text-lg text-yellow-400 abc">Education:</span> BCA
        </motion.div>
        <motion.div variants={itemVariants}>
          <span className="font-bold text-sm sm:text-lg text-yellow-400 abc">Language:</span> English, Hindi
        </motion.div>
        <motion.div variants={itemVariants}>
          <span className="font-bold text-sm sm:text-lg text-yellow-400 abc">Skills:</span> HTML, CSS, JavaScript, React, Tailwind, MongoDB, Node.js
        </motion.div>
        <motion.div variants={itemVariants}>
          <span className="font-bold text-sm sm:text-lg text-yellow-400 abc">Interest:</span> UI/UX, Web Development, Modern Design, Learning New Tech
        </motion.div>
      </motion.div>

      {/* Profile Details + Skill Bars */}
      <motion.div
        className="max-w-full sm:max-w-3xl mx-auto mt-12 p-6 sm:p-8 rounded-lg shadow-lg space-y-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {/* Skill Bars */}
        <div className="space-y-4 mt-4">
          <h4 className="text-white font-bold mb-2 text-lg sm:text-2xl abc">Skills</h4>

          {/* React */}
          <div className="flex justify-between items-center abc">
            <span className="text-gray-400 text-sm sm:text-lg">React</span>
            <span className="text-gray-400 text-sm sm:text-lg font-semibold">90%</span>
          </div>
          <div className="w-full bg-gray-700 h-2 sm:h-3 rounded-full relative abc">
            <motion.div
              className="bg-yellow-400 h-2 sm:h-3 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: "90%" }}
              transition={{ duration: 1 }}
            ></motion.div>
          </div>

          {/* Node.js */}
          <div className="flex justify-between items-center mt-2 abc">
            <span className="text-gray-400 text-sm sm:text-lg">Node.js</span>
            <span className="text-gray-400 text-sm sm:text-lg font-semibold">80%</span>
          </div>
          <div className="w-full bg-gray-700 h-2 sm:h-3 rounded-full relative">
            <motion.div
              className="bg-yellow-400 h-2 sm:h-3 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: "80%" }}
              transition={{ duration: 1.2 }}
            ></motion.div>
          </div>

          {/* JavaScript */}
          <div className="flex justify-between items-center mt-2 abc">
            <span className="text-gray-400 text-sm sm:text-lg ">JavaScript</span>
            <span className="text-gray-400 text-sm sm:text-lg font-semibold "> 85% </span>
          </div>
          <div className="w-full bg-gray-700 h-2 sm:h-3 rounded-full relative">
            <motion.div
              className="bg-yellow-400 h-2 sm:h-3 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: "85%" }}
              transition={{ duration: 1.1 }}
            ></motion.div>
          </div>

          {/* Tailwind CSS */}
          <div className="flex justify-between items-center mt-2">
            <span className="text-gray-400 text-sm sm:text-lg">Tailwind CSS</span>
            <span className="text-gray-400 text-sm sm:text-lg font-semibold">80%</span>
          </div>
          <div className="w-full bg-gray-700 h-2 sm:h-3 rounded-full relative">
            <motion.div
              className="bg-yellow-400 h-2 sm:h-3 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: "80%" }}
              transition={{ duration: 1 }}
            ></motion.div>
          </div>

          {/* MongoDB */}
          <div className="flex justify-between items-center mt-2">
            <span className="text-gray-400 text-sm sm:text-lg">MongoDB</span>
            <span className="text-gray-400 text-sm sm:text-lg font-semibold">75%</span>
          </div>
          <div className="w-full bg-gray-700 h-2 sm:h-3 rounded-full relative">
            <motion.div
              className="bg-yellow-400 h-2 sm:h-3 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: "75%" }}
              transition={{ duration: 1.3 }}
            ></motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
