const { defineConfig } = require('vite');
const path = require('path');

module.exports = defineConfig({
  base: '/meu_portifolio/',
  root: __dirname,
  publicDir: false,
  server: {
    port: 3000,
  },
  build: {
    outDir: path.resolve(__dirname, 'dist'),
    emptyOutDir: true,
  },
});
