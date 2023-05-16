import data from './data.js';
import playAudio from './playAudio.js';
import updSoundIcon from './updSoundIcon.js';

export default function toggleSound() {
  if (data.sound) {
    data.sound = false;
  } else {
    data.sound = true;
    playAudio('click');
  }
  updSoundIcon();
}
