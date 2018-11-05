const b1 = Buffer.from([1, 2, 99]);

console.log(b1);

console.log(Buffer.alloc(10));

console.log(Buffer.allocUnsafe(10));

console.log(Buffer.allocUnsafe(10).fill(1));