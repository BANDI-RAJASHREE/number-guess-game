let randomNumber = Math.floor(Math.random() * 100) + 1;

  

const submit = document.querySelector('#subt');

const userInput = document.querySelector('#guessField');

const guessSlot = document.querySelector('.guesses'); 

const remaining = document.querySelector('.lastResult'); 

const lowOrHi = document.querySelector('.lowOrHi'); 

const startOver = document.createElement('div'); 

  

let prevGuesses = [];

let numGuesses = 1;

let playGame = true;

  

if (playGame) {

  submit.addEventListener('click', function (e) {

    e.preventDefault();

    const guess = parseInt(userInput.value);

    validateGuess(guess);

  });

}

  

function validateGuess(guess) {

  if (isNaN(guess) || guess < 1 || guess > 100) {

    alert("Please enter a valid number between 1 and 100.");

  } else {

    prevGuesses.push(guess);

    if (numGuesses === 10) {

      displayGuess(guess);

      displayMessage(`Game Over! The correct number was ${randomNumber}`);

      endGame();

    } else {

      displayGuess(guess);

      checkGuess(guess);

    }

  }

}

  

function checkGuess(guess) {

  if (guess === randomNumber) {

    displayMessage(`🎉 Congratulations! You guessed it right!`);

    endGame();

  } else if (guess < randomNumber) {

    displayMessage(`📉 Too low! Try a higher number.`);

  } else {

    displayMessage(`📈 Too high! Try a lower number.`);

  }

}

  

function displayGuess(guess) {

  userInput.value = '';

  guessSlot.innerHTML += `${guess} `;

  numGuesses++;

  remaining.innerHTML = `${10 - numGuesses}`;

}

  

function displayMessage(message) {

  lowOrHi.innerHTML = `<h2>${message}</h2>`;

}

  

function endGame() {

  userInput.value = '';

  userInput.setAttribute('disabled', '');

  

  startOver.innerHTML = `<button id="newGame" class="btn">Start New Game</button>`;

  document.body.appendChild(startOver);

  

  playGame = false;

  

  document.querySelector('#newGame').addEventListener('click', function () {

    newGame();

  });

}

  

function newGame() {

  randomNumber = Math.floor(Math.random() * 100) + 1;

  prevGuesses = [];

  numGuesses = 1;

  guessSlot.innerHTML = '';

  remaining.innerHTML = '10';

  lowOrHi.innerHTML = ''; 

  

  userInput.removeAttribute('disabled');

  startOver.innerHTML = ''; 

  playGame = true;

}

