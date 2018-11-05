const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: fs.createWriteStream(path.resolve(__dirname, '../2.txt'), {
    flags: 'a+'
  })
})

rl.on('line', (input) => {
  console.log(`接收到：${input}`);
  rl.write(`接收到：${input}`);
});