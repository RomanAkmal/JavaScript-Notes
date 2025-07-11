const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risoto',
  'Pasta',
  'Pizza',
]);
console.log(ordersSet);

console.log(new Set('Jonas'));

//-----------------Methods for Sets:
console.log(ordersSet.size);
console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Bread'));
ordersSet.add('Garlic Bread');
console.log(ordersSet);
ordersSet.add('Garlic Bread');
ordersSet.delete('Risoto');
console.log(ordersSet);

for (const order of ordersSet) console.log(order);

ordersSet.clear();
console.log(ordersSet);

//Main use of sets is to remove duplicate values of arrays:
//Example:
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);
console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
);
console.log(new Set('Romanakmal').size);

//Even after all this sets are not a way to replace arrays but has a property when you need unique values.

//How to retrieve values from Sets:
//We can not retrieve values from set using indexes like we used to in array because in sets there are no indexes and there is no way of getting values out of a set.

//There is no need for getting values out of a set, That is because if all values are unique and if their order does not matter then there is no point.

//--------NEW OPERATIONS WE CAN DO WITH SETS Which make them useful:
const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);

//Find out which ingredient is present in both foods:

//------------intersection method:

const commonFoods = italianFoods.intersection(mexicanFoods);
console.log('Intersection:', commonFoods); //-it will give only the common ingredients bw both.
console.log([...commonFoods]); //coverting sets to array using ... expand operators.

//----------Union Method:
const italianMexicanFusion = italianFoods.union(mexicanFoods);
console.log('Union:', italianMexicanFusion);

//Another way of doing it: *A way to merge two array and get a new array with just unique values.
console.log([...new Set([...italianFoods, ...mexicanFoods])]);

//-----------Diffference Methods:
const uniqueItalianFoods = italianFoods.difference(mexicanFoods);
console.log('Difference Italian:', uniqueItalianFoods);

const uniqueMexicanFoods = mexicanFoods.difference(italianFoods);
console.log('Difference Mexican:', uniqueMexicanFoods);

//------------Symmetric Difference:
const uniqueItalianMexicanFoods =
  italianFoods.symmetricDifference(mexicanFoods);
console.log('Symmetric Difference:', uniqueItalianMexicanFoods);

//----------isDisjointFrom (is subset)
console.log(italianFoods.isDisjointFrom(mexicanFoods));
