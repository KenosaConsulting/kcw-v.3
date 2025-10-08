import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Particle {
  id: number;
  x: number;
  y: number;
}

export const MouseTrail: React.FC = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let frameCount = 0;
    
    const handleMouseMove = (e: MouseEvent) => {
      frameCount++;
      // Only create a particle every 3 frames to limit quantity
      if (frameCount % 3 === 0) {
        const newParticle: Particle = {
          id: Date.now() + Math.random(),
          x: e.clientX,
          y: e.clientY
        };
        
        setParticles(prev => [...prev.slice(-15), newParticle]); // Keep max 15 particles
        setMousePosition({ x: e.clientX, y: e.clientY });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    // Cleanup old particles periodically
    const cleanup = setInterval(() => {
      setParticles(prev => prev.slice(-10));
    }, 1000);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(cleanup);
    };
  }, []);

  return (
    <>
      {/* Glow following cursor */}
      <motion.div
        className="fixed w-96 h-96 pointer-events-none z-0"
        animate={{
          x: mousePosition.x - 192,
          y: mousePosition.y - 192
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 200,
          mass: 0.5
        }}
      >
        <div className="w-full h-full bg-gradient-radial from-blue-500/5 via-purple-500/5 to-transparent rounded-full blur-3xl" />
      </motion.div>

      {/* Trail particles */}
      <AnimatePresence>
        {particles.map((particle, i) => (
          <motion.div
            key={particle.id}
            className="fixed pointer-events-none z-10"
            initial={{ 
              x: particle.x - 4, 
              y: particle.y - 4, 
              scale: 1, 
              opacity: 0.6 
            }}
            animate={{ 
              scale: 0,
              opacity: 0
            }}
            exit={{ 
              opacity: 0 
            }}
            transition={{ 
              duration: 1.5,
              ease: "easeOut"
            }}
          >
            <div className="relative">
              <div className="w-2 h-2 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full" />
              <div className="absolute inset-0 w-2 h-2 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full animate-ping" />
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </>
  );
};