'use strict';

function checkLength() {

  this.value = this.value.length > 4 ? this.value.slice(-4) : this.value
}

const amountNumber = document.querySelector('.pick-and-feed__amount-number');



amountNumber.addEventListener('input', checkLength);

// alert('Страница `Donate` в работе. Если не сложно, отложите, пожалуйста, проверку. Спасибо.')