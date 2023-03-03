import { createPageHTML } from "./createPageHTML";
import { returnGameBody } from "./returnGameBody";
import { makeHeaderActive } from "./makeHeaderActive";
import { returnPlayer } from "./returnPlayer";
import { returnAnswerVariants } from "./returnAnswerVariants";
import birdsData from "./birds";

export function returnGamePage() {
  console.clear();
  createPageHTML(returnGameBody());
  makeHeaderActive();

  const playBtn = document.querySelector(".player__play-button_paused");
  let newGame = true;
  let correctAnswer;
  let countVariants = 0;
  let variant = {};

  function startNewGame() {
    if (newGame) {
      newGame = false;
      makeAnswersActive();
    }
    return;
  }

  function returnNewVariant() {
    console.log(countVariants);
    if (countVariants < 6) {
      alert("Вариант!");
      variant = birdsData[countVariants];
      console.log(variant);

      correctAnswer = birdsData[countVariants].innerHTML;
      countVariants++;
    } else {
      alert("Варианты закончились!");
    }
  }

  // Вывод списка вопросов
  for (let i = 0; i < 6;) {
    const questionText = document.createElement("li");
    questionText.classList.add("top-panel__questions-li");
    questionText.innerHTML = "Вопрос " + ++i;
    document.querySelector(".top-panel__questions-ul").append(questionText);
  }

  function showVariant() {
    console.log(this.innerHTML);
    console.log(this.innerHTML === correctAnswer);
  }

  function makeAnswersActive() {
    for(let answerVariant of document.querySelectorAll(".answer-variants__li")) {
      answerVariant.addEventListener("click", showVariant);
    }
  }

  returnNewVariant();
  returnPlayer(variant[0].audio);
  returnAnswerVariants(variant);
  
  playBtn.addEventListener("click", startNewGame);
  
}