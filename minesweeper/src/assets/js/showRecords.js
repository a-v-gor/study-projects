import hideRecords from './hideRecords.js';

export default function showRecords() {
  const table = document.querySelector('.records__table');
  document.querySelector('.header-nav__menu-toggle').checked = false;

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
        const day = firstZero(String(date.getDate()));
        const month = firstZero(String(Number(date.getMonth()) + 1));
        const year = String(date.getFullYear()).slice(2);
        const hours = firstZero(String(date.getHours()));
        const minutes = firstZero(String(date.getMinutes()));
        const str = `${day}.${month}.${year} ${hours}:${minutes}`;
        node.innerHTML = str;
      } else {
        node.innerHTML = valuesArr[i];
      }
      table.append(node);
    }
  }

  let arr = [];
  if (localStorage.getItem('a-v-gor-minesweeper-records')) {
    arr = arr.concat(JSON.parse(localStorage.getItem('a-v-gor-minesweeper-records')));
  }

  const cells = document.querySelectorAll('.records__cell');
  cells.forEach((cell) => cell.remove());
  if (arr) {
    arr.forEach((el) => createLine(el));
  }

  document.querySelector('.records').classList.remove('records_unactive');
  document.querySelector('.records__btn').addEventListener('click', hideRecords);
}
