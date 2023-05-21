import data from './data.js';

export default function changeMinesNum(event) {
  let interval = 300;

  function func() {
    const numVal = +document.querySelector('.settings__num-mines').value;
    let newNum = 0;
    if (event.target.classList.value === 'settings__num-mines-decrease') {
      newNum = numVal - 1;
    } else {
      newNum = numVal + 1;
    }
    if (newNum >= 10 && newNum <= 99) {
      document.querySelector('.settings__num-mines').value = newNum;
    } else if (newNum < 10) {
      document.querySelector('.settings__num-mines').value = 10;
    } else {
      document.querySelector('.settings__num-mines').value = 99;
    }
    interval -= 10;
    data.intervalNumMines = setTimeout(func, interval -= 10);
  }

  data.intervalNumMines = setTimeout(func, 0);
}
