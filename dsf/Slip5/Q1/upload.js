/*
Practical no:6
sudo code /directory-to-open --user-data-dir='.' --no-sandbox
Q6. Create a Node.js file that writes an HTML form, with an upload field.
Steps to Create:
1. Create folder: `nodejs`
2. Create file: `upload.js`
3. Install formidable: `npm install formidable`
Steps to Execute:
1. Run: `node upload.js`
2. Open `http://localhost:8080`, select a file and upload.
*/

// Q.1) Create a Node.js file that writes an HTML form, with an upload field.
var http = require('http');
var formidable = require('formidable');
var fs = require('fs');

http.createServer(function (req, res) {
  if (req.url == '/fileupload') {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      res.write('File uploaded!');
      res.end();
    });
  } else {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="fileupload"><br><input type="submit"></form>');
    res.end();
  }
}).listen(8080, () => console.log("Server on 8080"));
