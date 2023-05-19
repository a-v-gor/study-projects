import data from './data.js';
import createBody from './createBody.js';
import saveGame from './saveGame.js';
import startNewGame from './startNewGame.js';
import loadSavedGame from './loadSavedGame.js';
import applySettings from './applySettings.js';

export default function startGame() {
  createBody();
  loadSavedGame();
  startNewGame();

  window.addEventListener('unload', saveGame);
  document.querySelector('.header-nav__li').addEventListener('click', () => {
    data.newSettings = true;
    startNewGame();
  });
  document.querySelector('.stat__player').addEventListener('click', () => {
    data.newSettings = true;
    startNewGame();
  });
  document.querySelector('.settings__field-size-form').addEventListener('submit', applySettings);
}
