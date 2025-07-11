'use strict';

//--------------------Regular function vs Normal Functions:

//-----------Regular Function:
var firstName = 'Ateeb';

const roman = {
  firstName: 'Roman',
  year: 2002,
  calcAge: function () {
    console.log(this);
    console.log(2025 - this.year);
  },

  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};

roman.greet();

//----------Normal function:
const akmal = {
  firstName: 'Akmal',
  year: 1975,
  calcAge: function () {
    console.log(this);
    console.log(2025 - this.year);
  },

  greet: function () {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};

akmal.greet();

//--------Function inside a method:
//The problem :

/*
const maryam = {
  firstName: 'Maryam',
  year: 2007,
  calcAge: function () {
    console.log(2025 - this.year);

    const isMillenial = function () {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },
  greet: function () {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};
maryam.greet();
maryam.calcAge();
*/

//------Solution 1 :
const hamza = {
  firstName: 'hamza',
  year: 1985,
  calcAge: function () {
    console.log(2025 - this.year);

    const self = this;
    const isMillenial = function () {
      console.log(self);
      console.log(self.year >= 1981 && self.year <= 1996);
    };
    isMillenial();
  },
  greet: function () {
    console.log(`Hey ${this.firstName}`);
  },
};
hamza.calcAge();
hamza.greet();

//------Solution 2 --- Using Arrow function:
const Virat = {
  firstName: 'Virat',
  year: 1980,
  calcAge: function () {
    console.log(2025 - this.year);

    const isMillenial = () => {
      //this works here because an arrow function does not have a this keyword inherently.
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },
  greet: function () {
    console.log(`Hey ${this.firstName}`);
  },
};
Virat.calcAge();
Virat.greet();

//------------- arguments keyword:
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};

addExpr(2, 5);
addExpr(2, 5, 7, 9);

var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
addArrow(2, 5, 8);
