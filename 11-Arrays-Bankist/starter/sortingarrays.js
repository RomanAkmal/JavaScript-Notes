//Sorting Arrays

//Strings
const owners = ['Jonas', 'Zack', 'Adam', 'Martha'];
console.log(owners.sort());

//Numbers:

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements.sort());
//The reason sort() method did not sorted is because it works on strings and treat number as string and sort using their UTF-17 ASCI code.

//return < 0 eg 1, if A >(greater) B (keep order don't swap)
//return > 0 eg -1, if A <(smaller) B  (Switch or Swap)
//return 0, if A =(equal) B (don't change)

//Ascending order sorting
movements.sort((a, b) => {
  if (a > b) return 1;
  if (a < b) return -1;
});
console.log(movements);

movements.sort((a, b) => {
  if (a < b) return 1;
  if (a > b) return -1;
});
console.log(movements);

//Simplified version:
/*

-if a > b it returns the positive number, so we can say that "a - b"
-if a < b it returns the negative number, so we can say that b - a

*/

movements.sort((a, b) => a - b);
console.log(movements);

movements.sort((a, b) => b - a);
console.log(movements);
