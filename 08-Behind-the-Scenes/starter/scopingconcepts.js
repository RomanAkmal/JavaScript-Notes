'use strict';

function calcAge(birthYaer) {
  const age = 2025 - birthYaer;
  function printAge() {
    let output = `${firstName} is ${age}, born in ${birthYaer}`;
    console.log(output);

    if (birthYaer >= 1981 && birthYaer <= 19996) {
      var millenial = true;

      //Creating new variable with same name as outer scope's variable
      const firstName = 'Ateeb';

      //Reassigning outer Scope's variable:
      output = 'New Output';

      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    console.log(millenial);
    //console.log(add(2, 3));
    console.log(output);
  }
  printAge();
  return age;
}

let firstName = 'Roman';
calcAge(2002);
