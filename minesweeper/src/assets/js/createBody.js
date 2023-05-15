import data from './data.js';

export default function createBody() {
  function addNode(strNode, strClass, parentNode, strIn = '') {
    const node = document.createElement(`${strNode}`);
    node.className = `${strClass}`;
    if (strIn.length) {
      node.innerHTML = strIn;
    }
    parentNode.append(node);
  }

  document.body.textContent = '';
  addNode('header', 'header', document.body);
  addNode('div', 'wrapper header-wrapper', document.querySelector('.header'));
  addNode('h1', 'logo', document.querySelector('.wrapper.header-wrapper'), 'Minesweeper');
  addNode('nav', 'header__nav header-nav', document.querySelector('.wrapper.header-wrapper'));
  addNode('input', 'header-nav__menu-toggle', document.querySelector('.header__nav.header-nav'));
  document.querySelector('.header-nav__menu-toggle').setAttribute('id', 'menu-toggle');
  document.querySelector('.header-nav__menu-toggle').setAttribute('type', 'checkbox');
  addNode('label', 'header-nav__menu-btn', document.querySelector('.header__nav.header-nav'));
  document.querySelector('.header-nav__menu-btn').setAttribute('for', 'menu-toggle');
  addNode('span', 'header-nav__hamburger-line', document.querySelector('.header-nav__menu-btn'));
  addNode('ul', 'header-nav__ul', document.querySelector('.header__nav.header-nav'));
  addNode('li', 'header-nav__li', document.querySelector('.header-nav__ul'), 'New Game');
  addNode('li', 'header-nav__li', document.querySelector('.header-nav__ul'), 'Records');
  addNode('main', 'main', document.body);
  addNode('div', 'wrapper main-wrapper', document.querySelector('.main'));
  addNode('div', 'stat', document.querySelector('.wrapper.main-wrapper'));
  addNode('div', 'stat__timer', document.querySelector('.stat'), 'Time: ');
  addNode('span', 'stat__seconds', document.querySelector('.stat__timer'), '00');
  addNode('div', 'stat__player', document.querySelector('.stat'));
  addNode('div', 'stat__moves', document.querySelector('.stat'), 'Moves: ');
  addNode('span', 'stat__num-moves', document.querySelector('.stat__moves'), '00');
  let fieldClass = 'field field-';
  fieldClass += data.difficulty;
  addNode('div', fieldClass, document.querySelector('.wrapper.main-wrapper'));
  for (let i = 0; i < data.numOfCells; i += 1) {
    addNode('div', 'field__cell', document.querySelector('.field'));
    document.querySelectorAll('.field__cell')[i].setAttribute('id', i);
  }
  addNode('div', 'settings', document.querySelector('.wrapper.main-wrapper'));
  addNode('div', 'settings__sound', document.querySelector('.settings'), 'Sound');
  addNode('div', 'settings__difficulty', document.querySelector('.settings'), 'Difficulty');
  addNode('footer', 'footer', document.body);
  addNode('div', 'wrapper footer-wrapper', document.querySelector('.footer'));
  addNode('a', 'footer__github', document.querySelector('.wrapper.footer-wrapper'));
  document.querySelector('.footer__github').setAttribute('href', 'https://github.com/a-v-gor');
  addNode('div', 'footer__year', document.querySelector('.wrapper.footer-wrapper'), '2023');
  addNode('a', 'footer__rss-logo', document.querySelector('.wrapper.footer-wrapper'));
  document.querySelector('.footer__rss-logo').setAttribute('href', 'https://rs.school/js/');
  addNode('div', 'rezult-msg rezult-msg_unactive', document.querySelector('.main'));
  addNode('p', 'rezult-msg__text', document.querySelector('.rezult-msg'));
  addNode('div', 'rezult-msg__btn', document.querySelector('.rezult-msg'), 'Close');
  addNode('div', 'settings__window', document.querySelector('.main'));
  addNode('h2', 'settings__header', document.querySelector('.settings__window'), 'Set Your Game');
  addNode('form', 'settings__field-size-form', document.querySelector('.settings__window'));
  addNode('fieldset', 'settings__field-size-fieldset', document.querySelector('.settings__field-size-form'));
  addNode('legend', 'settings__field-size-legend', document.querySelector('.settings__field-size-fieldset'), 'Select field size');
  addNode('div', 'settings__field-size-sizes', document.querySelector('.settings__field-size-fieldset'));
  addNode('input', 'settings__field-size-radio', document.querySelector('.settings__field-size-sizes'));
  document.querySelector('.settings__field-size-radio').setAttribute('type', 'radio');
  document.querySelector('.settings__field-size-radio').setAttribute('id', 'easy');
  document.querySelector('.settings__field-size-radio').setAttribute('name', 'field-size');
  addNode('label', 'settings__field-size-label', document.querySelector('.settings__field-size-sizes'), 'easy (10 * 10)');
  document.querySelector('.settings__field-size-label').setAttribute('for', 'easy');
  addNode('input', 'settings__field-size-radio', document.querySelector('.settings__field-size-sizes'));
  document.querySelectorAll('.settings__field-size-radio')[1].setAttribute('type', 'radio');
  document.querySelectorAll('.settings__field-size-radio')[1].setAttribute('id', 'medium');
  document.querySelectorAll('.settings__field-size-radio')[1].setAttribute('name', 'field-size');
  addNode('label', 'settings__field-size-label', document.querySelector('.settings__field-size-sizes'), 'medium (15 * 15)');
  document.querySelectorAll('.settings__field-size-label')[1].setAttribute('for', 'medium');
  addNode('input', 'settings__field-size-radio', document.querySelector('.settings__field-size-sizes'));
  document.querySelectorAll('.settings__field-size-radio')[2].setAttribute('type', 'radio');
  document.querySelectorAll('.settings__field-size-radio')[2].setAttribute('id', 'hard');
  document.querySelectorAll('.settings__field-size-radio')[2].setAttribute('name', 'field-size');
  addNode('label', 'settings__field-size-label', document.querySelector('.settings__field-size-sizes'), 'hard (25 * 25)');
  document.querySelectorAll('.settings__field-size-label')[2].setAttribute('for', 'hard');
  addNode('form', 'settings__field-size-form', document.querySelector('.settings__window'));
}
