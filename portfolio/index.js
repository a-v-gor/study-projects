'use strict';

const hamburger = document.querySelector('#menu-toggle');
const link = document.querySelector('.nav-list');

function toggleMenu () {
  if (hamburger.checked) {   
    hamburger.checked = false;
  };
};

link.addEventListener('click', toggleMenu);

console.log(`
Ваша отметка - 85 балла(ов)
Отзыв по пунктам ТЗ:

Все пункты выполнены полностью!
`);