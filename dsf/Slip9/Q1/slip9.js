/*
Practical no:12
Q12. Create a Node.js file that writes an HTML form, with a concatenate two string.
Steps to Create:
1. Create file: `nodejs/slip9.js`
Steps to Execute:
1. Run: `node slip9.js`
2. Open `http://localhost:3004`
*/

// Q.1) Create a Node.js file that writes an HTML form, with a concatenate two string.
const http = require('http');
const { parse } = require('querystring');

const server = http.createServer((req, res) => {
  if (req.method === 'GET') {
    res.writeHead(200, {'Content-Type':'text/html'});
    res.end('<form method="POST">Name:<input name="str1"><br>Surname: <input name="str2"><br><button>Concatenate</button></form>');
  } else {
    let body = '';
    req.on('data', c => body += c);
    req.on('end', () => {
      const formData = parse(body);
      res.end("Result: " + (formData.str1 + formData.str2));
    });
  }
}).listen(3004, () => console.log('Server on 3004'));
