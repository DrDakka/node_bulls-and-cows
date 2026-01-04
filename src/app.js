'use strict';
const readline = require('readline');
const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { getBullsAndCows } = require('./modules/getBullsAndCows');

const term = readline.createInterface(
  process.stdin,
  process.stdout
)

function game() {
  const numberToGuess = generateRandomNumber();

  function askQuestion() {
    term.question('Enter your number: ', (input) => {
      const validInput = checkIsValidUserInput(input);

      if (!validInput.ok) {
        console.log(validInput.err);
        askQuestion();
        return;
      }

      const res = getBullsAndCows(validInput.data, numberToGuess)
      console.log(res);

      if (res.bulls === 4) {
        console.log('You won!');
        term.close();
      } else {
        askQuestion()
      }
    })
  }

  askQuestion()
}

game();
// Write your code here
