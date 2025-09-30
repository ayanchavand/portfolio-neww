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

  // Motion values for parallax tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Map mouse position to rotation angles
  const rotateX = useTransform(y, [-1, 1], [10, -10]);
  const rotateY = useTransform(x, [-1, 1], [-10, 10]);
  const scale = useTransform(x, [-1, 1], [1.05, 1.05]); // subtle pop effect

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = e.clientX - rect.left; // x position within card
    const py = e.clientY - rect.top; // y position within card

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    x.set((px - centerX) / centerX); // -1 to 1
    y.set((py - centerY) / centerY); // -1 to 1
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.article
      style={{
        rotateX: rotateX,
        rotateY: rotateY,
        scale: scale,
        transformPerspective: 1000,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={[
        "bg-gray-800 text-white border border-gray-700 rounded-xl p-6 shadow-md hover:shadow-2xl transition-all",
        alignClass,
      ].join(" ")}
    >
      <motion.div
        style={{
          x: useTransform(x, [-1, 1], [-5, 5]),
          y: useTransform(y, [-1, 1], [-5, 5]),
        }}
      >
        <h3 className="text-2xl font-semibold text-blue-400">{exp.role}</h3>
        <p className="text-blue-300 font-medium">{exp.company}</p>
        <p className="text-gray-400 text-sm mb-2">{exp.timeline}</p>
        <p className="text-gray-300">{exp.description}</p>
      </motion.div>
    </motion.article>
  );
}

export default Experience;
