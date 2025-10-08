import React, { ReactNode } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { twMerge } from 'tailwind-merge';

interface GlassCardProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  className?: string;
  blur?: 'sm' | 'md' | 'lg' | 'xl';
  opacity?: number;
  hover?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = '',
  blur = 'md',
  opacity = 20,
  hover = true,
  ...motionProps
}) => {
  const blurClasses = {
    sm: 'backdrop-blur-sm',
    md: 'backdrop-blur-md',
    lg: 'backdrop-blur-lg',
    xl: 'backdrop-blur-xl',
  };

  const baseClasses = twMerge(
    'relative overflow-hidden rounded-2xl',
    `bg-white/[0.${opacity}] dark:bg-black/[0.${opacity}]`,
    blurClasses[blur],
    'border border-white/20',
    'shadow-xl',
    hover && 'transition-all duration-300 hover:bg-white/[0.25] dark:hover:bg-black/[0.25] hover:shadow-2xl hover:scale-[1.02]',
    className
  );

  return (
    <motion.div
      className={baseClasses}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      {...motionProps}
    >
      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
      
      {children}
    </motion.div>
  );
};

interface AnimatedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'glass';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  icon?: ReactNode;
  children: ReactNode;
}

export const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  variant = 'primary',
  size = 'md',
  loading = false,
  icon,
  children,
  className = '',
  disabled,
  ...props
}) => {
  const variants = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/25',
    secondary: 'bg-gray-600 hover:bg-gray-700 text-white shadow-lg shadow-gray-600/25',
    ghost: 'bg-transparent hover:bg-white/10 text-white border border-white/20',
    glass: 'bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border border-white/20',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-5 py-2.5 text-base',
    lg: 'px-7 py-3.5 text-lg',
  };

  const buttonClasses = twMerge(
    'relative overflow-hidden rounded-lg font-medium transition-all duration-300',
    'transform active:scale-95',
    'disabled:opacity-50 disabled:cursor-not-allowed',
    variants[variant],
    sizes[size],
    className
  );

  return (
    <motion.button
      className={buttonClasses}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      disabled={disabled || loading}
      {...props}
    >
      {/* Ripple effect background */}
      <motion.div
        className="absolute inset-0 bg-white/20"
        initial={{ scale: 0, opacity: 0 }}
        whileHover={{ scale: 1, opacity: 0.3 }}
        transition={{ duration: 0.4 }}
      />
      
      <span className="relative flex items-center justify-center gap-2">
        {loading ? (
          <svg
            className="animate-spin h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        ) : icon}
        {children}
      </span>
    </motion.button>
  );
};

interface FloatingPanelProps {
  children: ReactNode;
  position?: 'top' | 'bottom' | 'left' | 'right' | 'center';
  className?: string;
  animate?: boolean;
}

export const FloatingPanel: React.FC<FloatingPanelProps> = ({
  children,
  position = 'center',
  className = '',
  animate = true,
}) => {
  const positionClasses = {
    top: 'top-4 left-1/2 -translate-x-1/2',
    bottom: 'bottom-4 left-1/2 -translate-x-1/2',
    left: 'left-4 top-1/2 -translate-y-1/2',
    right: 'right-4 top-1/2 -translate-y-1/2',
    center: 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
  };

  const animationVariants = {
    initial: { 
      opacity: 0, 
      scale: 0.9,
      y: position === 'top' ? -20 : position === 'bottom' ? 20 : 0,
      x: position === 'left' ? -20 : position === 'right' ? 20 : 0,
    },
    animate: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      x: 0,
    },
  };

  const panelClasses = twMerge(
    'fixed z-50',
    positionClasses[position],
    'bg-black/40 backdrop-blur-xl',
    'border border-white/20',
    'rounded-2xl shadow-2xl',
    'p-6',
    className
  );

  if (animate) {
    return (
      <motion.div
        className={panelClasses}
        initial="initial"
        animate="animate"
        variants={animationVariants}
        transition={{ 
          duration: 0.5,
          type: "spring",
          stiffness: 100,
        }}
      >
        {children}
      </motion.div>
    );
  }

  return <div className={panelClasses}>{children}</div>;
};

interface ProgressBarProps {
  progress: number;
  label?: string;
  showPercentage?: boolean;
  color?: 'blue' | 'green' | 'yellow' | 'red' | 'purple';
  size?: 'sm' | 'md' | 'lg';
  animated?: boolean;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  label,
  showPercentage = true,
  color = 'blue',
  size = 'md',
  animated = true,
}) => {
  const colors = {
    blue: 'bg-blue-500',
    green: 'bg-green-500',
    yellow: 'bg-yellow-500',
    red: 'bg-red-500',
    purple: 'bg-purple-500',
  };

  const sizes = {
    sm: 'h-2',
    md: 'h-3',
    lg: 'h-4',
  };

  return (
    <div className="w-full">
      {(label || showPercentage) && (
        <div className="flex justify-between items-center mb-2">
          {label && <span className="text-sm text-white/80">{label}</span>}
          {showPercentage && (
            <span className="text-sm font-medium text-white">
              {Math.round(progress)}%
            </span>
          )}
        </div>
      )}
      <div className={`w-full bg-white/10 rounded-full overflow-hidden ${sizes[size]}`}>
        <motion.div
          className={`h-full ${colors[color]} rounded-full relative overflow-hidden`}
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {animated && (
            <motion.div
              className="absolute inset-0 bg-white/30"
              animate={{
                x: ['0%', '100%'],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
              }}
            />
          )}
        </motion.div>
      </div>
    </div>
  );
};