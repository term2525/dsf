/*
Q1. Node.js Recipe Book.
Steps to Create: 1. Create `recipeBook.js`.
Steps to Execute: 1. Run `node recipeBook.js`. 2. Access `http://localhost:3000`.
*/

// Q.1) Using node js create a Recipe Book.
const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('<h1>Recipe Book</h1>');
  res.write('<ul><li>Pasta</li><li>Burger</li><li>Salad</li></ul>');
  res.end();
}).listen(3000, () => console.log('Recipe server on 3000'));
