const net = require('net');

const server = net.createServer((socket) => {
  socket.end('goodbye\n');
});

server.on('close', () => {
  console.log('服务端 close');
});

server.on('connection', () => {
  console.log('服务端 connection');
  server.getConnections((err, count) => {
    constle.log(`连接的请求：${1}`)
  });
})

server.on('error', () => {
  console.log('服务端 error');
})

server.listen(() => {
  console.log('opened server on', server.address());
});