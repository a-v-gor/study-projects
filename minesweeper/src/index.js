import './assets/css/normalize.css';
import './assets/css/main.scss';
import createBody from './assets/js/createBody.js';
import checkClick from './assets/js/checkClick.js';

function startGame() {
  createBody();
  checkClick();
}

document.addEventListener('DOMContentLoaded', startGame);
