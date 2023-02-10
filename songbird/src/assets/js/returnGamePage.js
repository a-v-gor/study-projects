import  { createPage } from "./createPage";
import  { returnGameBody } from "./returnGameBody";
import  { makeHeaderActive } from "./makeHeaderActive";

export function returnGamePage() {
  createPage(returnGameBody());
  makeHeaderActive();
}