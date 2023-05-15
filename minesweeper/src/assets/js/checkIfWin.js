import data from './data.js';
import changeSmile from './changeSmile.js';
import showResult from './showResult.js';
import playAudio from './playAudio.js';

export default function checkIfWin(id) {
  if (data.openedCells.length === 90 && !data.mines.includes(id)) {
    data.stopGame = true;
    changeSmile('win');
    showResult('win');
    playAudio('win');
  }
}
