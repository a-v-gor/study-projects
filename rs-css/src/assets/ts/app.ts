import Game from './game';

export default class App {
  game: Game;
  constructor() {
    this.game = new Game;
  }

  public start(): void {
    this.game.clearTable();
    this.game.drawLevel(0);
    this.game.lightCodeInEditor();
  }
}
