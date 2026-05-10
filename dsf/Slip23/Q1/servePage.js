// Q.1) Write node js script to interact with the file system, and serve a web page from a File
var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  fs.readFile('a.txt', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8081, () => { console.log("Port 8081 active") });
