'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
let momentScore = 0;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  //when player make invalid input
  if (!guess) {
    document.querySelector('.message').textContent = 'No  number!';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'YOU WIN!';
    highScore = score;
    document.querySelector('.highscore').textContent = highScore;
    document.querySelector('body').style.backgroundColor = 'green';
    momentScore = highScore;
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too Hight';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lose the game!';
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too Low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lose the game!';
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  if (momentScore > highScore) {
    highScore = momentScore;
  }
  document.querySelector('.highscore').textContent = highScore;
  document.querySelector('body').style.backgroundColor = '#222';
});
