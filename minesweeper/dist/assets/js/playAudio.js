import data from './data.js';

export default function playAudio(str) {
  if (data.sound) {
    let sourceStr = '';

    if (str === 'click') {
      sourceStr = './assets/audio/click.mp3';
    } else if (str === 'flag') {
      sourceStr = './assets/audio/flag.mp3';
    } else if (str === 'mine') {
      sourceStr = './assets/audio/mine.mp3';
    } else if (str === 'win') {
      sourceStr = './assets/audio/win.mp3';
    }

    const audio = new Audio(sourceStr);
    audio.play();
  }
}
