const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const deposit = movements.filter(function (arrEl, i, array) {
  return arrEl > 0;
});

console.log(movements);
console.log(deposit);

const depositFor = [];
for (mov of movements) {
  if (mov > 0) {
    depositFor.push(mov);
  }
}
console.log(movements);
console.log(depositFor);

const withdrawal = movements.filter(mov => mov < 0);

console.log(movements);
console.log(withdrawal);
