import data from './data.js';

export default function showCellValue(id) {
  const cell = document.getElementById(id);
  if (!cell.innerHTML.length) {
    if (data.nums[id] === 'mine') {
      const img = document.createElement('img');
      img.className = 'field__img';
      img.setAttribute('src', './assets/img/bomb.svg');
      cell.append(img);
    } else {
      cell.textContent = data.nums[id];
    }
  }
}
