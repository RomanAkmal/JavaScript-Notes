const age = 15;

if (age >= 18) {
  console.log("Sarah can start driving license 🚗");
} else {
  const yearsLeft = 18 - age;
  console.log(
    `Sarah is too young, Wait another ${yearsLeft} years to get eligeble for driving liecense😊`
  );
}

const birthYear = 2002;
let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century);

//-----------------------Multiple if else and input prompt option.

const favorite = Number(prompt("What's your favorite number?"));
console.log(favorite);
console.log(typeof favorite);
if (favorite === 23) {
  console.log("Cool, 23 is an amazing number");
} else if (favorite === 7) {
  console.log("7 is also a cool number");
} else if (favorite === 9) {
  console.log("9 is also a cool number");
} else {
  console.log("Number is not 23 or 7");
}
