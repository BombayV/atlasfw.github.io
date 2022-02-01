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
      "atl-10": "#03202c",
      "atl-11": "#656565",
    },
    extend: {
      fontFamily: {
        spline: "'Spline Sans', sans-serif",
      },
      textShadow: {
        black: "1px 1px black",
        white: "1px 1px grey",
      },
      ringWidth: {
        3: "3px",
      },
    },
  },
  variants: {
    scrollbar: ["dark"],
    extend: {},
  },
  plugins: [require("tailwindcss-textshadow"), require("tailwind-scrollbar")],
};
