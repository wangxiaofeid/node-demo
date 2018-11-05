const exreess = require('express');

const app = exreess();

app.get('*', (req, res, next) => {
  console.log('befult next');
  next();
  console.log('after next');
})

app.get('*', (req, res, next) => {
  console.log('befult send');
  res.send('hello word!')
  console.log('after send');
})

app.listen(3232, () => {
  console.log('Example app listening on port 3232!')
});