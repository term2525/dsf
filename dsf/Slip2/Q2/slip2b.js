// Q.2) Using node js create a web page to read two file names from user and append contents of first file into second file.
const http = require('http');
const fs = require('fs');
const { parse } = require('querystring');

const server = http.createServer((req, res) => {
  if (req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`<h2>File Appender</h2>
    <form method="POST">
      <input type="text" name="source" placeholder="Source File (e.g., a.txt)" required><br><br>
      <input type="text" name="dest" placeholder="Destination File (e.g., b.txt)" required><br><br>
      <button type="submit">Append Contents</button>
    </form>`);
  } else if (req.method === 'POST') {
    let body = '';
    req.on('data', chunk => { body += chunk.toString(); });
    req.on('end', () => {
      const { source, dest } = parse(body);
      fs.readFile(source, 'utf8', (err, data) => {
        if (err) {
          res.writeHead(404, { 'Content-Type': 'text/html' });
          return res.end(`<h3>Error: Source file "${source}" not found!</h3><a href="/">Try Again</a>`);
        }
        fs.appendFile(dest, '\n' + data, (appendErr) => {
          if (appendErr) {
            res.writeHead(500, { 'Content-Type': 'text/html' });
            return res.end(`<h3>Error: Could not write to "${dest}"</h3>`);
          }
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.end('<h3>Success!</h3><p>Contents appended.</p><a href="/">Back</a>');
        });
      });
    });
  }
}).listen(3000, () => console.log('Server on 3000'));
