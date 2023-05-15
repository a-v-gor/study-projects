import data from './data.js';
import returnNeighbours from './returnNeighbours.js';

export default function checkIfZero(id) {
  if (data.nums[id] === 0) {
    if (!data.toOpen.includes(+id)) {
      data.toOpen.push(+id);
    }
    const neighbours = returnNeighbours(+id);

    for (let i = 0; i < neighbours.length; i += 1) {
      if (!data.openedCells.includes(neighbours[i])
      && !data.flagCells.includes(neighbours[i])
      && !data.toOpen.includes(neighbours[i])) {
        data.toOpen.push(neighbours[i]);
        checkIfZero(neighbours[i]);
      }
    }
  }
}
