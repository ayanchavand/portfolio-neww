import { useState } from "react";
import { motion } from "framer-motion";
import { PERSONAL } from "../constants";
import bgVideo from "../assets/projects/demo-reel.mp4";
import PageTransition from "./PageTransition";
import Resume from "../assets/misc/AyanChavand.pdf";

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
    }, 500); // match PageTransition duration
  };

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center text-white overflow-hidden"
    >
      {/* Background Video with subtle zoom */}
      <motion.video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={bgVideo}
        autoPlay
        loop
        muted
        initial={{ scale: 1 }}
        animate={{ scale: 1.05 }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
      />

      {/* Overlay for contrast */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/70"></div>

      {/* Page Transition Overlay */}
      <PageTransition trigger={transition} />

      {/* Floating accent dots */}
      <motion.div
        className="absolute w-2 h-2 bg-white rounded-full top-20 left-1/3"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, repeatType: "mirror", delay: 0.5 }}
      />
      <motion.div
        className="absolute w-2 h-2 bg-white rounded-full top-1/2 left-2/3"
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 3, repeat: Infinity, repeatType: "mirror", delay: 1 }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 flex flex-col items-center justify-center h-full gap-4">
        {/* Animated Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-6xl font-bold mb-4 text-white"
        >
          {PERSONAL.name}
        </motion.h1>

        {/* Animated Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl"
        >
          {PERSONAL.description}
        </motion.p>

        {/* Staggered Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {/* See My Projects */}
          <motion.button
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            whileHover={{ scale: 1.05, boxShadow: "0 0 8px rgba(255,255,255,0.6)" }}
            whileTap={{ scale: 0.95 }}
            onClick={handleProjectsClick}
            className="px-6 py-3 bg-white text-gray-900 rounded-lg font-semibold w-full sm:w-auto text-center"
          >
            See My Projects
          </motion.button>

          {/* Download Resume */}
          <motion.a
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            whileHover={{ scale: 1.05, boxShadow: "0 0 8px rgba(255,255,255,0.6)" }}
            whileTap={{ scale: 0.95 }}
            href={Resume}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold w-full sm:w-auto text-center"
          >
            Download Resume
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
