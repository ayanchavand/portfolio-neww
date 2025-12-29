// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        mono: [
          "JetBrains Mono",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "monospace",
        ],
      },

      keyframes: {
        bounceCard: {
          "0%": { transform: "scale(1) rotate(0deg)" },
          "20%": { transform: "scale(1.1) rotate(-2deg)" },
          "40%": { transform: "scale(1.05) rotate(1deg)" },
          "60%": { transform: "scale(1.08) rotate(-1deg)" },
          "80%": { transform: "scale(1.02) rotate(0.5deg)" },
          "100%": { transform: "scale(1) rotate(0deg)" },
        },
      },

      animation: {
        bounceCard: "bounceCard 0.6s ease-out",
      },
    },
  }
}
