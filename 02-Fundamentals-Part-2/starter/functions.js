"use strict";

//----------------------------------------------INTRODUCTION TO FUNCTIONS---------------------------------------------------------------------------------------
function logger() {
  console.log("My name is Roman");
} //this function does not return anything

logger(); // - calling / invoking / running the function
logger();

//---------------------

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

console.log(fruitProcessor(5, 0)); //log the result of this function
const appleJuice = fruitProcessor(5, 0); //as function returns the juice value so it get stored in apple juice variable.
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

//---------------------------
function introduction(Firstname, age) {
  console.log(`my name is ${Firstname} and i am ${age} years old`);
  return age;
}

introduction("Roman", 23);
const ageRoman = introduction("Roman", 23);
console.log(ageRoman);

//-----------------------------------------------FUNCTION DECLERATION VS FUNCTION EXPRESSIONS:-----------------------------------------------------------------
//--------Function Decleration:
function calcAge1(birthYear) {
  return 2025 - birthYear;
}

const age1 = calcAge1(2002);
console.log(age1);

//---------Function Expression:

const calcAge2 = function (birthYear) {
  return 2025 - birthYear;
};

const age2 = calcAge2(2005);
console.log(age2);

//------------------------------------------------ARROW FUNCTION ------------------------------------------------------------------------------------------
const calcAge3 = (birthYear) => 2050 - birthYear;
const age3 = calcAge3(2005);
console.log(age3);

const yearUntilRetirement = (birthYear) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return retirement;
};

console.log(yearUntilRetirement(2002));

const Retirement = (birthyear, firstname) => {
  const age = 2037 - birthyear;
  const retirement = 65 - age;
  return `${firstname} retires in ${retirement}`;
};

console.log(Retirement(2002, "Roman"));
console.log(Retirement(2005, "Ateeb"));

//--------------------------------------FUNCTION CALLING OTHER FUNCTIONS----------------------------------------------------------------------------------------
function cutFruitPieces(fruit) {
  return fruit * 4;
}
function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`;
  return juice;
}

console.log(fruitProcessor(2, 3));

//----------------------------------------REVIEWING FUNCTIONS------------------------------------------------------------------------------------------------------
const calcAge = function (birthYear) {
  return 2025 - birthYear;
};

const retirementage = function (age) {
  return 65 - age;
};

const yearRemainingInRetirement = function (birthyear, firstname) {
  const age = calcAge(birthyear);
  const retirement = retirementage(age);
  if (retirement > 0) {
    return `${firstname} retires in ${retirement}`;
  } else {
    return `${firstname} has already retired as the age is ${age}`;
  }
};

console.log(yearRemainingInRetirement(2002, "Roman Akmal"));
console.log(yearRemainingInRetirement(1950, "Ateeb Akmal"));
