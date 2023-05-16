import data from './data.js';

export default function updSoundIcon() {
  const soundBtn = document.querySelector('.settings__sound');
  if (data.sound) {
    soundBtn.classList.remove('settings__sound_mute');
  } else {
    soundBtn.classList.add('settings__sound_mute');
  }
}
