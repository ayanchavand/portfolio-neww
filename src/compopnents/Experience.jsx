import { motion } from "framer-motion";

const experiences = [
  {
    role: "Game Development Intern",
    company: "IDZ Digital",
    timeline: "Jun 2024 – Sept 2024",
    description:
      "Built 10+ hyper-casual mobile game prototypes using Godot and Unity. Designed reusable gameplay components and automated build pipelines, reducing iteration time by ~40% while collaborating closely with designers.",
  },
  {
    role: "Game Development Instructor",
    company: "Tutedude",
    timeline: "Feb 2025 – Sept 2025",
    description:
      "Designed and delivered Unity and Unreal Engine curricula with 100+ instructional videos. Built 12+ complete game projects demonstrating mechanics, physics, UI systems, and optimization techniques.",
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative py-28 px-6 text-white
                 bg-gradient-to-b from-[#020617] via-[#020617] to-[#030712]"
    >
      {/* Ambient background glow */}
      <div className="absolute inset-0 pointer-events-none
        bg-[radial-gradient(circle_at_25%_15%,rgba(59,130,246,0.10),transparent_40%)]" />

      <h2 className="relative z-10 text-4xl font-bold text-center mb-20 text-blue-400">
        Professional Experience
      </h2>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Vertical timeline */}
        <div className="absolute left-1/2 top-0 -translate-x-1/2 h-full w-px
                        bg-gradient-to-b from-transparent via-blue-900/60 to-transparent" />

        <div className="flex flex-col gap-28">
          {experiences.map((exp, idx) => {
            const isLeft = idx % 2 === 0;

            return (
              <div
                key={idx}
                className="relative grid grid-cols-1 md:grid-cols-3 items-center"
              >
                {/* LEFT CARD */}
                <div className="hidden md:flex justify-end pr-10 relative">
                  {isLeft && (
                    <>
                      <Connector direction="right" />
                      <ExperienceCard exp={exp} align="right" />
                    </>
                  )}
                </div>

                {/* CENTER DOT */}
                <div className="relative md:col-start-2 flex justify-center">
                  <TimelineDot />
                </div>

                {/* RIGHT CARD */}
                <div className="hidden md:flex justify-start pl-10 relative">
                  {!isLeft && (
                    <>
                      <Connector direction="left" />
                      <ExperienceCard exp={exp} align="left" />
                    </>
                  )}
                </div>

                {/* MOBILE */}
                <div className="block md:hidden mt-8">
                  <ExperienceCard exp={exp} align="center" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/* ───────────────────────── helpers ───────────────────────── */

function TimelineDot() {
  return (
    <div className="relative">
      <span
        aria-hidden
        className="absolute -inset-4 rounded-full bg-blue-500/20 blur-md animate-pulse"
      />
      <span
        className="block h-4 w-4 rounded-full bg-blue-500
                   ring-4 ring-blue-500/30
                   shadow-[0_0_25px_rgba(59,130,246,0.7)]"
      />
    </div>
  );
}

function Connector({ direction }) {
  const isLeft = direction === "left";

  return (
    <>
      {/* Glow */}
      <span
        aria-hidden
        className={`absolute top-1/2 -translate-y-1/2
          ${isLeft ? "right-full" : "left-full"}
          w-20 h-[2px]
          bg-blue-500/40 blur-sm`}
      />

      {/* Core line */}
      <span
        className={`absolute top-1/2 -translate-y-1/2
          ${isLeft ? "right-full" : "left-full"}
          w-16 h-px
          bg-blue-400`}
      />
    </>
  );
}

function ExperienceCard({ exp, align }) {
  const alignClass =
    align === "left"
      ? "md:text-left"
      : align === "right"
      ? "md:text-right"
      : "text-left";

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={[
        "relative bg-[#020617]/80 backdrop-blur-md rounded-2xl p-6",
        "shadow-[0_10px_40px_rgba(0,0,0,0.6)]",
        "hover:shadow-[0_20px_60px_rgba(59,130,246,0.25)]",
        "transition-all",
        alignClass,
      ].join(" ")}
    >
      <h3 className="text-xl font-semibold text-blue-400">{exp.role}</h3>
      <p className="text-blue-300 font-medium">{exp.company}</p>
      <p className="text-sm text-gray-400 mb-3">{exp.timeline}</p>
      <p className="text-gray-300 leading-relaxed">{exp.description}</p>
    </motion.article>
  );
}

export default Experience;
