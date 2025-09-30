import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <>
      <style>
  {`
    * {
      cursor: none !important; /* hide cursor on everything */
    }
  `}
</style>

      <motion.div
        animate={{ scale: isClicking ? 1.5 : 1 }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
        style={{
          position: "fixed",
          top: mousePos.y - 10,
          left: mousePos.x - 10,
          width: 20,
          height: 20,
          borderRadius: "50%",
          backgroundColor: "#ffffff",
          pointerEvents: "none",
          zIndex: 9999,
          mixBlendMode: "difference", // invert effect
          boxShadow: "0 0 12px 3px rgba(255,255,255,0.8)", // subtle glow
        }}
      />
    </>
  );
};

export default CustomCursor;
