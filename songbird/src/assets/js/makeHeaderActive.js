import  { returnStartPage } from "./returnStartPage";
import  { returnGamePage } from "./returnGamePage";

function createGamePage() {
  returnGamePage();
}

export function makeHeaderActive() {
  const logo = document.querySelector(".header__logo");
  const homeLink = document.querySelector(".header-nav__li:nth-child(1)");
  const gameLink = document.querySelector(".header-nav__li:nth-child(2)");

  logo.addEventListener("click", returnStartPage);
  homeLink.addEventListener("click", returnStartPage);
  gameLink.addEventListener("click", createGamePage);
}