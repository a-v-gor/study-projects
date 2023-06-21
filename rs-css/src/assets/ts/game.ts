export default class Game {
  table: HTMLElement;

  constructor() {
    this.table = <HTMLElement>document.querySelector('.game-field__table');
  }

  clearTable(): void {
    this.table.innerHTML = '';
  }

  addPlate(): void {
    const plate = document.createElement('div');
    plate.classList.add('plate');
    this.table.appendChild(plate);
  }
}