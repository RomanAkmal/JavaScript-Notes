'use strict';
/*
------------getting element and their text
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number !';
console.log(document.querySelector('.message').textContent);

-------------manipulating or changing element text
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

------------maniuplating or changing elements value
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

//-----Event Listener: Wait for certain event and then react to it:

//--------------Game code:

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //When guess is empty
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No Number!';
  }

  //When guess is Correct
  else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }

  //When guess is wrong
  else if (guess != secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '☹️ You lost the Game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

//When again button is clicked:
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
