import { motion } from 'framer-motion';
import { useState } from 'react';
import pfp from '../assets/misc/pfp.png';
import drawingPfp from '../assets/misc/pfp-drawing.png';

const About = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  const handleMouseEnter = () => {
    if (window.innerWidth >= 768) {
      setIsFlipped(true);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth >= 768) {
      setIsFlipped(false);
    }
  };

  return (
    <section id="about" className="py-20 px-6 bg-white">
      <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Profile image with flip effect */}
        <div 
          className="w-64 h-64 flex-shrink-0 cursor-pointer"
          style={{ perspective: '1000px' }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleClick}
        >
          <motion.div
            className="relative w-full h-full"
            animate={{ rotateY: isFlipped ? 180 : 0 }}
            transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* Front side */}
            <div 
              className="absolute w-full h-full rounded-full overflow-hidden"
              style={{ backfaceVisibility: 'hidden' }}
            >
              <img 
                src={pfp} 
                alt="Ayan Chavand" 
                className="w-full h-full object-cover scale-150 translate-y-10"
              />
            </div>
            
            {/* Back side */}
            <div 
              className="absolute w-full h-full rounded-full overflow-hidden"
              style={{ 
                backfaceVisibility: 'hidden',
                transform: 'rotateY(180deg)'
              }}
            >
              <img 
                src={drawingPfp} 
                alt="Ayan Chavand - Drawing" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* Text content */}
        <div className="text-gray-800">
          <p className="mb-4">
            Hi, I'm Ayan Chavand, a third-year Computer Science student passionate about building software and designing elegant technical solutions—whether it's in game development, low-level programming, or exploring cutting-edge technologies. I enjoy creating projects that are not only functional but also immersive, engaging, and fun to interact with.
          </p>
          <p>
            I'm always learning, experimenting, and trying to push my skills further—whether it's programming, 
            designing gameplay mechanics, or just diving into new concepts. My goal is to make projects that 
            challenge me and leave an impact on anyone who interacts with them.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;