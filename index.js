const http = require('http');
const httpProxy = require('http-proxy');

const proxy = httpProxy.createProxyServer({});

const server = http.createServer((req, res) => {
  // Redirection vers ton flux spécifique
  proxy.web(req, res, { 
    target: 'http://84.17.50.102',
    changeOrigin: true 
  }, (e) => {
    res.writeHead(500);
    res.end('Erreur de proxy');
  });
});

server.listen(process.env.PORT || 3000);