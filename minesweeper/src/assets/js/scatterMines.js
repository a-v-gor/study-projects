import data from './data.js';

export default function scatterMines() {
  while (data.mines.length < 10) {
    const rand = Math.floor(Math.random() * 100);
    if (!data.mines.includes(rand) && !data.openedCells.includes(rand)) {
      data.mines.push(rand);
    }
  }
}
