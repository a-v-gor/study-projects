import hideRecords from './hideRecords.js';

export default function showRecords() {
  const table = document.querySelector('.records__table');
  document.querySelector('.header-nav__menu-toggle').checked = false;
  let arr;
  if (localStorage.getItem('minesweeper-records')) {
    arr = JSON.parse(localStorage.getItem('minesweeper-records'));
  }

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
        const str = `${date.getDate()}.${firstZero(String(Number(date.getMonth()) + 1))}
        .${String(date.getFullYear()).slice(2)} ${firstZero(String(date.getHours()))}
        :${firstZero(String(date.getMinutes()))}`;
        node.innerHTML = str;
      } else {
        node.innerHTML = valuesArr[i];
      }
      table.append(node);
    }
  }

  const cells = document.querySelectorAll('.records__cell');
  for (let i = 0; i < cells.length; i += 1) {
    cells[i].remove();
  }

  if (localStorage.getItem('minesweeper-records')) {
    for (let i = 0; i < arr.length; i += 1) {
      createLine(arr[i]);
    }
  }

  document.querySelector('.records').classList.remove('records_unactive');
  document.querySelector('.records__btn').addEventListener('click', hideRecords);
}
