/*
Q1. Node.js Employee Registration Form Validation.
Steps to Create: 1. Create `index.html` and `employeeReg.js`.
Steps to Execute: 1. Run `node employeeReg.js`. 2. Open `http://localhost:3032`.
*/

// Q.1) Using node js create an Employee Registration Form validation.
const http = require('http');
const fs = require('fs');
const qs = require('querystring');

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/') {
    fs.readFile('index.html', (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end('Internal Server Error');
        return;
      }
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    });
  } else if (req.method === 'POST' && req.url === '/register') {
    let body = '';
    req.on('data', chunk => { body += chunk.toString(); });
    req.on('end', () => {
      const formData = qs.parse(body);
      const name = formData['name'];
      const email = formData['email'];
      const password = formData['password'];
      if (!name || !email || !password) {
        res.writeHead(400);
        res.end('Please fill out all fields');
      } else {
        res.writeHead(200);
        res.end('Registration successful!');
      }
    });
  } else {
    res.writeHead(404);
    res.end('Not Found');
  }
}).listen(3032, () => console.log('Server on 3032'));
