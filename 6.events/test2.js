const EventEmitter = require('events');

const myEmitter = new EventEmitter();
// 只处理一次，避免无限循环。
myEmitter.once('newListener', (event, listener) => {
  if (event === 'event') {
    // 在前面插入一个新的监听器。
    myEmitter.on('event', () => {
      console.log('B');
    });
  }
});
myEmitter.on('event', () => {
  console.log('A');
});
myEmitter.prependListener('event', (stream) => {
  console.log('C');
});
console.log('是否有监听器：', myEmitter.emit('event'));
// 打印:
//   B
//   A
console.log(myEmitter.getMaxListeners());