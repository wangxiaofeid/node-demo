const Koa = require('koa');
const app = new Koa();

app.use(async (ctx, next) => {
  await next();
  const rt = ctx.response.get('X-Response-Time');
  console.log(`${ctx.method} ${ctx.url} - ${rt}`);
});

// x-response-time

app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.set('X-Response-Time', `${ms}ms`);
});

// response

app.use(async ctx => {
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('inner promise');
      resolve();
    }, 1000);
  });
  setTimeout(() => {
    console.log('after promise')
  }, 600);
  ctx.body = 'Hello World';
});

app.listen(3000);