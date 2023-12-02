/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#f5f5f4",
        second: "#0c0a09",
        accent: "#047857",
        required: "#ef4444",
        bgMain: "#f3f4f6",
        bgPrimary: "#059669",
      },
      fontFamily: {
        main: ["Roboto"],
      },
    },
  },
  plugins: [],
};
