export default function showRecords() {
  const arr = JSON.parse(localStorage.getItem('minesweeper-records'));

  function firstZero(str) {
    return (str.length === 1) ? 0 + str : str;
  }

  function createLine(obj) {
    const valuesArr = Object.values(obj);
    for (let i = 0; i < valuesArr.length; i += 1) {
      const node = document.createElement('div');
      node.className = 'records__cell';
      if (i === 0) {
        const date = new Date(valuesArr[i]);
        const str = `${date.getDate()}.${firstZero(String(Number(date.getMonth()) + 1))}.${String(date.getFullYear()).slice(2)} ${firstZero(String(date.getHours()))}:${firstZero(String(date.getMinutes()))}`;
        node.innerHTML = str;
      } else {
        node.innerHTML = valuesArr[i];
      }
      document.querySelector('.records__table').append(node);
    }
  }

  function hideRecords() {
    document.querySelector('.records').classList.add('records_unactive');
  }

  document.querySelector('.records__table').innerHTML = `<div class="records__cell">Date</div>
  <div class="records__cell">Moves</div><div class="records__cell">Seconds</div>
  <div class="records__cell">Diff</div><div class="records__cell">Mines</div>`;

  if (arr.length > 9) {
    arr.shift();
  }

  for (let i = 0; i < arr.length; i += 1) {
    createLine(arr[i]);
  }
  document.querySelector('.records').classList.remove('records_unactive');

  document.querySelector('.records__btn').addEventListener('click', hideRecords);
}
