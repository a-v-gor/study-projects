import data from './data.js';

export default function showResult(rez) {
  const closeBtn = document.querySelector('.result-msg__btn');

  function hideResult() {
    document.querySelector('.result-msg').classList.add('result-msg_unactive');
  }

  let str = '';
  if (rez === 'win') {
    str = `Hooray! You found all mines in ${data.seconds} seconds and ${data.moves} moves!`;
  } else if (rez === 'mine') {
    str = 'Game over. Try again';
  }

  document.querySelector('.result-msg__text').textContent = str;
  document.querySelector('.result-msg').classList.remove('result-msg_unactive');

  closeBtn.addEventListener('click', hideResult);
}
