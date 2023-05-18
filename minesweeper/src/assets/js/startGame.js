import data from './data.js';
import createBody from './createBody.js';
import checkClick from './checkClick.js';
import calcSettings from './calcSettings.js';
import updSoundIcon from './updSoundIcon.js';
import saveGame from './saveGame.js';
import openCell from './openCell.js';
import addField from './addField.js';
import updStat from './updStat.js';
import hideRecords from './hideRecords.js';
import applyTheme from './applyTheme.js';

export default function startGame() {
  function startNewGame() {
    hideRecords();
    document.querySelector('.header-nav__menu-toggle').checked = false;
    clearInterval(data.timerId);
    document.querySelector('.stat__player').classList = 'stat__player';
    document.querySelector('.stat__seconds').textContent = '0';
    data.timerId = null;

    if (data.stopGame || data.newSettings) {
      data.stopGame = false;
      data.mines = [];
      data.openedCells = [];
      data.flagCells = [];
      data.nums = {};
      data.seconds = 0;
      data.moves = 0;
      data.newSettings = false;
    }

    function getSettings(event) {
      event.preventDefault();
      data.difficulty = document.querySelector('.settings__field-size-radio:checked').id;
      data.numOfMines = document.querySelector('.settings__num-mines-option:checked').value;
      data.newSettings = true;
      startNewGame();
    }

    if (!document.querySelector('.settings__window_unactive')) {
      document.querySelector('.settings__window').classList.add('settings__window_unactive');
    }

    applyTheme();
    calcSettings();
    addField();
    updSoundIcon();
    data.openedCells.forEach((el) => openCell(el));
    data.flagCells.forEach((el) => document.getElementById(el).classList.add('field__cell_flag'));
    document.querySelector('.stat__seconds').textContent = data.seconds;
    updStat();
    checkClick();

    window.addEventListener('unload', saveGame);
    document.querySelector('.header-nav__li').addEventListener('click', () => {
      data.newSettings = true;
      startNewGame();
    });
    document.querySelector('.settings__field-size-form').addEventListener('submit', getSettings);
  }

  createBody();

  const savedData = JSON.parse(localStorage.getItem('minesweeper-save'));
  localStorage.removeItem('minesweeper-save');
  Object.assign(data, savedData);
  startNewGame();
}
