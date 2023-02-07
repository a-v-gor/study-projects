import { returnMainBody } from "./returnMainBody";
import { createPage } from "./createPage";

function createGamePage () {
  return createPage(returnMainBody());
}

export function makeStartBtnActive () {
  const startBtn = document.querySelector(".main__start");
  if (startBtn) {
    startBtn.addEventListener("click", createGamePage);
  }
  return;
}