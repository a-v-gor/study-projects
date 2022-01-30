'use strict';

export default function changeTheme(event) {
  const themes = ['dark-theme', 'light-theme'];
  const classesToChange = ['.body', '.header-container', '.hero-container', '.hire-me', '.section-title', '.sec-title-span',
'.portfolio-buttons', '.video-play-button', '.price-card', '.contacts-container', '.footer-container'];

  // Change icon in header
  event.target.classList = (event.target.classList == themes[0]+'-icon') ? themes[1]+'-icon' : themes[0]+'-icon';

  // Change styles on page
  if (event.target.classList == themes[1]+'-icon') {
    classesToChange.forEach((element) => document.querySelectorAll(`${element}`).forEach((item) => item.classList.add(`${themes[1]}`)))
  } else {
    classesToChange.forEach((element) => document.querySelectorAll(`${element}`).forEach((item) => item.classList.remove(`${themes[1]}`)))
  }
}
