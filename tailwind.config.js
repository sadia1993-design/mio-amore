module.exports = {
  content: ["./src/**/*.{js,jsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      width: {
        260: "16.25rem",
      },
      minHeight: {
        60: "60px",
      },
      height: {
        60: "60px",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
