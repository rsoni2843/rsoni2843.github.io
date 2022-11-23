module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      primary: "Quicksand",
      body: "Josefin Sans",
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        lg: "3rem",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      colors: {
        primary: "rgb(94, 191, 243)",
        secondary: "rgb(94, 191, 243)",
        tertiary: "rgb(75, 172, 224)",
        accent: {
          DEFAULT: "black",
          hover: "rgb(36, 35, 35)",
        },
        paragraph: "black",
      },
    },
  },
  plugins: [],
};
