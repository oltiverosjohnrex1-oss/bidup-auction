/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: { extend: { colors: { primary: '#EE4D2D', accent: '#FFB800' }, fontFamily: { nunito: ['Nunito', 'sans-serif'], poppins: ['Poppins', 'sans-serif'] } } },
  plugins: [],
}
