import './assets/scss/style.scss';
import Api from './assets/ts/api';
import ICar from './assets/ts/iCar';
import createStartPage from './assets/ts/view/createStartPage';
import View from './assets/ts/view/view';

type CallbackType = (() => Promise<void>) | ((event: Event) => void);

function startApp(): void {
  const btnsArea: HTMLDivElement = <HTMLDivElement> document.querySelector('.view-btns');
  const view = new View(document);
  const api: Api = new Api();

  function enableDisableBtn(elem: HTMLElement, meth: string) {
    const el = elem;
    if (meth === 'disable') {
      el.setAttribute('disabled', '');
    } else if (meth === 'enable') {
      el.removeAttribute('disabled');
    }
  }

  function checkUpdCar() {
    const updForm: HTMLFormElement = <HTMLFormElement> document.getElementById('update-car');
    const inputId: HTMLInputElement = updForm.carId;
    const inputName: HTMLInputElement = updForm.carName;
    const inputColor: HTMLInputElement = updForm.carColor;
    const inputSubmit: HTMLInputElement = <HTMLInputElement>updForm.querySelector('.set-car__button');
    if (!inputId.value.length) {
      enableDisableBtn(inputName, 'disable');
      enableDisableBtn(inputColor, 'disable');
      enableDisableBtn(inputSubmit, 'disable');
    } else {
      enableDisableBtn(inputName, 'enable');
      enableDisableBtn(inputColor, 'enable');
      enableDisableBtn(inputSubmit, 'enable');
    }
  }

  async function selectCar(id: number): Promise<void> {
    const car: ICar = await api.getCar(id);
    const updForm: HTMLFormElement = <HTMLFormElement> document.getElementById('update-car');
    updForm.carName.value = car.name;
    updForm.carColor.value = car.color;
    updForm.carId.value = car.id;
    checkUpdCar();
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
    checkUpdCar();
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

  async function generateCars() {
    const carBrands = ['Audi', 'BMW', 'Chevrolet', 'Ford', 'Geely', 'Haval', 'Honda', 'Hyundai', 'Kia', 'Lada', 'Maserati', 'Mazda', 'Mercedes', 'Nissan', 'Porsche', 'Renault', 'Skoda', 'Toyota', 'Volkswagen', 'УАЗ'];
    const carModels = ['Atlas Pro', 'Aveo', 'Ceed', 'Coolray', 'Creta', 'Cruze', 'Dargo', 'Duster', 'Elantra', 'Focus', 'GLE', 'Ghibli', 'Granta', 'Jolion', 'Kuga', 'Largus', 'Logan', 'Niva', 'Polo', 'Q6', 'RAV4', 'Rapid', 'Rio', 'Rio', 'S-Класс', 'S40', 'Seltos', 'Solaris', 'Sonata', 'Sportage', 'Vesta', 'X-Trail', 'X7', 'Патриот'];

    function returnRandomElem(arr: string[]): string {
      const randomNum = Math.floor(Math.random() * (arr.length));
      return arr[randomNum];
    }

    function returnRandColor() {
      function returnRandomNumColor() {
        const result = Math.floor(Math.random() * 256).toString(16);
        return (result.length < 2) ? `0${result}` : result;
      }
      let resColor = '#';
      for (let i = 0; i < 3; i += 1) {
        resColor += returnRandomNumColor();
      }
      return resColor;
    }

    const results = [];

    for (let i = 0; i < 100; i += 1) {
      const carName = `${returnRandomElem(carBrands)} ${returnRandomElem(carModels)}`;
      const carColor = returnRandColor();
      results.push(api.newCar(carName, carColor));
    }
    await Promise.all(results);
    view.drawCars();
    view.setNumOfCars();
    checkPagination();
  }

  function addRemElemListen(
    meth: string,
    elemSelector: string,
    event: string,
    callback: CallbackType,
  ): void {
    const elemToListen: HTMLElement = <HTMLElement>document.querySelector(`${elemSelector}`);
    if (meth === 'add') {
      elemToListen.addEventListener(event, callback);
    } else if (meth === 'remove') {
      elemToListen.removeEventListener(event, callback);
    }
  }

  async function returnGarageView(): Promise<void> {
    view.drawView('Garage');
    checkPagination();
    checkUpdCar();
    addRemElemListen('add', '#create-car', 'submit', createCar);
    addRemElemListen('add', '#update-car', 'submit', updateCar);
    addRemElemListen('add', '.cars__list', 'click', checkSelectCar);
    addRemElemListen('add', '.cars__btns', 'click', changePageNum);
    addRemElemListen('add', '.set-car__btn-generate', 'click', generateCars);
  }

  function changeView(vName: string): void {
    if (vName === 'Garage') {
      returnGarageView();
    } else if (vName === 'Winners') {
      addRemElemListen('remove', '#create-car', 'submit', createCar);
      addRemElemListen('remove', '#update-car', 'submit', updateCar);
      addRemElemListen('remove', '.cars__list', 'click', checkSelectCar);
      addRemElemListen('remove', '.cars__btns', 'click', changePageNum);
      addRemElemListen('remove', '.set-car__btn-generate', 'click', generateCars);
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
