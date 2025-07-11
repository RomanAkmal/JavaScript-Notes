const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set('2', 'Lisbon. Portugal'));

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open')
  .set(false, 'We are closed :(');

console.log(rest);
console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get('1'));
console.log(rest.get('2'));

//----utilising boolean with this example
const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

//METHODS AVAILABLE ON MAPS:
console.log(rest.has('categories'));

rest.delete('2');
console.log(rest);

console.log(rest.size);

// rest.clear();
// console.log(rest);

//-----using objects as map keys:
const arr = [1, 2];
rest.set(arr, 'Test');
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);

console.log(rest.get(arr));

//----------Another way of populating map without having to use set method:
const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Your answer is correct🎉🎉'],
  [false, 'Try Again, you did not guessed it right ❌😓'],
]);

//convert object to map:
console.log(question);

const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

//As these two are just same in behaviour:
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

//----------MAPS ITERATIONS:
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Aswer ${key}: ${value}`);
}

// const answer = Number(prompt('Your aswer'));
const answer = Number(prompt('Choose the correct number!'));
if (answer === question.get('correct')) {
  console.log(question.get(true));
} else {
  console.log(question.get(false));
}
console.log(answer);

//------------------CONVERT MAP BACK TO AN ARRAY:

//MAPS METHODS:
console.log([...question]);
console.log([...question.entries()]);
console.log([...question.keys()]);
console.log([...question.values()]);
