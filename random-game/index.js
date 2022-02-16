'use strict';

const gameArea = document.querySelector('.game-area');
let moveCounter = 0;
let markedX = [];
let markedO = [];
let winner = '';
const btnWinner = document.querySelector('.btn-winner');


function increaseMoveCounter () {
  moveCounter++;
}

function writeInCell (event) {
  let sign;
  let numIid = Number(event.target.id);
  if (event.target.className == 'cell') {    
    if (moveCounter % 2 == 0) {
      sign = 'X';
      markedX.push(numIid);
    } else {
      sign = 'O';
      markedO.push(numIid);
    }
    increaseMoveCounter ();
    event.target.innerHTML = sign;
    event.target.classList.add(`sign-${sign.toLowerCase()}`);
    (sign == 'X') ? checkWin(markedX) : checkWin(markedO);
    if (winner) {
      showWinner();
      console.log(winner);
    }
  }
}

function showWinner () {
  const winnerString = `<p class="win-p">Победитель -<br>
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
      winner = (arrCheck == markedX) ? 'Крестики' : 'Нолики';
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

gameArea.addEventListener('click', writeInCell);
btnWinner.addEventListener('click', startGame);