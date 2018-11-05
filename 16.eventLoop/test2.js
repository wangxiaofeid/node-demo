Promise.resolve().then(() => {
  console.log('resolve1');
});

process.nextTick(function() {
  console.log('tick1');
  process.nextTick(function() {
    console.log('tick2');
  });
  process.nextTick(function() {
    console.log('tick3');
  });
});

Promise.resolve().then(() => {
  console.log('resolve2');
});

process.nextTick(function() {
  console.log('tick4');
});


Promise.resolve().then(() => {
  console.log('resolve3');
});

process.nextTick(function() {
  console.log('tick5');
});