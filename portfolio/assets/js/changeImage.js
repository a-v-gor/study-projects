'use strict';

const portfolioImages = document.querySelectorAll('.portfolio-img');

export default function changeImage(event) {
  const season = event.target.dataset.i18n;

  if(event.target.classList.contains('portfolio-button')) {
    portfolioImages.forEach(function (img, index) {
      img.style.opacity = '0';
      img.addEventListener('transitionend', function() {
        img.src = `./assets/img/${season}/${index + 1}.jpg`;
        img.alt = `${season}` + ' ' + `${index + 1}`;
        img.style.opacity = '1';
      })
    })
  }
}
