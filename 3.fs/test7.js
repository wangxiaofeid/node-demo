const fs = require('fs');
const path = require('path');

// 文件夹不存在会报错
fs.copyFile(path.resolve(__dirname, '../1.txt'), path.resolve(__dirname, '../dist/1.txt'), {
  flags: fs.constants.COPYFILE_FICLONE_FORCE
}, (err, files) => {
  if (err) {
    console.log(err);
    return
  }
  console.log(files);
})