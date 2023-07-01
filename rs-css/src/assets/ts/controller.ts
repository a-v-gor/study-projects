import returnGameData from './returnGameData';
import ILevel from './ILevel';
import Game from './game';

export default class Controller {
  game: Game;
  gameData: ILevel[];

  constructor () {
    this.gameData = returnGameData();
    this.game = new Game;
  }

  selectLevel(num: number): void {
    const levelListItem: HTMLLIElement = <HTMLLIElement> document.querySelectorAll('.levels__list-item')[num];

    this.game.clearLevel();
    this.game.drawLevel(this.gameData[num]);
    levelListItem.classList.add('levels__list-item_active');
    this.game.highlightObj();
  }
}