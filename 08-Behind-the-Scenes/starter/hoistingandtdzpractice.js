'use strict';

//----------Hositing with Variables:
console.log(me);
// console.log(job);
// console.log(year);
var me = 'Roman';
let job = 'Teacher';
const year = 2002;

//-----------Functions:
console.log(addDecl(2, 3)); // This will work fine beacause it is a plane function without const, var or let.

console.log(addArrow); // console.log(addExpr(2, 3)); as we defined addExpr with var so it is set to undefined, we can not use to call this function as addArrow(2, 3) it will giver error as it would be calling -> undefined (2, 3)

//console.log(addExpr(2, 3)); // as it is defined using const, so both function declared with var and const won't work only simple function would work fine.

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

//------------------------------- Another Example:
console.log(numProducts);
if (!numProducts) deleteShoppingCart(); //here it gives All products deleted output even when numProducts are 10 and not 0, and that is because of hoisting and due to it as numProducts is called before declaring it, it is undefined. and we know that undefined is also a falsey value than therefore, this code will also get executed.
var numProducts = 10;
function deleteShoppingCart() {
  console.log('All products deleted!');
}

//---------------------Difference bw let, var , const:
var x = 1;
let y = 2;
const z = 3;
console.log(x === window.x); //testing if x is actually a propety of the window object.
console.log(y === window.y);
console.log(z === window.z);

// type window in console in there scroll down and you will find a property x : 1 and we can not find y and z anywhere there, and that is because they were declared with let or const, and so variables declared that way do not create properties on the window object,

//in conclusion, variable declared with var will create a propety on the global window object and that can have some implications in some cases.

/*  -----------------------------------------------------------
What is the conclusion or tips or Best Practices to avoid such bugs and of all this
- First don't use var to declare variables, use const most of the time and let if you really need to change the variable later.
- Also in order to write clean code, you should declare your variables at the top of each scope. that will make your code atleast look a little bit better.
- Finally always declare all your functions first and use them only after decleration and this applies to all types of functions even function declared which are hoisted.So you can use function decleration before you declared them but still don't do that as it's just not clean, 

*/
