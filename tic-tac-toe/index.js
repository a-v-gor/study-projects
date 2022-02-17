'use strict';

const gameArea = document.querySelector('.game-area');
const btnWinner = document.querySelector('.btn-winner');
const cells = gameArea.querySelectorAll('.cell');
const signs = ['X','O']
let moveCounter = 0;
let markedX = [];
let markedO = [];
let winner = '';
let sign;
let arrWin = [
  [0,4,8],
  [2,4,6],
  [1,4,7],
  [3,4,5],
  [0,1,2],
  [6,7,8],
  [0,3,6],
  [2,5,8]
];
let play = true;

function makeMove (event) {
  let numId = Number(event.target.id);
  if (event.target.className == 'cell') {
    sign = signs[Math.round(moveCounter % 2)];
    if (sign == signs[0]) {
      markedX.push(numId);
    } else {
      markedO.push(numId);
    }
    moveCounter++;
    event.target.innerHTML = sign;
    event.target.classList.add(`sign-${sign.toLowerCase()}`);
    (sign == 'X') ? checkWin(markedX) : checkWin(markedO);
    if (winner) {
      showWinner();
    }
  };
    choosePlayer ();
}

function showWinner () {
  play = false;
  const winnerString = `<p class="win-p">Победили<br>
  <span class="win-sign">${winner}!</span></p>`;
  document.querySelector('.winner-txt').insertAdjacentHTML('beforeend', winnerString);
  document.querySelector('.winner-container').classList.remove('hide');
}

function checkWin (arrCheck) {  
  arrWin.forEach (function (item) {
    if (arrCheck.includes(item[0]) && arrCheck.includes(item[1]) && arrCheck.includes(item[2])) {
      winner = (arrCheck == markedX) ? 'крестики' : 'нолики';
    };
    return winner;
  });
}

function startGame () {
  play = true;
  cells.forEach(function (node) {
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
  play = false;
  const winnerString = `<p class="win-p"><span class="win-sign">Ничья!</span></p>`;
  document.querySelector('.winner-txt').insertAdjacentHTML('beforeend', winnerString);
  document.querySelector('.winner-container').classList.remove('hide');
}

function chooseCell () {
  let emptyCells = [];
  let ourCells = [];
  let enemyCells = [];
  let resultChooseCell = '';

  // Функция выбора всех вариантов, где не мешает противник

  function getVersionsWithoutEnemy (thisOurCells, thisEenemyCells) {
    let moveVersions = [];
    let versionsWithoutEnemy = [];

    // Выбираем все возможные варианты с заполненными нашим знаком клетками

    thisOurCells.forEach(function(thisOurCell) {
      arrWin.forEach(function(winItem){
        if (winItem.includes(thisOurCell) && !(moveVersions.includes(winItem))) {
          moveVersions.push(winItem);
        }
      })
    });

    // Отсеиваем те варианты, где есть знак противника

    moveVersions.forEach(function(moveVersion){
      let withEnemy = false;

      thisEenemyCells.forEach(function(thisEenemyCell){
        if(moveVersion.includes(thisEenemyCell)){
          withEnemy = true;          
        }
      });

      if (!withEnemy) {
        versionsWithoutEnemy.push(moveVersion);
      } else {
        withEnemy = false;
      }
    })

    return versionsWithoutEnemy;
  }

  function getIdForWin(playerCells, winVersions) {
    let resGetIdForWin;
    winVersions.forEach(function(winVersion) {
      let count = 0;
      let resWinVersion;
      winVersion.forEach(function(numInWinVersion) {
        if (playerCells.includes(numInWinVersion)) {
          count++;
        } else {
          resWinVersion = numInWinVersion;
        }
      });
      if (count == 2) {
        resGetIdForWin = resWinVersion;
      }
    })
    return resGetIdForWin;
  };

  // Записываем значения ячеек в массивы

  function updateCellsInfo () {
      emptyCells = [];
      ourCells = [];
      enemyCells = [];

    cells.forEach(function (node) {
      if (node.innerHTML == '') {
        emptyCells.push(Number(node.id));
      };
      if (node.innerHTML == signs[1]) {
        ourCells.push(Number(node.id));
      };
      if (node.innerHTML == signs[0]) {
        enemyCells.push(Number(node.id));
      };
    });
  }

  // Тело функции

  updateCellsInfo ();
  if (moveCounter == 1) {
    resultChooseCell = (emptyCells.includes(4)) ? 4 : 0;
  } else if (moveCounter == 3 && enemyCells.includes(5) && enemyCells.includes(1)) {
    resultChooseCell = 2;
  } else if (moveCounter == 3 && enemyCells.includes(5) && enemyCells.includes(7)) {
    resultChooseCell = 8;
  } else {
    let ourMoveVersions = getVersionsWithoutEnemy (ourCells, enemyCells);
    let ourIdForWin = getIdForWin(ourCells, ourMoveVersions);
    if (ourIdForWin) {
      resultChooseCell = ourIdForWin;
      return resultChooseCell;
    };
    let enemyMoveVersions = getVersionsWithoutEnemy (enemyCells, ourCells);
    let enemyIdForWin = getIdForWin(enemyCells, enemyMoveVersions);
    if (typeof enemyIdForWin == 'number') {
      resultChooseCell = enemyIdForWin;
      return resultChooseCell;
    };
    if (ourMoveVersions.length) {
      ourMoveVersions.forEach(function(version) {
        version.forEach(function(numInVersion) {
          if (emptyCells.includes(numInVersion)) {
            resultChooseCell = numInVersion;
            return resultChooseCell;
          }
        })
      })
    };
    if (emptyCells.length) {
      resultChooseCell = emptyCells[0];
    } else {
      showStandoff ();
    }
  }
  return resultChooseCell;
}

function autoMove () {
  let cellToClick = chooseCell();
  if (play) {
    document.getElementById(`${cellToClick}`).click();
  }
}

function choosePlayer () {
  if (sign == signs[0]) {
    autoMove();
  }
}

gameArea.addEventListener('click', makeMove);
btnWinner.addEventListener('click', startGame);