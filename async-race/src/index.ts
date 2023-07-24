import './assets/scss/style.scss';
import Api from './assets/ts/api';
import ICar from './assets/ts/iCar';
import createStartPage from './assets/ts/view/createStartPage';
import IWinner from './assets/ts/view/iWinner';
import View from './assets/ts/view/view';

type CallbackType = (() => Promise<void>) | ((event: Event) => void);

interface IVelocityObj {
  velocity: number,
  distance: number,
}

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

  async function checkGaragePagination() {
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

  async function checkWinnersPagination() {
    await view.setNumOfWinners();
    const winnersNumElem: HTMLSpanElement = <HTMLSpanElement> document.getElementById('winners-num-text');
    const winnersNum: number = +winnersNumElem.innerText;
    const pageNumElem: HTMLSpanElement = <HTMLSpanElement> document.getElementById('page-winners-num');
    const pageNum: number = +pageNumElem.innerText;
    const prevBtn: HTMLButtonElement = <HTMLButtonElement>document.querySelector('.winners__btn-prev');
    const nextBtn: HTMLButtonElement = <HTMLButtonElement>document.querySelector('.winners__btn-next');

    if (pageNum === 1) {
      prevBtn.disabled = true;
    } else {
      prevBtn.disabled = false;
    }
    if (pageNum >= Math.ceil(winnersNum / 10)) {
      nextBtn.disabled = true;
    } else {
      nextBtn.disabled = false;
    }
  }

  async function removeCar(id: number): Promise<void> {
    const getWinner: IWinner = await api.getWinner(id);
    if (getWinner.id) {
      api.removeWinner(id);
    }
    await api.removeCar(id);
    view.drawCars();
    view.setNumOfCars();
    checkGaragePagination();
  }

  function getMoveTime(velocObj: IVelocityObj): number {
    return velocObj.distance / velocObj.velocity;
  }

  function returnPath() {
    const carBlock: HTMLDivElement = <HTMLDivElement>document.querySelector('.car-block__car-wrapper');
    let coeff: number;
    if (carBlock.offsetWidth > 1100) {
      coeff = 0.14;
    } else if (carBlock.offsetWidth > 1000) {
      coeff = 0.16;
    } else if (carBlock.offsetWidth > 900) {
      coeff = 0.19;
    } else if (carBlock.offsetWidth > 800) {
      coeff = 0.2;
    } else if (carBlock.offsetWidth > 700) {
      coeff = 0.23;
    } else if (carBlock.offsetWidth > 600) {
      coeff = 0.28;
    } else {
      coeff = 0.35;
    }
    const path: number = carBlock.offsetWidth - carBlock.offsetWidth * coeff;
    return path;
  }

  function returnPathToMove(driveTime: number): number {
    const path = returnPath();
    const pathToMove: number = (path / driveTime) * 10;
    return pathToMove;
  }

  function moveCar(id: number, pathToMove: number): NodeJS.Timer {
    const path = returnPath();
    const carsection: HTMLElement = <HTMLElement>document.getElementById(String(id));
    const carImg: SVGElement = <SVGElement>carsection.querySelector('svg');
    carImg.style.marginLeft = '0px';
    let margin = 0;

    const timerID = setInterval(() => {
      if (parseInt(carImg.style.marginLeft, 10) < path) {
        margin += pathToMove;
        carImg.style.marginLeft = String(margin).concat('px');
      }
    }, 10);

    return timerID;
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
      if (elemToListen !== undefined) {
        elemToListen.removeEventListener(event, callback);
      }
    }
  }

  async function driveCar(id: number) {
    const changeViewBtns: NodeListOf<HTMLElement> = document.querySelectorAll('.view-btns__btn');
    const carsection: HTMLElement = <HTMLElement>document.getElementById(String(id));
    const carBlock: HTMLDivElement = <HTMLDivElement>carsection.querySelector('.car-block__car-wrapper');
    const velocObj: IVelocityObj = await api.startEngine(id);
    const driveTime: number = getMoveTime(velocObj);
    const carImg: SVGElement = <SVGElement>carsection.querySelector('svg');
    const pathToMove = returnPathToMove(driveTime);
    const raceBtn: HTMLButtonElement = <HTMLButtonElement>document.querySelector('.race-btns__start');
    const startBtn: HTMLButtonElement = <HTMLButtonElement>carBlock.querySelector('.car-block__start');
    const stopBtn: HTMLButtonElement = <HTMLButtonElement>carBlock.querySelector('.car-block__stop');
    const selectBtn: HTMLButtonElement = <HTMLButtonElement>carsection.querySelector('.car-block__select');
    const removeBtn: HTMLButtonElement = <HTMLButtonElement>carsection.querySelector('.car-block__remove');

    enableDisableBtn(raceBtn, 'disable');
    enableDisableBtn(startBtn, 'disable');
    enableDisableBtn(selectBtn, 'disable');
    enableDisableBtn(removeBtn, 'disable');
    changeViewBtns.forEach((i) => enableDisableBtn(i, 'disable'));
    enableDisableBtn(stopBtn, 'enable');
    view.disableCreateUpdCars();

    const timer = moveCar(id, pathToMove);

    async function stopEngine() {
      enableDisableBtn(stopBtn, 'disable');
      const res = await api.stopEngine(id);
      if (res.ok) {
        clearInterval(timer);
        carImg.style.marginLeft = '0px';
        enableDisableBtn(startBtn, 'enable');
        enableDisableBtn(selectBtn, 'enable');
        enableDisableBtn(removeBtn, 'enable');
        enableDisableBtn(raceBtn, 'enable');
        changeViewBtns.forEach((i) => enableDisableBtn(i, 'enable'));
        view.enableCreateUpdCars();
      }
    }

    stopBtn.addEventListener('click', stopEngine);
    try {
      await api.drive(id);
      clearInterval(timer);
    } catch {
      clearInterval(timer);
    }
  }

  async function Race(): Promise<void> {
    const changeViewBtns: NodeListOf<HTMLElement> = document.querySelectorAll('.view-btns__btn');
    const startBtn: HTMLButtonElement = <HTMLButtonElement> document.querySelector('.race-btns__start');
    const resetBtn: HTMLButtonElement = <HTMLButtonElement> document.querySelector('.race-btns__reset');
    const prevBtn: HTMLButtonElement = <HTMLButtonElement> document.querySelector('.cars__btn-prev');
    const nextBtn: HTMLButtonElement = <HTMLButtonElement> document.querySelector('.cars__btn-next');
    const selectBtns: NodeListOf<HTMLElement> = document.querySelectorAll('.car-block__select');
    const removeBtns: NodeListOf<HTMLElement> = document.querySelectorAll('.car-block__remove');
    const startBtns: NodeListOf<HTMLElement> = document.querySelectorAll('.car-block__start');
    const cars = document.querySelectorAll('.cars__car-block');
    const carsIds: number[] = [];
    cars.forEach((i) => carsIds.push(+i.id));
    const arrPromStartCars = carsIds.map((i) => api.startEngine(i));
    enableDisableBtn(startBtn, 'disable');
    const arrVeloc = await Promise.all(arrPromStartCars);
    const arrTime = arrVeloc.map((i) => getMoveTime(i));
    const arrPathsToMove = arrTime.map((i) => returnPathToMove(i));
    const arrTimers: NodeJS.Timeout[] = [];
    const arrRaces: Promise<Response>[] = [];
    carsIds.forEach((i, idx) => {
      const timer: NodeJS.Timer = moveCar(i, arrPathsToMove[idx]);
      const raceObj = api.drive(i);
      arrRaces.push(raceObj);
      arrTimers.push(timer);
    });

    const startTime = Date.now();
    view.disableCreateUpdCars();
    enableDisableBtn(prevBtn, 'disable');
    enableDisableBtn(nextBtn, 'disable');
    selectBtns.forEach((i) => enableDisableBtn(i, 'disable'));
    removeBtns.forEach((i) => enableDisableBtn(i, 'disable'));
    startBtns.forEach((i) => enableDisableBtn(i, 'disable'));
    changeViewBtns.forEach((i) => enableDisableBtn(i, 'disable'));

    arrRaces.map(async (i, idx) => {
      try {
        await i;
        clearInterval(arrTimers[idx]);
      } catch {
        clearInterval(arrTimers[idx]);
      }
    });

    const winnerRes = await Promise.any(arrRaces);
    const endTime = Date.now();
    const winTime = +((endTime - startTime) / 1000).toFixed(2);
    if (winnerRes !== undefined) {
      const winnerId: string = <string>winnerRes.url.match(/=\d+/)?.toString().slice(1);
      const getWinner: IWinner = await api.getWinner(+winnerId);
      if (getWinner.id) {
        api.updWinner(+winnerId, getWinner.wins + 1, Math.min(getWinner.time, winTime));
      } else {
        api.newWinner(+winnerId, 1, winTime);
      }
      await view.showWinner(+winnerId);
    }
    await Promise.allSettled(arrRaces);
    enableDisableBtn(resetBtn, 'enable');

    function stopRace() {
      arrTimers.forEach((i) => clearInterval(i));
      carsIds.forEach((i) => {
        const carsection: HTMLElement = <HTMLElement> document.getElementById(String(i));
        const carImg: SVGElement = <SVGElement> carsection.querySelector('svg');
        carImg.style.marginLeft = '0px';
      });
      view.enableCreateUpdCars();
      enableDisableBtn(resetBtn, 'disable');
      enableDisableBtn(startBtn, 'enable');
      checkGaragePagination();
      selectBtns.forEach((i) => enableDisableBtn(i, 'enable'));
      removeBtns.forEach((i) => enableDisableBtn(i, 'enable'));
      startBtns.forEach((i) => enableDisableBtn(i, 'enable'));
      changeViewBtns.forEach((i) => enableDisableBtn(i, 'enable'));
      addRemElemListen('remove', '.race-btns__reset', 'click', stopRace);
      view.hideWinner();
    }

    addRemElemListen('add', '.race-btns__reset', 'click', stopRace);
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
      } else if (target.className === 'car-block__start') {
        driveCar(carId);
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
    checkGaragePagination();
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

  function changeGaragePageNum(event: Event): void {
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
      checkGaragePagination();
    }
  }

  function changeWinnersPageNum(event: Event): void {
    const pressedBtn: HTMLButtonElement = <HTMLButtonElement>event.target;
    if (pressedBtn.localName === 'button') {
      const pageNumElem: HTMLSpanElement = <HTMLSpanElement> document.getElementById('page-winners-num');
      const pageNum = +pageNumElem.innerText;
      if (pressedBtn.className === 'winners__btn-next') {
        pageNumElem.innerText = String(pageNum + 1);
      } else if (pressedBtn.className === 'winners__btn-prev') {
        pageNumElem.innerText = String(pageNum - 1);
      }
      view.drawWinnersTable();
      checkWinnersPagination();
    }
  }

  async function generateCars() {
    const carBrands = ['Audi', 'BMW', 'Chevrolet', 'Ford', 'Geely', 'Haval', 'Honda', 'Hyundai', 'Kia', 'Lada', 'Maserati', 'Mazda', 'Mercedes', 'Nissan', 'Porsche', 'Renault', 'Skoda', 'Toyota', 'Volkswagen', 'Zaporozhets', 'УАЗ'];
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
    checkGaragePagination();
  }

  function returnGarageView(): void {
    view.drawView('Garage');
    checkGaragePagination();
    checkUpdCar();
    addRemElemListen('add', '#create-car', 'submit', createCar);
    addRemElemListen('add', '#update-car', 'submit', updateCar);
    addRemElemListen('add', '.cars__list', 'click', checkSelectCar);
    addRemElemListen('add', '.cars__btns', 'click', changeGaragePageNum);
    addRemElemListen('add', '.set-car__btn-generate', 'click', generateCars);
    addRemElemListen('add', '.race-btns__start', 'click', Race);
  }

  function sortWinners(evt: Event) {
    const oldActive: HTMLSpanElement = <HTMLSpanElement>document.querySelector('.sort-active');
    if (oldActive !== null) {
      oldActive.classList.remove('sort-active');
    }
    const arrow: HTMLSpanElement = <HTMLSpanElement> evt.target;
    if (arrow.localName === 'span') {
      view.drawWinnersTable(arrow.id);
    }
  }

  function returnWinnersView() {
    addRemElemListen('remove', '#create-car', 'submit', createCar);
    addRemElemListen('remove', '#update-car', 'submit', updateCar);
    addRemElemListen('remove', '.cars__list', 'click', checkSelectCar);
    addRemElemListen('remove', '.cars__btns', 'click', changeGaragePageNum);
    addRemElemListen('remove', '.set-car__btn-generate', 'click', generateCars);
    view.drawView('Winners');
    addRemElemListen('add', '.winners__btns', 'click', changeWinnersPageNum);
    addRemElemListen('add', '.winners__table-wrap', 'click', sortWinners);
    checkWinnersPagination();
  }

  function changeView(vName: string): void {
    if (vName === 'Garage') {
      addRemElemListen('remove', '.winners__btns', 'click', changeWinnersPageNum);
      addRemElemListen('remove', '.winners__table-wrap', 'click', sortWinners);
      returnGarageView();
    } else if (vName === 'Winners') {
      returnWinnersView();
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
