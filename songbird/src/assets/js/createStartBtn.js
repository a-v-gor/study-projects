import { createMainBody } from "../js/createMainBody";

export function createStartBtn () {
  const startBtn = document.querySelector(".main__start");
  if (startBtn) {
    startBtn.addEventListener("click", createMainBody);
  }
  return;
}