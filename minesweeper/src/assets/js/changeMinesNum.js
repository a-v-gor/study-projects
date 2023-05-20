export default function changeMinesNum(event) {
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
}
