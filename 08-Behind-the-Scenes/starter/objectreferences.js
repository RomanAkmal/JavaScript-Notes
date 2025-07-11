'use strict';

//-----------Copying object and changing properites
const jennefer = {
  firstName: 'jennefer',
  lastName: 'jones',
  age: 27,
};
const divorcedJennefer = jennefer;
divorcedJennefer.lastName = 'stalk';
console.log('Before:', jennefer);
console.log('After:', divorcedJennefer);

//-----------Copying object and changing properites using function
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

function marryPerson(orignalPerson, newLastName) {
  orignalPerson.lastName = newLastName;
  return orignalPerson;
}
const marriedJessica = marryPerson(jessica, 'Davis');
console.log('Before:', jessica);
console.log('After:', marriedJessica);
//due to both variables in call stack are pointing or having the reference of the same object in the heap, that is the reason changing or mutating one effects both as both are based on the same object.

//-----------------What if we really want to copy the object itself rather than reference to avoid this situation: meaning creating a brand new object in the heap which looks exactly like the orignal object.

const hania = {
  firstName: 'Hania',
  lastName: 'Amir',
  age: 27,
  family: ['Roman', 'Ateeb'],
};

//Shallow copy because it copied the first level and the object in this object which is family is not copied but refered.
const haniaCopy = { ...hania }; //copy all these properties to a new object
haniaCopy.lastName = 'Roman';
console.log(hania, haniaCopy);

//----------But this method also have a problem:
haniaCopy.family.push('Mary');
haniaCopy.family.push('John');
console.log('Before:', hania);
console.log('After:', haniaCopy); // this happened because of with { ... } we copied just the first level not the nested levels like family this is also called shallow copy.

//--------------------Deep copy/ clone of the object to solve this problem:
const haniaClone = structuredClone(hania);
haniaClone.lastName = 'Roman';
haniaClone.family.push('Smith');
haniaClone.family.push('William');
console.log('Before Clone:', hania);
console.log('After Clone:', haniaClone);
