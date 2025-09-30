import { useEffect, useState } from "react";

const DefaultTransition = ({ duration = 2000 }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // hide overlay after `duration` milliseconds
    const timer = setTimeout(() => setVisible(false), duration);

    return () => clearTimeout(timer);
  }, [duration]);

  return (
    <div
      className={`fixed top-0 left-0 w-full h-screen bg-black z-50 pointer-events-none transform transition-transform duration-500
      flex items-center justify-center text-white text-2xl font-semibold
      ${visible ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="flex items-center gap-3 animate-bounce">
        <span className="text-yellow-400 text-3xl">🚀</span>
        Getting you there...
      </div>
    </div>
  );
};

export default DefaultTransition;