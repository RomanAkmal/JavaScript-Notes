"use strict";
// lets say we want to print this with different values
console.log("Lifting weights repetition 1 💪");
console.log("Lifting weights repetition 2 💪");
console.log("Lifting weights repetition 3 💪");
console.log("Lifting weights repetition 4 💪");
console.log("Lifting weights repetition 5 💪");
console.log("Lifting weights repetition 6 💪");
console.log("Lifting weights repetition 7 💪");
console.log("Lifting weights repetition 8 💪");
console.log("Lifting weights repetition 9 💪");
console.log("Lifting weights repetition 10 💪");
// as from the above we can see that it is not practical and voilates the dry principle so we use loops:

//for loop keeps running while condition is TRUE and ends when the condition becomes false.
for (let rep = 11; rep <= 20; rep++) {
  console.log(`Lifting weights repetition ${rep} 💪`);
}

const romanArray = [
  "Roman",
  "Akmal",
  2025 - 2002,
  "Developer",
  ["Talha", "Munib", "Hamass"],
];
const types = [];
const types2 = [];

for (let i = 0; i < romanArray.length; i++) {
  // Reading from RomanArray.
  console.log(romanArray[i]);
  //Adding array to types from reading RomanArray
  types[i] = typeof romanArray[i];
  types2.push(typeof romanArray[i]);
}

console.log(types);
console.log(types2);

const years = [1980, 1985, 1990, 1995, 2000, 2005];
const ages = [];
for (let i = 0; i < years.length; i++) {
  ages.push(2025 - years[i]);
}
console.log(ages);

//continue and break statement:
console.log("-----Only Strings--------");
for (let i = 0; i < romanArray.length; i++) {
  if (typeof romanArray[i] !== "string") continue;
  console.log(romanArray[i], typeof romanArray[i]);
}

console.log("-----Break with Numbers--------");
for (let i = 0; i < romanArray.length; i++) {
  if (typeof romanArray[i] === "number") break;
  console.log(romanArray[i], typeof romanArray[i]);
}

//--------------Looping Backward Array:
const reveredRomanArray = [];
let j = 0;
for (let i = romanArray.length - 1; i >= 0; i--) {
  console.log(i, romanArray[i]);
  reveredRomanArray[j] = romanArray[i];
  j++;
}
console.log(reveredRomanArray);

//-----------define loop inside the loop:
for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`-------------Starting exercise ${exercise}`);
  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weight repition ${rep} 💪`);
  }
}
