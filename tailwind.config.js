/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./hooks/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Executive Confidence Palette
        executive: {
          navy: '#0A1628',      // Deep Navy - Primary
          'navy-light': '#1E3A5F', // Trust Blue
          'navy-dark': '#050A14',  // Darker variant
          gold: '#D4AF37',      // Rich Gold - Premium accent
          'gold-light': '#E6C658', // Lighter gold
          'gold-muted': '#B8941C', // Deeper gold
        },
        slate: {
          50: '#F8F9FA',
          100: '#F1F3F5',
          200: '#E5E8EB',
          300: '#D1D6DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
        neutral: {
          cream: '#FAFAF9',
          pearl: '#F7F6F3',
          stone: '#E8E6E1',
        },
        trust: {
          blue: '#1E3A5F',
          'blue-hover': '#2B4C7D',
          'blue-light': '#3B5E8B',
        },
        status: {
          success: '#2E7D32',  // Muted green
          warning: '#ED6C02',  // Muted orange
          error: '#C62828',    // Muted red
        },
        // Legacy compatibility
        cosmic: {
          void: '#0A1628',
          deep: '#050A14',
          medium: '#1E3A5F',
          light: '#2B4C7D',
        },
        navy: {
          primary: '#0A1628',
          light: '#1E3A5F',
          deep: '#050A14',
        },
        'accent-blue': '#1E3A5F',
        'muted-foreground': '#6B7280',
      },
      animation: {
        // Professional animations - subtle and sophisticated
        'fade-in': 'fadeIn 0.6s ease-out',
        'fade-in-up': 'fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-in': 'slideIn 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'reveal-left': 'revealLeft 0.8s ease-out',
        'reveal-right': 'revealRight 0.8s ease-out',
        // Subtle continuous animations
        'gentle-pulse': 'gentlePulse 3s ease-in-out infinite',
        'subtle-float': 'subtleFloat 6s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        // Legacy support
        'float': 'subtleFloat 6s ease-in-out infinite',
        'pulse-slow': 'gentlePulse 4s ease-in-out infinite',
        'gradient': 'gradient 8s ease infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        revealLeft: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        revealRight: {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        gentlePulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        subtleFloat: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        md: '12px',
        lg: '16px',
        xl: '24px',
        '2xl': '32px',
      },
      boxShadow: {
        'elegant-sm': '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
        'elegant-md': '0 3px 6px rgba(0, 0, 0, 0.15), 0 2px 4px rgba(0, 0, 0, 0.12)',
        'elegant-lg': '0 10px 25px rgba(0, 0, 0, 0.15), 0 5px 10px rgba(0, 0, 0, 0.08)',
        'elegant-xl': '0 20px 40px rgba(0, 0, 0, 0.15)',
        'gold-glow': '0 0 20px rgba(212, 175, 55, 0.15)',
        'premium': '0 8px 32px rgba(10, 22, 40, 0.12)',
      },
      borderRadius: {
        'sharp': '4px',
        'small': '6px',
        'medium': '8px',
        'soft': '12px',
      },
      spacing: {
        'cosmic': '3rem',
        'stellar': '4rem',
        'galactic': '6rem',
      },
      letterSpacing: {
        'cosmic': '0.05em',
        'stellar': '0.1em',
        'tight2': '-0.02em',
        'tight1': '-0.01em',
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Monaco', 'Consolas', 'monospace'],
      },
      lineHeight: {
        'h1': '1.25',   // Safe floor for H1
        'h2': '1.375',  // Safe floor for H2/H3
        'body': '1.7',  // Optimal for body text
        'tight': '1.25',
        'snug': '1.375',
      },
      transitionTimingFunction: {
        'cosmic': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        executive: {
          "primary": "#0A1628",
          "secondary": "#D4AF37",
          "accent": "#1E3A5F",
          "neutral": "#374151",
          "base-100": "#FAFAF9",
          "info": "#1E3A5F",
          "success": "#2E7D32",
          "warning": "#ED6C02",
          "error": "#C62828",
        },
      },
    ],
  },
}