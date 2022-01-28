'use strict';

export default function preloadSeasonsImages() {
  const seasons = ['winter', 'spring', 'summer', 'autumn'];
  seasons.forEach (function (item) {
    for(let i = 1; i <= 6; i++) {
      const img = new Image();
      img.src = `./assets/img/${item}/${i}.jpg`;
    }
  })
}
