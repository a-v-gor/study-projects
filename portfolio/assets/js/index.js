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
const LanguageGroup = document.querySelector('.change-lang');

LanguageGroup.addEventListener('click', changeClassActive);
LanguageGroup.addEventListener('click', getTranslate);

// Change theme
// const themeGroup = document.querySelector('.change-theme');
// themeGroup.addEventListener('click', changeClassActive);
