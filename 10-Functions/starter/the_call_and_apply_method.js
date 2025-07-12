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
