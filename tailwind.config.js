// tailwind.config.js
module.exports = {
  
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // Adjust this path based on your project structure
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        auto: "repeat(auto-fit, minmax(200px, 1fr))",
      },
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
        ovo: ["ovo", "serif"],
      },
      animation: {
        "slow-spin": "spin 6s linear infinite", // Adjust the duration here
      },
      colors: {
        lightHover: "#fcf4ff",
        darkHover: "2a004a",
        darkTheme: "#11001f",
      },
      boxShadow: {
        black: "4px 4px 0 #000",
        white: "4px 4px 0 #fff",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
