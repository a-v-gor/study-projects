import data from './data.js';
import returnNeighbours from './returnNeighbours.js';

export default function checkIfZero(id) {
  if (data.nums[id] === 0) {
    const neighbours = returnNeighbours(+id);

    for (let i = 0; i < neighbours.length; i += 1) {
      if (!data.openedCells.includes(neighbours[i]) && !data.flagCells.includes(neighbours[i])) {
        const cell = document.getElementById(neighbours[i]);
        const newClick = new Event('mousedown', { bubbles: true });
        newClick.button = 0;
        const newUnclick = new Event('mouseup', { bubbles: true });
        cell.dispatchEvent(newClick);
        cell.dispatchEvent(newUnclick);
      }
    }
  }
}
