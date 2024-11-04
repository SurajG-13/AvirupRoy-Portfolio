/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        SF: ['SF Pro', 'sans-serif'],
        harmond: ['Harmond', 'sans-serif'],
        Aeonik: ['Aeonik', 'sans-serif'],
        spaceGrotesk: ['Space Grotesk', 'sans-serif'],
        jetbrainsMono: ['Jetbrains Mono', 'sans-serif'],
      },
      colors: {
        'custom-dark': '#1F1C18',
        'custom-red': '#8E0E00',
        primary: '#94c2d6',
        secondary: '#2d6882',
        secondaryGreen: '#158a64',
        accent: '#409cc4',
        accentBlue: '#3342ec',
      },
      backgroundImage: {
        'custom-image': "url('/videos/Netflix.png')",
      },
      animation: {
        shimmer: 'shimmer 2s linear infinite',
      },
      keyframes: {
        shimmer: {
          from: {
            backgroundPosition: '0 0',
          },
          to: {
            backgroundPosition: '-200% 0',
          },
        },
      },
    },
  },
  plugins: [],
};
