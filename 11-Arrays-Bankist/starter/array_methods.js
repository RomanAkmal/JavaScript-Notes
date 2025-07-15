//ARRAY METHODS

let arr = ['a', 'b', 'c', 'd', 'e'];

//---------SLice Method:
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));

//we can use the slice method to simply make a shallow copy of an array:
console.log(arr.slice());
console.log([...arr]);

//-------Splice Method:
// console.log(arr.splice(2));
console.log(arr);
arr.splice(-1);
console.log(arr);
arr.splice(1, 2);
console.log(arr);

//Reverse Method:
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);

//Concat Method:
const letters = arr.concat(arr2);
console.log([...arr, ...arr2]);
console.log(letters);

//Join Method:
console.log(letters.join(' - '));

//at Method:
const array = [23, 11, 64];
console.log(array[0]);
console.log(array.at(0));

//different ways of getting the last element and why .at is efficient than others
console.log(array[array.length - 1]);
console.log(array.slice(-1)[0]);
console.log(array.at(-1));

console.log(`jonas`.at(2));
