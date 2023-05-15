import data from './data.js';
import scatterMines from './scatterMines.js';
import countNeighboursMines from './countNeighboursMines.js';
import openCell from './openCell.js';
import checkIfZero from './checkIfZero.js';
import checkIfMine from './checkIfMine.js';
import changeSmile from './changeSmile.js';
import checkIfWin from './checkIfWin.js';
import increaseNum from './increaseNum.js';
import timer from './timer.js';

export default function checkClick() {
  const field = document.querySelector('.field');

  function pushCell(event) {
    if (event.button === 0 && event.target.classList.value === 'field__cell') {
      const id = Number(event.target.id);
      if (!data.openedCells.includes(id) && !data.flagCells.includes(id)) {
        if (event.isTrusted) {
          increaseNum('.stat__num-moves');
          data.moves += 1;
        }
        changeSmile('push');
        data.openedCells.push(id);
        if (!data.mines.length) {
          scatterMines();
          countNeighboursMines();
          timer();
        }
        event.target.closest('.field__cell').classList.add('field__cell_push');
      }
    }
  }

  function pushFlag(event) {
    event.preventDefault();
    if (!data.stopGame) {
      const id = Number(event.target.id);
      if (!data.openedCells.includes(id) && !data.flagCells.includes(id)) {
        data.flagCells.push(id);
        event.target.closest('.field__cell').classList.add('field__cell_flag');
      } else if (data.flagCells.includes(id)) {
        event.target.closest('.field__cell').classList.remove('field__cell_flag');
        data.flagCells = data.flagCells.filter((el) => el !== id);
      }
    }
  }

  function unpushCell() {
    changeSmile('unpush');
    const pushedCell = document.querySelector('.field__cell_push');
    if (pushedCell) {
      openCell(pushedCell.id);
      checkIfZero(pushedCell.id);
      checkIfMine(pushedCell.id);
      checkIfWin(pushedCell.id);
    }
    if (data.stopGame) {
      field.removeEventListener('mousedown', pushCell);
      document.body.removeEventListener('mouseup', unpushCell);
    }
  }

  field.addEventListener('mousedown', pushCell);
  document.body.addEventListener('mouseup', unpushCell);
  field.addEventListener('contextmenu', pushFlag);
}
