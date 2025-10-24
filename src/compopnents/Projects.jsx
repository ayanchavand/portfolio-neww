import React, { useState } from "react";
import {
  FaGithub,
  FaCuttlefish,
  FaCode,
  FaServer,
  FaCube,
  FaGlobe,
  FaGamepad,
  FaAndroid,
  FaLayerGroup,
  FaExternalLinkAlt
} from "react-icons/fa";
import opneGlGif from "../assets/projects/opengl-demo.gif";
import more from "../assets/projects/more-meme.jpg";
import billy from "../assets/projects/billy.gif";
import ko from "../assets/projects/ko.gif";
import discat from "../assets/projects/discat.jpg";

// Projects data with tag objects + type field
const projectsData = [
  {
  title: "OpenGL Renderer",
  description:
    "OpenGL renderer built from scratch demonstrating a deep understanding of computer graphics and the graphics pipeline.",
  image: opneGlGif,
  github: "https://github.com/ayanchavand/mini-gl-renderer",
  timeline: "Sep 2025",
  status: "In Progress",
  type: "Systems & Graphics", // 🆕 Changed from "Web"
  tags: [
    { label: "Systems & Graphics", icon: <FaCube /> }, // 🆕 New tag
    { label: "C++", icon: <FaCode /> },
    { label: "OOPs", icon: <FaCode /> },
    { label: "OpenGL", icon: <FaCube /> },
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
    type: "Game",
    tags: [
      { label: "Unity3D", icon: <FaCube /> },
      { label: "C#", icon: <FaCode /> },
      { label: "Game Jam", icon: <FaCuttlefish /> },
      { label: "Puzzle", icon: <FaServer /> },
    ],
  },
  {
    title: "K.O.",
    description:
      "A first-person parkour game inspired by One Punch Man and early PlayStation games. Developed fast-paced mechanics including wall-running and combat, implemented momentum-based movement physics, and designed retro-styled environments and character assets.",
    image: ko,
    github: "https://ayanchavand.itch.io/ko",
    timeline: "Jul 2024",
    status: "Completed",
    type: "Game",
    tags: [
      { label: "Unity3D", icon: <FaCube /> },
      { label: "C#", icon: <FaCode /> },
      { label: "First-Person", icon: <FaCube /> },
      { label: "Parkour", icon: <FaCuttlefish /> },
    ],
  },
  {
    title: "DisCat",
    description:
      "DisCat is an Android app built with Kotlin that fetches cat and dog images from multiple APIs. It uses Glide for smooth image loading, OkHttp for reliable networking, and Gson for parsing API responses, showcasing modern Android development with a clean, efficient user experience.",
    image: discat,
    github: "https://github.com/ayanchavand/discat",
    timeline: "Jan 2024",
    status: "Completed",
    type: "Android",
    tags: [
      { label: "Kotlin", icon: <FaCode /> },
      { label: "Android", icon: <FaCube /> },
      { label: "API", icon: <FaServer /> },
    ],
  },
  {
    title: "More Projects Coming Soon",
    description:
      "Stay tuned! I’m working on adding more exciting projects to showcase here.",
    image: more,
    github: "#",
    timeline: "Ongoing",
    status: "In Progress",
    type: "Web",
    tags: [
      { label: "More to Come", icon: <FaCode /> },
      { label: "Exciting", icon: <FaCube /> },
    ],
  },
];


const Projects = () => {
  const [filter, setFilter] = useState("All");
  const [hoveredCard, setHoveredCard] = useState(null);

  const filters = [
    { type: "All", icon: <FaLayerGroup /> },
    { type: "Web", icon: <FaGlobe /> },
    { type: "Game", icon: <FaGamepad /> },
    { type: "Android", icon: <FaAndroid /> },
    { type: "Systems & Graphics", icon: <FaCube /> },
  ];

  const filteredProjects =
    filter === "All"
      ? projectsData
      : projectsData.filter((p) => p.type === filter);

  return (
    <section id="projects" className="py-20 px-6 bg-gradient-to-br from-gray-50 via-blue-50 to-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 bg-blue-600 bg-clip-text text-transparent">
            My Software Projects
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A collection of my work spanning multiple tech stacks
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {filters.map(({ type, icon }) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 shadow-md hover:shadow-lg transform hover:-translate-y-0.5
                ${
                  filter === type
                    ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white scale-105"
                    : "bg-white text-gray-700 hover:bg-gray-50"
                }`}
            >
              <span className="text-lg">{icon}</span>
              {type}
            </button>
          ))}
        </div>

        {/* Projects Count */}
        <div className="text-center mb-8">
          <p className="text-sm text-gray-500">
            Showing <span className="font-semibold text-blue-600">{filteredProjects.length}</span> {filteredProjects.length === 1 ? 'project' : 'projects'}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <div
              key={idx}
              onMouseEnter={() => setHoveredCard(idx)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl group
                ${
                  project.status.toLowerCase() === "completed"
                    ? "hover:shadow-green-200"
                    : project.status.toLowerCase() === "in progress"
                    ? "hover:shadow-yellow-200"
                    : ""
                }`}
            >
              {/* Image Container with Overlay */}
              <div className="relative overflow-hidden h-56">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent transition-opacity duration-300 ${hoveredCard === idx ? 'opacity-100' : 'opacity-0'}`} />
                
                {/* Status Badge on Image */}
                <div className="absolute top-4 right-4">
                  <span
                    className={`px-3 py-1.5 rounded-full flex items-center gap-2 text-white text-xs font-semibold shadow-lg backdrop-blur-sm
                      ${
                        project.status.toLowerCase() === "completed"
                          ? "bg-green-500/90"
                          : "bg-yellow-500/90"
                      }`}
                  >
                    <span
                      className={`w-2 h-2 rounded-full animate-pulse
                        ${
                          project.status.toLowerCase() === "completed"
                            ? "bg-green-200"
                            : "bg-yellow-200"
                        }`}
                    />
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                </div>

                <p className="text-xs text-gray-500 mb-4 flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                  {project.timeline}
                </p>

                <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="bg-blue-50 text-blue-700 text-xs font-medium px-3 py-1.5 rounded-lg flex items-center gap-1.5 hover:bg-blue-100 transition-colors"
                    >
                      {tag.icon && <span className="text-xs">{tag.icon}</span>}
                      {tag.label}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all duration-300 font-medium text-sm group/btn"
                  >
                    <FaGithub className="text-lg group-hover/btn:rotate-12 transition-transform" />
                    GitHub
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 font-medium text-sm group/btn"
                  >
                    View
                    <FaExternalLinkAlt className="text-xs group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-semibold text-gray-700 mb-2">No projects found</h3>
            <p className="text-gray-500">Try selecting a different filter</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
