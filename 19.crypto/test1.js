const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

const cipher = crypto.createCipher('aes192', 'a password');

const input = fs.createReadStream(path.resolve('./1.txt'));
const output = fs.createWriteStream(path.resolve('./1.txt.enc'));

input.pipe(cipher).pipe(output);