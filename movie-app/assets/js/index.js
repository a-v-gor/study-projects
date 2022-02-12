'use strict';


const moviesCardsContainer = document.querySelector('.movies-cards');
const imgPath = 'https://image.tmdb.org/t/p/w300';
const searchSection = document.querySelector('.search-section');
const searchForm = document.querySelector('.search-form');
const search = document.querySelector('.search');
const moviesSection = document.querySelector('.movies-section');
const moviesСards = document.querySelector('.movies-cards');
const misContainer = document.querySelector('.mis-container');
const misButton = document.querySelector('.mis-button');

function onLoad () {
  const startUrl = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=f5a4c4a8d947d8097d8aba9c57c93c96';
  getData(startUrl);
}
// function getData(url) {
//   fetch(url).then(res => res.json()).then(data => showData(data));
// }

async function getData(url) {
  const res = await fetch(url);
  const data = await res.json();
  checkData(data);
}

function checkData(data) {
  if (data['total_results']) {
    showData(data)
  } else {
    showMistake()
  }
}

function showData(data) {
  console.log(data);
  data['results'].forEach(element => {
    const pathPosterImg = (element['poster_path']) ? imgPath+element['poster_path'] : './assets/img/Image-Placeholder.png';
    const overview = (!element['overview']) ? 'No overview.' : element['overview'];
    const movieCard = `
    <article class="movie-card">
      <div class="rating">${element['vote_average']}</div>
      <img class="movie-poster" src=${pathPosterImg} alt="${element['title']} poster">
      <div class="container-movie-title">
        <h3 class="movie-title">${element['title']}</h3>
      </div>
      <div class="container-movie-overview">
        <p class="movie-overview">${overview}</p>
      </div>
    </article>
    `;
    moviesCardsContainer.insertAdjacentHTML('beforeend', movieCard);
  });
}

function showMistake() {
  console.log('showMistake() works!');
  searchSection.style.display = "none";
  moviesSection.style.display = "none";
  // moviesSection.style.padding = '0';
  misContainer.style.display = "flex";
}

function findMovie () {
  moviesСards.innerHTML = '';
  if (search.value) {
    getData(`https://api.themoviedb.org/3/search/movie?query=${search.value}&api_key=f5a4c4a8d947d8097d8aba9c57c93c96`);
  } else {
    onLoad();
  }
}

function reloadPage () {
  document.location.reload();
}

window.addEventListener('load', onLoad);
searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  findMovie();
});
misButton.addEventListener('click', reloadPage);