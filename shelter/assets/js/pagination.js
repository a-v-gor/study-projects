import { getWinWidth } from "./get-win-width.js";
import { generatePetsCard } from "./generate-pets-card.js";

export function pagination() {
  let winWidth;
  let petsData;
  let numOfPages = 0;

  function createCardIDs() {
    const cardsIDs = [];
    for (let i = 0; i < 7; i++) {
      for (let j = 0; j < 8; j++) {
        cardsIDs.push(j);
      }
    }
    return cardsIDs;
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
          changeWinWidth();
          setNumOfPages();
          generateCardsPages(returnFormedPages());
        })
      }
    )
    .catch(function(err) {
      console.log("Fetch Error :-S", err);
    });
  }

  function changeWinWidth() {
    if (!(getWinWidth() == winWidth)) {
      winWidth = getWinWidth();
      console.log(winWidth);
    }
  }

  function setNumOfPages() {
    numOfPages = (winWidth = "desktop") ? 6 : (winWidth = "tablet") ? 8 : 16;
    console.log('numOfPages = ' + numOfPages);
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
    const cardIDs = createCardIDs();
    for (let i = 0; i < numOfPages; i++) {
      const page = cardIDs.splice(0, 48 / numOfPages);
      pages.push(shuffleArray(page));
    };
    console.log(pages);
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

  document.addEventListener("DOMContentLoaded", startPagination);
  window.addEventListener("resize", changeWinWidth);
}