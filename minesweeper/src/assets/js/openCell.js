import data from './data.js';
import showCellValue from './showCellValue.js';

export default function openCell(id) {
  const cell = document.getElementById(id);
  const val = data.nums[id];
  cell.classList.remove('field__cell_push');
  cell.classList.add('field__cell_unpush');

  if (val !== 'mine' && val !== 0) {
    let newClasslist = '';
    if (val === 1) {
      newClasslist = 'field__cell-one';
    } else if (val === 2) {
      newClasslist = 'field__cell-two';
    } else if (val === 3) {
      newClasslist = 'field__cell-three';
    } else if (val === 4) {
      newClasslist = 'field__cell-four';
    } else if (val === 5) {
      newClasslist = 'field__cell-five';
    } else if (val === 6) {
      newClasslist = 'field__cell-six';
    } else if (val === 7) {
      newClasslist = 'field__cell-seven';
    } else if (val === 8) {
      newClasslist = 'field__cell-eight';
    }
    cell.classList.add(newClasslist);
  }

  showCellValue(id);
}
