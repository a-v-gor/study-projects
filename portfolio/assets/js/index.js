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
const progress = player.querySelector('.progress-video');
const progressBar = player.querySelector('.progress-video-filled');
const videoControlsButton = player.querySelector('.video-controls-button');
const videoPlayButton = document.querySelector('.video-play-button');
const volume = player.querySelector('.video-volume');

function togglePlay(){
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

function updateButton() {
  const icon = this.paused ? './assets/svg/play.svg' : './assets/svg/pause.svg';
  const display = this.paused ? 'block' : 'none';
  videoControlsButton.style.backgroundImage = `url("${icon}")`;
  videoPlayButton.style.display = display;
}

function volumeUpdate() {
  video.volume = volume.value;
}

video.addEventListener('click', togglePlay);
videoControlsButton.addEventListener('click', togglePlay);
videoPlayButton.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
volume.addEventListener('change', volumeUpdate);
volume.addEventListener('mousemove', volumeUpdate);