import data from './data.js';

export default function updStat() {
  document.querySelector('.stat__num-moves').textContent = data.moves;
  document.querySelector('.stat__num-flags').textContent = data.flagCells.length;
  document.querySelector('.stat__num-mines').textContent = (data.mines.length || data.numOfMines) - data.flagCells.length;
}
