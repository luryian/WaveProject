/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,tsx,ts}"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
    require('@tailwindcss/forms'),
  ],
  daisyui: {
    themes: ["light"],
  }
}

