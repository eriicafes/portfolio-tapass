const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        product: {
          coral: "#EAF7FB",
          rose: "#FEE5E4",
          beige: "#FFF1E3",
          purple: "#F2E4FD",
          deepBlue: "#091572",
          lightBlue: "#0200B6",
          darkBlue: "#1E1147",
          orange: "#FF9200",
        }
      },
      fontFamily: {
        sans: ["'Nunito Sans'", ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
}
