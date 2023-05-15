import data from './data.js';

export default function returnNeighbours(id) {
  let neighboursFull;
  let neighboursStartLine;
  let neighboursEndLine;

  if (data.difficulty === 'easy') {
    neighboursFull = [-11, -10, -9, -1, 1, 9, 10, 11];
    neighboursStartLine = [-10, -9, 1, 10, 11];
    neighboursEndLine = [-11, -10, -1, 9, 10];
  } else if (data.difficulty === 'medium') {
    neighboursFull = [-16, -15, -14, -1, 1, 14, 15, 16];
    neighboursStartLine = [-15, -14, 1, 15, 16];
    neighboursEndLine = [-16, -15, -1, 14, 15];
  }

  function createResult(arr) {
    const rezult = [];
    for (let i = 0; i < arr.length; i += 1) {
      const num = id + arr[i];
      if (num >= 0 && num < data.numOfCells) {
        rezult.push(num);
      }
    }
    return rezult;
  }

  let neighbours;
  if (data.difficulty === 'easy') {
    if (String(id).at(-1) === '0') {
      neighbours = neighboursStartLine;
    } else if (String(id).at(-1) === '9') {
      neighbours = neighboursEndLine;
    } else {
      neighbours = neighboursFull;
    }
  } else if (data.difficulty === 'medium') {
    if (id === 0 || id % 15 === 0) {
      neighbours = neighboursStartLine;
    } else if ((id + 1) % 15 === 0) {
      neighbours = neighboursEndLine;
    } else {
      neighbours = neighboursFull;
    }
  }

  return createResult(neighbours);
}
