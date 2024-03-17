const http = require('http');
const target_ip = '18.191.213.254'; 
const port = 3000;

const server = http.createServer((req, res) => {
  const options = {
    hostname: target_ip,
    port: 3000,
    path: req.url,
    method: req.method,
    headers: req.headers
  };

  const proxyReq = http.request(options, (proxyRes) => {
    res.writeHead(proxyRes.statusCode, proxyRes.headers);
    proxyRes.pipe(res, { end: true }); 
  });

  req.pipe(proxyReq, { end: true }); 
});

server.listen(port, () => {
  console.log(`Proxy server running at http://localhost:${port}/`);
});