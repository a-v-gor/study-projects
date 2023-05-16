import data from './data.js';

export default function saveRecord() {
  const arr = JSON.parse(localStorage.getItem('minesweeper-records')) || [];
  const newRec = {
    date: new Date(),
    moves: data.moves,
    seconds: data.seconds,
    difficulty: data.difficulty,
    mines: data.numOfMines,
  };

  arr.push(newRec);
  localStorage.setItem('minesweeper-records', JSON.stringify(arr));
}
