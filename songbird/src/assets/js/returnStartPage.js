import  { createPageHTML } from "./createPageHTML";
import  { returnStartBody } from "./returnStartBody";
import  { makeStartBtnActive } from "./makeStartBtnActive";
import  { makeHeaderActive } from "./makeHeaderActive";

export function returnStartPage () {
  createPageHTML(returnStartBody());
  makeStartBtnActive();
  makeHeaderActive();
}