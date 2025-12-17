import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"

const taglines = [
  "Multi Stack Software Engineer🚀",
  "Game Developer 🎮",
  <>
    Open Source Contributor{" "}
    <img
      src="https://raw.githubusercontent.com/godotengine/godot/master/icon.svg"
      alt="Godot"
      className="inline-block relative top-[2px] ml-1 h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6"
    />
  </>,
  "Philosophy & literature geek 📚",

  // --- fun ones that unlock once ---
  "My parent's son",
  "Homo sapien",
  "Bipedal primate with internet access",
  "Calcium-reinforced jelly organism",
  "A meat-based neural network with anxiety",
  "A consciousness bug running on carbon hardware",
  "You're still here? Damn.",
  "Bro… go outside or something.",
  "I’m out of taglines. Stop.",
  "Is this entertainment for you?",
  "You okay, buddy?",
  "Refresh the page. I dare you.",
  "-_-",
  "okay i see how it is",
  "you have nothing better to do",
  "I'm gonna save my processing power",
  "bye",
]

export default function RotatingTagline() {
  const [index, setIndex] = useState(0)
  const [cycles, setCycles] = useState(0)
  const [funPlayed, setFunPlayed] = useState(false)

  const initialIndexEnd = 3      // last professional tagline
  const cycleThreshold = 2       // loops before fun unlocks

  const unlocked = cycles >= cycleThreshold && !funPlayed
  const maxIndex = unlocked ? taglines.length - 1 : initialIndexEnd

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => {
        const next = prev + 1

        if (next > maxIndex) {
          if (unlocked) {
            // fun sequence finished → lock forever
            setFunPlayed(true)
            setCycles(0)
          } else {
            setCycles((c) => c + 1)
          }
          return 0
        }

        return next
      })
    }, 3000)

    return () => clearInterval(id)
  }, [maxIndex, unlocked])

  const variants = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -30 },
  }

  return (
    <div className="overflow-hidden h-[2.5rem] sm:h-[3rem] md:h-[3.5rem]">
      <AnimatePresence mode="wait">
        <motion.p
          key={`${index}-${funPlayed}`}
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
