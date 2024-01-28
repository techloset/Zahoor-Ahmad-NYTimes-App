/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Nunito: ["Nunito Sans", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"],
        IBM: ["IBM Plex Serif", "serif"],
      },
      boxShadow: {
        custom: "0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)",
        hover:
          "0px 10px 20px rgba(0, 0, 0, 0.19),  0px 6px 6px rgba(0, 0, 0, 0.23)",
      },
    },
  },
  plugins: [],
};
