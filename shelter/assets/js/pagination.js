import { getWinWidth } from "./get-win-width.js";

export function pagination() {
  let winWidth;
  let cardsIDs = [];
  let petsData;
  let pages = 0;

  function createCardIDs() {
    for (let i = 0; i < 7; i++) {
      for (let j = 0; j < 8; j++) {
        cardsIDs.push(j);
      }
    }
    console.log(cardsIDs);
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
          getNumOfPages();
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

  function getNumOfPages() {
    pages = (winWidth = "desktop") ? 6 : (winWidth = "tablet") ? 8 : 16;
    console.log('pages = ' + pages);
  }

  

  document.addEventListener("DOMContentLoaded", startPagination);
  window.addEventListener("resize", changeWinWidth);
}