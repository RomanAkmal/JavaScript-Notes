'use strict';
const runOnce = function () {
  console.log('This will never run again');
};

runOnce();

//IIFE
(function () {
  console.log('This will never run again');
})();

//IIFE for Arrow function:

(() => console.log('This will never run again'))();

{
  const isPrivate = 23;
}

console.log(isPrivate);
