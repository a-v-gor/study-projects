import data from './data.js';
import addNode from './addNode.js';

export default function showResult(rez) {
  function addResultWindow() {
    addNode('div', 'result-msg result-msg_unactive', document.querySelector('.main'));
    addNode('p', 'result-msg__text', document.querySelector('.result-msg'));
    addNode('div', 'button result-msg__btn', document.querySelector('.result-msg'), 'Close');
  }

  function showResultWindow() {
    document.querySelector('.result-msg').classList.remove('result-msg_unactive');
  }

  function removeResultWindow() {
    document.querySelector('.result-msg').removeEventListener('transitionend', removeResultWindow);
    document.querySelector('.result-msg').remove();
  }

  function hideResult() {
    document.querySelector('.result-msg').classList.add('result-msg_unactive');
    document.querySelector('.result-msg__btn').removeEventListener('click', hideResult);
    document.querySelector('.result-msg').addEventListener('transitionend', removeResultWindow);
  }

  let str = '';
  if (rez === 'win') {
    str = `Hooray! You found all mines in ${data.seconds} seconds and ${data.moves} moves!`;
  } else if (rez === 'mine') {
    str = 'Game over. Try again.';
  } else if (rez === 'no-saved') {
    str = 'It\'s no saved game found. It could happen if You didn\'t save the game or if You finished last game (lose/win).';
  } else if (rez === 'save-game') {
    str = 'Game saved.';
  } else if (rez === 'load-game') {
    str = 'Game loaded.';
  }

  addResultWindow();
  document.querySelector('.result-msg__text').textContent = str;
  setTimeout(showResultWindow);
  document.querySelector('.result-msg__btn').addEventListener('click', hideResult);
}
