import './assets/scss/style.scss';

import Api from './assets/ts/api';
import Elements from './assets/ts/elements';
import createStartPage from './assets/ts/view/createStartPage';
import View from './assets/ts/view/view';

function startApp(): void {
  const btnsArea: HTMLDivElement = <HTMLDivElement> document.querySelector('.view-btns');
  const view = new View();
  const elements = new Elements();

  function changeView(evt: Event) {
    const target: HTMLButtonElement = <HTMLButtonElement> evt.target;
    if (target.localName === 'button') {
      const viewName = target.innerText;
      view.drawView(viewName);
    }
  }

  function createCar(event: Event) {
    event.preventDefault();
    const api = new Api();
    const form: HTMLFormElement = <HTMLFormElement> event.target;
    const name: string = form.carName.value;
    const color: string = form.carColor.value;
    api.newCar(name, color);
    view.drawView('Garage');
  }

  view.drawView('Garage');
  btnsArea.addEventListener('click', changeView);

  const createForm: HTMLFormElement = <HTMLFormElement> elements.getCreateCarForm();

  createForm.addEventListener('submit', createCar);
}

createStartPage();

document.addEventListener('DOMContentLoaded', startApp);
