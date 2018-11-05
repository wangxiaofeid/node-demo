console.log(`This processor architecture is ${process.arch}`);

process.argv.forEach((val, index) => {
  console.log(`${index}: ${val}`);
});

console.log(__dirname, process.cwd());

process.chdir('../')

console.log(`改变后：${process.cwd()}`);

console.log(`This platform is ${process.platform}`);

console.log(`The parent process is pid ${process.pid}，ppid ${process.ppid}`);