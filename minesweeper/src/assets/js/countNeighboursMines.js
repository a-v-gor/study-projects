import data from './data.js';
import returnNeighbours from './returnNeighbours.js';

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
    const neighbours = returnNeighbours(mineId);
    for (let j = 0; j < neighbours.length; j += 1) {
      const num = mineId + neighbours[j];
      if (num > 0 && num < 100) {
        increaseNeighbours(num);
      }
    }
  }
}
