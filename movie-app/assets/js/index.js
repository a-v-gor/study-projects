'use strict';

import i18Obj from './translate.js';
import changeClassActive from './changeClassActive.js';

const moviesCardsContainer = document.querySelector('.movies-cards');
const imgPath = 'https://image.tmdb.org/t/p/w300';
const searchSection = document.querySelector('.search-section');
const searchForm = document.querySelector('.search-form');
const search = document.querySelector('.search');
const moviesSection = document.querySelector('.movies-section');
const moviesСards = document.querySelector('.movies-cards');
const misContainer = document.querySelector('.mis-container');
const misButton = document.querySelector('.mis-button');
const languageGroup = document.querySelector('.change-lang');
let lang = 'en';
const baseUrl = 'https://api.themoviedb.org/3/';
const apiKey = 'api_key=f5a4c4a8d947d8097d8aba9c57c93c96';

function onLoad () {  
  moviesСards.innerHTML = '';
  const startUrl = `${baseUrl}discover/movie?sort_by=popularity.desc&${apiKey}&language=${lang}`;
  getData(startUrl);
}

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
    const overview = (element['overview']) ? element['overview'] : (lang == 'en') ? 'No overview.' : 'Описание отсутствует.' ;
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
  misContainer.style.display = "flex";
}

function findMovie () {
  moviesСards.innerHTML = '';
  if (search.value) {
    getData(`${baseUrl}search/movie?query=${search.value}&${apiKey}&language=${lang}`);
  } else {
    onLoad();
  }
}

function reloadPage () {
  document.location.reload();
}

// TRANSLATION

function getTranslate(lang) {
  document.querySelectorAll('[data-i18n]').forEach(function (item) {
    let translate = i18Obj[lang][item.dataset.i18n];
    item.innerHTML = translate;
    if (item.placeholder) {
      item.placeholder = translate;
      item.textContent = '';
    };
  })
}

function changeLang(event) {
  lang = event.target.dataset.i18n;
  setLocalStorage();
  getTranslate(lang);
  onLoad();
}

// Local storage

function getLocalStorage() {
  if (localStorage.getItem('lang')) {
    lang = localStorage.getItem('lang');
  };
  document.querySelector(`[data-i18n="${lang}"]`).classList.add('active');
  getTranslate(lang);
}

function setLocalStorage() {
  localStorage.setItem('lang', lang);
}

window.addEventListener('load', getLocalStorage);
window.addEventListener('load', onLoad);
searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  findMovie();
});
misButton.addEventListener('click', reloadPage);
languageGroup.addEventListener('click', changeLang);
languageGroup.addEventListener('click', changeClassActive);