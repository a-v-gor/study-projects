import returnGameData from './returnGameData';
import ILevel from './ILevel';

const gameData: ILevel[] = returnGameData();

export default class Game {
  table: HTMLElement;

  constructor() {
    this.table = <HTMLElement>document.querySelector('.game-field__table');
  }

  clearTable(): void {
    this.table.innerHTML = '';
  }

  addObjectToTable(strClasslist: string): void {
    const newObject = document.createElement('div');
    newObject.classList.add(strClasslist);
    this.table.appendChild(newObject);
  }

  addLevelDescription(num: number) {
    const descriptionBlock: HTMLElement = <HTMLElement> document.querySelector('.game-field__task-text');
    descriptionBlock.innerText = gameData[num].description;
  }

  returnHTML(num: number) {
    const tagsArr = [];
    gameData[num].tags.forEach((item) => {
      tagsArr.push(item.tag);
    });
    
  }

  addCodeToEditor(num: number) {
    const firstString = '&lt;div class = "table"&gt;<br>';
    const lastString = '&lt;/div&gt;';
    const middleString = this.returnHTML(num);
  }

  drawLevel(numOfLevel: number) {
    this.addLevelDescription(numOfLevel);
    gameData[numOfLevel].tags.forEach((i) => {
      this.addObjectToTable(i.tag);
    });
    this.addCodeToEditor(numOfLevel);
  }
}