import { createPageHTML } from "./createPageHTML";
import { returnGameBody } from "./returnGameBody";
import { makeHeaderActive } from "./makeHeaderActive";
import { returnPlayer } from "./returnPlayer";
import birdsData from "./birds";

export function returnGamePage() {
  createPageHTML(returnGameBody());
  makeHeaderActive();
  const variants = {};
  for (let i = 0; i < birdsData.length; i++) {
    variants[i] = birdsData[i];
  }
  const variant = variants[0];

  for (let i = 0; i < 6; i++) {
    const answerVariant = document.createElement("li");
    answerVariant.classList.add("answer-variants__li");
    answerVariant.innerHTML = variant[i].name;
    document.querySelector(".answer-variants__ol").append(answerVariant);
  }

  returnPlayer(variant[0].audio);

}