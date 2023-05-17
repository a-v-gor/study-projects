import data from './data.js';

export default function showResult(rez) {
  const closeBtn = document.querySelector('.rezult-msg__btn');

  function hideRezult() {
    document.querySelector('.rezult-msg').classList.add('rezult-msg_unactive');
  }

  let str = '';
  if (rez === 'win') {
    str = `Hooray! You found all mines in ${data.seconds} seconds and ${data.moves} moves!`;
  } else if (rez === 'mine') {
    str = 'Game over. Try again';
  }

  document.querySelector('.rezult-msg__text').textContent = str;
  document.querySelector('.rezult-msg').classList.remove('rezult-msg_unactive');

  closeBtn.addEventListener('click', hideRezult);
}
