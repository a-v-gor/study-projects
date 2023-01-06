'use strict';

const hamburger = document.querySelector('.menu-toggle');
const navigationList = document.querySelector('.nav-list');
const navigation = document.querySelector('nav');
const petsCards = document.querySelector('.pets-cards');
const winWidth = (window.innerWidth >= 1280) ? 1280 : (window.innerWidth >= 768) ? 768 : 320;
const substrateLayer = document.querySelector('.substrate');
const menuBtn = document.querySelector('.menu-btn');
let petsData;
let currentCards = [];
let petsPagesArr = [];
const numPages = (winWidth == 1280) ? 6 : (winWidth == 768) ? 8 : 16;
const numCardsPerPage = 48/numPages;
const btnFirstPage = document.querySelector('#first-page');
const btnPrevPage = document.querySelector('#prev-page');
const btnNextPage = document.querySelector('#next-page');
const btnLastPage = document.querySelector('#last-page');
const pageNumElem = document.querySelector('.page-cards-num');
let petsCardsPages = document.querySelectorAll('.pets-cards-page');


// Underline active link
function changeClassActive (event) {
  let elements = document.querySelectorAll('.nav-item > a');
  elements.forEach((element) => element.classList.remove('active'));
  event.target.classList.add('active');
};

// Burger menu
function toggleMenu() {
  if (hamburger.checked) {
    hamburger.checked = false;
    enableScroll();
    unBlockPage();
  }; 
};

function checkBurger() {
  if (hamburger.checked || document.querySelector('.popup-pet-card')) {
    disableScroll();
    blockPage();
  } else {
    enableScroll();
    unBlockPage();
  }
}

function disableScroll() {
  document.body.classList.add('stop-scroll');
}

function enableScroll() {
  document.body.classList.remove('stop-scroll');
}

function blockPage() {
  substrateLayer.classList.add('active');
}

function blockPagePopup() {
  substrateLayer.classList.add('active-popup');
}

function unBlockPage() {
  substrateLayer.classList.remove('active');
}

function unBlockPagePopup() {
  substrateLayer.classList.remove('active-popup');
}

function hideBurgerMenu (event) {
  const navigationItemsArr = Array.prototype.slice.call(navigationList.querySelectorAll('a'));
  if ((hamburger.checked) && (navigationItemsArr.includes(event.target))) {
    toggleMenu();
  }
}

// Popup

function makePopup (event) {
  const id = event.target.dataset.id;
  const petInfo = petsData[id];
  const popup = `
  <div class="popup-pet-card">
    <img src="${petInfo['img']}" alt="pet" class="popup-img">
    <article class="popup-article">
      <div class="popup-header">
        <h3 class="popup-title">${petInfo['name']}</h3>
        <p class="popup-subtitle">${petInfo['type']} - ${petInfo['breed']}</p>
      </div>
      <p class="popup-article-text">${petInfo['description']}</p>
      <ul class="popup-description-pet">
        <li><span class="popup-caract">Age: </span>${petInfo['age']}</li>
        <li><span class="popup-caract">Inoculations: </span>${petInfo['inoculations'].join(', ')}</li>
        <li><span class="popup-caract">Diseases: </span>${petInfo['diseases'].join(', ')}</li>
        <li><span class="popup-caract">Parasites: </span>${petInfo['parasites'].join(', ')}</li>
      </ul>
    </article>
    <button type="button" class="close-popup"></button>
  </div>`;
  document.querySelector('.our-friends').insertAdjacentHTML('beforeend', popup);
  setTimeout(showPopup, 0);
}

function showPopup() {
  blockPagePopup();
  disableScroll();
  document.querySelector('.popup-pet-card').classList.add('active');
}

function hidePopup(event) {
  if ((event.target == substrateLayer) || (event.target == document.querySelector('.close-popup'))) {
    if (document.querySelector('.popup-pet-card')) {
      document.querySelector('.popup-pet-card').classList.remove('active');
    };
    unBlockPagePopup();
    unBlockPage();
    enableScroll();
    setTimeout(removePopup, 1000);
  }
}

function removePopup() {
  if (document.querySelector('.popup-pet-card')) {
    document.querySelector('.popup-pet-card').remove();
  }
}

function markClosePopupBtn() {
  if (document.querySelector('.close-popup')) {
    document.querySelector('.close-popup').classList.add('active');
  }
}

function deMarkClosePopupBtn() {
  if (document.querySelector('.close-popup')) {
    document.querySelector('.close-popup').classList.remove('active');
  }
}

// Pagination

