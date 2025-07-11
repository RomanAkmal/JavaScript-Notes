const friends = ["Roman", "Ateeb", "Akmal"];

//---------------Push() Method : pushes the element to the end of the Array
const newLength = friends.push("Huzaifa");
console.log(friends);
console.log(newLength);

//-----------Unshift() Method: Adds new Element to the beginning of an Array
friends.unshift("Hamass");
const newLength1 = friends.push("Huzaifa");
console.log(friends);
console.log(newLength1);

//--------------- Pop() Method : Removes the Last element from the Array:
friends.pop();
const poppedElement = friends.pop();
console.log(friends);
console.log(poppedElement);

//------------------Shift() Method: Removes the first element from the Array:
friends.shift();
const removedElement = friends.shift();
console.log(friends);
console.log(removedElement);

//---------------- indexOf() Method: search and describe the location of element's index:
console.log(friends.indexOf("Akmal"));
console.log(friends.indexOf("Roman"));

//----------------includes() Method: Returns true if element is in the Array and false if not: This method use strict equality ===
console.log(friends.includes("Akmal"));
console.log(friends.includes("Roman"));
friends.push(23);
console.log(friends.includes("23"));
console.log(friends.includes(23));

if (friends.includes("Akmal")) {
  console.log("You have a friend named Akmal");
}
