const x = new Array(7);
console.log(x);

//.fill()
x.fill(1);
console.log(x);
x.fill(1, 3, 5);
console.log(x);

const arr = [1, 2, 3, 4, 5, 6, 7];
arr.fill(23, 2, 6);
console.log(arr);

//Array.from();

const y = Array.from({ length: 7 }, () => 1);
console.log(y);

const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);

const r = [1, 2, 3, 4, 5];
const t = Array.from(r, curr => curr + 10);
console.log(t);
