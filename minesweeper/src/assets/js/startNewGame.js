import data from './data.js';
import checkClick from './checkClick.js';
import calcSettings from './calcSettings.js';
import updSoundIcon from './updSoundIcon.js';
import openCell from './openCell.js';
import addField from './addField.js';
import updStat from './updStat.js';
import applyTheme from './applyTheme.js';
import hideSettingsWindow from './hideSettingsWindow.js';

export default function startNewGame() {
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

  hideSettingsWindow();
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