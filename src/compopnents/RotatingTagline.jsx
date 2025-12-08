import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"

const taglines = [
  "Multi Stack Software Engineer🚀",
  "Game Developer 🎮",
  <>
    Open Source Contributor{" "}
    <span className="max-sm:hidden">[Godot Engine]</span>
    <img
      src="https://raw.githubusercontent.com/godotengine/godot/master/icon.svg"
      alt="Godot"
      className="inline-block relative top-[2px] ml-1 h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6"
    />
  </>,
  "Philosophy & literature geek 📚",
]

export default function RotatingTagline() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % taglines.length)
    }, 3000)
    return () => clearInterval(id)
  }, [])

  const variants = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -30 },
  }

  return (
    <div className="overflow-hidden h-[2.5rem] sm:h-[3rem] md:h-[3.5rem]">
      <AnimatePresence mode="wait">
        <motion.p
          key={index}
          className="text-lg sm:text-xl md:text-2xl text-gray-100 mb-4 max-w-3xl leading-relaxed font-light"
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {taglines[index]}
        </motion.p>
      </AnimatePresence>
    </div>
  )
}
