import data from './data.js';

export default function clearChangeMinesNum() {
  clearTimeout(data.intervalNumMines);
}
