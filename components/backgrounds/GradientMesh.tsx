import React from 'react';
import { motion } from 'framer-motion';

export const GradientMesh: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Main gradient layer */}
      <motion.div 
        className="absolute inset-0 opacity-20"
        animate={{
          background: [
            'radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 20%, rgba(147, 51, 234, 0.3) 0%, transparent 50%)',
            'radial-gradient(circle at 50% 50%, rgba(236, 72, 153, 0.3) 0%, transparent 50%)',
            'radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)'
          ]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      {/* Secondary moving gradient */}
      <motion.div 
        className="absolute inset-0 opacity-10"
        animate={{
          background: [
            'radial-gradient(circle at 80% 50%, rgba(34, 211, 238, 0.3) 0%, transparent 60%)',
            'radial-gradient(circle at 20% 50%, rgba(251, 191, 36, 0.3) 0%, transparent 60%)',
            'radial-gradient(circle at 50% 20%, rgba(129, 140, 248, 0.3) 0%, transparent 60%)',
            'radial-gradient(circle at 80% 50%, rgba(34, 211, 238, 0.3) 0%, transparent 60%)'
          ]
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      {/* Subtle noise overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
};