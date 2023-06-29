import Game from './game';
import returnGameData from './gameData';
import IGameObj from './IGameObj';

const gameData: IGameObj[][] = returnGameData();

export default class App {
  game: Game;
  constructor() {
    this.game = new Game;
  }

  public start(): void {
    this.game.clearTable();
    gameData[0].forEach((i) => {
      this.game.addObject(i.tag);
    })    
  }
}
