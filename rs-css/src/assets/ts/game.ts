export default class Game {
  table: HTMLElement;

  constructor() {
    this.table = <HTMLElement>document.querySelector('.game-field__table');
  }

  clearTable(): void {
    this.table.innerHTML = '';
  }

  addObject(strClasslist: string): void {
    const newObject = document.createElement('div');
    newObject.classList.add(strClasslist);
    this.table.appendChild(newObject);
  }
}