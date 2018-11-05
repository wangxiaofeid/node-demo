const fs = require('fs');
const path = require('path');

const fw = fs.watch(path.resolve(__dirname, '../1.txt'), { encoding: 'buffer' }, (eventType, filename) => {
  if (filename) {
    console.log(11, filename);
    // 打印: <Buffer ...>
  }
});

fw.on('change', (chunk) => {
  console.log(chunk);
});