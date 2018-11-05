const startUsage = process.cpuUsage();
// { user: 38579, system: 6986 }
console.log(startUsage);
// spin the CPU for 500 milliseconds
const now = Date.now();
while (Date.now() - now < 500);

console.log(process.cpuUsage(startUsage));
// { user: 514883, system: 11226 }