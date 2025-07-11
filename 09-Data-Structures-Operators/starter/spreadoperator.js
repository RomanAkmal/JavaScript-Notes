'use strict';
const arr = [7, 8, 9];

const arrayInArray = [1, 2, arr];
console.log(arrayInArray);

const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newGoodArr = [1, 2, ...arr];
console.log(newGoodArr);

console.log(...newGoodArr);

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious paste with ${ing1}, ${ing2}, ${ing3}`);
  },
};

const newMenu = [...restaurant.mainMenu, 'Karahi'];
console.log(newMenu);

//Copy Array:
const mainMenuCopy = [...restaurant.mainMenu];

//Join or merge Arrays:
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

//Spread operator applicable on all iterables:

const str = 'Jonas';
const letters = [...str, ' ', 'S.'];
console.log(letters);

//we can use spread operator only in functions and arrays:
console.log(...str);
// console.log(`${...str}`);

//creating a function with use of spread operator:
// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt("Let's make pasta! Ingredient 2?"),
//   prompt("Let's make pasta! Ingredient 3?"),
// ];
// console.log(ingredients);

// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// restaurant.orderPasta(...ingredients); //this one is recommended.

//Spread Operator works with objects:
const newRestaurant = { foundedIn: 2002, ...restaurant, founder: 'Roman' };
console.log(newRestaurant);

//Object copy:
const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'HFC';
console.log(restaurantCopy.name, restaurant.name);
