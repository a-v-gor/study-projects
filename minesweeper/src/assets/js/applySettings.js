import data from './data.js';
import startNewGame from './startNewGame.js';

export default function applySettings(event) {
  event.preventDefault();
  data.difficulty = document.querySelector('.settings__field-size-radio:checked').id;
  data.numOfMines = document.querySelector('.settings__num-mines').value;
  data.newSettings = true;
  startNewGame();
}
