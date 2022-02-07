'use strict';

import toggleMenu from './toggleMenu.js';
import changeClassActive from './changeClassActive.js';
import changeImage from './changeImage.js';
import preloadSeasonsImages from './preloadSeasonsImages.js';

// Hamburger menu
document.querySelector('.nav-list').addEventListener('click', toggleMenu);

// Portfolio
const portfolioButtonsGroup = document.querySelector('.portfolio-buttons');

preloadSeasonsImages();
portfolioButtonsGroup.addEventListener('click', changeClassActive);
portfolioButtonsGroup.addEventListener('click', changeImage);

// Local storage
let lang = 'en';
let theme = 'dark-theme';

function getLocalStorage() {
  if (localStorage.getItem('lang')) {
    lang = localStorage.getItem('lang');
  };
  document.querySelector(`[data-i18n="${lang}"]`).classList.add('active');
  if (localStorage.getItem('theme')) {
    theme = localStorage.getItem('theme');
  };
    getTranslate(lang);
    changeTheme(theme);
}

function setLocalStorage() {
  localStorage.setItem('lang', lang);
  localStorage.setItem('theme', theme);
}

window.addEventListener('load', getLocalStorage)
window.addEventListener('beforeunload', setLocalStorage)

// Change language
const languageGroup = document.querySelector('.change-lang');

import i18Obj from './translate.js';

function getTranslate(lang) {
  document.querySelectorAll('[data-i18n]').forEach(function (item) {
    let translate = i18Obj[lang][item.dataset.i18n];
    item.innerHTML = translate;
    if (item.placeholder) {
      item.placeholder = translate;
      item.textContent = '';
    };
  })
}

function changeLang(event) {
  lang = event.target.dataset.i18n;
  getTranslate(lang);
}

languageGroup.addEventListener('click', changeClassActive);
languageGroup.addEventListener('click', changeLang);

// Change theme
const changeThemeGroup = document.querySelector('.change-theme');
const themes = ['dark-theme', 'light-theme'];

function changeThemeIcon(theme) {
  document.querySelector('.change-theme > div').classList = theme+'-icon';
}

function changeTheme(theme) {
  const classesToChange = ['.body', '.header-container', '.hero-container', '.hire-me', '.section-title', '.sec-title-span',
  '.portfolio-buttons', '.video-play-button', '.price-card', '.contacts-container', '.footer-container'];

  changeThemeIcon(theme);
  if (theme == themes[1]) {
    classesToChange.forEach((element) => document.querySelectorAll(`${element}`).forEach((item) => item.classList.add(`${themes[1]}`)))
  } else {
    classesToChange.forEach((element) => document.querySelectorAll(`${element}`).forEach((item) => item.classList.remove(`${themes[1]}`)))
  }
}

function changeThemeOnClick(event) {
  theme = (event.target.classList == themes[0]+'-icon') ? themes[1] : themes[0];
  changeTheme(theme);
}

changeThemeGroup.addEventListener('click', changeThemeOnClick);

// VIDEO PLAYER
const player = document.querySelector('.video-player');
const video = player.querySelector('.viewer');
const progressBar = player.querySelector('.video-progress');
const videoControlsButton = player.querySelector('.video-controls-button');
const videoPlayButton = document.querySelector('.video-play-button');
const volumeButton = document.querySelector('.volume-btn');
const volume = player.querySelector('.video-volume');
const videoControls = player.querySelector('.video-controls');

function togglePlay(){
  videoControls.classList.remove('hide');
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

function updateButton() {
  if (this.paused) {
    videoControlsButton.classList.remove('pause');
    videoPlayButton.style.display = 'block';
  } else {
    videoControlsButton.classList.add('pause');
    videoPlayButton.style.display = 'none';
  }
}

function handleProgress() {
  progressBar.value = video.currentTime / video.duration;
  progressBar.style.background = `linear-gradient(to right, #bdae82 0%, #bdae82 ${progressBar.value*100}%, #c8c8c8 ${progressBar.value*100}%, #c8c8c8 100%)`;
}

function scrub () {
  const scrubTime = progressBar.value * video.duration;
  video.currentTime = scrubTime;
}

function volumeUpdate() {
  if (video.muted) {
    video.muted = false;
  };

  video.volume = volume.value;
}

function updateVolumeIcon() {
  if (video.muted || video.volume == 0) {
    volumeButton.classList.add('mute');
  } else {
    volumeButton.classList.remove('mute');
  }
}

function toggleMute () {
  video.muted = !video.muted;

  if (video.muted) {
    volume.setAttribute('data-volume', volume.value);
    volume.value = 0;
  } else {
    volume.value = volume.dataset.volume;
  }
}

function backgroundProgress () {
  const value = this.value;
  this.style.background = `linear-gradient(to right, #bdae82 0%, #bdae82 ${value*100}%, #c8c8c8 ${value*100}%, #c8c8c8 100%)`;
}

video.addEventListener('click', togglePlay);
videoControlsButton.addEventListener('click', togglePlay);
videoPlayButton.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);
// video.addEventListener('timeupdate', backgroundProgressVideo);
progressBar.addEventListener('input', scrub);
volume.addEventListener('input', volumeUpdate);
volume.addEventListener('input', backgroundProgress);
video.addEventListener('volumechange', updateVolumeIcon);
volumeButton.addEventListener('click', toggleMute);