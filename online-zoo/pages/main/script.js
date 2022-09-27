'use strict';

// alert('Работа не закончена. Если не сложно, отложите, пожалуйста, проверку. Спасибо.')

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
navigation.addEventListener('click', changeClassActive);
