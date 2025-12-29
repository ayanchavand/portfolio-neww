import React, { useState } from "react";
import {
  FaGithub,
  FaGlobe,
  FaGamepad,
  FaAndroid,
  FaCube,
  FaLayerGroup,
} from "react-icons/fa";

import { projectsData } from "../data/projects";

const Projects = () => {
  const [filter, setFilter] = useState("All");

  const filters = [
    { type: "All", icon: <FaLayerGroup /> },
    { type: "Web", icon: <FaGlobe /> },
    { type: "Game", icon: <FaGamepad /> },
    { type: "Android", icon: <FaAndroid /> },
    { type: "Systems & Graphics", icon: <FaCube /> },
    { type: "Open Source", icon: <FaGithub /> },
  ];

  const filteredProjects =
    filter === "All"
      ? projectsData
      : projectsData.filter((p) => p.type === filter);

  return (
    <section
      id="projects"
      className="relative py-28 px-6 text-white
                 bg-gradient-to-b from-[#020617] via-[#020617] to-[#030712]"
    >
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none
                   bg-[radial-gradient(circle_at_70%_20%,rgba(59,130,246,0.10),transparent_40%)]"
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-4 text-blue-400">
            Selected Work
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A focused selection of projects across games, systems, and software
          </p>
        </div>

        {/* Filters */}
        <div className="flex justify-center gap-3 mb-14 flex-wrap">
          {filters.map(({ type, icon }) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-5 py-2.5 rounded-full flex items-center gap-2
                text-sm font-medium transition-all
                ${
                  filter === type
                    ? "bg-blue-600 text-white shadow-[0_0_25px_rgba(59,130,246,0.5)]"
                    : "bg-[#020617]/70 text-gray-300 hover:bg-[#020617]"
                }`}
            >
              <span className="text-base">{icon}</span>
              {type}
            </button>
          ))}
        </div>

        {/* Count */}
        <p className="text-center text-sm text-gray-500 mb-10">
          Showing{" "}
          <span className="text-blue-400 font-semibold">
            {filteredProjects.length}
          </span>{" "}
          projects
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProjects.map((project, idx) => (
            <article
              key={idx}
              className="group relative flex flex-col
                         bg-[#0f172a] backdrop-blur-md
                         border border-white/10
                         rounded-2xl overflow-hidden
                         shadow-[0_10px_40px_rgba(0,0,0,0.8)]
                         hover:-translate-y-1
                         hover:shadow-[0_25px_70px_rgba(59,130,246,0.4)]
                         transition-all"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover
                             transition-transform duration-700
                             group-hover:scale-105"
                />

                <div
                  className="absolute inset-0 bg-gradient-to-t
                             from-black/90 via-black/50 to-transparent"
                />

                {/* Status */}
                <div className="absolute top-4 right-4">
                  <span
                    className={`px-3 py-1.5 rounded-full text-xs font-semibold
                      ${
                        project.status?.toLowerCase() === "completed"
                          ? "bg-green-500/80 text-green-100"
                          : "bg-yellow-500/80 text-yellow-100"
                      }`}
                  >
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3
                  className="text-xl font-semibold text-white/90 mb-2
                             group-hover:text-blue-400 transition-colors"
                >
                  {project.title}
                </h3>

                <p className="text-xs text-gray-500 mb-4">{project.timeline}</p>

                <p className="text-gray-200 text-sm leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Tags */}
                {project.tags?.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 rounded-lg text-xs font-medium
                                   bg-blue-500/15 text-blue-200
                                   border border-blue-500/30"
                      >
                        {tag.icon && <span className="mr-1">{tag.icon}</span>}
                        {tag.label}
                      </span>
                    ))}
                  </div>
                )}

                {/* GitHub button */}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto flex items-center justify-center gap-2
                               px-4 py-2.5 rounded-lg
                               bg-blue-600/90 text-white
                               shadow-[0_4px_20px_rgba(59,130,246,0.35)]
                               hover:bg-blue-600
                               hover:shadow-[0_6px_30px_rgba(59,130,246,0.5)]
                               transition-all"
                  >
                    <FaGithub />
                    View on GitHub
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-24 text-gray-400">
            <div className="text-5xl mb-4">⌘</div>
            <p>No projects under this filter</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
