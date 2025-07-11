//--------- Arithemetic Operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2010;
console.log(ageJonas, ageSarah);
console.log(ageJonas * 2, ageJonas / 10, 2 ** 3); // 2 ** 3 means 2 to the power of 3 ==> 2*2*2

//------Type of Operators
console.log(typeof ageJonas);

//-------Assignment operators
let x = 10 + 5;
console.log(x);
x += 10;
console.log(x);
x *= 4;
console.log(x);

//-------Comparison Operators
console.log(ageJonas > ageSarah); // other comparison operators >, <, >=, <=
console.log(ageSarah <= 18);

//-------String Operators:
let text1 = "A";
let text2 = "B";
let result = text1 < text2;
console.log(result);

let text3 = "49";
let text4 = "5";
let result1 = text3 < text4;
console.log(result1);

const name1 = "John";
const name2 = "Doe";
const result2 = name1 + " " + name2;
console.log(result2);

let text5 = "What a very ";
text5 += "nice day";
console.log(text5);

//--------------Template Literals

const firstName = "Roman";
const job = "teacher";
const birthYear = 2002;
const currentYear = 2025;
const roman =
  "Im " +
  firstName +
  ", a " +
  (currentYear - birthYear) +
  " year old " +
  job +
  "!"; //here we can see structuring multiple strings and manual spaces is hard to do so we use template literals for strings.
console.log(roman);

const romanNew = `I'm ${firstName}, a ${
  currentYear - birthYear
} year old ${job}`;
console.log(romanNew);

console.log(`Just a regular string...`);

console.log(
  "String with \n\
  multiple \n\
  lines"
); //with the normal quotation we do this for multilines using \n\

console.log(`String with
  multiple
  lines`);
//now with template lateral we just press enter for next line without the need for \n\

//-------Operator precedence:
let k, y;
k = y = 25 - 10 - 5; // x = y = 25 - 10 - 5....right to left, x = y = 10 left to
console.log(k, y);
