'use strict';

/* const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const dice = document.querySelector('.dice');
const current0 = document.getElementById('current--0');
const current1 = document.getElementById('current--1');
const score0 = document.getElementById('score--0');
const score1 = document.getElementById('score--1');

let current = 0;

// functions

//--   change dice when I clicked the roll dice button
const updateDice = function (randomNum) {
  dice.src = `dice-${randomNum}.png`;
};

//-- update current score
const updateCurrentScore = function (randomNum) {
  current += randomNum;
  current0.textContent = total;
};

//-- update the player total when player clicked the hold button
const updateHold = function () {
  let totalScore = 0;
  totalScore += total;
  score0.textContent = totalScore;

  total = 0;
  current0.textContent = 0;
};

btnHold.addEventListener('click', e => {
  updateHold();
});

// ----------------------------------------
// click event
btnRoll.addEventListener('click', e => {
  // get random number 1-6
  let randomNum = Math.trunc(Math.random() * 6 + 1);
  console.log(randomNum);

  updateDice(randomNum);

  updateCurrentScore(randomNum);
});
 */

/* // selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//strating conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

const scores = [0, 0];
let currentscore = 0;
let activePlayer = 0;

const switchPlayer = function () {
  currentscore = 0;
  document.getElementById(`current--${activePlayer}`).textContent =
    currentscore;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// functions
const displayDice = function (randomNum) {
  diceEl.src = `dice-${randomNum}.png`;
};

// rolling dice functionality
btnRoll.addEventListener('click', e => {
  // generating random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;

  // display the dice
  displayDice(dice);

  diceEl.classList.remove('hidden');
  // check for rolled 1. if true? switch to next player .
  if (dice !== 1) {
    currentscore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentscore;
    // Add dice to the current score
  } else {
    // switch player
    switchPlayer();
  }
});

btnHold.addEventListener('click', e => {
  scores[activePlayer] += currentscore;
  document.querySelector(`#score--${activePlayer}`).textContent =
    scores[activePlayer];

  // check if player s score is >=100
  if (scores[activePlayer] >= 100) {
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player-winner');
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove('player-active');
  } else {
    switchPlayer();
  }
});
 */

// selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores, currentscore, activePlayer, playing;

// functions
const init = function () {
  scores = [0, 0];
  currentscore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--winner');
  player1El.classList.remove('player--active');

  scores = [0, 0];
  currentscore = 0;
  activePlayer = 0;
  playing = true;

  diceEl.classList.add('hidden');
};

init();

const switchPlayer = function (dice) {
  currentscore = 0;
  document.getElementById(`current--${activePlayer}`).textContent =
    currentscore;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

const updateCurrentScore = function (dice) {
  currentscore += dice;
  document.querySelector(`#current--${activePlayer}`).textContent =
    currentscore;
};

const finishTheGame = function () {
  if (scores[activePlayer] >= 100) {
    playing = false;
    diceEl.classList.add('hidden');
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove('player--active');
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--winner');
  }
};

const updateTotalScore = function () {
  scores[activePlayer] += currentscore;
  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer];

  finishTheGame();
};

// eventlisteners
btnRoll.addEventListener('click', e => {
  if (playing) {
    // genarate random number
    const dice = Math.trunc(Math.random() * 6) + 1;

    // display the correct dice
    diceEl.src = `dice-${dice}.png`;
    diceEl.classList.remove('hidden');

    if (dice !== 1) {
      // update current score
      updateCurrentScore(dice);
    } else {
      switchPlayer(dice);
    }
  }
});

btnHold.addEventListener('click', e => {
  if (playing) {
    updateTotalScore();
    switchPlayer();
  }
});

btnNew.addEventListener('click', init);
