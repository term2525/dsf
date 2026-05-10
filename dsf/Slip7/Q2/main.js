/*
Practical no:10
Q10. Create a node js file named main.js for event-driven application. There should be a main loop that listens for events, and then triggers a callback function when one of those events is detected.
Steps to Create:
1. Create file: `nodejs/slip7.js` (Event Driven)
Steps to Execute:
1. Run: `node slip7.js`
*/

// Q.2) Create a node js file named main.js for event-driven application. There should be a main loop that listens for events, and then triggers a callback function when one of those events is detected.
const EventEmitter = require('events');
const myEmitter = new EventEmitter();

myEmitter.on('data_received', (name) => {
    console.log(name, "Understood event - Driven");
});

myEmitter.emit('data_received', 'FYMSC(CS)');
console.log("program Ended");
