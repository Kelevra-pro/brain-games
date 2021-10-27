import _ from 'lodash';
import gameEngine from '../index.js';

const rule = 'What number is missing in the progression?';

const gameData = () => {
  const stepNum = _.random(0, 20);
  const range = _.range(0, 100, stepNum);
  const index = _.random(0, range.length - 1);
  const [rightAnswer] = range.splice(index, 1, '..');
  const task = range.join(' ');

  return [task, rightAnswer.toString()];
};

const progressionGame = () => gameEngine(rule, gameData);

export default progressionGame;
