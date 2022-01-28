'use strict';

import i18Obj from './translate.js';
import toggleMenu from './toggleMenu.js';

// Hamburger menu
document.querySelector('.nav-list').addEventListener('click', toggleMenu);

// Portfolio
const portfolioButtonsGroup = document.querySelector('.portfolio-buttons');
const portfolioImages = document.querySelectorAll('.portfolio-img');
let season = '';

function preloadSeasonsImages() {
  const seasons = ['winter', 'spring', 'summer', 'autumn'];
  seasons.forEach (function (item) {
    for(let i = 1; i <= 6; i++) {
      const img = new Image();
      img.src = `./assets/img/${item}/${i}.jpg`;
    }
  })
}

function setSeason(event) {
  season = event.target.dataset.i18n;
}

function changeClassActive (event) {
  let elements = document.querySelectorAll(`.${event.target.classList}`);
  elements.forEach((element) => element.classList.remove('active'));
  event.target.classList.add('active');
}

function changeImage(event) {
  if(event.target.classList.contains('portfolio-button')) {
    portfolioImages.forEach(function (img, index) {
      img.src = `./assets/img/${season}/${index + 1}.jpg`;
      img.alt = `${season}` + ' ' + `${index + 1}`;
    })
  }
}

preloadSeasonsImages();
portfolioButtonsGroup.addEventListener('click', setSeason);
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
