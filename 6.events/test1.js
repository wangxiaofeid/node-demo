const EventEmitter = require('events');

const ee = new EventEmitter();

ee.on('touch', data => {
  console.log(data);
});

ee.once('event', data => {
  console.log(data);
});

ee.on('error', err => {
  console.error('hhh error');
})

ee.emit('touch', 'wxf touch');

ee.emit('event', 'xx touch');
ee.emit('event', 'xx touch');

ee.emit('error', new Error('hhh error'));