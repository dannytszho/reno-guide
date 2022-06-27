module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    ...(process.env.NODE_ENV === 'production'
      ? {
          '@fullhuman/postcss-purgecss': {
            // Added Sections Folder And Changed Extension To Jsx
            Content: [
              'src/**/*.{js,ts,jsx,tsx}',
              '../../packages/ui/**/*.{js,ts,jsx,tsx}',
              '../storybook/stories/**/*.{js,ts,jsx,tsx}',
            ],
            DefaultExtractor: Content => Content.match(/[\w-/:]+(?<!:)/g) || [],
          },
        }
      : {}),
  },
}
