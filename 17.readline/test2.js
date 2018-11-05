const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('你认为 Node.js 中文网怎么样？', (answer) => {
  // 对答案进行处理
  console.log(`多谢你的反馈：${answer}`);
  rl.question('你认为 Node.js 中文网怎么样？', (answer) => {
    // 对答案进行处理
    console.log(`多谢你的反馈：${answer}`);
  
    rl.close();
  });
});

rl.on('close', () => {
  console.log('close');
});

rl.on('line', () => {
  console.log('line');
});

rl.on('pause', () => {
  console.log('pause');
});

rl.on('resume', () => {
  console.log('resume');
});

rl.on('SIGCONT', () => {
  console.log('SIGCONT');
});

rl.on('SIGINT', () => {
  console.log('SIGINT');
});