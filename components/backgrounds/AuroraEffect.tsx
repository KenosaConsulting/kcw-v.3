import React from 'react';
import { motion } from 'framer-motion';

export const AuroraEffect: React.FC = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Aurora curtains */}
      <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="aurora1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(34, 211, 238, 0.2)" />
            <stop offset="50%" stopColor="rgba(147, 51, 234, 0.1)" />
            <stop offset="100%" stopColor="rgba(59, 130, 246, 0)" />
          </linearGradient>
          <linearGradient id="aurora2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(236, 72, 153, 0.2)" />
            <stop offset="50%" stopColor="rgba(129, 140, 248, 0.1)" />
            <stop offset="100%" stopColor="rgba(34, 211, 238, 0)" />
          </linearGradient>
          <filter id="blur">
            <feGaussianBlur in="SourceGraphic" stdDeviation="40" />
          </filter>
        </defs>
        
        {/* Animated aurora paths */}
        <motion.path
          d="M0,100 Q250,150 500,100 T1000,100 L1000,0 L0,0 Z"
          fill="url(#aurora1)"
          filter="url(#blur)"
          initial={{ d: "M0,100 Q250,150 500,100 T1000,100 L1000,0 L0,0 Z" }}
          animate={{ 
            d: [
              "M0,100 Q250,150 500,100 T1000,100 L1000,0 L0,0 Z",
              "M0,150 Q250,50 500,150 T1000,150 L1000,0 L0,0 Z",
              "M0,80 Q250,180 500,80 T1000,80 L1000,0 L0,0 Z",
              "M0,100 Q250,150 500,100 T1000,100 L1000,0 L0,0 Z"
            ]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.path
          d="M0,200 Q300,100 600,200 T1200,200 L1200,0 L0,0 Z"
          fill="url(#aurora2)"
          filter="url(#blur)"
          initial={{ d: "M0,200 Q300,100 600,200 T1200,200 L1200,0 L0,0 Z" }}
          animate={{ 
            d: [
              "M0,200 Q300,100 600,200 T1200,200 L1200,0 L0,0 Z",
              "M0,120 Q300,220 600,120 T1200,120 L1200,0 L0,0 Z",
              "M0,180 Q300,80 600,180 T1200,180 L1200,0 L0,0 Z",
              "M0,200 Q300,100 600,200 T1200,200 L1200,0 L0,0 Z"
            ]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </svg>
      
      {/* Glowing particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full"
          style={{
            boxShadow: '0 0 10px rgba(255, 255, 255, 0.5)',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 30}%`
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
            y: [0, -30, -60]
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeOut"
          }}
        />
      ))}
    </div>
  );
};