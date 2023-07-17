import './assets/scss/style.scss';

const baseUrl = 'http://127.0.0.1:3000';
const btnsArea: HTMLDivElement = <HTMLDivElement> document.querySelector('.view-btns');

async function setNumOfCars() {
  fetch(`${baseUrl}/garage?_limit=10`)
    .then((response) => response.headers.get('X-Total-Count'))
    .then((result) => {
      const numOfCarsText: HTMLSpanElement = <HTMLSpanElement> document.getElementById('cars-num-text');
      numOfCarsText.innerText = String(result);
    })
    .catch((error) => error.message);
}

async function setNumOfWinners() {
  fetch(`${baseUrl}/winners?_limit=7`)
    .then((response) => response.headers.get('X-Total-Count'))
    .then((result) => {
      const numOfWinnersText: HTMLSpanElement = <HTMLSpanElement> document.getElementById('winners-num-text');
      numOfWinnersText.innerText = String(result);
    })
    .catch((error) => error.message);
}

function startGame() {
  setNumOfCars();
  setNumOfWinners();
}

function changeView(evt: Event) {
  const viewBtns: NodeListOf<HTMLButtonElement> = btnsArea.querySelectorAll('button');
  const btnGarage: HTMLButtonElement = viewBtns[0];
  const btnWinners: HTMLButtonElement = viewBtns[1];
  const viewSections: NodeListOf<HTMLElement> = document.querySelectorAll('.view');
  const viewGarage: HTMLElement = viewSections[0];
  const viewWinners: HTMLElement = viewSections[1];

  function showHide(sectToHide: HTMLElement, sectToShow: HTMLElement) {
    if (!sectToHide.classList.contains('view_unactive')) {
      sectToHide.classList.add('view_unactive');
      sectToShow.classList.remove('view_unactive');
    }
  }

  if (evt.target === btnGarage) {
    showHide(viewWinners, viewGarage);
  } else if (evt.target === btnWinners) {
    showHide(viewGarage, viewWinners);
  }
}

document.addEventListener('DOMContentLoaded', startGame);
btnsArea.addEventListener('click', changeView);
