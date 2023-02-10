import {returnHeader} from "./returnHeader.js";
import {returnFooter} from "./returnFooter.js";

export function createPageHTML(str) {
  document.body.innerHTML = returnHeader() + str + returnFooter();
}