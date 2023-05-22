import data from './data.js';
import showResult from './showResult.js';

export default function loadSavedGame() {
  if (localStorage.getItem('a-v-gor-minesweeper-save')) {
    showResult('load-game');
    const savedData = JSON.parse(localStorage.getItem('a-v-gor-minesweeper-save'));
    Object.assign(data, savedData);
  } else {
    showResult('no-saved');
  }
}
