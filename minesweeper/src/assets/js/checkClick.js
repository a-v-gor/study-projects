import data from './data.js';
import scatterMines from './scatterMines.js';
import countNeighboursMines from './countNeighboursMines.js';
import showCellValue from './showCellValue.js';

export default function checkClick() {
  const field = document.querySelector('.field');
  const smile = document.querySelector('.stat__player');

  function pushCell(event) {
    smile.classList.add('stat__player_push');
    data.openedCells.push(Number(event.target.id));
    if (!data.mines.length) {
      scatterMines();
      countNeighboursMines();
    }
    event.target.closest('.field__cell').classList.add('field__cell_push');
  }

  function unpushCell() {
    smile.classList.remove('stat__player_push');
    const pushedCell = document.querySelector('.field__cell_push');
    if (pushedCell) {
      pushedCell.classList.remove('field__cell_push');
      pushedCell.classList.add('field__cell_unpush');
      showCellValue(pushedCell.id);
    }
  }

  

  field.addEventListener('mousedown', pushCell);
  document.body.addEventListener('mouseup', unpushCell);
}
