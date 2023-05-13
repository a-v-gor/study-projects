import data from './data.js';
import scatterMines from './scatterMines.js';
import countNeighboursMines from './countNeighboursMines.js';
import showCellValue from './showCellValue.js';

export default function checkClick() {
  function pushCell(event) {
    data.openedCells.push(Number(event.target.id));
    if (!data.mines.length) {
      scatterMines();
      countNeighboursMines();
    }
    event.target.classList.add('field__cell_push');
  }

  function unpushCell() {
    const pushedCell = document.querySelector('.field__cell_push');
    if (pushedCell) {
      pushedCell.classList.remove('field__cell_push');
      pushedCell.classList.add('field__cell_unpush');
      showCellValue(pushedCell.id);
    }
  }

  const field = document.querySelector('.field');

  field.addEventListener('mousedown', pushCell);
  document.body.addEventListener('mouseup', unpushCell);
}
