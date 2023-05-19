import data from './data.js';
import checkClick from './checkClick.js';
import calcSettings from './calcSettings.js';
import updSoundIcon from './updSoundIcon.js';
import openCell from './openCell.js';
import addField from './addField.js';
import updStat from './updStat.js';
import hideRecords from './hideRecords.js';
import applyTheme from './applyTheme.js';

export default function startNewGame() {
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
}
