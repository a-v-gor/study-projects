export default function returnNeighbours(id) {
  const neighboursFull = [-11, -10, -9, -1, 1, 9, 10, 11];
  const neighboursStartLine = [-10, -9, 1, 10, 11];
  const neighboursEndLine = [-11, -10, -1, 9, 10];

  let rezult;

  if (String(id).at(-1) === '0') {
    rezult = neighboursStartLine;
  } else if (String(id).at(-1) === '9') {
    rezult = neighboursEndLine;
  } else {
    rezult = neighboursFull;
  }

  return rezult;
}
