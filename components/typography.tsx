import { cn } from "@/lib/cn";

// Standardized Typography Components
// Following expert's recommendations:
// - H1: leading-tight (1.25) minimum
// - H2/H3: leading-snug (1.375)
// - Body: 1.7 for readability
// - All gradient headings must use .descender-safe

export const H1 = ({ className = "", ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h1
    {...props}
    className={cn(
      "font-serif font-bold tracking-[-0.02em] leading-tight",
      "text-5xl md:text-6xl lg:text-7xl",
      className
    )}
  />
);

export const H2 = ({ className = "", ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h2
    {...props}
    className={cn(
      "font-serif font-semibold tracking-[-0.01em] leading-snug",
      "text-3xl md:text-4xl lg:text-5xl",
      className
    )}
  />
);

export const H3 = ({ className = "", ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h3
    {...props}
    className={cn(
      "font-serif font-semibold tracking-[-0.01em] leading-snug",
      "text-2xl md:text-3xl",
      className
    )}
  />
);

export const H4 = ({ className = "", ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h4
    {...props}
    className={cn(
      "font-sans font-semibold tracking-[-0.01em] leading-snug",
      "text-xl md:text-2xl",
      className
    )}
  />
);

export const Lead = ({ className = "", ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
  <p
    {...props}
    className={cn(
      "text-xl leading-relaxed text-slate-600",
      className
    )}
  />
);

export const Body = ({ className = "", ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
  <p
    {...props}
    className={cn(
      "text-base leading-[1.7] text-slate-700",
      className
    )}
  />
);

export const Small = ({ className = "", ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
  <p
    {...props}
    className={cn(
      "text-sm leading-[1.6] text-slate-600",
      className
    )}
  />
);

// Layout Components
export const Section = ({ className = "", ...props }: React.HTMLAttributes<HTMLElement>) => (
  <section
    {...props}
    className={cn(
      "py-16 md:py-20 lg:py-24",
      className
    )}
  />
);

export const Container = ({ className = "", ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    {...props}
    className={cn(
      "max-w-7xl mx-auto px-6 md:px-12 lg:px-20",
      className
    )}
  />
);

// Stack Components for consistent spacing
export const Stack = ({ className = "", ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    {...props}
    className={cn(
      "space-y-6",
      className
    )}
  />
);

export const SectionStack = ({ className = "", ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    {...props}
    className={cn(
      "space-y-10",
      className
    )}
  />
);
