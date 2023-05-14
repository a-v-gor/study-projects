export default function returnNeighbours(id) {
  const neighboursFull = [-11, -10, -9, -1, 1, 9, 10, 11];
  const neighboursStartLine = [-10, -9, 1, 10, 11];
  const neighboursEndLine = [-11, -10, -1, 9, 10];

  function createResult(arr) {
    const rezult = [];
    for (let i = 0; i < arr.length; i += 1) {
      const num = id + arr[i];
      if (num >= 0 && num <= 99) {
        rezult.push(num);
      }
    }
    return rezult;
  }

  let neighbours;

  if (String(id).at(-1) === '0') {
    neighbours = neighboursStartLine;
  } else if (String(id).at(-1) === '9') {
    neighbours = neighboursEndLine;
  } else {
    neighbours = neighboursFull;
  }

  return createResult(neighbours);
}
