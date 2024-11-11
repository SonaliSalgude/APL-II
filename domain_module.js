const domain = require('domain');
const http = require('http');

const serverDomain = domain.create();

serverDomain.on('error', (err) => {
  console.error('Domain caught an error:', err);
});

serverDomain.run(() => {
  const server = http.createServer((req, res) => {
  
    if (req.url === '/error') {
      throw new Error('Simulated server error!');
    }

    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello from the server!\n');
  });

  server.listen(3000, () => {
    console.log('Server running on port 3000');
  });
});
