import data from './data.js';
import returnNeighbours from './returnNeighbours.js';

export default function checkIfZero(id) {
  if (data.nums[id] === 0) {
    const neighbours = returnNeighbours(id);

    for (let i = 0; i < neighbours.length; i += 1) {
      const num = +id + neighbours[i];
      console.log(num);
      if (num > 0 && num < 100) {
        const cell = document.getElementById(num);
        const newClick = new Event('mousedown', { bubbles: true });
        const newUnclick = new Event('mouseup', { bubbles: true });
        cell.dispatchEvent(newClick);
        cell.dispatchEvent(newUnclick);
      }
    }
  }
}
