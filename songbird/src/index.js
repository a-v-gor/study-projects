import "./assets/css/normalize.css";
import "./assets/css/main.scss";
import { createStartBody } from "./assets/js/createStartBody";

async function createPage() {
  document.addEventListener("DOMContentLoaded", createStartBody);
}

createPage().then(
  function () {
    alert(document.querySelector(".main__start"));
  },
  function (e) {
    alert(e);
  });