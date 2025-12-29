import { useEffect, useState } from "react";

const DefaultTransition = ({ duration = 2000 }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), duration);
    return () => clearTimeout(timer);
  }, [duration]);

  return (
    <div
      className={`fixed inset-0 z-50 pointer-events-none
        transform transition-transform duration-700 ease-in-out
        ${
          visible ? "translate-y-0" : "-translate-y-full"
        }
        bg-gradient-to-b from-[#020617] via-[#020617] to-[#030712]
        flex items-center justify-center`}
    >
      {/* Ambient glow */}
      <div
        className="absolute inset-0
                   bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.18),transparent_45%)]"
      />

      {/* Content */}
      <div
        className="relative z-10 flex items-center gap-4
                   px-6 py-4 rounded-2xl
                   bg-[#020617]/70 backdrop-blur-md
                   border border-blue-500/20
                   shadow-[0_0_40px_rgba(59,130,246,0.25)]
                   text-gray-200 font-mono"
      >
        {/* Text */}
        <span className="text-sm tracking-wide uppercase">
          Getting you there
        </span>

        {/* Subtle loader */}
        <span className="ml-2 flex gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse delay-150" />
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse delay-300" />
        </span>
      </div>
    </div>
  );
};

export default DefaultTransition;
