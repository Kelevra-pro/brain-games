import readlineSync from 'readline-sync';

export const print = output => console.log(output);
export const getInput = question => readlineSync.question(`${question} `);

const numberOfTries = 3;

const gameEngine = (rule, gameData) => {
  print('Welcome to the Brain Games!');
  const playerName = getInput('May I have your name?');
  print(`Hello, ${playerName}!`);
  print(rule);

  for (let i = 0; i < numberOfTries; i += 1) {
    const [task, rightAnswer] = gameData();
    print(`Question: ${task}`);
    const playerAnswer = getInput('Your answer:');

    if (playerAnswer !== rightAnswer) {
      print(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      print(`Let's try again, ${playerName}!`);
      return;
    }
    print('Correct!');
  }
  print(`Congratulations, ${playerName}!`);
};

export default gameEngine;
