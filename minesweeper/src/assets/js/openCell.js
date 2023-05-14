import showCellValue from './showCellValue.js';

export default function openCell(id) {
  const cell = document.getElementById(id);

  cell.classList.remove('field__cell_push');
  cell.classList.add('field__cell_unpush');
  showCellValue(id);
}
