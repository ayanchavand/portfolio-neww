import { useState } from "react";
import { motion } from "framer-motion";
import { PERSONAL } from "../constants";
import bgVideo from "../assets/projects/demo-reel.mp4";
import PageTransition from "./PageTransition";
import Resume from "../assets/misc/AyanChavand.pdf";
import { FaChevronDown } from "react-icons/fa";

const Home = () => {
  const [transition, setTransition] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

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
      className="relative h-screen flex items-center justify-center text-white overflow-hidden"
    >
      {/* Background Video */}
      <motion.video
        onLoadedData={() => setVideoLoaded(true)}
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={bgVideo}
        autoPlay
        loop
        muted
        playsInline
        initial={{ scale: 1 }}
        animate={{ scale: 1.05 }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
      />

      {/* Loading Overlay */}
      {!videoLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-black text-white z-50">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
            className="text-lg tracking-widest"
          >
            Loading…
          </motion.div>
        </div>
      )}

      {/* Gradient Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: videoLoaded ? 1 : 0 }}
        transition={{ duration: 1 }}
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-950/50 via-blue-950/40 to-gray-900/60"
      />

      <PageTransition trigger={transition} />

      {/* Floating Dots */}
      {videoLoaded && (
        <>
          <motion.div
            className="absolute w-3 h-3 bg-white rounded-full top-20 left-1/4 hidden md:block"
            style={{ boxShadow: "0 0 40px 10px rgba(255,255,255,0.6)" }}
            animate={{ y: [0, -25, 0], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 5, repeat: Infinity, repeatType: "mirror", delay: 0.5 }}
          />
          <motion.div
            className="absolute w-2 h-2 bg-blue-300 rounded-full top-1/3 right-1/4 hidden md:block"
            style={{ boxShadow: "0 0 30px 8px rgba(147, 197, 253, 0.6)" }}
            animate={{ y: [0, 20, 0], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 4, repeat: Infinity, repeatType: "mirror", delay: 1 }}
          />
          <motion.div
            className="absolute w-2.5 h-2.5 bg-white rounded-full bottom-1/3 left-1/3 hidden md:block"
            style={{ boxShadow: "0 0 35px 9px rgba(255,255,255,0.5)" }}
            animate={{ y: [0, -15, 0], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 4.5, repeat: Infinity, repeatType: "mirror", delay: 1.5 }}
          />
        </>
      )}

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: videoLoaded ? 1 : 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-10 text-center px-6 flex flex-col items-center justify-center h-full gap-6 max-w-5xl mx-auto"
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-5xl sm:text-6xl md:text-7xl font-bold mb-2 text-white tracking-tight"
        >
          {PERSONAL.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-lg sm:text-xl md:text-2xl text-gray-100 mb-4 max-w-3xl leading-relaxed font-light"
        >
          {PERSONAL.description}
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-4"
          initial="hidden"
          animate="visible"
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15, delayChildren: 0.6 } } }}
        >
          <motion.button
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
            whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(255,255,255,0.3)" }}
            whileTap={{ scale: 0.98 }}
            onClick={handleProjectsClick}
            className="group relative px-8 py-4 bg-white text-gray-900 rounded-xl font-semibold w-full sm:w-auto text-center overflow-hidden shadow-lg hover:shadow-2xl"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              See My Projects <FaChevronDown className="text-sm group-hover:translate-y-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white opacity-0 group-hover:opacity-100" />
          </motion.button>

          <motion.a
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
            whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(37, 99, 235, 0.4)" }}
            whileTap={{ scale: 0.98 }}
            href={Resume}
            download
            className="group relative px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold w-full sm:w-auto text-center overflow-hidden shadow-lg hover:shadow-2xl"
          >
            <span className="relative z-10">Download Resume</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-500 opacity-0 group-hover:opacity-100" />
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 cursor-pointer opacity-60 hover:opacity-100"
          >
            <span className="text-xs uppercase tracking-widest text-white hidden sm:block">Scroll</span>
            <FaChevronDown className="text-white text-sm" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;