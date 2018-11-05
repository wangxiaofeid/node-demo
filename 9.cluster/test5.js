const cluster = require('cluster');
const numCups = require('os').cpus().length;

if (cluster.isMaster) {

  for (let i = 0; i < numCups; i++) {
    cluster.fork()
  }

  cluster.on('message', (work, message, handle) => {
    console.log(`父进程接收到信息：${message}`);
    work.send('我是父进程，我收到信息了');
  })

  cluster.on('online', (worker) => {
    console.log(`Yay, the worker responded after it was forked: ${worker.id}`);
  });

} else {

  process.on('message', (message, handle) => {
    console.log(`子进程接收到信息：${message}`);
    process.disconnect();
  });
  process.send(`我是子进程${cluster.worker.id}`);

}