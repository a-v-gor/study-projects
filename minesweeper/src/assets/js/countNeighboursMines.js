import data from './data.js';
import returnNeighbours from './returnNeighbours.js';

export default function countNeighboursMines() {
  function createStartDataForCells() {
    for (let i = 0; i < data.numOfCells; i += 1) {
      if (data.mines.includes(i)) {
        data.nums[i] = 'mine';
      } else {
        data.nums[i] = 0;
      }
    }
  }

  function increaseNeighbours(id) {
    if (String(id) in data.nums && !(data.nums[id] === 'mine')) {
      data.nums[id] += 1;
    }
  }

  createStartDataForCells();
  for (let i = 0; i < data.mines.length; i += 1) {
    const mineId = data.mines[i];
    const neighbours = returnNeighbours(mineId);
    for (let j = 0; j < neighbours.length; j += 1) {
      increaseNeighbours(neighbours[j]);
    }
  }
}
