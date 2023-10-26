const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    devServer: {
        proxy: {
            '/api/*': {
                target: 'https://groovesync.azurewebsites.net',
                ws: true,
                changeOrigin: true
            }
        }
    },
    publicPath: process.env.NODE_ENV === 'production'
        ? 'https://yellow-wave-052e89603.4.azurestaticapps.net/'
        : '/'
})
