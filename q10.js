// main.js
// 1. Import required modules
const http = require('http');
const EventEmitter = require('events');

// 2. Create an event emitter (the "main loop" that listens for events)
const myEmitter = new EventEmitter();

// 3. Register a callback for the custom event 'data_received'
myEmitter.on('data_received', (url) => {
    console.log(`Event triggered: data_received for URL: ${url}`);
    console.log("Understood event-driven architecture!");
});

// 4. Create a simple web server
const server = http.createServer((req, res) => {
    // Emit our custom event whenever a request comes in
    myEmitter.emit('data_received', req.url);

    // Normal server response
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h1>Hello World!</h1>');
    res.end();
});

// 5. Start the server – this is the "main loop" that keeps running and listening
server.listen(3011, () => {
    console.log('Server is running and listening on port 3000');
    console.log('Event-driven application started. Waiting for events...');
});