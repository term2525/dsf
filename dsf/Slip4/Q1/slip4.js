/*
sudo code /directory-to-open --user-data-dir='.' --no-sandbox
Q1. Using node js create an eLearning System.
Steps to Create: 
1. Create `slip4.html` (frontend) and `slip4.js` (server). 
2. Place PDFs in the same folder.
Steps to Execute: 
1. Run `node slip4.js`. 
2. Open `http://localhost:3000`.
*/

// Q.1) Using node js create an eLearning System.
var http = require('http');
var fs = require('fs');
http.createServer(function(req,res) {
  if (req.url == '/') {
    fs.readFile('slip4.html', function(err,data) {
      res.writeHead(200, {'Content-Type':'text/html'});
      res.write(data);
      res.end();
    });
  } else if (req.url == '/html_tutorial') {
    fs.readFile('html_tutorial.pdf', function(err,data) {
      res.writeHead(200, {'Content-Type':'application/pdf'});
      res.write(data);
      res.end();
    });
  } else if (req.url == '/nodejs_tutorial') {
    fs.readFile('nodejs_tutorial.pdf', function(err,data) {
      res.writeHead(200, {'Content-Type':'application/pdf'});
      res.write(data);
      res.end();
    });
  } else if (req.url == '/javascript_tutorial') {
    fs.readFile('javascript_tutorial.pdf', function(err,data) {
      res.writeHead(200, {'Content-Type':'application/pdf'});
      res.write(data);
      res.end();
    });
  } else {
    res.end('end');
  }
}).listen(3000, () => { console.log('port active') });
