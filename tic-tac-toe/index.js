'use strict';

const gameArea = document.querySelector('.game-area');
const btnWinner = document.querySelector('.btn-winner');
const cells = gameArea.querySelectorAll('.cell');
const rules = document.querySelector('.rules');
const records = document.querySelector('.records');
const linkShowRules = document.querySelector('.show-rules');
const linkShowRecords = document.querySelector('.show-records');
const rulesBtn = document.querySelector('.rules-button');
const recordsBtn = document.querySelector('.records-button');

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
let winnersTable = {};

// LOCAL STORAGE

// function setWinnerInLocalStorage() {
//   localStorage.setItem('ttt-time', String(Date.now()));
//   localStorage.setItem('ttt-winner', winner);
//   localStorage.setItem('ttt-moves', Math.floor(moveCounter / 2));
// }

function showWinnersTable() {

}

function setWinnerInWinnersTable() {
  let i = Object.keys(winnersTable).length
  if (i == 10) {
    for (let j = 9; j > 0; j--) {
      winnersTable[j-1] = winnersTable[j];
    };
    i--;
  };
  winnersTable[i] = {
    ['date']: Date.now(),
    ['moves']: Math.floor(moveCounter / 2),
    ['sign']: winner
  }
  console.log(winnersTable);
}

function getWinnersfromLocalStorage() {
  let objForWinnersTable = {};
  for (let i = 0; i<localStorage.length; i++) {    
    let key = localStorage.key(i);
    let data = localStorage.getItem(key);

    if (key.includes('ttt-time')) {
      objForWinnersTable['date'] = Date(data);
    } else if (key.includes('ttt-winner')) {
      objForWinnersTable['sign'] = data;
    } else if (key.includes('ttt-moves')) {
      objForWinnersTable['moves'] = Number(data);
    };
  }
  if (Object.keys(objForWinnersTable).length) {
    addDataToWinnersTable(objForWinnersTable);
    objForWinnersTable = {};
  }
};

function addDataToWinnersTable(dataObj) {
  let numKey = Object.keys(winnersTable).length;
  winnersTable[numKey] = dataObj;
  console.log(winnersTable);
}

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
      setWinnerInWinnersTable();
      showWinner();
    }
  };
    choosePlayer();
}

function choosePlayer() {
  if (sign == signs[0]) {
    autoMove();
  }
}

function autoMove() {
  let cellToClick = chooseCell();
  if (play) {
    document.getElementById(`${cellToClick}`).click();
  }
}

function chooseCell() {
  let emptyCells = [];
  let ourCells = [];
  let enemyCells = [];
  let resultChooseCell = '';

  // Записываем значения ячеек в массивы

  function updateCellsInfo() {
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

  function returnFirstMove() {
    return (emptyCells.includes(4)) ? 4 : 0;
  }

  function returnSecondMove() {
    if ((enemyCells.includes(5) && enemyCells.includes(1)) || (enemyCells.includes(5) && enemyCells.includes(7))) {
      return 2;
    };
    if ((enemyCells.includes(0) && enemyCells.includes(8)) || (enemyCells.includes(2) && enemyCells.includes(6))) {
      return 1;
    };
    return returnOtherMove();
  }

  function returnOtherMove() {
    let ourMoveVersions = getVersionsWithoutEnemy (ourCells, enemyCells);
    let ourIdForWin = getIdForWin(ourCells, ourMoveVersions);
    if (typeof ourIdForWin == 'number') {
       return ourIdForWin;
    };
    let enemyMoveVersions = getVersionsWithoutEnemy (enemyCells, ourCells);
    let enemyIdForWin = getIdForWin(enemyCells, enemyMoveVersions);
    if (typeof enemyIdForWin == 'number') {
      return enemyIdForWin;
    };
    if (ourMoveVersions.length) {
      return ourMoveVersions[0][0];
    } else if (emptyCells.length) {
      return emptyCells[0];
    } else {
      winner = 'ничья';
      setWinnerInWinnersTable();
      showStandoff();
    }    
  }

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

      thisEenemyCells.forEach(function(thisEnemyCell){
        if(moveVersion.includes(thisEnemyCell)){
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

  // Тело функции

  updateCellsInfo();
  if (moveCounter == 1) {
    resultChooseCell = returnFirstMove(); 
  } else if (moveCounter == 3) {
    resultChooseCell = returnSecondMove();
  } else {
    resultChooseCell = returnOtherMove();
  } 
  return resultChooseCell;
}

function checkWin (arrCheck) {  
  arrWin.forEach (function (item) {
    if (arrCheck.includes(item[0]) && arrCheck.includes(item[1]) && arrCheck.includes(item[2])) {
      winner = (arrCheck == markedX) ? 'крестики' : 'нолики';
    };
    return winner;
  });
}

function showWinner() {
  play = false;
  const winnerString = `<p class="win-p">Победили<br>
  <span class="win-sign">${winner}!</span><br> Победа в ${Math.floor(moveCounter / 2)} хода.</p>`;
  document.querySelector('.winner-txt').insertAdjacentHTML('beforeend', winnerString);
  document.querySelector('.winner-container').classList.remove('hide');
}

function showStandoff() {
  play = false;
  const winnerString = `<p class="win-p"><span class="win-sign">Ничья!</span></p>`;
  document.querySelector('.winner-txt').insertAdjacentHTML('beforeend', winnerString);
  document.querySelector('.winner-container').classList.remove('hide');
}

function startGame() {
  play = true;
  cells.forEach(function (node) {
    node.classList.remove('sign-x');
    node.classList.remove('sign-o');
    node.innerHTML = '';
  });
  nullVariables();
  document.querySelector('.winner-container').classList.add('hide');
  document.querySelector('.winner-txt').innerHTML = '';
  
}

function nullVariables() {
  moveCounter = 0;
  markedX = [];
  markedO = [];
  winner = '';
}

function showRules () {
  hideRecords();
  rules.classList.add('show');
}

function hideRules () {
  rules.classList.remove('show');
}

function showRecords () {
  hideRules();
  records.classList.add('show');
}

function hideRecords () {
  records.classList.remove('show');
}

document.addEventListener('DOMContentLoaded', getWinnersfromLocalStorage);
gameArea.addEventListener('click', makeMove);
btnWinner.addEventListener('click', startGame);
linkShowRules.addEventListener('click', showRules);
rulesBtn.addEventListener('click', hideRules);
linkShowRecords.addEventListener('click', showRecords);
recordsBtn.addEventListener('click', hideRecords);