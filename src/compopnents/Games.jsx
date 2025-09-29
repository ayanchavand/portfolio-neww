import { FaGithub, FaUnity, FaGamepad } from "react-icons/fa";

const gamesData = [
  {
    title: "2D Party Platformer",
    description: "Fast-paced competitive platformer with unique party mechanics. Multiplayer-ready!",
    image: "platformerGif",
    github: "https://github.com/ayanchavand/2d-party-platformer",
    timeline: "Apr 2025 - May 2025",
    status: "Completed",
    tags: [
      { label: "Platformer", icon: <FaGamepad /> },
      { label: "Multiplayer", icon: <FaGamepad /> },
      { label: "Unity", icon: <FaUnity /> },
    ],
  },
  {
    title: "FPS Parkour Game",
    description: "First-person parkour game with fluid movement and combat systems inspired by retro games.",
    image: "fpsGif",
    github: "https://github.com/ayanchavand/fps-parkour",
    timeline: "Jan 2025 - Mar 2025",
    status: "Completed",
    tags: [
      { label: "FPS", icon: <FaGamepad /> },
      { label: "Parkour", icon: <FaGamepad /> },
      { label: "Unity", icon: <FaUnity /> },
    ],
  },
];

const Games = () => {
  return (
    <section id="games" className="py-20 px-6 bg-gradient-to-r from-purple-100 to-pink-100">
      <h2 className="text-4xl font-bold text-center mb-12">My Games</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {gamesData.map((game, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform cursor-pointer">
            <img
              src={game.image}
              alt={game.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-6 flex flex-col gap-3">
              <h3 className="text-2xl font-semibold">{game.title}</h3>
              <p className="text-gray-500 text-sm">
                <span className="font-semibold">Timeline:</span> {game.timeline}
              </p>
              <p className="text-gray-500 text-sm">
                <span className="font-semibold">Status:</span> {game.status}
              </p>
              <p className="text-gray-700">{game.description}</p>

              <div className="flex flex-wrap gap-2 mt-2">
                {game.tags.map((tag, tagIdx) => (
                  <span key={tagIdx} className="bg-purple-100 text-purple-800 text-xs font-semibold px-2 py-1 rounded-full flex items-center gap-1">
                    {tag.icon && <span className="text-sm">{tag.icon}</span>}
                    {tag.label}
                  </span>
                ))}
              </div>

              <div className="mt-4 flex justify-between items-center">
                <a href={game.github} target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-black text-2xl">
                  <FaGithub />
                </a>
                <a href={game.github} className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition">
                  View Game
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Games;
