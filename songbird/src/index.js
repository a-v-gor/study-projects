import "./assets/css/normalize.css";
import "./assets/css/main.scss";
import  {createStartBody} from "./assets/js/createStartBody";
import  {createDOMObserver} from "./assets/js/createDOMObserver";
import  {createStartBtn} from "./assets/js/createStartBtn";

createDOMObserver(createStartBtn);

document.addEventListener("DOMContentLoaded", createStartBody);