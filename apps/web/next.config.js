const withTM = require('next-transpile-modules')(['ui'])

module.exports = withTM({
  images: {
    domains: ['photos.alltrails.com'],
  },
  reactStrictMode: true,
})
