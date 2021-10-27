import _ from 'lodash';
import gameEngine from '../index.js';

const rule = 'Answer \'yes\' if given number is prime. Otherwise answer \'no\'.';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return num > 1;
};

const gameData = () => {
  const task = _.random(0, 20);
  const rightAnswer = isPrime(task) ? 'yes' : 'no';

  return [task, rightAnswer];
};

const primeGame = () => gameEngine(rule, gameData);

export default primeGame;
