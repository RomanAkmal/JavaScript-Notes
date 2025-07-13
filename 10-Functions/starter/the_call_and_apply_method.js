'use strict';

const luftansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `flight ${this.iataCode}${flightNum}`, name });
  },
};

//defining this keyword explicitly.

luftansa.book(239, 'Roman Akmal');
luftansa.book(239, 'Chris Hemsworth');
console.log(luftansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = luftansa.book;

//DOES NOT WORK
// book(23, 'Sarah Williams');

//Manually explicitly defining the this keyword using call().
book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

book.call(luftansa, 238, 'DB Cooper');
console.log(luftansa);

const swiss = {
  airline: 'Swiss Air Line',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 583, 'DB Cooper');
console.log(swiss);

//Apply Method:
//Apply does not recieve a list of arguments after the this keyword but uses an array for argument, we donot use it anymore since we have call() now.
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
//A better more used way is this
book.call(swiss, ...flightData);

//The Bind Method:

//with the bind method we can create instances for different flights with one book function

const bookEW = book.bind(eurowings);
const bookLH = book.bind(luftansa);
const bookLX = book.bind(swiss);
bookEW(23, 'Steven Williams');

//with bind method we can also set or preset default values for arguments useful for Partial Application.
//Partial Argument: a common pattern where a part of the arguments of the orignal function are already applied or set.
const bookEW23 = book.bind(eurowings, 23);
bookEW23('Roman Akmal');
bookEW23('Samuel Martha');

//-------------Other Situation where we can use the bind Method:
// #1 When we use object togeather with event listener:

luftansa.planes = 300;
luftansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};
document
  .querySelector('.buy')
  .addEventListener('click', luftansa.buyPlane.bind(luftansa));

//#2 Another Example about partial application big use case of bind method:
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
//The above is same as writting: addVAT = value => vaue + value * 0.23
console.log(addVAT(100));
//2 things we need to make sure , 1 the order of values we want to preset and secondly this is different than setting default parameter as we are creating a brand new more specific function bassed on a more general function

//Challenege rewrite the above function as func returning another func:

const addTax2 = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT2 = addTax2(0.23);
console.log(addVAT2(100));
