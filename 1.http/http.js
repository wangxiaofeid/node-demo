const http = require('http');

console.log(1);

const server = http.createServer((req, res) => {

  console.log('inner');
  req.setEncoding('UTF-8');

  let body = '';

  req.on('data', chunk => {
    body += chunk
  })

  req.on('end', () => {
    console.log('end');
    try {
      const data = JSON.parse(body);
      res.write(typeof data);
      res.end();
    } catch (er) {
      res.statusCode = 400;
      return res.end(`输入参数错误${er.message}`)
    }
  })
})

server.listen('3333');