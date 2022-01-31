module.exports = {
  purge: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      "atl-1": "#D8DEE6",
      "atl-2": "#DDE5ED",
      "atl-3": "#096CD6",
      "atl-4": "#0C7DF5",
      "atl-5": "#1E86FC",
      "atl-6": "#384757",
      "atl-7": "#192838",
      "atl-8": "#1F364F",
      "atl-9": "#06121F",
      "atl-0": "#131C26",
    },
    extend: {
      fontFamily: {
        spline: "'Spline Sans', sans-serif",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
