import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PERSONAL } from "../constants";
import PageTransition from "./PageTransition";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [transition, setTransition] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  // Detect scroll for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = links.map(link => document.querySelector(link.href));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(links[i].href);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (href) => {
    setTransition(true);
    setTimeout(() => {
      const section = document.querySelector(href);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
      setTransition(false);
      setIsOpen(false);
    }, 500);
  };

  const links = [
    { name: "Home", href: "#home" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
  ];

  return (
    <>
      {transition && <PageTransition />}

      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-gray-900/95 backdrop-blur-lg shadow-lg py-3"
            : "bg-gray-900/75 backdrop-blur-md shadow-md py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
         {/* Left: Animated Name */}
          <motion.div
            className="text-2xl font-bold text-white tracking-wide cursor-pointer"
            initial={{ y: 0, rotateX: 0 }}
            whileHover={{
              y: [0, -15, 0], // pops up then drops
              rotateX: [0, 25, 0], // flip effect
              color: "#60A5FA", // Tailwind blue-400
              transition: {
                duration: 0.6,
                ease: [0.68, -0.55, 0.27, 1.55], // springy feel
              },
            }}
          >
            {PERSONAL.name}
          </motion.div>

          {/* Right: Links */}
          <div className="hidden md:flex space-x-10">
            {links.map((link, idx) => (
              <button
                key={idx}
                onClick={() => handleLinkClick(link.href)}
                className="relative text-gray-200 font-medium hover:text-blue-400 transition-colors group"
              >
                {link.name}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-400 transition-all group-hover:w-full"></span>
              </button>
            ))}
          </div>


          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-gray-200 focus:outline-none relative z-50 p-2"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <motion.span
                animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
                className="w-full h-0.5 bg-current rounded-full origin-center"
              />
              <motion.span
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="w-full h-0.5 bg-current rounded-full"
              />
              <motion.span
                animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
                className="w-full h-0.5 bg-current rounded-full origin-center"
              />
            </div>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden bg-gray-900/95 backdrop-blur-lg border-t border-gray-800 overflow-hidden"
            >
              <div className="px-4 py-2 space-y-1">
                {links.map((link, idx) => (
                  <motion.button
                    key={idx}
                    onClick={() => handleLinkClick(link.href)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ delay: idx * 0.05 }}
                    className={`block w-full text-left px-4 py-3 rounded-lg font-medium transition-all ${
                      activeSection === link.href
                        ? "bg-blue-600/20 text-white border border-blue-400/30"
                        : "text-gray-300 hover:bg-gray-800/50 hover:text-white"
                    }`}
                  >
                    <span className="flex items-center justify-between">
                      {link.name}
                      {activeSection === link.href && (
                        <motion.span
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="w-2 h-2 bg-blue-400 rounded-full"
                        />
                      )}
                    </span>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navbar;