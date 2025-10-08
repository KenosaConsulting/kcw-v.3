import React, { useState, useEffect } from 'react';

const AnimatedHeroText: React.FC = () => {
  const words = ["Clarity", "Intelligence", "Strategy", "Insight"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative inline-block h-[1.2em]">
      <style jsx>{`
        .word-absolute {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          transition: opacity 1s ease-in-out;
        }
        
        .word-visible {
          opacity: 1;
        }
        
        .word-hidden {
          opacity: 0;
        }
      `}</style>
      
      {words.map((word, index) => (
        <span
          key={word}
          className={`word-absolute text-gradient-gold ${
            index === currentIndex ? 'word-visible' : 'word-hidden'
          }`}
        >
          {word}
        </span>
      ))}
      
      {/* Invisible word for maintaining width */}
      <span className="invisible">
        Intelligence
      </span>
    </div>
  );
};

export default AnimatedHeroText;