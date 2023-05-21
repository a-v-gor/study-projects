import addNode from './addNode.js';
import hideRecords from './hideRecords.js';

export default function showRecords() {
  function createRecordsTable() {
    addNode('div', 'records records_unactive', document.querySelector('.main'));
    addNode('h2', 'records__title', document.querySelector('.records'), 'Records');
    addNode('div', 'records__table', document.querySelector('.records'));
    addNode('div', 'records__cell-th', document.querySelector('.records__table'), 'Date');
    addNode('div', 'records__cell-th', document.querySelector('.records__table'), 'Moves');
    addNode('div', 'records__cell-th', document.querySelector('.records__table'), 'Seconds');
    addNode('div', 'records__cell-th', document.querySelector('.records__table'), 'Diff');
    addNode('div', 'records__cell-th', document.querySelector('.records__table'), 'Mines');
    addNode('div', 'button records__btn', document.querySelector('.records'), 'Close');
  }

  function createRecordsMessage() {
    addNode('div', 'records records_unactive', document.querySelector('.main'));
    addNode('h2', 'records__title', document.querySelector('.records'), 'Records');
    addNode('p', 'records__message', document.querySelector('.records'), 'It\'s no records yet.');
    addNode('div', 'button records__btn', document.querySelector('.records'), 'Close');
  }

  function showRecordsTable() {
    document.querySelector('.records').classList.remove('records_unactive');
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
      document.querySelector('.records__table').append(node);
    }
  }

  document.querySelector('.header-nav__menu-toggle').checked = false;

  let arr = [];
  if (localStorage.getItem('a-v-gor-minesweeper-records')) {
    arr = arr.concat(JSON.parse(localStorage.getItem('a-v-gor-minesweeper-records')));
    createRecordsTable();
    const cells = document.querySelectorAll('.records__cell');
    cells.forEach((cell) => cell.remove());
    if (arr) {
      arr.sort((a, b) => a.seconds - b.seconds);
      arr.forEach((el) => createLine(el));
    }
  } else {
    createRecordsMessage();
  }
  setTimeout(showRecordsTable);
  document.querySelector('.records__btn').addEventListener('click', hideRecords);
}
