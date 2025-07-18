const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

console.log(movements);

const balance = movements.reduce(function (accumulator, cur, i, arr) {
  console.log(`Iteration ${i}: ${accumulator}`);
  return accumulator + cur;
}, 0);

console.log(balance);

//doing the samething with the for off loop:
//as we can see we need a extra variable here but we didnt needed an extra variable in .reduce

let balance2 = 0;
for (const mov of movements) balance2 += mov;
console.log(balance2);

//---------Writing reduce function using arrow

const balanceArrow = movements.reduce((acc, curr) => acc + curr);
console.log(balanceArrow);

//--------Another Example of using reduce:
//Get maximum movement value:
const maxNumber = movements.reduce(function (acc, curr, i) {
  if (acc > curr) {
    return acc;
  } else {
    return (acc = curr);
  }
}, 0);

console.log(maxNumber);
