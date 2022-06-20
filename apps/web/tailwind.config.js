/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'src/**/*.{js,ts,jsx,tsx}',
    '../../packages/ui/**/*.{js,ts,jsx,tsx}',
    '../storybook/stories/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      iceland: ['Iceland'],
    },
    extend: {},
  },
  plugins: [],
}
