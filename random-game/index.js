'use strict';

const gameArea = document.querySelector('.game-area');
let moveCounter = 0;
let markedX = [];
let markedO = [];
let winner = '';


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
    // console.log(markedX);
    // console.log(markedO);
    (sign == 'X') ? checkWin(markedX) : checkWin(markedO);
    if (winner) {
      console.log(winner);
    }
  }
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

gameArea.addEventListener('click', writeInCell);