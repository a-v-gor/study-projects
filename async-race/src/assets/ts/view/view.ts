import Api from '../api';
import ICar from '../iCar';
import State from '../state/state';
import returnCar from './returnCar';
import viewsHtml from './viewsHtml';

export default class View {
  api:Api;

  mainWrap: HTMLDivElement;

  state: State;

  document: Document;

  constructor() {
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
    const cars: Array<ICar> = await this.api.getCars();
    const carsList: HTMLDivElement = <HTMLDivElement> document.querySelector('.cars__list');
    carsList.innerHTML = '';
    cars.forEach((i) => {
      carsList.innerHTML += returnCar(i);
    });
  }

  drawView(viewName: string): void {
    if (viewName === 'Garage') {
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
    }
  }

  createStartPage(): void {
    const code = `
    <header class="header">
      <div class="wrapper header__wrapper">
        <h1 class="title header__title">Async Race</h1>
        <div class="view-btns">
          <button class="view-btns__btn">Garage</button>
          <button class="view-btns__btn">Winners</button>
        </div>
      </div>
    </header>
    <main class="main">
      <div class="wrapper main__wrapper">
      </div>
    </main>
    <footer class="footer">
      <div class="wrapper">
      </div>
    </footer>`;
    this.document.body.innerHTML = code;
  }
}
