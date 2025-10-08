import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

interface Orb {
  x: number;
  y: number;
  size: number;
  color: string;
  duration: number;
  delay: number;
}

export const FloatingOrbs: React.FC = () => {
  const orbs: Orb[] = Array.from({ length: 8 }, (_, i) => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 300 + 100,
    color: [
      'rgba(59, 130, 246, 0.1)',   // blue
      'rgba(147, 51, 234, 0.1)',   // purple
      'rgba(236, 72, 153, 0.1)',   // pink
      'rgba(34, 211, 238, 0.1)',   // cyan
      'rgba(251, 191, 36, 0.1)',   // amber
    ][i % 5],
    duration: 20 + Math.random() * 10,
    delay: i * 2
  }));

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-3xl"
          style={{
            width: `${orb.size}px`,
            height: `${orb.size}px`,
            background: `radial-gradient(circle at center, ${orb.color} 0%, transparent 70%)`,
          }}
          initial={{
            x: `${orb.x}%`,
            y: `${orb.y}%`,
          }}
          animate={{
            x: [
              `${orb.x}%`,
              `${(orb.x + 30) % 100}%`,
              `${(orb.x - 20) % 100}%`,
              `${orb.x}%`
            ],
            y: [
              `${orb.y}%`,
              `${(orb.y - 30) % 100}%`,
              `${(orb.y + 20) % 100}%`,
              `${orb.y}%`
            ],
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: orb.delay
          }}
        />
      ))}
    </div>
  );
};