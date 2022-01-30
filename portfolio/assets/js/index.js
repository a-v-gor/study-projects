'use strict';

import toggleMenu from './toggleMenu.js';
import changeClassActive from './changeClassActive.js';
import changeImage from './changeImage.js';
import preloadSeasonsImages from './preloadSeasonsImages.js';
import getTranslate from './getTranslate.js';
import changeTheme from './changeTheme.js';

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
changeThemeGroup.addEventListener('click', changeTheme);
