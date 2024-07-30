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
        "custom-blue-dark": "#3030B8",
        "custom-blue-dark-150": "#DCDCF5",
        "custom-blue": "#2D68FE",
        "custom-blue-50": "#E8F5FF",
        "custom-blue-100": "#DDEAFF",
        "custom-blue-120": "#E2E8F0",
        "custom-blue-150": "#D5EBFF",
        "custom-blue-200": "#B3D8FF",
        "custom-blue-250": "#B2D6FF",
        "custom-blue-300": "#CCDFFF",
        "custom-blue-400": "#5692FF",
        "custom-blue-500": "#2F67FF",
        "custom-blue-600": "#0C37FF",
        "custom-blue-grey-50": "#F8FAFC",
        "custom-blue-grey-300": "#CBD5E1",
        "custom-blue-grey-350": "#D6DAE0",
        "custom-blue-grey-400": "#94A3B8",
        "custom-blue-grey-500": "#64748B",
        "custom-blue-grey-550": "#667C8A",
        "custom-blue-grey-600": "#475569",
        "custom-blue-grey-700": "#334155",
        "custom-blue-grey-800": "#1E293B",
        "custom-white": "#fff",
        "custom-white-100": "#FBFCFD",
        "custom-black": "#000",
        "custom-grey": "#E5EBEF",
        "custom-green-100": "#DCF4DC",
        "custom-green-500": "#30B830",
        "custom-green-600": "#239923",
        "custom-red": "#B8303D",
        "custom-red-100": "#FFDEE1",
        "custom-orange": "#FCA70A",
        "custom-orange-50": "#FFFBEA",
        "custom-orange-400": "#FFC71E",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("tailwind-scrollbar")],
};
