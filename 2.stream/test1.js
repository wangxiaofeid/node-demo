const fs = require('fs');
const path = require('path');

// const myWriteStream = fs.createWriteStream(path.resolve(__dirname, '../1.txt'), {
//   flags: 'a'
// });
// myWriteStream.write('一些数据');
// myWriteStream.write('更多数据');
// myWriteStream.end('完成写入数据');

const myReadStream = fs.createReadStream(path.resolve(__dirname, '../1.txt'));
let data = '';
// myReadStream.on('data', chunk => {
//   console.log(chunk);
//   data += chunk;
// })
myReadStream.on('readable', () => {
  console.log(`读取的数据: ${myReadStream.read()}`);
});
myReadStream.on('end', () => {
  console.log('data:', data);
})

// myReadStream.pause();
// console.log(myReadStream.read());