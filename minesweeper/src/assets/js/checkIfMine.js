import data from './data.js';
import changeSmile from './changeSmile.js';

export default function checkIfMine(id) {
  if (data.nums[id] === 'mine') {
    changeSmile('mine');
  }
}
