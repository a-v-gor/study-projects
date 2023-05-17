import data from './data.js';
import changeSmile from './changeSmile.js';
import openCell from './openCell.js';
import checkIfZero from './checkIfZero.js';
import checkIfMine from './checkIfMine.js';
import checkIfWin from './checkIfWin.js';
import pushCell from './pushCell.js';

export default function unpushCell() {
  const field = document.querySelector('.field');

  changeSmile('unpush');
  const pushedCell = document.querySelector('.field__cell_push');
  if (pushedCell) {
    openCell(pushedCell.id);
    checkIfZero(pushedCell.id);
    for (let i = 0; i < data.toOpen.length; i += 1) {
      openCell(data.toOpen[i]);
    }
    data.toOpen = [];
    checkIfMine(pushedCell.id);
    checkIfWin();
  }
  if (data.stopGame) {
    field.removeEventListener('mousedown', pushCell);
    document.body.removeEventListener('mouseup', unpushCell);
  }
}
