import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Ripple {
  id: number;
  x: number;
  y: number;
  color: string;
}

export const RippleEffect: React.FC = () => {
  const [ripples, setRipples] = useState<Ripple[]>([]);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const colors = [
      'rgba(59, 130, 246, 0.3)',   // blue
      'rgba(147, 51, 234, 0.3)',   // purple
      'rgba(236, 72, 153, 0.3)',   // pink
      'rgba(34, 211, 238, 0.3)',   // cyan
    ];
    
    const ripple: Ripple = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      id: Date.now() + Math.random(),
      color: colors[Math.floor(Math.random() * colors.length)]
    };
    
    setRipples(prev => [...prev, ripple]);
    
    // Remove ripple after animation
    setTimeout(() => {
      setRipples(prev => prev.filter(r => r.id !== ripple.id));
    }, 3000);
  };

  return (
    <div 
      className="fixed inset-0 z-0" 
      onClick={handleClick}
      style={{ cursor: 'default' }}
    >
      <AnimatePresence>
        {ripples.map(ripple => (
          <React.Fragment key={ripple.id}>
            {/* Primary ripple */}
            <motion.div
              className="absolute rounded-full pointer-events-none"
              style={{ 
                left: ripple.x, 
                top: ripple.y,
                border: `2px solid ${ripple.color}`
              }}
              initial={{ 
                width: 0, 
                height: 0, 
                x: 0, 
                y: 0,
                opacity: 0.8
              }}
              animate={{ 
                width: 600, 
                height: 600, 
                x: -300, 
                y: -300,
                opacity: 0
              }}
              exit={{ 
                opacity: 0 
              }}
              transition={{ 
                duration: 3, 
                ease: "easeOut" 
              }}
            />
            
            {/* Secondary ripple */}
            <motion.div
              className="absolute rounded-full pointer-events-none"
              style={{ 
                left: ripple.x, 
                top: ripple.y,
                backgroundColor: ripple.color
              }}
              initial={{ 
                width: 0, 
                height: 0, 
                x: 0, 
                y: 0,
                opacity: 0.3
              }}
              animate={{ 
                width: 400, 
                height: 400, 
                x: -200, 
                y: -200,
                opacity: 0
              }}
              exit={{ 
                opacity: 0 
              }}
              transition={{ 
                duration: 2, 
                ease: "easeOut",
                delay: 0.1
              }}
            />
            
            {/* Inner ripple */}
            <motion.div
              className="absolute rounded-full pointer-events-none backdrop-blur-sm"
              style={{ 
                left: ripple.x, 
                top: ripple.y,
                backgroundColor: ripple.color
              }}
              initial={{ 
                width: 0, 
                height: 0, 
                x: 0, 
                y: 0,
                opacity: 0.5
              }}
              animate={{ 
                width: 200, 
                height: 200, 
                x: -100, 
                y: -100,
                opacity: 0
              }}
              exit={{ 
                opacity: 0 
              }}
              transition={{ 
                duration: 1.5, 
                ease: "easeOut",
                delay: 0.2
              }}
            />
          </React.Fragment>
        ))}
      </AnimatePresence>
    </div>
  );
};