// Q.1) Create a Simple Web Server using node js
var http = require('http');
http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('Hello world!');
  res.end();
}).listen(3000, () => console.log('Active port 3000'));
