const friends = ["Roman", "Ateeb", "Akmal"]; //Creating Array using Array Literals.
console.log(friends);
console.log(friends[0]); //display or access
console.log(friends.length); //display or access he total number of elements in the array.
console.log(friends[friends.length - 1]); //display or access last element in array.
friends[3] = "Maryam"; //Adding a element in an array using index
console.log(friends);
// friends = ["Atif", "Aslam"]; // we can not replace the entire Array

const year = new Array(2002, 2005, 2007); //Creating Array using new Keyword
console.log(year);

const birthPlace = "Jeddah";
const jonas = ["Roman", "Akmal", 2025 - 2002, birthPlace, "Coder", friends];
console.log(jonas);

//----------------------------------- ARRAY EXERCISE:
const calcAge = function (birthYear) {
  return 2025 - birthYear;
};

const years = [1995, 2000, 2005, 2010, 2015];
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);
const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];
console.log(ages);
