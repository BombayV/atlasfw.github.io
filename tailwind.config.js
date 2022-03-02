module.exports = {
  purge: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        fade: {
          "0%": { opacity: 0, transform: "translateY(-50px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        side: {
          "0%": { opacity: 0, transform: "translateY(50px)" },

          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      height: {
        custom: "94%",
      },
      animation: {
        fade: "fade 1.5s ease-out",
        side: "side 1.5s ease-out",
      },
      fontSize: {
        main: "20em",
      },
      fontFamily: {
        spline: "'Spline Sans', sans-serif",
      },
      textShadow: {
        black: "1px 1px black",
        white: "1px 1px grey",
        title: "4px 4px black",
      },
      ringWidth: {
        3: "3px",
      },
      bottom: {
        test: "21.25rem",
      },
      width: {
        144: "36rem",
      },
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
        "atl-10": "#101b23",
        "atl-11": "#888888",
        "atl-12": "#020f1a",
        "atl-13": "#101821",
      },
    },
  },
  variants: {
    scrollbar: ["dark"],
    extend: {},
  },
  plugins: [require("tailwindcss-textshadow"), require("tailwind-scrollbar")],
};
