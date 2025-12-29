import { useState } from "react";
import { motion } from "framer-motion";
import { PERSONAL } from "../constants";
import PageTransition from "./PageTransition";
import { FaChevronDown } from "react-icons/fa";
import RotatingTagline from "./RotatingTagline";

// Resumes
import ResumeGameDev from "../assets/misc/GameDev_Resume.pdf";
import ResumeSoftware from "../assets/misc/SWE_Resume.pdf";

const Home = () => {
  const [transition, setTransition] = useState(false);

  const handleProjectsClick = () => {
    setTransition(true);
    setTimeout(() => {
      const projectsSection = document.getElementById("projects");
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: "smooth" });
      }
      setTransition(false);
    }, 500);
  };

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center text-white overflow-hidden
                 bg-gradient-to-b from-[#020617] via-[#020617] to-[#030712]"
    >
      {/* Subtle ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.12),transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.06),transparent_35%)]" />

      <PageTransition trigger={transition} />

      {/* Floating dots */}
      <motion.div
        className="absolute w-3 h-3 bg-white rounded-full top-20 left-1/4 hidden md:block"
        style={{ boxShadow: "0 0 40px 10px rgba(255,255,255,0.5)" }}
        animate={{ y: [0, -25, 0], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 5, repeat: Infinity, repeatType: "mirror" }}
      />

      <motion.div
        className="absolute w-2 h-2 bg-blue-300 rounded-full top-1/3 right-1/4 hidden md:block"
        style={{ boxShadow: "0 0 30px 8px rgba(147,197,253,0.5)" }}
        animate={{ y: [0, 20, 0], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 4, repeat: Infinity, repeatType: "mirror", delay: 1 }}
      />

      <motion.div
        className="absolute w-2.5 h-2.5 bg-white rounded-full bottom-1/3 left-1/3 hidden md:block"
        style={{ boxShadow: "0 0 35px 9px rgba(255,255,255,0.4)" }}
        animate={{ y: [0, -15, 0], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 4.5, repeat: Infinity, repeatType: "mirror", delay: 1.5 }}
      />

      {/* Main content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-10 text-center px-6 flex flex-col items-center justify-center
                   h-full gap-6 max-w-5xl mx-auto"
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight"
        >
          {PERSONAL.name}
        </motion.h1>

        <RotatingTagline />

        {/* CTA buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 mt-4"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.15, delayChildren: 0.6 }
            }
          }}
        >
          {/* Projects */}
         

          {/* Resume downloads */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              href={ResumeGameDev}
              download
              className="px-7 py-4 bg-blue-600 text-white rounded-xl
                         font-semibold shadow-lg hover:bg-blue-500 transition-colors"
            >
              Game Developer Resume
            </motion.a>
             <motion.button
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleProjectsClick}
            className="px-8 py-4 bg-white text-gray-900 rounded-xl
                       font-semibold shadow-lg"
          >
            <span className="flex items-center gap-2">
              See My Projects <FaChevronDown />
            </span>
          </motion.button>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              href={ResumeSoftware}
              download
              className="px-7 py-4 bg-blue-800 text-white rounded-xl
                         font-semibold shadow-lg hover:bg-blue-700 transition-colors"
            >
              Software Engineer Resume
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-8 opacity-60"
        >
          <FaChevronDown />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;
