import data from './data.js';
import increaseNum from './increaseNum.js';

export default function timer() {
  function startTimer() {
    increaseNum('.stat__seconds');
    data.seconds = document.querySelector('.stat__seconds').textContent;
  }

  if (!data.stopGame) {
    data.timerId = setInterval(startTimer, 1000);
  }
}
