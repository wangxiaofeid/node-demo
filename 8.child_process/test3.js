const { execFile, fork } = require('child_process');

const childProcess = fork(`${__dirname}/hh3.js`);

childProcess.on('message', data => {
  console.log(`父进程收到信息：${data}`);
})

childProcess.on('disconnect', data => {
  console.log(`child disconnect`);
})

childProcess.send('hello world child');