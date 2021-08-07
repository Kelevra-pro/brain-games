import _ from 'lodash';
import gameEngine from '../index.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const getRightAnswer = num => (num % 2 === 0 ? 'yes' : 'no');

const gameData = () => {
  const task = _.random(0, 99);
  const rightAnswer = getRightAnswer(task);

  return [task, rightAnswer];
};

const evenGame = () => gameEngine(rule, gameData);

export default evenGame;
