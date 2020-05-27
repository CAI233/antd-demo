const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
        target: 'https://miniapp.you.163.com',
        changeOrigin: true,
        secure: false,
        pathRewrite: {
            "^/api": "/"
        },
    })
  );
};