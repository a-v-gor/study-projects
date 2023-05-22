import showSettingsWindow from './showSettingsWindow.js';
import showRecords from './showRecords.js';
import toggleSound from './toggleSound.js';
import pushFlag from './pushFlag.js';
import unpushCell from './unpushCell.js';
import pushCell from './pushCell.js';
import changeTheme from './changeTheme.js';
import hideSettingsWindow from './hideSettingsWindow.js';
import changeMinesNum from './changeMinesNum.js';
import clearChangeMinesNum from './clearChangeMinesNum.js';
import saveGame from './saveGame.js';

export default function checkClick() {
  const field = document.querySelector('.field');
  const soundBtn = document.querySelector('.settings__sound');
  const settingsBtn = document.querySelector('.settings__difficulty');
  const recordsBtn = document.querySelectorAll('.header-nav__li')[1];
  const themeBtn = document.querySelector('.theme');
  const decreaseMinesBtn = document.querySelector('.settings__num-mines-decrease');
  const increaseMinesBtn = document.querySelector('.settings__num-mines-increase');
  const saveGameBtn = document.querySelector('.settings__save');

  saveGameBtn.addEventListener('click', saveGame);
  increaseMinesBtn.addEventListener('mousedown', changeMinesNum);
  decreaseMinesBtn.addEventListener('mousedown', changeMinesNum);
  increaseMinesBtn.addEventListener('mouseup', clearChangeMinesNum);
  decreaseMinesBtn.addEventListener('mouseup', clearChangeMinesNum);
  themeBtn.addEventListener('click', changeTheme);
  recordsBtn.addEventListener('click', showRecords);
  settingsBtn.addEventListener('click', showSettingsWindow);
  soundBtn.addEventListener('click', toggleSound);
  field.addEventListener('mousedown', pushCell);
  document.body.addEventListener('mouseup', unpushCell);
  field.addEventListener('contextmenu', pushFlag);
  document.querySelector('.settings__reject').addEventListener('click', hideSettingsWindow);
}
