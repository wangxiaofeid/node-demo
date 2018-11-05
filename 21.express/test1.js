const exreess = require('express');

const app = exreess();

app.get('*', (req, res) => {
  res.send('hello word!')
})

app.listen(3232, () => {
  console.log('Example app listening on port 3232!')
});