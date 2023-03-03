export function returnAnswerVariants(variantObj) {
  const answerVariants = document.querySelector(".answer-variants__ol");

  for (let i = 0; i < 6; i++) {
    const answerVariant = document.createElement("li");
    answerVariant.classList.add("answer-variants__li");
    answerVariant.innerHTML = variantObj[i].name;
    answerVariants.append(answerVariant);
  }
}