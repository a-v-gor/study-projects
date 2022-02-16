'use strict';

const gameArea = document.querySelector('.game-area');
let moveCounter = 0;
let markedX = [];
let markedO = [];
let winner = '';
const btnWinner = document.querySelector('.btn-winner');

function makeMove (event) {
  let sign;
  let numId = Number(event.target.id);
  if (event.target.className == 'cell') {    
    if (moveCounter % 2 == 0) {
      sign = 'X';
      markedX.push(numId);
    } else {
      sign = 'O';
      markedO.push(numId);
    }
    moveCounter++;
    event.target.innerHTML = sign;
    event.target.classList.add(`sign-${sign.toLowerCase()}`);
    (sign == 'X') ? checkWin(markedX) : checkWin(markedO);
    if (winner) {
      showWinner();
    }
    if (moveCounter == 9) {
      showStandoff();
    }
  }
}

function showWinner () {
  const winnerString = `<p class="win-p">Победили<br>
  <span class="win-sign">${winner}!</span></p>`;
  document.querySelector('.winner-txt').insertAdjacentHTML('beforeend', winnerString);
  document.querySelector('.winner-container').classList.remove('hide');
}

function checkWin (arrCheck) {  
  let arrWin = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [1,4,7],
    [2,4,6]
  ];

  arrWin.forEach (function (item) {
    if (arrCheck.includes(item[0]) && arrCheck.includes(item[1]) && arrCheck.includes(item[2])) {
      winner = (arrCheck == markedX) ? 'крестики' : 'нолики';
    };
    return winner;
  });
}

function startGame () {
  gameArea.querySelectorAll('.cell').forEach(function (node) {
    node.classList.remove('sign-x');
    node.classList.remove('sign-o');
    node.innerHTML = '';
  });
  nullVariables ();
  document.querySelector('.winner-container').classList.add('hide');
  document.querySelector('.winner-txt').innerHTML = '';
  
}

function nullVariables () {
  moveCounter = 0;
  markedX = [];
  markedO = [];
  winner = '';
}

function showStandoff () {
  const winnerString = `<p class="win-p"><span class="win-sign">Ничья!</span></p>`;
  document.querySelector('.winner-txt').insertAdjacentHTML('beforeend', winnerString);
  document.querySelector('.winner-container').classList.remove('hide');
}

gameArea.addEventListener('click', makeMove);
btnWinner.addEventListener('click', startGame);