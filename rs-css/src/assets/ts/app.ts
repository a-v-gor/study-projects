import Game from './game';

export default class App {
  game: Game;
  constructor() {
    this.game = new Game;
  }

  public start(): void {
    this.game.clearTable();
    for(let i = 0; i < 2; i += 1){
      this.game.addPlate();
    }
  }
}