import './assets/scss/style.scss';
import View from './assets/ts/view/view';

const btnsArea: HTMLDivElement = <HTMLDivElement> document.querySelector('.view-btns');
const view = new View();

function changeView(evt: Event) {
  const target: HTMLButtonElement = <HTMLButtonElement> evt.target;
  if (target.localName === 'button') {
    const viewName = target.innerText;
    view.drawView(viewName);
  }
}

function startGame(): void {
  view.drawView('Garage');
  btnsArea.addEventListener('click', changeView);
}

document.addEventListener('DOMContentLoaded', startGame);
