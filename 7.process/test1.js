
process.on('beforeExit', () => {
  console.log('没事干咯');
})

process.on('exit', (code) => {
  console.log(`即将退出，退出码：${code}`);
});

// process.exit();
process.on('message', data => {
  console.log(`收到子进程信息：${data}`);
})

setTimeout(() => {
  console.log('我要1秒后打印');
}, 1000)