import setSettings from './setSettings.js';
import showRecords from './showRecords.js';
import toggleSound from './toggleSound.js';
import pushFlag from './pushFlag.js';
import unpushCell from './unpushCell.js';
import pushCell from './pushCell.js';
import changeTheme from './changeTheme.js';

export default function checkClick() {
  const field = document.querySelector('.field');
  const soundBtn = document.querySelector('.settings__sound');
  const settingsBtn = document.querySelector('.settings__difficulty');
  const recordsBtn = document.querySelectorAll('.header-nav__li')[1];
  const themeBtn = document.querySelector('.theme');

  themeBtn.addEventListener('click', changeTheme);
  recordsBtn.addEventListener('click', showRecords);
  settingsBtn.addEventListener('click', setSettings);
  soundBtn.addEventListener('click', toggleSound);
  field.addEventListener('mousedown', pushCell);
  document.body.addEventListener('mouseup', unpushCell);
  field.addEventListener('contextmenu', pushFlag);
}
