import data from './data.js';

export default function loadSavedGame() {
  const savedData = JSON.parse(localStorage.getItem('a-v-gor-minesweeper-save'));
  localStorage.removeItem('a-v-gor-minesweeper-save');
  Object.assign(data, savedData);
}
