module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: (theme) => ({
      ...theme("colors"),
      primary: "#2E7EFA",
      "dark-blue": "#3210BC",
      orange: "#EF4D1E",
      "gray-light": "#E3E3E3",
      "tooltip-green": "#CDD500",
    }),
    borderWidth: {
      3: "3px",
    },

    borderColor: (theme) => ({
      ...theme("colors"),
      primary: "#2E7EFA",
      secondary: "#E94927",
      "tooltip-green": "#CDD500",
    }),
    textColor: (theme) => ({
      ...theme("colors"),
      primary: "#3210BE",
      secondary: "#FFF8F8",
      orange: "#EF4D1E",
    }),
    fontSize: {
      base: "1.5rem",
      heading: "5rem",
      "5xl": "2rem",
      xl: "3.1875rem",
    },
    gradientColorStops: (theme) => ({
      ...theme("colors"),
      "green-apartment-fade": "#E4F5F0",
      "green-apartment": "#00D896",
    }),
    extend: {
      backgroundImage: (theme) => ({
        "header1-image": "url( 'photos/header1.png')",
        "header2-image": "url( 'photos/header2.jpg')",
        "apartment-image": "url('photos/apartment.png')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
