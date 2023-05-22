import createBody from './createBody.js';
import startNewGame from './startNewGame.js';
import applySettings from './applySettings.js';
import loadSavedGame from './loadSavedGame.js';
import data from './data.js';

export default function startGame() {
  createBody();
  startNewGame();

  function startSavedGame() {
    loadSavedGame();
    if (!data.stopGame) {
      startNewGame();
    }
  }

  function startClearGame() {
    data.newSettings = true;
    startNewGame();
  }

  document.querySelector('.settings__load').addEventListener('click', startSavedGame);
  document.querySelector('.header-nav__li').addEventListener('click', startClearGame);
  document.querySelector('.stat__player').addEventListener('click', startClearGame);
  document.querySelector('.settings__field-size-form').addEventListener('submit', applySettings);
}
