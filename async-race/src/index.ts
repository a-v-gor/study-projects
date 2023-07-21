import './assets/scss/style.scss';
import Api from './assets/ts/api';
import ICar from './assets/ts/iCar';

import createStartPage from './assets/ts/view/createStartPage';
import View from './assets/ts/view/view';

function startApp(): void {
  const btnsArea: HTMLDivElement = <HTMLDivElement> document.querySelector('.view-btns');
  const view = new View(document);
  const api: Api = new Api();

  function addRemFormListener(
    meth: string,
    formId: string,
    callback: (event: Event) => Promise<void>,
  ) {
    const form = document.getElementById(formId);
    if (form !== null) {
      if (meth === 'add') {
        form.addEventListener('submit', callback);
      } else if (meth === 'remove') {
        form.removeEventListener('submit', callback);
      }
    }
  }

  async function selectCar(id: number): Promise<void> {
    const car: ICar = await api.getCar(id);
    const updForm: HTMLFormElement = <HTMLFormElement> document.getElementById('update-car');
    updForm.carName.value = car.name;
    updForm.carColor.value = car.color;
    updForm.carId.value = car.id;
  }

  function checkIfSelect(evt: Event): void {
    const target: HTMLButtonElement = <HTMLButtonElement> evt.target;
    const carSection: HTMLElement = <HTMLElement> target.closest('.car-block');
    const carId:string = carSection.id;
    if (target.className === 'car-block__select') {
      selectCar(+carId);
    }
  }

  function addListenSelectCar(): void {
    const carsList = <HTMLDivElement>document.querySelector('.cars__list');
    carsList.addEventListener('click', checkIfSelect);
  }

  async function createCar(event: Event): Promise<void> {
    event.preventDefault();
    const form: HTMLFormElement = <HTMLFormElement> event.target;
    const name: string = form.carName.value;
    const color: string = form.carColor.value;
    await api.newCar(name, color);
    view.drawCars();
    form.carName.value = '';
    form.carColor.value = '#ff0000';
  }

  async function updateCar(event: Event): Promise<void> {
    event.preventDefault();
    const form: HTMLFormElement = <HTMLFormElement> event.target;
    const name: string = form.carName.value;
    const color: string = form.carColor.value;
    const id: string = form.carId.value;
    await api.updCar(name, color, id);
    view.drawCars();
    form.carName.value = '';
    form.carColor.value = '#ff0000';
  }

  function returnGarageView(): void {
    view.drawView('Garage');
    addRemFormListener('add', 'create-car', createCar);
    addListenSelectCar();
    addRemFormListener('add', 'update-car', updateCar);
  }

  function changeView(vName: string): void {
    if (vName === 'Garage') {
      returnGarageView();
    } else if (vName === 'Winners') {
      view.drawView(vName);
      addRemFormListener('remove', 'create-car', createCar);
      addRemFormListener('add', 'update-car', updateCar);
    }
  }

  function checkChangeView(evt: Event): void {
    const target: HTMLButtonElement = <HTMLButtonElement> evt.target;
    if (target.localName === 'button') {
      const viewName = target.innerText;
      const pageTitle = <HTMLHeadElement>document.querySelector('.page-info__title');
      const currentView = pageTitle.textContent;
      if (viewName !== currentView) {
        changeView(viewName);
      }
    }
  }

  returnGarageView();
  btnsArea.addEventListener('click', checkChangeView);
}

createStartPage();

document.addEventListener('DOMContentLoaded', startApp);
