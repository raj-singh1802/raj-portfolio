/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        bg: {
          primary: '#060a0f',
          secondary: '#0c1420',
          card: '#0f1a26',
          hover: '#142030',
        },
        accent: {
          cyan: '#00d4d4',
          teal: '#00a896',
          blue: '#0077b6',
          glow: 'rgba(0, 212, 212, 0.15)',
        },
        text: {
          primary: '#e8f4f8',
          secondary: '#8fa8bc',
          muted: '#4a6070',
        },
        border: {
          subtle: 'rgba(0, 212, 212, 0.08)',
          active: 'rgba(0, 212, 212, 0.3)',
        }
      },
      backgroundImage: {
        'radial-glow': 'radial-gradient(ellipse at center, rgba(0,212,212,0.08) 0%, transparent 70%)',
      },
    },
  },
  plugins: [],
}