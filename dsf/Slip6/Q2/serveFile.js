/*
sudo code /directory-to-open --user-data-dir='.' --no-sandbox
Q2. Node.js Serve Requested File, 404 if Missing.
Steps to Create: 1. Create `serveFile.js`.
Steps to Execute: 1. Run `node serveFile.js`. 2. Access `http://localhost:8080/filename`.
*/

// Q.2) Create a Node.js file that opens the requested file and returns the content to the client. If anything goes wrong, throw a 404 error.
var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function(req, res) {
  var q = url.parse(req.url, true);
  var filename = "." + q.pathname;
  fs.readFile(filename, function(err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
    }
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);
