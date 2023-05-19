import data from './data.js';

export default function saveRecord() {
  const arr = JSON.parse(localStorage.getItem('a-v-gor-minesweeper-records')) || [];
  const newRec = {
    date: new Date(),
    moves: data.moves,
    seconds: data.seconds,
    difficulty: data.difficulty,
    mines: data.numOfMines,
  };

  if (arr.length > 9) {
    arr.shift();
  }

  arr.push(newRec);
  localStorage.setItem('a-v-gor-minesweeper-records', JSON.stringify(arr));
}
