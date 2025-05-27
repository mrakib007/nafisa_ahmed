/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary color palette based on #f6d0a8
        primary: {
          50: '#fefcf9',
          100: '#fdf8f1',
          200: '#fbf0e3',
          300: '#f8e7d4',
          400: '#f6d0a8', // Main color #f6d0a8
          500: '#f4c794',
          600: '#f2be80',
          700: '#f0b56c',
          800: '#eeac58',
          900: '#eca344',
          950: '#ea9a30',
        },
        // Secondary color palette (slightly darker variants)
        secondary: {
          50: '#faf7f2',
          100: '#f5efe5',
          200: '#ebdfcb',
          300: '#e1cfb1',
          400: '#d7bf97',
          500: '#cdaf7d',
          600: '#c39f63',
          700: '#b98f49',
          800: '#af7f2f',
          900: '#a56f15',
          950: '#8b5f12',
        },
        // Accent color palette (warmer variants)
        accent: {
          50: '#fdf9f4',
          100: '#fbf3e9',
          200: '#f7e7d3',
          300: '#f3dbbd',
          400: '#efcfa7',
          500: '#ebc391',
          600: '#e7b77b',
          700: '#e3ab65',
          800: '#df9f4f',
          900: '#db9339',
          950: '#d78723',
        },
        // Dark variants for backgrounds
        dark: {
          50: '#f9f7f4',
          100: '#f3efe8',
          200: '#e7dfd1',
          300: '#dbcfba',
          400: '#cfbfa3',
          500: '#c3af8c',
          600: '#b79f75',
          700: '#ab8f5e',
          800: '#9f7f47',
          900: '#936f30',
          950: '#7a5c28',
        },
        // Text color based on #0b2a2b
        textColor: {
          primary: '#0b2a2b',
          light: '#1a4a4b',
          lighter: '#2a6a6b',
        },
        // Artistic gold accent
        gold: {
          50: '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#facc15',
          500: '#eab308',
          600: '#ca8a04',
          700: '#a16207',
          800: '#854d0e',
          900: '#713f12',
          950: '#422006',
        },
        // Dark teal theme for other pages
        teal: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
          950: '#0b2a2b', // Main dark teal color
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
        mono: ['Roboto Mono', 'monospace'],
        script: ['Dancing Script', 'cursive'],
        fancy: ['Great Vibes', 'cursive'],
        elegant: ['Allura', 'cursive'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-in-out',
        'slide-down': 'slideDown 0.5s ease-in-out',
        'slide-in-right': 'slideInRight 0.5s ease-in-out',
        'slide-in-left': 'slideInLeft 0.5s ease-in-out',
        'zoom-in': 'zoomIn 0.5s ease-in-out',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        zoomIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
    },
  },
  plugins: [],
}
