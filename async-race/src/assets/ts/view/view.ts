import Api from '../api';
import State from '../state/state';
import viewsHtml from './viewsHtml';

export default class View {
  api:Api;

  mainWrap: HTMLDivElement;

  state: State;

  constructor() {
    this.api = new Api();
    this.mainWrap = <HTMLDivElement> document.querySelector('.main__wrapper');
    this.state = new State();
  }

  clearPage(): void {
    this.mainWrap.innerHTML = '';
  }

  async setNumOfCars(): Promise<void> {
    const numOfCars = await this.api.getNum('/garage?_limit=10');
    const numOfCarsText: HTMLSpanElement = <HTMLSpanElement> document.getElementById('cars-num-text');
    numOfCarsText.innerText = numOfCars;
  }

  async setNumOfWinners() {
    const numOfWinners = await this.api.getNum('/winners?_limit=7');
    const numOfWinnersText: HTMLSpanElement = <HTMLSpanElement> document.getElementById('winners-num-text');
    numOfWinnersText.innerText = numOfWinners;
  }

  drawView(viewName: string): void {
    if (viewName === 'Garage') {
      this.clearPage();
      this.mainWrap.innerHTML = viewsHtml.garageViewHtml;
      this.setNumOfCars();
      this.state.loadGarageState();
    } else if (viewName === 'Winners') {
      this.state.saveGarageState();
      this.clearPage();
      this.mainWrap.innerHTML = viewsHtml.winnersViewHtml;
      this.setNumOfWinners();
    }
  }
}
