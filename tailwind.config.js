module.exports = {
    mode: 'jit',
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/*.html'],
    darkMode: false,
    theme: {
      extend: {
        colors: {
          primary: "#f59e0b",
          background: "#1f2937",
          overlay: "rgba(0, 0, 0, 0.5)"
        }
      }
    },
    plugins: []
  };
  