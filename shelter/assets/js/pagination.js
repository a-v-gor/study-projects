import { getWinWidth } from "./get-win-width.js";
import { generatePetsCard } from "./generate-pets-card.js";

export function pagination() {
  const petsCardsPages = document.querySelector(".our-friends__cards-pages-wrap");
  const pageNumElem = document.querySelector(".num-page");
  const btnFirstPage = document.querySelector('#first-page');
  const btnPrevPage = document.querySelector('#prev-page');
  const btnNextPage = document.querySelector('#next-page');
  const btnLastPage = document.querySelector('#last-page');
  
  let shuffledCardIDs = [];
  let winWidth;
  let changeCoordinate;
  let petsData;
  let numOfPages;
  let coordinatePetsCards = 0;
  
  function createCardIDs() {
    const cardsIDs = [];
    for (let i = 0; i < 6; i++) {
      for (let j = 0; j < 8; j++) {
        cardsIDs.push(j);
      }
    }
    shuffledCardIDs = shuffleCardIDs(cardsIDs);
  }

  function shuffleCardIDs(cardsIDs) {
    const orderedArr = [].concat(cardsIDs);
    const shuffledArr = [];
    for (let i = 0; i < 12; i++) {
      let arr = orderedArr.splice(0, 4);
      shuffledArr.push(shuffleArray(arr));
    }
    return shuffledArr.flat(1);
  }

  function startPagination() {
    fetch("../assets/json/pets.json")
    .then(
      function(response) {
        if (response.status !== 200) {
          console.log("Problem. Status Code: " + response.status);
          return;
        }
        
        response.json().then(function(data) {
          petsData = data;
          createCardIDs();
          changeWinWidth();
        })
      }
    )
    .catch(function(err) {
      console.log("Fetch Error :-S", err);
    });
  }

  function renewCards() {
    petsCardsPages.replaceChildren();
    setNumOfPages();
    generateCardsPages(returnFormedPages());
  }

  function changeWinWidth() {
    if (!(getWinWidth() == winWidth)) {
      winWidth = getWinWidth();
      renewCards();
      showFirstPage();
      actualizeChangeCoordinate();
    }
  }

  function setNumOfPages() {
    numOfPages = (winWidth == "desktop") ? 6 : (winWidth == "tablet") ? 8 : 16;
  }

  function shuffleArray(arr) {
    const sourceArr = [].concat(arr);
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      result.push(sourceArr.splice([Math.floor((Math.random() * sourceArr.length))], 1));
    }
    return result.flat(1);
  }

  function returnFormedPages() {
    const pages = [];
    const cardIDs = [].concat(shuffledCardIDs);
    for (let i = 0; i < numOfPages; i++) {
      const page = cardIDs.splice(0, 48 / numOfPages);
      pages.push(page);
    };
    return pages;
  }

  function generateCardsPages(arrPagesIDs) {
    for (let i = 0; i < arrPagesIDs.length; i++){
      const cardsPage = document.createElement("div");
      cardsPage.classList = "our-friends__cards-page";
      cardsPage.id = `page-${i}`;
      for (let j = 0; j < 48 / numOfPages; j++) {
        const card = generatePetsCard(arrPagesIDs[i][j], petsData);
        cardsPage.insertAdjacentHTML("beforeend", card);
      }
      document.querySelector(".our-friends__cards-pages-wrap").appendChild(cardsPage);
    }
  }

  function actualizeChangeCoordinate() {
    changeCoordinate = (winWidth == "desktop") ? 1230 : (winWidth == "tablet") ? 610 : 300;
  }

  function showNextPage() {
    pageNumElem.innerHTML = +pageNumElem.innerHTML + 1;
    if (btnPrevPage.hasAttribute("disabled")) {
      enableBtn(btnPrevPage);
      enableBtn(btnFirstPage);
    }
    coordinatePetsCards -= changeCoordinate;
    petsCardsPages.style.left = `${coordinatePetsCards}px`;
    if (pageNumElem.innerHTML > numOfPages-1) {
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
    petsCardsPages.style.left = `${coordinatePetsCards}px`;
    if (pageNumElem.innerHTML < 2) {
      disableBtn(btnPrevPage);
      disableBtn(btnFirstPage);
    }
  }

  function showFirstPage() {
    pageNumElem.innerHTML = 1;
    coordinatePetsCards = 0;
    petsCardsPages.style.left = `${coordinatePetsCards}px`;
    disableBtn(btnPrevPage);
    disableBtn(btnFirstPage);
    enableBtn(btnNextPage);
    enableBtn(btnLastPage);
  }

  function showLastPage() {
    pageNumElem.innerHTML = numOfPages;
    coordinatePetsCards = -1*(numOfPages-1)*changeCoordinate;
    petsCardsPages.style.left = `${coordinatePetsCards}px`;
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

  document.addEventListener("DOMContentLoaded", startPagination);
  window.addEventListener("resize", changeWinWidth);
  btnNextPage.addEventListener('click', showNextPage);
  btnPrevPage.addEventListener('click', showPrevPage);
  btnFirstPage.addEventListener('click', showFirstPage);
  btnLastPage.addEventListener('click', showLastPage);
}