function getPetsData() {
  fetch('../../assets/pets.json')
  .then(  
    function(response) {
      if (response.status !== 200) {
        console.log('Problem. Status Code: ' + response.status);
        return;
      }
      
      response.json().then(function(data) {
        petsData = data;
        generatePetsPagesData();
      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });  
}

function generatePetsPagesData() {
  const returnRand = () => {return Math.floor(Math.random()*8)};
  const returnPage = () => {
    let pageArr = [];
    for (let i = 0; i < numCardsPerPage;){
      let num = returnRand();
      if (!pageArr.includes(num)) {
        pageArr.push(num);
        i++;
      }
    }
    return pageArr;
  }
  while (petsPagesArr.length < numPages) {
    petsPagesArr.push(returnPage());
  }
  setPetsCardsPages();
}

function setPetsCardsPages() {
  for (let i = 0; i < numPages; i++) {
    let petsCardsPage = `<div class="pets-cards-page" id="page-${i}"></div>`;
    petsCards.insertAdjacentHTML('beforeend', petsCardsPage);
  }
  petsCardsPages = document.querySelectorAll('.pets-cards-page');
  setCardsInPetsCardsPages();
}

function setCardsInPetsCardsPages() {
  for (let i = 0; i < numPages; i++) {
     generatePetsCardsPage(i);
  }
}

function generatePetsCardsPage(pageNum) {
  for (let i = 0; i<numCardsPerPage; i++) {
    let card = generatePetCard(petsPagesArr[pageNum][i], i);
    document.querySelector(`#page-${pageNum}`).insertAdjacentHTML('beforeend',card);
  }
}

function generatePetCard (id, order) {
  const petImg = petsData[id]['img'];
  const petName = petsData[id]['name'];
  const petCard = `<div class="pet-card" data-id="${id}" id="order-${order}">
  <img width="270px" height="270px" src="${petImg}" alt="pet" data-id="${id}">
  <p class="card-text">${petName}</p>
  <button class="card-link" data-id="${id}">Learn more</button>
  </div>`
  return petCard;
}

let coordinatePetsCards = 0;
const changeCoordinate = (winWidth == 1280) ? 1200 : (winWidth == 768) ? 580 : 270;

function showNextPage() {
  pageNumElem.innerHTML = +pageNumElem.innerHTML + 1;
  if (btnPrevPage.hasAttribute("disabled")) {
    enableBtn(btnPrevPage);
    enableBtn(btnFirstPage);
  }
  coordinatePetsCards -= changeCoordinate;
  petsCards.style.left = `${coordinatePetsCards}px`;
  if (pageNumElem.innerHTML > numPages-1) {
    disableBtn(btnNextPage);
    disableBtn(btnLastPage);
  }
}

function showPrevPage() {
  pageNumElem.innerHTML -= 1;
  if (btnNextPage.hasAttribute("disabled")) {
    enableBtn(btnNextPage);
    enableBtn(btnLastPage);
  }
  coordinatePetsCards += changeCoordinate;
  petsCards.style.left = `${coordinatePetsCards}px`;
  if (pageNumElem.innerHTML < 2) {
    disableBtn(btnPrevPage);
    disableBtn(btnFirstPage);
  }
}

function showFirstPage() {
  pageNumElem.innerHTML = 1;
  coordinatePetsCards = 0;
  petsCards.style.left = `${coordinatePetsCards}px`;
  disableBtn(btnPrevPage);
  disableBtn(btnFirstPage);
  enableBtn(btnNextPage);
  enableBtn(btnLastPage);
}

function showLastPage() {
  pageNumElem.innerHTML = numPages;
  coordinatePetsCards = -1*(numPages-1)*changeCoordinate;
  petsCards.style.left = `${coordinatePetsCards}px`;
  disableBtn(btnNextPage);
  disableBtn(btnLastPage);
  enableBtn(btnPrevPage);
  enableBtn(btnFirstPage);
}

function disableBtn(elem) {
  elem.setAttribute("disabled", "");
}


function enableBtn(elem) {
  elem.removeAttribute("disabled");
}

document.addEventListener("DOMContentLoaded", getPetsData);
navigationList.addEventListener('click', changeClassActive);
document.addEventListener('click', checkBurger);
document.addEventListener('click', hideBurgerMenu);
petsCards.addEventListener('click', makePopup);
document.addEventListener('click', hidePopup);
substrateLayer.addEventListener('mouseover', markClosePopupBtn);
substrateLayer.addEventListener('mouseout', deMarkClosePopupBtn);
substrateLayer.addEventListener('click', toggleMenu);
btnNextPage.addEventListener('click', showNextPage);
btnPrevPage.addEventListener('click', showPrevPage);
btnFirstPage.addEventListener('click', showFirstPage);
btnLastPage.addEventListener('click', showLastPage);