const exreess = require('express');
const querystring = require('querystring');
const multipart = require('connect-multiparty');
const path = require('path');
const http = require('http');
const terminus = require('@godaddy/terminus').createTerminus;

const app = exreess();

var myLogger = function (req, res, next) {
  console.log('LOGGED')
  next()
}

app.use(myLogger);

app.get('/get', (req, res) => {
  console.log(req.url, req.query);
  res.json({
    id: req.query.id
  });
})

app.get('/get/:id', (req, res) => {
  console.log(req.url, req.params);
  res.json({
    id: req.params.id
  });
})

/**
 * form-data
 * ------WebKitFormBoundarybCmno3DhMwvuOckE
Content-Disposition: form-data; name="id"

2
------WebKitFormBoundarybCmno3DhMwvuOckE--
默认是这样，可以添加中间件connect-multiparty
 */ 
app.post('/post/formdata', (req, res) => {
  console.log(req.url);
  let data = '';
  req.on('data', chunk => {
    data += chunk
  })
  req.on('end', () => {
    data = decodeURI(data);
    console.log(data);
    res.json({
      id: 1
    });
  })
})

const multipartMiddleware = multipart();
app.post('/post/formdata2', multipartMiddleware, (req, res) => {
  console.log(req.url, req.body);
  res.json({
    id: req.body.id
  });
})

/**
 * application/x-www-form-urlencoded
 */ 
app.post('/post/urlencoded', (req, res) => {
  console.log(req.url, req.body);
  let data = '';
  req.on('data', chunk => {
    data += chunk
  })
  req.on('end', () => {
    data = decodeURI(data);
    const query = querystring.parse(data);
    console.log(query);
    res.json({
      id: query.id
    });
  })
})
/**
 * raw--text
 */
app.post('/post/raw', (req, res) => {
  console.log(req.url, req.body);
  let data = '';
  req.on('data', chunk => {
    data += chunk
  })
  req.on('end', () => {
    data = decodeURI(data);
    const query = JSON.parse(data);
    console.log(query, data);
    res.json({
      id: query.id
    });
  })
})
/**
 * raw--application/json
 */
app.post('/post/rawjson', (req, res) => {
  console.log(req.url, req.body);
  let data = '';
  req.on('data', chunk => {
    data += chunk
  })
  req.on('end', () => {
    data = decodeURI(data);
    const query = JSON.parse(data);
    console.log(query, data);
    res.json({
      id: query.id
    });
  })
})

app.get('/sendFile', (req, res) => {
  res.sendFile(path.resolve(__dirname, './test1.js'))
})

app.get('/download', (req, res) => {
  res.download(path.resolve(__dirname, './test1.js'), 'xxx.js')
})

app.get('/cookie', (req, res) => {
  res.cookie('name', 'wxf');
  res.cookie('age', 18);
  res.sendFile(path.resolve(__dirname, './test1.js'))
})

app.get('*', (req, res) => {
  res.send('hello word!')
})

/**
 * 健康检查
 */ 
const server = http.createServer(app);
function onSignal() {
  console.log('server is starting cleanup');
  // start cleanup of resource, like databases or file descriptors
}
async function onHealthCheck() {
  // checks if the system is healthy, like the db connection is live
  // resolves, if health, rejects if not
}
terminus(server, {
  signal: 'SIGINT',
   healthChecks: {
    '/healthcheck': onHealthCheck,
  },
  onSignal
});

server.listen(3232, () => {
  console.log('Example app listening on port 3232!')
});