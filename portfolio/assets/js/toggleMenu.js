'use strict';

const hamburger = document.querySelector('.menu-toggle');

export default function toggleMenu () {
  if (hamburger.checked) {
    hamburger.checked = false;
  };
};
