'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

let messageElement = document.querySelector('.message');
let numberElement = document.querySelector('.number');
let scoreElement = document.querySelector('.score');
let guessElement = document.querySelector('.guess');
let checkBtnElement = document.querySelector('.check');

// messageElement.textContent = 'Correct Number!';
numberElement.textContent = secretNumber;
// scoreElement.textContent = 10;
// guessElement.value = 23;

checkBtnElement.addEventListener('click', handleClick);

function handleClick() {
  // console.log(Number(guessElement.value));
  const guessValue = Number(guessElement.value);
  if (!guessValue) messageElement.textContent = 'No number!';

  if (guessValue === secretNumber) {
    messageElement.textContent = 'Correct Number! 🎉';
  } else if (guessValue > secretNumber) {
    if (score > 0) {
      messageElement.textContent = 'Too high!';
      score--;
      scoreElement.textContent = score;
    } else {
      messageElement.textContent = 'You lost!';
    }
  } else if (guessValue < secretNumber) {
    if (score > 0) {
      messageElement.textContent = 'Too low!';
      score--;
      scoreElement.textContent = score;
    } else {
      messageElement.textContent = 'You lost!';
    }
  }
}

// * 008 Manipulating CSS Styles
