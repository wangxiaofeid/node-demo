// process.emit('message', 'hello word')

process.on('message', data => {
  console.log(`子进程收到信息：${data}`);
  process.send('hello world father1');
  process.disconnect();
})
console.log('xx');

process.send('hello world father2');
