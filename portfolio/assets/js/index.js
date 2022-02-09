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
const timeElapsed = player.querySelector('.time-elapsed');
const duration = player.querySelector('.duration');
const posters = player.querySelectorAll('.poster');

function togglePlay(){
  player.querySelector('.video-large').classList.add('hide');
  player.querySelector('.video-small').classList.add('hide');
  function displayNone() {
    ['.video-large', '.video-small'].map((item) => player.querySelector(`${item}`).style.display = 'none');
  }
  setTimeout(displayNone, 500);
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
  progressBar.b = backgroundProgress;
  progressBar.b();
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
  volume.b = backgroundProgress;
  volume.b();
}

function backgroundProgress () {
  const value = this.value;
  this.style.background = `linear-gradient(to right, #bdae82 0%, #bdae82 ${value*100}%, #c8c8c8 ${value*100}%, #c8c8c8 100%)`;
}

function formatTime(timeInSecs) {
  const result = new Date(timeInSecs * 1000).toISOString().slice(11,19);

  return {
    minutes: result.slice(3, 5),
    seconds: result.slice(6),
  };
};

function initializeVideo() {
  const videoDuration = Math.round(video.duration);
  const time = formatTime(videoDuration);
  duration.innerText = `${time.minutes}:${time.seconds}`;
  duration.setAttribute('datetime', `${time.minutes}m ${time.seconds}s`)
}

function updateTimeElapsed() {
  const time = formatTime(Math.round(video.currentTime));
  timeElapsed.innerText = `${time.minutes}:${time.seconds}`;
  timeElapsed.setAttribute('datetime', `${time.minutes}m ${time.seconds}s`)
}

video.addEventListener('click', togglePlay);
videoControlsButton.addEventListener('click', togglePlay);
videoPlayButton.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);
progressBar.addEventListener('input', scrub);
volume.addEventListener('input', volumeUpdate);
volume.addEventListener('input', backgroundProgress);
video.addEventListener('volumechange', updateVolumeIcon);
volumeButton.addEventListener('click', toggleMute);
video.addEventListener('loadedmetadata', initializeVideo);
video.addEventListener('timeupdate', updateTimeElapsed);
posters.forEach(poster => poster.addEventListener('click', togglePlay));

// Самооценка
console.log(`Ваша отметка - 70 балла(ов).
Все пункты выполнены полностью!
Отзыв по пунктам ТЗ:

Вёрстка +10
  - вёрстка видеоплеера: есть само видео, в панели управления есть кнопка Play/Pause,
    прогресс-бар, кнопка Volume/Mute, регулятор громкости звука +5
  - в футере приложения есть ссылка на гитхаб автора приложения, год создания приложения,
    логотип курса со ссылкой на курс +5

Кнопка Play/Pause на панели управления +10
  - при клике по кнопке Play/Pause запускается или останавливается проигрывание видео +5
  - внешний вид и функционал кнопки изменяется в зависимости от того, проигрывается ли видео в данный момент +5

Прогресс-бар отображает прогресс проигрывания видео. При перемещении ползунка прогресс-бара
вручную меняется текущее время проигрывания видео. Разный цвет прогресс-бара до и после ползунка +10

При перемещении ползунка регулятора громкости звука можно сделать звук громче или тише.
Разный цвет регулятора громкости звука до и после ползунка +10

При клике по кнопке Volume/Mute можно включить или отключить звук. Одновременно с
включением/выключением звука меняется внешний вид кнопки. Также внешний вид кнопки меняется,
если звук включают или выключают перетягиванием регулятора громкости звука от нуля или до нуля +10

Кнопка Play/Pause в центре видео +10
  есть кнопка Play/Pause в центре видео при клике по которой запускается видео и отображается панель управления +5
  когда видео проигрывается, кнопка Play/Pause в центре видео скрывается,
  когда видео останавливается, кнопка снова отображается +5

Очень высокое качество оформления приложения и/или дополнительный не предусмотренный в задании функционал,
улучшающий качество приложения +10
  высокое качество оформления приложения предполагает собственное оригинальное оформление равное или
  отличающееся в лучшую сторону по сравнению с демо

Комментарии к выполненным пунктам: Запускать/останавливать видео можно кликом по картинке,
не только по кнопкам Play/Pause. Добавлен тайминг - видно время, прошедшее с начала видео и общее время видео.
`);