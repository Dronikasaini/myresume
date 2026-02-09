import React from "react";
import { motion } from "framer-motion";
import profile from "./download.jpg";
import { useScrollSpy } from "../hook/use"

const Navbar = () => {
  const sectionIds = ["home", "about", "projects", "contact"];
  const activeSection = useScrollSpy(sectionIds);

  return (
    <motion.nav
      initial={{ x: -300 }}
      animate={{ x: 0 }}
      transition={{ type: "spring", stiffness: 80, damping: 20 }}
      className="hidden md:flex flex-col items-center text-gray-300 fixed top-0 left-0 h-full w-80 bg-black900 shadow-xl p-8"
    >
      {/* PROFILE IMAGE */}
      <motion.div
        className="mb-10 mt-8"
        whileHover={{ scale: 1.1, rotate: 3 }}
        transition={{ type: "spring", stiffness: 120 }}
      >
        <img
          src={profile}
          alt="Dronika Saini"
          className="w-40 h-40 rounded-full border-4 border-gray-700 object-cover"
        />
      </motion.div>

      {/* LOGO / NAME */}
      <motion.div
        className="text-center mb-16"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <h1 className="abc text-4xl font-bold text-white mb-2 tracking-wide">
          DRONIKA
        </h1>
        <p className="abc text-sm text-gray-400 uppercase tracking-widest">
          Portfolio
        </p>
      </motion.div>

      {/* NAV LINKS */}
      <ul className="abc flex flex-col gap-8 text-base md:text-xl text-gray-400">
        {sectionIds.map((id) => (
          <motion.li
            key={id}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 120 }}
            className="cursor-pointer capitalize"
          >
            <a
              href={`#${id}`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
              }}
              className={`relative abc group transition-colors duration-300 ${
                activeSection === id ? "text-yellow-500 font-bold" : "text-gray-400"
              }`}
            >
              {id.toUpperCase()}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </motion.li>
        ))}
      </ul>
    </motion.nav>
  );
};

export default Navbar;
