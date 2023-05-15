import data from './data.js';
import openCell from './openCell.js';

export default function showOtherMines(id) {
  const mines = data.mines.filter((item) => item !== +id);
  for (let i = 0; i < mines.length; i += 1) {
    openCell(mines[i]);
  }
}
