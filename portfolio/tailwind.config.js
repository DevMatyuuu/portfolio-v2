/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        besley: ['Besley, serif'],
        kainit: ["Kainit, sans-serif"],
        poppins: ["Poppins, sans-serif"]
      },
      scale: {
        '102': '1.01'
      }
    },
  },
  plugins: [],
}