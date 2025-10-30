"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

let messageElement = document.querySelector(".message");
let numberElement = document.querySelector(".number");
let scoreElement = document.querySelector(".score");
let highscoreElement = document.querySelector(".highscore");
let guessElement = document.querySelector(".guess");
let checkBtnElement = document.querySelector(".check");
let againBtnElement = document.querySelector(".again");
let bodyElement = document.querySelector("body");

// messageElement.textContent = 'Correct Number!';
// numberElement.textContent = secretNumber; // Show the winning number
// scoreElement.textContent = 10;
// guessElement.value = 23;

const displayMessage = function (message) {
  messageElement.textContent = message;
};

checkBtnElement.addEventListener("click", handleCheck);
againBtnElement.addEventListener("click", handleAgain);

function handleCheck() {
  // console.log(Number(guessElement.value));
  const guessValue = Number(guessElement.value);
  // Guard
  if (!guessValue) {
    displayMessage("No number!");
  }
  // Win
  else if (guessValue === secretNumber) {
    displayMessage("Correct Number! 🎉");
    bodyElement.style.backgroundColor = "green";
    numberElement.style.width = "30rem";
    numberElement.textContent = secretNumber;

    // Set highscore
    if (score > highscore) {
      highscore = score;
      highscoreElement.textContent = highscore;
    }
  }
  // When guess is wrong
  else if (guessValue !== secretNumber) {
    if (score > 1) {
      displayMessage(guessValue > secretNumber ? "Too high!" : "Too low!");
      score--;
      scoreElement.textContent = score;
    } else {
      displayMessage("You lost!");
    }
  }
}

function handleAgain() {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  numberElement.textContent = "?";
  displayMessage("Start guessing...");
  score = 20;
  scoreElement.textContent = score;
  guessElement.value = "";
  bodyElement.style.backgroundColor = "#222";
  numberElement.style.width = "15rem";
}
