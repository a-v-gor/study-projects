'use strict';

import i18Obj from './translate.js';

export default function getTranslate(event) {
  const lang = event.target.dataset.i18n;

  document.querySelectorAll('[data-i18n]').forEach(function (item) {
    let translate = i18Obj[lang][item.dataset.i18n];
    item.innerHTML = translate;
    if (item.placeholder) {
      item.placeholder = translate;
      item.textContent = '';
    };
  })
}
