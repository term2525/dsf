/*
Practical no:13
sudo code /directory-to-open --user-data-dir='.' --no-sandbox
Q13. Write node js script to build Your Own Node.js Module. Use require (‘http’) module is a built in Node module that invokes the functionality of the HTTP library to create a local server. Also use the export statement to make functions in your module available externally. Create a new text file to contain the functions in your module called, “modules.js” and add this function.
Steps to Create:
1. Create file: `nodejs/modules.js`
2. Create file: `nodejs/slip10.js`
Steps to Execute:
1. Run: `node slip10.js`
2. Visit `http://localhost:1234`.
*/

// Q.2) Write node js script to build Your Own Node.js Module. Use require (“http”) module is a built-in Node module that invokes the functionality of the HTTP library to create a local server. Also use the export statement to make functions in your module available externally. Create a new text file to contain the functions in your module called, “modules.js” and add this function to return today’s date and time.
var http = require('http');
var dt = require('./modules');

var server = http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('Current date and time is ' + dt.datetime());
  res.end();
});

server.listen(1234, () => console.log("Server on 1234"));
