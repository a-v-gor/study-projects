import data from './data.js';
import bombImg from '../img/bomb.svg';

export default function showCellValue(id) {
  const cell = document.getElementById(id);
  if (!cell.innerHTML.length) {
    if (data.nums[id] === 'mine') {
      const img = document.createElement('img');
      img.className = 'field__img';
      img.setAttribute('src', bombImg);
      cell.append(img);
    } else if (data.nums[id] !== 0) {
      cell.textContent = data.nums[id];
    }
  }
}
