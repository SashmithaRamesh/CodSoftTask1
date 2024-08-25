module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        pink: { 300: "#fa669f", "300_01": "#fb679f", A100: "#fb76a9", A100_01: "#fb7fae" },
        white: { A700: "#ffffff" },
        gray: { 100: "#faeff3" },
        red: { 50: "#faeef3" },
      },
      boxShadow: { xs: "0px 4px 4px 0px #000000" },
      fontFamily: { inter: "Inter" },
      backgroundImage: { gradient: "linear-gradient(180deg, #ffffff7f,#fa669f7f)" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
