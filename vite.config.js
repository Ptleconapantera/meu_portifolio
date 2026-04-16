const { defineConfig } = require('vite');
const path = require('path');

module.exports = defineConfig({
  root: path.resolve(__dirname, 'Pages/home'),
  publicDir: path.resolve(__dirname, 'Public'),
  server: {
    port: 3000,
  },
  build: {
    outDir: path.resolve(__dirname, 'dist'),
    emptyOutDir: true,
  },
});
