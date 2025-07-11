"use strict";

//Object Literal Syntax.
const roman = {
  firstName: "Roman",
  lastName: "Akmal",
  age: 2025 - 2002,
  job: "Developer",
  experience: 10,
  friends: ["Hamass", "Talha", "Munib"],
  birthYear: 2002,
  hasDrivingLicense: true,
  calcAge: function (birthYear) {
    return 2025 - birthYear;
  },
  calcAgeObject: function () {
    // console.log(this);
    return 2025 - this.birthYear;
  },
  calcAgenAddproperty: function () {
    this.calculatedAge = 2025 - this.birthYear;
    return this.calculatedAge;
  },
  getSummary: function () {
    if (this.hasDrivingLicense) {
      return `${this.firstName} is a ${this.age} year old ${this.job}, and he has a driver's license`;
    } else {
      return `${this.firstName} is a ${this.age} year old ${this.job}, and he has no driver's license`;
    }
  },
};
console.log(roman);

//Accessing Objects Dot vs Bracket Notation:
console.log(roman.lastName, roman.age);
console.log(roman["lastName"], roman["age"]);

const nameKey = "Name";
console.log(roman["first" + nameKey]);
console.log(roman["last" + nameKey]);
console.log(roman["ex" + "perience"]);

// const intrestedIn = prompt(
//   "What do you want to know about Roman ? Choose betweem firstName, lastName, age, job, experience and friends"
// );

// if (roman[intrestedIn]) {
//   console.log(roman[intrestedIn]);
// } else {
//   console.log(
//     "Wrong request, try again : What do you want to know about Roman ? Choose betweem firstName, lastName, age, job, experience and friends"
//   );
// }

//-----------Adding new properties:
roman.country = "Pakistan";
roman["City"] = "Islamabad";
console.log(roman);

//----------Challenge:
// Write "Roman has 3 friends, and his best friend is called Hamass"
console.log(
  `${roman.firstName} has ${roman.friends.length} friends and his best friend is called ${roman.friends[0]}`
);

//-----------------Object Methods:
//we added a new method in a property calcAge:
console.log(roman.calcAge(2002));
console.log(roman["calcAge"](2000));

console.log(roman.calcAgeObject());
console.log(roman.calcAgeObject);

console.log(roman.calcAgenAddproperty());
console.log(roman.calculatedAge);
console.log(roman);

//---------------------Challenege:
//"Roman is a 23-year old developer, and he has a driver's license"

console.log(roman.getSummary());
