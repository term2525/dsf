// Q.1) Create a Node.js file that will convert the output "Hello World!" into upper-case letters.
const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end("Hello World!".toUpperCase());
}).listen(3000, () => console.log('Running on 3000'));
