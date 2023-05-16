import data from './data.js';
import changeSmile from './changeSmile.js';
import showOtherMines from './showOtherMines.js';
import showResult from './showResult.js';
import playAudio from './playAudio.js';

export default function checkIfMine(id) {
  if (data.nums[id] === 'mine') {
    changeSmile('mine');
    data.stopGame = true;
    const cell = document.getElementById(id);
    cell.classList.add('field__cell_boom');
    showOtherMines(id);
    showResult('mine');
    playAudio('mine');
    clearTimeout(data.timerId);
  }
}
