// const http = require('http');

// const server = http.createServer((req, res) => {
//   res.setHeader('Content-Type', 'text/html');
//   res.setHeader('X-Foo', 'bar');
//   res.setHeader('set-cookie', ['name=wxf', 'sex=boy']);
//   res.writeHead(200, { 'Content-Type': 'text/plain' });
//   res.write('xxx\n');
//   res.end('ok');
// });

// server.listen(8778)

const http = require('http');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('X-Foo', 'bar');
  res.setHeader('set-cookie', ['name=wxf2', 'sex=boy']);
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.write('{"aa": 123}');
  res.end();
});

server.listen(8778)