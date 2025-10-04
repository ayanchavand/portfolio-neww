import { motion, useMotionValue, useTransform } from "framer-motion";

const experiences = [
  {
    role: "Game Development Intern",
    company: "IDZ Digital",
    timeline: "Jun. 2024 - Sept. 2024",
    description:
      "Developed 10+ hyper‑casual mobile game prototypes from concept to MVP using Godot (GDScript, C#) and Unity (C#), architecting reusable component systems and automated build tools that reduced development time by 40%, while collaborating with cross‑functional design teams to implement gameplay mechanics and iterate based on designer feedback.",
  },
  {
    role: "Game Development Instructor",
    company: "Tutedude",
    timeline: "Feb. 2025 - Sept. 2025",
    description:
      "Developed 12+ complete game projects from scratch to demonstrate core mechanics, physics systems, UI implementation, and optimization techniques, while designing and delivering comprehensive Unity 2D/3D and Unreal Engine curricula with 100+ instructional videos, leveraging expertise in C#, C++, and game design principles to simplify complex concepts and enhance student comprehension and practical skills",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6 bg-gray-900 text-white">
      <h2 className="text-4xl font-bold text-center mb-16 text-blue-400">
        Professional Experience
      </h2>

      <div className="relative max-w-5xl mx-auto">
        {/* Vertical line */}
        <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-full w-[2px] bg-gray-700" />

        <div className="flex flex-col gap-20">
          {experiences.map((exp, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <div
                key={idx}
                className="relative grid grid-cols-1 md:grid-cols-3 items-center gap-6 md:gap-8"
              >
                {/* Left column (md+): render card only when isLeft */}
                <div className="hidden md:block">
                  {isLeft ? <ExperienceCard exp={exp} align="right" /> : <div aria-hidden="true" />}
                </div>

                {/* Center column: node */}
                <div className="relative md:col-start-2 flex items-center justify-center">
                  <div className="relative">
                    <span
                      aria-hidden="true"
                      className="absolute -inset-2 rounded-full bg-blue-600/20 animate-ping"
                    />
                    <span className="block h-6 w-6 rounded-full bg-blue-600 border-2 border-black shadow-md ring-4 ring-blue-600/30" />
                  </div>
                </div>

                {/* Right column (md+): render card only when not isLeft */}
                <div className="hidden md:block">
                  {!isLeft ? <ExperienceCard exp={exp} align="left" /> : <div aria-hidden="true" />}
                </div>

                {/* Mobile (stacked): show card once, full width below node */}
                <div className="block md:hidden">
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

function ExperienceCard({ exp, align }) {
  const alignClass =
    align === "left" ? "md:text-left" : align === "right" ? "md:text-right" : "text-left";

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={[
        "relative bg-gray-800 text-white border border-gray-700 rounded-xl p-6 shadow-md transition-all",
        "hover:shadow-blue-500/50 hover:shadow-2xl hover:border-blue-500/50",
        alignClass,
      ].join(" ")}
    >
      <div>
        <h3 className="text-2xl font-semibold text-blue-400">{exp.role}</h3>
        <p className="text-blue-300 font-medium">{exp.company}</p>
        <p className="text-gray-400 text-sm mb-2">{exp.timeline}</p>
        <p className="text-gray-300">{exp.description}</p>
      </div>
    </motion.article>
  );
}
export default Experience;
