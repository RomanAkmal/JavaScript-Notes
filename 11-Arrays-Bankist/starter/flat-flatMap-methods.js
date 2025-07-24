const arr = [[1, 2, 3, 4], [4, 5, 6], 7, 8];
console.log(arr.flat());

//flat method goes just one level deep nesting
const arrDeep = [[[1, 2], 3, 4], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat(2));
