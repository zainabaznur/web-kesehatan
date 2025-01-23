/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/**/*.html',         // Memproses semua file HTML di dalam public
    './views/**/*.html',          // Memproses semua file HTML di dalam views
    './public/js/**/*.js',        // Jika ada file JS di folder js yang menggunakan Tailwind
    './src/**/*.{js,jsx,ts,tsx}', // Jika Anda memiliki file JS/TS di folder src
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  
}
