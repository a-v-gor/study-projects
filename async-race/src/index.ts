import './assets/scss/style.scss';
import View from './assets/ts/view';

const baseUrl = 'http://127.0.0.1:3000';
const btnsArea: HTMLDivElement = <HTMLDivElement> document.querySelector('.view-btns');
const view = new View(baseUrl);

function startGame(): void {
  view.setNumOfCars();
  view.setNumOfWinners();
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
