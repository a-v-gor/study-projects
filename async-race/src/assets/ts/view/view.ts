import Api from '../api';
import ICar from '../iCar';
import State from '../state/state';
import IWinner from './iWinner';
import returnCar from './returnCar';
import returnCarImg from './returnCarImg';
import viewsHtml from './viewsHtml';

export default class View {
  api:Api;

  mainWrap: HTMLDivElement;

  state: State;

  document: Document;

  constructor(document: Document) {
    this.api = new Api();
    this.mainWrap = <HTMLDivElement> document.querySelector('.main__wrapper');
    this.state = new State();
    this.document = document;
  }

  clearPage(): void {
    this.mainWrap.innerHTML = '';
  }

  async setNumOfCars(): Promise<void> {
    const numOfCars = await this.api.getNum('/garage?_limit=0');
    const numOfCarsText: HTMLSpanElement = <HTMLSpanElement> document.getElementById('cars-num-text');
    numOfCarsText.innerText = numOfCars;
  }

  async setNumOfWinners() {
    const numOfWinners = await this.api.getNum('/winners?_limit=0');
    const numOfWinnersText: HTMLSpanElement = <HTMLSpanElement> document.getElementById('winners-num-text');
    numOfWinnersText.innerText = numOfWinners;
  }

  async drawCars(): Promise<void> {
    const pageNumElem: HTMLSpanElement = <HTMLSpanElement> this.document.getElementById('page-cars-num');
    const pageNum = +pageNumElem.innerText;
    const cars: Array<ICar> = await this.api.getCars(pageNum);
    const carsList: HTMLDivElement = <HTMLDivElement> document.querySelector('.cars__list');
    carsList.innerHTML = '';
    cars.forEach((i) => {
      carsList.innerHTML += returnCar(i);
    });
  }

  async addRawToTable(obj: IWinner, table: HTMLElement) {
    const car: ICar = await this.api.getCar(obj.id);
    const carImg = returnCarImg(car.color);
    const res = table;
    res.innerHTML += `
      <div class="win-table__td">${obj.id}</div>
      <div class="win-table__td">${carImg}</div>
      <div class="win-table__td">${car.name}</div>
      <div class="win-table__td">${obj.wins}</div>
      <div class="win-table__td">${obj.time}</div>`;
  }

  async drawWinnersTable(sortStr = '') {
    let str = sortStr;
    const pageNumElem: HTMLSpanElement = <HTMLSpanElement> this.document.getElementById('page-winners-num');
    const pageNum = +pageNumElem.innerText;
    const tableWrapper: HTMLElement = <HTMLElement> this.document.querySelector('.win-table__body-wrap');
    const table = document.createElement('div');
    table.classList.add('winners__table', 'win-table-body');
    tableWrapper.innerHTML = '';
    const activeArr: HTMLSpanElement = <HTMLSpanElement>document.querySelector('.sort-active');
    if (activeArr !== null) {
      str = activeArr.id;
    }
    let winnersInfo;
    if (str.length) {
      let sort = '';
      let order = '';
      [sort, order] = str.split('-');
      winnersInfo = await this.api.getSortedWinners(pageNum, sort, order);
    } else {
      winnersInfo = await this.api.getWinners(pageNum);
    }
    // eslint-disable-next-line no-restricted-syntax
    for (const winner of winnersInfo) {
      // eslint-disable-next-line no-await-in-loop
      await this.addRawToTable(winner, table);
    }
    tableWrapper.appendChild(table);
    if (sortStr.length) {
      const arrow: HTMLSpanElement = <HTMLSpanElement> this.document.getElementById(sortStr);
      arrow.classList.add('sort-active');
    }
  }

  drawView(viewName: string): void {
    if (viewName === 'Garage') {
      if (this.document.getElementById('winners-num-text') !== null) {
        this.state.saveWinnersState();
      }
      this.clearPage();
      this.mainWrap.innerHTML = viewsHtml.garageViewHtml;
      this.setNumOfCars();
      this.state.loadGarageState();
      this.drawCars();
    } else if (viewName === 'Winners') {
      this.state.saveGarageState();
      this.clearPage();
      this.mainWrap.innerHTML = viewsHtml.winnersViewHtml;
      this.setNumOfWinners();
      this.state.loadWinnersState();
      this.drawWinnersTable();
    }
  }

  disableCreateUpdCars() {
    const createCarForm: HTMLFormElement = <HTMLFormElement> this.document.getElementById('create-car');
    const inputName: HTMLInputElement = createCarForm.carName;
    const inputColor: HTMLInputElement = createCarForm.carColor;
    const inputSubmit: HTMLInputElement = <HTMLInputElement>createCarForm.querySelector('.set-car__button');
    const generateCarBtn: HTMLButtonElement = <HTMLButtonElement> this.document.querySelector('.set-car__btn-generate');
    inputName.setAttribute('disabled', '');
    inputColor.setAttribute('disabled', '');
    inputSubmit.setAttribute('disabled', '');
    generateCarBtn.setAttribute('disabled', '');
  }

  enableCreateUpdCars() {
    const createCarForm: HTMLFormElement = <HTMLFormElement> this.document.getElementById('create-car');
    const inputName: HTMLInputElement = createCarForm.carName;
    const inputColor: HTMLInputElement = createCarForm.carColor;
    const inputSubmit: HTMLInputElement = <HTMLInputElement>createCarForm.querySelector('.set-car__button');
    const generateCarBtn: HTMLButtonElement = <HTMLButtonElement> this.document.querySelector('.set-car__btn-generate');
    inputName.removeAttribute('disabled');
    inputColor.removeAttribute('disabled');
    inputSubmit.removeAttribute('disabled');
    generateCarBtn.removeAttribute('disabled');
  }

  async showWinner(id: number) {
    const winnerBlock: HTMLElement = <HTMLElement> this.document.querySelector('.show-winner-block');
    const winnerNameField: HTMLParagraphElement = <HTMLParagraphElement> winnerBlock.querySelector('.show-winner-block__text');
    const winner: ICar = await this.api.getCar(id);
    const winnerName: string = winner.name;
    winnerNameField.innerText = winnerName;
    winnerBlock.classList.add('show-winner-block_active');
  }

  hideWinner() {
    const winnerBlock: HTMLElement = <HTMLElement> this.document.querySelector('.show-winner-block_active');
    winnerBlock.classList.remove('show-winner-block_active');
  }
}
