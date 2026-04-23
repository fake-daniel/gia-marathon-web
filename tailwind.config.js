/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Pretendard', 'sans-serif'],
        display: ['Paperlogy', 'Pretendard', 'sans-serif'],
      },
      colors: {
        brand: {
          blue: '#0066FF',
          'blue-dark': '#0047B3',
          'blue-light': '#E6F0FF',
          yellow: '#FFD500',
          'yellow-dark': '#E6B800',
          'yellow-light': '#FFF9D6',
        },
        ink: {
          900: '#0A0E27',
          700: '#2D3561',
          500: '#6B7194',
          300: '#C7CBDC',
          100: '#F1F3FA',
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fadeIn 1s ease forwards',
        'slide-right': 'slideRight 25s linear infinite',
        'pulse-ring': 'pulseRing 2s cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(40px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        slideRight: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        pulseRing: {
          '0%': { transform: 'scale(0.8)', opacity: '1' },
          '100%': { transform: 'scale(2.2)', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}
