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
          orange: "#FF9200",
        }
      }
    },
  },
  plugins: [],
}
