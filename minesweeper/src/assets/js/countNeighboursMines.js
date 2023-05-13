import data from './data.js';

export default function countNeighboursMines() {
  function createStartDataForCells() {
    for (let i = 0; i < 100; i += 1) {
      if (data.mines.includes(i)) {
        data.nums[i] = 'mine';
      } else {
        data.nums[i] = 0;
      }
    }
  }
  createStartDataForCells();

  function increaseNeighbours(id) {
    if (String(id) in data.nums && !(data.nums[id] === 'mine')) {
      data.nums[id] += 1;
    }
  }
  for (let i = 0; i < data.mines.length; i += 1) {
    const mineId = data.mines[i];
    const neighboursFull = [-11, -10, -9, -1, 1, 9, 10, 11];
    const neighboursStartLine = [-10, -9, 1, 10, 11];
    const neighboursEndLine = [-11, -10, -1, 9, 10];
    let neighbours;
    if (String(mineId).at(-1) === '0') {
      neighbours = neighboursStartLine;
    } else if (String(mineId).at(-1) === '9') {
      neighbours = neighboursEndLine;
    } else {
      neighbours = neighboursFull;
    }

    for (let j = 0; j < neighbours.length; j += 1) {
      increaseNeighbours(mineId + neighbours[j]);
    }
  }
}
