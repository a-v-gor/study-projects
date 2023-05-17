import data from './data.js';
import addNode from './addNode.js';

export default function addField() {
  const field = document.querySelector('.field');
  if (field) {
    field.remove();
  }
  const fieldClass = `field field-${data.difficulty}`;
  addNode('div', fieldClass, document.querySelector('.field-wrapper'));
  for (let i = 0; i < data.numOfCells; i += 1) {
    addNode('div', 'field__cell', document.querySelector('.field'));
    document.querySelectorAll('.field__cell')[i].setAttribute('id', i);
  }
}
