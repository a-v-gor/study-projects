'use strict';

export default function changeClassActive (event) {
  let elements = document.querySelectorAll(`.${event.target.classList}`);
  elements.forEach((element) => element.classList.remove('active'));
  event.target.classList.add('active');
};