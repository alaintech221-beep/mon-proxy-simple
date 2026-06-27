const http = require('http');
const httpProxy = require('http-proxy');

const proxy = httpProxy.createProxyServer({
  target: 'http://84.17.50.102',
  changeOrigin: true
});

const server = http.createServer((req, res) => {
  proxy.web(req, res);
});

server.listen(process.env.PORT || 3000);
