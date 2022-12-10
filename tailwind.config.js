module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],

  theme: {
    colors: {
      default: '#494959',
      white: '#FFFFFF',
      'gray-primary': '#D9D9D9',
    },
    extend: {
      keyframes: {
        'fade-in-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-10px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'fade-out-up': {
          from: {
            opacity: '1',
            transform: 'translateY(0px)',
          },
          to: {
            opacity: '0',
            transform: 'translateY(-10px)',
          },
        },
      },
      animation: {
        'fade-in-down': 'fade-in-down 0.5s ease-out',
        'fade-out-up': 'fade-out-up 0.5s ease-out',
      },
    },
  },
  plugins: [],
}
