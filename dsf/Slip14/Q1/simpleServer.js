/*
Practical no:10
Q10. Create a Simple Web Server using node js.
Steps to Create:
1. Create file: `nodejs/slip14.js` (Server)
Steps to Execute:
1. Run: `node slip14.js` and visit `http://localhost:3000`.
*/

// Q.1) Create a Simple Web Server using node js.
var http = require('http');
http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('Hello world!');
  res.end();
}).listen(3000, () => console.log('Active port 3000'));
