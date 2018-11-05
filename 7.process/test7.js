console.log(process.env);

if (process.geteuid) {
  console.log(`Current uid: ${process.geteuid()}`);
}

if (process.getgid) {
  console.log(`Current gid: ${process.getgid()}`);
}

const NS_PER_SEC = 1e9;
const time = process.hrtime();
// [ 1800216, 25 ]

setTimeout(() => {
  const diff = process.hrtime(time);
  // [ 1, 552 ]

  console.log(`Benchmark took ${diff[0] * NS_PER_SEC + diff[1]} nanoseconds`);
  // benchmark took 1000000552 nanoseconds
}, 1000);


const start = process.hrtime.bigint();
// 191051479007711n
setTimeout(() => {
  const end = process.hrtime.bigint();
  // 191052633396993n

  console.log(`Benchmark took ${end - start} nanoseconds`);
  // Benchmark took 1154389282 nanoseconds
}, 4000);

console.log(process.memoryUsage());

console.log(`uptime: ${process.uptime()}`);