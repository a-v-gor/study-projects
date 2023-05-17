import data from './data.js';
import applyTheme from './applyTheme.js';

export default function changeTheme() {
  if (data.theme === 'light') {
    data.theme = 'dark';
  } else {
    data.theme = 'light';
  }
  applyTheme();
}
