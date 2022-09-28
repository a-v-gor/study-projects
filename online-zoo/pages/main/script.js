'use strict';

alert('Страница Donate в работе. Если не сложно, отложите, пожалуйста, проверку. Спасибо.')

function changeClassActive (event) {
  
  if (!event.target.classList.toString().endsWith('_active') && event.target.innerHTML) {
    const nonActiveClass = event.target.classList.toString();    
    const activeClass = nonActiveClass+'_active';
    const activeElement = document.querySelector(`.${activeClass}`);
    activeElement.classList.remove(activeClass);
    activeElement.classList.add(nonActiveClass);
    event.target.classList.remove(nonActiveClass);
    event.target.classList.add(activeClass);
  }
}

const navigation = document.querySelector('.nav-ul');
const footerNavigation = document.querySelector('.footer-nav__ul');

navigation.addEventListener('click', changeClassActive);
footerNavigation.addEventListener('click', changeClassActive);
