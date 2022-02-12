'use strict';

const startUrl = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=f5a4c4a8d947d8097d8aba9c57c93c96';
const moviesCardsContainer = document.querySelector('.movies-cards');
const imgPath = 'https://image.tmdb.org/t/p/w300';
const searchForm = document.querySelector('.search-form');
const search = document.querySelector('.search');
const moviesСards = document.querySelector('.movies-cards');

getData(startUrl);
function getData(url) {
  fetch(url).then(res => res.json()).then(data => showData(data));
}

function showData(data) {
  console.log(data);
  data['results'].forEach(element => {
    const pathPosterImg = (element['poster_path']) ? imgPath+element['poster_path'] : './assets/img/Image-Placeholder.png';
    const movieCard = `
    <article class="movie-card">
      <img class="movie-poster" src=${pathPosterImg} alt="${element['title']} poster">
      <div class="container-movie-title">
        <h3 class="movie-title">${element['title']}</h3>
      </div>
      <div class="container-movie-overview">
        <p class="movie-overview">${element['overview']}</p>
      </div>
    </article>
    `;
    moviesCardsContainer.insertAdjacentHTML('beforeend', movieCard);
  });
}

function findMovie () {
  moviesСards.innerHTML = '';
  if (search.value) {
    getData(`https://api.themoviedb.org/3/search/movie?query=${search.value}&api_key=f5a4c4a8d947d8097d8aba9c57c93c96`);
  } else {
    getData(startUrl);
  }
}

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  findMovie();
});