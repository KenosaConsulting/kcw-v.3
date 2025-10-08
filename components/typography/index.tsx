import React from 'react';

// Utility function for className merging
const cn = (...classes: (string | undefined | false)[]) => {
  return classes.filter(Boolean).join(' ');
};

// H1 Component - Large headlines with fluid sizing
export const H1: React.FC<React.HTMLAttributes<HTMLHeadingElement> & { gradient?: boolean }> = ({ 
  className = "", 
  gradient = false,
  children,
  ...props 
}) => (
  <h1 
    {...props} 
    className={cn(
      "font-serif font-bold tracking-[-0.02em] leading-tight",
      "text-fluid-h1", // Uses clamp() for responsive sizing
      gradient && "text-gradient-navy descender-safe",
      className
    )}
  >
    {children}
  </h1>
);

// H2 Component - Section headers
export const H2: React.FC<React.HTMLAttributes<HTMLHeadingElement> & { gradient?: boolean }> = ({ 
  className = "", 
  gradient = false,
  children,
  ...props 
}) => (
  <h2 
    {...props} 
    className={cn(
      "font-serif font-semibold tracking-[-0.01em] leading-snug",
      "text-fluid-h2",
      gradient && "text-gradient-navy descender-safe",
      className
    )}
  >
    {children}
  </h2>
);

// H3 Component - Subsection headers
export const H3: React.FC<React.HTMLAttributes<HTMLHeadingElement> & { gradient?: boolean }> = ({ 
  className = "", 
  gradient = false,
  children,
  ...props 
}) => (
  <h3 
    {...props} 
    className={cn(
      "font-serif font-semibold tracking-[-0.01em] leading-snug",
      "text-fluid-h3",
      gradient && "text-gradient-gold descender-safe",
      className
    )}
  >
    {children}
  </h3>
);

// Lead Paragraph - Intro text
export const Lead: React.FC<React.HTMLAttributes<HTMLParagraphElement>> = ({ 
  className = "", 
  children,
  ...props 
}) => (
  <p 
    {...props} 
    className={cn(
      "text-fluid-lead leading-[1.8] text-[rgb(107,114,128)]",
      className
    )}
  >
    {children}
  </p>
);

// Body Paragraph - Standard content
export const Body: React.FC<React.HTMLAttributes<HTMLParagraphElement>> = ({ 
  className = "", 
  children,
  ...props 
}) => (
  <p 
    {...props} 
    className={cn(
      "text-base leading-[1.7] text-[rgb(107,114,128)]",
      className
    )}
  >
    {children}
  </p>
);

// Section Container - Consistent spacing
export const Section: React.FC<React.HTMLAttributes<HTMLElement>> = ({ 
  className = "", 
  children,
  ...props 
}) => (
  <section 
    {...props} 
    className={cn(
      "py-16 md:py-20 lg:py-24",
      className
    )}
  >
    {children}
  </section>
);

// Content Container - Max width and padding
export const Container: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ 
  className = "", 
  children,
  ...props 
}) => (
  <div 
    {...props} 
    className={cn(
      "max-w-7xl mx-auto px-6 md:px-12 lg:px-20",
      className
    )}
  >
    {children}
  </div>
);

// Stack - Vertical spacing utility
export const Stack: React.FC<React.HTMLAttributes<HTMLDivElement> & { spacing?: 'tight' | 'normal' | 'loose' }> = ({ 
  className = "", 
  spacing = 'normal',
  children,
  ...props 
}) => {
  const spacingClasses = {
    tight: 'space-y-4',
    normal: 'space-y-6',
    loose: 'space-y-10'
  };
  
  return (
    <div 
      {...props} 
      className={cn(
        spacingClasses[spacing],
        className
      )}
    >
      {children}
    </div>
  );
};

// Export all components
export default {
  H1,
  H2,
  H3,
  Lead,
  Body,
  Section,
  Container,
  Stack
};