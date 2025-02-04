/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/*.{tsx,js}",
    "./app/components/*.{tsx,js}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
