const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  
  app.use(
    '/manager/api',
    proxy({
      target: 'http://localhost:3000/',
      changeOrigin: true
    })
  );

};