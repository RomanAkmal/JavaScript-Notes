'use strict';
//We are analyzing how a primitive flight number did not changed by mutation but an object did changed:
const flight = 'LH234';
const jonas = {
  name: 'Jonas Schemedtmann',
  pasport: 247678925678,
};

const checkIn = function (flightNum, Passenger) {
  flightNum = 'LH999';
  Passenger.name = 'Mr.' + Passenger.name;

  if (Passenger.pasport === 247678925678) {
    alert('Checked In');
  } else {
    alert('Wrong Passport');
  }
};

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

//---------------The Reason:
//When we try to copy an object like this, we are really only copying the reference to that object in the memory heap. but both point to the same object in the memory. does the changes applied are reflected on the real object.

const Passenger = jonas;

//Another Example: Interaction of different function manipulating same object and creating problem

const newPasport = function (person) {
  person.pasport = Math.trunc(Math.random() * 10000000);
};

newPasport(jonas);
checkIn(flight, jonas);
