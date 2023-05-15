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
    startGame();
  }

  function getSettings(event) {
    event.preventDefault();
    data.difficulty = document.querySelector('.settings__field-size-radio:checked').id;
    data.numOfMines = document.querySelector('.settings__num-mines-option:checked').value;
    startNewGame();
  }

  calcSettings();
  createBody();
  checkClick();
  document.querySelector('.rezult-msg__btn').addEventListener('click', startNewGame);
  document.querySelector('.header-nav__li').addEventListener('click', startNewGame);
  document.querySelector('.settings__field-size-form').addEventListener('submit', getSettings);
}
