import { FaLinkedin, FaGithub, FaEnvelope, FaGamepad, FaYoutube} from "react-icons/fa";
import { NAV_LINKS, PERSONAL } from "../constants";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-200 py-12 mt-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        
        {/* Left: Name & Tagline */}
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-bold mb-2">{PERSONAL.name}</h3>
          <p className="text-gray-400 italic">“HRs, please hire me.” -me, unemployed, 2025.</p>
        </div>

        {/* Right: Social Icons */}
        <div className="flex space-x-6 text-2xl">
          <a
            href={PERSONAL.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transform hover:scale-110 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href= {PERSONAL.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-100 transform hover:scale-110 transition"
          >
            <FaGithub />
          </a>
          <a
            href="mailto:ayan.chavand15@gmail.com"
            className="hover:text-red-500 transform hover:scale-110 transition"
          >
            <FaEnvelope />
          </a>
          <a
            href={PERSONAL.itchio}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transform hover:scale-110 transition"
          >
            <FaGamepad />
          </a>
           <a
    href={PERSONAL.youtube} // make sure you have this in your PERSONAL object
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-red-500 transform hover:scale-110 transition"
  >
    <FaYoutube size={24} />
  </a>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-8 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} {PERSONAL.name}. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
