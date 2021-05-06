import _ from 'lodash';
import gameEngine from '../index.js';

const rule = 'Find the greatest common divisor of given numbers.';

const getRightAnswer = (num1, num2) => {
  let a = num1;
  let b = num2;

  while (a !== 0 && b !== 0) {
    if (a > b) {
      a %= b;
    } else {
      b %= a;
    }
  }

  return (a + b);
};

const gameData = () => {
  const num1 = _.random(0, 100);
  const num2 = _.random(0, 100);

  const task = `${num1} ${num2}`;
  const rightAnswer = getRightAnswer(num1, num2);

  return [task, rightAnswer.toString()];
};

const gcdGame = () => gameEngine(rule, gameData);

export default gcdGame;
