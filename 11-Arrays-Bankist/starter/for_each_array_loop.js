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
movements.forEach(function (movement) {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You deposited ${Math.abs(movement)}`);
  }
});

// 0: function(200)
// 0: function(450)
// 0: function(400)
