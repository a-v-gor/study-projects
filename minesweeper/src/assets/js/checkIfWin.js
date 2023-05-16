import data from './data.js';
import changeSmile from './changeSmile.js';
import showResult from './showResult.js';
import playAudio from './playAudio.js';
import saveRecord from './saveRecord.js';

export default function checkIfWin() {
  if (!data.stopGame && data.openedCells.length === (data.numOfCells - data.numOfMines)) {
    data.stopGame = true;
    saveRecord();
    changeSmile('win');
    showResult('win');
    playAudio('win');
    clearInterval(data.timerId);
  }
}
