'use strict';

const url = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=f5a4c4a8d947d8097d8aba9c57c93c96';
const moviesCardsContainer = document.querySelector('.movies-cards');
const imgPath = 'https://image.tmdb.org/t/p/w300'

async function getData() {
  const res = await fetch(url);
  const data = await res.json();
  showData(data);
}

function showData(data) {
  data['results'].forEach(element => {
    console.log(element);
    const pathPosterImg = element['poster_path'];
    const movieCard = `
    <article class="movie-card">
      <img class="movie-poster" src=${imgPath+pathPosterImg} alt="${element['title']} poster">
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
getData();