/*
sudo code /directory-to-open --user-data-dir='.' --no-sandbox
Q1. Node.js Convert "Hello World!" to Uppercase.
Steps to Create: 1. Create `uppercase.js`.
Steps to Execute: 1. Run `node uppercase.js`. 2. Access `http://localhost:3000`.
*/

// Q.1) Create a Node.js file that will convert the output "Hello World!" into upper-case letters.
const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end("Hello World!".toUpperCase());
}).listen(3000, () => console.log('Running on 3000'));
