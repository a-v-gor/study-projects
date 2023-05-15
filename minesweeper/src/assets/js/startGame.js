import data from './data.js';
import createBody from './createBody.js';
import checkClick from './checkClick.js';
import calcSettings from './calcSettings.js';

export default function startGame() {
  function startNewGame() {
    clearTimeout(data.timerId);
    data.stopGame = false;
    data.mines = [];
    data.openedCells = [];
    data.flagCells = [];
    data.nums = {};
    data.seconds = 0;
    data.moves = 0;
    console.log(data);
    startGame();
  }

  calcSettings();
  createBody();
  checkClick();
  document.querySelector('.rezult-msg__btn').addEventListener('click', startNewGame);
  document.querySelector('.header-nav__li').addEventListener('click', startNewGame);
}
