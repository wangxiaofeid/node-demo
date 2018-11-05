const fs = require('fs');
const path = require('path');
const fsPromises = fs.promises;

const p = path.resolve(__dirname, '../1.txt');

console.log(fs.readFileSync(p, 'utf8'));
// Prints: Node.js

async function doTruncate() {
  let filehandle = null;
  try {
    filehandle = await fsPromises.open(p, 'r+');
    await filehandle.truncate(4);
  } finally {
    if (filehandle) {
      // close the file if it is opened.
      await filehandle.close();
    }
  }
  console.log(fs.readFileSync(p, 'utf8'));  // Prints: Node
}

doTruncate().catch(console.error);