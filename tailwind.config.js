module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: (theme) => ({
      ...theme("colors"),
      primary: "#2E7EFA",
      "dark-blue": "#3210BC",
      "orange":"#E94927",
      "gray-light": "#E3E3E3",
    }),
    borderWidth: {
      3: "3px",
    },

    borderColor: (theme) => ({
      ...theme("colors"),
      primary: "#2E7EFA",
      secondary: "#E94927",
    }),
    textColor: (theme) => ({
      ...theme("colors"),
      primary: "#3210BE",
      secondary: "#FFF8F8",
    }),
    fontSize: {
      base: "1.5rem",
      heading: "5rem",
      "5xl": "2rem",
    },
    extend: {
      backgroundImage: (theme) => ({
        "header1-image": "url( 'photos/header1.png')",
        "header2-image": "url( 'photos/header2.jpg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
