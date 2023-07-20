import './assets/scss/style.scss';

import Api from './assets/ts/api';
import createStartPage from './assets/ts/view/createStartPage';
import View from './assets/ts/view/view';

function startApp(): void {
  const btnsArea: HTMLDivElement = <HTMLDivElement> document.querySelector('.view-btns');
  const view = new View(document);

  async function createCar(event: Event) {
    event.preventDefault();
    const api = new Api();
    const form: HTMLFormElement = <HTMLFormElement> event.target;
    const name: string = form.carName.value;
    const color: string = form.carColor.value;
    await api.newCar(name, color);
    await view.drawCars();
    form.carName.value = '';
    form.carColor.value = '#ff0000';
  }

  function addListenerCreateCar() {
    const createForm = document.getElementById('create-car');
    if (createForm !== null) {
      createForm.addEventListener('submit', createCar);
    }
  }

  function changeView(vName: string) {
    view.drawView(vName);
    if (vName === 'Garage') {
      addListenerCreateCar();
    } else if (vName === 'Winners') {
      const createForm = document.getElementById('create-car');
      if (createForm !== null) {
        createForm.removeEventListener('submit', createCar);
      }
    }
  }

  function checkChangeView(evt: Event) {
    const target: HTMLButtonElement = <HTMLButtonElement> evt.target;
    if (target.localName === 'button') {
      const viewName = target.innerText;
      changeView(viewName);
    }
  }

  view.drawView('Garage');
  addListenerCreateCar();
  btnsArea.addEventListener('click', checkChangeView);
}

createStartPage();

document.addEventListener('DOMContentLoaded', startApp);
