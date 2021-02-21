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
      backgroundColor: {
        "light-gray": "#f0f2f5",
      },
      textColor: {
        primary: "#050505",
      },
      borderColor: {
        "light-gray": "#f0f2f5",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
