import data from './data.js';
import timer from './timer.js';
import playAudio from './playAudio.js';
import updStat from './updStat.js';

export default function pushFlag(event) {
  event.preventDefault();
  if (!data.stopGame) {
    if (!data.timerId) {
      timer();
    }
    const id = Number(event.target.id);
    if (!data.openedCells.includes(id) && !data.flagCells.includes(id)) {
      data.flagCells.push(id);
      event.target.closest('.field__cell').classList.add('field__cell_flag');
      playAudio('flag');
    } else if (data.flagCells.includes(id)) {
      event.target.closest('.field__cell').classList.remove('field__cell_flag');
      data.flagCells = data.flagCells.filter((el) => el !== id);
      playAudio('flag');
    }
    updStat();
  }
}
