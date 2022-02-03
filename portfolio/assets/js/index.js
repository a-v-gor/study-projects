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

// Самооценка

console.log(`Самооценка:
Ваша отметка - 85 балла(ов)
Отзыв по пунктам ТЗ:
Все пункты выполнены полностью!

1. Смена изображений в секции portfolio +25.
2. Перевод страницы на два языка +25.
3. Переключение светлой и тёмной темы +25.
4. Дополнительный функционал: выбранный пользователем язык отображения страницы и светлая или тёмная тема сохраняются при перезагрузке страницы +5.
5. Дополнительный функционал: сложные эффекты для кнопок при наведении и/или клике +5.`);