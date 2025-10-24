import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaGamepad, FaYoutube, FaCodeBranch, FaHeart, FaRocket } from "react-icons/fa";

import { NAV_LINKS, PERSONAL } from "../constants";
const Footer = () => {
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const socialLinks = [
    { 
      name: "LinkedIn", 
      url: PERSONAL.linkedin, 
      icon: <FaLinkedin />, 
      hoverColor: "hover:text-blue-500" 
    },
    { 
      name: "GitHub", 
      url: PERSONAL.github, 
      icon: <FaGithub />, 
      hoverColor: "hover:text-purple" 
    },
    { 
      name: "Email", 
      url: "mailto:ayan.chavand15@gmail.com", 
      icon: <FaEnvelope />, 
      hoverColor: "hover:text-red-500" 
    },
    { 
      name: "Itch.io", 
      url: PERSONAL.itchio, 
      icon: <FaGamepad />, 
      hoverColor: "hover:text-pink-400" 
    },
    { 
      name: "YouTube", 
      url: PERSONAL.youtube, 
      icon: <FaYoutube />, 
      hoverColor: "hover:text-red-500" 
    },
  ];

  return (
    <footer className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-200 py-12 mt-12 overflow-hidden pb-1">
      {/* Subtle animated background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        
        {/* Left: Name & Tagline */}
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-bold mb-2 bg-white bg-clip-text text-transparent">
            {PERSONAL.name}
          </h3>
          <p className="text-gray-400 italic">"Software nerd"</p>
        </div>

        {/* Right: Social Icons */}
        <div className="flex space-x-6 text-2xl">
          {socialLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setHoveredIcon(idx)}
              onMouseLeave={() => setHoveredIcon(null)}
              className={`group relative transform hover:scale-125 transition-all duration-300 ${link.hoverColor}`}
              title={link.name}
            >
              <span className="relative z-10">{link.icon}</span>
              
              {/* Hover glow effect */}
              <div className={`absolute inset-0 -z-10 blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300 ${link.hoverColor.replace('hover:', 'bg')}`}></div>
              
              {/* Tooltip */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none">
                <span className="text-xs bg-gray-700 text-white px-2 py-1 rounded whitespace-nowrap shadow-lg">
                  {link.name}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Bottom */}
      <div className="relative mt-8 text-center text-gray-500 text-sm space-y-1">
        <div className="flex items-center justify-center gap-2">
          <span>&copy; {new Date().getFullYear()} {PERSONAL.name}. All rights reserved.</span>
          <FaHeart className="text-red-500 text-xs animate-pulse" />
        </div>
        <div className="flex justify-center items-center space-x-2">
          <span className="px-2 py-0.5 bg-gray-700/50 rounded text-xs font-mono">
            Version: {PERSONAL.version}
          </span>
          <a
            href="https://github.com/ayanchavand/portfolio-neww"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400 transform hover:scale-110 hover:rotate-12 transition-all duration-300"
            title="Portfolio Repo"
          >
            <FaCodeBranch />
          </a>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
    </footer>
  );
};

export default Footer;