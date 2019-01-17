var eventsEmitter = require('events')

class gym extends eventsEmitter {
    constructor() {
        super();
        setInterval(() => {this.emit('gym', 'boom')},1000);
    }

}

var ss = new gym();
ss.on('gym', function(message){console.log(`Athlete is working out`)})