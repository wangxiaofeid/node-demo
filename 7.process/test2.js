const util = require('util');

process.on('unhandledRejection', (reason, p) => {
  console.log('未处理的 rejection：', p, '原因：', reason);
  // 记录日志、抛出错误、或其他逻辑。
});


const p = new Promise((resolve, reject) => {
  resolve()
})

p.then((res) => {
  return JSON.pasre('dd'); // 故意输错 `pasre`。
}); // 没有 `.catch` 或 `.then`。