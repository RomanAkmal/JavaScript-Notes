const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
//for off loop

//for (const movement of movements) {
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}, You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}, You deposited ${Math.abs(movement)}`);
  }
}

console.log('------- FOR EACH() ----------');

//for each loop
movements.forEach(function (movement, index, array) {
  if (movement > 0) {
    console.log(`Movement ${index + 1}, You deposited ${movement}`);
    console.log(array);
  } else {
    console.log(`Movement ${index + 1}, You deposited ${Math.abs(movement)}`);
    console.log(array);
  }
});
//movement is the current element which the foreach() passes
//first arg of function is always -> current element, second is index, third is entire array, the name in function does not matter.
// 0: function(200)
// 0: function(450)
// 0: function(400)
//0: function(3000)

//---------------------------------for each for maps
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
  console.log(map);
});

//-----------------for each for Set
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);

currenciesUnique.forEach(function (value1, value2, set) {
  console.log(`${value1}: ${value2}`);
  console.log(set);
});
