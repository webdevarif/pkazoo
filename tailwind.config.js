module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'open-sans': ['Open Sans', 'sans-serif']
      },
      colors: {
        red: {
          500: '#E44C4D',
          600: '#E12527',
        },
        'icon-gray': '#8E8E93',
        'soft-red': '#E44C4D',
        'dark-red': '#E12527',
      }
    },
  },
  plugins: [],
}