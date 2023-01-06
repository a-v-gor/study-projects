'use strict';

const hamburger = document.querySelector('.menu-toggle');
const navigationList = document.querySelector('.nav-list');
const navigation = document.querySelector('nav');
const buttonLeft = document.querySelector('.left-arr');
const buttonRight = document.querySelector('.right-arr');
const petsCards = document.querySelector('.pets-cards');
const winWidth = (window.innerWidth >= 1280) ? 1280 : (window.innerWidth >= 768) ? 768 : 320;
const substrateLayer = document.querySelector('.substrate');
const menuBtn = document.querySelector('.menu-btn');
let petsData;
let currentCards = [];

// Underline active link
function changeClassActive (event) {
  let elements = document.querySelectorAll('.nav-item > a');
  elements.forEach((element) => element.classList.remove('active'));
  event.target.classList.add('active');
};

// Burger menu
function toggleMenu () {
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

function unBlockPage() {
  substrateLayer.classList.remove('active');
}

function hideBurgerMenu (event) {
  const navigationItemsArr = Array.prototype.slice.call(navigationList.querySelectorAll('a'));
  if ((hamburger.checked) && (navigationItemsArr.includes(event.target))) {
    toggleMenu();
  }
}

// Carousel

function getPetsData () {
  fetch('../../assets/pets.json')
  .then(  
    function(response) {
      if (response.status !== 200) {
        console.log('Problem. Status Code: ' + response.status);
        return;
      }
      
      response.json().then(function(data) {
        petsData = data;
        generatePetsCards();
      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });  
}


function moveCardsToLeft() {
  petsCards.classList.add('transition-left');
  removeBtnListeners();
}

function moveCardsToRight() {
  petsCards.classList.add('transition-right');
  removeBtnListeners();
}

function removeBtnListeners() {
  buttonLeft.removeEventListener('click', moveCardsToLeft);
  buttonRight.removeEventListener('click', moveCardsToRight);
}

function applyCurrentCards() {
  petsCards.innerHTML = '';
  generatePetsCards();
}

function removeTransitionClass () {
  petsCards.classList.remove('transition-left');
  petsCards.classList.remove('transition-right');
  buttonLeft.addEventListener('click', moveCardsToLeft);
  buttonRight.addEventListener('click', moveCardsToRight);
}

function generateUniqueSetOfNums (arr) {
  if (winWidth == 1280) {
    if(!arr.length) {
      for (; arr.length < 6;) {
        let rand = Math.floor(Math.random()* 8);
        if (!(arr.includes(rand))){
          arr.push(rand);
        }
      }
    } else {
      for (; arr.length < 6;) {
        let rand = Math.floor(Math.random()* 8);
        if (!(arr.includes(rand))){
          arr.unshift(rand);
        }
      }
    }
    return arr.concat(arr[0], arr[1], arr[2]);
  } else if (winWidth == 768) {
    if(!arr.length) {
      for (; arr.length < 4;) {
        let rand = Math.floor(Math.random()* 8);
        if (!(arr.includes(rand))){
          arr.push(rand);
        }
      }
    } else {
      for (; arr.length < 4;) {
        let rand = Math.floor(Math.random()* 8);
        if (!(arr.includes(rand))){
          arr.unshift(rand);
        }
      }
    }
    return arr.concat(arr[0], arr[1]);
  } else {
    if(!arr.length) {
      for (; arr.length < 2;) {
        let rand = Math.floor(Math.random()* 8);
        if (!(arr.includes(rand))){
          arr.push(rand);
        }
      }
    } else {
      for (; arr.length < 2;) {
        let rand = Math.floor(Math.random()* 8);
        if (!(arr.includes(rand))){
          arr.unshift(rand);
        }
      }
    }
    return arr.concat(arr[0]);
  }
}

function generatePetsCards() {
  let ids;
  if (winWidth == 1280) {
    if(!currentCards.length) {
      ids = generateUniqueSetOfNums([]);
      currentCards = ids;
    } else {
      let arr = [];
      for(let i = 0; i < 3; i++) {
        arr.push(currentCards[i])
      };
      ids = generateUniqueSetOfNums(arr);
      currentCards = ids;
    }

    for (let i = 0; i<=8; i++) {
      petsCards.insertAdjacentHTML('beforeend', generatePetCard(ids[i], i));
    }
  } else if (winWidth == 768) {
    if(!currentCards.length) {
      ids = generateUniqueSetOfNums([]);
      currentCards = ids;
    } else {
      let arr = [];
      for(let i = 0; i < 2; i++) {
        arr.push(currentCards[i])
      };
      ids = generateUniqueSetOfNums(arr);
      currentCards = ids;
    }

    for (let i = 0; i<=5; i++) {
      petsCards.insertAdjacentHTML('beforeend', generatePetCard(ids[i], i));
    }
  } else {
    if(!currentCards.length) {
      ids = generateUniqueSetOfNums([]);
      currentCards = ids;
    } else {
      let arr = [];
      arr.push(currentCards[0])
      ids = generateUniqueSetOfNums(arr);
      currentCards = ids;
    }

    for (let i = 0; i<=2; i++) {
      petsCards.insertAdjacentHTML('beforeend', generatePetCard(ids[i], i));
    }
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
  blockPage();
  disableScroll();
  document.querySelector('.popup-pet-card').classList.add('active');
}

function hidePopup(event) {
  if ((event.target == substrateLayer) || (event.target == document.querySelector('.close-popup'))) {
    if (document.querySelector('.popup-pet-card')) {
      document.querySelector('.popup-pet-card').classList.remove('active');
    };
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

document.addEventListener("DOMContentLoaded", getPetsData);
navigationList.addEventListener('click', changeClassActive);
document.addEventListener('click', checkBurger);
document.addEventListener('click', hideBurgerMenu);
buttonLeft.addEventListener('click', moveCardsToLeft);
buttonRight.addEventListener('click', moveCardsToRight);
petsCards.addEventListener('animationend', removeTransitionClass);
petsCards.addEventListener('animationend', applyCurrentCards);
petsCards.addEventListener('click', makePopup);
document.addEventListener('click', hidePopup);
substrateLayer.addEventListener('mouseover', markClosePopupBtn);
substrateLayer.addEventListener('mouseout', deMarkClosePopupBtn);
substrateLayer.addEventListener('click', toggleMenu);