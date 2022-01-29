'use strict';

import toggleMenu from './toggleMenu.js';
import changeClassActive from './changeClassActive.js';
import changeImage from './changeImage.js';
import preloadSeasonsImages from './preloadSeasonsImages.js';
import getTranslate from './getTranslate.js';

// Hamburger menu
document.querySelector('.nav-list').addEventListener('click', toggleMenu);

// Portfolio
const portfolioButtonsGroup = document.querySelector('.portfolio-buttons');

preloadSeasonsImages();
portfolioButtonsGroup.addEventListener('click', changeClassActive);
portfolioButtonsGroup.addEventListener('click', changeImage);

// Change language
const languageGroup = document.querySelector('.change-lang');

languageGroup.addEventListener('click', changeClassActive);
languageGroup.addEventListener('click', getTranslate);

// Change theme
const changeThemeGroup = document.querySelector('.change-theme');

function changeTheme(event) {
  const themes = ['dark-theme', 'light-theme'];
  const classesToChange = ['.body', '.hero-container', '.logo', '.change-lang', '.hire-me'];

  // Change icon in header
  event.target.classList = (event.target.classList == themes[0]+'-icon') ? themes[1]+'-icon' : themes[0]+'-icon';

  // Change styles on page
  if (event.target.classList == themes[1]+'-icon') {
    classesToChange.forEach((element) => document.querySelectorAll(`${element}`).forEach((item) => item.classList.add(`${themes[1]}`)))
  } else {
    classesToChange.forEach((element) => document.querySelectorAll(`${element}`).forEach((item) => item.classList.remove(`${themes[1]}`)))
  }
}

changeThemeGroup.addEventListener('click', changeTheme);
