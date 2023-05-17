import data from './data.js';

export default function applyTheme() {
  if (data.theme === 'dark') {
    document.body.classList.add('body_dark-theme');
  } else {
    document.body.classList.remove('body_dark-theme');
  }
}
