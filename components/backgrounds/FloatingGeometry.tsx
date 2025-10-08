import React from 'react';
import { motion } from 'framer-motion';

export const FloatingGeometry: React.FC = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute opacity-10"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            rotate: 0,
            scale: Math.random() * 0.5 + 0.5
          }}
          animate={{
            x: [
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth
            ],
            y: [
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight
            ],
            rotate: [0, 180, 360],
            scale: [
              Math.random() * 0.5 + 0.5,
              Math.random() * 0.8 + 0.8,
              Math.random() * 0.5 + 0.5
            ]
          }}
          transition={{
            duration: 30 + Math.random() * 20,
            repeat: Infinity,
            ease: "linear",
            delay: i * 0.2
          }}
        >
          <div 
            className="relative"
            style={{
              width: `${20 + Math.random() * 40}px`,
              height: `${20 + Math.random() * 40}px`
            }}
          >
            {/* Geometric shape */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 
                          backdrop-blur-sm transform rotate-45 rounded-sm" />
            <div className="absolute inset-2 bg-gradient-to-tr from-cyan-500/10 to-pink-500/10 
                          backdrop-blur-sm transform rotate-12 rounded-sm" />
          </div>
        </motion.div>
      ))}
    </div>
  );
};