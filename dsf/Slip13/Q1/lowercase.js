/*
sudo code /directory-to-open --user-data-dir='.' --no-sandbox
Q1. Node.js Convert "HELLO WORLD!" to Lowercase.
Steps to Create: 1. Create `lowercase.js`.
Steps to Execute: 1. Run `node lowercase.js`. 2. Access `http://localhost:8089`.
*/

// Q.1) Create a Node.js file that will convert the output "HELLO WORLD!" into lower-case letters.
const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  const input = "HELLO WORLD!";
  res.end(input.toLowerCase());
}).listen(8089, () => console.log('Server on 8089'));
