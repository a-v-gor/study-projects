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

  function enableDisableBtn(btnElem: HTMLButtonElement, meth: string) {
    const btn = btnElem;
    if (meth === 'disable') {
      btn.setAttribute('disabled', '');
    } else if (meth === 'enable') {
      btn.removeAttribute('disabled');
    }
  }

  async function checkPagination() {
    await view.setNumOfCars();
    const carsNumElem: HTMLSpanElement = <HTMLSpanElement> document.getElementById('cars-num-text');
    const carsNum: number = +carsNumElem.innerText;
    const pageNumElem: HTMLSpanElement = <HTMLSpanElement> document.getElementById('page-cars-num');
    const pageNum: number = +pageNumElem.innerText;
    const prevBtn: HTMLButtonElement = <HTMLButtonElement>document.querySelector('.cars__btn-prev');
    const nextBtn: HTMLButtonElement = <HTMLButtonElement>document.querySelector('.cars__btn-next');

    if (pageNum === 1) {
      enableDisableBtn(prevBtn, 'disable');
    } else {
      enableDisableBtn(prevBtn, 'enable');
    }
    if (pageNum >= Math.ceil(carsNum / 7)) {
      enableDisableBtn(nextBtn, 'disable');
    } else {
      enableDisableBtn(nextBtn, 'enable');
    }
  }

  async function removeCar(id: number): Promise<void> {
    await api.removeCar(id);
    view.drawCars();
    view.setNumOfCars();
    checkPagination();
  }

  function checkSelectCar(evt: Event): void {
    const target: HTMLButtonElement = <HTMLButtonElement> evt.target;
    if (target.localName === 'button') {
      const carSection: HTMLElement = <HTMLElement> target.closest('.car-block');
      const carId: number = +carSection.id;
      if (target.className === 'car-block__select') {
        selectCar(carId);
      } else if (target.className === 'car-block__remove') {
        removeCar(carId);
      }
    }
  }

  function addRemListenSelectCar(meth: string): void {
    const carsList = <HTMLDivElement>document.querySelector('.cars__list');
    if (meth === 'add') {
      carsList.addEventListener('click', checkSelectCar);
    } else if (meth === 'remove') {
      carsList.removeEventListener('click', checkSelectCar);
    }
  }

  async function createCar(event: Event): Promise<void> {
    event.preventDefault();
    const form: HTMLFormElement = <HTMLFormElement> event.target;
    const name: string = form.carName.value;
    const color: string = form.carColor.value;
    await api.newCar(name, color);
    view.drawCars();
    view.setNumOfCars();
    form.carName.value = '';
    form.carColor.value = '#ff0000';
    checkPagination();
  }

  async function updateCar(event: Event): Promise<void> {
    event.preventDefault();
    const form: HTMLFormElement = <HTMLFormElement> event.target;
    const name: string = form.carName.value;
    const color: string = form.carColor.value;
    const id: number = form.carId.value;
    await api.updCar(name, color, id);
    view.drawCars();
    form.carId.value = '';
    form.carName.value = '';
    form.carColor.value = '#ff0000';
  }

  function changePageNum(event: Event): void {
    const pressedBtn: HTMLButtonElement = <HTMLButtonElement>event.target;
    if (pressedBtn.localName === 'button') {
      const pageNumElem: HTMLSpanElement = <HTMLSpanElement> document.getElementById('page-cars-num');
      const pageNum = +pageNumElem.innerText;
      if (pressedBtn.className === 'cars__btn-next') {
        pageNumElem.innerText = String(pageNum + 1);
      } else if (pressedBtn.className === 'cars__btn-prev') {
        pageNumElem.innerText = String(pageNum - 1);
      }
      view.drawCars();
      checkPagination();
    }
  }

  function addRemListenPaginBtns(meth: string):void {
    const paginBtns: HTMLDivElement = <HTMLDivElement> document.querySelector('.cars__btns');
    if (meth === 'add') {
      paginBtns.addEventListener('click', changePageNum);
    } else if (meth === 'remove') {
      paginBtns.removeEventListener('click', changePageNum);
    }
  }

  async function returnGarageView(): Promise<void> {
    view.drawView('Garage');
    checkPagination();
    addRemFormListener('add', 'create-car', createCar);
    addRemFormListener('add', 'update-car', updateCar);
    addRemListenSelectCar('add');
    addRemListenPaginBtns('add');
  }

  function changeView(vName: string): void {
    if (vName === 'Garage') {
      returnGarageView();
    } else if (vName === 'Winners') {
      addRemFormListener('remove', 'create-car', createCar);
      addRemFormListener('remove', 'update-car', updateCar);
      addRemListenSelectCar('remove');
      addRemListenPaginBtns('remove');
      view.drawView(vName);
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
