import data from './data.js';
import audioClick from '../audio/click.mp3';
import audioFlag from '../audio/flag.mp3';
import audioMine from '../audio/mine.mp3';
import audioWin from '../audio/win.mp3';

export default function playAudio(str) {
  if (data.sound) {
    let sourceStr = '';

    if (str === 'click') {
      sourceStr = audioClick;
    } else if (str === 'flag') {
      sourceStr = audioFlag;
    } else if (str === 'mine') {
      sourceStr = audioMine;
    } else if (str === 'win') {
      sourceStr = audioWin;
    }

    const audio = new Audio(sourceStr);
    audio.volume = 0.5;
    audio.play();
  }
}
