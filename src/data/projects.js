import {
  FaCuttlefish,
  FaCode,
  FaServer,
  FaCube,
  FaLayerGroup,
  FaGithub
} from "react-icons/fa";

import opneGlGif from "../assets/projects/opengl-demo.gif";
import godotLogo from "../assets/projects/godotlogo.svg"
import more from "../assets/projects/more-meme.jpg";
import billy from "../assets/projects/billy.gif";
import ko from "../assets/projects/ko.gif";
import discat from "../assets/projects/discat.jpg";

export const projectsData = [
  {
    title: "OpenGL Renderer",
    description:
      "OpenGL renderer built from scratch demonstrating a deep understanding of computer graphics and the graphics pipeline.",
    image: opneGlGif,
    github: "https://github.com/ayanchavand/mini-gl-renderer",
    timeline: "Sep 2025",
    status: "In Progress",
    type: "Systems & Graphics",
    tags: [
      { label: "Systems & Graphics", icon: FaCube },
      { label: "C++", icon: FaCode },
      { label: "OOPs", icon: FaCode },
      { label: "OpenGL", icon: FaCube },
    ],
  },
  {
    title: "Billy Protocol",
    description:
      "2.5D puzzle platformer developed solo in 4 days for GMTK Game Jam 2025, ranked in the top 20%.",
    image: billy,
    github: "https://github.com/ayanchavand/billy-protocol",
    timeline: "Aug 2025",
    status: "Completed",
    type: "Game",
    tags: [
      { label: "Unity3D", icon: FaCube },
      { label: "C#", icon: FaCode },
      { label: "Game Jam", icon: FaCuttlefish },
      { label: "Puzzle", icon: FaServer },
    ],
  },
  {
    title: "K.O.",
    description:
      "A first-person parkour game inspired by One Punch Man and early PlayStation games.",
    image: ko,
    github: "https://ayanchavand.itch.io/ko",
    timeline: "Jul 2024",
    status: "Completed",
    type: "Game",
    tags: [
      { label: "Unity3D", icon: FaCube },
      { label: "C#", icon: FaCode },
      { label: "First-Person", icon: FaCube },
      { label: "Parkour", icon: FaCuttlefish },
    ],
  },
  {
    title: "DisCat",
    description:
      "Android app built with Kotlin fetching cat and dog images from multiple APIs.",
    image: discat,
    github: "https://github.com/ayanchavand/discat",
    timeline: "Jan 2024",
    status: "Completed",
    type: "Android",
    tags: [
      { label: "Kotlin", icon: FaCode },
      { label: "Android", icon: FaCube },
      { label: "API", icon: FaServer },
    ],
  },
  {
    title: "More Projects Coming Soon",
    description:
      "Stay tuned! I’m working on adding more exciting projects.",
    image: more,
    github: "#",
    timeline: "Ongoing",
    status: "In Progress",
    type: "Web",
    tags: [

    ],
  },
  {
  title: "Godot Engine – Open Source Contributions",
  description:
    "Contributed to the Godot Engine during personal time. Featured on Godot’s website for contributions in the Godot 4.3 release, including fixing editor documentation issues. Continued contributing toward the upcoming Godot 4.6 release by resolving GUI and editor bugs, improving overall editor stability and user experience.",
  image: godotLogo, // import the Godot logo or use a neutral OSS image
  github: "https://github.com/godotengine/godot",
  timeline: "2024 – Present",
  status: "Ongoing",
  type: "Open Source",
  tags: [
    { label: "Godot Engine", icon: FaCube },
    { label: "C++", icon: FaCode },
    { label: "Editor & GUI", icon: FaLayerGroup },
    { label: "Open Source", icon: FaGithub },
  ],
}

];
