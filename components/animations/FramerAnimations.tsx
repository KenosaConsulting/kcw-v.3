import React, { ReactNode } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface AnimationProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

interface SlideInProps extends AnimationProps {
  direction?: 'left' | 'right' | 'up' | 'down';
}

export const FadeIn: React.FC<AnimationProps> = ({ 
  children, 
  delay = 0, 
  duration = 0.5,
  className = '',
  ...props 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export const SlideIn: React.FC<SlideInProps> = ({ 
  children, 
  direction = 'left',
  delay = 0, 
  duration = 0.5,
  className = '',
  ...props 
}) => {
  const directionOffset = {
    left: { x: -100, y: 0 },
    right: { x: 100, y: 0 },
    up: { x: 0, y: -100 },
    down: { x: 0, y: 100 },
  };

  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        ...directionOffset[direction] 
      }}
      animate={{ 
        opacity: 1, 
        x: 0, 
        y: 0 
      }}
      transition={{ 
        delay, 
        duration,
        type: "spring",
        stiffness: 100 
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export const ScaleIn: React.FC<AnimationProps> = ({ 
  children, 
  delay = 0, 
  duration = 0.5,
  className = '',
  ...props 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ 
        delay, 
        duration,
        type: "spring",
        stiffness: 100
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export const RotateIn: React.FC<AnimationProps> = ({ 
  children, 
  delay = 0, 
  duration = 0.5,
  className = '',
  ...props 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, rotate: -180 }}
      animate={{ opacity: 1, rotate: 0 }}
      transition={{ delay, duration }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export const StaggerChildren: React.FC<{
  children: ReactNode;
  staggerDelay?: number;
  className?: string;
}> = ({ children, staggerDelay = 0.1, className = '' }) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const StaggerChild: React.FC<AnimationProps> = ({ 
  children, 
  className = '',
  ...props 
}) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};