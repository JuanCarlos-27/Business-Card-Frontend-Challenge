/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'card-1': '#FFFFFF',
        'card-2': '#F2F5F9',
        'card-3': '#111729',
        'card-4': '#677489',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'lato': ['Lato', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
