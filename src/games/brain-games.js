import { getInput, print } from '../index.js';

const greeting = () => {
  print('Welcome to the Brain Games!');
  const playerName = getInput('May I have your name?');
  print(`Hello, ${playerName}!`);
};

export default greeting;
