/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: { 'cover-pic': "url('https://assets.nflxext.com/ffe/siteui/vlv3/a99688ca-33c3-4099-9baa-07a2e2acb398/ca15fd28-b624-4852-8bfe-9cdd5c88475d/IN-en-20240520-popsignuptwoweeks-perspective_alpha_website_large.jpg')" },
      textShadow: {
        'default': '2px 2px 4px rgba(0, 0, 0, 0.7)',
        'md': '4px 4px 8px rgba(0, 0, 0, 0.7)',
        'lg': '6px 6px 12px rgba(0, 0, 0, 0.7)',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-shadow': {
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
        },
        '.text-shadow-md': {
          textShadow: '4px 4px 8px rgba(0, 0, 0, 0.7)',
        },
        '.text-shadow-lg': {
          textShadow: '6px 6px 12px rgba(0, 0, 0, 0.7)',
        },
      };
      addUtilities(newUtilities);
    },
  ],
}