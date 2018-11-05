const fs = require('fs');
const path = require('path');

fs.readFile(path.resolve(__dirname, '../1.txt'), 'utf8', (err, data) => {
  if (err) {
    console.log(err);
    return
  }
  console.log(data);
});

fs.readlink(path.resolve(__dirname, '../1.txt'), 'utf8', (err, data) => {
  if (err) {
    console.log(err);
    return
  }
  console.log(data);
});

fs.rename(path.resolve(__dirname, './2.js'), path.resolve(__dirname, '../2.txt'), (err, data) => {
  if (err) {
    console.log(err);
    return
  }
  console.log(data);
});
