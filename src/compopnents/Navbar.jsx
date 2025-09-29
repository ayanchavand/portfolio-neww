import { useState } from "react";
import { PERSONAL } from "../constants";
import PageTransition from "./PageTransition";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [transition, setTransition] = useState(false);

  // Generic handler for any link
  const handleLinkClick = (href) => {
    setTransition(true); // start overlay
    setTimeout(() => {
      const section = document.querySelector(href);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
      setTransition(false); // remove overlay
      setIsOpen(false); // close mobile menu
    }, 500); // match your PageTransition duration
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

      <nav className="fixed w-full z-50 bg-gray-900/95 backdrop-blur-md shadow-md">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Left: Name */}
          <div className="text-2xl font-bold text-white tracking-wide hover:text-blue-400 transition-colors cursor-pointer">
            {PERSONAL.name}
          </div>

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
          <div className="md:hidden">
            <button
              className="text-gray-200 focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-gray-900">
            {links.map((link, idx) => (
              <button
                key={idx}
                onClick={() => handleLinkClick(link.href)}
                className="block w-full text-left px-6 py-4 text-gray-200 font-medium hover:text-blue-400 transition"
              >
                {link.name}
              </button>
            ))}
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
