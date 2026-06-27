const http = require('http');
const httpProxy = require('http-proxy');

const proxy = httpProxy.createProxyServer({});

const server = http.createServer((req, res) => {
  // On force le proxy à rediriger vers le chemin exact de ton flux
  proxy.web(req, res, { 
    target: 'http://84.17.50.102/fox/tracks-v1a1/mono.ts.m3u8',
    changeOrigin: true
  }, (e) => {
    res.writeHead(500);
    res.end('Erreur de proxy');
  });
});

server.listen(process.env.PORT || 3000);
