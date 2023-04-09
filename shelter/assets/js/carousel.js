import { generatePetsCard } from "./generate-pets-card.js";
import { getWinWidth } from "./get-win-width.js";

const petsCards = document.querySelector(".our-friends__cards");
const buttonLeft = document.querySelector(".our-friends__left-arr");
const buttonRight = document.querySelector(".our-friends__right-arr");

export function carousel() {
  let winWidth;
  let petsData;
  let leftCards = [];
  let centerCards = [];
  let rightCards = [];

  function startCarousel() {
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
        })
      }
    )
    .catch(function(err) {
      console.log("Fetch Error :-S", err);
    });
  }

  function getUniqueNums(arr = []) {
    const num = (winWidth == "desktop") ? 3 : (winWidth == "tablet") ? 2 : 1;
    let rezult = [];
    for (; rezult.length < num;) {
      let rand = Math.floor(Math.random()* 8);
      if (!(arr.includes(rand) || rezult.includes(rand))){
        rezult.push(rand);
      }
    }
    return rezult;
  }

  function generatePetsCards(arrLeft = [], arrCenter = [], arrRight = []) {
    if (!arrCenter.length) {
      arrCenter = getUniqueNums();
      centerCards = arrCenter;
    }
    if (!arrLeft.length) {
      arrLeft = getUniqueNums(arrCenter);
      leftCards = arrLeft;
    }
    if (!arrRight.length) {
      arrRight = getUniqueNums(arrCenter);
      rightCards = arrRight;
    }

    const cardsIDs = arrLeft.concat(arrCenter, arrRight);

    for (let i = 0; i < cardsIDs.length; i++) {
      petsCards.insertAdjacentHTML("beforeend", generatePetsCard(cardsIDs[i], petsData));
    }
  }

  function changeWinWidth() {
    if (!(getWinWidth() == winWidth)) {
      winWidth = getWinWidth();
      console.log(winWidth);
      leftCards = [];
      centerCards = [];
      rightCards = [];
      applyCurrentCards();
    }
  }

  function moveCardsToLeft() {
    [leftCards, centerCards, rightCards] = [getUniqueNums(leftCards), leftCards, centerCards];
    petsCards.classList.add("transition-left");
    removeBtnListeners();
  }

  function moveCardsToRight() {
    [leftCards, centerCards, rightCards] = [centerCards, rightCards, getUniqueNums(rightCards)];
    petsCards.classList.add("transition-right");
    removeBtnListeners();
  }
  
  function removeBtnListeners() {
    buttonLeft.removeEventListener("click", moveCardsToLeft);
    buttonRight.removeEventListener("click", moveCardsToRight);
  }

  function removeTransitionClass () {
    petsCards.classList.remove("transition-left");
    petsCards.classList.remove("transition-right");
    buttonLeft.addEventListener("click", moveCardsToLeft);
    buttonRight.addEventListener("click", moveCardsToRight);
  }

  function applyCurrentCards() {
    petsCards.replaceChildren();
    generatePetsCards(leftCards, centerCards, rightCards);
  }

  document.addEventListener("DOMContentLoaded", startCarousel);
  window.addEventListener("resize", changeWinWidth);
  buttonLeft.addEventListener("click", moveCardsToLeft);
  buttonRight.addEventListener("click", moveCardsToRight);
  petsCards.addEventListener("animationend", removeTransitionClass);
  petsCards.addEventListener("animationend", applyCurrentCards);
}