import data from './data.js';
import scatterMines from './scatterMines.js';
import countNeighboursMines from './countNeighboursMines.js';
import openCell from './openCell.js';
import checkIfZero from './checkIfZero.js';
import checkIfMine from './checkIfMine.js';
import changeSmile from './changeSmile.js';
import checkIfWin from './checkIfWin.js';
import increaseNum from './increaseNum.js';
import playAudio from './playAudio.js';
import setSettings from './setSettings.js';
import showRecords from './showRecords.js';
import toggleSound from './toggleSound.js';
import timer from './timer.js';
import updStat from './updStat.js';

export default function checkClick() {
  const field = document.querySelector('.field');
  const soundBtn = document.querySelector('.settings__sound');
  const settingsBtn = document.querySelector('.settings__difficulty');
  const recordsBtn = document.querySelectorAll('.header-nav__li')[1];

  function pushCell(event) {
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

  function pushFlag(event) {
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

  function unpushCell() {
    changeSmile('unpush');
    const pushedCell = document.querySelector('.field__cell_push');
    if (pushedCell) {
      openCell(pushedCell.id);
      checkIfZero(pushedCell.id);
      for (let i = 0; i < data.toOpen.length; i += 1) {
        openCell(data.toOpen[i]);
      }
      data.toOpen = [];
      checkIfMine(pushedCell.id);
      checkIfWin();
    }
    if (data.stopGame) {
      field.removeEventListener('mousedown', pushCell);
      document.body.removeEventListener('mouseup', unpushCell);
    }
  }

  recordsBtn.addEventListener('click', showRecords);
  settingsBtn.addEventListener('click', setSettings);
  soundBtn.addEventListener('click', toggleSound);
  field.addEventListener('mousedown', pushCell);
  document.body.addEventListener('mouseup', unpushCell);
  field.addEventListener('contextmenu', pushFlag);
}
