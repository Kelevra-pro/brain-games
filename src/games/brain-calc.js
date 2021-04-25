import _ from 'lodash';
import gameEngine from '../index.js';

const rule = 'What is the result of the expression?';
const operations = ['+', '-', '*'];

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

const gameData = () => {
  const num1 = _.random(0, 49);
  const num2 = _.random(0, 49);
  const randomIndex = _.random(0, operations.length - 1);
  const operation = operations[randomIndex];

  const task = `${num1} ${operation} ${num2}`;
  const rightAnswer = getRightAnswer(num1, num2, operation);

  return [task, rightAnswer.toString()];
};

const calcGame = () => gameEngine(rule, gameData);

export default calcGame;
