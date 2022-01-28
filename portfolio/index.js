'use strict';

// Hamburger menu
const hamburger = document.querySelector('#menu-toggle');
const link = document.querySelector('.nav-list');

function toggleMenu () {
  if (hamburger.checked) {
    hamburger.checked = false;
  };
};

link.addEventListener('click', toggleMenu);

// Portfolio
const portfolioButtons = document.querySelectorAll('.portfolio-button');
const portfolioButtonsGroup = document.querySelector('.portfolio-buttons');
const portfolioImages = document.querySelectorAll('.portfolio-img');
let season = '';

function preloadSeasonsImages() {
  const seasons = ['winter', 'spring', 'summer', 'autumn'];
  seasons.forEach (function (item) {
    for(let i = 1; i <= 6; i++) {
      const img = new Image();
      img.src = `./assets/img/${item}/${i}.jpg`;
    }
  })
}

function setSeason(event) {
  season = event.target.dataset.season;
}

function changeClassActive (event) {
  let elements = document.querySelectorAll(`.${event.target.classList}`);
  elements.forEach((element) => element.classList.remove('active'));
  event.target.classList.add('active');
}

function changeImage(event) {
  if(event.target.classList.contains('portfolio-button')) {
    portfolioImages.forEach(function (img, index) {
      img.src = `./assets/img/${season}/${index + 1}.jpg`;
      img.alt = `${season}` + ' ' + `${index + 1}`;
    })
  }
}

preloadSeasonsImages();
portfolioButtonsGroup.addEventListener('click', setSeason);
portfolioButtonsGroup.addEventListener('click', changeClassActive);
portfolioButtonsGroup.addEventListener('click', changeImage);
