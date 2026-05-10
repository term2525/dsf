// Q.1) Create a Node.js file that will convert the output "Full Stack!" into reverse string.
const http = require('http');
const PORT = 3011;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  const input = "Full Stack!";
  const reversed = input.split('').reverse().join('');
  res.end('Reversed string: ' + reversed);
});

server.listen(PORT, () => {
  console.log('Server running at http://localhost:' + PORT);
});
