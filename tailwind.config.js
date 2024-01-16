/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#000",
        white: "#fff",
        gray: {
          "100": "rgba(255, 255, 255, 0.5)",
          "200": "rgba(0, 0, 0, 0.01)",
          "300": "rgba(255, 255, 255, 0.6)",
        },
        darkslategray: "#444",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
      },
      borderRadius: {
        xl: "20px",
      },
    },
    fontSize: {
      xs: "12px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
