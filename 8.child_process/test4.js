const subprocess = require('child_process').fork(`${__dirname}/hh4.js`);

// 开启 server 对象，并发送该句柄。
const server = require('net').createServer();
server.on('connection', (socket) => {
  socket.end('被父进程处理');
});
server.listen(1337, () => {
  subprocess.send('server', server);
});