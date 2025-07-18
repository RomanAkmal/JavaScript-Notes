const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const euroToUSD = 1.1;

// const movementsUSD = movements.map(function (mov) {
//   return mov * euroToUSD;
// });

//-----------> replacing the above callback map function with an arrow function.

const movementsUSD = movements.map(mov => mov * euroToUSD);

console.log(movements);
console.log(movementsUSD);

//We can do the same thing with the for loop but doing this with .map() is better because it leads us more towards functional programming which is better in javaScript ecosystem.

const movementsUSDFor = [];
for (const mov of movements) {
  movementsUSDFor.push(mov * euroToUSD);
}

console.log(movementsUSDFor);
console.log(movements);

//Another Example:

//movemnet gets the same parameters as others (current element, index of Array, Whole array)

const movementsDescription = movements.map(function (movement, index, array) {
  if (movement > 0) {
    return `Movement ${index + 1}, You deposited ${movement}`;
  } else {
    return `Movement ${index + 1}, You deposited ${Math.abs(movement)}`;
  }
});

const movementsDescriptionArrow = movements.map(
  (mov, i, arr) =>
    `Movement ${i + 1}, You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
      mov
    )}`
);

console.log(movementsDescription);
console.log(movementsDescriptionArrow);
