const util = require('util');
const fs = require('fs');

function fn() {
  return Promise.reject(null);
}
const callbackFunction = util.callbackify(fn);

callbackFunction((err, ret) => {
  // When the Promise was rejected with `null` it is wrapped with an Error and
  // the original value is stored in `reason`.
  console.log(err && err.hasOwnProperty('reason') && err.reason === null);  // true
});

// export NODE_DEBUG=foo&&babel-node 4.util/test1.js
const debuglog = util.debuglog('foo');

debuglog('hello from foo [%d]', 123);

console.log(util.format('%s:%s', 'foo'));

console.log(util.format('%s:%s', 'foo', 'coo', 'eoo'));

console.log(util.formatWithOptions({ colors: true }, 'See object %O', { foo: 42 }));

fs.access('file/that/does/not/exist', (err) => {
  const name = util.getSystemErrorName(err.errno);
  console.error(name);  // ENOENT
});

console.log(util.inspect(util, { showHidden: true, depth: null }));

