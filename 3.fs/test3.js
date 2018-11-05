const fs = require('fs');
const path = require('path');

fs.open(path.resolve(__dirname, '../1.txt'), 'r', (err, fd) => {
  if (err) {
    console.log(err);
    return
  }
  const b = new Buffer(100);
  fs.read(fd, b, 1, 10, 2, (err, bytesRead, buffer) => {
    if (err) {
      console.log(err);
      return
    }
    console.log(b, buffer, b == buffer, typeof b);
  })
});