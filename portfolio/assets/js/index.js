'use strict';

import toggleMenu from './toggleMenu.js';
import i18Obj from './translate.js';
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
