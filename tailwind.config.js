module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === "production",
    content: ["./src/**/*.html", "./**/*.tsx"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      borderWidth: {
        3: "3px",
      },
      margin: {
        "3px": "3px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
