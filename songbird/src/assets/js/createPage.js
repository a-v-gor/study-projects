import {returnHeader} from "./returnHeader.js";
import {returnFooter} from "./returnFooter.js";

export function createPage(str) {
  document.body.innerHTML = returnHeader() + str + returnFooter();
}