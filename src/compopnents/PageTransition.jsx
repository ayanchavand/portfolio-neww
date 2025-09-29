import { useEffect, useState } from "react";
import { FaRocket } from "react-icons/fa";

const PageTransition = ({ trigger }) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (trigger) {
      setAnimate(true);
    } else {
      setTimeout(() => setAnimate(false), 500); // keep it in bottom-right after animation
    }
  }, [trigger]);

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-black z-50 pointer-events-none transform transition-transform duration-500 
      flex items-center justify-center text-white text-2xl font-semibold
      ${animate ? "translate-x-0 translate-y-0 rotate-0" : "translate-x-full translate-y-full rotate-12"}`}
    >
      <div className="flex items-center gap-3 animate-bounce">
        <FaRocket className="text-yellow-400 text-3xl" />
        Getting you there...
      </div>
    </div>
  );
};

export default PageTransition;
