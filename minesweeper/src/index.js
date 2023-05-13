import './assets/css/normalize.css';
import './assets/css/main.scss';
import createBody from './assets/js/createBody.js';

function startGame() {
  function pushCell(event) {
    event.target.classList.add('field__cell_push');
  }
  function unpushCell() {
    const pushedCell = document.querySelector('.field__cell_push');
    if (pushedCell) {
      pushedCell.classList.remove('field__cell_push');
      pushedCell.classList.add('field__cell_unpush');
    }
  }

  createBody();
  const field = document.querySelector('.field');
  field.addEventListener('mousedown', pushCell);
  document.body.addEventListener('mouseup', unpushCell);
}

document.addEventListener('DOMContentLoaded', startGame);
