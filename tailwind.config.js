// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./dist/*.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1A1A1A',  // Dark background
        accent: '#00FF99',   // Vibrant accent (for buttons, highlights)
        text: '#F5F5F5',     // Light text for readability
      },
      fontFamily: {
        sans: ['Inter', 'Roboto', 'sans-serif']
      }
    },
  },
  plugins: [],
}
