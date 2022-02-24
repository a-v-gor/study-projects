'use strict';

const gameArea = document.querySelector('.game-area');
const btnWinner = document.querySelector('.btn-winner');
const cells = gameArea.querySelectorAll('.cell');
const rules = document.querySelector('.rules');
const records = document.querySelector('.records');
const enemy = document.querySelector('.enemy');
const linkShowRules = document.querySelector('.show-rules');
const linkShowRecords = document.querySelector('.show-records');
const linkShowEnemy = document.querySelector('.game-settings');
const enemyImages = document.querySelector('.enemy-images');
const rulesBtn = document.querySelector('.rules-button');
const recordsBtn = document.querySelector('.records-button');
const recordsTable = document.querySelector('.records-table');
const signs = ['X','O'];
const hamburger = document.querySelector('.menu-toggle');
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
const players = ['robot','human'];
let player = players[0];

function playSound () {
  let audioPlayer = new Audio();
  audioPlayer.volume = 1;
  audioPlayer.src = './assets/audio/sign.mp3'
  audioPlayer.play();
}

// BURGER-MENU
function toggleMenu () {
  if (hamburger.checked) {
    hamburger.checked = false;
  };
};

// LOCAL STORAGE

function getWinnersfromLocalStorage() {
  let objForWinnersTable = JSON.parse(localStorage.getItem('ttt-data'));
  if (Object.keys(objForWinnersTable).length) {
    winnersTable = objForWinnersTable
    objForWinnersTable = {};
  }
  setDataToRecords();
};

function setWinnersTableToLocalStorage() {
  localStorage.setItem(`ttt-data`, JSON.stringify(winnersTable));
}

function setDataToRecords() {
  recordsTable.innerHTML = '';
  let recordsToTable = `<tr>
  <th>№</th>
  <th>Дата</th>
  <th>Ходы</th>
  <th>Победитель</th>
  <th>Противник</th>
  </tr>`;
  
  function firstZero (str) {
    return (str.length == 1) ? 0 + str : str;
  }

  for (let i = 0; i < Object.keys(winnersTable).length; i++) {
    let date = new Date(winnersTable[i]['date']);
    let month = String(Number(date.getMonth())+1);
    let recordsSign = winnersTable[i]['sign'];
    recordsSign = (recordsSign == 'крестики') ? '<span class="sign-x">крестики</span>' :
    (recordsSign == 'нолики') ? '<span class="sign-o">нолики</span>' :
    '<span class="sign-standoff">ничья</span>';
    let enemy = (winnersTable[i]['player'] == players[0]) ? 'робот' : 'человек';

    recordsToTable += `<tr>
    <td>${i+1}</td>
    <td>${date.getDate() + '.' +
    firstZero(month) + '.' +
    String(date.getFullYear()).slice(2) + ' ' +
    firstZero(String(date.getHours())) + ':' +
    firstZero(String(date.getMinutes()))}</td>
    <td>${winnersTable[i]['moves']}</td>
    <td>${recordsSign}</td>    
    <td>${enemy}</td>
    </tr>\n`
  };
  recordsTable.insertAdjacentHTML('beforeend', recordsToTable);
}

function setWinnerInWinnersTable() {
  let i = Object.keys(winnersTable).length;
  if (i == 10) {
    for (let j = 0; j < 9; j++) {
      winnersTable[j] = winnersTable[j+1];
    };
    i--;
  };
  winnersTable[i] = {
    ['date']: Date.now(),
    ['moves']: Math.ceil(moveCounter / 2),
    ['sign']: winner,
    ['player']: player,
  }
  console.log(winnersTable);
}

function makeMove (event) {
  if (play) {
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
      if (winner && (winner == 'крестики' || winner == 'нолики')) {
        play = false;
        setWinnerInWinnersTable();
        setDataToRecords();
        setTimeout(showWinner, 500);
      }
    };
      choosePlayer();
  }
  
}

function choosePlayer() {
  if ((sign == signs[0]) && (player == players[0])) {
    setTimeout(autoMove, 400);    
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
      return (emptyCells.includes(ourMoveVersions[0][0])) ? ourMoveVersions[0][0] :
      (emptyCells.includes(ourMoveVersions[0][2])) ? ourMoveVersions[0][2] :
      ourMoveVersions[0][1];
    } else {
      return emptyCells[0];
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
      markWinCells([item[0],item[1],item[2]]);
    };
    return winner;
  });
  if (moveCounter == 9 && !(winner)) {
    returnStandoff()
  }
}

function markWinCells(arrOfCells) {
  arrOfCells.forEach(function (cell) {
    document.getElementById(cell).classList.add('winner');
  })
}

function returnStandoff() {
  winner = 'ничья';
  setWinnerInWinnersTable();
  setDataToRecords();
  showStandoff();
}

function showWinner() {
  let spanClass = (winner == 'крестики') ? 'sign-x' : 'sign-o';
  const winnerString = `<p class="win-p">Победили<br>
  <span class="${spanClass}">${winner}!</span><br> Победа в ${Math.ceil(moveCounter / 2)} хода.</p>`;
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
    node.classList.remove('winner');
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

function showRules() {
  hideRecords();
  hideEnemy();
  rules.classList.add('show');
}

function hideRules() {
  rules.classList.remove('show');
}

function showRecords() {
  hideRules();
  hideEnemy();
  records.classList.add('show');
}

function hideRecords() {
  records.classList.remove('show');
}

function showEnemy() {
  hideRecords();
  hideRules();
  enemy.classList.add('show');
}

function hideEnemy() {
  hideRules();
  enemy.classList.remove('show');
}

function setEnemy(event) {
  player = (event.target.className == players[0]) ? players[0] : players[1];
  hideEnemy();
  startGame();
}

document.addEventListener('DOMContentLoaded', getWinnersfromLocalStorage);
gameArea.addEventListener('click', makeMove);
gameArea.addEventListener('click', playSound);
btnWinner.addEventListener('click', startGame);
linkShowRules.addEventListener('click', showRules);
rulesBtn.addEventListener('click', hideRules);
linkShowRecords.addEventListener('click', showRecords);
recordsBtn.addEventListener('click', hideRecords);
linkShowEnemy.addEventListener('click', showEnemy);
enemyImages.addEventListener('click', setEnemy);
window.addEventListener('beforeunload', setWinnersTableToLocalStorage);
document.querySelector('.menu').addEventListener('click', toggleMenu);

console.log(`Ваша отметка - 70 балла(ов)
Отзыв по пунктам ТЗ:
1. Вёрстка +10
  - реализован интерфейс игры +5
  - в футере приложения есть ссылка на гитхаб автора приложения, год создания приложения, логотип курса со ссылкой на курс +5
2. При кликах по игровому полю по очереди отображаются крестики и нолики. Первая фигура всегда крестик +10
3. Игра завершается, когда три фигуры выстроились в ряд по вертикали, горизонтали или диагонали +10
4. По окончанию игры выводится её результат - выигравшая фигура и количество ходов от начала игры до её завершения +10
5. Результаты последних 10 игр сохраняются в local storage. Есть таблица рекордов, в которой отображаются результаты предыдущих 10 игр +10
6. Анимации или звуки, или настройки игры. Баллы начисляются за любой из перечисленных пунктов +10
  Присутствуют звуки, настройки противника (можно играть с человеком и компьютером).
7. Очень высокое качество оформления приложения и/или дополнительный не предусмотренный в задании функционал, улучшающий качество приложения +10
  - высокое качество оформления приложения предполагает собственное оригинальное оформление равное или отличающееся в лучшую сторону по сравнению с демо.
  Реализована игра с компьютером.`);