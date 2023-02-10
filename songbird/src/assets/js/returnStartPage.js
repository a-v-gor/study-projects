import  { createPage } from "./createPage";
import  { returnStartBody } from "./returnStartBody";
import  { makeStartBtnActive } from "./makeStartBtnActive";
import  { makeHeaderActive } from "./makeHeaderActive";

export function returnStartPage () {
  createPage(returnStartBody());
  makeStartBtnActive();
  makeHeaderActive();
}