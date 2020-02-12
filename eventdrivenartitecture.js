let events = require('events');

//creating an event emitter
let eventsEmitter = new events.EventEmitter();

//creatin an event handler
eventsEmitter.on('connection', ()=>{
    console.log('Connection Successful.');
})

//firing the connection event
eventsEmitter.emit('connection');