export default function increaseNum(elemClass) {
  const element = document.querySelector(elemClass);
  let num = +element.textContent;
  num += 1;
  element.textContent = num;
}
