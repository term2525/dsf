/*
Practical no:3
sudo code /directory-to-open --user-data-dir='.' --no-sandbox
Q3. Create a Node.js file that will convert the output "Full Stack!" into reverse string.
Steps to Create:
1. Create folder: `nodejs`
2. Create file: `slip2.js`
Steps to Execute:
1. Open terminal in `nodejs` folder.
2. Run: `node slip2.js`
3. Access `http://localhost:3011` in browser.
*/

// Q.1) Create a Node.js file that will convert the output "Full Stack!" into reverse string.
const http = require('http');
const PORT = 3011;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  const input = "Full Stack!";
  const reversed = input.split('').reverse().join('');
  res.end('Reversed string: ' + reversed);
});

server.listen(PORT, () => {
  console.log('Server running at http://localhost:' + PORT);
});
