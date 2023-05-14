export default function createBody() {
  function addNode(strNode, strClass, parentNode, strIn = '') {
    const node = document.createElement(`${strNode}`);
    node.className = `${strClass}`;
    if (strIn.length) {
      node.innerHTML = strIn;
    }
    parentNode.append(node);
  }

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
  addNode('li', 'header-nav__li', document.querySelector('.header-nav__ul'), 'Игра');
  addNode('li', 'header-nav__li', document.querySelector('.header-nav__ul'), 'Рекорды');
  addNode('main', 'main', document.body);
  addNode('div', 'wrapper main-wrapper', document.querySelector('.main'));
  addNode('div', 'stat', document.querySelector('.wrapper.main-wrapper'));
  addNode('div', 'stat__timer', document.querySelector('.stat'), 'Time: 00');
  addNode('div', 'stat__player', document.querySelector('.stat'));
  addNode('div', 'stat__moves', document.querySelector('.stat'), 'Moves: 00');
  addNode('div', 'field', document.querySelector('.wrapper.main-wrapper'));
  for (let i = 0; i < 100; i += 1) {
    addNode('div', 'field__cell', document.querySelector('.field'));
    document.querySelectorAll('.field__cell')[i].setAttribute('id', i);
  }
  addNode('footer', 'footer', document.body);
  addNode('div', 'wrapper footer-wrapper', document.querySelector('.footer'));
  addNode('a', 'footer__github', document.querySelector('.wrapper.footer-wrapper'));
  document.querySelector('.footer__github').setAttribute('href', 'https://github.com/a-v-gor');
  addNode('div', 'footer__year', document.querySelector('.wrapper.footer-wrapper'), '2023');
  addNode('a', 'footer__rss-logo', document.querySelector('.wrapper.footer-wrapper'));
  document.querySelector('.footer__rss-logo').setAttribute('href', 'https://rs.school/js/');
}
