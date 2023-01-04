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
let lang = 'ru';
const baseUrl = 'https://api.themoviedb.org/3/';
const apiKey = 'api_key=f5a4c4a8d947d8097d8aba9c57c93c96';
const bodyContainer = document.querySelector('.body-container');

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
  data['results'].forEach(element => {
    const pathPosterImg = (element['poster_path']) ? imgPath+element['poster_path'] : './assets/img/Image-Placeholder.png';
    const overview = (element['overview']) ? element['overview'] : (lang == 'en') ? 'No overview.' : 'Описание отсутствует.';
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

function changeLang(event) {
  if (!(lang == event.target.dataset.i18n)) {
    lang = event.target.dataset.i18n;
    setLocalStorage();
    bodyContainer.classList.add('hide');
    bodyContainer.addEventListener('transitionend', translateFunc);
  }
}

function getTranslate() {
  document.querySelectorAll('[data-i18n]').forEach(function (item) {
    let translate = i18Obj[lang][item.dataset.i18n];
    item.innerHTML = translate;
    if (item.placeholder) {
      item.placeholder = translate;
      item.textContent = '';
    };
  })
}

function translateFunc () {
  getTranslate();
  onLoad();
  bodyContainer.classList.remove('hide');
  bodyContainer.removeEventListener('transitionend', translateFunc);
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

window.addEventListener('DOMContentLoaded', getLocalStorage);
window.addEventListener('DOMContentLoaded', onLoad);
searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  findMovie();
});
misButton.addEventListener('click', reloadPage);
languageGroup.addEventListener('click', changeLang);
languageGroup.addEventListener('click', changeClassActive);

// Самооценка
console.log(`
Ваша отметка - 70 балла(ов)
Отзыв по пунктам ТЗ:
Комментарии к выполненным пунктам:
1) Очень высокое качество оформления приложения и/или дополнительный не предусмотренный в задании функционал, улучшающий качество приложения
Комментарий проверяющего: Приложение на двух языках, отображение ошибки при вводе несуществующих запросов.
Все пункты выполнены полностью!

1. Вёрстка +10
  - на странице есть несколько карточек фильмов и строка поиска. На каждой карточке фильма есть постер и название фильма. Также на карточке есть другая информация, которую предоставляет API: описание фильма, его рейтинг на IMDb. +5
  - в футере приложения есть ссылка на гитхаб автора приложения, год создания приложения, логотип курса со ссылкой на курс +5
2. При загрузке приложения на странице отображаются карточки фильмов с полученными от API данными +10
3. Если в поле поиска ввести слово и отправить поисковый запрос, на странице отобразятся карточки фильмов, в названиях которых есть это слово, если такие данные предоставляет API +10
4. Поиск +30
  - при открытии приложения курсор находится в поле ввода +5
  - есть placeholder +5
  - автозаполнение поля ввода отключено (нет выпадающего списка с предыдущими запросами) +5
  - поисковый запрос можно отправить нажатием клавиши Enter +5
  - после отправки поискового запроса и отображения результатов поиска поисковый запрос продолжает отображаться в поле ввода +5
  - в поле ввода есть крестик, при клике по которому поисковый запрос из поля ввода удаляется и отображается placeholder +5
5. Очень высокое качество оформления приложения и/или дополнительный не предусмотренный в задании функционал, улучшающий качество приложения +10
  - Собственное оригинальное оформление, равное или отличающееся в лучшую сторону по сравнению с демо, приложение на двух языках, отображение ошибки при вводе несуществующих запросов.
  - Дополнительный функционал: наличие на карточке фильма его описания и рейтинга на IMDb.`);