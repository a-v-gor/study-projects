import { createPageHTML } from "./createPageHTML";
import { returnGameBody } from "./returnGameBody";
import { makeHeaderActive } from "./makeHeaderActive";
import { returnPlayer } from "./returnPlayer";
import { returnAnswerVariants } from "./returnAnswerVariants";
import birdsData from "./birds";

export function returnGamePage() {
  createPageHTML(returnGameBody());
  makeHeaderActive();

  

  const variants = {};
  for (let i = 0; i < birdsData.length; i++) {
    variants[i] = birdsData[i];
  }

  console.log(variants[0]);
  const variant = variants[0];

  // Вывод списка вопросов
  for (let i = 0; i < 6;) {
    const questionText = document.createElement("li");
    questionText.classList.add("top-panel__questions-li");
    questionText.innerHTML = "Вопрос " + ++i;
    document.querySelector(".top-panel__questions-ul").append(questionText);
  }

  returnPlayer(variant[0].audio);
  
  // Вывод вариантов ответов
  returnAnswerVariants(variant);  


  function showVariant() {
    console.log(this.innerHTML);
  }
  
  for(let answerVariant of document.querySelectorAll(".answer-variants__li")) {
    answerVariant.addEventListener("click", showVariant);
  }
}