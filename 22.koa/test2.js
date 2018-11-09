const http = require('http');
const https = require('https');
const Koa = require('koa');
const serve = require('koa-static');
const app = new Koa();

app.use(serve('test1'));

app.use(async ctx => {
  ctx.body = 'hello word';
})

http.createServer(app.callback()).listen(3000);
https.createServer(app.callback()).listen(3001);