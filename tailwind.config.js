/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      colors: {
        // Premium near-black base
        ink: {
          950: '#06070b',
          900: '#0a0c12',
          850: '#0e1118',
          800: '#12151e',
          700: '#1a1e2a',
          border: '#232838',
        },
        // Signature accents
        accent: {
          cyan: '#22d3ee',
          blue: '#3b82f6',
          violet: '#8b5cf6',
          gold: '#f5b942',
        },
        // Legacy dark tokens kept for compatibility
        dark: {
          bg: '#06070b',
          card: '#0e1118',
          border: '#232838',
        },
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(34,211,238,0.18), 0 0 32px -8px rgba(34,211,238,0.35)',
        'glow-violet': '0 0 0 1px rgba(139,92,246,0.18), 0 0 32px -8px rgba(139,92,246,0.4)',
        panel: '0 1px 0 0 rgba(255,255,255,0.04) inset, 0 24px 48px -24px rgba(0,0,0,0.6)',
      },
      backgroundImage: {
        'mesh-dark':
          'radial-gradient(60% 50% at 15% 0%, rgba(59,130,246,0.18) 0%, transparent 60%), radial-gradient(50% 45% at 90% 10%, rgba(139,92,246,0.16) 0%, transparent 55%), radial-gradient(45% 40% at 60% 100%, rgba(34,211,238,0.12) 0%, transparent 60%)',
        'mesh-light':
          'radial-gradient(60% 50% at 15% 0%, rgba(59,130,246,0.12) 0%, transparent 60%), radial-gradient(50% 45% at 90% 10%, rgba(139,92,246,0.1) 0%, transparent 55%), radial-gradient(45% 40% at 60% 100%, rgba(34,211,238,0.08) 0%, transparent 60%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        float: 'float 7s ease-in-out infinite',
        'float-slow': 'float 11s ease-in-out infinite',
        'mesh-drift': 'meshDrift 22s ease-in-out infinite',
        'pulse-line': 'pulseLine 3s ease-in-out infinite',
        'spin-slow': 'spin 24s linear infinite',
        shimmer: 'shimmer 1.6s linear infinite',
      },
      keyframes: {
        fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        meshDrift: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0) scale(1.05)' },
          '50%': { transform: 'translate3d(-3%, 2%, 0) scale(1.12)' },
        },
        pulseLine: {
          '0%, 100%': { opacity: '0.25' },
          '50%': { opacity: '0.9' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
      },
    },
  },
  plugins: [],
};
