'use strict';

const hamburger = document.querySelector('#menu-toggle');
const link = document.querySelector('.nav-list');

function toggleMenu () {
  if (hamburger.checked) {   
    hamburger.checked = false;
  };
};

link.addEventListener('click', toggleMenu);
