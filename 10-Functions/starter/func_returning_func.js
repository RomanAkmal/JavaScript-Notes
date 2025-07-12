const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('Roman');
greeterHey('Steven');

greet('Hello')('Jonas');

//--------Rewritting the greet function with Arrow function:

greetArrow = greeting =>
  function (name) {
    console.log(`${greeting} ${name}`);
  };

greetArrow('Hello')('MOMO');
