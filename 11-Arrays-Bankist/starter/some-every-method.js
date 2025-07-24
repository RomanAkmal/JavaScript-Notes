const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

console.log(movements);
console.log(movements.includes(-130));

//Some method:
const anyDeposit = movements.some(mov => mov > 0);
console.log(anyDeposit);

//EVery Method:
console.log(movements.every(mov => mov > 0));

const movement2 = [200, 400, 5000, 50, 19];
console.log(movement2.every(mov => mov > 0));

// Seperate Callback:

const deposit = mov => mov > 0;
console.log(movement2.some(deposit));
