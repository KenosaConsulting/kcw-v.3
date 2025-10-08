// Cosmic-themed Button component with stellar effects
import * as React from 'react';
import { cn } from '../../lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost' | 'link' | 'cosmic' | 'aurora';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  asChild?: boolean;
  glow?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'default', asChild = false, glow = false, children, ...props }, ref) => {
    
    const baseClasses = 'relative inline-flex items-center justify-center font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-stellar-blue disabled:pointer-events-none disabled:opacity-50 touch-manipulation min-h-[44px] overflow-hidden';
    
    const variantClasses: { [key: string]: string } = {
      default: 'bg-gradient-to-r from-stellar-blue to-nebula-violet text-chrome-white border border-stellar-blue/20 rounded-medium hover:shadow-glow-md hover:scale-[1.02] hover:border-aurora-cyan/30',
      outline: 'border border-stellar-blue/30 bg-cosmic-void/40 backdrop-blur-sm text-stellar-light rounded-medium hover:bg-stellar-blue/10 hover:border-aurora-cyan/50 hover:shadow-glow-sm',
      ghost: 'text-chrome-silver hover:text-chrome-white hover:bg-cosmic-medium/50 rounded-sharp backdrop-blur-sm',
      link: 'text-aurora-cyan underline-offset-4 hover:text-stellar-light hover:underline p-0 min-h-0',
      cosmic: 'stellar-button bg-gradient-to-r from-stellar-blue/80 to-nebula-violet/60 text-chrome-white rounded-medium hover:from-stellar-blue to-nebula-light',
      aurora: 'bg-gradient-to-r from-aurora-cyan/20 via-nebula-violet/20 to-aurora-pink/20 border border-aurora-cyan/30 text-chrome-white backdrop-blur-md rounded-medium hover:shadow-aurora hover:border-aurora-cyan/50',
    };

    const sizeClasses: { [key: string]: string } = {
      default: 'h-11 px-6 py-2 text-sm',
      sm: 'h-9 px-4 text-xs rounded-sharp',
      lg: 'h-12 px-8 text-base rounded-medium',
      icon: 'h-11 w-11 rounded-sharp',
    };

    const glowClasses = glow ? 'shadow-glow-sm hover:shadow-glow-lg' : '';

    const computedClassName = cn(
      baseClasses,
      variantClasses[variant],
      sizeClasses[size],
      glowClasses,
      className
    );
    
    if (asChild && React.Children.count(children) > 0) {
      const child = React.Children.only(children);
      if (React.isValidElement(child)) {
        return React.cloneElement(child as React.ReactElement<any>, {
          ref,
          className: cn(computedClassName, (child.props as { className?: string }).className),
          ...props,
        });
      }
    }

    return (
      <button className={computedClassName} ref={ref} {...props}>
        {/* Cosmic hover effect overlay */}
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-chrome-white/10 to-transparent -translate-x-full transition-transform duration-700 group-hover:translate-x-full" />
        <span className="relative z-10">{children}</span>
      </button>
    );
  }
);
Button.displayName = 'Button';

export { Button };