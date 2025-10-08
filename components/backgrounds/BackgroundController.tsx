import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface BackgroundControllerProps {
  children?: React.ReactNode;
  effects?: string[];
  intensity?: number;
}

export const BackgroundController: React.FC<BackgroundControllerProps> = ({ 
  children, 
  effects = ['gradient', 'orbs'],
  intensity = 0.5 
}) => {
  const [activeEffects, setActiveEffects] = useState<string[]>(effects);
  const [showControls, setShowControls] = useState(false);

  // Effect configurations
  const effectOptions = [
    { id: 'geometry', label: 'Floating Geometry', default: false },
    { id: 'neural', label: 'Neural Network', default: false },
    { id: 'gradient', label: 'Gradient Mesh', default: true },
    { id: 'mouse', label: 'Mouse Trail', default: false },
    { id: 'ripple', label: 'Ripple Effect', default: false },
    { id: 'orbs', label: 'Floating Orbs', default: true },
    { id: 'particles', label: 'Particle Field', default: false },
  ];

  const toggleEffect = (effectId: string) => {
    setActiveEffects(prev => 
      prev.includes(effectId) 
        ? prev.filter(e => e !== effectId)
        : [...prev, effectId]
    );
  };

  return (
    <>
      {/* Background effects container */}
      <div style={{ opacity: intensity }}>
        {children}
      </div>

      {/* Controls toggle button */}
      <motion.button
        className="fixed bottom-4 left-4 z-50 p-2 bg-black/30 backdrop-blur-md rounded-lg 
                   border border-white/10 hover:bg-black/50 transition-colors"
        onClick={() => setShowControls(!showControls)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <svg className="w-5 h-5 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      </motion.button>

      {/* Controls panel */}
      <AnimatePresence>
        {showControls && (
          <motion.div
            className="fixed bottom-16 left-4 z-50 p-4 bg-black/50 backdrop-blur-md rounded-lg 
                       border border-white/10 min-w-[200px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
          >
            <h3 className="text-white/80 text-sm font-semibold mb-3">Visual Effects</h3>
            <div className="space-y-2">
              {effectOptions.map(effect => (
                <label key={effect.id} className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={activeEffects.includes(effect.id)}
                    onChange={() => toggleEffect(effect.id)}
                    className="mr-2 rounded border-white/20 bg-white/10 text-blue-500 
                             focus:ring-blue-500 focus:ring-offset-0"
                  />
                  <span className="text-white/60 text-xs">{effect.label}</span>
                </label>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Store active effects in data attribute for parent components */}
      <div 
        id="background-effects-state" 
        data-effects={activeEffects.join(',')}
        style={{ display: 'none' }}
      />
    </>
  );
};