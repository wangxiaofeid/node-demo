const fs = require('fs');
const path = require('path');

const myReadStream = fs.createReadStream(path.resolve(__dirname, '../1.txt'));
let data = '';
myReadStream.on('readable', () => {
  console.log(`读取的字节数：${myReadStream.bytesRead}，读取的路径：${myReadStream.path}，读取的数据: ${myReadStream.read()}`);
});
myReadStream.on('end', () => {
  console.log('data:', data);
})

fs.appendFile(path.resolve(__dirname, '../1.txt'), 'data to append', (err) => {
  if (err) throw err;
  console.log('The "data to append" was appended to file!');
});