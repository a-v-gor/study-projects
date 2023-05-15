import data from './data.js';
import playAudio from './playAudio.js';

export default function toggleSound() {
  const soundBtn = document.querySelector('.settings__sound');

  if (data.sound) {
    data.sound = false;
    soundBtn.classList.add('settings__sound_mute');
  } else {
    data.sound = true;
    soundBtn.classList.remove('settings__sound_mute');
    playAudio('click');
  }
}
