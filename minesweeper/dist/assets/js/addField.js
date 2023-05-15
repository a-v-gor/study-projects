import data from './data.js';
import addNode from './addNode.js';

export default function addField() {
  if (document.querySelector('.field')) {
    document.querySelector('.field').innerHTML = '';
  }
  let fieldClass = 'field field-';
  fieldClass += data.difficulty;
  addNode('div', fieldClass, document.querySelector('.wrapper.main-wrapper'));
  for (let i = 0; i < data.numOfCells; i += 1) {
    addNode('div', 'field__cell', document.querySelector('.field'));
    document.querySelectorAll('.field__cell')[i].setAttribute('id', i);
  }
}
