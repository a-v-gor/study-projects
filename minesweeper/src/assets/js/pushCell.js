import data from './data.js';
import scatterMines from './scatterMines.js';
import countNeighboursMines from './countNeighboursMines.js';
import changeSmile from './changeSmile.js';
import increaseNum from './increaseNum.js';
import playAudio from './playAudio.js';
import timer from './timer.js';

export default function pushCell(event) {
  if (event.button === 0 && event.target.classList.value === 'field__cell') {
    if (!data.timerId) {
      timer();
    }
    const id = Number(event.target.id);
    if (!data.openedCells.includes(id) && !data.flagCells.includes(id)) {
      if (event.isTrusted) {
        increaseNum('.stat__num-moves');
        data.moves = document.querySelector('.stat__num-moves').textContent;
        playAudio('click');
      }
      changeSmile('push');
      data.openedCells.push(id);
      if (!data.mines.length) {
        scatterMines();
        countNeighboursMines();
      }
      event.target.closest('.field__cell').classList.add('field__cell_push');
    }
  }
}
