module.exports = {
  devServer: {
    host: 'localhost',
    open: true,
    port: 8080,
    proxy: {
      '/api': {
        target: 'http://mi.futurefe.com',
        changeOrigin: true
      }
    }
  }
}
