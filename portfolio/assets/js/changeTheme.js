'use strict';

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

export {
  themes, changeTheme
}
