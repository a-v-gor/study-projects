import { createPageHTML } from "./createPageHTML";
import { returnGameBody } from "./returnGameBody";
import { makeHeaderActive } from "./makeHeaderActive";
import birdsData from "./birds";

export function returnGamePage() {
  createPageHTML(returnGameBody());
  makeHeaderActive();
  const variants = {};
  for (let i = 0; i < birdsData.length; i++) {
    variants[`${i}`] = birdsData[i];
  }

  console.log(variants);
}