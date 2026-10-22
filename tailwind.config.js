/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          100: '#2a2a2a',
          900: '#0a0a0a',
        },
        accent: '#D95E39', // Brick Orange
        text: {
          main: '#F3F3F4',
          muted: '#A1A1AA'
        }
      },
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        sans: ['"DM Sans"', 'sans-serif'],
        mono: ['"Space Mono"', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}