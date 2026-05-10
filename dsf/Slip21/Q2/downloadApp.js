/*
sudo code /directory-to-open --user-data-dir='.' --no-sandbox
Q2. Express.js File Download Prompt.
Steps to Create: 1. Create `downloadApp.js`.
Steps to Execute: 1. Run `node downloadApp.js`. 2. Access `http://localhost:8082/download`.
*/

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
