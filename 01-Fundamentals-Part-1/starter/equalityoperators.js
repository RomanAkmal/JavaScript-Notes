const age = "18";
if (age === 18) console.log("You just became adult, strictly equal");
if (age == 18) console.log("You just became an adult, losly equal");

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

if (favorite !== 23) {
  console.log("Why not the 23");
}
