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
        // Deep space color palette
        cosmic: {
          void: '#050515',
          deep: '#0a0a1f',
          medium: '#0f1733',
          light: '#1a1f3a',
        },
        nebula: {
          purple: '#581c87',
          violet: '#6b21a8',
          light: '#7c3aed',
        },
        stellar: {
          blue: '#3b82f6',
          cyan: '#22d3ee',
          light: '#60a5fa',
        },
        aurora: {
          cyan: '#22d3ee',
          green: '#10b981',
          pink: '#ec4899',
        },
        chrome: {
          silver: '#94a3b8',
          light: '#cbd5e1',
          white: '#f8fafc',
        },
        // Legacy navy colors for compatibility
        navy: {
          50: '#f0f4ff',
          100: '#e0e9ff',
          200: '#c7d6ff',
          300: '#a5b8ff',
          400: '#8190ff',
          500: '#1e3a8a',
          600: '#182e6e',
          700: '#152659',
          800: '#121e45',
          900: '#0f1733',
          950: '#0a0f1f',
          primary: '#0a0f1f',
          light: '#1a1f3a',
          deep: '#050515',
        },
        // Updated accent colors
        'accent-blue': '#3b82f6',
        'accent-blue-light': '#60a5fa',
        'muted-foreground': '#94a3b8',
      },
      animation: {
        // Cosmic animations
        'aurora-sweep': 'aurora-sweep 8s ease-in-out infinite',
        'cosmic-drift': 'cosmic-drift 20s ease-in-out infinite',
        'stellar-pulse': 'stellar-pulse 4s ease-in-out infinite',
        'nebula-swirl': 'nebula-swirl 30s linear infinite',
        'star-twinkle': 'star-twinkle 3s ease-in-out infinite',
        'cosmic-shimmer': 'cosmic-shimmer 2s ease-in-out infinite',
        'pulse-line': 'pulse-line 4s ease-in-out infinite',
        // Smooth transitions
        'fade-in-up': 'fadeInUp 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        'slide-in': 'slideIn 0.4s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        // Legacy animations
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'gradient': 'gradient 8s ease infinite',
      },
      keyframes: {
        'aurora-sweep': {
          '0%, 100%': { backgroundPosition: '-200% 0' },
          '50%': { backgroundPosition: '200% 0' },
        },
        'cosmic-drift': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(10px, -10px) scale(1.02)' },
          '66%': { transform: 'translate(-10px, 5px) scale(0.98)' },
        },
        'stellar-pulse': {
          '0%, 100%': { opacity: '1', filter: 'brightness(1)' },
          '50%': { opacity: '0.8', filter: 'brightness(1.2)' },
        },
        'nebula-swirl': {
          '0%': { transform: 'rotate(0deg) scale(1)' },
          '50%': { transform: 'rotate(180deg) scale(1.1)' },
          '100%': { transform: 'rotate(360deg) scale(1)' },
        },
        'star-twinkle': {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '1' },
        },
        'cosmic-shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'pulse-line': {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '0.8' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
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
        // Legacy keyframes
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
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
        'glow-sm': '0 0 20px rgba(59, 130, 246, 0.3)',
        'glow-md': '0 0 40px rgba(59, 130, 246, 0.4)',
        'glow-lg': '0 0 60px rgba(59, 130, 246, 0.5), 0 0 120px rgba(147, 51, 234, 0.3)',
        'aurora': '0 0 30px rgba(34, 211, 238, 0.3), 0 0 60px rgba(147, 51, 234, 0.2)',
        'cosmic': '0 8px 32px rgba(88, 28, 135, 0.2), inset 0 1px 0 rgba(248, 250, 252, 0.05)',
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
      },
      fontFamily: {
        sans: ['Space Grotesk', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Monaco', 'Consolas', 'monospace'],
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
        cosmic: {
          "primary": "#3b82f6",
          "secondary": "#9333ea",
          "accent": "#22d3ee",
          "neutral": "#1a1f3a",
          "base-100": "#050515",
          "info": "#60a5fa",
          "success": "#10b981",
          "warning": "#f59e0b",
          "error": "#ef4444",
        },
      },
    ],
  },
}