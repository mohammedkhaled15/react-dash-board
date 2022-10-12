/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "shadow-gray": "#f6f6f6",
        "text-gray": "#888A93",
        "blue-button": "#075FF1",
      },
    },
  },
  plugins: [require("daisyui")],
};
