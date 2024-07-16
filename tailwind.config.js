/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        switzer: ['"Switzer"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "custom-blue": "#2D68FE",
        "custom-blue-100": "#DDEAFF",
        "custom-blue-500": "#2F67FF",
        "custom-blue-600": "#0C37FF",
        "custom-blue-grey-50": "#F8FAFC",
        "custom-blue-grey-300": "#CBD5E1",
        "custom-blue-grey-400": "#94A3B8",
        "custom-blue-grey-500": "#64748B",
        "custom-blue-grey-550": "#667C8A",
        "custom-blue-grey-600": "#475569",
        "custom-blue-grey-700": "#334155",
        "custom-white": "#fff",
        "custom-black": "#000",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
