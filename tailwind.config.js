/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "primary-light": "Nippo",
        primary: "Nippo-Medium",
        secondary: "Supreme",
      },
      backgroundImage: {
        birds: "url('/foggy-birds.png')",
      },
      colors: {
        gold: "#d4af37",
      },
    },
  },
  plugins: [],
};
