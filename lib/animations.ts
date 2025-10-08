import { Variants } from 'framer-motion';

// Common animation variants
export const fadeInUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

export const staggerContainerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const scaleInVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

export const slideInVariants = (direction: 'left' | 'right' | 'up' | 'down' = 'up'): Variants => {
  const directionOffset = {
    left: { x: -100, y: 0 },
    right: { x: 100, y: 0 },
    up: { x: 0, y: 100 },
    down: { x: 0, y: -100 },
  };

  return {
    hidden: {
      opacity: 0,
      ...directionOffset[direction],
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };
};

// Page transition variants
export const pageTransitionVariants: Variants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: 'easeOut',
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
      ease: 'easeIn',
    },
  },
};

// Hover animations
export const hoverScaleVariants = {
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  },
  tap: {
    scale: 0.95,
  },
};

export const hoverGlowVariants = {
  hover: {
    boxShadow: '0 0 25px rgba(59, 130, 246, 0.5)',
    transition: {
      duration: 0.3,
    },
  },
};

// 3D rotation variants
export const rotateInVariants: Variants = {
  hidden: {
    opacity: 0,
    rotateY: -90,
    perspective: 1000,
  },
  visible: {
    opacity: 1,
    rotateY: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

// Text animation helpers
export const textRevealVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: (i: number = 0) => ({
    opacity: 1,
    transition: {
      delay: i * 0.05,
      duration: 0.5,
    },
  }),
};

// Utility functions
export const getStaggerDelay = (index: number, baseDelay: number = 0.1): number => {
  return index * baseDelay;
};

export const getRandomDelay = (min: number = 0, max: number = 0.5): number => {
  return Math.random() * (max - min) + min;
};

// Spring configurations
export const springConfig = {
  default: {
    type: 'spring',
    stiffness: 100,
    damping: 15,
  },
  gentle: {
    type: 'spring',
    stiffness: 50,
    damping: 20,
  },
  bouncy: {
    type: 'spring',
    stiffness: 300,
    damping: 10,
  },
  stiff: {
    type: 'spring',
    stiffness: 400,
    damping: 30,
  },
};

// Scroll-triggered animations
export const scrollRevealConfig = {
  once: true,
  amount: 0.3,
  distance: '50px',
};

// Loading states
export const loadingVariants: Variants = {
  loading: {
    opacity: [0.5, 1, 0.5],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
  loaded: {
    opacity: 1,
  },
};

// Card hover effects
export const cardHoverVariants: Variants = {
  rest: {
    scale: 1,
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
  },
  hover: {
    scale: 1.05,
    boxShadow: '0 20px 40px rgba(59, 130, 246, 0.3)',
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  },
};

// Parallax configurations
export const parallaxConfig = {
  slow: { speed: 0.5, offset: 50 },
  medium: { speed: 0.8, offset: 100 },
  fast: { speed: 1.2, offset: 150 },
};

// Gradient animation
export const gradientAnimationVariants: Variants = {
  animate: {
    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: 'linear',
    },
  },
};