// Q.2) Create a js file named main.js for event-driven application. There should be a main loop that listens for events, and then triggers a callback function when one of those events is detected.
const EventEmitter = require('events');
const myEmitter = new EventEmitter();

myEmitter.on('data_received', (name) => {
    console.log(name, "Understood event - Driven");
});

myEmitter.emit('data_received', 'FYMSC(CS)');
console.log("program Ended");
