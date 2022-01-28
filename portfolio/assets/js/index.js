'use strict';

import i18Obj from './translate.js';
import toggleMenu from './toggleMenu.js';
import changeClassActive from './changeClassActive.js';
import changeImage from './changeImage.js';

// Hamburger menu
document.querySelector('.nav-list').addEventListener('click', toggleMenu);

// Portfolio
const portfolioButtonsGroup = document.querySelector('.portfolio-buttons');

function preloadSeasonsImages() {
  const seasons = ['winter', 'spring', 'summer', 'autumn'];
  seasons.forEach (function (item) {
    for(let i = 1; i <= 6; i++) {
      const img = new Image();
      img.src = `./assets/img/${item}/${i}.jpg`;
    }
  })
}

preloadSeasonsImages();
portfolioButtonsGroup.addEventListener('click', changeClassActive);
portfolioButtonsGroup.addEventListener('click', changeImage);

// Change language
const LanguageGroup = document.querySelector('.change-lang');
let lang = '';

function setLang(event) {
  lang = event.target.dataset.i18n;
}

function getTranslate() {
  document.querySelectorAll('[data-i18n]').forEach(function (item) {
    let translate = i18Obj[lang][item.dataset.i18n];
    item.innerHTML = translate;
    if (item.placeholder) {
      item.placeholder = translate;
      item.textContent = '';
    };
  })
}

LanguageGroup.addEventListener('click', setLang);
LanguageGroup.addEventListener('click', changeClassActive);
LanguageGroup.addEventListener('click', getTranslate);
