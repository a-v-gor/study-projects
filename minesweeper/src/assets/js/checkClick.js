import data from './data.js';
import scatterMines from './scatterMines.js';
import countNeighboursMines from './countNeighboursMines.js';
import openCell from './openCell.js';
import checkIfZero from './checkIfZero.js';

export default function checkClick() {
  const field = document.querySelector('.field');
  const smile = document.querySelector('.stat__player');

  function pushCell(event) {
    const id = Number(event.target.id);
    if (!data.openedCells.includes(id)) {
      smile.classList.add('stat__player_push');
      data.openedCells.push(id);
      if (!data.mines.length) {
        scatterMines();
        countNeighboursMines();
      }
      event.target.closest('.field__cell').classList.add('field__cell_push');
    }
  }

  function unpushCell() {
    smile.classList.remove('stat__player_push');
    const pushedCell = document.querySelector('.field__cell_push');
    if (pushedCell) {
      openCell(pushedCell.id);
      checkIfZero(pushedCell.id);
    }
  }

  field.addEventListener('mousedown', pushCell);
  document.body.addEventListener('mouseup', unpushCell);
}
