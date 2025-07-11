/*
CODING CHALLENEGE #4


Write a program that recieves a list of variable name written in underscore_case and converts them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

This TEST DATA (pasted to textarea)
underscore_case
  first_name
Some_Variable
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 seperate console.log outputs)

underscoreCase...... ✅
firstName........... ✅✅
someVariable........ ✅✅✅
calculateAge........ ✅✅✅✅
delayedDeparture.... ✅✅✅✅✅

Hint1: Remember which character defines a new line in the textarea
Hint2: The solution only needs to work for a variable made out of 2 words, like a_b
Hint3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working.
Hint4: This challenge is difficult on purpose, so start watching the solution, In case you're stuck. Then pause and continue !

Afterwards, test with your own test data!

Good Luck.


*/

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

const button = document.querySelector('button');
button.addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const lowerCaseAll = text.toLowerCase();

  const nextLineArray = lowerCaseAll.split('\n');

  for (const [index, word] of nextLineArray.entries()) {
    const removeUnderscore = word.trim().split('_');
    const capitalizing = removeUnderscore[1].toUpperCase();
    mergeWithCamCase =
      removeUnderscore[0] +
      capitalizing.slice(0, 1) +
      removeUnderscore[1].slice(1);
    // console.log(mergeWithCamCase);
    // console.log(mergeWithCamCase);
    console.log(mergeWithCamCase.padEnd(20, '.') + '✅'.repeat(index + 1));
  }
});
