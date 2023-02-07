import "./assets/css/normalize.css";
import "./assets/css/main.scss";
import  { createPage } from "./assets/js/createPage";
import  { returnStartBody } from "./assets/js/returnStartBody";
import  { makeStartBtnActive } from "./assets/js/makeStartBtnActive";

function func () {
  createPage(returnStartBody());
  makeStartBtnActive();
}

document.addEventListener("DOMContentLoaded", func);