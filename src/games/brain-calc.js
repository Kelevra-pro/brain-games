import readlineSync from 'readline-sync';
import greeting from '../cli.js';

const getRandomInt = (minimum, maximum) => {
  const min = Math.ceil(minimum);
  const max = Math.floor(maximum);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomOperation = () => {
  const index = getRandomInt(0, 2);
  const operations = ['+', '-', '*'];
  return operations[index];
};

const getRightAnswer = (num1, num2, operation) => {
  switch (operation) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return NaN;
  }
};

const calcGame = () => {
  const playerName = greeting();

  console.log('What is the result of the expression?');

  for (let i = 3; i > 0; i -= 1) {
    const num1 = getRandomInt(1, 49);
    const num2 = getRandomInt(1, 49);
    const operation = getRandomOperation();
    const rightAnswer = getRightAnswer(num1, num2, operation);

    console.log(`Question: ${num1} ${operation} ${num2}`);

    const answer = readlineSync.question('Your answer: ');

    if (rightAnswer === Number(answer)) {
      console.log('Correct!');
      if (i === 1) {
        console.log(`Congratulations, ${playerName}!`);
      }
    } else {
      console.log(
        `'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'. \n`,
        `Let's try again, ${playerName}!`,
      );
      return;
    }
  }
};

export default calcGame;
