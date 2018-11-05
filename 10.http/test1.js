const http = require('http');

http.get({
  hostname: 'localhost',
  port: 8001,
  path: '/',
  agent: false
}, (res) => {
  // 处理事情
})