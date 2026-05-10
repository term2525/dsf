// Q.1) Create a Node.js file that will convert the output "HELLO WORLD!" into lower-case letters.
const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  const input = "HELLO WORLD!";
  res.end(input.toLowerCase());
}).listen(8089, () => console.log('Server on 8089'));
