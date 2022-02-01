module.exports = {
  purge: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    colors: {
      "atl-1": "#D8DEE6",
      "atl-2": "#DDE5ED",
      "atl-3": "#126dcc",
      "atl-4": "#244881",
      "atl-5": "#1E86FC",
      "atl-6": "#384757",
      "atl-7": "#101b23",
      "atl-8": "#1F364F",
      "atl-9": "#06121F",
      "atl-0": "#131C26",
    },
    extend: {
      fontFamily: {
        spline: "'Spline Sans', sans-serif",
      },
      textShadow: {
        black: "3px 2px black",
        white: "2px 2px white",
      },
      ringWidth: {
        3: "3px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwindcss-textshadow")],
};
