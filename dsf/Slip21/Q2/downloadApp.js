// Q.2) Write node js application that transfer a file as an attachment on web and enables browser to prompt the user to download file using express js.
const express = require('express');
const app = express();

app.get('/', function(req, res) {
  res.send("Hello for download");
});

app.get('/download', function(req, res) {
  res.download('a.txt');  // ensure a.txt exists
});

app.listen(8082, () => {
  console.log('Server running on port 8082');
});
