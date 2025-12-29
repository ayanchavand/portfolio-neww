import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaGamepad,
  FaYoutube,
  FaCodeBranch,
  FaHeart
} from "react-icons/fa";

import { PERSONAL } from "../constants";

const Footer = () => {
  const socialLinks = [
    {
      name: "LinkedIn",
      url: PERSONAL.linkedin,
      icon: <FaLinkedin />
    },
    {
      name: "GitHub",
      url: PERSONAL.github,
      icon: <FaGithub />
    },
    {
      name: "Email",
      url: "mailto:ayan.chavand15@gmail.com",
      icon: <FaEnvelope />
    },
    {
      name: "Itch.io",
      url: PERSONAL.itchio,
      icon: <FaGamepad />
    },
    {
      name: "YouTube",
      url: PERSONAL.youtube,
      icon: <FaYoutube />
    }
  ];

  return (
    <footer
      className="relative mt-24 pt-16 pb-8 px-6
                 bg-gradient-to-b from-[#020617] via-[#020617] to-[#030712]
                 text-gray-300 overflow-hidden"
    >
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none
                   bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.12),transparent_45%)]"
      />

      <div className="relative max-w-6xl mx-auto">
        {/* Top */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 mb-12">
          {/* Identity */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-white mb-2">
              {PERSONAL.name}
            </h3>
            <p className="text-gray-400 text-sm italic">
              Software nerd
            </p>
          </div>

          {/* Socials */}
          <div className="flex gap-6 text-xl">
            {socialLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                title={link.name}
                className="relative group text-gray-400
                           hover:text-blue-400 transition-all duration-300"
              >
                <span className="relative z-10 group-hover:scale-110 transition-transform">
                  {link.icon}
                </span>

                {/* Soft glow */}
                <span
                  className="absolute inset-0 -z-10 rounded-full
                             opacity-0 group-hover:opacity-60
                             blur-lg transition
                             bg-blue-500/30"
                />
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-6" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <span>
              © {new Date().getFullYear()} {PERSONAL.name}. All rights reserved.
            </span>
            <FaHeart className="text-red-500 text-xs animate-pulse" />
          </div>

          <div className="flex items-center gap-3">
            <span className="px-2 py-0.5 rounded
                             bg-[#020617]/80 border border-gray-700
                             text-xs font-mono">
              {PERSONAL.version}
            </span>

            <a
              href="https://github.com/ayanchavand/portfolio-neww"
              target="_blank"
              rel="noopener noreferrer"
              title="Portfolio repository"
              className="text-gray-400 hover:text-blue-400
                         transition-transform hover:scale-110"
            >
              <FaCodeBranch />
            </a>
          </div>
        </div>
      </div>

      {/* Accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5
                      bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
    </footer>
  );
};

export default Footer;
