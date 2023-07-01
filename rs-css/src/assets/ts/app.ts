import Game from './game';
import returnGameData from './returnGameData';
import ILevel from './ILevel';
import Controller from './controller';

export default class App {
  game: Game;
  gameData: ILevel[];
  controller: Controller;
  levelsList: HTMLUListElement;

  constructor() {
    this.game = new Game;
    this.gameData = returnGameData();
    this.controller = new Controller;
    this.levelsList = <HTMLUListElement> document.querySelector('.levels__list');
  }

  public start(): void {
    this.controller.selectLevel(0);
    this.levelsList.addEventListener('click', (e: MouseEvent) => {
      const liElem: HTMLLIElement = <HTMLLIElement> e.target;
      this.controller.selectLevel(+liElem.innerText - 1);
    })
  }
}