const cluster = require('cluster');
const http = require('http');

const timeouts = [];
function errorMsg() {
  console.error('Something must be wrong with the connection ...');
}

if (cluster.isMaster) {
  cluster.on('fork', (worker) => {
    console.log('fork');
    timeouts[worker.id] = setTimeout(errorMsg, 2000);
  });
  cluster.on('listening', (worker, address) => {
    console.log(`listening address: ${address.address}, port: ${address.port}`);
    clearTimeout(timeouts[worker.id]);
  });
  cluster.on('exit', (worker, code, signal) => {
    console.log('exit');
    clearTimeout(timeouts[worker.id]);
    errorMsg();
  });
  cluster.fork();
} else {
  http.createServer((req, res) => {
    res.writeHead(200);
    res.end('你好世界\n');
  }).listen(8000);
  setTimeout(() => {
    // cluster.worker.kill(cluster.worker.id);
    cluster.worker.disconnect();
  }, 5000);
}