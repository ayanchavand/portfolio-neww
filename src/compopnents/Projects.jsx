import {
  FaGithub,
  FaCuttlefish,
  FaCode,
  FaServer,
  FaCube,
} from "react-icons/fa";
import opneGlGif from "../assets/projects/opengl-demo.gif";
import more from "../assets/projects/more-meme.jpg";
import billy from "../assets/projects/billy.gif";
import ko from "../assets/projects/ko.gif";

// Projects data with tag objects
const projectsData = [
  {
    title: "OpenGL Renderer",
    description:
      "OpenGL renderer built from scratch demonstrating a deep understanding of computer graphics and the graphics pipeline.",
    image: opneGlGif,
    github: "https://github.com/ayanchavand/mini-gl-renderer",
    timeline: "Sep 2025",
    status: "in progress",
    tags: [
      { label: "C++", icon: <FaCode /> },
      { label: "OpenGL", icon: <FaCube /> },
      { label: "3D", icon: <FaCube /> },
      { label: "Graphics", icon: <FaCuttlefish /> },
      { label: "Shader", icon: <FaServer /> },
    ],
  },

  {
    title: "Billy Protocol",
    description:
      "2.5D puzzle platformer developed solo in 4 days for GMTK Game Jam 2025, ranked in the top 20%. Designed all gameplay systems, created all visual assets, and implemented innovative ghost-creation mechanics to solve environmental puzzles.",
    image: billy,
    github: "https://github.com/ayanchavand/billy-protocol",
    timeline: "Aug 2025",
    status: "Completed",
    tags: [
      { label: "Unity3D", icon: <FaCube /> },
      { label: "C#", icon: <FaCode /> },
      { label: "Game Jam", icon: <FaCuttlefish /> },
      { label: "3D", icon: <FaCube /> },
      { label: "Puzzle", icon: <FaServer /> },
    ],
  },
  {
    title: "K.O. Play Here",
    description:
      "A first-person parkour game inspired by One Punch Man and early PlayStation games. Developed fast-paced mechanics including wall-running and combat, implemented momentum-based movement physics, and designed retro-styled environments and character assets.",
    image: ko,
    github: "#", // replace with GitHub link if available
    timeline: "Jul 2024",
    status: "Completed",
    tags: [
      { label: "Unity3D", icon: <FaCube /> },
      { label: "C#", icon: <FaCode /> },
      { label: "Parkour", icon: <FaCuttlefish /> },
      { label: "First-Person", icon: <FaCube /> },
      { label: "Combat", icon: <FaServer /> },
    ],
  },


  {
    title: "More Projects Coming Soon",
    description:
      "Stay tuned! I’m working on adding more exciting projects to showcase here.",
    image: more, // optional: a placeholder image
    github: "#", // no link yet
    timeline: "Ongoing",
    status: "In Progress",
    tags: [
      { label: "More to Come", icon: <FaCode /> },
      { label: "Exciting", icon: <FaCube /> },
    ],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-gray-100">
      <h2 className="text-4xl font-bold text-center mb-12">
        My Software Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projectsData.map((project, idx) => (
          <div
            key={idx}
            className={`
    bg-white p-6 rounded-xl shadow flex flex-col cursor-pointer
    transition-transform hover:animate-[bounceCard_0.8s_ease-out]
    ${
      project.status.toLowerCase() === "completed"
        ? "hover:drop-shadow-[0_0_15px_rgba(34,197,94,0.7)]"
        : project.status.toLowerCase() === "in progress"
        ? "hover:drop-shadow-[0_0_15px_rgba(251,191,36,0.7)]"
        : ""
    }
  `}
          >
            {/* Project image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />

            {/* Project info */}
            <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-500 text-sm mb-2">
              <span className="font-semibold">Timeline:</span>{" "}
              {project.timeline}
            </p>
            <p className="text-sm mb-2 flex items-center gap-2">
              <span className="font-semibold">Status:</span>
              <span
                className={`
      px-3 py-1 rounded-full flex items-center gap-2 text-black text-xs font-medium
      ${project.status.toLowerCase() === "completed" ? "bg-green-500" : ""}
      ${project.status.toLowerCase() === "in progress" ? "bg-yellow-500" : ""}
    `}
              >
                <span
                  className={`
        w-2 h-2 rounded-full
        ${project.status.toLowerCase() === "completed" ? "bg-green-700" : ""}
        ${project.status.toLowerCase() === "in progress" ? "bg-yellow-700" : ""}
      `}
                />
                {project.status}
              </span>
            </p>

            <p className="mb-2 text-gray-700 flex-grow">
              {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-2">
              {project.tags.map((tag, tagIdx) => (
                <span
                  key={tagIdx}
                  className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded-full flex items-center gap-1"
                >
                  {tag.icon && <span className="text-sm">{tag.icon}</span>}
                  {tag.label}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="mt-4 flex items-center space-x-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-black transition text-2xl"
              >
                <FaGithub />
              </a>
              <a
                href={project.github}
                className="text-blue-600 font-semibold hover:underline"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
