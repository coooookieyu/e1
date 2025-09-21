const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 8081,                       // 避开 8080
    open: true,                       // 自动开浏览器
    proxy: {                          // 把 /api 转发到 Spring Boot
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true
      }
    }
  }
})
