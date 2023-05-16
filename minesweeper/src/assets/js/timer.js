import data from './data.js';
import increaseNum from './increaseNum.js';

export default function timer() {
  if (!data.stopGame) {
    data.timerId = setTimeout(timer, 1000);
    increaseNum('.stat__seconds');
    data.seconds = document.querySelector('.stat__seconds').textContent;
  }
}
