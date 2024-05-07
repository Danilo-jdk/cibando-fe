const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'http://localhost:8080/api',
            changeOrigin: true
        })
    );
};

// module.exports = function(app) {
//     app.use(
//       '/api',
//       createProxyMiddleware({
//         target: 'http://localhost:8080',
//         changeOrigin: true,
//       })
//     );  
//   };

// const { createProxyMiddleware } = require('http-proxy-middleware');
// const proxy = {
//     target: 'http://localhost:8080',
//     changeOrigin: true
// }
// module.exports = function(app) {
//   app.use(
//     '/api',
//     createProxyMiddleware(proxy)
//   );
// };


// const { createProxyMiddleware } = require('http-proxy-middleware');

// module.exports = function(app) {
//   app.use('/api', (req, res, next) => {
//     console.log('Proxying:', req.url);
//     next();
//   },
//   createProxyMiddleware({
//     target: 'http://localhost:8080',
//     changeOrigin: true
//   }));
// };

// const { createProxyMiddleware } = require('http-proxy-middleware');

// module.exports = function(app) {
//   app.use('/api', (req, res, next) => {
//     console.log('Proxying:', req.url, 'to', 'http://localhost:8080' + req.url);
//     next();
//   });

//   app.use(
//     '/api',
//     createProxyMiddleware({
//       target: 'http://localhost:8080',
//       changeOrigin: true,
//       pathRewrite: {
//         '^/api': '' // Assicurati che questo rewrite sia necessario/corretto.
//       },
//       onProxyReq: (proxyReq, req, res) => {
//         console.log('Proxy Request Headers:', proxyReq.getHeaders());
//       }
//     })
//   );
// };


// const { createProxyMiddleware } = require('http-proxy-middleware');

// module.exports = function(app) {
//   app.use('/api', (req, res, next) => {
//     console.log('Proxying:', req.url, 'to', `http://localhost:8080/api${req.url}`);
//     next();
//   });

//   app.use('/api', createProxyMiddleware({
//     target: 'http://localhost:8080/api',
//     changeOrigin: true,
//     pathRewrite: {
//       '^/api': '/api', // Assicurati che questo sia necessario. Potrebbe non essere richiesto se "/api" è già corretto.
//     },
//     logLevel: 'debug', // Questa opzione ti aiuterà a vedere cosa succede con il proxy nel log.
//     onProxyReq: (proxyReq, req, res) => {
//       console.log(`[Proxy] Request to: ${proxyReq.path}`);
//     },
//     onProxyRes: (proxyRes, req, res) => {
//       console.log(`[Proxy] Response from: ${req.url} with status ${proxyRes.statusCode}`);
//     },
//     onError: (err, req, res) => {
//       console.error(`[Proxy] Error: ${err.message}`);
//     }
//   }));
// };

