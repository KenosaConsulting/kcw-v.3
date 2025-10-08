import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'default' | 'outline';
  size?: 'default' | 'sm' | 'lg';
  asChild?: boolean;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  className = '',
  variant = 'default',
  size = 'default',
  onClick,
  asChild = false,
  ...props
}) => {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current!.getBoundingClientRect();
    const x = (clientX - left - width / 2) * 0.15;
    const y = (clientY - top - height / 2) * 0.15;
    setPosition({ x, y });
  };

  const reset = () => setPosition({ x: 0, y: 0 });

  const baseClasses = 'inline-flex items-center justify-center rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent-blue disabled:pointer-events-none disabled:opacity-50 relative overflow-hidden';
  
  const variantClasses = {
    default: 'bg-accent-blue text-white',
    outline: 'border border-accent-blue bg-transparent text-accent-blue-light'
  };

  const sizeClasses = {
    default: 'h-11 px-4 py-2',
    sm: 'h-10 rounded-md px-3',
    lg: 'h-12 rounded-md px-8 text-base'
  };

  const computedClassName = cn(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    className
  );

  if (asChild && React.Children.count(children) === 1) {
    const child = React.Children.only(children);
    if (React.isValidElement(child)) {
      return React.cloneElement(child as React.ReactElement<any>, {
        ref,
        onMouseMove: handleMouse,
        onMouseLeave: reset,
        onClick,
        className: cn(computedClassName, (child.props as any).className),
        style: {
          transform: `translate(${position.x}px, ${position.y}px)`,
          transition: 'transform 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
          ...(child.props as any).style
        },
        ...props
      });
    }
  }

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      onClick={onClick}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
      className={computedClassName}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-accent-blue to-accent-blue-light"
        initial={{ scale: 0, opacity: 0 }}
        whileHover={{ scale: 1, opacity: 0.3 }}
        transition={{ duration: 0.4 }}
      />
    </motion.button>
  );
};
