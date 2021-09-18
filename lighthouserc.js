module.exports = {
  ci: {
    collect: {
      url: ['http://localhost:8080'],
      startServerCommand: 'yarn build && yarn start',
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
}
