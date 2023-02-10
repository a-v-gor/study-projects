import  { returnGamePage } from "./returnGamePage";

export function makeStartBtnActive () {
  const startBtn = document.querySelector(".main__start");
  if (startBtn) {
    startBtn.addEventListener("click", returnGamePage);
  }
  return;
}