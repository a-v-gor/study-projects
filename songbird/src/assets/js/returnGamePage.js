import  { createPageHTML } from "./createPageHTML";
import  { returnGameBody } from "./returnGameBody";
import  { makeHeaderActive } from "./makeHeaderActive";

export function returnGamePage() {
  createPageHTML(returnGameBody());
  makeHeaderActive();
}