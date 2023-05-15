import data from './data.js';

export default function calcSettings() {
  if (data.difficulty === 'easy') {
    data.numOfCells = 100;
  } else if (data.difficulty === 'medium') {
    data.numOfCells = 225;
  } else {
    data.numOfCells = 625;
  }
}
