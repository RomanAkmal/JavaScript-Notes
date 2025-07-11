'use strict';

console.log(this);

//--------------this for simple function
const calcAge = function (birthYear) {
  console.log(2025 - birthYear);
  console.log(this);
};

calcAge(2002);

//-------------this for arrow function:
const calcAgeArrow = birthYear => {
  console.log(2025 - birthYear);
  console.log(this);
};

calcAgeArrow(2005);

//----------this for methods:
const roman = {
  year: 2002,
  calcAge: function () {
    console.log(this);
    console.log(2025 - this.year);
  },
};

roman.calcAge();

// method barrowing or copying method from one object to another. it also shows us that the object which is calling the method is linked or referenced by this.

const ateeb = {
  year: 2005,
};

ateeb.calcAge = roman.calcAge; //method barrowing
ateeb.calcAge(); // ateeb is linked to the this keyword in the calcAge function above inside another roman object. one of the reason we say this keyword is dynamic and not static

//-------------
const f = roman.calcAge;
f(); // this became a normal simple function thus the value of this in the calcAge becomes undefined.
