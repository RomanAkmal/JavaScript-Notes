'use strict';

// How we used to do destructure the array previously:
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];
console.log(a, b, c);

// The new way of destructuring Array:
const [x, y, z] = arr;
console.log(x, y, z);

console.log(arr); //it has not affected our orignal array remains same.

// Data needed for first part of the section
const restaurant = {
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

const [first, , second] = restaurant.categories;
console.log(first, second);

//Destructuring Array makes it easy to swap the values of variables:
let [primary, secondary] = restaurant.categories;
console.log(primary, secondary);

//before we used to swap variable values using a temp
const temp = primary;
primary = secondary;
secondary = temp;
console.log(primary, secondary);

//Now we do not need temp anymore:
[primary, secondary] = [secondary, primary];
console.log(primary, secondary);

//Calling order function whichr returns an array and then destructuring it
restaurant.order(2, 0);
console.log(restaurant.order(2, 0));
const [starter, main] = restaurant.order(2, 0);
console.log(starter, main);

//Nested Destructuring
const nested = [2, [5, 6]];
// const [i, j] = nested;
// console.log(i, j);
const [i, [j, k]] = nested;
console.log(i, j, k);

//Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
