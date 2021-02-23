import readlineSync from 'readline-sync';
import greeting from '../cli.js';

const getRandomInt = () => {
  const min = 1;
  const max = 99;
  return Math.floor(Math.random() * (max - min)) + min;
};

const getRightAnswer = (int) => (int % 2 === 0 ? 'yes' : 'no');

const evenGame = () => {
  const playerName = greeting();

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 3; i > 0; i -= 1) {
    const randomInt = getRandomInt();
    const rightAnswer = getRightAnswer(randomInt);

    console.log(`Question: ${randomInt}`);

    const answer = readlineSync.question('Your answer: ');

    if (rightAnswer === answer) {
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

export default evenGame;
